import { AlertCircle, AlertTriangle, Info, TrendingDown, XCircle, Shield } from 'lucide-react';

export function AlertsPanel() {
  const alerts = [
    {
      severity: 'critical',
      icon: XCircle,
      title: 'High-impact pipeline failure affecting Finance BI reports',
      description: 'ERP_Finance_Incremental_Load pipeline has failed. 15 Power BI reports are impacted.',
      timestamp: '5 mins ago',
      impact: 'High'
    },
    {
      severity: 'warning',
      icon: AlertTriangle,
      title: 'Customer Master dataset completeness dropped by 12%',
      description: 'Email field null values increased from 2.3% to 14.7% in the last 6 hours.',
      timestamp: '15 mins ago',
      impact: 'Medium'
    },
    {
      severity: 'warning',
      icon: Shield,
      title: 'PII dataset accessed by downstream analytics',
      description: 'Employee Records containing PII accessed by Marketing Analytics team.',
      timestamp: '1 hour ago',
      impact: 'Medium'
    },
    {
      severity: 'info',
      icon: TrendingDown,
      title: 'Product Catalog data freshness degraded',
      description: 'Last update was 4 hours ago. Expected update frequency is every 2 hours.',
      timestamp: '2 hours ago',
      impact: 'Low'
    },
    {
      severity: 'critical',
      icon: XCircle,
      title: 'Duplicate records detected in Customer Master',
      description: 'Duplicate rate increased to 8.2%, exceeding threshold of 3%.',
      timestamp: '3 hours ago',
      impact: 'High'
    },
    {
      severity: 'info',
      icon: Info,
      title: 'GDPR compliance check scheduled',
      description: 'Quarterly GDPR compliance audit will run tomorrow at 02:00 UTC.',
      timestamp: '5 hours ago',
      impact: 'Low'
    }
  ];

  const getSeverityConfig = (severity: string) => {
    switch (severity) {
      case 'critical':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          iconColor: 'text-red-600',
          titleColor: 'text-red-900',
          badge: 'bg-red-100 text-red-700 border-red-200'
        };
      case 'warning':
        return {
          bg: 'bg-orange-50',
          border: 'border-orange-200',
          iconColor: 'text-orange-600',
          titleColor: 'text-orange-900',
          badge: 'bg-orange-100 text-orange-700 border-orange-200'
        };
      default:
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          iconColor: 'text-blue-600',
          titleColor: 'text-blue-900',
          badge: 'bg-blue-100 text-blue-700 border-blue-200'
        };
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-red-100 text-red-700 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900">Alerts & Architectural Insights</h3>
      </div>

      <div className="divide-y divide-gray-200">
        {alerts.map((alert, index) => {
          const Icon = alert.icon;
          const config = getSeverityConfig(alert.severity);
          
          return (
            <div key={index} className={`p-6 ${config.bg} ${config.border} border-l-4`}>
              <div className="flex items-start gap-4">
                <Icon size={20} className={`${config.iconColor} mt-0.5 flex-shrink-0`} />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className={`font-medium ${config.titleColor}`}>{alert.title}</h4>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border flex-shrink-0 ${getImpactColor(alert.impact)}`}>
                      Impact: {alert.impact}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-3">{alert.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{alert.timestamp}</span>
                    <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
