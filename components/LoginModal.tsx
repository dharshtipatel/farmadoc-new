"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";
import Image from "next/image";

type Props = {
  onClose: () => void;
  onLoginSuccess?: () => void;
};

export default function LoginModal({ onClose, onLoginSuccess }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [newCustomerPassword, setNewCustomerPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [step, setStep] = useState<"login" | "forgot" | "otp" | "reset" | "signup" | "customerSignup">("login");

  const isForgot = step === "forgot";
  const isOtp = step === "otp";
  const isReset = step === "reset";
  const isSignup = step === "signup";
  const isCustomerSignup = step === "customerSignup";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/85 z-50 px-3 sm:px-4"
      onClick={onClose}
    >
      <div
        className="flex w-full max-w-[1000px] flex-col md:flex-row bg-white rounded-lg overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Image */}
        <div className="hidden sm:flex w-full md:w-1/3 relative h-[200px] md:h-auto">
          <Image
            src="/images/Graphic.png"
            alt="Login Background"
            fill
            className=""
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-2/3 p-6 sm:p-8 md:p-20 min-h-[640px] max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500"
          >
            ✕
          </button>

          {/* Heading */}
          <h2 className="text-xl font-semibold">
            {isSignup || isCustomerSignup
                ? ""
                : isReset
                ? "Reset Your Password"
                : isOtp
                ? "Verify Your Email"
                : isForgot
                ? "Forgot Password?"
                : "Welcome to FarmaDoc"}
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            {isSignup || isCustomerSignup
                ? ""
                : isReset
                ? "Reset password to regain access to your account."
                : isOtp
                ? "We've sent a verification code to your Email."
                : isForgot
                ? "Enter your email to reset your password"
                : "Find and reserve medicines near you"}
          </p>

          {/* Email / OTP / RESET */}
          <label className="text-sm font-medium">
            {isOtp || isReset || isSignup || isCustomerSignup ? "" : "Email"}
          </label>

          {/* Email */}
          {!isOtp && !isReset && !isSignup && !isCustomerSignup && (
            <div className="flex items-center border rounded-md px-3 py-3 mt-1 mb-4">
              <Mail size={16} className="mr-2" />
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full outline-none text-sm"
              />
            </div>
          )}

          {/* OTP */}
          {isOtp && (
            <>
              <div className="flex gap-2 mt-2 mb-4">
                {[...Array(6)].map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="w-10 h-12 text-center border rounded-md outline-none focus:border-blue-500"
                    onChange={(e) => {
                      if (e.target.value && e.target.nextSibling) {
                        (
                          e.target.nextSibling as HTMLInputElement
                        ).focus();
                      }
                    }}
                  />
                ))}
              </div>

              <p className="text-sm text-gray-500">
                Didn’t receive Code?{" "}
                <span className="text-blue-600 cursor-pointer">
                  Resend
                </span>
              </p>
            </>
          )}

          {isSignup && (
        <div className="flex flex-col justify-center items-center h-full text-center">
            
            {/* Heading */}
            <h2 className="text-xl font-semibold mb-2">
            How do you want to use FarmaDoc?
            </h2>

            {/* Cards */}
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-4 sm:gap-6 mt-6 w-full">
            <div onClick={() => setStep("customerSignup")} className="w-full sm:w-auto max-w-[220px] border border-[#D6DADD] rounded-lg px-6 py-5 text-center cursor-pointer hover:shadow bg-[#F6F9FF] min-w-[182.5px]">
                <div className="flex justify-center mb-2">
                <Image
                    src="/images/customer.svg"
                    alt="Customer"
                    width={32}
                    height={32}
                />
                </div>
                <p className="text-sm font-semibold text-[#1E3862]">
                I’m a Customer
                </p>
            </div>

            <div className="w-full sm:w-auto max-w-[220px] border border-[#D6DADD] rounded-lg px-6 py-5 text-center cursor-pointer hover:shadow bg-[#F6F9FF] min-w-[182.5px]">
                <div className="flex justify-center mb-2">
                <Image
                    src="/images/pharmacy_icon.svg"
                    alt="Pharmacy"
                    width={32}
                    height={32}
                />
                </div>
                <p className="text-sm font-semibold text-[#1E3862]">
                I’m a Pharmacy
                </p>
            </div>
            </div>
        </div>
        )}

        {isCustomerSignup && (
            <>
                <h2 className="text-xl font-semibold mb-2">
                Create Your Account
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                Sign up and get your meds on high discount
                </p>

                {/* Full Name */}
                <label className="text-sm">Full Name</label>
                <div className="flex items-center border rounded-md px-3 py-3 mt-1 mb-4 gap-1">
                    <Image
                    src="/images/customer.svg"
                    alt="Customer"
                    width={23}
                    height={23}
                />
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full outline-none text-sm"
                />
                </div>

                {/* Email */}
                <label className="text-sm">Email</label>
                <div className="flex items-center border rounded-md px-3 py-3 mt-1 mb-4">
                <Mail size={23} className="mr-2" />
                <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full outline-none text-sm"
                />
                </div>

                {/* Phone */}
                <label className="text-sm">Phone</label>
                <div className="flex items-center border rounded-md px-3 py-3 mt-1 mb-4">
                <input
                    type="text"
                    placeholder="+39 123 4567890"
                    className="w-full outline-none text-sm"
                />
                </div>

                {/* Password */}
                <label className="text-sm">Password</label>
                <div className="flex items-center border rounded-md px-3 py-3 mt-1 mb-4">
                    <Image
                    src="/images/Pass.svg"
                    alt="new password"
                    width={16}
                    height={16}
                    className="mr-2"
                />
                <input
                    type={newCustomerPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full outline-none text-sm"
                />
                <button
                    onClick={() => setNewCustomerPassword(!newCustomerPassword)}
                    type="button"
                >
                {newCustomerPassword ? (
                  <EyeOff size={19} className="text-gray-400" />
                ) : (
                  <Eye size={19} className="text-gray-400" />
                )}
              </button>
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-2 text-sm mb-4">
                <input type="checkbox" defaultChecked />
                <span>
                    By Continue, You are continue with{" "}
                    <span className="text-blue-600 cursor-pointer">
                    Terms & Conditions
                    </span>
                </span>
                </div>
            </>
        )}

          {/* RESET PASSWORD (added same style as OTP block) */}
          {isReset && (
            <>
              <label className="text-sm">New Password</label>
              <div className="flex items-center border rounded-md px-3 py-3 mt-1 mb-3">
                <Image
                    src="/images/Pass.svg"
                    alt="new password"
                    width={16}
                    height={16}
                    className="mr-2"
                />
                <input
                  type={newPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  className="w-full outline-none text-sm"
                />
                <button
                onClick={() => setNewPassword(!newPassword)}
                type="button"
              >
                {newPassword ? (
                  <EyeOff size={16} className="text-gray-400" />
                ) : (
                  <Eye size={16} className="text-gray-400" />
                )}
              </button>
              </div>

              <label className="text-sm">Confirm Password</label>
              <div className="flex items-center border rounded-md px-3 py-3 mt-1 mb-4">
                <Image
                    src="/images/Pass.svg"
                    alt="confirm password"
                    width={16}
                    height={16}
                    className="mr-2"
                />
                <input
                  type={confirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full outline-none text-sm"
                />
                <button
                onClick={() => setConfirmPassword(!confirmPassword)}
                type="button"
              >
                {confirmPassword ? (
                  <EyeOff size={16} className="text-gray-400" />
                ) : (
                  <Eye size={16} className="text-gray-400" />
                )}
              </button>
              </div>
            </>
          )}

          {/* Password */}
          <div
            className={`transition-opacity duration-300 ${
              isForgot || isOtp || isReset || isSignup
                ? "opacity-0 invisible" : isCustomerSignup ? "hidden"
                : "opacity-100"
            }`}
          >
            <label className="text-sm">Password</label>

            <div className="flex items-center border rounded-md px-3 py-3 mt-1 mb-2">
              <Image
                src="/images/Pass.svg"
                alt="password"
                width={16}
                height={16}
                className="mr-2"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full outline-none text-sm"
              />

              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
              >
                {showPassword ? (
                  <EyeOff size={16} className="text-gray-400" />
                ) : (
                  <Eye size={16} className="text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div
            className={`flex justify-between items-center text-sm mb-4 ${
              isForgot || isOtp || isReset || isSignup ? "invisible" : isCustomerSignup ? "hidden" : ""
            }`}
          >
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              className="text-gray-500"
              onClick={() => setStep("forgot")}
            >
              Forgot Password?
            </button>
          </div>

          {/* Button (UNCHANGED POSITION) */}
          <button
            className={`w-full bg-[#1E3862] text-white py-3 rounded-md ${
              isSignup ? "invisible" : ""
            }`}
            onClick={() => {
                if (step === "login") {
                  onLoginSuccess?.();
                } else if (step === "forgot" || step === "customerSignup") {
                  setStep("otp");
                } else if (step === "otp") {
                  setStep("reset");
                } else if (step === "reset") {
                  onLoginSuccess?.();
                }
            }}
            >
            {step === "login"
                ? "Log in"
                : step === "customerSignup"
                ? "Continue"
                : step === "forgot"
                ? "Continue"
                : step === "otp"
                ? "Verify"
                : step === "reset"
                ? "Reset Password"
                : ""}
            </button>

          {/* OR + Google */}
          <div className={`${isForgot || isOtp || isReset || isSignup ? "invisible" : ""}`}>
            <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-gray-100"></div>
              <span className="px-3 text-gray-400 text-xs">OR</span>
              <div className="flex-1 h-px bg-gray-100"></div>
            </div>

            <button className="w-full border border-gray-300 py-3 rounded-md flex items-center justify-center gap-2">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-4 h-4"
              />
              Continue with Google
            </button>
          </div>

          {/* Bottom text */}
          {!isOtp && !isReset && !isSignup && (
            <p className="text-sm text-center mt-4">
              { isCustomerSignup ? "Already have an account?"
              : isForgot
                ? "Remember Password?"
                : "Don’t have an account?"}{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setStep( isCustomerSignup ? "login" : isForgot ? "login" : "signup")}
              >
                {isForgot || isCustomerSignup ? "Log in"  : "Sign Up"}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}