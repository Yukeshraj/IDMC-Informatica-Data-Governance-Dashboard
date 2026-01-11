import { Bell, ChevronDown, Settings, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className="h-16 bg-white border-b border-gray-200 fixed top-0 left-0 lg:left-64 right-0 z-10 flex items-center justify-between px-4 lg:px-8">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <Menu size={20} className="text-gray-600" />
        </button>
        
        <div>
          <h1 className="text-sm lg:text-xl font-semibold text-gray-900">
            IDMC Enterprise Data Governance, Quality & Lineage Control Center
          </h1>
          <p className="text-xs text-gray-500 mt-0.5 hidden sm:block">
            Real-time monitoring across CDI, CDQ, and EDC
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-700">Production</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>

        <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
          <Bell size={18} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="hidden sm:block p-2 hover:bg-gray-50 rounded-lg transition-colors">
          <Settings size={18} className="text-gray-600" />
        </button>

        <div className="flex items-center gap-2 pl-2 lg:pl-4 border-l border-gray-200">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">SA</span>
          </div>
          <div className="hidden sm:block text-sm">
            <div className="text-gray-900">Cloud Data Solutions Architect</div>
            <div className="text-xs text-gray-500">Yukesh</div>
          </div>
        </div>
      </div>
    </div>
  );
}