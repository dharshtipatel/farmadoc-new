import { registerCustomer, verifyOtp, loginUser, forgotPassword, verifyForgotPasswordOtp, resetPassword, ResetPasswordPayload, resendOtp, type RegisterPayload, VerifyOtpPayload, LoginPayload, ForgotPasswordPayload,  } from "./authservice";
import type { Step } from "../../../components/LoginModal";

export function handleCustomerRegister(
  data: RegisterPayload,
  setStep: (step: Step) => void,
  showError: (msg: string) => void,
  setEmailForOtp: (email: string) => void
) {
  return registerCustomer(data, {
    onNext: (step) => {
      setEmailForOtp(data.email); // ✅ correct place
      setStep(step);
    },
    onError: showError,
  });
}

export async function handleVerifyOtp(
  data: VerifyOtpPayload,
  setStep: (step: Step) => void,
  showError: (msg: string) => void,
  otpPurpose?: "signup" | "forgot"
) {
  try {
    const res = await verifyOtp(data);

    if (otpPurpose === "forgot") {
      setStep("reset");   // ✅ your requirement
    } else {
      setStep("login");   // signup or default
    }

    return res;
  } catch (err: any) {
    showError(err.message);
    throw err;
  }
}

export async function handleLogin(
  data: LoginPayload,
  setStep: (step: Step) => void,
  showError: (msg: string) => void,
  onSuccess?: (res: any) => void
) {
  try {
    const res: any = await loginUser(data);

    // ✅ correct access (ONLY ONE data level)
    const user = res.data?.user;
    const accessToken = res.data?.token?.access?.token;
    const refreshToken = res.data?.token?.refresh?.token;

    if (!user || !accessToken) {
      throw new Error("Invalid login response");
    }

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken || "");
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userId", user._id);

    onSuccess?.(res);

    setStep("login");

    return res;
  } catch (err: any) {
    showError(err.message || "Login failed");
    throw err;
  }
}

export async function handleForgotPassword(
  data: ForgotPasswordPayload,
  setStep: (step: Step) => void,
  showError: (msg: string) => void
) {
  try {
    const res: any = await forgotPassword(data);

    // optional: move to OTP step
    setStep("otp");

    return res;
  } catch (err: any) {
    showError(err.message || "Failed to send reset email");
    throw err;
  }
}

export async function handleVerifyForgotOtp(
  data: VerifyOtpPayload,
  setStep: (step: Step) => void,
  showError: (msg: string) => void,
  setResetToken: (token: string) => void,
  onSuccess?: () => void,
) {
  try {
    const res: any = await verifyForgotPasswordOtp(data);

    const token = res?.data?.token?.access?.token;

    if (!token) throw new Error("Reset token missing");

    setResetToken(token);
    setStep("reset");

    onSuccess?.();
    return res;
  } catch (err: any) {
    showError(err.message || "OTP verification failed");
    throw err;
  }
}

export async function handleResetPassword(
  data: ResetPasswordPayload,
  setStep: (step: Step) => void,
  showError: (msg: string) => void,
  token: string,
  onSuccess?: () => void
) {
  try {
    const res = await resetPassword(data, token);

    onSuccess?.();
    setStep("login"); // or close modal

    return res;
  } catch (err: any) {
    showError(err.message || "Reset password failed");
    throw err;
  }
}

export async function handleResendOtp(
  email: string,
  showSuccess: (msg: string) => void,
  showError: (msg: string) => void,
  setResetToken?: (token: string) => void
) {
  try {
    const res: any = await resendOtp({ email });

    showSuccess(res?.message || "OTP resent");

      const token = res?.data?.token?.access?.token;

      if (token && setResetToken) {
        setResetToken(token);
      }

    return res;
  } catch (err: any) {
    showError(err.message || "Failed to resend OTP");
    throw err;
  }
}