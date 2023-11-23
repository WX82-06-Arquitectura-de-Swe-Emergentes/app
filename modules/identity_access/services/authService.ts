import http from '@/modules/shared/services/authService'

class AuthService {
  static async login(
      username: string,
      password: string,
  ) {
    http.post('/auth/login', {

    })
  }
}