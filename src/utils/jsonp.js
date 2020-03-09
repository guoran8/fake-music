const PASSWORD = Symbol()

export class Login {
    constructor(username, password) {
        this.username = username
        this[PASSWORD] = password
    }

    checkPassword(pwd) {
        return this[PASSWORD] === pwd
    }
}