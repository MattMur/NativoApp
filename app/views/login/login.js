"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_view_model_1 = require("../../view-models/user-view-model");
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
        // Temp
        closeCallback();
        // alert({
        //     message: "Unfortunately we could not find your account.",
        //     okButtonText: "OK"
        // });
        // return Promise.reject("Could not find account");
    })
        .then(function () {
        //frameModule.topmost().navigate("views/list/list");
        closeCallback();
    });
}
exports.signIn = signIn;
;
function onShownModally(args) {
    console.log("login-page.onShownModally, context: " + args.context);
    closeCallback = args.closeCallback;
}
exports.onShownModally = onShownModally;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHFFQUFrRTtBQUlsRSxJQUFJLElBQUksR0FBRyxJQUFJLCtCQUFhLEVBQUUsQ0FBQztBQUMvQixJQUFJLGFBQXVCLENBQUM7QUFFNUIsc0JBQTZCLElBQWU7SUFDeEMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksK0JBQWEsRUFBRSxDQUFDO0FBQzNDLENBQUM7QUFIRCxvQ0FHQztBQUVEO0lBQ0kscUNBQXFDO0lBQ3JDLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFO1NBQ1AsS0FBSyxDQUFDLFVBQVMsS0FBSztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5CLE9BQU87UUFDUCxhQUFhLEVBQUUsQ0FBQztRQUVoQixVQUFVO1FBQ1YsZ0VBQWdFO1FBQ2hFLHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sbURBQW1EO0lBQ3ZELENBQUMsQ0FBQztTQUNELElBQUksQ0FBQztRQUNGLG9EQUFvRDtRQUNwRCxhQUFhLEVBQUUsQ0FBQztJQUNwQixDQUFDLENBQUMsQ0FBQTtBQUNWLENBQUM7QUFwQkQsd0JBb0JDO0FBQUEsQ0FBQztBQUdGLHdCQUErQixJQUFzQjtJQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztBQUN2QyxDQUFDO0FBSEQsd0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgU2hvd25Nb2RhbGx5RGF0YSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgVXNlclZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL3VzZXItdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBhbGVydCB9IGZyb20gJ3VpL2RpYWxvZ3MnO1xuaW1wb3J0ICogYXMgZnJhbWVNb2R1bGUgZnJvbSAndWkvZnJhbWUnO1xuXG5sZXQgdXNlciA9IG5ldyBVc2VyVmlld01vZGVsKCk7XG5sZXQgY2xvc2VDYWxsYmFjazogRnVuY3Rpb247XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblx0cGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBVc2VyVmlld01vZGVsKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduSW4oKSB7XG4gICAgLy8gZW1haWwgPSBwYWdlLmdldFZpZXdCeUlkKFwiZW1haWxcIik7XG4gICAgLy8gYWxlcnQoZW1haWwudGV4dCk7XG4gICAgdXNlci5sb2dpbigpXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgICAgICAgIC8vIFRlbXBcbiAgICAgICAgICAgIGNsb3NlQ2FsbGJhY2soKTtcblxuICAgICAgICAgICAgLy8gYWxlcnQoe1xuICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6IFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIsXG4gICAgICAgICAgICAvLyAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy8gcmV0dXJuIFByb21pc2UucmVqZWN0KFwiQ291bGQgbm90IGZpbmQgYWNjb3VudFwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvL2ZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZShcInZpZXdzL2xpc3QvbGlzdFwiKTtcbiAgICAgICAgICAgIGNsb3NlQ2FsbGJhY2soKTtcbiAgICAgICAgfSlcbn07XG5cbiAgICBcbmV4cG9ydCBmdW5jdGlvbiBvblNob3duTW9kYWxseShhcmdzOiBTaG93bk1vZGFsbHlEYXRhKSB7XG4gICAgY29uc29sZS5sb2coXCJsb2dpbi1wYWdlLm9uU2hvd25Nb2RhbGx5LCBjb250ZXh0OiBcIiArIGFyZ3MuY29udGV4dCk7XG4gICAgY2xvc2VDYWxsYmFjayA9IGFyZ3MuY2xvc2VDYWxsYmFjaztcbn0iXX0=