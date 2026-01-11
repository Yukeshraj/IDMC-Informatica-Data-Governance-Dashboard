import { useState } from 'react';
import { Database, GitBranch, BarChart3, FileText, AlertCircle, Shield } from 'lucide-react';

interface NodeData {
  id: string;
  name: string;
  type: string;
  owner: string;
  classification: string;
  downstreamImpact: string[];
  metadata: {
    lastUpdated: string;
    records: string;
    sensitivity: string;
  };
}

export function LineageVisualization() {
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

  const nodes: Record<string, NodeData> = {
    'source-crm': {
      id: 'source-crm',
      name: 'Salesforce CRM',
      type: 'Source System',
      owner: 'Sales Operations',
      classification: 'Confidential',
      downstreamImpact: ['adls-raw', 'databricks-bronze'],
      metadata: {
        lastUpdated: '2 mins ago',
        records: '2.3M',
        sensitivity: 'PII'
      }
    },
    'source-erp': {
      id: 'source-erp',
      name: 'SAP ERP',
      type: 'Source System',
      owner: 'Finance',
      classification: 'Confidential',
      downstreamImpact: ['adls-raw', 'databricks-bronze'],
      metadata: {
        lastUpdated: '5 mins ago',
        records: '5.7M',
        sensitivity: 'Confidential'
      }
    },
    'adls-raw': {
      id: 'adls-raw',
      name: 'ADLS Raw Zone',
      type: 'Azure Data Lake',
      owner: 'Data Engineering',
      classification: 'Confidential',
      downstreamImpact: ['databricks-bronze'],
      metadata: {
        lastUpdated: '1 min ago',
        records: '8.1M',
        sensitivity: 'PII'
      }
    },
    'databricks-bronze': {
      id: 'databricks-bronze',
      name: 'Bronze Layer',
      type: 'Databricks',
      owner: 'Data Engineering',
      classification: 'Internal',
      downstreamImpact: ['databricks-silver'],
      metadata: {
        lastUpdated: '3 mins ago',
        records: '8.1M',
        sensitivity: 'PII'
      }
    },
    'databricks-silver': {
      id: 'databricks-silver',
      name: 'Silver Layer',
      type: 'Databricks',
      owner: 'Data Engineering',
      classification: 'Internal',
      downstreamImpact: ['databricks-gold'],
      metadata: {
        lastUpdated: '4 mins ago',
        records: '7.9M',
        sensitivity: 'PII'
      }
    },
    'databricks-gold': {
      id: 'databricks-gold',
      name: 'Gold Layer',
      type: 'Databricks',
      owner: 'Analytics Team',
      classification: 'Internal',
      downstreamImpact: ['powerbi', 'tableau'],
      metadata: {
        lastUpdated: '2 mins ago',
        records: '1.2M',
        sensitivity: 'Public'
      }
    },
    'powerbi': {
      id: 'powerbi',
      name: 'Power BI Reports',
      type: 'BI Platform',
      owner: 'Business Analytics',
      classification: 'Public',
      downstreamImpact: [],
      metadata: {
        lastUpdated: '1 min ago',
        records: '50 Reports',
        sensitivity: 'Public'
      }
    },
    'tableau': {
      id: 'tableau',
      name: 'Tableau Dashboards',
      type: 'BI Platform',
      owner: 'Executive Team',
      classification: 'Public',
      downstreamImpact: [],
      metadata: {
        lastUpdated: '2 mins ago',
        records: '32 Dashboards',
        sensitivity: 'Public'
      }
    }
  };

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'Source System': return <Database size={20} className="text-blue-600" />;
      case 'Azure Data Lake': return <FileText size={20} className="text-cyan-600" />;
      case 'Databricks': return <GitBranch size={20} className="text-orange-600" />;
      case 'BI Platform': return <BarChart3 size={20} className="text-purple-600" />;
      default: return <Database size={20} />;
    }
  };

  const getClassificationColor = (classification: string) => {
    switch (classification) {
      case 'Confidential': return 'bg-red-100 text-red-700 border-red-200';
      case 'Internal': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Public': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-6">End-to-End Data Lineage Flow</h3>
        
        <div className="space-y-8">
          {/* Source Systems */}
          <div>
            <div className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wider">Source Systems</div>
            <div className="flex gap-4">
              {['source-crm', 'source-erp'].map(nodeId => (
                <button
                  key={nodeId}
                  onClick={() => setSelectedNode(nodes[nodeId])}
                  className={`flex-1 bg-blue-50 border-2 rounded-lg p-4 hover:shadow-lg transition-all ${
                    selectedNode?.id === nodeId ? 'border-blue-500 shadow-lg' : 'border-blue-200'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {getNodeIcon(nodes[nodeId].type)}
                    <span className="font-medium text-sm">{nodes[nodeId].name}</span>
                  </div>
                  <div className="text-xs text-gray-600">{nodes[nodeId].metadata.records} records</div>
                </button>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-0.5 h-8 bg-gray-300"></div>
          </div>

          {/* Azure Data Lake */}
          <div>
            <div className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wider">Azure Data Lake Storage</div>
            <button
              onClick={() => setSelectedNode(nodes['adls-raw'])}
              className={`w-full bg-cyan-50 border-2 rounded-lg p-4 hover:shadow-lg transition-all ${
                selectedNode?.id === 'adls-raw' ? 'border-cyan-500 shadow-lg' : 'border-cyan-200'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {getNodeIcon(nodes['adls-raw'].type)}
                <span className="font-medium text-sm">{nodes['adls-raw'].name}</span>
              </div>
              <div className="text-xs text-gray-600">{nodes['adls-raw'].metadata.records} records</div>
            </button>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-0.5 h-8 bg-gray-300"></div>
          </div>

          {/* Databricks Layers */}
          <div>
            <div className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wider">Databricks Transformation</div>
            <div className="flex gap-4">
              {['databricks-bronze', 'databricks-silver', 'databricks-gold'].map(nodeId => (
                <button
                  key={nodeId}
                  onClick={() => setSelectedNode(nodes[nodeId])}
                  className={`flex-1 bg-orange-50 border-2 rounded-lg p-4 hover:shadow-lg transition-all ${
                    selectedNode?.id === nodeId ? 'border-orange-500 shadow-lg' : 'border-orange-200'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {getNodeIcon(nodes[nodeId].type)}
                    <span className="font-medium text-sm">{nodes[nodeId].name}</span>
                  </div>
                  <div className="text-xs text-gray-600">{nodes[nodeId].metadata.records} records</div>
                </button>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-0.5 h-8 bg-gray-300"></div>
          </div>

          {/* BI Platforms */}
          <div>
            <div className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wider">BI & Analytics</div>
            <div className="flex gap-4">
              {['powerbi', 'tableau'].map(nodeId => (
                <button
                  key={nodeId}
                  onClick={() => setSelectedNode(nodes[nodeId])}
                  className={`flex-1 bg-purple-50 border-2 rounded-lg p-4 hover:shadow-lg transition-all ${
                    selectedNode?.id === nodeId ? 'border-purple-500 shadow-lg' : 'border-purple-200'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {getNodeIcon(nodes[nodeId].type)}
                    <span className="font-medium text-sm">{nodes[nodeId].name}</span>
                  </div>
                  <div className="text-xs text-gray-600">{nodes[nodeId].metadata.records}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Asset Details & Impact</h3>
        
        {selectedNode ? (
          <div className="space-y-4">
            <div>
              <div className="text-xs text-gray-500 mb-1">Asset Name</div>
              <div className="font-medium text-gray-900">{selectedNode.name}</div>
            </div>

            <div>
              <div className="text-xs text-gray-500 mb-1">Type</div>
              <div className="flex items-center gap-2">
                {getNodeIcon(selectedNode.type)}
                <span className="text-sm text-gray-900">{selectedNode.type}</span>
              </div>
            </div>

            <div>
              <div className="text-xs text-gray-500 mb-1">Business Owner</div>
              <div className="text-sm text-gray-900">{selectedNode.owner}</div>
            </div>

            <div>
              <div className="text-xs text-gray-500 mb-1">Classification</div>
              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${getClassificationColor(selectedNode.classification)}`}>
                <Shield size={12} />
                {selectedNode.classification}
              </span>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="text-xs text-gray-500 mb-2">Metadata</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Last Updated</span>
                  <span className="text-gray-900">{selectedNode.metadata.lastUpdated}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Records</span>
                  <span className="text-gray-900">{selectedNode.metadata.records}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Sensitivity</span>
                  <span className="text-gray-900">{selectedNode.metadata.sensitivity}</span>
                </div>
              </div>
            </div>

            {selectedNode.downstreamImpact.length > 0 && (
              <div className="border-t border-gray-200 pt-4">
                <div className="text-xs text-gray-500 mb-2">Downstream Impact</div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <AlertCircle size={16} className="text-yellow-600 mt-0.5" />
                    <div className="text-xs text-yellow-800">
                      <div className="font-medium mb-1">If this asset fails:</div>
                      <div className="space-y-1">
                        {selectedNode.downstreamImpact.map(impactId => (
                          <div key={impactId}>• {nodes[impactId]?.name || impactId}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <Database size={48} className="mx-auto text-gray-300 mb-3" />
            <p className="text-sm text-gray-500">Select a node to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}