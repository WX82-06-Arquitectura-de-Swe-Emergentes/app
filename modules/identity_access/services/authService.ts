import http from "~/modules/common/util/http";

interface LoginResponse {
  token: string
}
class AuthService {
  static async login(email: string, password: string) : Promise<LoginResponse> {
    return await http.post<LoginResponse>('/auth/login', {
      body: {
        email: email,
        password: password
      }
    })
  }
}

export default AuthService