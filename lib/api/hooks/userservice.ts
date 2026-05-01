import { API } from "./api";
import { apiClient } from "./apiClient";

export async function getUserById(userId: string) {
  const url = API.user.userbyid.replace("{{userId}}", userId);

  return apiClient(url, {
    method: "GET",
  });
}