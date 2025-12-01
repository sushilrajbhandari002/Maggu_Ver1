import { useState, useRef } from 'react';
import { 
  School, MapPin, Phone, Mail, Globe,
  Edit, Save, X, Image
} from 'lucide-react';
import { useSchoolSettings } from './SchoolSettingsContext';

export function SchoolProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const { settings = {}, updateSettings } = useSchoolSettings() || {};

  const logoInputRef = useRef(null);
  const backgroundInputRef = useRef(null);

  const [profileData, setProfileData] = useState({
    name: 'Green Valley International School',
    motto: 'Excellence in Education',
    email: 'info@greenvalleyschool.edu',
    phone: '+1 (555) 123-4567',
    website: 'www.greenvalleyschool.edu',
    address: '123 Education Lane, Knowledge City, ST 12345',
    established: '1995',
    principal: 'Dr. Sarah Johnson',
    totalStudents: '2,543',
    totalTeachers: '142',
    totalClasses: '48',
    description: 'Green Valley International School provides quality education and holistic development for students.',
  });

  const handleSave = () => {
    setIsEditing(false);
    if (updateSettings) {
      updateSettings({ profileData });
    }
  };
  const handleCancel = () => setIsEditing(false);

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => updateSettings && updateSettings({ schoolLogo: reader.result });
    reader.readAsDataURL(file);
  };

  const handleBackgroundUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => updateSettings && updateSettings({ loginBackground: reader.result });
    reader.readAsDataURL(file);
  };

  return (
    <>
      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">School Profile Management</h1>
        <p className="text-gray-600">Manage your school's information and settings</p>
      </div>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-6 text-white">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center">
              <School className="w-12 h-12 text-blue-600" />
            </div>

            {/* Name + Motto */}
            <div>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                    className="bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white text-xl mb-2 w-full"
                  />
                  <input
                    type="text"
                    value={profileData.motto}
                    onChange={(e) =>
                      setProfileData({ ...profileData, motto: e.target.value })
                    }
                    className="bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white w-full"
                  />
                </>
              ) : (
                <>
                  <h2 className="text-white mb-1">{profileData.name}</h2>
                  <p className="text-white/90">{profileData.motto}</p>
                </>
              )}
            </div>
          </div>

          {/* Edit / Save / Cancel */}
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg"
            >
              <Edit className="w-5 h-5" />
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg"
              >
                <Save className="w-5 h-5" />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
              >
                <X className="w-5 h-5" />
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Basic Details */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-gray-900 mb-6">Basic Information</h3>

          <div className="space-y-6">
            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.email}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                  <Phone className="w-4 h-4" />
                  Phone
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.phone}
                    onChange={(e) =>
                      setProfileData({ ...profileData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.phone}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                  <Globe className="w-4 h-4" />
                  Website
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.website}
                    onChange={(e) =>
                      setProfileData({ ...profileData, website: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.website}</p>
                )}
              </div>

              <div>
                <label className="text-gray-600 text-sm mb-2 block">
                  Established
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.established}
                    onChange={(e) =>
                      setProfileData({ ...profileData, established: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.established}</p>
                )}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <MapPin className="w-4 h-4" />
                Address
              </label>
              {isEditing ? (
                <textarea
                  value={profileData.address}
                  onChange={(e) =>
                    setProfileData({ ...profileData, address: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg"
                  rows={2}
                />
              ) : (
                <p className="text-gray-900">{profileData.address}</p>
              )}
            </div>

            {/* About / Principal */}
            <div>
              <label className="text-gray-600 text-sm mb-2">About School</label>
              {isEditing ? (
                <textarea
                  value={profileData.description}
                  onChange={(e) =>
                    setProfileData({ ...profileData, description: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg"
                  rows={4}
                />
              ) : (
                <p className="text-gray-700 leading-relaxed">{profileData.description}</p>
              )}
            </div>

            <div>
              <label className="text-gray-600 text-sm mb-2">Principal Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.principal}
                  onChange={(e) =>
                    setProfileData({ ...profileData, principal: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg"
                />
              ) : (
                <p className="text-gray-900">{profileData.principal}</p>
              )}
            </div>
          </div>
        </div>

        {/* Right: Stats + Login Customization */}
        <div className="space-y-6">
          {/* Stats */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-600 text-sm">Total Students</p>
                <p className="text-gray-900">{profileData.totalStudents}</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-green-600 text-sm">Total Teachers</p>
                <p className="text-gray-900">{profileData.totalTeachers}</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-purple-600 text-sm">Active Classes</p>
                <p className="text-gray-900">{profileData.totalClasses}</p>
              </div>
            </div>
          </div>

          {/* Login Customization */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-gray-900 mb-4">Login Page Customization</h3>

            {/* School Logo */}
            <div className="mb-6">
              <label className="text-gray-700 block mb-2">School Logo</label>
              <div className="border-2 border-dashed border-gray-300 p-6 text-center rounded-lg">
                {settings?.schoolLogo ? (
                  <>
                    <img src={settings.schoolLogo} alt="Logo" className="w-20 h-20 object-cover mx-auto rounded-lg mb-3" />
                    <button onClick={() => logoInputRef.current.click()} className="px-3 py-2 bg-blue-600 text-white rounded-lg mb-2">Change Logo</button>
                    <button onClick={() => updateSettings({ schoolLogo: null })} className="px-3 py-2 bg-red-500 text-white rounded-lg">Remove</button>
                  </>
                ) : (
                  <>
                    <School className="w-14 h-14 text-gray-400 mx-auto mb-3" />
                    <button onClick={() => logoInputRef.current.click()} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Upload Logo</button>
                  </>
                )}
                <input ref={logoInputRef} type="file" className="hidden" accept="image/*" onChange={handleLogoUpload} />
              </div>
            </div>

            {/* Background Image */}
            <div>
              <label className="text-gray-700 block mb-2">Background Image</label>
              <div className="border-2 border-dashed border-gray-300 p-6 text-center rounded-lg">
                {settings?.loginBackground ? (
                  <>
                    <img src={settings.loginBackground} alt="Background" className="w-full h-32 object-cover rounded-lg mb-3" />
                    <button onClick={() => backgroundInputRef.current.click()} className="px-3 py-2 bg-blue-600 text-white rounded-lg mb-2">Change Background</button>
                    <button onClick={() => updateSettings({ loginBackground: null })} className="px-3 py-2 bg-red-500 text-white rounded-lg">Remove</button>
                  </>
                ) : (
                  <>
                    <Image className="w-14 h-14 text-gray-400 mx-auto mb-3" />
                    <button onClick={() => backgroundInputRef.current.click()} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Upload Background</button>
                  </>
                )}
                <input ref={backgroundInputRef} type="file" className="hidden" accept="image/*" onChange={handleBackgroundUpload} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
