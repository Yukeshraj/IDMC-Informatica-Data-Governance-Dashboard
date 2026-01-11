import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { KPIBar } from './components/KPIBar';
import { Footer } from './components/Footer';
import { OverviewDashboard } from './components/OverviewDashboard';
import { DataQualitySection } from './components/DataQualitySection';
import { LineageVisualization } from './components/LineageVisualization';
import { PipelineOrchestration } from './components/PipelineOrchestration';
import { DataCatalog } from './components/DataCatalog';
import { GovernanceView } from './components/GovernanceView';
import { ArchitectureView } from './components/ArchitectureView';

export default function App() {
  const [activeView, setActiveView] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case 'overview':
        return <OverviewDashboard />;
      case 'quality':
        return <DataQualitySection />;
      case 'lineage':
        return <LineageVisualization />;
      case 'pipelines':
        return <PipelineOrchestration />;
      case 'catalog':
        return <DataCatalog />;
      case 'governance':
        return <GovernanceView />;
      case 'architecture':
        return <ArchitectureView />;
      default:
        return <OverviewDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        activeView={activeView} 
        onViewChange={setActiveView}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      <main className="lg:ml-64 mt-16 p-4 lg:p-8">
        <KPIBar />
        {renderContent()}
        <Footer />
      </main>
    </div>
  );
}