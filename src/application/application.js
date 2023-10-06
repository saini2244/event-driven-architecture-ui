
import * as userDomain from "../domain/user";
import Repository from "../repository/repository";

const repo = new Repository();

export async function addUserCommand(store, payload) {
    const user = await repo.get(store.id);
    const newUser = userDomain.addUser(user, payload);
    repo.save(newUser);
    return { newUser }
}

