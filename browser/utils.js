var isWin = /win(?:32|64|dows)/i.test(navigator.platform);
var isMac = /mac/i.test(navigator.platform);
// var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
var isUnix = /(?:X11)|(?:Linux)/.test(navigator.platform) && !isWin && !isMac;
