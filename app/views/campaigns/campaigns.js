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
    // Page not loaded yet (?) so need to set timeout until it is
    setTimeout(function () {
        var user = new user_view_model_1.UserViewModel();
        if (!user.isLoggedIn) {
            page.showModal('views/login/login', null, function () {
                page.bindingContext = new campaigns_view_model_1.CampaignsModel();
            }, true);
            //page.bindingContext = new CampaignsModel();
        }
        else {
            page.bindingContext = new campaigns_view_model_1.CampaignsModel();
        }
    }, 1000);
}
exports.loaded = loaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtcGFpZ25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FtcGFpZ25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7OztBQUlGLCtFQUF3RTtBQUN4RSxxRUFBa0U7QUFHbEUsSUFBSSxJQUFXLENBQUM7QUFFaEIsd0VBQXdFO0FBQ3hFLHNCQUE2QixJQUFlO0lBQ3hDLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzdCLENBQUM7QUFGRCxvQ0FFQztBQUVELGdCQUF1QixJQUFlO0lBQ2xDLDZCQUE2QjtJQUM3Qiw2REFBNkQ7SUFDN0QsVUFBVSxDQUFDO1FBQ1AsSUFBSSxJQUFJLEdBQUcsSUFBSSwrQkFBYSxFQUFFLENBQUM7UUFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLElBQUksRUFBRTtnQkFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHFDQUFjLEVBQUUsQ0FBQztZQUMvQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCw2Q0FBNkM7UUFDakQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHFDQUFjLEVBQUUsQ0FBQztRQUMvQyxDQUFDO0lBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0FBRVosQ0FBQztBQWZELHdCQWVDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkluIE5hdGl2ZVNjcmlwdCwgYSBmaWxlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBhbiBYTUwgZmlsZSBpcyBrbm93biBhc1xuYSBjb2RlLWJlaGluZCBmaWxlLiBUaGUgY29kZS1iZWhpbmQgaXMgYSBncmVhdCBwbGFjZSB0byBwbGFjZSB5b3VyIHZpZXdcbmxvZ2ljLCBhbmQgdG8gc2V0IHVwIHlvdXIgcGFnZeKAmXMgZGF0YSBiaW5kaW5nLlxuKi9cblxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IENhbXBhaWduc01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvY2FtcGFpZ25zLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgVXNlclZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL3VzZXItdmlldy1tb2RlbCc7XG5pbXBvcnQgKiBhcyBmcmFtZU1vZHVsZSBmcm9tICd1aS9mcmFtZSc7XG5cbmxldCBwYWdlIDogUGFnZTtcblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcIm5hdmlnYXRpbmdUb1wiIGV2ZW50IGF0dGFjaGVkIGluIG1haW4tcGFnZS54bWxcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIC8vIENoZWNrIGlmIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAgLy8gUGFnZSBub3QgbG9hZGVkIHlldCAoPykgc28gbmVlZCB0byBzZXQgdGltZW91dCB1bnRpbCBpdCBpc1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB1c2VyID0gbmV3IFVzZXJWaWV3TW9kZWwoKTtcbiAgICAgICAgaWYgKCF1c2VyLmlzTG9nZ2VkSW4pIHtcbiAgICAgICAgICAgIHBhZ2Uuc2hvd01vZGFsKCd2aWV3cy9sb2dpbi9sb2dpbicsIG51bGwsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgQ2FtcGFpZ25zTW9kZWwoKTtcbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICAgICAgLy9wYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IENhbXBhaWduc01vZGVsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IENhbXBhaWduc01vZGVsKCk7XG4gICAgICAgIH1cbiAgICB9LCAxMDAwKVxuICAgIFxufSJdfQ==