# StreamElemnts testing environment

## Installation
Paste your custom data into proper files, please have in mind, that in HTML file you just have to fill the space between comments saying it. You can also provide your JWT Token within widget.html file (Line:11). 

## Usage
Edit your files with a IDE of your choice. Open widget.html in your browser and you can use commands provided below in console window:
```js
emulateInit();
```
You can use `setChannelName("YourChannelName");` before init, if are planning to use your channel name in your widgets.

### Emulating events
To emulate event, just type in console:
```js
emulateNew(type, amount, isGift, count)
```
Fields `amount`, `isGift`, `count` are not required (default values for them are: `amount=random(0,36)`, `isGift=false`,`count=1`)
Examples:
```js
emulateNew("follower");
emulateNew("subscriber");
emulateNew("subscriber",2);
emulateNew("subscriber","gift",3);
emulateNew("host",100);
emulateNew("raid",100);
emulateNew("cheer",100);
emulateNew("tip",20);
```

You can also use event emiter within StreamElements overlay editor to emit events over socket (For that you need to provide JWT token earlier) or use the very same event test way in this page. You can also change session data to invoke onSessionUpdate

## Summary
If your widget works as it should, you are ready to copy each part to StreamElements Custom Widget and it should work straight ahead.

## Known issues
- no chat messages events
- no cleanup (You need to F5 before reinit)
- custom fields are not supported for HTML/CSS (besides their values IN JS - remember to prepend your actual JSON file with `let fieldData=`)