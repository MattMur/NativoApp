import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { ShownModallyData } from 'ui/page';
import { UserViewModel } from '../../view-models/user-view-model';
import { alert } from 'ui/dialogs';
import * as frameModule from 'ui/frame';

let user = new UserViewModel();
let closeCallback: Function;

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
	page.bindingContext = new UserViewModel();
}

export function signIn() {
    // email = page.getViewById("email");
    // alert(email.text);
    user.login()
        .catch(function(error){
            console.log(error);
            alert({
                message: "Unfortunately we could not find your account.",
                okButtonText: "OK"
            });
            return Promise.reject("Could not find account");
        })
        .then(function() {
            //frameModule.topmost().navigate("views/list/list");
            closeCallback();
        })
};

export function onShownModally(args: ShownModallyData) {
    closeCallback = args.closeCallback;
}
    
export function onLoginButtonTap() {
    
}
