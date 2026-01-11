import { Search, Database, Shield, User, Clock, Tag } from 'lucide-react';

export function DataCatalog() {
  const datasets = [
    {
      name: 'Customer Master',
      description: 'Comprehensive customer information including demographics, contact details, and account status',
      domain: 'Customer Data',
      owner: 'Sarah Johnson',
      steward: 'Data Governance Team',
      classification: 'Confidential',
      sensitivity: 'PII',
      lastUpdated: '2 mins ago',
      tags: ['CRM', 'Master Data', 'GDPR']
    },
    {
      name: 'Product Catalog',
      description: 'Complete product catalog with SKUs, descriptions, pricing, and inventory levels',
      domain: 'Product Data',
      owner: 'Mark Stevens',
      steward: 'Product Team',
      classification: 'Internal',
      sensitivity: 'Confidential',
      lastUpdated: '15 mins ago',
      tags: ['ERP', 'Inventory', 'E-commerce']
    },
    {
      name: 'Sales Transactions',
      description: 'Detailed sales transaction data including order details, amounts, and payment information',
      domain: 'Finance',
      owner: 'Finance Operations',
      steward: 'Data Governance Team',
      classification: 'Confidential',
      sensitivity: 'PII',
      lastUpdated: '1 min ago',
      tags: ['Finance', 'SOX', 'Audit']
    },
    {
      name: 'Employee Records',
      description: 'Employee information including personal details, job titles, departments, and compensation',
      domain: 'Human Resources',
      owner: 'HR Department',
      steward: 'HR Data Team',
      classification: 'Confidential',
      sensitivity: 'PII',
      lastUpdated: '30 mins ago',
      tags: ['HR', 'Payroll', 'GDPR']
    },
    {
      name: 'Marketing Campaigns',
      description: 'Marketing campaign metadata, performance metrics, and customer engagement data',
      domain: 'Marketing',
      owner: 'Marketing Analytics',
      steward: 'Marketing Team',
      classification: 'Internal',
      sensitivity: 'Public',
      lastUpdated: '1 hour ago',
      tags: ['Marketing', 'Analytics', 'Campaign']
    },
    {
      name: 'Supply Chain Logistics',
      description: 'Supply chain data including shipments, warehouses, and delivery tracking',
      domain: 'Operations',
      owner: 'Supply Chain Team',
      steward: 'Operations',
      classification: 'Internal',
      sensitivity: 'Confidential',
      lastUpdated: '45 mins ago',
      tags: ['Logistics', 'Operations', 'Inventory']
    }
  ];

  const getClassificationColor = (classification: string) => {
    switch (classification) {
      case 'Confidential': return 'bg-red-100 text-red-700 border-red-200';
      case 'Internal': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Public': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getSensitivityColor = (sensitivity: string) => {
    switch (sensitivity) {
      case 'PII': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Confidential': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Public': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search datasets, domains, owners, or tags..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {datasets.map((dataset, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Database size={20} className="text-blue-600" />
                <h3 className="font-semibold text-gray-900">{dataset.name}</h3>
              </div>
              <div className="flex gap-2">
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${getClassificationColor(dataset.classification)}`}>
                  <Shield size={10} />
                  {dataset.classification}
                </span>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${getSensitivityColor(dataset.sensitivity)}`}>
                  {dataset.sensitivity}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{dataset.description}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Domain</span>
                <span className="text-gray-900 font-medium">{dataset.domain}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Owner</span>
                <span className="text-gray-900">{dataset.owner}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Steward</span>
                <span className="text-gray-900">{dataset.steward}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
              <Clock size={12} />
              <span>Updated {dataset.lastUpdated}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {dataset.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Compliance Ready</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <User size={12} />
                  <span>Governed</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}