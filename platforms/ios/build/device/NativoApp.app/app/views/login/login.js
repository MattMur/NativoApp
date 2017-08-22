"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_view_model_1 = require("../../view-models/user-view-model");
var dialogs_1 = require("ui/dialogs");
var user = new user_view_model_1.UserViewModel();
var closeCallback;
function navigatingTo(args) {
    var page = args.object;
    page.bindingContext = new user_view_model_1.UserViewModel();
}
exports.navigatingTo = navigatingTo;
function signIn() {
    // email = page.getViewById("email");
    // alert(email.text);
    user.login()
        .catch(function (error) {
        console.log(error);
        dialogs_1.alert({
            message: "Unfortunately we could not find your account.",
            okButtonText: "OK"
        });
        return Promise.reject("Could not find account");
    })
        .then(function () {
        //frameModule.topmost().navigate("views/list/list");
        closeCallback();
    });
}
exports.signIn = signIn;
;
function onShownModally(args) {
    closeCallback = args.closeCallback;
}
exports.onShownModally = onShownModally;
function onLoginButtonTap() {
}
exports.onLoginButtonTap = onLoginButtonTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHFFQUFrRTtBQUNsRSxzQ0FBbUM7QUFHbkMsSUFBSSxJQUFJLEdBQUcsSUFBSSwrQkFBYSxFQUFFLENBQUM7QUFDL0IsSUFBSSxhQUF1QixDQUFDO0FBRTVCLHNCQUE2QixJQUFlO0lBQ3hDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLCtCQUFhLEVBQUUsQ0FBQztBQUMzQyxDQUFDO0FBSEQsb0NBR0M7QUFFRDtJQUNJLHFDQUFxQztJQUNyQyxxQkFBcUI7SUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRTtTQUNQLEtBQUssQ0FBQyxVQUFTLEtBQUs7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixlQUFLLENBQUM7WUFDRixPQUFPLEVBQUUsK0NBQStDO1lBQ3hELFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDO1FBQ0Ysb0RBQW9EO1FBQ3BELGFBQWEsRUFBRSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFBO0FBQ1YsQ0FBQztBQWhCRCx3QkFnQkM7QUFBQSxDQUFDO0FBRUYsd0JBQStCLElBQXNCO0lBQ2pELGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQ3ZDLENBQUM7QUFGRCx3Q0FFQztBQUVEO0FBRUEsQ0FBQztBQUZELDRDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IFNob3duTW9kYWxseURhdGEgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IFVzZXJWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy91c2VyLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgYWxlcnQgfSBmcm9tICd1aS9kaWFsb2dzJztcbmltcG9ydCAqIGFzIGZyYW1lTW9kdWxlIGZyb20gJ3VpL2ZyYW1lJztcblxubGV0IHVzZXIgPSBuZXcgVXNlclZpZXdNb2RlbCgpO1xubGV0IGNsb3NlQ2FsbGJhY2s6IEZ1bmN0aW9uO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG5cdHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgVXNlclZpZXdNb2RlbCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbkluKCkge1xuICAgIC8vIGVtYWlsID0gcGFnZS5nZXRWaWV3QnlJZChcImVtYWlsXCIpO1xuICAgIC8vIGFsZXJ0KGVtYWlsLnRleHQpO1xuICAgIHVzZXIubG9naW4oKVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiQ291bGQgbm90IGZpbmQgYWNjb3VudFwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvL2ZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZShcInZpZXdzL2xpc3QvbGlzdFwiKTtcbiAgICAgICAgICAgIGNsb3NlQ2FsbGJhY2soKTtcbiAgICAgICAgfSlcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBvblNob3duTW9kYWxseShhcmdzOiBTaG93bk1vZGFsbHlEYXRhKSB7XG4gICAgY2xvc2VDYWxsYmFjayA9IGFyZ3MuY2xvc2VDYWxsYmFjaztcbn1cbiAgICBcbmV4cG9ydCBmdW5jdGlvbiBvbkxvZ2luQnV0dG9uVGFwKCkge1xuICAgIFxufVxuIl19