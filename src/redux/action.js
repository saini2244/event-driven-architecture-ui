import store from './store';
import * as appLayer from "../application/application";
import { addUserCommand } from "../application/command";
import { ADD_USER } from "./actionTypes";

export async function addUserClicked(payload) {
    const addUserCmd = addUserCommand(payload.name, payload.age);
    const { user } = await appLayer.executeCommand(addUserCmd);
    store.dispatch({ type: ADD_USER, payload: user });
}
