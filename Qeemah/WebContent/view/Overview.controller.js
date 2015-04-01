sap.ui.controller("com.sagia.view.Overview", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapui5tutorial1.Overview
*/
	onInit: function() {
		
		this._oVboxSignIn = this.getView().byId("idVBoxSignIn");
		this._oVboxUserInfo = this.getView().byId("idVBoxUserInformation");

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapui5tutorial1.Overview
*/
	onBeforeRendering: function() {

	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapui5tutorial1.Overview
*/
	onAfterRendering: function() {

	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapui5tutorial1.Overview
*/
	onExit: function() {

	},
	goToNextPage:function(){
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("SecondPage", {id:1}, false);
	},
	handleOkButtonPress: function(){
		
		this._oVboxSignIn.setVisible(false);
		this._oVboxUserInfo.setVisible(true);
	}
});