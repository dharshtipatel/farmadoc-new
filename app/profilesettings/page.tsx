'use client';

import Header from '@/components/Header';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { useAppTranslation } from '@/lib/useAppTranslation';
import { handleGetUserById } from "@/lib/api/hooks/usercontroller";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const { get, t } = useAppTranslation();
  const [activeTab, setActiveTab] = useState('edit');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [reasonText, setReasonText] = useState('');
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const reasons = get<string[]>('profileSettingsPage.reasons', [
    'Found a better alternative',
    'Privacy concerns',
    'Service is too expensive',
    'Unsatisfactory experience',
    'Other',
  ]);

  const toggleReason = (reason: string) => {
    if (selectedReasons.includes(reason)) {
      setSelectedReasons(selectedReasons.filter((r) => r !== reason));
    } else {
      setSelectedReasons([...selectedReasons, reason]);
    }
  };

  const [userData, setUserData] = useState<any>(null);
  useEffect(() => {
  handleGetUserById(
    (err) => console.error(err),
    (data) => {
      setUserData(data);
      console.log(data);
    }
  );
}, []);

  return (
    <div>
      <Header />
      <div className="pt-[80px] sm:pt-[135px]"></div>
      <div className="bg-white flex max-w-[846px] mx-auto mt-8">
        <div className="w-[285px] border-r border-[#EEF2F5] px-8 font-inter">
          <h2 className="text-[20px] font-semibold mb-6 text-[#1A1A1F]">{t('profileSettingsPage.profileManagement')}</h2>

          <div className="space-y-3">
            <button
              onClick={() => setActiveTab('edit')}
              className={`w-full text-center px-4 py-3 rounded-md text-sm ${
                activeTab === 'edit' ? 'bg-[#E5F6FF] text-[#1192E8]' : 'border border-[#EEF2F5] text-[#1E3862]'
              }`}
            >
              {t('profileSettingsPage.editProfile')}
            </button>

            <button
              onClick={() => setActiveTab('password')}
              className={`w-full text-center px-4 py-3 rounded-md text-sm ${
                activeTab === 'password' ? 'bg-[#E5F6FF] text-[#1192E8]' : 'border border-[#EEF2F5] text-[#1E3862]'
              }`}
            >
              {t('profileSettingsPage.changePassword')}
            </button>

            <button
              onClick={() => setActiveTab('delete')}
              className={`w-full text-center px-4 py-3 rounded-md text-sm ${
                activeTab === 'delete' ? 'bg-[#E5F6FF] text-[#1192E8]' : 'border border-[#EEF2F5] text-[#1E3862]'
              }`}
            >
              {t('profileSettingsPage.deleteAccount')}
            </button>
          </div>
        </div>

        <div className="flex-1 px-8 font-inter">
          {activeTab === 'edit' && (
            <>
              <h1 className="text-[20px] font-semibold mb-6">{t('profileSettingsPage.personalInformation')}</h1>

              <div className="max-w-[521px] space-y-5">
                <div>
                  <label className="block text-[14px] mb-1 text-medium text-[#000000]">{t('profileSettingsPage.fullName')}</label>
                  <input type="text" value={userData?.name || ""} className="w-full border border-[#D6DADD] text-[#1E3862] text-[14px] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#1E3862]"
                  onChange={(e) =>
                    setUserData((prev: any) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  } />
                </div>

                <div>
                  <label className="block text-[14px] mb-1 text-medium text-[#000000]">{t('profileSettingsPage.phoneNumber')}</label>
                  <input type="text" value={userData?.phone || ""} className="w-full border border-[#D6DADD] text-[#1E3862] text-[14px] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#1E3862]"
                  onChange={(e) =>
                    setUserData((prev: any) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  } />
                </div>

                <div>
                  <label className="block text-[14px] mb-1 text-medium text-[#000000]">{t('profileSettingsPage.email')}</label>
                  <input type="email" value={userData?.email || ""} className="w-full bg-[#F6F9FF] border border-[#D6DADD] text-[#1E3862] text-[14px] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#1E3862]" disabled />
                </div>

                <div className="pt-4 flex justify-end">
                  <button className="bg-[#1E3862] min-w-[162px] h-[48px] text-white px-6 py-2 rounded-md text-[14px] text-medium hover:bg-white hover:text-[#1E3862] hover:border hover:border-[#1E3862] transition">
                    {t('profileSettingsPage.updateProfile')}
                  </button>
                </div>
              </div>
            </>
          )}

          {activeTab === 'password' && (
            <>
              <h1 className="text-[20px] font-semibold mb-6">{t('profileSettingsPage.changePassword')}</h1>

              <div className="max-w-[521px] space-y-5">
                <div>
                  <label className="block text-[14px] mb-1 text-[#000000]">{t('profileSettingsPage.currentPassword')}</label>
                  <div className="relative">
                    <input type={showCurrent ? 'text' : 'password'} placeholder={t('profileSettingsPage.enterCurrentPassword')} className="w-full border border-[#1E3862] text-[#1E3862] text-[14px] rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-[#1E3862]" />
                    <button type="button" onClick={() => setShowCurrent(!showCurrent)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#1E3862]">
                      {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] mb-1 text-[#000000]">{t('profileSettingsPage.newPassword')}</label>
                  <div className="relative">
                    <input type={showNew ? 'text' : 'password'} placeholder={t('profileSettingsPage.enterNewPassword')} className="w-full border border-[#1E3862] text-[#1E3862] text-[14px] rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-[#1E3862]" />
                    <button type="button" onClick={() => setShowNew(!showNew)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#1E3862]">
                      {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] mb-1 text-[#000000]">{t('profileSettingsPage.confirmNewPassword')}</label>
                  <div className="relative">
                    <input type={showConfirm ? 'text' : 'password'} placeholder={t('profileSettingsPage.confirmNewPasswordPlaceholder')} className="w-full border border-[#1E3862] text-[#1E3862] text-[14px] rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-[#1E3862]" />
                    <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#1E3862]">
                      {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button className="bg-[#1E3862] min-w-[180px] h-[48px] text-white px-6 py-2 rounded-md text-[14px] hover:bg-white hover:text-[#1E3862] hover:border hover:border-[#1E3862] transition">
                    {t('profileSettingsPage.updatePassword')}
                  </button>
                </div>
              </div>
            </>
          )}

          {activeTab === 'delete' && (
            <div>
              <h1 className="text-[20px] font-semibold mb-6 font-inter">{t('profileSettingsPage.deleteAccount')}</h1>
              <p className="text-[#6B6F72] text-[14px] font-inter">{t('profileSettingsPage.deleteWarning')}</p>
              <div className="pt-4">
                <button onClick={() => setShowDeleteModal(true)} className="bg-[#FFF8F8] min-w-[180px] h-[48px] text-[#D62828] px-6 py-2 rounded-md text-[14px] hover:bg-[#D62828] hover:text-[#FFF8F8] transition">
                  {t('profileSettingsPage.deleteAccount')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50" onClick={() => setShowDeleteModal(false)}>
          <div className="bg-white rounded-lg w-[600px] p-8 font-inter" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[18px] font-semibold mb-2">{t('profileSettingsPage.deactivateAccountTitle')}</h2>
            <p className="text-[14px] text-[#6B6F72] mb-4">{t('profileSettingsPage.deactivateAccountDescription')}</p>

            <div className="mb-4">
              <label className="block text-[14px] font-semibold mb-2">{t('profileSettingsPage.whyAreYouLeaving')}</label>
              <div className="space-y-2 text-[14px] text-[#6B6F72]">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-center gap-2">
                    <input type="checkbox" id={reason} checked={selectedReasons.includes(reason)} onChange={() => toggleReason(reason)} className="w-4 h-4 text-[#1E3862] border-gray-300 focus:ring-[#1E3862]" />
                    <label htmlFor={reason} className="cursor-pointer select-none">{reason}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className=" flex justify-between block text-[14px] text-[#6B6F72] mb-1">
                <span>{t('profileSettingsPage.reason')}</span>
                <span className="text-xs">({t('profileSettingsPage.characterLimit')})</span>
              </label>
              <textarea placeholder={t('profileSettingsPage.tellUsMore')} className="w-full border border-[#D6DADD] rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1E3862]" rows={3} maxLength={250} value={reasonText} onChange={(e) => setReasonText(e.target.value)} />
            </div>

            <div className="flex gap-3 mt-4">
              <button onClick={() => setShowDeleteModal(false)} className="w-1/2 px-4 py-3 rounded-md bg-[#F6F9FF] text-sm hover:bg-gray-100 transition">{t('profileSettingsPage.goBack')}</button>
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setShowConfirmDeleteModal(true);
                }}
                className="w-1/2 bg-[#D62828] text-white px-4 py-3 rounded-md text-sm hover:opacity-90 transition"
              >
                {t('profileSettingsPage.deactivate')}
              </button>
            </div>
          </div>
        </div>
      )}

      {showConfirmDeleteModal && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50" onClick={() => setShowConfirmDeleteModal(false)}>
          <div className="bg-white rounded-lg w-[600px] p-8 font-inter" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[18px] font-semibold mb-2">{t('profileSettingsPage.requestAccountDeletionTitle')}</h2>
            <p className="text-[14px] text-[#6B6F72] mb-6">{t('profileSettingsPage.requestAccountDeletionDescription')}</p>

            <label htmlFor="password" className="text-black block text-[14px] font-medium mb-1">{t('profileSettingsPage.enterPassword')}</label>
            <div className="relative mb-6">
              <Image src="/images/Pass.svg" alt="password" width={16} height={16} className="absolute left-3 top-1/2 -translate-y-1/2 z-10" />
              <input id="password" type={passwordVisible ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t('profileSettingsPage.enterPasswordPlaceholder')} className="w-full border border-[#D6DADD] rounded-md pl-10 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1E3862]" />
              <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#1E3862]" aria-label={passwordVisible ? t('profileSettingsPage.hidePassword') : t('profileSettingsPage.showPassword')}>
                {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setShowConfirmDeleteModal(false)} className="w-1/2 px-4 py-3 rounded-md bg-[#F6F9FF] text-sm hover:bg-gray-100 transition">{t('profileSettingsPage.goBack')}</button>
              <button
                onClick={() => {
                  setShowConfirmDeleteModal(false);
                  setPassword('');
                }}
                className="w-1/2 bg-[#D62828] text-white px-4 py-3 rounded-md text-sm hover:opacity-90 transition"
              >
                {t('profileSettingsPage.deleteAccount')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
