import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SchoolCalendar() {
  // Default month (Nov 2025)
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 1));

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December',
  ];

  // Events stored by day
  const events = {
    25: { title: 'Parent Meeting', color: 'bg-blue-500' },
    28: { title: 'Science Fair', color: 'bg-purple-500' },
    30: { title: 'Sports Day', color: 'bg-green-500' },
  };

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  // Today's date (auto detect)
  const today = new Date();
  const isSameMonth =
    today.getFullYear() === currentDate.getFullYear() &&
    today.getMonth() === currentDate.getMonth();

  const days = [];

  // Blank spaces before month starts
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="p-2"></div>);
  }

  // Render calendar days
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = isSameMonth && today.getDate() === day;
    const hasEvent = events[day];

    days.push(
      <div
        key={day}
        className={`p-2 min-h-[70px] border border-gray-200 rounded-lg transition
        ${isToday ? 'bg-blue-50 border-blue-400 shadow-sm' : 'bg-white'}
      `}
      >
        <div className={`text-sm font-medium ${isToday ? 'text-blue-600' : 'text-gray-700'}`}>
          {day}
        </div>

        {hasEvent && (
          <div
            className={`${hasEvent.color} text-white text-xs px-2 py-1 rounded mt-1`}
          >
            {hasEvent.title}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-900 font-medium text-lg">School Calendar</h3>

        <div className="flex items-center gap-2">
          <button
            onClick={previousMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <span className="text-gray-800 font-medium min-w-[140px] text-center">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>

          <button
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div key={d} className="p-2 text-center text-gray-500 text-sm font-medium">
            {d}
          </div>
        ))}

        {/* Render days */}
        {days}
      </div>
    </div>
  );
}
