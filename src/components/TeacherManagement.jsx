import { useState } from 'react';
import { Search, Plus, Download, Edit, Trash2, Eye, Mail, Phone } from 'lucide-react';

export function TeacherManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const teachers = [
    { id: 1, name: 'Dr. Sarah Johnson', role: 'Principal', subjects: ['Administration'], phone: '555-1001', email: 'sarah.j@school.com', qualification: 'Ph.D. in Education', experience: '15 years', joinDate: 'Jan 2010', status: 'Active' },
    { id: 2, name: 'Robert Williams', role: 'Senior Teacher', subjects: ['Mathematics', 'Physics'], phone: '555-1002', email: 'robert.w@school.com', qualification: 'M.Sc. Mathematics', experience: '12 years', joinDate: 'Aug 2011', status: 'Active' },
    { id: 3, name: 'Emily Davis', role: 'Teacher', subjects: ['English', 'Literature'], phone: '555-1003', email: 'emily.d@school.com', qualification: 'M.A. English', experience: '8 years', joinDate: 'Mar 2015', status: 'Active' },
    { id: 4, name: 'Michael Brown', role: 'Teacher', subjects: ['Chemistry', 'Biology'], phone: '555-1004', email: 'michael.b@school.com', qualification: 'M.Sc. Chemistry', experience: '10 years', joinDate: 'Jul 2013', status: 'Active' },
    { id: 5, name: 'Jennifer Garcia', role: 'Teacher', subjects: ['History', 'Geography'], phone: '555-1005', email: 'jennifer.g@school.com', qualification: 'M.A. History', experience: '6 years', joinDate: 'Sep 2017', status: 'Active' },
    { id: 6, name: 'David Martinez', role: 'Sports Coach', subjects: ['Physical Education'], phone: '555-1006', email: 'david.m@school.com', qualification: 'B.P.Ed', experience: '7 years', joinDate: 'Jan 2016', status: 'Active' },
    { id: 7, name: 'Lisa Anderson', role: 'Teacher', subjects: ['Computer Science'], phone: '555-1007', email: 'lisa.a@school.com', qualification: 'M.Tech CSE', experience: '5 years', joinDate: 'Jun 2018', status: 'On Leave' },
  ];

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    teacher.subjects.some(subject => subject.toLowerCase().includes(searchQuery.toLowerCase())) ||
    teacher.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selected = teachers.find(t => t.id === selectedTeacher);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">Teacher Management</h1>
        <p className="text-gray-600">Manage all teacher information, roles, and subjects</p>
      </div>

      {/* Search and Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, subject, or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-5 h-5" /> Add Teacher
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-5 h-5" /> Export
          </button>
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher) => (
          <div key={teacher.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                {teacher.name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${teacher.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {teacher.status}
              </span>
            </div>

            <h3 className="text-gray-900 mb-1">{teacher.name}</h3>
            <p className="text-blue-600 text-sm mb-3">{teacher.role}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Mail className="w-4 h-4" />
                <span className="truncate">{teacher.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Phone className="w-4 h-4" />
                <span>{teacher.phone}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-600 text-sm mb-2">Subjects:</p>
              <div className="flex flex-wrap gap-2">
                {teacher.subjects.map((subject, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">{subject}</span>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button onClick={() => setSelectedTeacher(teacher.id)} className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Eye className="w-4 h-4" /> View
              </button>
              <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                <Edit className="w-4 h-4" />
              </button>
              <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Teacher Details Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-gray-900">Teacher Details</h2>
              <button onClick={() => setSelectedTeacher(null)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
              <div className="w-20 h-20 bg-gradient-to from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl">
                {selected.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">{selected.name}</h3>
                <p className="text-blue-600">{selected.role}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 text-sm mb-1">Email</p>
                <p className="text-gray-900">{selected.email}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Phone</p>
                <p className="text-gray-900">{selected.phone}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Qualification</p>
                <p className="text-gray-900">{selected.qualification}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Experience</p>
                <p className="text-gray-900">{selected.experience}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Join Date</p>
                <p className="text-gray-900">{selected.joinDate}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Status</p>
                <p className="text-gray-900">{selected.status}</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-600 text-sm mb-2">Subjects</p>
                <div className="flex flex-wrap gap-2">
                  {selected.subjects.map((subject, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg">{subject}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Edit Teacher</button>
              <button onClick={() => setSelectedTeacher(null)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
