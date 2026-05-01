import { getUserById } from "./userservice";

export async function handleGetUserById(
  showError: (msg: string) => void,
  onSuccess?: (data: any) => void
) {
  try {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const userId = user?._id;
    alert(userId);

    if (!userId) {
      throw new Error("User ID not found");
    }

    const res: any = await getUserById(userId);

    const userData = res.data?.data;

    onSuccess?.(userData);

    return userData;
  } catch (err: any) {
    showError(err.message || "Failed to fetch user");
    throw err;
  }
}