import request from '../request'
import { ILoginParams } from './model/authModel'

enum Api {
  LOGIN_API = '/basicdata/login'
}

export default class AjaxAuthService {
  static login(data: ILoginParams): Promise<any> {
    return request.post(Api.LOGIN_API, data)
  }
}
