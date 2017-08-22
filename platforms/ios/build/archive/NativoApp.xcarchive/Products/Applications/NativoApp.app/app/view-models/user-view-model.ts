import { Observable } from 'data/observable';

export class UserViewModel extends Observable {

	private _token : string = "";

	public isLoggedIn : boolean = false;

	constructor(email?: string, password?: string) {
		super();

	}

	public login() {
		return fetch("url goes here" + "oauth/token", {
			method: "POST",
			body: JSON.stringify({
				username: this.get("email"),
				password: this.get("password"),
				grant_type: "password"
			}),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(handleErrors)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			this._token = data.Result.access_token;
		});
	}
}


function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
}
