/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    enterDocument: {
        value: function (firstTime) {
            if (firstTime) {
                this.templateObjects.logoutCondition.condition = false;
            }
        }
    },
    logoutActionHandler: {
        value: function(event) {
            // Obviously a real logout handler would have much more logic
            this.dispatchEventNamed("loginEvent", true, false, {successful:false});
            event.stopPropagation();
        }
    },
    handleLogin: {
        value: function (event) {
            this.loggedIn = event.detail.successful;
            if (this.loggedIn) {
                this.templateObjects.logoutCondition.condition = true;
                this.templateObjects.substitution.switchValue = "default";
            } else {
                this.templateObjects.logoutCondition.condition = false;
                this.templateObjects.substitution.switchValue = "login";
            }
        }
    }
});
