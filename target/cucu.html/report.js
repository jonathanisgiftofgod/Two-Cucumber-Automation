$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Britto/eclipse-workspace/CucumberAutomation/src/test/resources/LoginFeatureValidation.feature");
formatter.feature({
  "name": "",
  "description": "  I want to automate the AdactinWebPage",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Adactin WebPage Automatopn",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I want to open the Adactin WebPage and Automate",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter the \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I clicked the login button",
  "keyword": "When "
});
formatter.step({
  "name": "I verify the homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "britto619",
        "bunt353bey150"
      ]
    },
    {
      "cells": [
        "britto619",
        "bunt353bey150"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Adactin WebPage Automatopn",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I want to open the Adactin WebPage and Automate",
  "keyword": "Given "
});
formatter.match({
  "location": "FinalClass.i_want_to_open_the_Adactin_WebPage_and_Automate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"britto619\" and \"bunt353bey150\"",
  "keyword": "When "
});
formatter.match({
  "location": "FinalClass.i_enter_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked the login button",
  "keyword": "When "
});
formatter.match({
  "location": "FinalClass.i_clicked_the_login_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d97.0.4692.99)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ANJK2SU\u0027, ip: \u0027192.168.43.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.99, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\Britto\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:56531}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b2a6cf76513a6126c7549d4b8beabf41\n*** Element info: {Using\u003did, value\u003dlogin}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.click(Unknown Source)\r\n\tat org.base.adactin.BaseClass.click(BaseClass.java:39)\r\n\tat org.FinalPackage.FinalClass.i_clicked_the_login_button(FinalClass.java:36)\r\n\tat ✽.I clicked the login button(C:/Users/Britto/eclipse-workspace/CucumberAutomation/src/test/resources/LoginFeatureValidation.feature:26)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I verify the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "FinalClass.i_verify_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Adactin WebPage Automatopn",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I want to open the Adactin WebPage and Automate",
  "keyword": "Given "
});
formatter.match({
  "location": "FinalClass.i_want_to_open_the_Adactin_WebPage_and_Automate()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d97.0.4692.99)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ANJK2SU\u0027, ip: \u0027192.168.43.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.99, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\Britto\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:56576}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 719eb26ebae10d68f50bc7c6d9f4b7d9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat org.base.adactin.BaseClass.maximizeAndWait(BaseClass.java:32)\r\n\tat org.FinalPackage.FinalClass.i_want_to_open_the_Adactin_WebPage_and_Automate(FinalClass.java:24)\r\n\tat ✽.I want to open the Adactin WebPage and Automate(C:/Users/Britto/eclipse-workspace/CucumberAutomation/src/test/resources/LoginFeatureValidation.feature:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter the \"britto619\" and \"bunt353bey150\"",
  "keyword": "When "
});
formatter.match({
  "location": "FinalClass.i_enter_the_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I clicked the login button",
  "keyword": "When "
});
formatter.match({
  "location": "FinalClass.i_clicked_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "FinalClass.i_verify_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Search the hotel",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I want to select to the hotel",
  "keyword": "Given "
});
formatter.match({
  "location": "FinalClass.i_want_to_select_to_the_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select the location hotel roomtype numberOfRooms",
  "keyword": "When "
});
formatter.match({
  "location": "FinalClass.select_the_location_hotel_roomtype_numberOfRooms()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d97.0.4692.99)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ANJK2SU\u0027, ip: \u0027192.168.43.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.99, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\Britto\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:56576}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 719eb26ebae10d68f50bc7c6d9f4b7d9\n*** Element info: {Using\u003did, value\u003dlocation}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat org.base.adactin.BaseClass.selectByIndex(BaseClass.java:46)\r\n\tat org.FinalPackage.FinalClass.select_the_location_hotel_roomtype_numberOfRooms(FinalClass.java:54)\r\n\tat ✽.select the location hotel roomtype numberOfRooms(C:/Users/Britto/eclipse-workspace/CucumberAutomation/src/test/resources/LoginFeatureValidation.feature:37)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enter the date in",
  "keyword": "And "
});
formatter.match({
  "location": "FinalClass.enter_the_date_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter the date out",
  "keyword": "And "
});
formatter.match({
  "location": "FinalClass.enter_the_date_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter the adultInRoom, childInRoom",
  "keyword": "And "
});
formatter.match({
  "location": "FinalClass.enter_the_adultInRoom_childInRoom()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click the search",
  "keyword": "And "
});
formatter.match({
  "location": "FinalClass.click_the_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Book the hotel",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "I want to Book the hotel",
  "keyword": "Given "
});
formatter.match({
  "location": "FinalClass.i_want_to_Book_the_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the FirstName LastName Billing Address CreditCardNo",
  "keyword": "When "
});
formatter.match({
  "location": "FinalClass.enter_the_FirstName_LastName_Billing_Address_CreditCardNo()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d97.0.4692.99)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ANJK2SU\u0027, ip: \u0027192.168.43.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.99, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\Britto\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:56576}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 719eb26ebae10d68f50bc7c6d9f4b7d9\n*** Element info: {Using\u003did, value\u003dfirst_name}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.sendKeys(Unknown Source)\r\n\tat org.base.adactin.BaseClass.enterText(BaseClass.java:36)\r\n\tat org.FinalPackage.FinalClass.enter_the_FirstName_LastName_Billing_Address_CreditCardNo(FinalClass.java:93)\r\n\tat ✽.Enter the FirstName LastName Billing Address CreditCardNo(C:/Users/Britto/eclipse-workspace/CucumberAutomation/src/test/resources/LoginFeatureValidation.feature:45)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "select the cardType expiryMonth expiryYear",
  "keyword": "And "
});
formatter.match({
  "location": "FinalClass.select_the_cardType_expiryMonth_expiryYear()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter the cvvNumber",
  "keyword": "And "
});
formatter.match({
  "location": "FinalClass.enter_the_cvvNumber()"
});
formatter.result({
  "status": "skipped"
});
});