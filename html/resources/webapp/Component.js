sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"forecast/html/model/models",
	"sap/ui/core/routing/History",
	"sap/m/routing/RouteMatchedHandler"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("forecast.html.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			
		  jQuery.sap.require("sap.ui.core.routing.History");
    	  jQuery.sap.require("sap.m.routing.RouteMatchedHandler");

			
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this._router = this.getRouter();
			this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._Router);
			
			this._router.initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});