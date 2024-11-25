import React from 'react';
import { 
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileWarning,
  ThermometerSun
} from 'lucide-react';

const stats = [
  { 
    icon: Activity,
    label: 'Active Tests',
    value: '24',
    color: 'bg-blue-500'
  },
  {
    icon: AlertTriangle,
    label: 'Critical Samples',
    value: '3',
    color: 'bg-red-500'
  },
  {
    icon: CheckCircle2,
    label: 'Completed Today',
    value: '18',
    color: 'bg-green-500'
  },
  {
    icon: Clock,
    label: 'Pending Review',
    value: '7',
    color: 'bg-yellow-500'
  }
];

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Laboratory Dashboard</h1>
        <p className="text-gray-600 mt-2">ISO 17025:2017 Management System</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-gray-600 text-sm">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Recent Activities</h2>
            <button className="text-blue-500 hover:text-blue-600">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { icon: ThermometerSun, text: 'Temperature monitoring completed for Lab 3', time: '10 min ago' },
              { icon: FileWarning, text: 'New non-conformity report submitted', time: '1 hour ago' },
              { icon: CheckCircle2, text: 'Equipment calibration verified', time: '2 hours ago' }
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-4">
                <activity.icon className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="text-gray-800">{activity.text}</p>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Quality Metrics</h2>
            <button className="text-blue-500 hover:text-blue-600">Export</button>
          </div>
          <div className="space-y-6">
            {[
              { label: 'Method Validation', value: 92, color: 'bg-green-500' },
              { label: 'Documentation Compliance', value: 87, color: 'bg-blue-500' },
              { label: 'Equipment Calibration', value: 95, color: 'bg-purple-500' }
            ].map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">{metric.label}</span>
                  <span className="text-gray-800 font-medium">{metric.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${metric.color} h-2 rounded-full`}
                    style={{ width: `${metric.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}