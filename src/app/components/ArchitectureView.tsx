import { Cloud, Database, Boxes, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

export function ArchitectureView() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <h3 className="font-semibold text-gray-900 mb-6">Azure & Databricks Integration Architecture</h3>
        
        <div className="space-y-8">
          {/* Ingestion Layer */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Cloud size={18} className="text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Ingestion Layer</div>
                <div className="text-xs text-gray-500">Source systems to Azure Data Lake</div>
              </div>
              <div className="ml-auto flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full">
                <CheckCircle size={14} className="text-green-600" />
                <span className="text-xs text-green-700 font-medium">Healthy</span>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 pl-10">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4">
                <div className="text-xs text-blue-600 font-medium mb-1">Source Systems</div>
                <div className="text-sm text-gray-900 font-medium">Salesforce CRM</div>
                <div className="text-xs text-gray-600 mt-2">2.3M records</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4">
                <div className="text-xs text-blue-600 font-medium mb-1">Source Systems</div>
                <div className="text-sm text-gray-900 font-medium">SAP ERP</div>
                <div className="text-xs text-gray-600 mt-2">5.7M records</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200 rounded-lg p-4 col-span-2">
                <div className="text-xs text-cyan-600 font-medium mb-1">Azure Data Lake Storage</div>
                <div className="text-sm text-gray-900 font-medium">ADLS Gen2 Raw Zone</div>
                <div className="text-xs text-gray-600 mt-2">8.1M records • Container: raw-data</div>
              </div>
            </div>
          </div>

          {/* Flow Arrow */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-24 h-0.5 bg-gray-300"></div>
              <ArrowRight size={20} />
              <div className="w-24 h-0.5 bg-gray-300"></div>
            </div>
          </div>

          {/* Processing Layer */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <Boxes size={18} className="text-orange-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Processing & Transformation Layer</div>
                <div className="text-xs text-gray-500">Databricks Medallion Architecture</div>
              </div>
              <div className="ml-auto flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full">
                <CheckCircle size={14} className="text-green-600" />
                <span className="text-xs text-green-700 font-medium">Healthy</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pl-10">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4">
                <div className="text-xs text-orange-600 font-medium mb-1">Bronze Layer</div>
                <div className="text-sm text-gray-900 font-medium">Raw Ingestion</div>
                <div className="text-xs text-gray-600 mt-2">8.1M records</div>
                <div className="mt-3 flex flex-wrap gap-1">
                  <span className="text-xs px-2 py-0.5 bg-white rounded">Delta Lake</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4">
                <div className="text-xs text-orange-600 font-medium mb-1">Silver Layer</div>
                <div className="text-sm text-gray-900 font-medium">Cleansed & Validated</div>
                <div className="text-xs text-gray-600 mt-2">7.9M records</div>
                <div className="mt-3 flex flex-wrap gap-1">
                  <span className="text-xs px-2 py-0.5 bg-white rounded">CDQ Rules</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4">
                <div className="text-xs text-orange-600 font-medium mb-1">Gold Layer</div>
                <div className="text-sm text-gray-900 font-medium">Curated Analytics</div>
                <div className="text-xs text-gray-600 mt-2">1.2M aggregated</div>
                <div className="mt-3 flex flex-wrap gap-1">
                  <span className="text-xs px-2 py-0.5 bg-white rounded">Business Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Flow Arrow */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-24 h-0.5 bg-gray-300"></div>
              <ArrowRight size={20} />
              <div className="w-24 h-0.5 bg-gray-300"></div>
            </div>
          </div>

          {/* Consumption Layer */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <BarChart3 size={18} className="text-purple-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Consumption & Analytics Layer</div>
                <div className="text-xs text-gray-500">BI platforms and downstream analytics</div>
              </div>
              <div className="ml-auto flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full">
                <CheckCircle size={14} className="text-green-600" />
                <span className="text-xs text-green-700 font-medium">Healthy</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pl-10">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4">
                <div className="text-xs text-purple-600 font-medium mb-1">Microsoft Power BI</div>
                <div className="text-sm text-gray-900 font-medium">Enterprise Reports</div>
                <div className="text-xs text-gray-600 mt-2">50 active reports</div>
                <div className="mt-3 flex flex-wrap gap-1">
                  <span className="text-xs px-2 py-0.5 bg-white rounded">Finance</span>
                  <span className="text-xs px-2 py-0.5 bg-white rounded">Sales</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4">
                <div className="text-xs text-purple-600 font-medium mb-1">Tableau</div>
                <div className="text-sm text-gray-900 font-medium">Executive Dashboards</div>
                <div className="text-xs text-gray-600 mt-2">32 dashboards</div>
                <div className="mt-3 flex flex-wrap gap-1">
                  <span className="text-xs px-2 py-0.5 bg-white rounded">C-Suite</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4">
                <div className="text-xs text-purple-600 font-medium mb-1">APIs & Services</div>
                <div className="text-sm text-gray-900 font-medium">REST Endpoints</div>
                <div className="text-xs text-gray-600 mt-2">15 active APIs</div>
                <div className="mt-3 flex flex-wrap gap-1">
                  <span className="text-xs px-2 py-0.5 bg-white rounded">Apps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Flow Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-xs text-gray-500 mb-1">Total Data Volume</div>
          <div className="text-2xl font-semibold text-gray-900">8.1M</div>
          <div className="text-xs text-gray-600 mt-1">records processed today</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-xs text-gray-500 mb-1">Avg Processing Time</div>
          <div className="text-2xl font-semibold text-gray-900">18 min</div>
          <div className="text-xs text-gray-600 mt-1">end-to-end latency</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-xs text-gray-500 mb-1">Data Quality Pass Rate</div>
          <div className="text-2xl font-semibold text-gray-900">97.5%</div>
          <div className="text-xs text-gray-600 mt-1">at Silver layer</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-xs text-gray-500 mb-1">Active Consumers</div>
          <div className="text-2xl font-semibold text-gray-900">97</div>
          <div className="text-xs text-gray-600 mt-1">reports & dashboards</div>
        </div>
      </div>
    </div>
  );
}