import { isNewUser } from "@/features/welcome/data-access/users";
import { getUserId } from "@/lib/auth";

export async function isNewUserUseCase() {
  const userId = await getUserId();
  if (!userId) return true;

  return await isNewUser(userId);
}
