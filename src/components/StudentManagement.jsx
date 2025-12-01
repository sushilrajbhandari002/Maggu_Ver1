import { useState } from 'react';
import { Search, Filter, Plus, Download, Edit, Trash2, Eye } from 'lucide-react';

export function StudentManagement() {
  const [selectedClass, setSelectedClass] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const classes = ['all', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];

  const students = [
    { id: 1, name: 'Emma Thompson', class: 'Grade 10', rollNo: '2023001', phone: '555-0101', email: 'emma.t@email.com', guardian: 'John Thompson', address: '123 Main St', status: 'Active' },
    { id: 2, name: 'Michael Chen', class: 'Grade 9', rollNo: '2023045', phone: '555-0102', email: 'michael.c@email.com', guardian: 'Lisa Chen', address: '456 Oak Ave', status: 'Active' },
    { id: 3, name: 'Sophia Rodriguez', class: 'Grade 11', rollNo: '2022098', phone: '555-0103', email: 'sophia.r@email.com', guardian: 'Carlos Rodriguez', address: '789 Pine Rd', status: 'Active' },
    { id: 4, name: 'James Wilson', class: 'Grade 10', rollNo: '2023012', phone: '555-0104', email: 'james.w@email.com', guardian: 'Sarah Wilson', address: '321 Elm St', status: 'Active' },
    { id: 5, name: 'Olivia Brown', class: 'Grade 12', rollNo: '2021067', phone: '555-0105', email: 'olivia.b@email.com', guardian: 'David Brown', address: '654 Maple Dr', status: 'Active' },
    { id: 6, name: 'Ethan Davis', class: 'Grade 9', rollNo: '2023056', phone: '555-0106', email: 'ethan.d@email.com', guardian: 'Jennifer Davis', address: '987 Cedar Ln', status: 'Active' },
    { id: 7, name: 'Ava Martinez', class: 'Grade 11', rollNo: '2022089', phone: '555-0107', email: 'ava.m@email.com', guardian: 'Miguel Martinez', address: '147 Birch Way', status: 'Inactive' },
    { id: 8, name: 'Noah Johnson', class: 'Grade 8', rollNo: '2024023', phone: '555-0108', email: 'noah.j@email.com', guardian: 'Emily Johnson', address: '258 Spruce Ct', status: 'Active' },
  ];

  const filteredStudents = students.filter(student => {
    const matchesClass = selectedClass === 'all' || student.class === selectedClass;
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          student.rollNo.includes(searchQuery);
    return matchesClass && matchesSearch;
  });

  return (
    <>
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">Student Management</h1>
        <p className="text-gray-600">Manage all student information and records</p>
      </div>

      {/* Filters and Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or roll number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Class Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {classes.map(cls => (
                <option key={cls} value={cls}>{cls === 'all' ? 'All Classes' : cls}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-5 h-5" />
            Add Student
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-5 h-5" />
            Export
          </button>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-gray-700">Roll No</th>
                <th className="px-6 py-3 text-left text-gray-700">Student Name</th>
                <th className="px-6 py-3 text-left text-gray-700">Class</th>
                <th className="px-6 py-3 text-left text-gray-700">Phone</th>
                <th className="px-6 py-3 text-left text-gray-700">Guardian</th>
                <th className="px-6 py-3 text-left text-gray-700">Status</th>
                <th className="px-6 py-3 text-left text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-900">{student.rollNo}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-gray-900">{student.name}</p>
                      <p className="text-gray-500 text-sm">{student.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{student.class}</td>
                  <td className="px-6 py-4 text-gray-700">{student.phone}</td>
                  <td className="px-6 py-4 text-gray-700">{student.guardian}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      student.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setSelectedStudent(student.id)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Student Details Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const student = students.find(s => s.id === selectedStudent);
              if (!student) return null;
              
              return (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-gray-900">Student Details</h2>
                    <button
                      onClick={() => setSelectedStudent(null)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Full Name</p>
                      <p className="text-gray-900">{student.name}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Roll Number</p>
                      <p className="text-gray-900">{student.rollNo}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Class</p>
                      <p className="text-gray-900">{student.class}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Status</p>
                      <p className="text-gray-900">{student.status}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Phone</p>
                      <p className="text-gray-900">{student.phone}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Email</p>
                      <p className="text-gray-900">{student.email}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Guardian Name</p>
                      <p className="text-gray-900">{student.guardian}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Address</p>
                      <p className="text-gray-900">{student.address}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Edit Student
                    </button>
                    <button
                      onClick={() => setSelectedStudent(null)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Close
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
}
