"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_view_model_1 = require("../../view-models/user-view-model");
var dialogs_1 = require("ui/dialogs");
var user = new user_view_model_1.UserViewModel();
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
    });
}
exports.signIn = signIn;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxxRUFBa0U7QUFDbEUsc0NBQW1DO0FBR25DLElBQUksSUFBSSxHQUFHLElBQUksK0JBQWEsRUFBRSxDQUFDO0FBRS9CLHNCQUE2QixJQUFlO0lBQzNDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLCtCQUFhLEVBQUUsQ0FBQztBQUMzQyxDQUFDO0FBSEQsb0NBR0M7QUFFRDtJQUNJLHFDQUFxQztJQUNyQyxxQkFBcUI7SUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRTtTQUNQLEtBQUssQ0FBQyxVQUFTLEtBQUs7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixlQUFLLENBQUM7WUFDRixPQUFPLEVBQUUsK0NBQStDO1lBQ3hELFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDO1FBQ0Ysb0RBQW9EO0lBQ3hELENBQUMsQ0FBQyxDQUFBO0FBQ1YsQ0FBQztBQWZELHdCQWVDO0FBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBVc2VyVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvdXNlci12aWV3LW1vZGVsJztcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSAndWkvZGlhbG9ncyc7XG5pbXBvcnQgKiBhcyBmcmFtZU1vZHVsZSBmcm9tICd1aS9mcmFtZSc7XG5cbmxldCB1c2VyID0gbmV3IFVzZXJWaWV3TW9kZWwoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcblx0bGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblx0cGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBVc2VyVmlld01vZGVsKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduSW4oKSB7XG4gICAgLy8gZW1haWwgPSBwYWdlLmdldFZpZXdCeUlkKFwiZW1haWxcIik7XG4gICAgLy8gYWxlcnQoZW1haWwudGV4dCk7XG4gICAgdXNlci5sb2dpbigpXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJDb3VsZCBub3QgZmluZCBhY2NvdW50XCIpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vZnJhbWVNb2R1bGUudG9wbW9zdCgpLm5hdmlnYXRlKFwidmlld3MvbGlzdC9saXN0XCIpO1xuICAgICAgICB9KVxufTtcbiJdfQ==