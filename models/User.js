class User {

    constructor (first_name, last_name, avatar) {

        this._first_name = first_name;
        this._last_name = last_name;
        this._avatar = avatar;

    }

    get first_name() {
        return this._first_name;
    }

    get last_name() {
        return this._last_name;
    }

    get avatar() {
        return this._avatar;
    }

    set first_name(value) {
        this._first_name = value;
    }

    set last_name(value) {
        this._last_name = value;
    }

    set avatar(value) {
        this._avatar = value;
    }

    loadFromJSON(json) {

        for (let name in json) {

            this[name] = json[name];

        }

    }

    static getUsersStorage() {

        return Fetch.get('https://reqres.in/api/users?page=1&per_page=12');

    }
}