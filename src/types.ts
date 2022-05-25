export interface IBoardData {
  title: string;
  description: string;
}

export interface IBoard extends IBoardData {
  id: string;
}

export interface IFormDataLogin {
  login: string;
  password: string;
}

export interface IFormDataSingup {
  name: string;
  login: string;
  password: string;
}

export interface IFormDataErrorLogin {
  loginTextError: string;
  loginError: boolean;
  passwordTextError: string;
  passwordError: boolean;
  disabled: boolean;
}

export interface IFormDataErrorSingup {
  nameTextError: string;
  nameError: boolean;
  loginTextError: string;
  loginError: boolean;
  passwordTextError: string;
  passwordError: boolean;
  disabled: boolean;
}

export interface IFormError {
  errors: boolean;
  success: boolean;
}
