import { Shield, Users, FileCheck, AlertTriangle, CheckCircle, BarChart } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export function GovernanceView() {
  const complianceData = [
    { name: 'GDPR Compliant', value: 85, color: '#10b981' },
    { name: 'SOX Certified', value: 92, color: '#3b82f6' },
    { name: 'PII Protected', value: 88, color: '#8b5cf6' },
    { name: 'Pending Review', value: 12, color: '#f59e0b' }
  ];

  const dataClassification = [
    { name: 'Confidential', value: 35, color: '#ef4444' },
    { name: 'Internal', value: 45, color: '#f59e0b' },
    { name: 'Public', value: 20, color: '#10b981' }
  ];

  const stewardshipMetrics = [
    { dataset: 'Customer Master', steward: 'Sarah Johnson', completeness: 98, lastReview: '2 days ago', status: 'Approved' },
    { dataset: 'Product Catalog', steward: 'Mark Stevens', completeness: 92, lastReview: '5 days ago', status: 'Approved' },
    { dataset: 'Sales Transactions', steward: 'Finance Team', completeness: 99, lastReview: '1 day ago', status: 'Approved' },
    { dataset: 'Employee Records', steward: 'HR Data Team', completeness: 85, lastReview: '15 days ago', status: 'Review Needed' }
  ];

  const policyViolations = [
    {
      policy: 'PII Data Access Control',
      violation: 'Unauthorized access attempt to Employee Records',
      severity: 'High',
      timestamp: '2 hours ago'
    },
    {
      policy: 'Data Retention Policy',
      violation: 'Transaction data older than 7 years detected',
      severity: 'Medium',
      timestamp: '1 day ago'
    },
    {
      policy: 'Data Quality Threshold',
      violation: 'Customer email completeness below 90%',
      severity: 'Low',
      timestamp: '2 days ago'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-700 border-red-200';
      case 'Medium': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Shield size={18} className="text-green-600" />
            <span className="text-sm text-green-700">GDPR Compliance</span>
          </div>
          <div className="text-2xl font-semibold text-green-900">98.5%</div>
          <div className="text-xs text-green-700 mt-1">147 of 149 datasets</div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <FileCheck size={18} className="text-blue-600" />
            <span className="text-sm text-blue-700">SOX Certified</span>
          </div>
          <div className="text-2xl font-semibold text-blue-900">92.3%</div>
          <div className="text-xs text-blue-700 mt-1">Finance & Audit</div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Users size={18} className="text-purple-600" />
            <span className="text-sm text-purple-700">Data Stewards</span>
          </div>
          <div className="text-2xl font-semibold text-purple-900">24</div>
          <div className="text-xs text-purple-700 mt-1">Active across domains</div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle size={18} className="text-orange-600" />
            <span className="text-sm text-orange-700">Policy Violations</span>
          </div>
          <div className="text-2xl font-semibold text-orange-900">3</div>
          <div className="text-xs text-orange-700 mt-1">Requires attention</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Compliance Overview</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={complianceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {complianceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Data Classification Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={dataClassification}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {dataClassification.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Data Stewardship Metrics</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dataset</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Steward</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completeness</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Review</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {stewardshipMetrics.map((metric, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{metric.dataset}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{metric.steward}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${metric.completeness >= 95 ? 'bg-green-500' : metric.completeness >= 85 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{ width: `${metric.completeness}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-700">{metric.completeness}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{metric.lastReview}</td>
                  <td className="px-6 py-4">
                    {metric.status === 'Approved' ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border bg-green-100 text-green-700 border-green-200">
                        <CheckCircle size={12} />
                        Approved
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border bg-orange-100 text-orange-700 border-orange-200">
                        <AlertTriangle size={12} />
                        Review Needed
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Recent Policy Violations</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {policyViolations.map((violation, index) => (
            <div key={index} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-medium text-gray-900">{violation.policy}</span>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${getSeverityColor(violation.severity)}`}>
                      {violation.severity}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{violation.violation}</p>
                  <span className="text-xs text-gray-500">{violation.timestamp}</span>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap">
                  Investigate →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}