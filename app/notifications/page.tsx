'use client';

import Header from '@/components/Header';
import { useState } from 'react';
import Image from "next/image";
import { useAppTranslation } from "@/lib/useAppTranslation";

type Notification = {
  id: string;
  title: string;
  message: string;
  time: string;
  read?: boolean;
};

const notificationsData: Notification[] = [
  {
    id: '1',
    title: 'Order Completed!',
    message: 'Your order #FMD-2401 has been picked up.',
    time: '2h',
    read: false,
  },
  {
    id: '2',
    title: 'Medicine Reminder',
    message: 'Time to take your Cetirizine 10mg.',
    time: '1d',
    read: true,
  },
  {
    id: '3',
    title: 'New Merchant Nearby',
    message: 'Apollo Pharmacy opened 0.8km from you.',
    time: '7d',
    read: false,
  },
  {
    id: '4',
    title: 'Price Drop Alert',
    message: 'Vitamin C is now €38 (was €48).',
    time: '25 Sep',
    read: true,
  },
];

export default function NotificationsPage() {
  const [tab, setTab] = useState<'all' | 'unread'>('all');

  const { t } = useAppTranslation();

  const filtered = notificationsData.filter((n) => {
    if (tab === 'unread') return !n.read;
    return true;
  });

  return (
    <div>
      <Header />
      <div className="pt-[80px] sm:pt-[135px]"></div>

      <div className="max-w-[847px] mx-auto p-6">

        {/* TITLE (ONLY LABEL CHANGE) */}
        <h1 className="text-[16px] font-semibold mb-4 font-inter">
          {t("notifications.title")}
        </h1>

        {/* TABS (ONLY LABEL CHANGE) */}
        <div className="flex gap-6 mb-4 text-[14px]">
          <button
            onClick={() => setTab('all')}
            className={`pb-2 ${
              tab === 'all'
                ? 'border-b-2 border-[#1E3862] text-[#1E3862] font-medium'
                : 'text-gray-500'
            }`}
          >
            {t("notifications.all")}
          </button>

          <button
            onClick={() => setTab('unread')}
            className={`pb-2 ${
              tab === 'unread'
                ? 'border-b-2 border-[#1E3862] text-[#1E3862] font-medium'
                : 'text-gray-500'
            }`}
          >
            {t("notifications.unread")}
          </button>
        </div>

        {/* LIST (NO CHANGE) */}
        <div className="border-[#EEF2F5] border rounded-md max-w-[847px]">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`flex items-start justify-between p-4 transition ${
                item.read ? 'bg-white' : 'bg-[#F6F9FF] hover:bg-[#EEF2F5]'
              }`}
            >
              <div className="flex items-start gap-3 font-inter">
                <Image
                  src="/images/medi1.png"
                  alt="My Order"
                  width={44}
                  height={36}
                  className="border border-gray-300 rounded"
                />

                <div>
                  <h2 className="font-semibold text-[#1A1A1F]">
                    {item.title}
                  </h2>
                  <p className="text-sm text-[#8C8C94]">
                    {item.message}
                  </p>
                </div>
              </div>

              <span className="text-xs text-gray-500 whitespace-nowrap">
                {item.time}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}