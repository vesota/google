sap.ui.define(["jquery.sap.global","openui5/googlemaps/ScriptsUtil"],function(e,l){"use strict";var a=function(){var l={};return l.DEFAULT_BASE_URL="http://maps.google.com/maps/api/js?sensor=true&callback=google.maps.callBack",l.callBack=function(){this.loaded=!0,sap.ui.getCore().getEventBus().publish("google.maps.loaded")},l.load=function(l){var a=l.getUrl()?l.getUrl():this.DEFAULT_BASE_URL;l.getApiKey()&&(a=a+"&key="+l.getApiKey()),e.sap.includeScript(a,"google.maps",null,null)},l}();return a.load(l),a},!0);