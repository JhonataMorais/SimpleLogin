import axios from 'axios'
import { UserData } from '../@types'

class AuthorizationService {
  static setAuthenticate(token: string, user: UserData) {
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('user', JSON.stringify(user))
  }

  static logout() {
    sessionStorage.removeItem('user')
    return sessionStorage.removeItem('token')
  }

  static async login(email: string, password: string) {
    try {
      const API_URL = process.env.NEXT_STATIC_API_URL || 'https://run.mocky.io/v3'
      const { data } = await axios.post(
        `${API_URL}/ec9379bc-e85a-453b-b708-d84937476007`,
        {
          email,
          password
        }
      );

      const { token, user } = data;

      if (token) {
        this.setAuthenticate(token, user);
      } else {
        this.logout();
      }

      return data;
    } catch (error) {
      this.logout();
      return error;
    }
  }
}

export default AuthorizationService
