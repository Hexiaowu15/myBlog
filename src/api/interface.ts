
export interface loginParams {
  username: string
  password: string
}

export interface signupParams {
  username: string
  password: string
  email: string
  code: string
}

export interface resLogin {
    token: string
}
