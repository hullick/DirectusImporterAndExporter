import { UserFactory } from '../factory/user.factory';
import { User } from '../models/user.model';
import { Service } from './service';

export abstract class AuthenticationService {
  static authenticate(emailRequest: string, authenticationPassword: string): Promise<User> {
    return Service.doRequest('POST', 'auth/authenticate', {
      email: emailRequest,
      password: authenticationPassword,
    }).then((response) => {
      return UserFactory.getUserInstanceFrom(response.data.data);
    });
  }
}