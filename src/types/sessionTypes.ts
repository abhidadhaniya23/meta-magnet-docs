export interface SessionTypes {
  data: DataClass;
  error: null;
}

export interface DataClass {
  user: User;
}

export interface User {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: Date;
  phone: string;
  confirmed_at: Date;
  last_sign_in_at: Date;
  app_metadata: AppMetadata;
  user_metadata: UserMetadataClass;
  identities: Identity[];
  created_at: Date;
  updated_at: Date;
}

export interface AppMetadata {
  provider: string;
  providers: string[];
}

export interface Identity {
  id: string;
  user_id: string;
  identity_data: UserMetadataClass;
  provider: string;
  last_sign_in_at: Date;
  created_at: Date;
  updated_at: Date;
}

export interface UserMetadataClass {
  avatar_url: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  picture: string;
  provider_id: string;
  sub: string;
}
