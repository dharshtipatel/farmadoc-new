'use client';

import Header from '@/components/Header';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('edit');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [otherChecked, setOtherChecked] = useState(false);
  const [reasonText, setReasonText] = useState('');
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const reasons = [
    'Found a better alternative',
    'Privacy concerns',
    'Service is too expensive',
    'Unsatisfactory experience',
    'Other',
  ];

  const toggleReason = (reason: string) => {
    if (selectedReasons.includes(reason)) {
      setSelectedReasons(selectedReasons.filter((r) => r !== reason));
      if (reason === 'Other') setOtherChecked(false);
    } else {
      setSelectedReasons([...selectedReasons, reason]);
      if (reason === 'Other') setOtherChecked(true);
    }
  };

  return (
    <div>
    {/* Fixed Header */}
    <Header />
    <div className="pt-[80px] sm:pt-[135px]"></div>
    <div className="bg-white flex max-w-[846px] mx-auto mt-8">
      
      {/* LEFT SIDEBAR */}
      <div className="w-[285px] border-r border-[#EEF2F5] px-8 font-inter">
        <h2 className="text-[20px] font-semibold mb-6 text-[#1A1A1F]">Profile Management</h2>

        <div className="space-y-3">
          <button
            onClick={() => setActiveTab('edit')}
            className={`w-full text-center px-4 py-3 rounded-md text-sm ${
              activeTab === 'edit'
                ? 'bg-[#E5F6FF] text-[#1192E8]'
                : 'border border-[#EEF2F5] text-[#1E3862]'
            }`}
          >
            Edit Profile
          </button>

          <button
            onClick={() => setActiveTab('password')}
            className={`w-full text-center px-4 py-3 rounded-md text-sm ${
              activeTab === 'password'
                ? 'bg-[#E5F6FF] text-[#1192E8]'
                : 'border border-[#EEF2F5] text-[#1E3862]'
            }`}
          >
            Change Password
          </button>

          <button
            onClick={() => setActiveTab('delete')}
            className={`w-full text-center px-4 py-3 rounded-md text-sm ${
              activeTab === 'delete'
                ? 'bg-[#E5F6FF] text-[#1192E8]'
                : 'border border-[#EEF2F5] text-[#1E3862]'
            }`}
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 px-8 font-inter">
        {activeTab === 'edit' && (
          <>
            <h1 className="text-[20px] font-semibold mb-6">
              Personal Information
            </h1>

            <div className="max-w-[521px] space-y-5">
              
              {/* Full Name */}
              <div>
                <label className="block text-[14px] mb-1 text-medium text-[#000000]">Full Name</label>
                <input
                  type="text"
                  defaultValue="Mahavir Singh"
                  className="w-full border border-[#D6DADD] text-[#1E3862] text-[14px] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#1E3862]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[14px] mb-1 text-medium text-[#000000]">Phone Number</label>
                <input
                  type="text"
                  defaultValue="+39 1234567890"
                  className="w-full border border-[#D6DADD] text-[#1E3862] text-[14px] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#1E3862]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[14px] mb-1 text-medium text-[#000000]">Email</label>
                <input
                  type="email"
                  defaultValue="mahavir@examplemail.com"
                  className="w-full  bg-[#F6F9FF] border border-[#D6DADD] text-[#1E3862] text-[14px] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#1E3862]"
                  disabled
                />
              </div>

              {/* Button */}
              <div className="pt-4 flex justify-end">
                <button className="bg-[#1E3862] min-w-[162px] h-[48px] text-white px-6 py-2 rounded-md text-[14px] text-medium hover:bg-white hover:text-[#1E3862] hover:border hover:border-[#1E3862] transition">
                  Update Profile
                </button>
              </div>
            </div>
          </>
        )}

        {/* Placeholder sections */}
        {activeTab === 'password' && (
            <>
                <h1 className="text-[20px] font-semibold mb-6">
                Change Password
                </h1>

                <div className="max-w-[521px] space-y-5">
                
                {/* Current Password */}
                <div>
                    <label className="block text-[14px] mb-1 text-[#000000]">
                        Current Password
                    </label>

                    <div className="relative">
                        <input
                        type={showCurrent ? 'text' : 'password'}
                        placeholder="Enter current password"
                        className="w-full border border-[#1E3862] text-[#1E3862] text-[14px] rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-[#1E3862]"
                        />

                        <button
                        type="button"
                        onClick={() => setShowCurrent(!showCurrent)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#1E3862]"
                        >
                        {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* New Password */}
                <div>
                    <label className="block text-[14px] mb-1 text-[#000000]">
                        New Password
                    </label>

                    <div className="relative">
                        <input
                        type={showNew ? 'text' : 'password'}
                        placeholder="Enter new password"
                        className="w-full border border-[#1E3862] text-[#1E3862] text-[14px] rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-[#1E3862]"
                        />

                        <button
                        type="button"
                        onClick={() => setShowNew(!showNew)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#1E3862]"
                        >
                        {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="block text-[14px] mb-1 text-[#000000]">
                        Confirm New Password
                    </label>

                    <div className="relative">
                        <input
                        type={showConfirm ? 'text' : 'password'}
                        placeholder="Confirm new password"
                        className="w-full border border-[#1E3862] text-[#1E3862] text-[14px] rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-[#1E3862]"
                        />

                        <button
                        type="button"
                        onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#1E3862]"
                        >
                        {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* Button */}
                <div className="pt-4 flex justify-end">
                    <button className="bg-[#1E3862] min-w-[180px] h-[48px] text-white px-6 py-2 rounded-md text-[14px] hover:bg-white hover:text-[#1E3862] hover:border hover:border-[#1E3862] transition">
                    Update Password
                    </button>
                </div>
                </div>
            </>
            )}

        {activeTab === 'delete' && (
            <div>
                <h1 className="text-[20px] font-semibold mb-6 font-inter">
                    Delete Account
                </h1>
                <p className='text-[#6B6F72] text-[14px] font-inter'>This will permanently erase your FarmaDoc account and all associated information. Please note that this process is irreversible.</p>
                <div className="pt-4">
                    <button
                    onClick={() => setShowDeleteModal(true)}
                    className="bg-[#FFF8F8] min-w-[180px] h-[48px] text-[#D62828] px-6 py-2 rounded-md text-[14px] hover:bg-[#D62828] hover:text-[#FFF8F8] transition"
                    >
                    Delete Account
                    </button>
                </div>
            </div>
        )}
      </div>
    </div>
    {showDeleteModal && (
        <div
          className="fixed inset-0 bg-black/85 flex items-center justify-center z-50"
          onClick={() => setShowDeleteModal(false)}
        >
          <div
            className="bg-white rounded-lg w-[600px] p-8 font-inter"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-[18px] font-semibold mb-2">Deactivate Account?</h2>

            <p className="text-[14px] text-[#6B6F72] mb-4">
              This action will permanently erase your profile, along with your associated data. This
              action is irreversible.
            </p>

            <div className="mb-4">
              <label className="block text-[14px] font-semibold mb-2">Why are you leaving?</label>
              <div className="space-y-2 text-[14px] text-[#6B6F72]">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={reason}
                      checked={selectedReasons.includes(reason)}
                      onChange={() => toggleReason(reason)}
                      className="w-4 h-4 text-[#1E3862] border-gray-300 focus:ring-[#1E3862]"
                    />
                    <label htmlFor={reason} className="cursor-pointer select-none">
                      {reason}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Reason Textarea */}
            <div className="mb-4">
              <label className=" flex justify-between block text-[14px] text-[#6B6F72] mb-1">
                <span>Reason</span> 
                <span className="text-xs">(250 character limit)</span>
              </label>
              <textarea
                placeholder="Tell us more..."
                className="w-full border border-[#D6DADD] rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1E3862]"
                rows={3}
                maxLength={250}
                value={reasonText}
                onChange={(e) => setReasonText(e.target.value)}
              />
            </div>

            <div className="flex gap-3 mt-4">
                <button
                    onClick={() => setShowDeleteModal(false)}
                    className="w-1/2 px-4 py-3 rounded-md bg-[#F6F9FF] text-sm hover:bg-gray-100 transition"
                >
                    Go Back
                </button>

                <button
                onClick={() => {
                    setShowDeleteModal(false);
                    setShowConfirmDeleteModal(true);
                }}
                className="w-1/2 bg-[#D62828] text-white px-4 py-3 rounded-md text-sm hover:opacity-90 transition"
                >
                Deactivate
                </button>
            </div>
          </div>
        </div>
    )}

    {showConfirmDeleteModal && (
        <div
            className="fixed inset-0 bg-black/85 flex items-center justify-center z-50"
            onClick={() => setShowConfirmDeleteModal(false)}
        >
            <div
            className="bg-white rounded-lg w-[600px] p-8 font-inter"
            onClick={(e) => e.stopPropagation()}
            >
            <h2 className="text-[18px] font-semibold mb-2">Request Account Deletion?</h2>
            <p className="text-[14px] text-[#6B6F72] mb-6">
                Please enter your password to permanently delete your account and all associated data. This action cannot be undone.
            </p>

            <label htmlFor="password" className="text-black block text-[14px] font-medium mb-1">
                Enter Password
            </label>
            <div className="relative mb-6">
                <Image
                    src="/images/Pass.svg"
                    alt="password"
                    width={16}
                    height={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10"
                />
                <input
                id="password"
                type={passwordVisible ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full border border-[#D6DADD] rounded-md pl-10 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1E3862]"
                />
                <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#1E3862]"
                aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                >
                {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>

            <div className="flex gap-3">
                <button
                onClick={() => setShowConfirmDeleteModal(false)}
                className="w-1/2 px-4 py-3 rounded-md bg-[#F6F9FF] text-sm hover:bg-gray-100 transition"
                >
                Go Back
                </button>

                <button
                onClick={() => {
                    alert(`Deleting account with password: ${password}`);
                    setShowConfirmDeleteModal(false);
                    setPassword('');
                }}
                className="w-1/2 bg-[#D62828] text-white px-4 py-3 rounded-md text-sm hover:opacity-90 transition"
                >
                Delete Account
                </button>
            </div>
            </div>
        </div>
    )}
    </div>
  );
}