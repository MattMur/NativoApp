"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var CampaignsModel = (function (_super) {
    __extends(CampaignsModel, _super);
    function CampaignsModel() {
        var _this = _super.call(this) || this;
        _this._campaigns = [{
                name: "Campaign One"
            },
            {
                name: "Campaign Two"
            }];
        return _this;
    }
    Object.defineProperty(CampaignsModel.prototype, "campaignsList", {
        get: function () {
            return this._campaigns;
        },
        set: function (campaigns) {
            if (this._campaigns !== campaigns) {
                this._campaigns = campaigns;
                this.notifyPropertyChange('campaignsList', campaigns);
            }
        },
        enumerable: true,
        configurable: true
    });
    CampaignsModel.prototype.doSomething = function () {
    };
    CampaignsModel.prototype.doSomethingPrivate = function () {
    };
    return CampaignsModel;
}(observable_1.Observable));
exports.CampaignsModel = CampaignsModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtcGFpZ25zLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYW1wYWlnbnMtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUEyQztBQUczQztJQUFvQyxrQ0FBVTtJQUkxQztRQUFBLFlBQ0ksaUJBQU8sU0FRVjtRQU5HLEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQztnQkFDZixJQUFJLEVBQUcsY0FBYzthQUN4QjtZQUNEO2dCQUNJLElBQUksRUFBRyxjQUFjO2FBQ3hCLENBQUMsQ0FBQTs7SUFDTixDQUFDO0lBRUQsc0JBQUkseUNBQWE7YUFBakI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBa0IsU0FBd0I7WUFDdEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQTtZQUN6RCxDQUFDO1FBQ0wsQ0FBQzs7O09BUEE7SUFTTSxvQ0FBVyxHQUFsQjtJQUVBLENBQUM7SUFFTywyQ0FBa0IsR0FBMUI7SUFFQSxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBakNELENBQW9DLHVCQUFVLEdBaUM3QztBQWpDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcblxuXG5leHBvcnQgY2xhc3MgQ2FtcGFpZ25zTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICAgIHByaXZhdGUgX2NhbXBhaWduczogQXJyYXk8b2JqZWN0PjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2NhbXBhaWducyA9IFt7XG4gICAgICAgICAgICBuYW1lIDogXCJDYW1wYWlnbiBPbmVcIlxuICAgICAgICB9LCBcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZSA6IFwiQ2FtcGFpZ24gVHdvXCJcbiAgICAgICAgfV1cbiAgICB9XG5cbiAgICBnZXQgY2FtcGFpZ25zTGlzdCgpOiBBcnJheTxvYmplY3Q+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbXBhaWducztcbiAgICB9XG4gICAgXG4gICAgc2V0IGNhbXBhaWduc0xpc3QoY2FtcGFpZ25zOiBBcnJheTxvYmplY3Q+KSB7XG4gICAgICAgIGlmICh0aGlzLl9jYW1wYWlnbnMgIT09IGNhbXBhaWducykge1xuICAgICAgICAgICAgdGhpcy5fY2FtcGFpZ25zID0gY2FtcGFpZ25zO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2FtcGFpZ25zTGlzdCcsIGNhbXBhaWducylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkb1NvbWV0aGluZygpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgZG9Tb21ldGhpbmdQcml2YXRlKCkge1xuXG4gICAgfVxufSJdfQ==