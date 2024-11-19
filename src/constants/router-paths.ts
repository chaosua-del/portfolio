export enum RouterPath {
  HOME = '/',
  LOGIN = '/login',
  REGISTER = '/register',
  FORGOT_PASSWORD = '/forgot-password',
  EMAIL_SENT = '/email-sent',
  POST_REGISTER = '/post-register',
  RESET_PASSORD = '/reset-password',
  OTP = '/otp',
  VERIFY_EMAIL = '/verify-email',
  VERIFY_PHONE = '/verify-phone',
  PROFILE = '/profile',
  SETTINGSS = '/settings',
  TRANSACTIONS = '/transactions',
  NOTIFICATIONS = '/notifications',
  POLICIES = '/policies',
  FAQ = '/faq',
}

export enum PoliciesPathChildren {
  TERMS_OF_USE = 'terms-of-use',
  RISK_DISCLOSURE = 'risk-disclosure',
  PRIVACY_POLICY = 'privacy',
  AML = 'aml',
  COOKIES = 'cookies',
  REFUND = 'refund',
  LEGAL = 'legal',
}

export enum FaqPathChildren {
  STAKING = 'staking',
  SECURITY = 'security',
  FUNDS = 'funds',
  PROFILE = 'profile',
}

export const getHomePath = () => RouterPath.HOME;
export const getLoginPath = () => RouterPath.LOGIN;
export const getRegisterPath = () => RouterPath.REGISTER;
export const getForgotPasswordPath = () => RouterPath.FORGOT_PASSWORD;
export const getEmailSentPath = () => RouterPath.EMAIL_SENT;
export const getPostRegisterPath = () => RouterPath.POST_REGISTER;
export const getResetPasswordPath = () => RouterPath.RESET_PASSORD;
export const getOtpPath = () => RouterPath.OTP;
export const getVerifyEmailPath = () => RouterPath.VERIFY_EMAIL;
export const getVerifyPhonePath = () => RouterPath.VERIFY_PHONE;
export const getProfilePath = () => RouterPath.PROFILE;
export const getSettingsPath = () => RouterPath.SETTINGSS;
export const getTransactionsPath = () => RouterPath.TRANSACTIONS;
export const getNotificationsPath = () => RouterPath.NOTIFICATIONS;
export const getPoliciesPath = (childRoute?: PoliciesPathChildren) =>
  RouterPath.POLICIES + (childRoute ? `/${childRoute}` : '');
export const getFaqPath = (childRoute?: FaqPathChildren) =>
  RouterPath.FAQ + (childRoute ? `/${childRoute}` : '');
