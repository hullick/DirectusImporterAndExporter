import { UserDataType } from '../data-types/user.data-type';

export class User {
  private data: UserDataType = {
    email: '',
  };

  constructor(data: UserDataType) {
    this.email = data.email;
    this.id = data.id;
    this.status = data.status;
    this.firstName = data.first_name;
    this.lastName = data.last_name;
    this.timezone = data.timezone;
    this.locale = data.locale;
  }

  public get id(): Number | undefined {
    return this.data.id;
  }

  public set id(idValue: Number | undefined) {
    this.data.id = idValue;
  }

  public get status(): String | undefined {
    return this.data.status;
  }

  public set status(statusValue: String | undefined) {
    this.data.status = statusValue;
  }

  public get firstName(): String | undefined {
    return this.data.first_name;
  }

  public set firstName(firstNameValue: String | undefined) {
    this.data.first_name = firstNameValue;
  }

  public get lastName(): String | undefined {
    return this.data.last_name;
  }

  public set lastName(lastNameValue: String | undefined) {
    this.data.last_name = lastNameValue;
  }

  public get timezone(): String | undefined {
    return this.data.timezone;
  }

  public set timezone(timezoneValue: String | undefined) {
    this.data.timezone = timezoneValue;
  }

  public get locale(): String | undefined {
    return this.data.locale;
  }

  public set locale(localeValue: String | undefined) {
    this.data.locale = localeValue;
  }

  public get email(): String {
    return this.data.email;
  }

  public set email(emailValue: String) {
    this.data.email = emailValue;
  }

  public get token(): String | undefined {
    return this.data.token;
  }

  public set token(tokenValue: String | undefined) {
    this.data.token = tokenValue;
  }
}