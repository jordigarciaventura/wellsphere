import { users } from "./db/authSchema";
import { db } from "./db/index";

const fakeUser = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  password: "password123",
};

db.insert(users).values(fakeUser);
