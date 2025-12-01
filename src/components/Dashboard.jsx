import React from "react";
import StatsCards from "./StatsCards";
import AttendanceChart from "./AttendanceChart";
import EnrollmentChart from "./EnrollmentChart";
import SchoolCalendar from './SchoolCalendar'
import UpcomingNotices from "./UpcomingNotices";
import UpcomingExams from "./UpcomingExams";

export default function Dashboard() {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">School Management Dashboard</h1>
        <p className="text-gray-600">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <AttendanceChart />
        <EnrollmentChart />
      </div>

      {/* Calendar + Notices */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <SchoolCalendar/>
        </div>

        <div className="space-y-6">
          <UpcomingNotices />
          <UpcomingExams />
        </div>
      </div>
    </>
  );
}
