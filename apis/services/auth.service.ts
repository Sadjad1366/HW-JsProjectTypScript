import { httpClient } from "../client";
import { urls } from "../urls";

interface data{
  username: string,
  password: string,
}
interface LoginResponse {
  "user": {
    "id": number,
    "username": string,
    "cart": [],
    "sessions": [
      {
        "id": number,
        "token": string,
        "expiration": number,
      }
    ]
  },
  "token": string,
}
interface SignupResponse {
 username:string,
 id:number,
 token:string
}
export async function login(data:data): Promise<LoginResponse>{
  const response = await httpClient().post(urls.auth.login, data);
  return response.data as LoginResponse;
}

export async function signup(data :data): Promise<SignupResponse> {
  const response = await httpClient().post(urls.auth.signup, data);
  return response.data as SignupResponse;
}
