var self = require("sdk/self");
var tabs = require("sdk/tabs");

tabs.on("ready", function (tab) {
    var worker = tab.attach({
        contentScriptFile: [
            self.data.url("jquery-2.1.4.min.js"),
            self.data.url("remove-cookie-banner.js"),
            self.data.url("script.js")
        ]
    });

    worker.port.emit("removeCookieBanner");
});
