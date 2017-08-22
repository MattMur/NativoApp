"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var UserViewModel = (function (_super) {
    __extends(UserViewModel, _super);
    function UserViewModel(email, password) {
        var _this = _super.call(this) || this;
        _this._token = "";
        _this.isLoggedIn = false;
        return _this;
    }
    UserViewModel.prototype.login = function () {
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
            .then(function (response) {
            return response.json();
        })
            .then(function (data) {
            this._token = data.Result.access_token;
        });
    };
    return UserViewModel;
}(observable_1.Observable));
exports.UserViewModel = UserViewModel;
function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDO0lBQW1DLGlDQUFVO0lBTTVDLHVCQUFZLEtBQWMsRUFBRSxRQUFpQjtRQUE3QyxZQUNDLGlCQUFPLFNBRVA7UUFQTyxZQUFNLEdBQVksRUFBRSxDQUFDO1FBRXRCLGdCQUFVLEdBQWEsS0FBSyxDQUFDOztJQUtwQyxDQUFDO0lBRU0sNkJBQUssR0FBWjtRQUNDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLGFBQWEsRUFBRTtZQUM3QyxNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7Z0JBQzNCLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztnQkFDOUIsVUFBVSxFQUFFLFVBQVU7YUFDdEIsQ0FBQztZQUNGLE9BQU8sRUFBRTtnQkFDUixjQUFjLEVBQUUsa0JBQWtCO2FBQ2xDO1NBQ0QsQ0FBQzthQUNELElBQUksQ0FBQyxZQUFZLENBQUM7YUFDbEIsSUFBSSxDQUFDLFVBQVMsUUFBUTtZQUN0QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFTLElBQUk7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRixvQkFBQztBQUFELENBQUMsQUEvQkQsQ0FBbUMsdUJBQVUsR0ErQjVDO0FBL0JZLHNDQUFhO0FBa0MxQixzQkFBc0IsUUFBUTtJQUMxQixFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEMsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ3BCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGNsYXNzIFVzZXJWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuXHRwcml2YXRlIF90b2tlbiA6IHN0cmluZyA9IFwiXCI7XG5cblx0cHVibGljIGlzTG9nZ2VkSW4gOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoZW1haWw/OiBzdHJpbmcsIHBhc3N3b3JkPzogc3RyaW5nKSB7XG5cdFx0c3VwZXIoKTtcblxuXHR9XG5cblx0cHVibGljIGxvZ2luKCkge1xuXHRcdHJldHVybiBmZXRjaChcInVybCBnb2VzIGhlcmVcIiArIFwib2F1dGgvdG9rZW5cIiwge1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0dXNlcm5hbWU6IHRoaXMuZ2V0KFwiZW1haWxcIiksXG5cdFx0XHRcdHBhc3N3b3JkOiB0aGlzLmdldChcInBhc3N3b3JkXCIpLFxuXHRcdFx0XHRncmFudF90eXBlOiBcInBhc3N3b3JkXCJcblx0XHRcdH0pLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LnRoZW4oaGFuZGxlRXJyb3JzKVxuXHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdH0pXG5cdFx0LnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dGhpcy5fdG9rZW4gPSBkYXRhLlJlc3VsdC5hY2Nlc3NfdG9rZW47XG5cdFx0fSk7XG5cdH1cbn1cblxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcnMocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG4gICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG59XG4iXX0=