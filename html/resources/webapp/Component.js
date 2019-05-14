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
		 getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		
		init: function () {
		

			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
	
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});