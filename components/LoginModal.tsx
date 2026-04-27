"use client";

import { useEffect, useState } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import PaymentModal from "./PaymentModel";
import { useAppTranslation } from "@/lib/useAppTranslation";

type Props = {
  onClose: () => void;
  onLoginSuccess?: () => void;
  onOpenPayment?: () => void;
  initialStep?:
    | "login"
    | "forgot"
    | "otp"
    | "reset"
    | "signup"
    | "customerSignup"
    | "pharmacySignup"
    | "pharmacyDetails";
};

type Step =
  | "login"
  | "forgot"
  | "otp"
  | "reset"
  | "signup"
  | "customerSignup"
  | "pharmacySignup"
  | "pharmacyDetails";

export default function LoginModal({
  onClose,
  onLoginSuccess,
  initialStep = "login",
}: Props) {
  const { t } = useAppTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [newCustomerPassword, setNewCustomerPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [step, setStep] = useState<Step>(initialStep);

  const isForgot = step === "forgot";
  const isOtp = step === "otp";
  const isReset = step === "reset";
  const isSignup = step === "signup";
  const isCustomerSignup = step === "customerSignup";
  const isPharmacySignup = step === "pharmacySignup";
  const isPharmacyDetails = step === "pharmacyDetails";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const getStepTitle = () => {
    if (isSignup) return "";
    if (isCustomerSignup) return t("loginModal.steps.customerSignup.title");
    if (isPharmacySignup) return t("loginModal.steps.pharmacySignup.title");
    if (isPharmacyDetails) return t("loginModal.steps.pharmacyDetails.title");
    if (isReset) return t("loginModal.steps.reset.title");
    if (isOtp) return t("loginModal.steps.otp.title");
    if (isForgot) return t("loginModal.steps.forgot.title");
    return t("loginModal.steps.login.title");
  };

  const getStepDescription = () => {
    if (isSignup) return "";
    if (isCustomerSignup) return t("loginModal.steps.customerSignup.description");
    if (isPharmacySignup) return t("loginModal.steps.pharmacySignup.description");
    if (isPharmacyDetails) return t("loginModal.steps.pharmacyDetails.description");
    if (isReset) return t("loginModal.steps.reset.description");
    if (isOtp) return t("loginModal.steps.otp.description");
    if (isForgot) return t("loginModal.steps.forgot.description");
    return t("loginModal.steps.login.description");
  };

  const getButtonText = () => {
    if (step === "pharmacyDetails") return t("loginModal.steps.pharmacyDetails.button");
    if (step === "pharmacySignup") return t("loginModal.steps.pharmacySignup.button");
    if (step === "login") return t("loginModal.steps.login.button");
    if (step === "customerSignup") return t("loginModal.steps.customerSignup.button");
    if (step === "forgot") return t("loginModal.steps.forgot.button");
    if (step === "otp") return t("loginModal.steps.otp.button");
    if (step === "reset") return t("loginModal.steps.reset.button");
    return "";
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-3 sm:px-4"
      onClick={() => !isPharmacySignup && onClose()}
    >
      <div
        className="relative flex w-full max-w-[1000px] flex-col overflow-hidden rounded-lg bg-white md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative hidden h-[200px] w-full sm:flex md:h-auto md:w-1/3">
          <Image
            src="/images/graphic1.png"
            alt="Login Background"
            fill
            className=""
          />
        </div>

        <div className="max-h-[90vh] min-h-[640px] w-full overflow-y-auto p-6 sm:p-8 md:w-2/3 md:p-20">
          <button
            onClick={onClose}
            aria-label={t("loginModal.close")}
            className="absolute top-4 right-4 text-gray-500"
          >
            x
          </button>

          <h2 className="text-xl font-bold text-[#000000]">{getStepTitle()}</h2>
          <p className="mb-6 text-sm text-gray-500">{getStepDescription()}</p>

          <label className="text-sm font-medium">
            {isOtp || isReset || isSignup || isCustomerSignup || isPharmacySignup || isPharmacyDetails
              ? ""
              : t("loginModal.email")}
          </label>

          {!isOtp && !isReset && !isSignup && !isCustomerSignup && !isPharmacySignup && !isPharmacyDetails && (
            <div className="mt-1 mb-4 flex items-center rounded-md border px-3 py-3">
              <Mail size={16} className="mr-2" />
              <input
                type="email"
                placeholder={t("loginModal.placeholders.email")}
                className="w-full text-sm outline-none"
              />
            </div>
          )}

          {isOtp && (
            <>
              <div className="mt-2 mb-4 flex gap-2">
                {[...Array(6)].map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="h-12 w-10 rounded-md border text-center outline-none focus:border-blue-500"
                    onChange={(e) => {
                      if (e.target.value && e.target.nextSibling) {
                        (e.target.nextSibling as HTMLInputElement).focus();
                      }
                    }}
                  />
                ))}
              </div>

              <p className="text-sm text-gray-500">
                {t("loginModal.didNotReceiveCode")}{" "}
                <span className="cursor-pointer text-blue-600">
                  {t("loginModal.resend")}
                </span>
              </p>
            </>
          )}

          {isCustomerSignup && (
            <>

              <label className="text-sm">{t("loginModal.fullName")}</label>
              <div className="mt-1 mb-4 flex items-center gap-1 rounded-md border px-3 py-3">
                <Image
                  src="/images/customer.svg"
                  alt="Customer"
                  width={23}
                  height={23}
                />
                <input
                  type="text"
                  placeholder={t("loginModal.placeholders.fullName")}
                  className="w-full text-sm outline-none"
                />
              </div>

              <label className="text-sm">{t("loginModal.email")}</label>
              <div className="mt-1 mb-4 flex items-center rounded-md border px-3 py-3">
                <Mail size={23} className="mr-2" />
                <input
                  type="email"
                  placeholder={t("loginModal.placeholders.email")}
                  className="w-full text-sm outline-none"
                />
              </div>

              <label className="text-sm">{t("loginModal.phone")}</label>
              <div className="mt-1 mb-4 flex items-center rounded-md border px-3 py-3">
                <input
                  type="text"
                  placeholder={t("loginModal.placeholders.phone")}
                  className="w-full text-sm outline-none"
                />
              </div>

              <label className="text-sm">{t("loginModal.password")}</label>
              <div className="mt-1 mb-4 flex items-center rounded-md border px-3 py-3">
                <Image
                  src="/images/Pass.svg"
                  alt="new password"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <input
                  type={newCustomerPassword ? "text" : "password"}
                  placeholder={t("loginModal.placeholders.password")}
                  className="w-full text-sm outline-none"
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

              <div className="mb-4 flex items-center gap-2 text-sm">
                <input type="checkbox" defaultChecked />
                <span>
                  {t("loginModal.termsIntro")}{" "}
                  <span className="cursor-pointer text-blue-600">
                    {t("loginModal.termsAndConditions")}
                  </span>
                </span>
              </div>
            </>
          )}

          {isPharmacySignup && (
            <div className="font-inter">

              <div className="mb-4 flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#000000]">
                  {t("loginModal.pharmacyBusinessName")}
                </label>
                <input
                  type="text"
                  placeholder={t("loginModal.placeholders.businessName")}
                  className="w-full rounded-md border border-[#D1D5DB] px-3 py-3 focus:outline-none focus:ring-1 focus:ring-[#1E3862]"
                />
              </div>

              <div className="mb-4 flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#000000]">
                  {t("loginModal.email")}
                </label>
                <input
                  type="email"
                  placeholder={t("loginModal.placeholders.email")}
                  className="w-full rounded-md border border-[#D1D5DB] px-3 py-3 focus:outline-none focus:ring-1 focus:ring-[#1E3862]"
                />
              </div>

              <div className="mb-4 flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#000000]">
                  {t("loginModal.phone")}
                </label>
                <input
                  type="text"
                  placeholder={t("loginModal.placeholders.phone")}
                  className="w-full rounded-md border border-[#D1D5DB] px-3 py-3 focus:outline-none focus:ring-1 focus:ring-[#1E3862]"
                />
              </div>

              <div className="mb-4 flex items-center gap-2 text-sm">
                <input type="checkbox" defaultChecked />
                <span className="text-[12px] text-[#6B6F72]">
                  {t("loginModal.representPharmacy")}
                </span>
              </div>

              <div className="mb-4 flex">
                <ReCAPTCHA
                  sitekey="6LeMXTUsAAAAAJIiT0b4K0B8bx2KPgJmLwYjvIcE"
                  onChange={(value: string | null) => setCaptchaValue(value)}
                />
              </div>
            </div>
          )}

          {isPharmacyDetails && (
            <>
              <h2 className="mb-2 text-xl font-bold text-[#000000]">
                {t("loginModal.steps.pharmacyDetails.title")}
              </h2>
              <p className="mb-6 text-sm text-gray-500">
                {t("loginModal.steps.pharmacyDetails.description")}
              </p>

              <div className="mb-4 flex flex-col gap-1">
                <label className="text-sm text-[#000000]">
                  {t("loginModal.streetAddress")}
                </label>
                <input
                  type="text"
                  placeholder={t("loginModal.placeholders.streetAddress")}
                  className="w-full rounded-md border border-[#D6DADD] px-3 py-3"
                />
              </div>

              <div className="mb-4 flex gap-3">
                <div className="flex w-1/2 flex-col gap-1">
                  <label className="text-sm text-[#000000]">
                    {t("loginModal.city")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("loginModal.placeholders.city")}
                    className="w-full rounded-md border border-[#D6DADD] px-3 py-3"
                  />
                </div>

                <div className="flex w-1/2 flex-col gap-1">
                  <label className="text-sm text-[#000000]">
                    {t("loginModal.postalCode")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("loginModal.placeholders.postalCode")}
                    className="w-full rounded-md border border-[#D6DADD] px-3 py-3"
                  />
                </div>
              </div>

              <div className="mb-4 flex gap-3">
                <div className="flex w-1/2 flex-col gap-1">
                  <label className="text-sm text-[#000000]">
                    {t("loginModal.region")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("loginModal.placeholders.region")}
                    className="w-full rounded-md border border-[#D6DADD] px-3 py-3"
                  />
                </div>

                <div className="flex w-1/2 flex-col gap-1">
                  <label className="text-sm text-[#000000]">
                    {t("loginModal.country")}
                  </label>
                  <input
                    type="text"
                    value={t("loginModal.placeholders.country")}
                    readOnly
                    className="w-full cursor-not-allowed rounded-md border border-[#D6DADD] bg-gray-100 px-3 py-3"
                  />
                </div>
              </div>

              <div className="mb-4 flex flex-col gap-1">
                <label className="text-sm text-[#000000]">
                  {t("loginModal.googleMapUrl")}
                </label>
                <input
                  type="text"
                  placeholder={t("loginModal.placeholders.googleMapUrl")}
                  className="w-full rounded-md border border-[#D6DADD] px-3 py-3"
                />
              </div>
            </>
          )}

          {isReset && (
            <>
              <label className="text-sm">{t("loginModal.newPassword")}</label>
              <div className="mt-1 mb-3 flex items-center rounded-md border px-3 py-3">
                <Image
                  src="/images/Pass.svg"
                  alt="new password"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <input
                  type={newPassword ? "text" : "password"}
                  placeholder={t("loginModal.placeholders.newPassword")}
                  className="w-full text-sm outline-none"
                />
                <button onClick={() => setNewPassword(!newPassword)} type="button">
                  {newPassword ? (
                    <EyeOff size={16} className="text-gray-400" />
                  ) : (
                    <Eye size={16} className="text-gray-400" />
                  )}
                </button>
              </div>

              <label className="text-sm">{t("loginModal.confirmPassword")}</label>
              <div className="mt-1 mb-4 flex items-center rounded-md border px-3 py-3">
                <Image
                  src="/images/Pass.svg"
                  alt="confirm password"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <input
                  type={confirmPassword ? "text" : "password"}
                  placeholder={t("loginModal.placeholders.confirmPassword")}
                  className="w-full text-sm outline-none"
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

          <div
            className={`transition-opacity duration-300 ${
              isForgot || isOtp || isReset || isSignup
                ? "invisible opacity-0"
                : isCustomerSignup || isPharmacySignup || isPharmacyDetails
                  ? "hidden"
                  : "opacity-100"
            }`}
          >
            <label className="text-sm">{t("loginModal.password")}</label>

            <div className="mt-1 mb-2 flex items-center rounded-md border px-3 py-3">
              <Image
                src="/images/Pass.svg"
                alt="password"
                width={16}
                height={16}
                className="mr-2"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder={t("loginModal.placeholders.password")}
                className="w-full text-sm outline-none"
              />

              <button onClick={() => setShowPassword(!showPassword)} type="button">
                {showPassword ? (
                  <EyeOff size={16} className="text-gray-400" />
                ) : (
                  <Eye size={16} className="text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div
            className={`mb-4 flex items-center justify-between text-sm ${
              isForgot || isOtp || isReset || isSignup
                ? "invisible"
                : isCustomerSignup || isPharmacySignup || isPharmacyDetails
                  ? "hidden"
                  : ""
            }`}
          >
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              {t("loginModal.rememberMe")}
            </label>

            <button
              className="text-gray-500"
              onClick={() => setStep("forgot")}
            >
              {t("loginModal.forgotPassword")}
            </button>
          </div>

          <button
            className={`w-full rounded-md bg-[#1E3862] py-3 text-white ${
              isSignup ? "invisible" : ""
            }`}
            onClick={() => {
              if (step === "pharmacySignup") {
                if (!captchaValue) {
                  alert(t("loginModal.captchaAlert"));
                  return;
                }
                setStep("pharmacyDetails");
              } else if (step === "pharmacyDetails") {
                setStep("otp");
              } else if (step === "login") {
                onLoginSuccess?.();
              } else if (step === "forgot" || step === "customerSignup") {
                setStep("otp");
              } else if (step === "otp") {
                setShowPayment(true);
              } else if (step === "reset") {
                onLoginSuccess?.();
              }
            }}
          >
            {getButtonText()}
          </button>

          <div
            className={`${
              isForgot || isOtp || isReset || isSignup || isPharmacySignup || isPharmacyDetails
                ? "invisible"
                : ""
            }`}
          >
            <div className="my-4 flex items-center">
              <div className="h-px flex-1 bg-gray-100"></div>
              <span className="px-3 text-xs text-gray-400">{t("loginModal.or")}</span>
              <div className="h-px flex-1 bg-gray-100"></div>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 py-3">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="h-4 w-4"
              />
              {t("loginModal.continueWithGoogle")}
            </button>
          </div>

          {!isOtp && !isReset && !isSignup && !isPharmacySignup && !isPharmacyDetails && (
            <p className="mt-4 text-center text-sm">
              {isCustomerSignup
                ? t("loginModal.alreadyHaveAccount")
                : isForgot
                  ? t("loginModal.rememberPassword")
                  : t("loginModal.dontHaveAccount")}{" "}
              <span
                className="cursor-pointer text-blue-600"
                onClick={() =>
                  setStep(isCustomerSignup ? "login" : isForgot ? "login" : "customerSignup")
                }
              >
                {isForgot || isCustomerSignup
                  ? t("loginModal.logIn")
                  : t("loginModal.signUp")}
              </span>
            </p>
          )}
        </div>
      </div>

      {showPayment && (
        <PaymentModal
          isOpen={showPayment}
          onClose={() => {
            setShowPayment(false);
            onClose();
          }}
          orderId="PHM#123456"
          paidAmount={0}
          pharmaciesCount={1}
          status="success"
          isPharmacySummary={true}
        />
      )}
    </div>
  );
}
