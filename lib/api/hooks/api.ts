import { verify } from "crypto";

export const API = {
   auth:{
    register: '/v1/auth/register',
    verifyotp: '/v1/auth/verify/otp',
    login: '/v1/auth/login',
    forgotpassword: '/v1/auth/forgot/password',
    verifyforgotpassword: '/v1/auth/verify/forgot/otp',
    resetpassword: '/v1/auth/reset/password',
    resendotp: '/v1/auth/resend/otp'
   },

   user:{
    userbyid: '/v1/user/{{userId}}'
   }
}