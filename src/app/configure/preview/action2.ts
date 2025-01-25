"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getUserz = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("user not logged in");
  } else {
    return { user };
  }
};
