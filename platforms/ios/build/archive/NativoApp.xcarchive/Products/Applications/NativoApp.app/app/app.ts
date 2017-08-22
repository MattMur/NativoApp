/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import "./shared/bundle-config";
import * as app from 'application';

app.start({ moduleName: './views/campaigns/campaigns' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
