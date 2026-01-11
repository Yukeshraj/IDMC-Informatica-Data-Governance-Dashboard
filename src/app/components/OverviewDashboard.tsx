import { DataQualitySection } from './DataQualitySection';
import { AlertsPanel } from './AlertsPanel';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function OverviewDashboard() {
  const pipelineActivity = [
    { hour: '00:00', runs: 12 },
    { hour: '04:00', runs: 45 },
    { hour: '08:00', runs: 28 },
    { hour: '12:00', runs: 18 },
    { hour: '16:00', runs: 32 },
    { hour: '20:00', runs: 25 }
  ];

  const dataVolumeByDomain = [
    { domain: 'Customer', volume: 2300 },
    { domain: 'Product', volume: 1850 },
    { domain: 'Finance', volume: 5700 },
    { domain: 'HR', volume: 890 },
    { domain: 'Marketing', volume: 1240 }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Pipeline Activity (24 Hours)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={pipelineActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="hour" tick={{ fontSize: 12 }} stroke="#6b7280" />
              <YAxis tick={{ fontSize: 12 }} stroke="#6b7280" />
              <Tooltip />
              <Line type="monotone" dataKey="runs" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Data Volume by Domain (thousands)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dataVolumeByDomain}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="domain" tick={{ fontSize: 12 }} stroke="#6b7280" />
              <YAxis tick={{ fontSize: 12 }} stroke="#6b7280" />
              <Tooltip />
              <Bar dataKey="volume" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <DataQualitySection />
      <AlertsPanel />
    </div>
  );
}