import { LayoutDashboard, CheckCircle2, GitBranch, Workflow, Database, Shield, Network } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ activeView, onViewChange, isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'quality', label: 'Data Quality', icon: CheckCircle2 },
    { id: 'lineage', label: 'Lineage', icon: GitBranch },
    { id: 'pipelines', label: 'Pipelines', icon: Workflow },
    { id: 'catalog', label: 'Catalog', icon: Database },
    { id: 'governance', label: 'Governance', icon: Shield },
    { id: 'architecture', label: 'Architecture', icon: Network }
  ];

  const handleViewChange = (view: string) => {
    onViewChange(view);
    onClose(); // Close sidebar on mobile after selection
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        ></div>
      )}
      
      <div className={`w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 flex flex-col z-30 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-semibold text-sm">I</span>
            </div>
            <div>
              <div className="text-xs text-gray-500">Informatica</div>
              <div className="font-semibold text-sm">IDMC</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleViewChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all ${
                  activeView === item.id
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="text-xs text-gray-500 mb-2">Cloud</div>
          <div className="text-xs text-gray-400">Solution Architecture</div>
        </div>
      </div>
    </>
  );
}