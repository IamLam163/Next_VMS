import { Query } from "node-appwrite";
import { users } from "../appwrite.config";

export const createUser = async (user: CreateUserParams) => {
  try {
  } catch (error: any) {
    if (error && error?.code === 409) {
      const doccuments = await users.list([Query.equal("email", [user.email])]);
      return doccuments?.users[0];
    }
  }
};
