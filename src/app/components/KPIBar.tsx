import { TrendingUp, TrendingDown, Activity, AlertTriangle, Shield, Clock } from 'lucide-react';

export function KPIBar() {
  const kpis = [
    {
      label: 'Overall Data Quality Score',
      value: '94.2%',
      trend: '+2.3%',
      trendUp: true,
      icon: Activity,
      color: 'bg-green-50 text-green-700 border-green-200'
    },
    {
      label: 'Active CDI Pipelines',
      value: '127',
      trend: '+12',
      trendUp: true,
      icon: Activity,
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      label: 'Failed Data Quality Rules',
      value: '8',
      trend: '-3',
      trendUp: true,
      icon: AlertTriangle,
      color: 'bg-orange-50 text-orange-700 border-orange-200'
    },
    {
      label: 'Compliance Status',
      value: '98.5%',
      subtitle: 'PII / GDPR / SOX',
      icon: Shield,
      color: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      label: 'Last Data Refresh',
      value: '2 mins ago',
      subtitle: 'Jan 10, 2026 14:35 UTC',
      icon: Clock,
      color: 'bg-gray-50 text-gray-700 border-gray-200'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
      {kpis.map((kpi, index) => {
        const Icon = kpi.icon;
        return (
          <div
            key={index}
            className={`${kpi.color} border rounded-lg p-4 hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start justify-between mb-3">
              <Icon size={20} />
              {kpi.trend && (
                <div className="flex items-center gap-1 text-xs">
                  {kpi.trendUp ? (
                    <TrendingUp size={14} className="text-green-600" />
                  ) : (
                    <TrendingDown size={14} className="text-red-600" />
                  )}
                  <span className={kpi.trendUp ? 'text-green-600' : 'text-red-600'}>
                    {kpi.trend}
                  </span>
                </div>
              )}
            </div>
            <div className="text-2xl font-semibold mb-1">{kpi.value}</div>
            <div className="text-xs opacity-75">{kpi.subtitle || kpi.label}</div>
          </div>
        );
      })}
    </div>
  );
}