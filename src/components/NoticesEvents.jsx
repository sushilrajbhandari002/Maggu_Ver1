import React, { useState } from "react";
import { Plus, Calendar, FileText, Award, Edit, Trash2, Bell } from "lucide-react";

export default function NoticesEvents() {
  const [activeTab, setActiveTab] = useState("notices");
  const [showAddModal, setShowAddModal] = useState(false);

  const notices = [
    { id: 1, title: "Holiday Announcement", description: "School will remain closed on Nov 24th for Thanksgiving", date: "2025-11-22", priority: "high", type: "Holiday" },
    { id: 2, title: "Fee Payment Reminder", description: "Please clear pending fees by end of this month", date: "2025-11-20", priority: "medium", type: "Fee" },
    { id: 3, title: "New Admission Open", description: "Admission for next academic year starts from December 1st", date: "2025-11-18", priority: "low", type: "Admission" },
    { id: 4, title: "Parent-Teacher Meeting", description: "Annual PTM scheduled for November 25th", date: "2025-11-15", priority: "high", type: "Meeting" },
  ];

  const exams = [
    { id: 1, title: "Mid-Term Examination", class: "All Classes", startDate: "2025-12-01", endDate: "2025-12-10", subjects: ["Math", "Science", "English", "Social Studies"] },
    { id: 2, title: "Unit Test 2", class: "Grade 9-10", startDate: "2025-11-28", endDate: "2025-11-30", subjects: ["Physics", "Chemistry", "Biology"] },
  ];

  const results = [
    { id: 1, title: "Mid-Term Results - Grade 10", publishDate: "2025-11-15", class: "Grade 10", averageScore: "82%", status: "Published" },
    { id: 2, title: "Unit Test 1 - Grade 9", publishDate: "2025-11-10", class: "Grade 9", averageScore: "78%", status: "Published" },
    { id: 3, title: "Final Exam - Grade 12", publishDate: "2025-10-28", class: "Grade 12", averageScore: "85%", status: "Published" },
  ];

  const priorityColors = {
    high: "bg-red-100 text-red-700 border-red-200",
    medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
    low: "bg-green-100 text-green-700 border-green-200",
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">Notices & Events Management</h1>
        <p className="text-gray-600">Post and manage school notices, exams, and results</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("notices")}
            className={`flex items-center gap-2 px-6 py-4 transition-colors ${
              activeTab === "notices"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Bell className="w-5 h-5" />
            Notices
          </button>

          <button
            onClick={() => setActiveTab("exams")}
            className={`flex items-center gap-2 px-6 py-4 transition-colors ${
              activeTab === "exams"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <FileText className="w-5 h-5" />
            Exam Routines
          </button>

          <button
            onClick={() => setActiveTab("results")}
            className={`flex items-center gap-2 px-6 py-4 transition-colors ${
              activeTab === "results"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Award className="w-5 h-5" />
            Exam Results
          </button>
        </div>

        <div className="p-6">
          {/* Add Button */}
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-6"
          >
            <Plus className="w-5 h-5" />
            Add New {activeTab === "notices" ? "Notice" : activeTab === "exams" ? "Exam Routine" : "Result"}
          </button>

          {/* Notices Tab */}
          {activeTab === "notices" && (
            <div className="space-y-4">
              {notices.map((notice) => (
                <div key={notice.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-gray-900">{notice.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs ${priorityColors[notice.priority]}`}>
                          {notice.priority}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {notice.type}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm mb-2">{notice.description}</p>

                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{notice.date}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Exams Tab */}
          {activeTab === "exams" && (
            <div className="space-y-4">
              {exams.map((exam) => (
                <div key={exam.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-gray-900">{exam.title}</h3>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm">{exam.class}</span>
                      </div>

                      <div className="flex items-center gap-4 text-gray-600 text-sm mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exam.startDate} to {exam.endDate}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-1">Subjects:</p>

                      <div className="flex flex-wrap gap-2">
                        {exam.subjects.map((subject, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Results Tab */}
          {activeTab === "results" && (
            <div className="space-y-4">
              {results.map((result) => (
                <div key={result.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-gray-900">{result.title}</h3>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">{result.status}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600 mb-1">Class</p>
                          <p className="text-gray-900">{result.class}</p>
                        </div>

                        <div>
                          <p className="text-gray-600 mb-1">Publish Date</p>
                          <p className="text-gray-900">{result.publishDate}</p>
                        </div>

                        <div>
                          <p className="text-gray-600 mb-1">Average Score</p>
                          <p className="text-gray-900">{result.averageScore}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h2 className="text-gray-900 mb-4">
              Add New {activeTab === "notices" ? "Notice" : activeTab === "exams" ? "Exam Routine" : "Result"}
            </h2>

            <p className="text-gray-600 mb-6">Form fields would go here...</p>

            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save</button>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
