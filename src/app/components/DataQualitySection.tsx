import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { CheckCircle2, AlertCircle, XCircle, Clock } from 'lucide-react';

export function DataQualitySection() {
  const qualityScores = [
    { name: 'Customer Master', completeness: 98, accuracy: 96, consistency: 94, freshness: 99, duplicates: 2 },
    { name: 'Product Catalog', completeness: 92, accuracy: 95, consistency: 91, freshness: 88, duplicates: 5 },
    { name: 'Sales Transactions', completeness: 99, accuracy: 98, consistency: 97, freshness: 100, duplicates: 1 },
    { name: 'Employee Records', completeness: 85, accuracy: 89, consistency: 87, freshness: 92, duplicates: 8 }
  ];

  const trendData = [
    { day: 'Jan 3', score: 91.2 },
    { day: 'Jan 4', score: 92.1 },
    { day: 'Jan 5', score: 90.8 },
    { day: 'Jan 6', score: 93.5 },
    { day: 'Jan 7', score: 92.9 },
    { day: 'Jan 8', score: 93.8 },
    { day: 'Jan 9', score: 94.2 }
  ];

  const nullDistribution = [
    { field: 'email', nulls: 2.3 },
    { field: 'phone', nulls: 5.7 },
    { field: 'address', nulls: 8.1 },
    { field: 'birthdate', nulls: 12.4 }
  ];

  const rules = [
    { name: 'Email Format Validation', dataset: 'Customer Master', severity: 'Critical', status: 'Pass', evaluated: '2 mins ago' },
    { name: 'Phone Number Pattern', dataset: 'Customer Master', severity: 'High', status: 'Pass', evaluated: '2 mins ago' },
    { name: 'Product SKU Uniqueness', dataset: 'Product Catalog', severity: 'Critical', status: 'Fail', evaluated: '5 mins ago' },
    { name: 'Transaction Amount Range', dataset: 'Sales Transactions', severity: 'Medium', status: 'Pass', evaluated: '1 min ago' },
    { name: 'Employee ID Format', dataset: 'Employee Records', severity: 'High', status: 'Fail', evaluated: '8 mins ago' },
    { name: 'Date Consistency Check', dataset: 'Sales Transactions', severity: 'Low', status: 'Pass', evaluated: '3 mins ago' }
  ];

  const getStatusIcon = (status: string) => {
    if (status === 'Pass') return <CheckCircle2 size={16} className="text-green-600" />;
    return <XCircle size={16} className="text-red-600" />;
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-100 text-red-700 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {qualityScores.map((dataset, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-4">{dataset.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Completeness</span>
                <span className="text-sm font-medium text-green-700">{dataset.completeness}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${dataset.completeness}%` }}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Accuracy</span>
                <span className="text-sm font-medium text-blue-700">{dataset.accuracy}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${dataset.accuracy}%` }}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Consistency</span>
                <span className="text-sm font-medium text-purple-700">{dataset.consistency}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: `${dataset.consistency}%` }}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Freshness</span>
                <span className="text-sm font-medium text-cyan-700">{dataset.freshness}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-cyan-500 h-1.5 rounded-full" style={{ width: `${dataset.freshness}%` }}></div>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                <span className="text-xs text-gray-600">Duplicates</span>
                <span className={`text-sm font-medium ${dataset.duplicates < 3 ? 'text-green-700' : 'text-orange-700'}`}>
                  {dataset.duplicates}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Quality Score Trend (7-Day)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="#6b7280" />
              <YAxis domain={[88, 96]} tick={{ fontSize: 12 }} stroke="#6b7280" />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={2} dot={{ fill: '#2563eb', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Null Value Distribution (Customer Master)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={nullDistribution}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="field" tick={{ fontSize: 12 }} stroke="#6b7280" />
              <YAxis tick={{ fontSize: 12 }} stroke="#6b7280" />
              <Tooltip />
              <Bar dataKey="nulls" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Data Quality Rule Validation</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rule Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dataset</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Evaluated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rules.map((rule, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{rule.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{rule.dataset}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getSeverityColor(rule.severity)}`}>
                      {rule.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(rule.status)}
                      <span className={`text-sm font-medium ${rule.status === 'Pass' ? 'text-green-700' : 'text-red-700'}`}>
                        {rule.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{rule.evaluated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}