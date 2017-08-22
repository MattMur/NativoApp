/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { CampaignsModel } from '../../view-models/campaigns-view-model';
import { UserViewModel } from '../../view-models/user-view-model';
import * as frameModule from 'ui/frame';

let page : Page;

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    page = <Page>args.object;
}

export function loaded(args: EventData) {
    // Check if user is logged in


    setTimeout(function() {
        let user = new UserViewModel();
        if (!user.isLoggedIn) {
            page.showModal('./views/login/login', null, function() {
                page.bindingContext = new CampaignsModel();
            }, true);
            page.bindingContext = new CampaignsModel();
        } else {
            page.bindingContext = new CampaignsModel();
        }
    }, 1000)
    
}