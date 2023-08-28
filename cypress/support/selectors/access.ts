// Contains selectors for the access modals; Login, Forgot password and Sign up.

export const loginModal = {
  formClass: '.login__form',
  header: 'Log In',
  emailInputLabel: 'Email',
  passwordInputLabel: 'Password',
  loginButton: 'Log in',
  rememberMeCheckbox: 'Remember me',
  forgotPasswordLink: 'Forgot password?',
  registerLinkLabel: "Don't have an account? Sign up",
};

export const signUpModal = {
  header: 'Sign Up',
  firstNameInputLabel: 'First Name*',
  lastNameInputLabel: 'Last Name*',
  emailInputLabel: /Email Address\*/,
  phoneInputLabel: 'Phone Number*',
  addressInputLabel: /^Address\*/,
  passwordInputLabel: /Password\*/,
  passwordConfirmationInputLabel: /Confirm Password\*/,
  isMarketingCheckboxLabel:
    'I want to receive inspiration, marketing promotions and updates via email.',
  registerButton: 'SIGN UP',
};

export const forgotPasswordModal = {
  header: 'Recover Password',
  emailAddressInputLabel: 'Email Address*',
  getRecoverLinkButton: 'GET RECOVER LINK',
};
