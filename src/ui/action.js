import store from './store';
import * as command from "../application/application";
import { ADD_USER } from "./actionTypes";

export async function addUser(payload) {
    console.log(store.getState(), "shdjfg")
    const { newUser } = await command.addUserCommand(store.getState(), payload);
    store.dispatch({ type: ADD_USER, payload: newUser });
    console.log(store.getState(), "shdjfg")

}
