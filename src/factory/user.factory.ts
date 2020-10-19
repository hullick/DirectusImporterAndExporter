import { AuthenticateResponseDataType } from '../data-types/directus/authenticate-response.data-type.directus';
import { User } from '../models/user.model';

export class UserFactory {
  static getUserInstanceFrom(data: AuthenticateResponseDataType) {
    const userInstance = new User(data.user);
    userInstance.token = data.token;

    return userInstance;
  }
}