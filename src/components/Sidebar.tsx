import React from 'react';
import { 
  Beaker, 
  ClipboardList, 
  FileText, 
  Users, 
  Settings, 
  Calendar,
  FlaskConical,
  ScrollText,
  BadgeCheck,
  Scale
} from 'lucide-react';

const menuItems = [
  { icon: FlaskConical, label: 'Laboratory Overview' },
  { icon: ClipboardList, label: 'Test Methods' },
  { icon: Scale, label: 'Equipment Calibration' },
  { icon: FileText, label: 'Documentation' },
  { icon: Users, label: 'Personnel' },
  { icon: BadgeCheck, label: 'Quality Control' },
  { icon: ScrollText, label: 'Reports' },
  { icon: Calendar, label: 'Schedule' },
  { icon: Settings, label: 'Settings' }
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0">
      <div className="p-4 flex items-center space-x-2 border-b border-gray-700">
        <Beaker className="w-8 h-8 text-blue-400" />
        <span className="text-xl font-bold">LabManager</span>
      </div>
      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}