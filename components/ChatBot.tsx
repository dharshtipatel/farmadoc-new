"use client";

import { useState } from "react";
import Image from "next/image";

export default function ChatBot() {
  const [open, setOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const [messages, setMessages] = useState<any[]>([
    {
      type: "bot",
      text: "Ciao! 👋 I'm your FarmaDoc assistant. Describe your symptoms and I'll suggest medicines available at nearby pharmacies. Remember, this is only a suggestion - always consult your doctor or pharmacist before taking any medication.",
    },
  ]);


  // 👉 Send message
  const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = {
    type: "user",
    text: input,
  };

  setMessages((prev) => [...prev, userMessage]);

  try {
    const res = await fetch("/api/ai", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ message: input }),
});

const data = await res.json();

// ❗ HANDLE EMPTY PRODUCTS CASE FIRST
if (!data.products || data.products.length === 0) {
  const botMessage = {
    type: "bot",
    text: data.message || "No products found for your symptoms.",
  };

  setMessages((prev) => [...prev, botMessage]);
  return;
}

// ✅ NORMAL CASE (products found)
const botMessage = {
  type: "bot",
  text: data.text,
  products: data.products,
};

setMessages((prev) => [...prev, botMessage]);
  } catch (err) {
    setMessages((prev) => [
      ...prev,
      { type: "bot", text: "Something went wrong." },
    ]);
  }

  setInput("");
};

  return (
    <>
      {/* Floating Button */}
      <div
        className="fixed bottom-6 right-6 z-50 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Image
          src="/images/chatbot.png"
          alt="Chatbot"
          width={64}
          height={64}
          sizes="64px"
          className="object-contain bg-[#0D9488] border-4 border-white rounded-full p-2 hover:scale-110 transition-transform"
        />
      </div>

      {/* FULL CHAT MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-end bg-black/85"
          onClick={() => setOpen(false)}
        >
          {/* Chat Container */}
          <div
            className="w-full sm:w-[420px] h-[90vh] sm:h-[600px] bg-white rounded-t-2xl sm:rounded-2xl mr-0 sm:mr-6 mb-0 sm:mb-6 flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-b from-blue-600 to-teal-500 text-white p-4 flex items-center gap-4">
              <Image
                src="/images/chatbot_header_icon.png"
                alt="Chatbot"
                width={40}
                height={40}
                className="rounded-m hover:scale-110 transition"
              />

              <div className="flex-1">
                <h2 className="font-semibold">FarmaDoc Assistant</h2>
                <p className="text-xs opacity-80">Medicine Suggestions</p>
              </div>

              <Image
                src="/images/chatbot.png"
                alt="Chatbot"
                width={40}
                height={40}
                className="rounded-m hover:scale-110 transition"
              />
            </div>

            {/* Disclaimer */}
            <div className="p-2 m-3 bg-[#FEF3C7] border border-[#FCD34D] rounded-lg text-[12px] text-[#92400E] flex items-start gap-2">
              <Image
                src="/images/warning.svg"
                alt="Warning"
                width={20}
                height={20}
              />

              <p>
                <b>Medical Disclaimer:</b> These are suggestions only. Always
                consult your doctor or pharmacist before taking any medication.
              </p>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-3 space-y-3 overflow-y-auto bg-gray-50">
              {messages.map((msg, i) => (
                <div key={i}>
                  {/* Message */}
                  <div
                    className={
                      msg.type === "user"
                        ? "bg-[#1B4FD8] text-white p-3 rounded-xl text-sm w-fit ml-auto max-w-[85%]"
                        : "bg-[#F1F5F9] p-3 rounded-xl text-sm w-fit max-w-[85%]"
                    }
                  >
                    {msg.text}
                  </div>

                  {/* Products */}
                  {msg.products && (
                    <div className="mt-3 space-y-3">
                      {msg.products.map((p: any, idx: number) => (
                        <div
                          key={idx}
                          className="bg-white border border-[#E2E8F0] rounded-xl p-3 flex items-center gap-3"
                        >
                          <Image
                            src={p.image}
                            alt={p.name}
                            width={80}
                            height={80}
                            className="rounded-md object-cover flex-shrink-0 border border-[#F1F5F9]"
                          />

                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">
                              <b>{p.name}</b>
                            </p>

                            <p className="font-medium text-[12px] text-[#64748B]">
                              {p.desc}
                            </p>

                            <div className="flex items-center justify-between mt-1">
                              <p className="text-xs text-gray-500">
                                {p.price}
                              </p>

                              <span className="text-xs text-green-600 font-medium">
                                {p.stock}
                              </span>
                            </div>

                            <div className="flex justify-between items-center mt-1">
                              <p className="font-medium text-[12px] text-[#64748B]">
                                📍 {p.location}
                              </p>

                              <p className="text-[12px] text-[#64748B]">
                                {p.km}
                              </p>
                            </div>
                          </div>

                          <div className="text-gray-400 text-xl">›</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="p-2 m-3 bg-[#FEF3C7] border border-[#FCD34D] rounded-lg text-[12px] text-[#92400E] flex items-start gap-2">
              <Image
                src="/images/warning.svg"
                alt="Warning"
                width={20}
                height={20}
              />

              <p>
                Consult a healthcare professional before use.
              </p>
            </div>

            {/* Input */}
            <div className="p-3 border-t border-[#E2E8F0] flex gap-2 bg-white">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                type="text"
                placeholder="Describe your symptoms..."
                className="flex-1 border rounded-xl border-[#E2E8F0] px-4 py-2 text-sm text-[#0F172A80] outline-none"
              />

              <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-4 rounded-full text-sm"
              >
                ➤
              </button>
            </div>

            <p className="text-xs text-[#94A3B8] p-2 text-center mb-4">
              Try: "I have a sore throat" or "headache"
            </p>
          </div>
        </div>
      )}
    </>
  );
}