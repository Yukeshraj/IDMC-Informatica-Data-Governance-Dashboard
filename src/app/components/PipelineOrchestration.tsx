import { Play, Pause, CheckCircle, XCircle, Clock, AlertTriangle, RotateCw, Search } from 'lucide-react';

export function PipelineOrchestration() {
  const pipelines = [
    {
      name: 'CRM_to_ADLS_Daily_Sync',
      status: 'Running',
      schedule: 'Daily at 02:00 UTC',
      runtime: '12 mins',
      errors: 0,
      lastRun: '2 mins ago',
      progress: 75
    },
    {
      name: 'ERP_Finance_Incremental_Load',
      status: 'Completed',
      schedule: 'Hourly',
      runtime: '8 mins',
      errors: 0,
      lastRun: '15 mins ago',
      progress: 100
    },
    {
      name: 'Product_Catalog_Full_Refresh',
      status: 'Failed',
      schedule: 'Weekly on Sunday',
      runtime: '45 mins',
      errors: 3,
      lastRun: '2 hours ago',
      progress: 0
    },
    {
      name: 'Customer_360_Aggregation',
      status: 'Running',
      schedule: 'Daily at 06:00 UTC',
      runtime: '25 mins',
      errors: 0,
      lastRun: '5 mins ago',
      progress: 45
    },
    {
      name: 'Sales_Analytics_Transform',
      status: 'Completed',
      schedule: 'Every 4 hours',
      runtime: '18 mins',
      errors: 0,
      lastRun: '1 hour ago',
      progress: 100
    },
    {
      name: 'Employee_Data_Compliance_Check',
      status: 'Failed',
      schedule: 'Daily at 08:00 UTC',
      runtime: '5 mins',
      errors: 2,
      lastRun: '3 hours ago',
      progress: 0
    },
    {
      name: 'Inventory_Real_Time_Stream',
      status: 'Running',
      schedule: 'Continuous',
      runtime: '∞',
      errors: 0,
      lastRun: 'Active',
      progress: 100
    },
    {
      name: 'Marketing_Campaign_ETL',
      status: 'Scheduled',
      schedule: 'Daily at 22:00 UTC',
      runtime: '-',
      errors: 0,
      lastRun: 'Not started',
      progress: 0
    }
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'Running':
        return {
          icon: <Play size={16} className="text-blue-600" />,
          badge: 'bg-blue-100 text-blue-700 border-blue-200',
          text: 'Running'
        };
      case 'Completed':
        return {
          icon: <CheckCircle size={16} className="text-green-600" />,
          badge: 'bg-green-100 text-green-700 border-green-200',
          text: 'Completed'
        };
      case 'Failed':
        return {
          icon: <XCircle size={16} className="text-red-600" />,
          badge: 'bg-red-100 text-red-700 border-red-200',
          text: 'Failed'
        };
      case 'Scheduled':
        return {
          icon: <Clock size={16} className="text-gray-600" />,
          badge: 'bg-gray-100 text-gray-700 border-gray-200',
          text: 'Scheduled'
        };
      default:
        return {
          icon: <Clock size={16} />,
          badge: 'bg-gray-100 text-gray-700 border-gray-200',
          text: status
        };
    }
  };

  const statusCounts = {
    running: pipelines.filter(p => p.status === 'Running').length,
    completed: pipelines.filter(p => p.status === 'Completed').length,
    failed: pipelines.filter(p => p.status === 'Failed').length,
    scheduled: pipelines.filter(p => p.status === 'Scheduled').length
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Play size={18} className="text-blue-600" />
            <span className="text-sm text-blue-700">Running</span>
          </div>
          <div className="text-2xl font-semibold text-blue-900">{statusCounts.running}</div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle size={18} className="text-green-600" />
            <span className="text-sm text-green-700">Completed</span>
          </div>
          <div className="text-2xl font-semibold text-green-900">{statusCounts.completed}</div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <XCircle size={18} className="text-red-600" />
            <span className="text-sm text-red-700">Failed</span>
          </div>
          <div className="text-2xl font-semibold text-red-900">{statusCounts.failed}</div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock size={18} className="text-gray-600" />
            <span className="text-sm text-gray-700">Scheduled</span>
          </div>
          <div className="text-2xl font-semibold text-gray-900">{statusCounts.scheduled}</div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">CDI Pipeline Status</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pipeline Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Runtime</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Errors</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Run</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {pipelines.map((pipeline, index) => {
                const statusConfig = getStatusConfig(pipeline.status);
                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{pipeline.name}</div>
                      {pipeline.status === 'Running' && pipeline.progress > 0 && (
                        <div className="mt-2">
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-blue-600 h-1.5 rounded-full transition-all" style={{ width: `${pipeline.progress}%` }}></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{pipeline.progress}% complete</div>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusConfig.badge}`}>
                        {statusConfig.icon}
                        {statusConfig.text}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{pipeline.schedule}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{pipeline.runtime}</td>
                    <td className="px-6 py-4">
                      {pipeline.errors > 0 ? (
                        <div className="flex items-center gap-1.5">
                          <AlertTriangle size={14} className="text-red-600" />
                          <span className="text-sm font-medium text-red-700">{pipeline.errors}</span>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{pipeline.lastRun}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 hover:bg-gray-100 rounded transition-colors" title="Retry">
                          <RotateCw size={14} className="text-gray-600" />
                        </button>
                        <button className="p-1.5 hover:bg-gray-100 rounded transition-colors" title="Investigate">
                          <Search size={14} className="text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}