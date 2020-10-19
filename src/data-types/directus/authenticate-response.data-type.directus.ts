export interface AuthenticateResponseDataType {
  token: String;
  user: {
    'id': Number,
    'status': String,
    'role': Number,
    'first_name': String | undefined,
    'last_name': String | undefined,
    'email': String,
    'timezone': String | undefined,
    'locale': String | undefined,
    'locale_options': String | undefined,
    'avatar': String | undefined,
    'company': String | undefined,
    'title': String | undefined,
    'external_id': String | undefined,
    'theme': String,
    '2fa_secret': String | undefined,
    'password_reset_token': String | undefined,
  };
}