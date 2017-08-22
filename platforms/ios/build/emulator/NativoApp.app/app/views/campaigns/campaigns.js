/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var campaigns_view_model_1 = require("../../view-models/campaigns-view-model");
var user_view_model_1 = require("../../view-models/user-view-model");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
    // Check if user is logged in
    var user = new user_view_model_1.UserViewModel();
    if (!user.isLoggedIn) {
        page.showModal('../login/login-page', null, function () {
            page.bindingContext = new campaigns_view_model_1.CampaignsModel();
        });
    }
    else {
        page.bindingContext = new campaigns_view_model_1.CampaignsModel();
    }
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtcGFpZ25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FtcGFpZ25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7OztBQUlGLCtFQUF3RTtBQUN4RSxxRUFBa0U7QUFHbEUsd0VBQXdFO0FBQ3hFLHNCQUE2QixJQUFlO0lBRXhDOzs7O01BSUU7SUFDRixJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRzdCLDZCQUE2QjtJQUM3QixJQUFJLElBQUksR0FBRyxJQUFJLCtCQUFhLEVBQUUsQ0FBQztJQUMvQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUUsSUFBSSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxxQ0FBYyxFQUFFLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUkscUNBQWMsRUFBRSxDQUFDO0lBQy9DLENBQUM7QUFDTCxDQUFDO0FBbkJELG9DQW1CQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5JbiBOYXRpdmVTY3JpcHQsIGEgZmlsZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgYW4gWE1MIGZpbGUgaXMga25vd24gYXNcbmEgY29kZS1iZWhpbmQgZmlsZS4gVGhlIGNvZGUtYmVoaW5kIGlzIGEgZ3JlYXQgcGxhY2UgdG8gcGxhY2UgeW91ciB2aWV3XG5sb2dpYywgYW5kIHRvIHNldCB1cCB5b3VyIHBhZ2XigJlzIGRhdGEgYmluZGluZy5cbiovXG5cbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBDYW1wYWlnbnNNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL2NhbXBhaWducy12aWV3LW1vZGVsJztcbmltcG9ydCB7IFVzZXJWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy91c2VyLXZpZXctbW9kZWwnO1xuaW1wb3J0ICogYXMgZnJhbWVNb2R1bGUgZnJvbSAndWkvZnJhbWUnO1xuXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwibmF2aWdhdGluZ1RvXCIgZXZlbnQgYXR0YWNoZWQgaW4gbWFpbi1wYWdlLnhtbFxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBcbiAgICAvKlxuICAgIFRoaXMgZ2V0cyBhIHJlZmVyZW5jZSB0aGlzIHBhZ2XigJlzIDxQYWdlPiBVSSBjb21wb25lbnQuIFlvdSBjYW5cbiAgICB2aWV3IHRoZSBBUEkgcmVmZXJlbmNlIG9mIHRoZSBQYWdlIHRvIHNlZSB3aGF04oCZcyBhdmFpbGFibGUgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2NsYXNzZXMvX3VpX3BhZ2VfLnBhZ2UuaHRtbFxuICAgICovXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuXG4gICAgLy8gQ2hlY2sgaWYgdXNlciBpcyBsb2dnZWQgaW5cbiAgICBsZXQgdXNlciA9IG5ldyBVc2VyVmlld01vZGVsKCk7XG4gICAgaWYgKCF1c2VyLmlzTG9nZ2VkSW4pIHtcbiAgICAgICAgcGFnZS5zaG93TW9kYWwoJy4uL2xvZ2luL2xvZ2luLXBhZ2UnLCBudWxsLCAoKSA9PiB7XG4gICAgICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IENhbXBhaWduc01vZGVsKCk7XG4gICAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBDYW1wYWlnbnNNb2RlbCgpO1xuICAgIH1cbn0iXX0=