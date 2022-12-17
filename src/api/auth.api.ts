/**
 * @example How to use the API layer
 * The methods from the api.ts file should not be used directly.
 * Instead, you should create API files for each of your server features.
 * For example, user.api, auth.api, blog.api, newsletter.api, etc.
 * Methods from the *.api.ts files should be used across your appplication
 */

import api from './api';
import { ApiRequestConfig } from './api.types';

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  id: string;
  email: string;
};

export const login = (
  { email, password }: LoginPayload,
  config: ApiRequestConfig
) => {
  return api.post<LoginResponse>('loginUrl', { email, password }, config);
};

export type RegisterPayload = {
  email: string;
  password: string;
};

export type RegisterResponse = {
  id: string;
  email: string;
};

export const register = (
  { email, password }: RegisterPayload,
  config: ApiRequestConfig
) => {
  return api.post<RegisterResponse>('registerUrl', { email, password }, config);
};
