
import * as userDomain from "../domain/user";
import Repository from "../repository/repository";
import { addUserCommand } from './command';

const repo = new Repository();

async function addUserHandler(store, payload) {
    const user = await repo.get(store.id);
    const newUser = userDomain.addUser(user, payload);
    repo.save(newUser);
    return { newUser }
}


export async function executeCommand(command) {
    const user = await repo.get(store.id);
    switch(command) {
        case addUserCommand:
            const newUser = userDomain.addUser(user, payload);
            break;
    }
    repo.save(newUser);
    return { newUser }
}

