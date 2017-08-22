import {Observable} from 'data/observable';


export class CampaignsModel extends Observable {

    private _campaigns: Array<object>;

    constructor() {
        super();

        this._campaigns = [{
            name : "Campaign One"
        }, 
        {
            name : "Campaign Two"
        }]
    }

    get campaignsList(): Array<object> {
        return this._campaigns;
    }
    
    set campaignsList(campaigns: Array<object>) {
        if (this._campaigns !== campaigns) {
            this._campaigns = campaigns;
            this.notifyPropertyChange('campaignsList', campaigns)
        }
    }

    public doSomething() {

    }

    private doSomethingPrivate() {

    }
}