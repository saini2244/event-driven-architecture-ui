import { USER_CREATED, ADD_USER } from "../redux/actionTypes";

class Repository {
    constructor() {
        if (!Repository.instance) {
            // Create the instance
            Repository.instance = this;
            this.users = {};
        }

        // Return the instance
        return Repository.instance;
    }

    async get() {
        if(Object.keys(this.users).length) {
            return this.users;
        }
        // use api call
        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{
                    type: USER_CREATED,
                    name: "Dummy User",
                    age: 30
                }])
            }, 1000)
        })
        const users = await p
        const u = users.reduce(
            (accumulator, currentValue) => this.runProjection(accumulator, currentValue),
            {}
        );
        this.users = u;
        console.log(u, this.users)
        return u;
        
    }
    save(user) {
        // use api call
        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(user)
            }, 1000)
        });
        p.then(users => {
            users.pending_events.forEach(user => {
                user.status = 'saved';
            })
        })
    }

    runProjection(user, eventItem) {
        switch (eventItem.type) {
            case USER_CREATED:
                return this.createUser(user, eventItem)
            case ADD_USER:
                return this.addUser(user, eventItem)
            default:
                return user;
        }
    }

    createUser(user, eventItem) {
        return {
            ...user,
            ...eventItem
        }
    }

    addUser(user, eventItem) {
        return {
            ...user,
            newUser: [ ...user.newUser , ...eventItem]
        }
    }
    
}

export default Repository;
