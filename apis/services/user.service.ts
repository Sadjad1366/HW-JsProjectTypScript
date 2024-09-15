import { getSessionToken } from "../../libs/session-manager";
import { httpClient } from "../client";
import { urls } from "../urls";

interface GetUserResponse {
  "id": number,
  "username": string,
  "cart": [],
  "sessions": [
    {
      "id": number,
      "token": string,
      "expiration": number
    }
  ]
}

export async function getUserInfo():Promise<GetUserResponse> {
  const token = getSessionToken();
  const response = await httpClient().get(urls.user);
  return response.data as GetUserResponse;
}
