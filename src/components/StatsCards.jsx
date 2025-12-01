import { Users, GraduationCap, BookOpen, TrendingUp, UserX, Bell } from 'lucide-react';

export default function StatsCards() {
  const stats = [
    {
      title: 'Total Students',
      value: '2,543',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Absent Today',
      value: '87',
      change: '-5%',
      trend: 'down',
      icon: UserX,
      color: 'bg-red-500',
    },
    {
      title: 'Total Teachers',
      value: '142',
      change: '+3%',
      trend: 'up',
      icon: GraduationCap,
      color: 'bg-green-500',
    },
    {
      title: 'Active Classes',
      value: '48',
      change: '+5%',
      trend: 'up',
      icon: BookOpen,
      color: 'bg-purple-500',
    },
    {
      title: 'Attendance Rate',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-orange-500',
    },
    {
      title: 'Pending Notices',
      value: '5',
      change: '2 new',
      trend: 'up',
      icon: Bell,
      color: 'bg-cyan-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div key={stat.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className={`text-sm ${stat.trend === 'down' ? 'text-red-600' : 'text-green-600'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
            <p className="text-gray-900 text-lg font-semibold">{stat.value}</p>
          </div>
        );
      })}
    </div>
  );
}
