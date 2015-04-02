jQuery.sap.require("com.sagia.common.ModelHelper");
sap.ui.controller("com.sagia.view.Overview", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.sagia.view.Overview
*/
	onInit: function() {
		
		// Model Helper reference
		this.ModelHelper = com.sagia.common.ModelHelper;
		
		this._oVboxSignIn = this.getView().byId("idVBoxSignIn");
		this._oVboxUserInfo = this.getView().byId("idVBoxUserInformation");
		this._oVboxQuestion1 = this.getView().byId("idVBoxQuestion1Content");
		this._oVboxQuestions = this.getView().byId("idVBoxQuestionsContent");
		this._oVBoxRegistration = this.getView().byId("idVBoxRegistration");
		this._oHboxRegistrationSuccessMsg = this.getView().byId("idHBoxRegistrationSuccessMessage");



	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.sagia.view.Overview
*/
	onBeforeRendering: function() {

	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.sagia.view.Overview
*/
	onAfterRendering: function() {

	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.sagia.view.Overview
*/
	onExit: function() {

	},
	goToNextPage:function(){
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("SecondPage", {id:1}, false);
	},
	handleOkButtonPress: function(){
		
		this._oVboxSignIn.setVisible(false);
		this._oVboxQuestions.setVisible(true);
		//this._oVboxUserInfo.setVisible(true);
	},
	handleRegisterOrgButtonPress: function(){
		this._oVBoxRegistration.setVisible(false);
		this._oHboxRegistrationSuccessMsg.setVisible(true);
		sap.m.MessageToast.show(this.ModelHelper.getText("RegistrationSuccessful"));
	},
	handleCheckboxQuestion1Change: function(){
		
		this._oVboxQuestion1.setVisible(true);
		
	},
	handleIconTabBarSelect: function(oEvent){
		var oPricingTabBar = this.getView().byId("idIconTabBarBase");
		var sSelectedTab = oPricingTabBar.getSelectedKey();
		
		console.log(sSelectedTab);
	}
});