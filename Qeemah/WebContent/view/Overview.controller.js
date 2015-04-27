jQuery.sap.require("com.sagia.common.ModelHelper");
sap.ui.controller("com.sagia.view.Overview", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf com.sagia.view.Overview
	 */
	onInit : function() {

		// Model Helper reference
		this.oModelHelper = com.sagia.common.ModelHelper;

		this._oVboxSignIn = this.getView().byId("idVBoxSignIn");
		/*this._oVboxUserInfo = this.getView().byId("idVBoxUserInformation");
		this._oVboxQuestion1 = this.getView().byId("idVBoxQuestion1Content");
		this._oVboxQuestion2 = this.getView().byId("idVBoxQuestion2Content");
		this._oVboxQuestion3 = this.getView().byId("idVBoxQuestion3Content");
		this._oVboxQuestion4 = this.getView().byId("idVBoxQuestion4Content");
		this._oVboxQuestion5 = this.getView().byId("idVBoxQuestion5Content");
		this._oVboxQuestion6 = this.getView().byId("idVBoxQuestion6Content");
		this._oVboxQuestion7 = this.getView().byId("idVBoxQuestion7Content");
		this._oVboxQuestion8 = this.getView().byId("idVBoxQuestion8Content");
*/
		this._oNewRegistrationMatrixLayout = this.getView().byId(
				"idRegistrationMatrixLayout");
		this._oLoginVBoxLayout = this.getView().byId("idLoginVBoxLayout");

		this._oVboxInvestmentGuidelinesDialog = this.getView().byId(
				"idInvestmentGuidelines");
		this._oVboxInvestmentGuidelinesDialogFirstMsg = this.getView().byId(
				"idInvestmentGuidelineMsg");

		this._oVboxQuestionsContent = this.getView().byId(
				"idVBoxQuestionsContent");
		this._oVboxNISTLAF = this.getView().byId("idVBoxNISTLAF");
		this._oRoadMapNISTLAF = this.getView().byId("NISTLAFSteps");

		this._oCarousel = this.getView().byId("idImageCarousel");

		this._oVboxQuestions = this.getView().byId("idVBoxQuestionsContent");
		this._oVBoxRegistration = this.getView().byId("idVBoxRegistration");
		this._oHboxRegistrationSuccessMsg = this.getView().byId(
				"idHBoxRegistrationSuccessMessage");
		this._oVboxOrgReg = this.getView().byId("idVBoxOrgReg");

		this._oPage = this.getView().byId("idPage");

		this._userSignFragment = sap.ui.xmlfragment("idUserSignInFragment",
				"com.sagia.view.fragments.signin", this.getView()
						.getController());

		// Main page content VBOX
		this._oidMainPageContent = this.getView().byId("idMainPageContent");
		// Basic page content VBOX
		this._oBasicInfoContent = this.getView().byId("idBasicInfoContent");
		//License registration page content
		this._oidLicenseButtonsHBox = this.getView().byId("idLicenseButtonsHBox");
		
		this._oTopHeaderVBox = this.getView().byId("idTopHeaderVBox");
		
		
		this._oBasicInfoButton = this.getView().byId("idBasicInfoButton");
		this._oLicenseInfoButton = this.getView().byId("idLicenseInfoButton");
		this._oShareholderInfoButton = this.getView().byId("idShareholderInfoButton");
		this._oPreviewInfoButton = this.getView().byId("idPreviewInfoButton");
		this._oTermsInfoButton = this.getView().byId("idTermsInfoButton");
		this._oSubmitInfoButton = this.getView().byId("idSubmitInfoButton");
		
		this._oLicenseInfoContent = this.getView().byId("idLicenseInfoContent");

	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf com.sagia.view.Overview
	 */
	onBeforeRendering : function() {

	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf com.sagia.view.Overview
	 */
	onAfterRendering : function() {

	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf com.sagia.view.Overview
	 */
	onExit : function() {

	},
	goToNextPage : function() {
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("SecondPage", {
			id : 1
		}, false);
	},
	handleOkButtonPress : function() {

		this._oVboxSignIn.setVisible(false);
		this._oVboxQuestions.setVisible(true);
		// this._oVboxUserInfo.setVisible(true);
	},
	handleRegisterUserButtonPress : function() {
		
		var oInputFirstName = this.getView().byId("idFirstNameInputText")
		.getValue();
		var oInputLastName = this.getView().byId("idLastNameInputText")
		.getValue();
		
		var oInputMobileNumber = this.getView().byId("idInputMobileNumber")
				.getValue();
		var oInputEmail = this.getView().byId("idInputEmail").getValue();
		var oPassword = this.getView().byId("idInputPassword").getValue();
		if (oInputMobileNumber.length > 0 && oInputEmail.length > 0
				&& oPassword.length > 0 && oInputFirstName.length > 0 && oInputLastName.length > 0) {
			
			this.oModelHelper.registerUser(oInputMobileNumber, oInputEmail, oPassword, oInputFirstName, oInputLastName);
			
			sap.m.MessageToast.show(this.oModelHelper
					.getText("RegistrationSuccessful"));
		} else {
			sap.m.MessageToast.show(this.oModelHelper
					.getText("PleaseEnterRequiredFields"));
		}

		/*
		 * this._oVBoxRegistration.setVisible(false);
		 * this._oHboxRegistrationSuccessMsg.setVisible(true);
		 * sap.m.MessageToast.show(this.oModelHelper.getText("RegistrationSuccessful"));
		 * this.oModelHelper.registerUser();
		 */
		/**
		 * Read deals in amendment collection and bind model to view
		 */
		/*
		 * _bindDealsInAmendmentCollectionModel: function() {
		 */
		// var oDealsInAmendmentCollectionModel =
		// com.sagia.common.ModelHelper.readDealsInAmendmentCollection();
		/*
		 * this._oTable.setModel(oDealsInAmendmentCollectionModel); },
		 */

	},
	handleCheckboxQuestion1Change : function(oEvent) {
		if (oEvent.getParameter("selected")) {
			this._oVboxQuestion1.setVisible(true);
		} else {
			this._oVboxQuestion1.setVisible(false);
		}
	},
	handleCheckboxQuestion2Change : function(oEvent) {
		if (oEvent.getParameter("selected")) {
			this._oVboxQuestion2.setVisible(true);
		} else {
			this._oVboxQuestion2.setVisible(false);
		}
	},
	handleCheckboxQuestion3Change : function(oEvent) {
		if (oEvent.getParameter("selected")) {
			this._oVboxQuestion3.setVisible(true);
		} else {
			this._oVboxQuestion3.setVisible(false);
		}
	},
	handleCheckboxQuestion4Change : function(oEvent) {
		if (oEvent.getParameter("selected")) {
			this._oVboxQuestion4.setVisible(true);
		} else {
			this._oVboxQuestion4.setVisible(false);
		}
	},
	handleCheckboxQuestion5Change : function(oEvent) {
		if (oEvent.getParameter("selected")) {
			this._oVboxQuestion5.setVisible(true);
		} else {
			this._oVboxQuestion5.setVisible(false);
		}
	},
	handleCheckboxQuestion6Change : function(oEvent) {
		if (oEvent.getParameter("selected")) {
			this._oVboxQuestion6.setVisible(true);
		} else {
			this._oVboxQuestion6.setVisible(false);
		}
	},
	handleCheckboxQuestion7Change : function(oEvent) {
		if (oEvent.getParameter("selected")) {
			this._oVboxQuestion7.setVisible(true);
		} else {
			this._oVboxQuestion7.setVisible(false);
		}
	},
	handleCheckboxQuestion8Change : function(oEvent) {
		if (oEvent.getParameter("selected")) {
			this._oVboxQuestion8.setVisible(true);
		} else {
			this._oVboxQuestion8.setVisible(false);
		}
	},
	handleIconTabBarSelect : function(oEvent) {
		var oPricingTabBar = this.getView().byId("idIconTabBarBase");
		var sSelectedTab = oPricingTabBar.getSelectedKey();

		console.log(sSelectedTab);
	},
	handleProcessButtonPress : function(oEvent) {
		this._oVboxQuestionsContent.setVisible(false);
		this._oVboxNISTLAF.setVisible(true);
	},
	handleRoadMapSection : function(oEvent) {
		console.log(oEvent.getParameters.stepId);
	},
	handleIconTabBarItemSelect : function(oEvent) {
		if (oEvent.getParameters().key == '1') {
			this._oCarousel.setVisible(true);
		} else {
			this._oCarousel.setVisible(false);
		}
	},
	handleProceedToOrgRegButtonPress : function(oEvent) {

		var oMoreLink = oEvent.getSource();

		// create pop over fragment only once
		if (!this._popOverFragment) {
			this._popOverFragment = sap.ui.xmlfragment(
					"com.sagia.view.fragments.registration", this.getView()
							.getController());
			this.getView().addDependent(this._popOverFragment);
		}

		// var fragmentTextView = sap.ui.getCore().byId("idFragmentTextView");
		// fragmentTextView.setText(oEvent.getSource().getBindingContext().getObject().Description);

		this._popOverFragment.open();
	},
	handleProceedtoOrganizationRegistrationPress : function() {
		this._popOverFragment.close();
		this._oHboxRegistrationSuccessMsg.setVisible(false);
		this._oVboxOrgReg.setVisible(true);
	},
	handleReadInvestmentGuidelinePress : function() {
		// this._oVboxInvestmentGuidelinesDialog.setVisible(true);
		// this._oVboxInvestmentGuidelinesDialogFirstMsg.setVisible(false);
		sap.ui.getCore().byId("idInvestmentGuidelines").setVisible(true);
		sap.ui.getCore().byId("idInvestmentGuidelineMsg").setVisible(false);
	},
	handleSignInButtonPress : function(oEvent) {

		var userID = this.getView().byId("idSignInUsernameInput").getValue();
		var password = this.getView().byId("idSignInPasswordInput").getValue();
		
		this._oidMainPageContent.setVisible(false);
		this._oTopHeaderVBox.setVisible(true);
		this._oidLicenseButtonsHBox.setVisible(true);
		
		if (userID.length > 0 && password.length > 0) {
			var oRequestFinishedDeferred = this.oModelHelper.signInUser(userID,password);

			jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {	
				
				if(oResponse.InvestorId === "0000000000"){
					sap.m.MessageToast.show(this.oModelHelper.getText("AuthenticationFailedMessage"));
				}else{
					sap.m.MessageToast.show(this.oModelHelper
							.getText("SignInSuccessful"));
					this._oidMainPageContent.setVisible(false);
					this._oidLicenseButtonsHBox.setVisible(true);
				}
				
			}, this));				
			
		} else {
			sap.m.MessageToast.show(this.oModelHelper
					.getText("PleaseEnterRequiredFields"));
		}		
	},
	handleCancelButtonPress : function(oEvent) {
	},

	/**
	 * home page registration button press
	 */
	handleNewRegistrationButtonPress : function() {
		this._oLoginVBoxLayout.setVisible(false);
		this._oNewRegistrationMatrixLayout.setVisible(true);
	},
	/**
	 * home page registration button press
	 */
	handleLoginButtonPress : function() {
		this._oNewRegistrationMatrixLayout.setVisible(false);
		this._oLoginVBoxLayout.setVisible(true);
	},
	
	handleBasicInfoButtonClick : function(){
		this._oBasicInfoButton.setSrc("common/mime/basicinfo_hover.png");

		this._oBasicInfoContent.setVisible(true);
		this._oLicenseInfoContent.setVisible(false);
	},
	handleLicenseButtonClick : function(){
		this._oLicenseInfoContent.setVisible(true);
		this._oBasicInfoContent.setVisible(false);
		this._oLicenseInfoButton.setSrc("common/mime/license_hover.png");
	},
	handleShareholderInfoButtonClick : function(){
		this._oShareholderInfoButton.setSrc("common/mime/shareholder_hover.png");
	},
	handlePreviewInfoButtonClick : function(){
		this._oPreviewInfoButton.setSrc("common/mime/preview_hover.png");
	},
	handleTermsInfoButtonClick : function(){
		this._oTermsInfoButton.setSrc("common/mime/terms_hover.png");
	},
	handleSubmitInfoButtonClick : function(){
		this._oSubmitInfoButton.setSrc("common/mime/submit_hover.png");
	},
	
});