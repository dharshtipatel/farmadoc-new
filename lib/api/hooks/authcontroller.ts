import {
  registerCustomer,
  verifyOtp,
  loginUser,
  forgotPassword,
  verifyForgotPasswordOtp,
  resetPassword,
  resendOtp,
  type ResetPasswordPayload,
  type RegisterPayload,
  type VerifyOtpPayload,
  type LoginPayload,
  type ForgotPasswordPayload,
} from "./authservice";
import type { Step } from "../../../components/LoginModal";
import { persistAuthSession } from "@/lib/auth/session";

type AuthUser = {
  _id?: string;
  name?: string;
  email?: string;
};

type LoginResponse = {
  data?: {
    user?: AuthUser;
    token?: {
      access?: { token?: string };
      refresh?: { token?: string };
    };
  };
  message?: string;
};

function getErrorMessage(error: unknown, fallback: string) {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallback;
}

export function handleCustomerRegister(
  data: RegisterPayload,
  setStep: (step: Step) => void,
  showError: (msg: string) => void,
  setEmailForOtp: (email: string) => void
) {
  return registerCustomer(data, {
    onNext: (step) => {
      setEmailForOtp(data.email);
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
      setStep("reset");
    } else {
      setStep("login");
    }

    return res;
  } catch (err: unknown) {
    showError(getErrorMessage(err, "OTP verification failed"));
    throw err;
  }
}

export async function handleLogin(
  data: LoginPayload,
  setStep: (step: Step) => void,
  showError: (msg: string) => void,
  onSuccess?: (res: LoginResponse) => void
) {
  try {
    const res = (await loginUser(data)) as LoginResponse;
    const user = res.data?.user;
    const accessToken = res.data?.token?.access?.token;
    const refreshToken = res.data?.token?.refresh?.token;

    if (!user || !accessToken) {
      throw new Error("Invalid login response");
    }

    persistAuthSession({
      user,
      accessToken,
      refreshToken,
    });

    onSuccess?.(res);
    setStep("login");

    return res;
  } catch (err: unknown) {
    showError(getErrorMessage(err, "Login failed"));
    throw err;
  }
}

export async function handleForgotPassword(
  data: ForgotPasswordPayload,
  setStep: (step: Step) => void,
  showError: (msg: string) => void
) {
  try {
    const res = await forgotPassword(data);
    setStep("otp");

    return res;
  } catch (err: unknown) {
    showError(getErrorMessage(err, "Failed to send reset email"));
    throw err;
  }
}

export async function handleVerifyForgotOtp(
  data: VerifyOtpPayload,
  setStep: (step: Step) => void,
  showError: (msg: string) => void,
  setResetToken: (token: string) => void,
  onSuccess?: () => void
) {
  try {
    const res = (await verifyForgotPasswordOtp(data)) as LoginResponse;
    const token = res?.data?.token?.access?.token;

    if (!token) {
      throw new Error("Reset token missing");
    }

    setResetToken(token);
    setStep("reset");
    onSuccess?.();

    return res;
  } catch (err: unknown) {
    showError(getErrorMessage(err, "OTP verification failed"));
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
    setStep("login");

    return res;
  } catch (err: unknown) {
    showError(getErrorMessage(err, "Reset password failed"));
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
    const res = (await resendOtp({ email })) as LoginResponse;
    showSuccess(res?.message || "OTP resent");

    const token = res?.data?.token?.access?.token;

    if (token && setResetToken) {
      setResetToken(token);
    }

    return res;
  } catch (err: unknown) {
    showError(getErrorMessage(err, "Failed to resend OTP"));
    throw err;
  }
}
