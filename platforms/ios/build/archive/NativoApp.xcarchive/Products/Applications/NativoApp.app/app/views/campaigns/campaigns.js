/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var campaigns_view_model_1 = require("../../view-models/campaigns-view-model");
var user_view_model_1 = require("../../view-models/user-view-model");
var page;
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    page = args.object;
}
exports.navigatingTo = navigatingTo;
function loaded(args) {
    // Check if user is logged in
    setTimeout(function () {
        var user = new user_view_model_1.UserViewModel();
        if (!user.isLoggedIn) {
            page.showModal('./views/login/login', null, function () {
                page.bindingContext = new campaigns_view_model_1.CampaignsModel();
            }, true);
            page.bindingContext = new campaigns_view_model_1.CampaignsModel();
        }
        else {
            page.bindingContext = new campaigns_view_model_1.CampaignsModel();
        }
    }, 1000);
}
exports.loaded = loaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtcGFpZ25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FtcGFpZ25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7OztBQUlGLCtFQUF3RTtBQUN4RSxxRUFBa0U7QUFHbEUsSUFBSSxJQUFXLENBQUM7QUFFaEIsd0VBQXdFO0FBQ3hFLHNCQUE2QixJQUFlO0lBQ3hDLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzdCLENBQUM7QUFGRCxvQ0FFQztBQUVELGdCQUF1QixJQUFlO0lBQ2xDLDZCQUE2QjtJQUc3QixVQUFVLENBQUM7UUFDUCxJQUFJLElBQUksR0FBRyxJQUFJLCtCQUFhLEVBQUUsQ0FBQztRQUMvQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUUsSUFBSSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUkscUNBQWMsRUFBRSxDQUFDO1lBQy9DLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxxQ0FBYyxFQUFFLENBQUM7UUFDL0MsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHFDQUFjLEVBQUUsQ0FBQztRQUMvQyxDQUFDO0lBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0FBRVosQ0FBQztBQWhCRCx3QkFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW4gTmF0aXZlU2NyaXB0LCBhIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIGFuIFhNTCBmaWxlIGlzIGtub3duIGFzXG5hIGNvZGUtYmVoaW5kIGZpbGUuIFRoZSBjb2RlLWJlaGluZCBpcyBhIGdyZWF0IHBsYWNlIHRvIHBsYWNlIHlvdXIgdmlld1xubG9naWMsIGFuZCB0byBzZXQgdXAgeW91ciBwYWdl4oCZcyBkYXRhIGJpbmRpbmcuXG4qL1xuXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgQ2FtcGFpZ25zTW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy9jYW1wYWlnbnMtdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBVc2VyVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvdXNlci12aWV3LW1vZGVsJztcbmltcG9ydCAqIGFzIGZyYW1lTW9kdWxlIGZyb20gJ3VpL2ZyYW1lJztcblxubGV0IHBhZ2UgOiBQYWdlO1xuXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwibmF2aWdhdGluZ1RvXCIgZXZlbnQgYXR0YWNoZWQgaW4gbWFpbi1wYWdlLnhtbFxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgLy8gQ2hlY2sgaWYgdXNlciBpcyBsb2dnZWQgaW5cblxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlclZpZXdNb2RlbCgpO1xuICAgICAgICBpZiAoIXVzZXIuaXNMb2dnZWRJbikge1xuICAgICAgICAgICAgcGFnZS5zaG93TW9kYWwoJy4vdmlld3MvbG9naW4vbG9naW4nLCBudWxsLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IENhbXBhaWduc01vZGVsKCk7XG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgQ2FtcGFpZ25zTW9kZWwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgQ2FtcGFpZ25zTW9kZWwoKTtcbiAgICAgICAgfVxuICAgIH0sIDEwMDApXG4gICAgXG59Il19