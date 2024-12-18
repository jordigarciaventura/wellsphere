import { db } from "./db/index"
import { users } from "./db/authSchema"

const fakeUser = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123"
};

db.insert(users).values(fakeUser);
