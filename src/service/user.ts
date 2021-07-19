import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import { ERROR_RESPONSE } from '../middleware/Response';

@Provide()
export class UserService {
  async getUser(options: IUserOptions) {
    throw new Error('1')
  }
}
