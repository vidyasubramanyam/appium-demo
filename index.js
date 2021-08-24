const wdio = require("webdriverio");
var assert = require('assert');

// javascript
const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: "Android",
      platformVersion: "11",
      deviceName: "Android Emulator",
      app: "C:\\WINDOWS\\system32\\config\\systemprofile\\AppData\\Local\\Jenkins\\.jenkins\\workspace\\appium-test\\ApiDemos-debug.apk",
      appPackage: "io.appium.android.apis",
      appActivity: ".view.TextFields",
      automationName: "UiAutomator2"
    }
  };
  
  async function main () {
    const client = await wdio.remote(opts);

    const field = await client.$("android.widget.EditText");
    await field.setValue("Hello World!");
    const value = await field.getText();
    assert.strictEqual(value,"Hello World!");
  
    await client.deleteSession();;
  }
  
  main();
  
