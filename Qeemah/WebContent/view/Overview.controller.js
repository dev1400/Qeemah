jQuery.sap.require("com.sagia.common.ModelHelper");
jQuery.sap.require("sap.ui.model.FilterOperator");
jQuery.sap.require("com.sagia.common.js.validate");
jQuery.sap.require("com.sagia.common.js.editnshworker");
jQuery.sap.require("com.sagia.common.js.bioivalidateworker");
jQuery.sap.require("com.sagia.common.js.bicivalidateworker");
jQuery.sap.require("com.sagia.common.js.baqvalidateworker");
jQuery.sap.require("com.sagia.common.js.isicvalidateworker");
jQuery.sap.require("com.sagia.common.js.validatenshworker");





jQuery.sap.require("com.sagia.common.Formatter");
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
		this.oValidationHelper = com.sagia.common.js.validate;
		this.oEditNSHHelper = com.sagia.common.js.editnshworker;
		this.oBIOIvalidateworker = com.sagia.common.js.bioivalidateworker;
		this.oBICIvalidateworker = com.sagia.common.js.bicivalidateworker;
		this.oBAQvalidateworker = com.sagia.common.js.baqvalidateworker;
		this.oISICvalidateworker = com.sagia.common.js.isicvalidateworker;
		this.oNSHValidateworker = com.sagia.common.js.validatenshworker;

		

		this._oVboxSignIn = this.getView().byId("idVBoxSignIn");
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
		this.oVBoxSubmittedApplicationStatus = this.getView().byId("idVBoxSubmittedApplicationStatus");
		
		this._oBasicInfoButton = this.getView().byId("idBasicInfoButton");
		this._oLicenseInfoButton = this.getView().byId("idLicenseInfoButton");
		this._oShareholderInfoButton = this.getView().byId("idShareholderInfoButton");
		this._oPreviewInfoButton = this.getView().byId("idPreviewInfoButton");
		this._oTermsInfoButton = this.getView().byId("idTermsInfoButton");
		this._oSubmitInfoButton = this.getView().byId("idSubmitInfoButton");
		
		this._oLicenseInfoContent = this.getView().byId("idLicenseInfoContent");
		this._oShareHoldersInfoContent = this.getView().byId("idShareHoldersInfoContent");
		
		this._oStagesHeading = this.getView().byId("idStagesHeading");
		this._oBasicInfoIconTab = this.getView().byId("idBasicInfoIconTab");
		this._oOrgTabFilter = this.getView().byId("idIconTabFilterOrg");
		this._oTermsAndConditionsInfoContent = this.getView().byId("idTermsAndConditionsInfoContent");
		this._oPreviewInfoContent = this.getView().byId("idPreviewInfoContent");
		this._oLI_BAQ_7_to_10 = this.getView().byId("idLI_BAQ_7_to_10MatrixLayout");
		
			
		this._oADD_ExistingShareHolderVBox = this.getView().byId("idADD_ExistingShareHolderVBox");
		this._oCREATE_NewShareHolderVBox = this.getView().byId("idCREATE_NewShareHolderVBox");
		
		this._oAddShareHolderDetailsVBoxFragment = this.getView().byId("idAddShareHolderDetailsVBoxFragment");
		this._oAddShareHolderAttachmentsVBoxFragment = this.getView().byId("idAddShareHolderAttachmentssVBoxFragment");
		this._oAddShareHolderActivityAnswersVBoxFragment = this.getView().byId("idAddShareHolderActivityAnswersVBoxFragment");
		this._oAddShareHolderExperienceAnswersVBoxFragment = this.getView().byId("idAddShareHolderExperienceAnswersVBoxFragment");
		this._oAddShareHolderFinancialAnswersVBoxFragment = this.getView().byId("idAddShareHolderFinancialAnswersVBoxFragment");
		
		this._oPreviewOranizationInfoVBox = this.getView().byId("idPreviewOranizationInfoVBox");
		this._oPreviewContactInfoVBox = this.getView().byId("idPreviewContactInfoVBox");
		this._oPreviewBAAInfoVBox = this.getView().byId("idPreviewBAAInfoVBox");
		this._oPreviewLicenseInfoVBox = this.getView().byId("idPreviewLicenseInfoVBox");
		this._oPreviewShareHolderDetailsVBox = this.getView().byId("idPreviewShareHolderDetailsInfoVBox");
		this._oPreviewAttachmentsVBox = this.getView().byId("idPreviewAttachmentsVBox");
		this._oPreviewActivityAnswersVBox = this.getView().byId("idPreviewActivityAnswersVBox");
		this._oPreviewExperienceAnswersVBox = this.getView().byId("idPreviewExperienceAnswersVBox");
		this._oPreviewFinancialAnswersVBox = this.getView().byId("idPreviewFinancialAnswersVBox");
		

		this._oFirstNameInputText = this.getView().byId("idFirstNameInputText");
		this._oFirstNameErrorMsg = this.getView().byId("idRegFirstNameErrorMsg");
		
		this._oLastNameInputText = this.getView().byId("idLastNameInputText");
		this._oLastNameErrorMsg = this.getView().byId("idRegLastNameErrorMsg");
		
		this._oPasswordInputText = this.getView().byId("idInputPassword");
		this._oPasswordErrorMsg = this.getView().byId("idRegPasswordErrorMsg");
		
		this.oUserIDErrorMsg = this.getView().byId("idUserIDErrorMsg");
		
		
		
		this._oRePasswordInputText = this.getView().byId("idInputRePassword");
		this._oRePasswordErrorMsg = this.getView().byId("idRegRePasswordErrorMsg");
		
		this._oMobileNumberInputText = this.getView().byId("idInputMobileNumber");
		this._oRegMobileErrorMsg = this.getView().byId("idRegMobileErrorMsg");
		
		this._oEmailInputText = this.getView().byId("idInputEmail");
		this._oRegEmailErrorMsg = this.getView().byId("idRegEmailErrorMsg");
		
		
		
		//this._oLanguageSelectionComboBox = this.getView().byId("idLanguageSelectionComboBox");
		
		this._basicInfo_OrganizationFragmentChild = sap.ui.xmlfragment("com.sagia.view.fragments.bi_organization", this.getView()
				.getController());
		
		this._licenseInfo_BAQFragmentChild = sap.ui.xmlfragment("com.sagia.view.fragments.bizactivityquestions", this.getView()
				.getController());
		
		/*this.oTermsAndConditionsFragment = sap.ui.xmlfragment("com.sagia.view.fragments.terms_and_conditions", this.getView()
				.getController());*/
		/*this.oShareHolderNewShareHolderFragment = sap.ui.xmlfragment("com.sagia.view.fragments.ns_shareholderdetails", this.getView()
				.getController());*/
		
		this.oUserID = this.getView().byId("idUserIDInputText");
		this.oPassword = this.getView().byId("idPasswordInputText");
		this.oInputEmail = this.getView().byId("idEmailInputText");
		this.oContactNumber = this.getView().byId("idContactNumberInputText");
		this.oContactPersonName = this.getView().byId("idContactNameInputText");
		this.oCompany = this.getView().byId("idCompanyInputText");
		
		this.oLILISectionComboBox = this.getView().byId("idLILISectionComboBox");
		this.oLILIBusinessTypeComboBox = this.getView().byId("idLILIBusinessTypeComboBox");
		this.oLILILicenceInfoContentVBox = this.getView().byId("LicenceInfoContentVBox");
		this.oTemporaryBusinessTypeVBox = this.getView().byId("idTemporaryBusinessTypeVBox");
		this.oLicenseTypeInputText = this.getView().byId("idLicenseTypeInputText");
		this.oLILIDivisionComboBox = this.getView().byId("idLILIDivisionComboBox");
		this.oLILIGroupComboBox = this.getView().byId("idLILIGroupComboBox");
		this.oLILILicenseActivityMultiComboBox = this.getView().byId("idLILILicenseActivityMultiComboBox");
		this.oLILIActivityDescriptionTextArea = this.getView().byId("idLILIActivityDescriptionTextArea");
		
		this.oLILIClassMultiComboBox = this.getView().byId("idLILIClassMultiComboBox");
		this.oLILIProductsTable = this.getView().byId("idLILIProductsTable"); 
		this.oLILIProductComboBox = this.getView().byId("idLILIProductComboBox");
		
		this.oLILIProductUOMComboBox = this.getView().byId("idLILIProductUOMComboBox");
		this.oLILIProductsTableJSONData = new sap.ui.model.json.JSONModel();
		this.oLILIProductsdata = {ProductsCollection: []};
		this.oNSHCreateNewData = {NSHCollection: []};
		this.oNSHCreateNewDataJSONData = new sap.ui.model.json.JSONModel();
		
		this.oSHJSONModel = new sap.ui.model.json.JSONModel();
		this.oSHTable = this.getView().byId("idSHTable"); 
		
		this.oTempLicenseType = this.getView().byId("idTemporaryLicenseTypeInputText");
		this.oTempBusinessType = this.getView().byId("idTemporaryBizTypeComboBox");
		this.oTempActivityDescription = this.getView().byId("idTemporaryBizActivityDescriptionTextArea");

		
		this.oSavedSHData = {SavedShareHolderCollection: []};
		this.oSavedSHDataJSONData = new sap.ui.model.json.JSONModel();
		
		this.oESHCreateNewData = {ESHCollection: []};
		this.oESHCreateNewDataJSONData = new sap.ui.model.json.JSONModel();
		
		this.oLILIProductsdataSerialNo = 1;
		
		this.oNSHTotalShareHolderPercentage=0;
		this.oESHTotalShareHolderPercentage=0;
		
		this.oBAQError = false;
		
		this.oSurveyID="UNKNOWN";
		
		this.oSubmitClicked = false;
		this.oSaveClicked = false
		
		this.oForgotPasswordMatrixLayout = this.getView().byId("idForgotPasswordMatrixLayout");
		this.oResetPasswordMatrixLayout = this.getView().byId("idResetPasswordMatrixLayout");
		
		this.oForgotPasswordInput = this.getView().byId("idForgotPasswordInput");
		
		this.oResetRefIdInput = this.getView().byId("idResetRefIdInput");
		this.oResetCurrentPasswordInput = this.getView().byId("idResetCurrentPasswordInput");
		this.oResetNewPasswordInput = this.getView().byId("idResetNewPasswordInput");
		this.oConfirmNewPasswordInput = this.getView().byId("idConfirmNewPasswordInput");
		
		this.oSignInMatrixLayout = this.getView().byId("idSignInMatrixLayout");
		this.oSignInButtonsMatrixLayout = this.getView().byId("idSignInButtonsMatrixLayout");
		this.oForgotResetPasswordLinksMatrixLayout = this.getView().byId("idSFPLinksMatrixLayout");
		
		
		this.oISICLoaded = false;
		
		this.oLanguageSelect = this.getView().byId("idLanguageSelect");
		
			
		
		this.oPreviewLILIPreviewProductsTable = this.getView().byId("idLILIPreviewProductsTable");
		this.oProductsTableVBox = this.getView().byId("idProductsTableVBox");
		
		this.oOneTime = true;
		
		this.ApplicationAlreadySubmitted = false;
		
		
		/*this.oLILIIndustrialProductComboBox.onAfterRendering = function() {
	        this.$().bind("mouseover", jQuery.proxy(function(){
				console.log("onmouseover");
			}, this));  
	     }*/
		/*var thatLocal = this;
		this.oLILIIndustrialProductComboBox.attachBrowserEvent("mouseover", function() {
			//console.log(thatLocal.oLILIIndustrialProductComboBox.getValue());
			//console.log(thatLocal.oLILIIndustrialProductComboBox.getFocusInfo());
			//thatLocal.oLILIIndustrialProductComboBox.setTooltip(thatLocal.oLILIIndustrialProductComboBox.getValue());
			sap.m.MessageToast.show(that.oModelHelper.getText("SelectAProduct"), {duration : 1000});
			
		});*/
		this.oBAQbusyIndicator = this.getView().byId("idBAQbusyIndicator");
		this.oLoadedSavedBAQ = true;
		
		this.allBAQLoaded = false;
		
		this.oFin_AQ_Loaded = false;




		
	},
	/*handleSHTableDeleteButtonPress : function(){
		
	},*/
	handleLicenseTypeChange : function(){
		var oLanguage;
		if(this.oLanguageSelect.getSelectedKey() === "EN")
		{
			oLanguage="E";
		}else{
			oLanguage="A";
		}
		
		var message = [];
		
		
		messageString = oResponse.LILILicenseActivityType[0].Activity.split(" ");
		message.push(messageString.shift());    
		message.push(messageString.join(' ')); 
		
		if(oLanguage === "E"){
			message = message[0];
		}else{
			message = message[1];
		}
		
		this.oLicenseTypeInputText.setValue(oResponse.LILILicenseActivityType[0].Activity);
	},
	
	handleLILIIndustrialProductsComboBoxSelectionChange : function(){
		
		/*if(that.oLILIIndustrialProductComboBox.getValue() !== ""){
			sap.m.MessageToast.show(that.oLILIIndustrialProductComboBox.getValue());		
		}*/
		//console.log(this.oLILIIndustrialProductComboBox.getValue());
		/*if(!this.oShowAlertDialog.isOpen())
		{
			this.oAlertTextView.setText(this.oModelHelper.getText(this.oLILIIndustrialProductComboBox.getValue()));
			this.oShowAlertDialog.open();
			
		}*/
		sap.m.MessageToast.show(this.oLILIIndustrialProductComboBox.getValue(), {duration : 8000});
		
		if(this.oLILIIndustrialProductComboBox.getSelectedKey() === " OTHER"){
			
			
			this.oLILIOtherProductTypeTextArea.setVisible(true);
			this.oLILIOtherProductTypeTextView.setVisible(true);
			this.oLILIOtherProductTypeTextViewMand.setVisible(true);
			//this.oOtherProductsVBox.setVisible(true);
			//this.oOtherProductsTextViewHBox.setVisible(true);
		}else{
			this.oLILIOtherProductTypeTextArea.setVisible(false);
			this.oLILIOtherProductTypeTextView.setVisible(false);
			this.oLILIOtherProductTypeTextViewMand.setVisible(false);
			//this.oOtherProductsVBox.setVisible(false);
			//this.oOtherProductsTextViewHBox.setVisible(false);
		}
		
		
		
	},
	handleTCPreviousButtonPress : function(){
		this.handlePreviewInfoButtonClick();
	},
	handlePreviewNextButtonPress : function(){
		this.handleTermsInfoButtonClick();
	},
	handlePreviewPreviousButtonPress : function(){
		this.handleShareholderInfoButtonClick();
	},
	handleSHNextButtonPress : function(){
		this.handlePreviewInfoButtonClick();
	},
	handleSHPreviousButtonPress : function(){
		this.handleLicenseButtonClick();
	},
	handleLIBAQPreviousButtonPress : function(){
		this.handleBasicInfoButtonClick();
	},
	handleLILINextButtonPress : function(){
		if(this.oISICvalidateworker.validateISICPresence(this)){
			this.handleShareholderInfoButtonClick();
			if(!this.oProductsTableVBox.getVisible()){
				this.oModelHelper.deleteSavedIndustrialProducts(this.oRef_id);
			}
			this.oISICvalidateworker.saveData(this, true);
		}
		
	},
	handleLILIPreviousButtonPress : function(){
		this.oLicenseInfoTab.setSelectedIndex(0);
	},
	handleBAQNextButtonPress : function(){
		
		
		var oBAQValidationStatus = false;
		for(var i=0; i < this.oTotalBAQQuestions; i++){			
			 var oBAQAnswer = sap.ui.getCore().byId("idBAQAnswer"+i);
			 
			 oBAQAnswer.setValueState("None");
			 oBAQAnswer.setShowValueStateMessage(false);
			 
			 if(oBAQAnswer.getSelectedKey() === ""){
				 //oBAQAnswer.setValueState("Error");
				 //oBAQAnswer.setShowValueStateMessage(false);
				 
				 oBAQValidationStatus = false;
				 break;
			 }else{
				 oBAQValidationStatus = true;
			 }
			 
		}
		
		
		if(oBAQValidationStatus){
			this.oBAQvalidateworker.saveData(this, true);
			this.oLicenseInfoTab.setSelectedIndex(1);
		}else{
			if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("AllBAQareMandatory"));
				this.oShowAlertDialog.open();
			 }
		}
		
	},
	handleBICINextButtonPress : function(){
		
		if(this.oBICIvalidateworker.validateDataBICI(this) && this.oBICIvalidateworker.validatePresenceBICI(this)){			
				this.oBICIvalidateworker.saveData(this, true);
				this.handleLicenseButtonClick();			
		}
		
	},
	
	handleBIOILaborSizeInputTextChange : function(oEvent){
		
		if(/^[0-9.,]+$/.test( this.oBIOILaborSizeInputText.getValue() )){
			this.oOriginalBIOILaborSizeInputTextValue = this.oBIOILaborSizeInputText.getValue();
			this.oOriginalBIOILaborSizeInputTextValue = this.oOriginalBIOILaborSizeInputTextValue.match(/\d/g);
			this.oOriginalBIOILaborSizeInputTextValue = this.oOriginalBIOILaborSizeInputTextValue.join("");
			
			
	        var formatter = new Intl.NumberFormat("en-US", {});  
	        this.oBIOILaborSizeInputText.setValue(formatter.format(this.oOriginalBIOILaborSizeInputTextValue));  
	        if(formatter.format(this.oOriginalBIOILaborSizeInputTextValue) === "NaN"){
	        	this.oBIOILaborSizeInputText.setValue("");
	        }
		}else{
			
			this.oBIOILaborSizeInputText.setValueState("Error");
			 this.oBIOILaborSizeInputText.setShowValueStateMessage(false);
			 this.oBIOILaborSizeInputText.setValue("");

	  		 if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("BIOILaborSizeDigitOnly"));
				this.oShowAlertDialog.open();
			 }
	  		 
			 
		}
		
	},
	handleBIOICapitalInputTextChange : function(oEvent) {
		
		if(/^[0-9.,]+$/.test( this.oBIOICapitalInputText.getValue() )){
			this.oOriginalBIOICapitalInputTextValue = this.oBIOICapitalInputText.getValue();
			this.oOriginalBIOICapitalInputTextValue = this.oOriginalBIOICapitalInputTextValue.match(/\d/g);
			this.oOriginalBIOICapitalInputTextValue = this.oOriginalBIOICapitalInputTextValue.join("");
		
	        //var value = oEvent.getSource().getValue();  
	         
	        var formatter = new Intl.NumberFormat('en-US', {});  
	        this.oBIOICapitalInputText.setValue(formatter.format(this.oOriginalBIOICapitalInputTextValue));
	        if(formatter.format(this.oOriginalBIOICapitalInputTextValue) === "NaN"){
	        	this.oBIOICapitalInputText.setValue("");
	        }
		}else{
			this.oBIOICapitalInputText.setValueState("Error");
			 this.oBIOICapitalInputText.setShowValueStateMessage(false);
			 this.oBIOICapitalInputText.setValue("");

	  		 if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("BIOICapitalDigitOnly"));
				this.oShowAlertDialog.open();
			 }
		}
		
		
      
    }, 
	handleSubmitPasswordResetButtonPress : function(){
		
		if(this.oResetRefIdInput.getValue().length > 10){
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("UserIDLength"));
			this.oShowAlertDialog.open();
			
			}			
		}else if(this.oResetRefIdInput.getValue() === ""){
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("UserIDRequired"));
			this.oShowAlertDialog.open();
			
			}			
		}else if(this.oResetCurrentPasswordInput.getValue() === ""){
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("ResetCurrRequired"));
			this.oShowAlertDialog.open();
			
			}			
		}else if(this.oResetNewPasswordInput.getValue() === ""){
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("ResetNewPassRequired"));
			this.oShowAlertDialog.open();
			
			}			
		}else if(this.oConfirmNewPasswordInput.getValue() === ""){
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("ResetConfirmNewRequired"));
			this.oShowAlertDialog.open();
			
			}			
		}else if(this.oResetCurrentPasswordInput.getValue().length > 10){
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("ResetCurrPwdLength"));
			this.oShowAlertDialog.open();
			
			}			
		}else if(this.oResetNewPasswordInput.getValue().length > 10){
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("NewPwdLength"));
			this.oShowAlertDialog.open();
			
			}			
		}else if(this.oConfirmNewPasswordInput.getValue().length > 10){
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("ConfirmedCurrPwdLength"));
			this.oShowAlertDialog.open();
			
			}			
		}else if(this.oResetNewPasswordInput.getValue() !== this.oConfirmNewPasswordInput.getValue()){
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("NandCDeoesnotMAtch"));
			this.oShowAlertDialog.open();
			
			}			
		}else{
			var oLanguage;
			if(this.oLanguageSelect.getSelectedKey() === "EN")
			{
				oLanguage="E";
			}else{
				oLanguage="A";
			}			
			this.openBusyDialog();
			 var oRequestFinishedDeferredResetPassword = this.oModelHelper.resetPassword(
					 this.oResetRefIdInput.getValue(),
					 this.oResetCurrentPasswordInput.getValue(), 
					 this.oResetNewPasswordInput.getValue(),
					// this.oConfirmNewPasswordInput.getValue(), 
					 oLanguage);
			 jQuery.when(oRequestFinishedDeferredResetPassword).then(jQuery.proxy(function(oResponse) {	
				 this.closeBusyDialog();
				 
				 this.oResetRefIdInput.setValue("");
				 this.oResetCurrentPasswordInput.setValue("");
				 this.oResetNewPasswordInput.setValue("");
				 this.oConfirmNewPasswordInput.setValue("");
				 
				 sap.m.MessageToast.show(oResponse.Return);				 
			 }, this));	
		}
		
		
	},
	handleSubmitPasswordForgotButtonPress : function(){
		if(this.oForgotPasswordInput.getValue().length > 241){
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("ForgotPasswordEmailIDLength"));
			this.oShowAlertDialog.open();
			
			}			
		}else if(this.oForgotPasswordInput.getValue() === ""){
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("UserIDRequired"));
			this.oShowAlertDialog.open();
			
			}			
		}else{
			var oLanguage;
			if(this.oLanguageSelect.getSelectedKey() === "EN")
			{
				oLanguage="E";
			}else{
				oLanguage="A";
			}
			this.openBusyDialog();
			var oRequestFinishedDeferredForgotPassword = this.oModelHelper.forgotPassword(this.oForgotPasswordInput.getValue(), oLanguage);
			 jQuery.when(oRequestFinishedDeferredForgotPassword).then(jQuery.proxy(function(oResponse) {
				 this.closeBusyDialog();
				 this.oForgotPasswordInput.setValue("");
				 
				 if(oResponse.Return === "User ID does not exist"){
					 sap.m.MessageToast.show(this.oModelHelper.getText("EmailIDdoesnotexist"));
				 }else{
					 sap.m.MessageToast.show(this.oModelHelper.getText("PasswordSentToEmail"));
					 this.oForgotPasswordMatrixLayout.setVisible(false);
					 
					 this.oSignInMatrixLayout.setVisible(true);
					 this.oSignInButtonsMatrixLayout.setVisible(true);
					 this.oForgotResetPasswordLinksMatrixLayout.setVisible(true);
					 
				 }
				 
			 }, this));	
		}
		 
	},
	handleResetPwdLinkPress : function(){
		this.oResetPasswordMatrixLayout.setVisible(true);
		this.oForgotPasswordMatrixLayout.setVisible(false);
		
		this.oSignInMatrixLayout.setVisible(false);
		this.oSignInButtonsMatrixLayout.setVisible(false);
		this.oForgotResetPasswordLinksMatrixLayout.setVisible(false);

	},
	handleResetPasswordCancelButtonPress : function(){
		this.oResetPasswordMatrixLayout.setVisible(false);
		
		this.oSignInMatrixLayout.setVisible(true);
		this.oSignInButtonsMatrixLayout.setVisible(true);
		this.oForgotResetPasswordLinksMatrixLayout.setVisible(true);
		
		this.getView().byId("idSignInUsernameInput").setValue("");
		this.getView().byId("idSignInPasswordInput").setValue("");
		
		this.oResetNewPasswordInput.setValue("");
	},	
	handleForgotPwdLinkPress : function(){
		this.oForgotPasswordMatrixLayout.setVisible(true);
		this.oResetPasswordMatrixLayout.setVisible(false);
		
		this.oSignInMatrixLayout.setVisible(false);
		this.oSignInButtonsMatrixLayout.setVisible(false);
		this.oForgotResetPasswordLinksMatrixLayout.setVisible(false);
		
		
	},
	handleForgotPasswordCancelButtonPress : function(){
		this.oForgotPasswordMatrixLayout.setVisible(false);
		
		this.oSignInMatrixLayout.setVisible(true);
		this.oSignInButtonsMatrixLayout.setVisible(true);
		this.oForgotResetPasswordLinksMatrixLayout.setVisible(true);
		
		this.getView().byId("idSignInUsernameInput").setValue("");
		this.getView().byId("idSignInPasswordInput").setValue("");
		this.oForgotPasswordInput.setValue("");
	},
	handleBIOINextButtonPress : function(){
		if(!(/^[0-9.,]+$/.test( this.oBIOILaborSizeInputText.getValue() ))){
			 
			 this.oBIOILaborSizeInputText.setValueState("Error");
			 this.oBIOILaborSizeInputText.setShowValueStateMessage(false);

	  		 if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("BIOILaborSizeDigitOnly"));
				this.oShowAlertDialog.open();
			 }
				
	  	 }else if(!(/^[0-9.,]+$/.test( this.oBIOICapitalInputText.getValue() ))){			
			 
			 this.oBIOICapitalInputText.setValueState("Error");
			 this.oBIOICapitalInputText.setShowValueStateMessage(false);

	  		 if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("BIOICapitalDigitOnly"));
				this.oShowAlertDialog.open();
			 }
				
	  	 }else{
	  		if(this.oBIOIvalidateworker.validateDataBIOI(this) && this.oBIOIvalidateworker.validatePresenceBIOI(this)){
				//if(this.oBIOIvalidateworker.validatePresenceBIOI(this)){
					this.oBIOIvalidateworker.saveData(this, true);
					this.oBasicInfoTab.setSelectedIndex(1);
					
				//}
			}
			
	  	 }
		
		
		
		

	},
	handleBICIPreviousButtonPress : function(){
		this.oBasicInfoTab.setSelectedIndex(0);

	},

	handleExistingShareHolderAddButtonPress : function(oEvent){
		
		//this.oExistingShareHolderTable = this.getView().byId("idESHTable");
		
		/*this.oExistingShareHolderTable.unbindItems();
		this.oExistingShareHolderTable.(this.oESHCreateNewDataJSONData);
		
		this.oExistingShareHolderTable.bindItems("/ESHCollection",new sap.m.ColumnListItem({
	        cells : [ new sap.ui.commons.TextView({
	          text : "{Bpname}"
	        }),new sap.ui.commons.TextView({
	          text : "{Bpname}"
	        }),  new sap.ui.commons.TextView({
	          text : "{Bpname}"
	        })]
	      }));*/
		
	},
	handleValidateESHButtonPress : function(oEvent){
		var that = this;
		var thatContext = this;

		this.oExistingShareHolderEntityNo = this.getView().byId("idESHEntityNoInputText");
		this.oExistingShareHolderEntityName = this.getView().byId("idESHEntityNameInputText");
		this.oESHPercentageInputText = this.getView().byId("idESHPercentageInputText");
		
		this.oESHPercentageInputText.attachBrowserEvent("mouseover", function() {
			that.oESHPercentageInputText.setValueState("None");
		});
		
		this.oExistingShareHolderEntityNo.attachBrowserEvent("mouseover", function() {
			that.oExistingShareHolderEntityNo.setValueState("None");
		});
		
		this.oTotalLocalESHNewShareHolderPercentage = 0;
		for(m = 0; m < this.oNSHCreateNewData.NSHCollection.length; m++){			
			this.oTotalLocalESHNewShareHolderPercentage += Number(this.oNSHCreateNewData.NSHCollection[m].Percentage);			
		}
		
		this.oTotalLocalESHExistingShareHolderPercentage = 0;
		
		for(m = 0; m < this.oSavedSHData.SavedShareHolderCollection.length; m++){			
			this.oTotalLocalESHExistingShareHolderPercentage += Number(this.oSavedSHData.SavedShareHolderCollection[m].Percentage);			
		}
		
		//this.oGlobalLocalESHTotalShareHolderPercentage = (this.oTotalLocalESHNewShareHolderPercentage + this.oTotalLocalESHExistingShareHolderPercentage);
		this.oGlobalLocalESHTotalShareHolderPercentage = this.oTotalLocalESHExistingShareHolderPercentage;
	
		
		
		  if(!(/^\d*$/.test( this.oESHPercentageInputText.getValue()))){
			  
				 
			 this.oESHPercentageInputText.setValueState("Error");
			 this.oESHPercentageInputText.setShowValueStateMessage(false);
				
			  
  			 if(!this.oShowAlertDialog.isOpen())
  			 {
  				this.oAlertTextView.setText(this.oModelHelper.getText("ESHInvalidPercentage"));
  				this.oShowAlertDialog.open();
  			 }			 							  				
	   	 }else if(!(/^\d*$/.test( this.oExistingShareHolderEntityNo.getValue()))){
	   		 
	   		 this.oExistingShareHolderEntityNo.setValueState("Error");
			 this.oExistingShareHolderEntityNo.setShowValueStateMessage(false);
			
			  
  			 if(!this.oShowAlertDialog.isOpen())
  			 {
  				this.oAlertTextView.setText(this.oModelHelper.getText("ESHInvalidEntityNo"));
  				this.oShowAlertDialog.open();
  			 }			 							  				
	   	 }else if(this.oExistingShareHolderEntityNo.getValue() === ""){
	   		 
	   		 this.oExistingShareHolderEntityNo.setValueState("Error");
			 this.oExistingShareHolderEntityNo.setShowValueStateMessage(false);
			
			if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("ESHEntityNoRequired"));
				this.oShowAlertDialog.open();
			 }
		}else if(this.oExistingShareHolderEntityNo.getValue().length >  10){
	   		 
	   		 this.oExistingShareHolderEntityNo.setValueState("Error");
			 this.oExistingShareHolderEntityNo.setShowValueStateMessage(false);
			
			if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("ESHEntityNoLength"));
				this.oShowAlertDialog.open();
			 }
		}else if((Number(this.oESHPercentageInputText.getValue()) + this.oGlobalLocalESHTotalShareHolderPercentage) > 100){
	   	//}else if(this.oGlobalLocalESHTotalShareHolderPercentage > 100){
			
		     this.oESHPercentageInputText.setValueState("Error");
			 this.oESHPercentageInputText.setShowValueStateMessage(false);
			
			if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("TotalSHCannotExceed"));
				this.oShowAlertDialog.open();
			 }
        }/*else if(this.oESHTotalShareHolderPercentage > 100){
			if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("ESHTotalPercentageCannotExceed"));
				this.oShowAlertDialog.open();
			 }
		}*/else if(this.oESHPercentageInputText.getValue() > 0 && this.oESHPercentageInputText.getValue() <= 100){
		
			this.openBusyDialog();
			
			var oLanguage;
			if(this.oLanguageSelect.getSelectedKey() === "EN")
			{
				oLanguage="E";
			}else{
				oLanguage="A";
			}
			this.openBusyDialog();

			var oRequestFinishedDeferredVESH = this.oModelHelper.readExistingSH(this.oExistingShareHolderEntityNo.getValue());

			jQuery.when(oRequestFinishedDeferredVESH).then(jQuery.proxy(function(oResponse) {
				
				this.closeBusyDialog();
				
				if(oResponse.data.Return === "E"){
					that.closeBusyDialog();

					if(!this.oShowAlertDialog.isOpen())
					 {
						this.oAlertTextView.setText(this.oModelHelper.getText("ESHDoesNotExist"));
						this.oShowAlertDialog.open();
					 }
				}else{
					
					
					this.oExistingShareHolderEntityName.setValue(oResponse.data.Bpname);
						
						var thatoResponse = oResponse;
						
						var percentage = parseInt(thatContext.oESHPercentageInputText.getValue());
		    			if(isNaN(percentage)){
		    				percentage = 0;
		    			}
		    			
		    			/*var nationality = [];
		    			nationality = thatoResponse.data.Return.split("~");
		    			
		    			if(oLanguage === "E"){
		    				nationality = nationality[0];
		    			}else{
		    				nationality = nationality[1];
		    			}*/
		    			that.openBusyDialog();
			            var oRequestFinishedDeferredVESHNSH = that.oModelHelper.createNewShareHolder(that.oRef_id,
			                    "Existing", oResponse.data.Bpname,
			                    "","","","","","","","","","","","",thatoResponse.data.Return,"","","","","",percentage, "","","",
			    				"",	"", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
			    				"", "", "", "", "", "", "", "", "", "", "", "", "", "", thatoResponse.data.Bpno);
		
			    		jQuery.when(oRequestFinishedDeferredVESHNSH).then(jQuery.proxy(function(oResponse) {
			    			that.closeBusyDialog();
			    			
			    			if(oResponse.Return === "D"){
								that.closeBusyDialog();

								if(!this.oShowAlertDialog.isOpen())
								 {
									this.oAlertTextView.setText(this.oModelHelper.getText("ESHDuplicate"));
									this.oShowAlertDialog.open();
								 }
							}
			    
			    			//thatContext.oExistingShareHolderTable.unbindItems();
			    			
			    			
							//thatContext.oSavedSHData.SavedShareHolderCollection.push({

			    			/*thatContext.oESHCreateNewData.ESHCollection.push({
			    				"Bpno":thatoResponse.data.Bpno,
			    	 			"Bpname":thatoResponse.data.Bpname,
			    	 			"EntityNo" : oResponse.EntityNo,
			    	 			"Percentage" : percentage});*/
			    			thatContext.oSHTable.unbindItems();
			    			thatContext.oSavedSHData.SavedShareHolderCollection.push({
/*			    				"Bpno":thatoResponse.data.Bpno,
*/			    	 			"ShareHolderName":thatoResponse.data.Bpname,
								"Nationalty" : thatoResponse.data.Return,			    	 			
			    	 			"Percentage" : percentage,
			    	 			"EntityNo" : oResponse.EntityNo});
			    			/*thatContext.oSavedSHData.SavedShareHolderCollection.push({
			    	 			"ShareHolderName":oResponse.EntityFname,	    	 			
			    	 			"Nationalty" : oResponse.CurrNationalty,
			    	 			"Percentage" : oResponse.Percentage,
			    	 			"EntityNo" : oResponse.EntityNo});*/
			    			
			    			
			    			thatContext.oESHTotalShareHolderPercentage += percentage;
			    			
			    			thatContext.oESHCreateNewDataJSONData.setData(thatContext.oSavedSHData);
			    	 		
			    	 		
			    			/*thatContext.oExistingShareHolderTable.setModel(thatContext.oESHCreateNewDataJSONData);
			    			
			    			thatContext.oExistingShareHolderTable.bindItems("/SavedShareHolderCollection",new sap.m.ColumnListItem({
			    		        cells : [ new sap.ui.commons.TextView({
			    		          text : "{Bpno}"
			    		        }),new sap.ui.commons.TextView({
			    		          text : "{Bpname}"
			    		        }),  new sap.ui.commons.TextView({
			    		          text : "{Percentage}"
			    		        })]
			    		      }));*/
			    			
			    			thatContext.oSHJSONModel.setData(thatContext.oSavedSHData);
			    			thatContext.oSHTable.setModel(thatContext.oSHJSONModel);
			    			thatContext.oSHTable.bindItems("/SavedShareHolderCollection",new sap.m.ColumnListItem({
			    				cells : [ new sap.ui.commons.TextView({
			    			          text : "{ShareHolderName}"
			    			        }),new sap.ui.commons.TextView({
			    			          text : "{Percentage}"
			    			        }),  new sap.ui.commons.TextView({
			    			          text : "{Nationalty}"
			    			        })]
			    		      }));


			    			this.oExistingShareHolderEntityNo.setValue("");
			    			this.oExistingShareHolderEntityName.setValue("");
			    			this.oESHPercentageInputText.setValue("");
			    			that.closeBusyDialog();
			    			
			    			that.oSavedSHData.SavedShareHolderCollection.length = 0;

			    			that.loadSavedShareHolderDetails();
					
		    		}, this));	
				}
	
				
			}, this));	
		}else{
			
			 this.oESHPercentageInputText.setValueState("Error");
			 this.oESHPercentageInputText.setShowValueStateMessage(false);
			
			if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("ESHPercentageValueRequired"));
				this.oShowAlertDialog.open();
			 }
		}
		
		
		
		
	},
	handleSHTableDeleteButtonPress : function(oEvent){
		
		 var that = this;
		 this.openBusyDialog();

		 
        try{
        //console.log(this.oESHCreateNewData.ESHCollection[this.oExistingShareHolderTable.indexOfItem(oEvent.getParameter('listItem'))].Percentage);
        this.oESHTotalShareHolderPercentage -= this.oSavedSHData.SavedShareHolderCollection[this.oSHTable.indexOfItem(oEvent.getParameter('listItem'))].Percentage; 

       	 var oRequestFinishedDeferredRemoveESHEntry = this.oModelHelper.deleteNewShareHolderEntry(this.oRef_id,this.oSavedSHData.SavedShareHolderCollection[this.oSHTable.indexOfItem(oEvent.getParameter('listItem'))].EntityNo);

    		 jQuery.when(oRequestFinishedDeferredRemoveESHEntry).then(jQuery.proxy(function(oResponse) {			
    			
   	             that.closeBusyDialog();
    			
    		 }, this));	
    		 

    			this.oSavedSHData.SavedShareHolderCollection.splice(this.oSHTable.indexOfItem(oEvent.getParameter('listItem')),1);
    	        
    	        this.oSHTable.removeItem(oEvent.getParameter('listItem'));
    	        
       	 
        }catch(err){
	            that.closeBusyDialog();

        }
		
	},
	createShareHolder : function(){
		

		var that = this;
		
		this.openBusyDialog();
		
		//this.oBusyDialogUI.setText("10%");
		try{
			 
			this.oTotalLocalNSHNewShareHolderPercentage = 0;
			for(m = 0; m < this.oNSHCreateNewData.NSHCollection.length; m++){			
				this.oTotalLocalNSHNewShareHolderPercentage += Number(this.oNSHCreateNewData.NSHCollection[m].Percentage);			
			}
			
			this.oTotalLocalNSHExistingShareHolderPercentage = 0;
			
			for(m = 0; m < this.oSavedSHData.SavedShareHolderCollection.length; m++){			
				this.oTotalLocalNSHExistingShareHolderPercentage += Number(this.oSavedSHData.SavedShareHolderCollection[m].Percentage);			
			}
			
			//this.oGlobalLocalNSHTotalShareHolderPercentage = (this.oTotalLocalNSHNewShareHolderPercentage + this.oTotalLocalNSHExistingShareHolderPercentage);
			this.oGlobalLocalNSHTotalShareHolderPercentage = this.oTotalLocalNSHExistingShareHolderPercentage;
			
			 if(this.oNSHDOBDate.getDateValue() > new Date()){
				 if(!this.oShowAlertDialog.isOpen())
				 {
					this.oAlertTextView.setText(this.oModelHelper.getText("NSHDOBFutureDate"));
					this.oShowAlertDialog.open();
				 }
	            this.closeBusyDialog();
				 
			 }else if((Number(this.oNSHPercentageInputText.getValue()) + this.oGlobalLocalNSHTotalShareHolderPercentage) > 100){
			 //}else if(this.oGlobalLocalNSHTotalShareHolderPercentage > 100){
					if(!this.oShowAlertDialog.isOpen())
					 {
						this.oAlertTextView.setText(this.oModelHelper.getText("TotalSHCannotExceed"));
						this.oShowAlertDialog.open();
					 }
    	            this.closeBusyDialog();

			 
		     }else if(this.oNSHTotalShareHolderPercentage > 100){
					if(!this.oShowAlertDialog.isOpen())
					 {
						this.oAlertTextView.setText(this.oModelHelper.getText("NSHTotalPercentageCannotExceed"));
						this.oShowAlertDialog.open();
					 }
    	            this.closeBusyDialog();

			 
		     }else{
		    	 var actvityQuestions = [];
					var activityAnswers = [];
					for(var j=0; j < this.oTotalActivityQuestions; j++){
						 var oAQAnswer = sap.ui.getCore().byId("idAQAnswer"+j);
						 var oAQuestion = sap.ui.getCore().byId("idAQuestion"+j);
						 
						 oAQAnswer.attachBrowserEvent("mouseover", function() {
							 oAQAnswer.setValueState("None");
						 });						 
						 
						 if(oAQAnswer.getSelectedKey() !== ""){
							 actvityQuestions.push(oAQuestion.data("idAQuestion"+j));
							 activityAnswers.push(oAQAnswer.getSelectedItem().getText()); 
						 }else{
							 if(!this.oShowAlertDialog.isOpen())
							 {
								this.oAlertTextView.setText(this.oModelHelper.getText("AllAQareMandatory"));
								this.oShowAlertDialog.open();
							 }
							 this.closeBusyDialog();
							 
							 oAQAnswer.setValueState("Error");
							 oAQAnswer.setShowValueStateMessage(false);
							
							 return;
						 }
					}
					
					var experienceQuestions = [];
					var experienceAnswers = [];
					for(var j=0; j < this.oTotalExperienceQuestions; j++){
						 var oEQAnswer = sap.ui.getCore().byId("idEQAnswer"+j);
						 var oEQuestion = sap.ui.getCore().byId("idEQuestion"+j);
						 
						 oEQAnswer.attachBrowserEvent("mouseover", function() {
							 oEQAnswer.setValueState("None");
						 });
						 
						 if(oEQAnswer.getSelectedKey() !== ""){
						 experienceQuestions.push(oEQuestion.data("idEQuestion"+j));
						 experienceAnswers.push(oEQAnswer.getSelectedItem().getText());
						 }else{
							 if(!this.oShowAlertDialog.isOpen())
							 {
								this.oAlertTextView.setText(this.oModelHelper.getText("AllEQareMandatory"));
								this.oShowAlertDialog.open();
							 }
							 this.closeBusyDialog();
							 
							 oEQAnswer.setValueState("Error");
							 oEQAnswer.setShowValueStateMessage(false);
							 
							 return;
						 }
					}
					
					
	  	   	    var questions = [];
				var answers1 = [];
				var answers2 = [];
				var answers3 = [];
				for(var i=0; i < this.oTotalFinancialQuestions; i++){
					 
					 var oFinancialQuestion = sap.ui.getCore().byId("idFinancialQuestion"+i);
					 var oFinancialAnswer1 = sap.ui.getCore().byId("idFinancialQAnswer"+i+""+1);
					 var oFinancialAnswer2 = sap.ui.getCore().byId("idFinancialQAnswer"+i+""+2);
					 var oFinancialAnswer3 = sap.ui.getCore().byId("idFinancialQAnswer"+i+""+3);
					 
					 oFinancialAnswer1.attachBrowserEvent("mouseover", function() {
				        	oFinancialAnswer1.setValueState("None");
					 });
					 oFinancialAnswer2.attachBrowserEvent("mouseover", function() {
				        	oFinancialAnswer2.setValueState("None");
					 });
					 oFinancialAnswer3.attachBrowserEvent("mouseover", function() {
				        	oFinancialAnswer3.setValueState("None");
					 });
					 
					 if(oFinancialAnswer1.getValue().length === 0){		

				  		 if(!this.oShowAlertDialog.isOpen())
						 {
							this.oAlertTextView.setText(this.oModelHelper.getText("AllFinancialAnswerAreMandatory"));
							this.oShowAlertDialog.open();
						 }
				  		 this.closeBusyDialog();
				  		 
				  		oFinancialAnswer1.setValueState("Error");
				  		oFinancialAnswer1.setShowValueStateMessage(false);
						
				  		 return;								
				  	 }
					 if(oFinancialAnswer2.getValue().length === 0){		

				  		 if(!this.oShowAlertDialog.isOpen())
						 {
							this.oAlertTextView.setText(this.oModelHelper.getText("AllFinancialAnswerAreMandatory"));
							this.oShowAlertDialog.open();
						 }
				  		 this.closeBusyDialog();
				  		oFinancialAnswer2.setValueState("Error");
				  		oFinancialAnswer2.setShowValueStateMessage(false);
				  		 return;								
				  	 }
					 if(oFinancialAnswer3.getValue().length === 0){		

				  		 if(!this.oShowAlertDialog.isOpen())
						 {
							this.oAlertTextView.setText(this.oModelHelper.getText("AllFinancialAnswerAreMandatory"));
							this.oShowAlertDialog.open();
						 }
				  		 this.closeBusyDialog();
				  		 
				  		oFinancialAnswer3.setValueState("Error");
				  		oFinancialAnswer3.setShowValueStateMessage(false);
				  		
				  		 return;								
				  	 }
					 
					 
					 
					 if(oFinancialAnswer1.getValue().length > 10){		

				  		 if(!this.oShowAlertDialog.isOpen())
						 {
							this.oAlertTextView.setText(this.oModelHelper.getText("FinancialAnswersLength"));
							this.oShowAlertDialog.open();
						 }
				  		 this.closeBusyDialog();
				  		oFinancialAnswer1.setValueState("Error");
				  		oFinancialAnswer1.setShowValueStateMessage(false);
				  		 return;								
				  	 }if(oFinancialAnswer2.getValue().length > 10){		

				  		 if(!this.oShowAlertDialog.isOpen())
						 {
							this.oAlertTextView.setText(this.oModelHelper.getText("FinancialAnswersLength"));
							this.oShowAlertDialog.open();
						 }
				  		 this.closeBusyDialog();
				  		oFinancialAnswer2.setValueState("Error");
				  		oFinancialAnswer2.setShowValueStateMessage(false);
				  		 return;								
				  	 }if(oFinancialAnswer3.getValue().length > 10){		

				  		 if(!this.oShowAlertDialog.isOpen())
						 {
							this.oAlertTextView.setText(this.oModelHelper.getText("FinancialAnswersLength"));
							this.oShowAlertDialog.open();
						 }
				  		 this.closeBusyDialog();
				  		oFinancialAnswer3.setValueState("Error");
				  		oFinancialAnswer3.setShowValueStateMessage(false);
				  		 return;								
				  	 }else if(!(/^\d*$/.test( oFinancialAnswer1.getValue() ))){		

				  		 if(!this.oShowAlertDialog.isOpen())
						 {
							this.oAlertTextView.setText(this.oModelHelper.getText("FinancialAnswersInvalid"));
							this.oShowAlertDialog.open();
						 }
				  		 this.closeBusyDialog();
				  		oFinancialAnswer1.setValueState("Error");
				  		oFinancialAnswer1.setShowValueStateMessage(false);
				  		 return;								
				  	 }else if(!(/^\d*$/.test( oFinancialAnswer2.getValue() ))){		

				  		 if(!this.oShowAlertDialog.isOpen())
						 {
							this.oAlertTextView.setText(this.oModelHelper.getText("FinancialAnswersInvalid"));
							this.oShowAlertDialog.open();
						 }
				  		 this.closeBusyDialog();
				  		oFinancialAnswer2.setValueState("Error");
				  		oFinancialAnswer2.setShowValueStateMessage(false);
				  		 return;								
				  	 }else if(!(/^\d*$/.test( oFinancialAnswer3.getValue() ))){		

				  		 if(!this.oShowAlertDialog.isOpen())
						 {
							this.oAlertTextView.setText(this.oModelHelper.getText("FinancialAnswersInvalid"));
							this.oShowAlertDialog.open();
						 }
				  		 this.closeBusyDialog();
				  		oFinancialAnswer3.setValueState("Error");
				  		oFinancialAnswer3.setShowValueStateMessage(false);
				  		 return;								
				  	 }else{
				  		 questions.push(oFinancialQuestion.data("idFinancialQuestion"+i));
						 answers1.push(oFinancialAnswer1.getValue());
						 answers2.push(oFinancialAnswer2.getValue());
						 answers3.push(oFinancialAnswer3.getValue());
				  	 }
					 

				}
				
				//console.log(that.oNSHDOBDate.getDateValue());
				
				sap.m.MessageToast.show(this.oModelHelper.getText("CreatingNewSH"), {duration : 10000});
				var oRequestFinishedDeferredNSH;
				if(this.oShareHolderTypeComboBox.getSelectedKey() === "1")
					{
					var oDOBSplitted =that.oNSHDOBDate.getDateValue().toLocaleDateString().split("/");
					if(oDOBSplitted[1] < 10){
						oDOBSplitted[1] = "0"+oDOBSplitted[1];
					}
					if(oDOBSplitted[0] < 10){
						oDOBSplitted[0] = "0"+oDOBSplitted[0];
					}
					oDOBSplittedString = oDOBSplitted[2]+""+oDOBSplitted[0]+""+oDOBSplitted[1];
					
					  oRequestFinishedDeferredNSH = that.oModelHelper.createNewShareHolder(
								that.oRef_id,
			            		that.oShareHolderTypeComboBox.getSelectedItem().getText(),
			     				that.oNSHFirstNameInputText.getValue(),
			     				that.oNSHCountryComboBox.getSelectedKey(),
			     				that.oNSHLastNameInputText.getValue(),
			     				that.oNSHCityNameInputText.getValue(),
			     				that.oNSHGenderComboBox.getSelectedKey(),
			     				that.oNSHPOBoxInputText.getValue(),
			     				that.oNSHMaritalStatusComboBox.getSelectedKey(),
			     				that.oNSHPostalCodeInputText.getValue(),
			     				that.oNSHAcademicTitleComboBox.getSelectedKey(),
			     				that.oNSHStreetInputText.getValue(),
			     				oDOBSplittedString,
			     				//that.oNSHDOBDate.getDateValue().toISOString().substring(0,10).replace(/-/g,""),
			     				"http://"+that.oNSHWebsiteInputText.getValue(),
			     				that.oNSHTelephoneInputText.getValue(),
			     				that.oNSHNationalityComboBox.getSelectedKey(),
			     				that.oNSHMobilePhoneInputText.getValue(),
			     				that.oNSHPreviousNationalityInputText.getSelectedKey(),
			     				that.oNSHFaxInputText.getValue(),
			     				that.oNSHCommMethodInputText.getSelectedKey(),
			     				that.oNSHEmailInputText.getValue(),
			     				that.oNSHPercentageInputText.getValue(),
			     				"", "", "", "", "", "", "",
			     		        "", "", "", "", "", "", "",
			     		        "", "", "", "", "", "", "",
			     		        "", "", "", "", "", "", "",
			     		        "", "", "", "", "", "", "", "", "", "",
			     		       that.oNSHPersonTelephoneCountryCodeInputText.getValue(),
			     		       that.oNSHPersonFaxCountryCodeInputText.getValue(),
			     		       that.oNSHPersonMobilephoneCountryCodeInputText.getValue());
					   
					  
				
					}else{
						
							  oRequestFinishedDeferredNSH = that.oModelHelper.createNewShareHolder(
										that.oRef_id,
					            		that.oShareHolderTypeComboBox.getSelectedItem().getText(),
					     				that.oNSHOrganizationName.getValue(),
					     				that.oNSHOrgCountryComboBox.getSelectedKey(),
					     				that.oNSHOrgName2tText.getValue(),
					     				that.oNSHOrgCityNameInputText.getValue(),
					     				that.oNSHOrgSectionComboBox.getSelectedKey(),
					     				that.oNSHOrgPOBoxInputText.getValue(),
					     				"",//that.oNSHMaritalStatusComboBox.getSelectedKey(),
					     				that.oNSHOrgPostalCodeInputText.getValue(),
					     				"",//that.oNSHAcademicTitleComboBox.getSelectedKey(),
					     				that.oNSHOrgStreetInputText.getValue(),
					     				"",//oDOBSplittedString,					     				
					     				"http://"+that.oNSHOrgWebsiteInputText.getValue(),
					     				that.oNSHOrgTelephoneInputText.getValue(),
					     				"",//that.oNSHNationalityComboBox.getSelectedKey(),
					     				that.oNSHOrgMobilephoneInputText.getValue(),
					     				"",//that.oNSHPreviousNationalityInputText.getSelectedKey(),
					     				that.oNSHOrgFaxInputText.getValue(),
					     				"",//that.oNSHCommMethodInputText.getSelectedKey(),
					     				that.oNSHOrgEmailInputText.getValue(),
					     				that.oNSHOrgPercentageInputText.getValue(),
					     				"", 
					     				"", 
					     				"", 
					     				"",
					     				"", 
					     				"", 
					     				"",
					     				that.oNSHOrgDivisionComboBox.getSelectedKey(),
					     				//this.oNSHOrgSubSctorInputText.getValue(), 
					     				this.oNSHOrgMultiNationalCompanyCombobox.getSelectedKey(), 
					     				this.oOriginalNSHPersonLaborSizeInputTextValue, //this.oNSHOrgLaborSizeInputText.getValue(),
					     				this.oNSHOrgLegalStatusComboBox.getSelectedKey(), 
					     				this.oNSHOrgBuildingNoInputText.getValue(), 
					     				this.oOriginalNSHOrgCapitalInputTextValue,//this.oNSHOrgCapitalInputText.getValue(), 
					     				
					     				"",
					     		        "", "", "", "", "", "", "",
					     		        "", "", "", "", "", "", "",
					     		        "", "", "", "", "", "", "", "", "", "",
					     		       this.oNSHOrgTelephoneCountryCodeInputText.getValue(),
					     		       this.oNSHOrgFaxCountryCodeInputText.getValue(),
					     		       this.oNSHOrgMobilephoneCountryCodeInputText.getValue()
					     		        );
							  
						
							
					}
					
				
					

		     		jQuery.when(oRequestFinishedDeferredNSH).then(jQuery.proxy(function(oResponse) {
		     			
		     		
		     			
	     			 try{
	     				
	     				that.oSHTable.unbindItems();

			            that.oSavedSHData.SavedShareHolderCollection.push({			    	
			            	"ShareHolderName":oResponse.EntityFname+" "+oResponse.EntityLname,
							"Nationalty" : oResponse.CurrNationalty,			    	 			
		    	 			"Percentage" : oResponse.Percentage,
		    	 			"EntityNo" : oResponse.EntityNo	            	
			            });
			             
			            that.oSHJSONModel.setData(that.oSavedSHData, true);
			    		that.oSHTable.setModel(that.oSHJSONModel);
			    		that.oSHTable.bindItems("/SavedShareHolderCollection",new sap.m.ColumnListItem({
			    			cells : [ new sap.ui.commons.TextView({
		    			          text : "{ShareHolderName}"
		    			        }),new sap.ui.commons.TextView({
		    			          text : "{Percentage}"
		    			        }),  new sap.ui.commons.TextView({
		    			          text : "{Nationalty}"
		    			        })]
			    		      }));
			    		
		    		if(this.oShareHolderTypeComboBox.getSelectedKey() === "1"){
			   	   		 this.createPersonShareHolderOperations(oResponse, actvityQuestions, activityAnswers, experienceQuestions, experienceAnswers, questions, answers1, answers2, answers3);
			   		 }else{
			   			 this.createOrganizationShareHolderOperations(oResponse, actvityQuestions, activityAnswers, experienceQuestions, experienceAnswers, questions, answers1, answers2, answers3);
			   		 }
			             

				            
				   
		     				 
		 }catch(error){
			 console.log(error);
 			 that.closeBusyDialog();
		 }
			 }, this));//end of create new share holder
  	   	 //    }//end of else
		     }
		}catch(err){
			console.log(err);
	        that.closeBusyDialog();
	
			
		}
		
	},
  createPersonShareHolderOperations : function(oResponse, actvityQuestions, activityAnswers, experienceQuestions, experienceAnswers, questions, answers1, answers2, answers3){
	     that.NSHEntityNo = oResponse.EntityNo;
	        that.NSHFullName = oResponse.EntityFname+"_"+oResponse.EntityLname;
	        
	        for(var j=0; j < this.oTotalActivityQuestions; j++){
				 var oAQFileUploader = sap.ui.getCore().byId("idAQFileUploader"+j);
				 var oAQuestion = sap.ui.getCore().byId("idAQuestion"+j);
				 
				 this.oModelHelper.uploadActivityQAttachment(this.oRef_id, 
						 oAQuestion.data("idAQuestion"+j), 
						 oAQFileUploader, 
						 oResponse.EntityFname,
						 oResponse.EntityLname);		 
			
			}
	        
	        for(var j=0; j < this.oTotalExperienceQuestions; j++){
				 var oEQFileUploader = sap.ui.getCore().byId("idEQFileUploader"+j);
				 var oEQuestion = sap.ui.getCore().byId("idEQuestion"+j);
				 
				 this.oModelHelper.uploadExperienceQAttachment(this.oRef_id, 
						 oEQuestion.data("idEQuestion"+j), 
						 oEQFileUploader, 
						 oResponse.EntityFname,
						 oResponse.EntityLname);		 
			
			}
	        try{
	        	var oLanguage;
				if(this.oLanguageSelect.getSelectedKey() === "EN")
				{
					oLanguage="E";
				}else{
					oLanguage="A";
				}
			sap.m.MessageToast.show(this.oModelHelper.getText("SavingNSHEQA"), {duration : 10000});
	        var oRequestFinishedDeferredExperienceQ = that.oModelHelper.createShareHolderExperienceAnswers
	        (that.oRef_id, experienceQuestions, experienceAnswers, that.oNSHFirstNameInputText.getValue(),that.oNSHLastNameInputText.getValue(), this.oBusinessTypeSurveyID, oLanguage);
			jQuery.when(oRequestFinishedDeferredExperienceQ).then(jQuery.proxy(function(oResponse) {
			    try{
			    	//sap.m.MessageToast.show(this.oModelHelper.getText("UploadingNSHPPCopy"), {duration : 10000});
				var oRequestFinishedDeferredUploadNSHPassPortCopy = that.oModelHelper.uploadNSHPassPortCopy(that.NSHFullName+"_PassPort_",that.oRef_id, that.NSHEntityNo, that.NSHPassPortCopy);
				jQuery.when(oRequestFinishedDeferredUploadNSHPassPortCopy).then(jQuery.proxy(function(oResponse) {
					try{
						/*sap.m.MessageToast.show(this.oModelHelper.getText("UploadingNSHCRCopy"), {duration : 10000});
					var oRequestFinishedDeferredUploadNSHPCommercialReg = that.oModelHelper.uploadCommercialRegAttachment(that.NSHFullName+"_CommReg_",that.oRef_id, that.NSHEntityNo, that.NSHCommercialRegAttachment);
			     	jQuery.when(oRequestFinishedDeferredUploadNSHPCommercialReg).then(jQuery.proxy(function(oResponse) {
			     		*/try{
			     			//sap.m.MessageToast.show(this.oModelHelper.getText("UploadingNSHBSCopy"), {duration : 10000});
			     		var oRequestFinishedDeferredUploadNSHBankStatement = that.oModelHelper.uploadBankStatementAttachment(that.NSHFullName+"_BankStmt_", that.oRef_id, that.NSHEntityNo, that.NSHBankStatementAttachment);
				     	jQuery.when(oRequestFinishedDeferredUploadNSHBankStatement).then(jQuery.proxy(function(oResponse) {
				     		try{
				     			/*sap.m.MessageToast.show(this.oModelHelper.getText("UploadingNSHBALSCopy"), {duration : 10000});
				     		var oRequestFinishedDeferredUploadNSHBalanceSheet = that.oModelHelper.uploadNSHBalanceSheetAttachment(that.NSHFullName+"_BalSheet_", that.oRef_id, that.NSHEntityNo, that.NSHBalanceSheetAttachment);
					     	jQuery.when(oRequestFinishedDeferredUploadNSHBalanceSheet).then(jQuery.proxy(function(oResponse) {*/
					     		try{
					     		var oRequestFinishedDeferredUploadNSHOtherAttachments = that.oModelHelper.uploadOtherAttachment(that.NSHFullName+"_Othr_", that.oRef_id, that.NSHEntityNo, that.NSHOtherAttachment);
						     	jQuery.when(oRequestFinishedDeferredUploadNSHOtherAttachments).then(jQuery.proxy(function(oResponse) {
						        	try{	
						        		var oLanguage;
										if(this.oLanguageSelect.getSelectedKey() === "EN")
										{
											oLanguage="E";
										}else{
											oLanguage="A";
										}
										sap.m.MessageToast.show(this.oModelHelper.getText("SavingNSHAQA"), {duration : 10000});
						             var oRequestFinishedDeferredcreateSHActivityAnswers = that.oModelHelper.createShareHolderActivityAnswers
						 			(that.oRef_id, actvityQuestions, activityAnswers, that.oNSHFirstNameInputText.getValue(),that.oNSHLastNameInputText.getValue(),oLanguage);
						  
						     			jQuery.when(oRequestFinishedDeferredcreateSHActivityAnswers).then(jQuery.proxy(function(oResponse) {
						     				
						 	                try{
						 	                	sap.m.MessageToast.show(this.oModelHelper.getText("SavingNSHFQA"), {duration : 15000});
						 					var oRequestFinishedDeferredcreateFinancialAnswers1 = that.oModelHelper.createFinancialAnswers
						 					(that.oRef_id, questions, answers1, "Year 1", that.oNSHFirstNameInputText.getValue(),that.oNSHLastNameInputText.getValue());
		
						 					jQuery.when(oRequestFinishedDeferredcreateFinancialAnswers1).then(jQuery.proxy(function(oResponse) {
						 						
						 						try{
						 						var oRequestFinishedDeferredcreateFinancialAnswers2 = that.oModelHelper.createFinancialAnswers
						 						(that.oRef_id, questions, answers2, "Year 2", that.oNSHFirstNameInputText.getValue(),that.oNSHLastNameInputText.getValue());
		
						 						jQuery.when(oRequestFinishedDeferredcreateFinancialAnswers2).then(jQuery.proxy(function(oResponse) {
						 							try{
						 							var oRequestFinishedDeferredcreateFinancialAnswers3 = that.oModelHelper.createFinancialAnswers
						 							(that.oRef_id, questions, answers3, "Year 3", that.oNSHFirstNameInputText.getValue(),that.oNSHLastNameInputText.getValue());

							 							jQuery.when(oRequestFinishedDeferredcreateFinancialAnswers3).then(jQuery.proxy(function(oResponse) {
							 							    try{
							 							    	
							 							    	
							 							    	 var getarray = [];
								 							        getarray.push(oRequestFinishedDeferredExperienceQ);
								 							        getarray.push(oRequestFinishedDeferredcreateFinancialAnswers1);
								 							        getarray.push(oRequestFinishedDeferredcreateFinancialAnswers2);
								 							        getarray.push(oRequestFinishedDeferredcreateFinancialAnswers3);
								 							        getarray.push(oRequestFinishedDeferredcreateSHActivityAnswers);
								 							        getarray.push(oRequestFinishedDeferredUploadNSHPassPortCopy);
								 							        //getarray.push(oRequestFinishedDeferredUploadNSHPCommercialReg);
								 							        getarray.push(oRequestFinishedDeferredUploadNSHBankStatement);
								 							        //getarray.push(oRequestFinishedDeferredUploadNSHBalanceSheet);
								 							        getarray.push(oRequestFinishedDeferredUploadNSHOtherAttachments);
										 							        
									 							        jQuery.when.apply($, getarray).done(function () {
									 							        	that.closeBusyDialog();
									 							        	
									 							        	that.oSavedSHData.SavedShareHolderCollection.length = 0;
									 							        	that.loadSavedShareHolderDetails();
									 							        	
									 							        	that.oShareHolderTypeComboBox.setValue("");
									 							        	that.oNSHFirstNameInputText.setValue("");
									 							        	that.oNSHMiddleNameInputText.setValue("");
									 										that.oNSHCountryComboBox.setSelectedKey("");
									 										that.oNSHLastNameInputText.setValue("");
									 										that.oNSHCityNameInputText.setValue("");
									 										that.oNSHGenderComboBox.setSelectedKey("");
									 										that.oNSHPOBoxInputText.setValue("");
									 										that.oNSHMaritalStatusComboBox.setSelectedKey("");
									 										that.oNSHPostalCodeInputText.setValue("");
									 										that.oNSHAcademicTitleComboBox.setSelectedKey("");
									 										that.oNSHStreetInputText.setValue("");
									 										that.oNSHWebsiteInputText.setValue("");
									 										that.oNSHTelephoneInputText.setValue("");
									 										that.oNSHNationalityComboBox.setSelectedKey("");
									 										that.oNSHMobilePhoneInputText.setValue("");
									 										that.oNSHPreviousNationalityInputText.setSelectedKey("");
									 										that.oNSHFaxInputText.setValue("");
									 										that.oNSHCommMethodInputText.setSelectedKey("");
									 										that.oNSHEmailInputText.setValue("");
									 										that.oNSHPercentageInputText.setValue("");
									 										that.oNSHDOBDate.setValue("");
									 					     				
									 					     				for(var i=0; i < that.oTotalFinancialQuestions; i++){
									 										
									 					     					 var oFinancialAnswer1 = sap.ui.getCore().byId("idFinancialQAnswer"+i+""+1);
									 											 var oFinancialAnswer2 = sap.ui.getCore().byId("idFinancialQAnswer"+i+""+2);
									 											 var oFinancialAnswer3 = sap.ui.getCore().byId("idFinancialQAnswer"+i+""+3);
									 											 
									 											 oFinancialAnswer1.setValue("");
									 											 oFinancialAnswer2.setValue("");
									 											 oFinancialAnswer3.setValue("");


									 					     				}
									 					     				
									 					     				for(var j=0; j < that.oTotalActivityQuestions; j++){
									 											 var oAQAnswer = sap.ui.getCore().byId("idAQAnswer"+j);
									 											 oAQAnswer.setSelectedKey("");
									 										}
									 										
									 									
									 										for(var j=0; j < that.oTotalExperienceQuestions; j++){
									 											 var oEQAnswer = sap.ui.getCore().byId("idEQAnswer"+j);
									 											 oEQAnswer.setSelectedKey("");
									 										}
									 										
									 										that._oCREATE_NewShareHolderVBox.setVisible(false);
									 							        	
									 							        	 if(!that.oShowAlertDialog.isOpen())
									 										 {
									 							        		that.oAlertTextView.setText(that.oModelHelper.getText("NewShareHolderCreated"));
									 							        		that.oShowAlertDialog.open();
									 										 }		 							        						        	
									 							     		
									 							        });						
							 							    	
							 							    }catch(error){
							 							    	console.log(error);
							 						 			 that.closeBusyDialog();
							 								 }
						 								   			 								
		 							}, this));	
		 							 }catch(error){
		 								console.log(error);
		 					 			 that.closeBusyDialog();
		 							 }
		 						}, this));
		 						 }catch(error){
		 							console.log(error);
		 				 			 that.closeBusyDialog();
		 						 }
		 					}, this));
			 	             }catch(error){
			 	            	console.log(error);
			 	 	 			 that.closeBusyDialog();	
			 	 			 }
		     			}, this));//end of AQ creation
			        	 }catch(error){
			        		 console.log(error);
				 			 that.closeBusyDialog();
						 }
			     	}, this));// end of Other upload
		     		 }catch(error){
		     			console.log(error);
			 			 that.closeBusyDialog();
					 }
		     	//}, this));// end of Balance Sheet upload
	     		 }catch(error){
	     			console.log(error);
		 			 that.closeBusyDialog();
				 }
	     	}, this));// end of Bank Statement upload
  		 }catch(error){
  			console.log(error);
	 			 that.closeBusyDialog();
			 }
  	//}, this));// end of Commercial upload
		 }catch(error){
			 console.log(error);
			 that.closeBusyDialog();		
		 }
 }, this));// end of Passport upload	
 }catch(error){
 	console.log(error);
		 that.closeBusyDialog();
	 }
}, this));// end of EQ creation			
}catch(error){
console.log(error);
that.closeBusyDialog();
}  
  },
  createOrganizationShareHolderOperations : function(oResponse, actvityQuestions, activityAnswers, experienceQuestions, experienceAnswers, questions, answers1, answers2, answers3){
	     that.NSHEntityNo = oResponse.EntityNo;
	        that.NSHFullName = oResponse.EntityFname+"_"+oResponse.EntityLname;
	        
	        for(var j=0; j < this.oTotalActivityQuestions; j++){
				 var oAQFileUploader = sap.ui.getCore().byId("idAQFileUploader"+j);
				 var oAQuestion = sap.ui.getCore().byId("idAQuestion"+j);
				 
				 this.oModelHelper.uploadActivityQAttachment(this.oRef_id, 
						 oAQuestion.data("idAQuestion"+j), 
						 oAQFileUploader, 
						 oResponse.EntityFname,
						 oResponse.EntityLname);		 
			
			}
	        
	        for(var j=0; j < this.oTotalExperienceQuestions; j++){
				 var oEQFileUploader = sap.ui.getCore().byId("idEQFileUploader"+j);
				 var oEQuestion = sap.ui.getCore().byId("idEQuestion"+j);
				 
				 this.oModelHelper.uploadExperienceQAttachment(this.oRef_id, 
						 oEQuestion.data("idEQuestion"+j), 
						 oEQFileUploader, 
						 oResponse.EntityFname,
						 oResponse.EntityLname);		 
			
			}
	        try{
	        	var oLanguage;
				if(this.oLanguageSelect.getSelectedKey() === "EN")
				{
					oLanguage="E";
				}else{
					oLanguage="A";
				}
			
			sap.m.MessageToast.show(this.oModelHelper.getText("SavingNSHEQA"), {duration : 10000});
	        var oRequestFinishedDeferredExperienceQ = that.oModelHelper.createShareHolderExperienceAnswers
	        (that.oRef_id, experienceQuestions, experienceAnswers, that.oNSHOrganizationName.getValue(),that.oNSHOrgName2tText.getValue(), this.oBusinessTypeSurveyID, oLanguage);
			jQuery.when(oRequestFinishedDeferredExperienceQ).then(jQuery.proxy(function(oResponse) {
			    try{
			    	//sap.m.MessageToast.show(this.oModelHelper.getText("UploadingNSHPPCopy"), {duration : 10000});
				var oRequestFinishedDeferredUploadNSHPassPortCopy = that.oModelHelper.uploadNSHPassPortCopy(that.NSHFullName+"_PassPort_",that.oRef_id, that.NSHEntityNo, that.NSHOrgPassPortCopy);
				jQuery.when(oRequestFinishedDeferredUploadNSHPassPortCopy).then(jQuery.proxy(function(oResponse) {
					try{
						//sap.m.MessageToast.show(this.oModelHelper.getText("UploadingNSHCRCopy"), {duration : 10000});
					var oRequestFinishedDeferredUploadNSHPCommercialReg = that.oModelHelper.uploadCommercialRegAttachment(that.NSHFullName+"_CommReg_",that.oRef_id, that.NSHEntityNo, that.NSHOrgCommercialRegAttachment);
			     	jQuery.when(oRequestFinishedDeferredUploadNSHPCommercialReg).then(jQuery.proxy(function(oResponse) {
			     		try{
			     			//sap.m.MessageToast.show(this.oModelHelper.getText("UploadingNSHBSCopy"), {duration : 10000});
			     		var oRequestFinishedDeferredUploadNSHBankStatement = that.oModelHelper.uploadBankStatementAttachment(that.NSHFullName+"_BankStmt_", that.oRef_id, that.NSHEntityNo, that.NSHOrgBankStatementAttachment);
				     	jQuery.when(oRequestFinishedDeferredUploadNSHBankStatement).then(jQuery.proxy(function(oResponse) {
				     		try{
				     			//sap.m.MessageToast.show(this.oModelHelper.getText("UploadingNSHBALSCopy"), {duration : 10000});
				     		var oRequestFinishedDeferredUploadNSHBalanceSheet = that.oModelHelper.uploadNSHBalanceSheetAttachment(that.NSHFullName+"_BalSheet_", that.oRef_id, that.NSHEntityNo, that.NSHOrgBalanceSheetAttachment);
					     	jQuery.when(oRequestFinishedDeferredUploadNSHBalanceSheet).then(jQuery.proxy(function(oResponse) {
					     		try{
					     		var oRequestFinishedDeferredUploadNSHOtherAttachments = that.oModelHelper.uploadOtherAttachment(that.NSHFullName+"_Othr_", that.oRef_id, that.NSHEntityNo, that.NSHOrgOtherAttachment);
						     	jQuery.when(oRequestFinishedDeferredUploadNSHOtherAttachments).then(jQuery.proxy(function(oResponse) {
						        	try{	
						        		var oLanguage;
										if(this.oLanguageSelect.getSelectedKey() === "EN")
										{
											oLanguage="E";
										}else{
											oLanguage="A";
										}
										sap.m.MessageToast.show(this.oModelHelper.getText("SavingNSHAQA"), {duration : 10000});
						             var oRequestFinishedDeferredcreateSHActivityAnswers = that.oModelHelper.createShareHolderActivityAnswers
						 			(that.oRef_id, actvityQuestions, activityAnswers, that.oNSHOrganizationName.getValue(),that.oNSHOrgName2tText.getValue(),oLanguage);
						  
						     			jQuery.when(oRequestFinishedDeferredcreateSHActivityAnswers).then(jQuery.proxy(function(oResponse) {
						     				
						 	                try{
						 	                	sap.m.MessageToast.show(this.oModelHelper.getText("SavingNSHFQA"), {duration : 25000});
						 					var oRequestFinishedDeferredcreateFinancialAnswers1 = that.oModelHelper.createFinancialAnswers
						 					(that.oRef_id, questions, answers1, "Year 1", that.oNSHOrganizationName.getValue(),that.oNSHOrgName2tText.getValue());
		
						 					jQuery.when(oRequestFinishedDeferredcreateFinancialAnswers1).then(jQuery.proxy(function(oResponse) {
						 						
						 						try{
						 						var oRequestFinishedDeferredcreateFinancialAnswers2 = that.oModelHelper.createFinancialAnswers
						 						(that.oRef_id, questions, answers2, "Year 2", that.oNSHOrganizationName.getValue(),that.oNSHOrgName2tText.getValue());
		
						 						jQuery.when(oRequestFinishedDeferredcreateFinancialAnswers2).then(jQuery.proxy(function(oResponse) {
						 							try{
						 							var oRequestFinishedDeferredcreateFinancialAnswers3 = that.oModelHelper.createFinancialAnswers
						 							(that.oRef_id, questions, answers3, "Year 3", that.oNSHOrganizationName.getValue(),that.oNSHOrgName2tText.getValue());

							 							jQuery.when(oRequestFinishedDeferredcreateFinancialAnswers3).then(jQuery.proxy(function(oResponse) {
							 							    try{
							 							    	
							 							    	
							 							    	 var getarray = [];
								 							        getarray.push(oRequestFinishedDeferredExperienceQ);
								 							        getarray.push(oRequestFinishedDeferredcreateFinancialAnswers1);
								 							        getarray.push(oRequestFinishedDeferredcreateFinancialAnswers2);
								 							        getarray.push(oRequestFinishedDeferredcreateFinancialAnswers3);
								 							        getarray.push(oRequestFinishedDeferredcreateSHActivityAnswers);
								 							        getarray.push(oRequestFinishedDeferredUploadNSHPassPortCopy);
								 							        getarray.push(oRequestFinishedDeferredUploadNSHPCommercialReg);
								 							        getarray.push(oRequestFinishedDeferredUploadNSHBankStatement);
								 							        getarray.push(oRequestFinishedDeferredUploadNSHBalanceSheet);
								 							        getarray.push(oRequestFinishedDeferredUploadNSHOtherAttachments);
										 							        
									 							        jQuery.when.apply($, getarray).done(function () {
									 							        	that.closeBusyDialog();
									 							        	
									 							        	that.oSavedSHData.SavedShareHolderCollection.length = 0;
									 							        	that.loadSavedShareHolderDetails();
									 							        	
									 							        	that.oNSHOrganizationName.setValue("");
									 							        	that.oNSHOrgCountryComboBox.setSelectedKey("");
									 							        	that.oNSHOrgName2tText.setValue("");
									 							        	that.oNSHOrgCityNameInputText.setValue("");
									 							        	that.oNSHOrgSectionComboBox.setSelectedKey("");
									 							        	that.oNSHOrgPostalCodeInputText.setValue("");
									 							        	that.oNSHOrgDivisionComboBox.setSelectedKey("");
									 							        	//that.oNSHOrgSubSctorInputText.setValue("");
									 							        	that.oNSHOrgPOBoxInputText.setValue("");
									 							        	that.oNSHOrgMultiNationalCompanyCombobox.setSelectedKey("");
									 							        	that.oNSHOrgStreetInputText.setValue("");
									 							        	that.oNSHOrgLegalStatusComboBox.setSelectedKey("");
									 							        	that.oNSHOrgBuildingNoInputText.setValue("");
									 							        	that.oNSHOrgLaborSizeInputText.setValue("");
									 							        	that.oNSHOrgCapitalInputText.setValue("");
									 							        	that.oNSHOrgTelephoneInputText.setValue("");
									 							        	that.oNSHOrgPercentageInputText.setValue("");
									 										that.oNSHOrgFaxInputText.setValue("");
									 										that.oNSHOrgWebsiteInputText.setValue("");
									 										that.oNSHOrgMobilephoneInputText.setValue("");
									 										that.oNSHOrgEmailInputText.setValue("");			
									 										that.oNSHOrgTelephoneCountryCodeInputText.setValue("");
									 										that.oNSHOrgFaxCountryCodeInputText.setValue("");
									 										that.oNSHOrgMobilephoneCountryCodeInputText.setValue("");
									 										
									 										//that.oNSHOrgSubSctorInputText.setEnabled(false);
									 					     				
									 					     				for(var i=0; i < that.oTotalFinancialQuestions; i++){
									 										
									 					     					 var oFinancialAnswer1 = sap.ui.getCore().byId("idFinancialQAnswer"+i+""+1);
									 											 var oFinancialAnswer2 = sap.ui.getCore().byId("idFinancialQAnswer"+i+""+2);
									 											 var oFinancialAnswer3 = sap.ui.getCore().byId("idFinancialQAnswer"+i+""+3);
									 											 
									 											 oFinancialAnswer1.setValue("");
									 											 oFinancialAnswer2.setValue("");
									 											 oFinancialAnswer3.setValue("");


									 					     				}
									 					     				
									 					     				for(var j=0; j < that.oTotalActivityQuestions; j++){
									 											 var oAQAnswer = sap.ui.getCore().byId("idAQAnswer"+j);
									 											 oAQAnswer.setSelectedKey("");
									 										}
									 										
									 									
									 										for(var j=0; j < that.oTotalExperienceQuestions; j++){
									 											 var oEQAnswer = sap.ui.getCore().byId("idEQAnswer"+j);
									 											 oEQAnswer.setSelectedKey("");
									 										}
									 										
									 										that._oCREATE_NewShareHolderVBox.setVisible(false);
									 							        	
									 							        	 if(!that.oShowAlertDialog.isOpen())
									 										 {
									 							        		that.oAlertTextView.setText(that.oModelHelper.getText("NewShareHolderCreated"));
									 							        		that.oShowAlertDialog.open();
									 										 }		 							        						        	
									 							     		
									 							        });						
							 							    	
							 							    }catch(error){
							 							    	console.log(error);
							 						 			 that.closeBusyDialog();
							 								 }
						 								   			 								
		 							}, this));	
		 							 }catch(error){
		 								console.log(error);
		 					 			 that.closeBusyDialog();
		 							 }
		 						}, this));
		 						 }catch(error){
		 							console.log(error);
		 				 			 that.closeBusyDialog();
		 						 }
		 					}, this));
			 	             }catch(error){
			 	            	console.log(error);
			 	 	 			 that.closeBusyDialog();	
			 	 			 }
		     			}, this));//end of AQ creation
			        	 }catch(error){
			        		 console.log(error);
				 			 that.closeBusyDialog();
						 }
			     	}, this));// end of Other upload
		     		 }catch(error){
		     			console.log(error);
			 			 that.closeBusyDialog();
					 }
		     	}, this));// end of Balance Sheet upload
	     		 }catch(error){
	     			console.log(error);
		 			 that.closeBusyDialog();
				 }
	     	}, this));// end of Bank Statement upload
		 }catch(error){
			console.log(error);
	 			 that.closeBusyDialog();
			 }
	}, this));// end of Commercial upload
		 }catch(error){
			 console.log(error);
			 that.closeBusyDialog();		
		 }
}, this));// end of Passport upload	
}catch(error){
	console.log(error);
		 that.closeBusyDialog();
	 }
}, this));// end of EQ creation			
}catch(error){
console.log(error);
that.closeBusyDialog();
}  
},
  handleNSHOrgLaborSizeInputTextChange : function(oEvent){
		
		if(/^[0-9.,]+$/.test( this.oNSHOrgLaborSizeInputText.getValue() )){
			
			this.oOriginalNSHPersonLaborSizeInputTextValue = this.oNSHOrgLaborSizeInputText.getValue();
			this.oOriginalNSHPersonLaborSizeInputTextValue = this.oOriginalNSHPersonLaborSizeInputTextValue.match(/\d/g);
			this.oOriginalNSHPersonLaborSizeInputTextValue = this.oOriginalNSHPersonLaborSizeInputTextValue.join("");
			
	        var formatter = new Intl.NumberFormat("en-US", {});  
	        this.oNSHOrgLaborSizeInputText.setValue(formatter.format(this.oOriginalNSHPersonLaborSizeInputTextValue));  
	        if(formatter.format(this.oOriginalNSHPersonLaborSizeInputTextValue) === "NaN"){
	        	this.oNSHOrgLaborSizeInputText.setValue("");
	        }
		}else{
			 this.oNSHOrgLaborSizeInputText.setValueState("Error");
			 this.oNSHOrgLaborSizeInputText.setShowValueStateMessage(false);
			 this.oNSHOrgLaborSizeInputText.setValue("");

	  		 if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("NSHLaborSize"));
				this.oShowAlertDialog.open();
			 }
		}
		
	},
	handleNSHOrgCapitalInputTextChange : function(oEvent) {
		
		if(/^[0-9.,]+$/.test( this.oNSHOrgCapitalInputText.getValue() )){
			this.oOriginalNSHOrgCapitalInputTextValue = this.oNSHOrgCapitalInputText.getValue();
			this.oOriginalNSHOrgCapitalInputTextValue = this.oOriginalNSHOrgCapitalInputTextValue.match(/\d/g);
			this.oOriginalNSHOrgCapitalInputTextValue = this.oOriginalNSHOrgCapitalInputTextValue.join("");
		
	        //var value = oEvent.getSource().getValue();  
	         
	        var formatter = new Intl.NumberFormat('en-US', {});  
	        this.oNSHOrgCapitalInputText.setValue(formatter.format(this.oOriginalNSHOrgCapitalInputTextValue));
	        if(formatter.format(this.oOriginalNSHOrgCapitalInputTextValue) === "NaN"){
	        	this.oNSHOrgCapitalInputText.setValue("");
	        }
		}else{
			 this.oNSHOrgCapitalInputText.setValueState("Error");
			 this.oNSHOrgCapitalInputText.setShowValueStateMessage(false);
			 this.oNSHOrgCapitalInputText.setValue("");

	  		 if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("NSHCapitalSize"));
				this.oShowAlertDialog.open();
			 }
		}
		
		
      
    }, 
	handleCreateNewShareHolder : function(oEvent){
		
		if(this.oShareHolderTypeComboBox.getSelectedKey() === ""){
		//	this.oNewShareHolderValidation = false;
			this.oShareHolderTypeComboBox.setValueState("Error");
			this.oShareHolderTypeComboBox.setShowValueStateMessage(false);
			 
			 if(!this.oShowAlertDialog.isOpen())
			 {
				 this.oAlertTextView.setText(this.oModelHelper.getText("NSHShareHolderType"));
				 this.oShowAlertDialog.open();
			 }
	   	 }else if(this.oShareHolderTypeComboBox.getSelectedKey() === "1"){
	   		 if(this.oValidationHelper.validateNewShareHolder(this)){
	   			 this.createShareHolder();
	   		 }	   		 
		 }else if(this.oShareHolderTypeComboBox.getSelectedKey() === "2"){
			 
			 if(!(/^[0-9.,]+$/.test( this.oNSHOrgLaborSizeInputText.getValue() ))){					

				 this.oNSHOrgLaborSizeInputText.setValueState("Error");
				 this.oNSHOrgLaborSizeInputText.setShowValueStateMessage(false);
					 

					 if(!this.oShowAlertDialog.isOpen())
					 {
						 this.oAlertTextView.setText(this.oModelHelper.getText("NSHLaborSize"));
						 this.oShowAlertDialog.open();
					 }
						
			  }else if(!(/^[0-9.,]+$/.test( this.oNSHOrgCapitalInputText.getValue() ))){	

				  this.oNSHOrgCapitalInputText.setValueState("Error");
				  this.oNSHOrgCapitalInputText.setShowValueStateMessage(false);
						 

						 if(!this.oShowAlertDialog.isOpen())
						 {
							 this.oAlertTextView.setText(this.oModelHelper.getText("NSHCapitalSize"));
							 this.oShowAlertDialog.open();
						 }
							
			  }else if(this.oNSHValidateworker.validateNSHOrgData(this)){
				  this.createShareHolder();
   			 }
   		 }
   		 
		
		
	},
	handleNSHEditButtonPress: function(oEvent, oData){
		this.oEditNSHHelper.editNSHWorker(this, oData);		
	},
	handleCancelNewShareHolderButtonPress : function(oEvent){
		this.CreateNewShareHolderButton.setVisible(true);
		this.UpdateNewShareHolderButton.setVisible(false);
		this.CancelNewShareHolderButton.setVisible(false);
		
		var that = this;
		
	    that.oShareHolderTypeComboBox.setValue("");
		that.oNSHFirstNameInputText.setValue("");
		that.oNSHMiddleNameInputText.setValue("");
		that.oNSHCountryComboBox.setValue("");
		that.oNSHLastNameInputText.setValue("");
		that.oNSHCityNameInputText.setValue("");
		that.oNSHGenderComboBox.setValue("");
		that.oNSHPOBoxInputText.setValue("");
		that.oNSHMaritalStatusComboBox.setValue("");
		that.oNSHPostalCodeInputText.setValue("");
		that.oNSHAcademicTitleComboBox.setValue("");
		that.oNSHStreetInputText.setValue("");
		that.oNSHWebsiteInputText.setValue("");
		that.oNSHTelephoneInputText.setValue("");
		that.oNSHNationalityComboBox.setValue("");
		that.oNSHMobilePhoneInputText.setValue("");
		that.oNSHPreviousNationalityInputText.setValue("");
		that.oNSHFaxInputText.setValue("");
		that.oNSHCommMethodInputText.setValue("");
		that.oNSHEmailInputText.setValue("");
		that.oNSHPercentageInputText.setValue("");
		that.oNSHDOBDate.setValue("");
		
		for(var i=0; i < that.oTotalFinancialQuestions; i++){				
			 var oFinancialAnswer1 = sap.ui.getCore().byId("idFinancialQAnswer"+i+""+1);
			 var oFinancialAnswer2 = sap.ui.getCore().byId("idFinancialQAnswer"+i+""+2);
			 var oFinancialAnswer3 = sap.ui.getCore().byId("idFinancialQAnswer"+i+""+3);
			 
			 oFinancialAnswer1.setValue("");
			 oFinancialAnswer2.setValue("");
			 oFinancialAnswer3.setValue("");
			}
			
			for(var j=0; j < that.oTotalActivityQuestions; j++){
			 var oAQAnswer = sap.ui.getCore().byId("idAQAnswer"+j);
			 oAQAnswer.setSelectedKey("");
		}		
	
		for(var j=0; j < that.oTotalExperienceQuestions; j++){
			 var oEQAnswer = sap.ui.getCore().byId("idEQAnswer"+j);
			 oEQAnswer.setSelectedKey("");
		}	 	
		
		this.NSHPassPortAttachmentName.setText("");
		this.NSHCommercialAttachmentName.setText("");
		this.NSHBankStatementAttachmentName.setText("");
		this.NSHBalanceSheetAttachmentName.setText("");
		this.NSHOtherAttachmentName.setText("");
		
		this.NSHPassPortAttachmentName.setVisible(false);
		this.NSHCommercialAttachmentName.setVisible(false);
		this.NSHBankStatementAttachmentName.setVisible(false);
		this.NSHBalanceSheetAttachmentName.setVisible(false);
		this.NSHOtherAttachmentName.setVisible(false);

	},
	handleUpdateNewShareHolderButtonPress : function(oEvent){
		
	},
	handleNSHTableDeleteButtonPress : function(oEvent){
		 
		 
         var that = this;
         try{
     		 this.openBusyDialog();
     		 
     		 this.oNSHTotalShareHolderPercentage -= this.oNSHCreateNewData.NSHCollection[this.oNSHCreateNSHTable.indexOfItem(oEvent.getParameter('listItem'))].Percentage;

        	 var oRequestFinishedDeferredRemoveNSHEntry = this.oModelHelper.deleteNewShareHolderEntry(this.oRef_id,this.oNSHCreateNewData.NSHCollection[this.oNSHCreateNSHTable.indexOfItem(oEvent.getParameter('listItem'))].EntityNo);

     		 jQuery.when(oRequestFinishedDeferredRemoveNSHEntry).then(jQuery.proxy(function(oResponse) {			
     			   
    	            that.closeBusyDialog();
     			
     		 }, this));	
     		 
     		 this.oNSHCreateNewData.NSHCollection.splice(this.oNSHCreateNSHTable.indexOfItem(oEvent.getParameter('listItem')),1);
	          
	         this.oNSHCreateNSHTable.removeItem(oEvent.getParameter('listItem'));
	         
        	 
         }catch(err){
	            that.closeBusyDialog();

         }
         
         
	},
	handleLILIProductDeleteButtonPress : function(oEvent){
		 var that = this;
		 this.openBusyDialog();

		try{

	       	 var oRequestFinishedDeferredRemoveProductEntry = this.oModelHelper.deleteIndustrialProducts(this.oLILIProductsdata.ProductsCollection[this.oLILIProductsTable.indexOfItem(oEvent.getParameter('listItem'))].sno,
	       			 this.oRef_id,
	       			 this.oLILIProductsdata.ProductsCollection[this.oLILIProductsTable.indexOfItem(oEvent.getParameter('listItem'))].productcode);

	    		 jQuery.when(oRequestFinishedDeferredRemoveProductEntry).then(jQuery.proxy(function(oResponse) {			
	    			
	   	             that.closeBusyDialog();
	    			
	    		 }, this));	
	    		
	    			this.oLILIProductsdata.ProductsCollection.splice(this.oLILIProductsTable.indexOfItem(oEvent.getParameter('listItem')),1);
	    	        
	    	        this.oLILIProductsTable.removeItem(oEvent.getParameter('listItem'));
	    	        
	    	        this.setProductsTableData();
	    	        
	       	 
	        }catch(err){
		            that.closeBusyDialog();

	        }
	},
	handleLILIAddProductButtonPress : function(){		
		var that =this;
		if(this.oLILIIndustrialProductComboBox.getValue() === ""){
			
			this.oLILIIndustrialProductComboBox.setValueState("Error");
			this.oLILIIndustrialProductComboBox.setShowValueStateMessage(false);
			 
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("SelectProduct"));
			this.oShowAlertDialog.open();
			
			}
		}else if(this.oLILIIndustrialProductComboBox.getSelectedKey() === ""){

			this.oLILIIndustrialProductComboBox.setValueState("Error");
			this.oLILIIndustrialProductComboBox.setShowValueStateMessage(false);
			 
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("SelectProduct"));
			this.oShowAlertDialog.open();
			
			}
		}else if(this.oLILIProductQuantityInputText.getValue() === ""){

			this.oLILIProductQuantityInputText.setValueState("Error");
			this.oLILIProductQuantityInputText.setShowValueStateMessage(false);
			 
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("ProductQuantityMandatory"));
			this.oShowAlertDialog.open();
			
			}
		}else if(this.oLILIProductQuantityInputText.getValue().length > 10){

			this.oLILIProductQuantityInputText.setValueState("Error");
			this.oLILIProductQuantityInputText.setShowValueStateMessage(false);
			 
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("ProductQuantityInvalidLength"));
			this.oShowAlertDialog.open();
			
			}
		}else if(!(/^\d*$/.test( this.oLILIProductQuantityInputText.getValue() ))){	

			this.oLILIProductQuantityInputText.setValueState("Error");
			this.oLILIProductQuantityInputText.setShowValueStateMessage(false);
			 
			 this.oValidationLILIStatus = false;

			 if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("ProductQuantityNumericOnly"));
				this.oShowAlertDialog.open();
			 }
				
	  	 }else if(this.oLILIIndustrialProductUOMComboBox.getValue() === ""){

				this.oLILIIndustrialProductUOMComboBox.setValueState("Error");
				this.oLILIIndustrialProductUOMComboBox.setShowValueStateMessage(false);
				 
				if(!this.oShowAlertDialog.isOpen())
				{
				this.oAlertTextView.setText(this.oModelHelper.getText("SelectProductUOM"));
				this.oShowAlertDialog.open();
				
				}
		}else if(this.oLILIIndustrialProductUOMComboBox.getSelectedKey() === ""){

			this.oLILIIndustrialProductUOMComboBox.setValueState("Error");
			this.oLILIIndustrialProductUOMComboBox.setShowValueStateMessage(false);
			 
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("SelectProductUOM"));
			this.oShowAlertDialog.open();
			
			}
		}else if(this.oLILIOtherProductTypeTextArea.getVisible() && this.oLILIOtherProductTypeTextArea.getValue() === ""){

			this.oLILIOtherProductTypeTextArea.setValueState("Error");
			this.oLILIOtherProductTypeTextArea.setShowValueStateMessage(false);
			 
			
				if(!this.oShowAlertDialog.isOpen())
				{
				this.oAlertTextView.setText(this.oModelHelper.getText("ProductdetailsRequired"));
				this.oShowAlertDialog.open();
				
				}
			
			
		}else if(this.oLILIOtherProductTypeTextArea.getVisible() && this.oLILIOtherProductTypeTextArea.getValue().length > 255){

			this.oLILIOtherProductTypeTextArea.setValueState("Error");
			this.oLILIOtherProductTypeTextArea.setShowValueStateMessage(false);
			 
			
				if(!this.oShowAlertDialog.isOpen())
				{
				this.oAlertTextView.setText(this.oModelHelper.getText("ProductdetailsExceed"));
				this.oShowAlertDialog.open();
				
				}
			
			
		}else{
			
			var oSno = '';
			var oDescription;
			
			var oRequestFinishedDeferredAddIndustrialProductDiffer;
			
			if(this.oLILIOtherProductTypeTextArea.getVisible()){
			
				oDescription = this.oLILIOtherProductTypeTextArea.getValue();
				var message = [];
				message = this.oLILIIndustrialProductComboBox.getSelectedItem().getText().split("-");
				this.openBusyDialog();
				oRequestFinishedDeferredAddIndustrialProductDiffer = this.oModelHelper.saveIndustrialProducts(
						oSno,//Number(oSno).toString(), 
						this.oRef_id, 
						//this.oLILIIndustrialProductComboBox.getSelectedKey(),
						message[0],
						oDescription,
						this.oLILIProductQuantityInputText.getValue(),
						this.oLILIIndustrialProductUOMComboBox.getSelectedKey(),
						this.oLILIIndustrialProductUOMComboBox.getSelectedItem().getText());
			
				
			}else{
				oDescription = this.oLILIIndustrialProductComboBox.getSelectedItem().getText();
				var message = [];
				message = oDescription.split("-");
				this.openBusyDialog();
				oRequestFinishedDeferredAddIndustrialProductDiffer = this.oModelHelper.saveIndustrialProducts(
						oSno,//Number(oSno).toString(), 
						this.oRef_id, 
						//this.oLILIIndustrialProductComboBox.getSelectedKey(),
						message[0],
						//oDescription,
						message[1],
						this.oLILIProductQuantityInputText.getValue(),
						this.oLILIIndustrialProductUOMComboBox.getSelectedKey(),
						this.oLILIIndustrialProductUOMComboBox.getSelectedItem().getText());
			}
			
			
			jQuery.when(oRequestFinishedDeferredAddIndustrialProductDiffer).then(jQuery.proxy(function(oResponse) {
				try{
					this.closeBusyDialog();
			    if(oResponse.Return !== "Product already exists"){
			    	try{	
			    		
			    		this.oLILIIndustrialProductComboBox.setSelectedKey("");
			    		this.oLILIIndustrialProductComboBox.setValue("");
						this.oLILIProductQuantityInputText.setValue("");
						this.oLILIIndustrialProductUOMComboBox.setSelectedKey("");
						this.oLILIOtherProductTypeTextArea.setValue("");
						this.oLILIOtherProductTypeTextArea.setVisible(false);
						this.oLILIOtherProductTypeTextView.setVisible(false);
						this.oLILIOtherProductTypeTextViewMand.setVisible(false);
					
						//this.oOtherProductsTextViewHBox.setVisible(false);
						//this.oOtherProductsVBox.setVisible(false);
						
			    		
			    		this.setProductsTableData();
			    		
			    		
			           
					}catch(err){
						
						if(!this.oShowAlertDialog.isOpen())
						{
						this.oAlertTextView.setText(this.oModelHelper.getText("NetworkError"));
						this.oShowAlertDialog.open();
						
						}
					}
			    }else{
			    	this.closeBusyDialog();
			    	
			    	if(!this.oShowAlertDialog.isOpen())
					{
					this.oAlertTextView.setText(oResponse.Return);
					this.oShowAlertDialog.open();
					
					}
			    }
				}catch(err){
					
					this.closeBusyDialog();
					
					if(!this.oShowAlertDialog.isOpen())
					{
					this.oAlertTextView.setText(this.oModelHelper.getText("NetworkError"));
					this.oShowAlertDialog.open();
					
					}
				}
			}, this));	
		}		
		
	},
	handleLILISectionSelectionComboBox : function(){
		var that = this;
		
		//console.log(this.oLILIBusinessTypeComboBox.getSelectedKey());

		if(that.oISICLoaded || this.oLILIBusinessTypeComboBox.getSelectedKey() === "N"){
			if(this.oLILIDivisionComboBox){
				this.oLILIDivisionComboBox.setSelectedKey("");
			}
			if(this.oLILIGroupComboBox){
				this.oLILIGroupComboBox.setSelectedKeys([]);
				this.oLILIGroupComboBox.setModel(null);
				//this.oLILIGroupComboBox.setSelectedItems([]);
			}
			if(this.oLILIClassMultiComboBox){
				this.oLILIClassMultiComboBox.setSelectedKeys([]);
				this.oLILIClassMultiComboBox.setModel(null);
				//this.oLILIClassMultiComboBox.setSelectedItems([]);
			}		
			if(this.oLILILicenseActivityMultiComboBox){
				this.oLILILicenseActivityMultiComboBox.setSelectedKeys([]);
				this.oLILILicenseActivityMultiComboBox.setModel(null);
				//this.oLILILicenseActivityMultiComboBox.setSelectedItems([]);
			}
			if(this.oLILIActivityDescriptionTextArea){
				this.oLILIActivityDescriptionTextArea.setValue("");
			}
			if(this.oLicenseTypeInputText){
				this.oLicenseTypeInputText.setValue("");
			}
		
		}
		
		if(this.oLILIProductsTable.getVisible()){
			this.oLILIProductsTable.unbindItems();
			this.oLILIProductsTable.setVisible(false);	
			this.oProductsTableVBox.setVisible(false);	
		}
		
		
        

		
		if(this.oGroupMultiSelectionTextView){
			this.oGroupMultiSelectionTextView.setText("");
		}
		if(this.oClassMultiSelectionTextView){
			this.oClassMultiSelectionTextView.setText("");
		}	
		if(this.oLAMultiSelectionTextView){
			this.oLAMultiSelectionTextView.setText("");
		}
		

		//this.oLILIGroupComboBox.removeAllSelectedItems();//removeAllItems()
		//this.oLILIClassMultiComboBox.removeAllSelectedItems();
		

		this.openBusyDialog();

		setTimeout(function() {
		var oRequestFinishedDeferredLILIDivision = that.oModelHelper.readLILIDivision(that.oLILISectionComboBox.getSelectedKey());

		jQuery.when(oRequestFinishedDeferredLILIDivision).then(jQuery.proxy(function(oResponse) {			
			
			that.oLILIDivisionComboBox.setModel(oResponse);
			
			//console.log(this.oLILIDivisionComboBox.getSelectedItem());
			/*this.oLILIDivisionComboBox.attachSelectionChange(function(){
				console.log(this.oLILIDivisionComboBox);
			});*/
			that.closeBusyDialog();
			
		}, that));
		},2000);

	},
	handleLILIBusinessTypeComboBoxSelectionChange : function(){
	/*	
		this.oTempLicenseType = this.getView().byId("idTemporaryLicenseTypeInputText");
		this.oTempBusinessType = this.getView().byId("idTemporaryBizTypeComboBox");
		this.oTempActivityDescription = this.getView().byId("idTemporaryBizActivityDescriptionTextArea");
*/
		
		if(this.oLILIBusinessTypeComboBox.getSelectedKey() === "N"){
			var that = this;
			/*if(this.oExperienceQuestionsMatrixLayout){
				this.oExperienceQuestionsMatrixLayout.removeAllRows();
			}*/
			if(this.oLILISectionComboBox){
				this.oLILISectionComboBox.setSelectedKey("");
			}
			if(this.oLILIDivisionComboBox){
				this.oLILIDivisionComboBox.setSelectedKey("");
				this.oLILIDivisionComboBox.setModel(null);
			}
			if(this.oLILIGroupComboBox){
				this.oLILIGroupComboBox.setSelectedKeys([]);
				this.oLILIGroupComboBox.setModel(null);
			}
			if(this.oLILIClassMultiComboBox){
				this.oLILIClassMultiComboBox.setSelectedKeys([]);
				this.oLILIClassMultiComboBox.setModel(null);
			}		
			if(this.oLILILicenseActivityMultiComboBox){
				this.oLILILicenseActivityMultiComboBox.setSelectedKeys([]);
				this.oLILILicenseActivityMultiComboBox.setModel(null);
			}
			if(this.oLILIActivityDescriptionTextArea){
				this.oLILIActivityDescriptionTextArea.setValue("");
			}
			
			if(this.oProductsTableVBox){
				this.oProductsTableVBox.setVisible(false);
			}
			
			if(this.oLILIProductsTable.getVisible()){
				this.oLILIProductsTable.unbindItems();
				this.oLILIProductsTable.setVisible(false);
				this.oProductsTableVBox.setVisible(false);	

			}
			
			
			if(this.oGroupMultiSelectionTextView){
				this.oGroupMultiSelectionTextView.setText("");
			}
			if(this.oClassMultiSelectionTextView){
				this.oClassMultiSelectionTextView.setText("");
			}
			if(this.oLAMultiSelectionTextView){
				this.oLAMultiSelectionTextView.setText("");
			}
			
			this.oLicenseTypeInputText.setValue("");
		/*	var oRequestFinishedDeferredLILIBusinessType = this.oModelHelper.readLILIBusinessTypeIsicDescription(this.oLILIBusinessTypeComboBox.getSelectedKey());
			jQuery.when(oRequestFinishedDeferredLILIBusinessType).then(jQuery.proxy(function(oResponse) {	
				//console.dir(oResponse);
				try{
					if(oResponse.data.results.length > 0){
						this.oBusinessTypeSurveyID = oResponse.data.results[0].SurveyID;
					}
					if(oResponse.data.results[0].IsicDescription !== "N"){
						
						var oLanguage;
						if(this.oLanguageSelect.getSelectedKey() === "EN")
						{
							oLanguage="E";
						}else{
							oLanguage="A";
						}
						
						var message = [];
						messageString = oResponse.data.results[0].Activity.split(" ");
						message.push(messageString.shift());    
						message.push(messageString.join(' ')); 
						
						if(oLanguage === "E"){
							message = message[0];
						}else{
							message = message[1];
						}
						
						this.oLicenseTypeInputText.setValue(oResponse.data.results[0].Activity);
						
						
						//this.oLicenseTypeInputText.setValue(oResponse.data.results[0].Activity);
						//this.oLILILicenceInfoContentVBox.setVisible(false);
						//this.oTemporaryBusinessTypeVBox.setVisible(true);
					}else{
						//this.oLicenseTypeInputText.setValue("");
						//this.oLILILicenceInfoContentVBox.setVisible(true);
						//this.oTemporaryBusinessTypeVBox.setVisible(false);
					}
				}catch(error){
					that.closeBusyDialog();
				}
				
				
			}, this));	*/
			
			this.oLILILicenceInfoContentVBox.setVisible(true);
			this.oTemporaryBusinessTypeVBox.setVisible(false);
			
			
		}else if(this.oLILIBusinessTypeComboBox.getSelectedKey() === "T"){
	
			//this.oLicenseTypeInputText.setValue("");
			this.oLILILicenceInfoContentVBox.setVisible(false);
			this.oTemporaryBusinessTypeVBox.setVisible(true);
		}
		
		
		/*var oRequestFinishedDeferredLILIBusinessType = this.oModelHelper.readLILIBusinessTypeIsicDescription(this.oLILIBusinessTypeComboBox.getSelectedKey());
		jQuery.when(oRequestFinishedDeferredLILIBusinessType).then(jQuery.proxy(function(oResponse) {	
			//console.dir(oResponse);
			try{
				if(oResponse.data.results.length > 0){
					this.oBusinessTypeSurveyID = oResponse.data.results[0].SurveyID;
				}
				if(oResponse.data.results[0].IsicDescription !== "None of the above"){
					
					var oLanguage;
					if(this.oLanguageSelect.getSelectedKey() === "EN")
					{
						oLanguage="E";
					}else{
						oLanguage="A";
					}
					
					var message = [];
					messageString = oResponse.data.results[0].Activity.split(" ");
					message.push(messageString.shift());    
					message.push(messageString.join(' ')); 
					
					if(oLanguage === "E"){
						message = message[0];
					}else{
						message = message[1];
					}
					
					this.oLicenseTypeInputText.setValue(oResponse.data.results[0].Activity);
					
					
					//this.oLicenseTypeInputText.setValue(oResponse.data.results[0].Activity);
					this.oLILILicenceInfoContentVBox.setVisible(false);
					this.oTemporaryBusinessTypeVBox.setVisible(true);
				}else{
					this.oLicenseTypeInputText.setValue("");
					this.oLILILicenceInfoContentVBox.setVisible(true);
					this.oTemporaryBusinessTypeVBox.setVisible(false);
				}
			}catch(error){
				that.closeBusyDialog();
			}
			
			
		}, this));	
		*/
		
	},
	handleLILIDivisionSelectionComboBox : function(){
		//this.oLILIGroupComboBox.removeAllSelectedItems();
		//this.oLILIClassMultiComboBox.removeAllSelectedItems();
		var that = this;

		if(that.oISICLoaded || this.oLILIBusinessTypeComboBox.getSelectedKey() === "N"){
			if(this.oLILIGroupComboBox){
				this.oLILIGroupComboBox.setSelectedKeys([]);
				this.oLILIGroupComboBox.setModel(null);
			}
			if(this.oLILIClassMultiComboBox){
				this.oLILIClassMultiComboBox.setSelectedKeys([]);
				this.oLILIClassMultiComboBox.setModel(null);
			}		
			if(this.oLILILicenseActivityMultiComboBox){
				this.oLILILicenseActivityMultiComboBox.setSelectedKeys([]);
				this.oLILILicenseActivityMultiComboBox.setModel(null);
			}
			if(this.oLILIActivityDescriptionTextArea){
				this.oLILIActivityDescriptionTextArea.setValue("");
			}
			if(this.oLicenseTypeInputText){
				this.oLicenseTypeInputText.setValue("");
			}
		}
		
		if(this.oLILIProductsTable.getVisible()){
			this.oLILIProductsTable.unbindItems();
			this.oLILIProductsTable.setVisible(false);	
			this.oProductsTableVBox.setVisible(false);	

		}
		
		if(this.oGroupMultiSelectionTextView){
			this.oGroupMultiSelectionTextView.setText("");
		}
		if(this.oClassMultiSelectionTextView){
			this.oClassMultiSelectionTextView.setText("");
		}
		if(this.oLAMultiSelectionTextView){
			this.oLAMultiSelectionTextView.setText("");
		}
		
		
		this.openBusyDialog();
		
		//setTimeout(function() {
			var oRequestFinishedDeferredLILIGroup = that.oModelHelper.readLILIGroup(that.oLILISectionComboBox.getSelectedKey(),that.oLILIDivisionComboBox.getSelectedKey());

			jQuery.when(oRequestFinishedDeferredLILIGroup).then(jQuery.proxy(function(oResponse) {			
				//console.dir(oResponse);
				
				that.oLILIGroupComboBox.setModel(oResponse);
				if(that.oISICLoaded || this.oLILIBusinessTypeComboBox.getSelectedKey() === "N"){
					that.oLILIGroupComboBox.removeSelectedKeys(that.oLILIGroupComboBox.getSelectedKeys());
				}
				//that.oLILIGroupComboBox.removeSelectedKeys(that.oLILIGroupComboBox.getSelectedKeys());
				
				that.closeBusyDialog();

			}, that));	
		//},4000);
		
		
	},
	handleLILIGropuMultiSelectionComboBoxChange : function(){
		//this.oLILIClassMultiComboBox.removeAllSelectedItems();
		
	/* var oRequestFinishedDeferredLILIClass = this.oModelHelper.readLILIClass(this.oLILIGroupComboBox.getSelectedKeys());

		jQuery.when(oRequestFinishedDeferredLILIClass).then(jQuery.proxy(function(oResponse) {
			
			this.oLILIClassMultiComboBox.setModel(oResponse);
			
		}, this));*/
		
		var that = this;
		
		if(that.oISICLoaded || this.oLILIBusinessTypeComboBox.getSelectedKey() === "N"){
			if(this.oLILIClassMultiComboBox){
				this.oLILIClassMultiComboBox.setSelectedKeys([]);
				this.oLILIClassMultiComboBox.setModel(null);
				this.oClassMultiSelectionTextView.setText("");
			}		
			if(this.oLILILicenseActivityMultiComboBox){
				this.oLAMultiSelectionTextView.setText("");
				this.oLILILicenseActivityMultiComboBox.setSelectedKeys([]);
				this.oLILILicenseActivityMultiComboBox.setModel(null);
			}
			if(this.oLILIActivityDescriptionTextArea){
				this.oLILIActivityDescriptionTextArea.setValue("");
			}
			if(this.oLicenseTypeInputText){
				this.oLicenseTypeInputText.setValue("");
			}
		}
		
		if(this.oLILIProductsTable.getVisible()){
			this.oLILIProductsTable.unbindItems();
			this.oLILIProductsTable.setVisible(false);	
			this.oProductsTableVBox.setVisible(false);	

		}
		
		var oTempGroupTextViewText = "";
	    for(var i = 0 ; i < this.oLILIGroupComboBox.getSelectedKeys().length; i++){
	    	if(i < 3){
	    	oTempGroupTextViewText += (i+1)+". "+this.oLILIGroupComboBox.getSelectedItems()[i].getText()+"\n";
	    	}
	    }
	    this.oGroupMultiSelectionTextView.setText(oTempGroupTextViewText);
	    
	    if(this.oLILIGroupComboBox.getSelectedKeys().length === 0){
	    	this.oClassMultiSelectionTextView.setText("");
	    	this.oLAMultiSelectionTextView.setText("");

	    	
	    }


		
		
		
		this.openBusyDialog();
		
		//setTimeout(function() {
		 var oRequestFinishedDeferredLILIClass = that.oModelHelper.readLILIClass(that.oLILISectionComboBox.getSelectedKey(),that.oLILIDivisionComboBox.getSelectedKey(), that.oLILIGroupComboBox.getSelectedKeys());

			jQuery.when(oRequestFinishedDeferredLILIClass).then(jQuery.proxy(function(oResponse) {

				
				that.oLILIClassMultiComboBox.setModel(oResponse);
				if(that.oISICLoaded || this.oLILIBusinessTypeComboBox.getSelectedKey() === "N"){
				that.oLILIClassMultiComboBox.removeSelectedKeys(that.oLILIClassMultiComboBox.getSelectedKeys());
				}
				
				that.closeBusyDialog();
			}, that));
		//},4000);
	},
	/*handleLILIDivisionComboBoxChange : function(){
		var that = this;
		if(that.oLILIGroupComboBox){
			that.oLILIGroupComboBox.removeSelectedKeys(that.oLILIGroupComboBox.getSelectedKeys());
		}

	},
	handleLILIGropuMultiComboBoxChange : function(){	
		var that = this;
		if(that.oLILIClassMultiComboBox){
			that.oLILIClassMultiComboBox.removeSelectedKeys(that.oLILIClassMultiComboBox.getSelectedKeys());
		}
	},
	handleLILIClassMultiComboBoxChange : function(){
		var that = this;
		if(that.oLILILicenseActivityMultiComboBox){
			that.oLILILicenseActivityMultiComboBox.removeSelectedKeys(that.oLILILicenseActivityMultiComboBox.getSelectedKeys());
		}

	},*/
	handleLILIClassMultiSelectionComboBoxChange : function(){
		var that = this;
		//that.oLILILicenseActivityMultiComboBox.removeSelectedKeys(that.oLILILicenseActivityMultiComboBox.getSelectedKeys());
		if(that.oISICLoaded || this.oLILIBusinessTypeComboBox.getSelectedKey() === "N"){
			if(this.oLILILicenseActivityMultiComboBox){
				
				this.oLILILicenseActivityMultiComboBox.setSelectedKeys([]);
				this.oLILILicenseActivityMultiComboBox.setModel(null);
			}
			if(this.oLILIActivityDescriptionTextArea){
				this.oLILIActivityDescriptionTextArea.setValue("");
			}
			if(this.oLicenseTypeInputText){
				this.oLicenseTypeInputText.setValue("");
			}
		}
		
		if(this.oLILIProductsTable.getVisible()){
			this.oLILIProductsTable.unbindItems();
			this.oLILIProductsTable.setVisible(false);	
			this.oProductsTableVBox.setVisible(false);	

		}
		/*if(this.oLILIClassMultiComboBox.getSelectedKeys().length === 0){
	    	this.oLAMultiSelectionTextView.setText("");	    	
	    }*/
		
		var oTempClassTextViewText = "";
	    for(var i = 0 ; i < this.oLILIClassMultiComboBox.getSelectedKeys().length; i++){
	    	if(i < 3){
	    	oTempClassTextViewText += (i+1)+". "+this.oLILIClassMultiComboBox.getSelectedItems()[i].getText()+"\n";
	    	}
	    }
	    this.oClassMultiSelectionTextView.setText(oTempClassTextViewText);
	    
	    this.oLAMultiSelectionTextView.setText("");


		this.openBusyDialog();
		//setTimeout(function() {
			
			
			
	 var oRequestFinishedDeferredLILILicenseActivity = that.oModelHelper.readLILILicenseActivity(that.oLILISectionComboBox.getSelectedKey(),that.oLILIDivisionComboBox.getSelectedKey(), that.oLILIGroupComboBox.getSelectedKeys(), that.oLILIClassMultiComboBox.getSelectedKeys());

		jQuery.when(oRequestFinishedDeferredLILILicenseActivity).then(jQuery.proxy(function(oResponse) {
			//console.dir(oResponse);
			
			that.oLILILicenseActivityMultiComboBox.setModel(oResponse);
			if(that.oISICLoaded || this.oLILIBusinessTypeComboBox.getSelectedKey() === "N"){
			that.oLILILicenseActivityMultiComboBox.removeSelectedKeys(that.oLILILicenseActivityMultiComboBox.getSelectedKeys());
			}
			
			
				var oRequestFinishedDeferredLILILicenseType = that.oModelHelper.readLILILicenseType(that.oLILISectionComboBox.getSelectedKey(),that.oLILIDivisionComboBox.getSelectedKey(), that.oLILIGroupComboBox.getSelectedKeys(), that.oLILIClassMultiComboBox.getSelectedKeys());
	
				jQuery.when(oRequestFinishedDeferredLILILicenseType).then(jQuery.proxy(function(oResponse) {
					var that = this;

					//console.dir(oResponse);
					if(oResponse !== undefined && oResponse.LILILicenseActivityType.length>0){
					
						that.oSurveyID = oResponse.LILILicenseActivityType[0].SurveyID;
						
						this.oBusinessTypeSurveyID = that.oSurveyID;
						
			           // this.productsTableOperation();
						
						
		    			
		    			
						
						if(oResponse.LILILicenseActivityType[0].Activity.substring(0, 10) === "INDUSTRIAL"){
							this.oProductsTableVBox.setVisible(true);
							
							this.oLILIIndustrialProductComboBox = this.getView().byId("idLILIIndustrialProductComboBox");		
							this.oLILIIndustrialProductUOMComboBox = this.getView().byId("idLILIIndustrialProductUOMComboBox");
							this.oLILIProductQuantityInputText = this.getView().byId("idLILIProductQuantityInputText");
							this.oLILIOtherProductTypeTextArea = this.getView().byId("idLILIOtherProductTypeTextArea");
							this.oLILIOtherProductTypeTextView = this.getView().byId("idLILIOtherProductTypeTextView");
							this.oLILIOtherProductTypeTextViewMand = this.getView().byId("idLILIOtherProductTypeTextViewMand");
						
							
							/*this.oLILIIndustrialProductComboBox.attachBrowserEvent("mouseover", function() {
								sap.m.MessageToast.show(that.oModelHelper.getText("SelectAProduct"), {duration : 1000});								
							});*/
							
							var oLanguage;
							if(this.oLanguageSelect.getSelectedKey() === "EN")
							{
								oLanguage="E";
							}else{
								oLanguage="A";
							}
							
							var oRequestFinishedDeferredIndustrialProducts = this.oModelHelper.readIndustrialProducts(oLanguage);

							jQuery.when(oRequestFinishedDeferredIndustrialProducts).then(jQuery.proxy(function(oResponse) {			
								this.oLILIIndustrialProductComboBox.setModel(oResponse);								
							}, this));
							
							var oRequestFinishedDeferredIndustrialProductsUOM = this.oModelHelper.readIndustrialProductsUOM(oLanguage);

							jQuery.when(oRequestFinishedDeferredIndustrialProductsUOM).then(jQuery.proxy(function(oResponse) {			
								this.oLILIIndustrialProductUOMComboBox.setModel(oResponse);
							}, this));
							
							var oLILIIndustrialProductComboBoxDescFilter = new sap.ui.model.Filter("Desc", sap.ui.model.FilterOperator.NE, "");
							var oLILIIndustrialProductComboBoxPcodeFilter = new sap.ui.model.Filter("Pcode", sap.ui.model.FilterOperator.NE, "");
							this.oLILIIndustrialProductComboBox.getBinding("items").filter([oLILIIndustrialProductComboBoxDescFilter,oLILIIndustrialProductComboBoxPcodeFilter]);
							
							var that = this;
							this.oLILIIndustrialProductComboBox.attachBrowserEvent("mouseover", function() {
								that.oLILIIndustrialProductComboBox.setValueState("None");
							});
							this.oLILIProductQuantityInputText.attachBrowserEvent("mouseover", function() {
								that.oLILIProductQuantityInputText.setValueState("None");
							});
							this.oLILIIndustrialProductUOMComboBox.attachBrowserEvent("mouseover", function() {
								that.oLILIIndustrialProductUOMComboBox.setValueState("None");
							});
							this.oLILIOtherProductTypeTextArea.attachBrowserEvent("mouseover", function() {
								that.oLILIOtherProductTypeTextArea.setValueState("None");
							});
							
							this.setProductsTableData();
							
						
							
						}else{
							this.oProductsTableVBox.setVisible(false);
						}
						
						if(that.oSurveyID === "22"){
							that.oLILILicenseActivityMultiComboBox.setModel(null);
		
							if(!this.oShowAlertDialog.isOpen())
							{
								var oLanguage;
								if(this.oLanguageSelect.getSelectedKey() === "EN")
								{
									oLanguage="E";
								}else{
									oLanguage="A";
								}
								
								var message = [];
								message = oResponse.LILILicenseActivityType[0].Activity.split("~");
				    			
				    			if(oLanguage === "E"){
				    				message = message[0];
				    			}else{
				    				message = message[1];
				    			}
							this.oAlertTextView.setText(this.oModelHelper.getText("NotHandledBySAGIA")+" "+message);//oResponse.LILILicenseActivityType[0].Activity);
							this.oShowAlertDialog.open();
							
							}
						}else if(oResponse.LILILicenseActivityType[0].Activity !== "0")
						{
							var oLanguage;
							if(that.oLanguageSelect.getSelectedKey() === "EN")
							{
								oLanguage="E";
							}else{
								oLanguage="A";
							}
							
							var message = [];
							messageString = oResponse.LILILicenseActivityType[0].Activity.split(" ");
							message.push(messageString.shift());    
							message.push(messageString.join(' ')); 
							
							if(oLanguage === "E"){
								message = message[0];
							}else{
								message = message[1];
							}
							
							that.oLicenseTypeInputText.setValue(oResponse.LILILicenseActivityType[0].Activity);
							//that.oLicenseTypeInputText.setValue(oResponse.LILILicenseActivityType[0].Activity);
						}else if(oResponse.LILILicenseActivityType[0].Activity === "0")
						{
							
							that.oLicenseTypeInputText.setValue("");
							
						}else{
							that.oLicenseTypeInputText.setValue("");
						}
						
	
					
					}else{
						//that.oLILILicenseActivityMultiComboBox.setModel(null);
	
						if(!this.oShowAlertDialog.isOpen())
						{
						this.oAlertTextView.setText(this.oModelHelper.getText("LicenseTypeUnavialable"));
						this.oShowAlertDialog.open();					
						}
					}
					that.closeBusyDialog();
	
					
					
				}, that));
			
		}, that));
		//},4000);
		
	},
	setProductsTableData : function(){
		try{
			this.openBusyDialog();
			var oRequestFinishedDeferredReadSavedIndustrialProducts = that.oModelHelper.readSavedIndustrialProducts(that.oRef_id);
			jQuery.when(oRequestFinishedDeferredReadSavedIndustrialProducts).then(jQuery.proxy(function(oResponse) {
				this.closeBusyDialog();
				try{
					this.oProductsTableVBox.setVisible(true);	
				
					this.oLILIProductsTable.setVisible(true);
					
					this.oLILIProductsdata.ProductsCollection.length = 0;
				
					for(var i = 0; i < oResponse.data.results.length; i++){
					this.oLILIProductsdata.ProductsCollection.push({
						"sno": oResponse.data.results[i].SNo, 
						"productcode":oResponse.data.results[i].PrdCode, 
						"product":oResponse.data.results[i].Descr, 
						"quantity": Number(oResponse.data.results[i].Qty).toString(), 
						"uom":oResponse.data.results[i].UomTxt});
					}
					that.oLILIProductsTableJSONData.setData(that.oLILIProductsdata);
					that.oLILIProductsTable.setModel(that.oLILIProductsTableJSONData);
					
					that.oLILIProductsTable.bindItems("/ProductsCollection", new sap.m.ColumnListItem({
				        cells : [ new sap.ui.commons.TextView({
				          text : "{productcode}"
				        }),new sap.ui.commons.TextView({
				          text : "{product}"
				        }),  new sap.ui.commons.TextView({
				          text : "{quantity}"
				        }),  new sap.ui.commons.TextView({
				          text : "{uom}"
				        })]
				      }));	
				}catch(error){
					that.closeBusyDialog();
				}			
	    		
			}, this));
		}catch(error){
			
		}
	},
	
	handleLILILicenseActivityMultiSelectionComboBoxChange : function(oEvent){
		//console.log(this.oLILILicenseActivityMultiComboBox.getSelectedItems() );
		
		
		
		var oDescription = "";
		for(var i=0; i < this.oLILILicenseActivityMultiComboBox.getSelectedItems().length; i++){
			//console.log(this.oLILILicenseActivityMultiComboBox.getSelectedItems()[i].getText());
			oDescription += this.oLILILicenseActivityMultiComboBox.getSelectedItems()[i].getText()+" , ";
		}
		
		var oTempLATextViewText = "";
	    for(var i = 0 ; i < this.oLILILicenseActivityMultiComboBox.getSelectedKeys().length; i++){
	    	if(i < 3){
	    	oTempLATextViewText += (i+1)+". "+this.oLILILicenseActivityMultiComboBox.getSelectedItems()[i].getText()+"\n";
	    	}
	    }
	    this.oLAMultiSelectionTextView.setText(oTempLATextViewText);
	    
		if(oDescription !== undefined){
			this.oLILIActivityDescriptionTextArea.setValue(oDescription);			
		}

	},
	handleSaveLinkPressSaveSelectedTab : function(){
		if(this._oBasicInfoContent.getVisible()){
			if(this.oBasicInfoTab.getSelectedIndex() === 0){
				
				if(!(/^[0-9.,]+$/.test( this.oBIOILaborSizeInputText.getValue() ))){
					 
					 this.oBIOILaborSizeInputText.setValueState("Error");
					 this.oBIOILaborSizeInputText.setShowValueStateMessage(false);

			  		 if(!this.oShowAlertDialog.isOpen())
					 {
						this.oAlertTextView.setText(this.oModelHelper.getText("BIOILaborSizeDigitOnly"));
						this.oShowAlertDialog.open();
					 }
						
			  	 }else if(!(/^[0-9.,]+$/.test( this.oBIOICapitalInputText.getValue() ))){			
					 
					 this.oBIOICapitalInputText.setValueState("Error");
					 this.oBIOICapitalInputText.setShowValueStateMessage(false);

			  		 if(!this.oShowAlertDialog.isOpen())
					 {
						this.oAlertTextView.setText(this.oModelHelper.getText("BIOICapitalDigitOnly"));
						this.oShowAlertDialog.open();
					 }
						
			  	 }else{
			  		if(this.oBIOIvalidateworker.validateDataBIOI(this)){
						this.oBIOIvalidateworker.saveData(this, true);
					}
			  	 }
				
				
				
			}
			if(this.oBasicInfoTab.getSelectedIndex() === 1){
				if(this.oBICIvalidateworker.validateDataBICI(this)){
					this.oBICIvalidateworker.saveData(this, true);
				}
				
			}
		}
		if(this._oLicenseInfoContent.getVisible()){
			if(this.oLicenseInfoTab.getSelectedIndex() === 0){
				this.oBAQvalidateworker.saveData(this, true);
			}
			if(this.oLicenseInfoTab.getSelectedIndex() === 1){
				if(this.oISICvalidateworker.validateISICPresence(this)){
					
					if(!this.oProductsTableVBox.getVisible()){
						this.oModelHelper.deleteSavedIndustrialProducts(this.oRef_id);
					}
					
				this.oISICvalidateworker.saveData(this, true);
				}
			}
		}
	},
	
	handleSaveLinkPressSave : function(){
		
		this.oOriginalBIOILaborSizeInputTextValue = this.oBIOILaborSizeInputText.getValue();
		this.oOriginalBIOILaborSizeInputTextValue = this.oOriginalBIOILaborSizeInputTextValue.match(/\d/g);
		this.oOriginalBIOILaborSizeInputTextValue = this.oOriginalBIOILaborSizeInputTextValue.join("");
		
	this.oSaveClicked = true;
	
	this.oValidationLILIStatus = false;
	
	that = this;
	
	if(this.oBIOIOrganizationName.getValue() === ""){			
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 this.oShowSubmitAlertDialog.close();
		 
		 this.oBIOIOrganizationName.setValueState("Error");
		 this.oBIOIOrganizationName.setShowValueStateMessage(false);
 
		if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIONameRequired"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(this.oBIOIOrganizationName.getValue().length > 40){		
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOIOrganizationName.setValueState("Error");
		 this.oBIOIOrganizationName.setShowValueStateMessage(false);
		 
			if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("BIOIOrganizationNameLength"));
				this.oShowAlertDialog.open();
			 }
				
	  }else if(this._oidRegionComboBox.getSelectedKey() === ""){	
		  this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this._oidRegionComboBox.setValueState("Error");
		 this._oidRegionComboBox.setShowValueStateMessage(false);
		 
			if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("BIOIRegion"));
				this.oShowAlertDialog.open();
			 }
				
	  }else if(this._oBICityComboBox.getSelectedKey() === ""){	
		  this.oShowSubmitAlertDialog.close();
			 this.oValidationLILIStatus = false;
			 this.handleBasicInfoButtonClick();
			 this.oBasicInfoTab.setSelectedIndex(0);
			 
			 this._oBICityComboBox.setValueState("Error");
			 this._oBICityComboBox.setShowValueStateMessage(false);
			 
				if(!this.oShowAlertDialog.isOpen())
				 {
					this.oAlertTextView.setText(this.oModelHelper.getText("BIOICityMandatory"));
					this.oShowAlertDialog.open();
				 }
					
	  }else if(this._oBIILegalStatusCombobox.getSelectedKey() === ""){	
		  this.oShowSubmitAlertDialog.close();
			 this.oValidationLILIStatus = false;
			 this.handleBasicInfoButtonClick();
			 this.oBasicInfoTab.setSelectedIndex(0);
			 
			 this._oBIILegalStatusCombobox.setValueState("Error");
			 this._oBIILegalStatusCombobox.setShowValueStateMessage(false);
			 
				if(!this.oShowAlertDialog.isOpen())
				 {
					this.oAlertTextView.setText(this.oModelHelper.getText("BIOILegalStatus"));
					this.oShowAlertDialog.open();
				 }
					
	  }else if(this.oBIOIMultiNationalCompanyCombobox.getSelectedKey() === ""){	
		  this.oShowSubmitAlertDialog.close();
			 this.oValidationLILIStatus = false;
			 this.handleBasicInfoButtonClick();
			 this.oBasicInfoTab.setSelectedIndex(0);
			 
			 this.oBIOIMultiNationalCompanyCombobox.setValueState("Error");
			 this.oBIOIMultiNationalCompanyCombobox.setShowValueStateMessage(false);
			 
				if(!this.oShowAlertDialog.isOpen())
				 {
					this.oAlertTextView.setText(this.oModelHelper.getText("BIOIMNC"));
					this.oShowAlertDialog.open();
				 }
					
	  }else if(this.oBIOIEmailInputText.getValue() === ""){			
		  this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOIEmailInputText.setValueState("Error");
		 this.oBIOIEmailInputText.setShowValueStateMessage(false);

  		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOIEmailRequired"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(this.oBIOILaborSizeInputText.getValue() === ""){		
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOILaborSizeInputText.setValueState("Error");
		 this.oBIOILaborSizeInputText.setShowValueStateMessage(false);

  		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("LaborSize"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(!(/^[0-9.,]+$/.test( this.oBIOILaborSizeInputText.getValue() ))){	
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOILaborSizeInputText.setValueState("Error");
		 this.oBIOILaborSizeInputText.setShowValueStateMessage(false);

  		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOILaborSizeDigitOnly"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(this.oOriginalBIOILaborSizeInputTextValue.length > 20){
  		this.oShowSubmitAlertDialog.close();
  		this.oValidationLILIStatus = false;
  		this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
  		
  		 this.oBIOILaborSizeInputText.setValueState("Error");
		 this.oBIOILaborSizeInputText.setShowValueStateMessage(false);

 		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOILaborSize"));
			this.oShowAlertDialog.open();
		 }
  	 }else if(this.oOriginalBIOICapitalInputTextValue.length > 20){
  		this.oShowSubmitAlertDialog.close();
  		this.oValidationLILIStatus = false;
  		this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
  		
  		 this.oBIOICapitalInputText.setValueState("Error");
		 this.oBIOICapitalInputText.setShowValueStateMessage(false);

 		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOICapitalLength"));
			this.oShowAlertDialog.open();
		 }
  	 }
  	 else if(this.oBIOICapitalInputText.getValue() === ""){	
  		this.oShowSubmitAlertDialog.close();
  		   	 
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOICapitalInputText.setValueState("Error");
		 this.oBIOICapitalInputText.setShowValueStateMessage(false);

  		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOICapitalRequired"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(!(/^[0-9.,]+$/.test( this.oBIOICapitalInputText.getValue() ))){	
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOICapitalInputText.setValueState("Error");
		 this.oBIOICapitalInputText.setShowValueStateMessage(false);

  		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOICapitalDigitOnly"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(this.oBIOITelephoneCountryCodeInputText.getValue() === ""){	
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);

  		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOITelephoneCountryCodeRequired"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(!(this.oBIOITelephoneCountryCodeInputText.getValue().length <= 5 && this.oBIOITelephoneCountryCodeInputText.getValue().length >= 2)){			
  		this.oShowSubmitAlertDialog.close();
  		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);

  		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOITelephoneCountryCodeLength"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(this.oBIOITelephoneInputText.getValue() === ""){		
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOITelephoneInputText.setValueState("Error");
		 this.oBIOITelephoneInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOITelephoneNoRequired"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(!(this.oBIOITelephoneInputText.getValue().length <= 40 && this.oBIOITelephoneInputText.getValue().length >= 5)){			
  		this.oShowSubmitAlertDialog.close();
  		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOITelephoneInputText.setValueState("Error");
		 this.oBIOITelephoneInputText.setShowValueStateMessage(false);

  		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOITelephoneNoLengthMsg"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(!(/^\d*$/.test( this.oBIOITelephoneInputText.getValue() ))){	
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOITelephoneInputText.setValueState("Error");
		 this.oBIOITelephoneInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOITelephoneNoNumeric"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(this.oBIOIFaxCountryCodeInputText.getValue() === ""){		
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);

  		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOIFaxCountryCodeRequired"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(!(this.oBIOIFaxCountryCodeInputText.getValue().length <= 5 && this.oBIOIFaxCountryCodeInputText.getValue().length >= 2)){			
  		this.oShowSubmitAlertDialog.close();
  		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);

  		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOIFaxCCNoLength"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(this.oBIOIFaxInputText.getValue() === ""){
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOIFaxInputText.setValueState("Error");
		 this.oBIOIFaxInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOIFaxNoRequired"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(!(this.oBIOIFaxInputText.getValue().length <= 40 && this.oBIOIFaxInputText.getValue().length >= 5)){			
  		this.oShowSubmitAlertDialog.close();
  		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOIFaxInputText.setValueState("Error");
		 this.oBIOIFaxInputText.setShowValueStateMessage(false);

  		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOIFaxNoLengthMsg"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(!(/^\d*$/.test( this.oBIOIFaxInputText.getValue() ))){
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOIFaxInputText.setValueState("Error");
		 this.oBIOIFaxInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOIFaxNoNumeric"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(this.oBIOIMobilephoneCountryCodeInputText.getValue() === ""){		
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOIMobileCountryCodeRequired"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(!(this.oBIOIMobilephoneCountryCodeInputText.getValue().length <= 5 && this.oBIOIMobilephoneCountryCodeInputText.getValue().length >= 2)){			
  		this.oShowSubmitAlertDialog.close();
  		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);

  		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOIMobileCountryCodeLength"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(this.oBIOIMobilephoneInputText.getValue() === ""){	
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOIMobilephoneInputText.setValueState("Error");
		 this.oBIOIMobilephoneInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOIMobileNoRequired"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(!(this.oBIOIMobilephoneInputText.getValue().length <= 40 && this.oBIOIMobilephoneInputText.getValue().length >= 5)){
  		this.oShowSubmitAlertDialog.close();
  		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOIMobilephoneInputText.setValueState("Error");
		 this.oBIOIMobilephoneInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOIMobileNoLengthMsg"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(!(/^\d*$/.test( this.oBIOIMobilephoneInputText.getValue() ))){
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOIMobilephoneInputText.setValueState("Error");
		 this.oBIOIMobilephoneInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOIMobileNoNumeric"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(this.oBIOIWebSiteInputText.getValue() === ""){	
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOIWebSiteInputText.setValueState("Error");
		 this.oBIOIWebSiteInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOIWebSiteRequired"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(this.oBIOIWebSiteInputText.getValue().length > 132){	
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOIWebSiteInputText.setValueState("Error");
		 this.oBIOIWebSiteInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOIWebsiteLength"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(!(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/.test( this.oBIOIEmailInputText.getValue() ))){
  		this.oShowSubmitAlertDialog.close();
  		 this.oValidationLILIStatus = false;
		
		this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		
		this.oBIOIEmailInputText.setValueState("Error");
		this.oBIOIEmailInputText.setShowValueStateMessage(false);

		if(!this.oShowAlertDialog.isOpen())
		{
		this.oAlertTextView.setText(this.oModelHelper.getText("BIOIInvalidEmail"));
		this.oShowAlertDialog.open();
		
		}
	}else if(this.oBIOIEmailInputText.getValue().length > 241){
		this.oShowSubmitAlertDialog.close();
		this.oValidationLILIStatus = false;
		
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		
		this.oBIOIEmailInputText.setValueState("Error");
		this.oBIOIEmailInputText.setShowValueStateMessage(false);

		if(!this.oShowAlertDialog.isOpen())
		{
		this.oAlertTextView.setText(this.oModelHelper.getText("BIOIEmailLength"));
		this.oShowAlertDialog.open();
		
		}
	}else if(!(/^(http:\/\/www\.|https:\/\/www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test( "http://"+this.oBIOIWebSiteInputText.getValue() ))){
		this.oShowSubmitAlertDialog.close(); 
		this.oValidationLILIStatus = false;
		 
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOIWebSiteInputText.setValueState("Error");
		 this.oBIOIWebSiteInputText.setShowValueStateMessage(false);

		if(!this.oShowAlertDialog.isOpen())
		{
		this.oAlertTextView.setText(this.oModelHelper.getText("BIOIInvalidWebsite"));
		this.oShowAlertDialog.open();
		
		}
	 }
	 else if(this.oBIOICommMethodComboBox.getSelectedKey() === ""){		
		 this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(0);
		 
		 this.oBIOICommMethodComboBox.setValueState("Error");
		 this.oBIOICommMethodComboBox.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BIOICommMethod"));
			this.oShowAlertDialog.open();
		 }
			
	 }
	 else if (this.oBICIPOBoxInputText.getValue() === "") {
			this.oValidationLILIStatus = false;

			this.oBICIPOBoxInputText.setValueState("Error");
			this.oBICIPOBoxInputText.setShowValueStateMessage(false);

			if (!this.oShowAlertDialog.isOpen()) {
				this.oAlertTextView.setText(this.oModelHelper
						.getText("BICIPOBoxReq"));
				this.oShowAlertDialog.open();
			}
	} else if (this.oBICIPostalCodeInputText.getValue() === "") {
			this.oValidationLILIStatus = false;

			this.oBICIPostalCodeInputText.setValueState("Error");
			this.oBICIPostalCodeInputText.setShowValueStateMessage(false);

			if (!this.oShowAlertDialog.isOpen()) {
				this.oAlertTextView.setText(this.oModelHelper
						.getText("BICIPostalCodeReq"));
				this.oShowAlertDialog.open();
			}
		}
	else if(this.oBICIRoleInputText.getSelectedKey() === ""){		
		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIRoleInputText.setValueState("Error");
		 this.oBICIRoleInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICIRole"));
			this.oShowAlertDialog.open();
		 }
			
	 }
	else if(this.oBICICommMethodComboBox.getSelectedKey() === ""){	
		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICICommMethodComboBox.setValueState("Error");
		 this.oBICICommMethodComboBox.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICICommunicationMethod"));
			this.oShowAlertDialog.open();
		 }
			
	 }
	else if(this._oBICICountryCombobox.getSelectedKey() === ""){	
		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this._oBICICountryCombobox.setValueState("Error");
		 this._oBICICountryCombobox.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICICountry"));
			this.oShowAlertDialog.open();
		 }
			
	 }
	else if(this.oBICIGenderComboBox.getSelectedKey() === ""){		
		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIGenderComboBox.setValueState("Error");
		 this.oBICIGenderComboBox.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICIGender"));
			this.oShowAlertDialog.open();
		 }
			
 	 }
	else if(this._oBICINationalityCombobox.getSelectedKey() === ""){
		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this._oBICINationalityCombobox.setValueState("Error");
		 this._oBICINationalityCombobox.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICINationality"));
			this.oShowAlertDialog.open();
		 }
			
  	 }
	else if(this.oBICIEmailInputText.getValue() === ""){		
		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIEmailInputText.setValueState("Error");
		 this.oBICIEmailInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICIEmailRequired"));
			this.oShowAlertDialog.open();
		 }
			
   	 }else if(!(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/.test( this.oBICIEmailInputText.getValue() ))){
   		this.oShowSubmitAlertDialog.close();
		this.oValidationLILIStatus = false;
		
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIEmailInputText.setValueState("Error");
		 this.oBICIEmailInputText.setShowValueStateMessage(false);

		if(!this.oShowAlertDialog.isOpen())
		{
		this.oAlertTextView.setText(this.oModelHelper.getText("BICIInvalidEmail"));
		this.oShowAlertDialog.open();
		
		}
	}else if(this.oBICITelephoneCountryCodeInputText.getValue() === ""){
		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICITelephoneCountryCodeInputText.setValueState("Error");
		 this.oBICITelephoneCountryCodeInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICITelephoneCountryCodeRequired"));
			this.oShowAlertDialog.open();
		 }
			
   	 }else if(!(this.oBICITelephoneCountryCodeInputText.getValue().length <= 5 && this.oBICITelephoneCountryCodeInputText.getValue().length >= 2)){			
   		this.oShowSubmitAlertDialog.close();
   		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICITelephoneCountryCodeInputText.setValueState("Error");
		 this.oBICITelephoneCountryCodeInputText.setShowValueStateMessage(false);

  		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICITelephoneCountryCodeLength"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(!(/^\d*$/.test( this.oBICITelephoneCountryCodeInputText.getValue() ))){
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICITelephoneCountryCodeInputText.setValueState("Error");
		 this.oBICITelephoneCountryCodeInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICITelephoneCountryCodeDigitsOnly"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(this.oBICITelephoneInputText.getValue() === ""){		
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICITelephoneInputText.setValueState("Error");
		 this.oBICITelephoneInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICITelephoneNoRequired"));
			this.oShowAlertDialog.open();
		 }
			
   	 }else if(!(this.oBICITelephoneInputText.getValue().length <= 30 && this.oBICITelephoneInputText.getValue().length >= 5)){
   		this.oShowSubmitAlertDialog.close();
   		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICITelephoneInputText.setValueState("Error");
		 this.oBICITelephoneInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICITelephoneNoLength"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(!(/^\d*$/.test( this.oBICITelephoneInputText.getValue() ))){
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICITelephoneInputText.setValueState("Error");
		 this.oBICITelephoneInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICITelephoneNoNumeric"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(this.oBICIFaxCountryCodeInputText.getValue() === ""){	
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIFaxCountryCodeInputText.setValueState("Error");
		 this.oBICIFaxCountryCodeInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICIFaxCountryCodeRequired"));
			this.oShowAlertDialog.open();
		 }
			
   	 }else if(!(this.oBICIFaxCountryCodeInputText.getValue().length <= 5 && this.oBICIFaxCountryCodeInputText.getValue().length >= 2)){			
   		this.oShowSubmitAlertDialog.close();
   		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIFaxCountryCodeInputText.setValueState("Error");
		 this.oBICIFaxCountryCodeInputText.setShowValueStateMessage(false);

  		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICIFaxCCNoLength"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(!(/^\d*$/.test( this.oBICIFaxCountryCodeInputText.getValue() ))){	
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIFaxCountryCodeInputText.setValueState("Error");
		 this.oBICIFaxCountryCodeInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICIFaxCCNoNumeric"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(this.oBICIFaxInputText.getValue() === ""){		
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIFaxInputText.setValueState("Error");
		 this.oBICIFaxInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICIFaxNoRequired"));
			this.oShowAlertDialog.open();
		 }
			
   	 }else if(!(this.oBICIFaxInputText.getValue().length <= 20 && this.oBICIFaxInputText.getValue().length >= 5)){
   		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIFaxInputText.setValueState("Error");
		 this.oBICIFaxInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICIFaxNoLength"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(!(/^\d*$/.test( this.oBICIFaxInputText.getValue() ))){
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIFaxInputText.setValueState("Error");
		 this.oBICIFaxInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICIFaxNoNumeric"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(this.oBICIMobileCountryCodeInputText.getValue() === ""){	
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIMobileCountryCodeInputText.setValueState("Error");
		 this.oBICIMobileCountryCodeInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICIMobileCountryCodeRequired"));
			this.oShowAlertDialog.open();
		 }
			
   	 }else if(!(this.oBICIMobileCountryCodeInputText.getValue().length <= 5 && this.oBICIMobileCountryCodeInputText.getValue().length >= 2)){			
   		this.oShowSubmitAlertDialog.close();
   		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIMobileCountryCodeInputText.setValueState("Error");
		 this.oBICIMobileCountryCodeInputText.setShowValueStateMessage(false);

  		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICIMobileCountryCodeLength"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(!(/^\d*$/.test( this.oBICIMobileCountryCodeInputText.getValue() ))){	
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIMobileCountryCodeInputText.setValueState("Error");
		 this.oBICIMobileCountryCodeInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICIMobileCountryCodeDigitsOnly"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(this.oBICIMobilePhoneInputText.getValue() === ""){
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIMobilePhoneInputText.setValueState("Error");
		 this.oBICIMobilePhoneInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICIMobileNoRequired"));
			this.oShowAlertDialog.open();
		 }
			
   	 }else if(!(this.oBICIMobilePhoneInputText.getValue().length <= 30 && this.oBICIMobilePhoneInputText.getValue().length >= 5)){
   		this.oShowSubmitAlertDialog.close();
   		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIMobilePhoneInputText.setValueState("Error");
		 this.oBICIMobilePhoneInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICIMobileNoLength"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(!(/^\d*$/.test( this.oBICIMobilePhoneInputText.getValue() ))){
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIMobilePhoneInputText.setValueState("Error");
		 this.oBICIMobilePhoneInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICIMobileNoNumeric"));
			this.oShowAlertDialog.open();
		 }
			
  	 }else if(this.oBICICityInputText.getValue() === ""){	
  		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICICityInputText.setValueState("Error");
		 this.oBICICityInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICICityRequired"));
			this.oShowAlertDialog.open();
		 }
			
   	 }else if(this.oBICIFirstNameInputText.getValue() === ""){	
   		this.oShowSubmitAlertDialog.close();
		 this.oValidationLILIStatus = false;
		 this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIFirstNameInputText.setValueState("Error");
		 this.oBICIFirstNameInputText.setShowValueStateMessage(false);
		 
		 /*this.oBICILastNameInputText.setValueState("Error");
		 this.oBICILastNameInputText.setShowValueStateMessage(false);*/

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("CIFNameMand"));
			this.oShowAlertDialog.open();
		 }
			
   	 }else if(this.oBICILastNameInputText.getValue() === ""){	
    		this.oShowSubmitAlertDialog.close();
   		 this.oValidationLILIStatus = false;
   		 this.handleBasicInfoButtonClick();
   		 this.oBasicInfoTab.setSelectedIndex(1);
   		 
   		/* this.oBICIFirstNameInputText.setValueState("Error");
   		 this.oBICIFirstNameInputText.setShowValueStateMessage(false);*/
   		 
   		 this.oBICILastNameInputText.setValueState("Error");
   		 this.oBICILastNameInputText.setShowValueStateMessage(false);

   		 if(!this.oShowAlertDialog.isOpen())
   		 {
   			this.oAlertTextView.setText(this.oModelHelper.getText("CILNameMand"));
   			this.oShowAlertDialog.open();
   		 }
   			
      	 }else if(!(/^[a-zA-Z ]*$/.test( this.oBICIFirstNameInputText.getValue() ))){
   		this.oShowSubmitAlertDialog.close();
   		this.oValidationLILIStatus = false;
   		this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIFirstNameInputText.setValueState("Error");
		 this.oBICIFirstNameInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICIFirstNameValidation"));
			this.oShowAlertDialog.open();
		 }
   	 }else if(!(/^[a-zA-Z ]*$/.test( this.oBICILastNameInputText.getValue() ))){
   		this.oShowSubmitAlertDialog.close();
   		this.oValidationLILIStatus = false;
   		this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICILastNameInputText.setValueState("Error");
		 this.oBICILastNameInputText.setShowValueStateMessage(false);

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICILastNameValidation"));
			this.oShowAlertDialog.open();
		 }
   	 }else if(this.oBICIFirstNameInputText.getValue().length > 40){
   		this.oShowSubmitAlertDialog.close();
 		this.oValidationLILIStatus = false;
 		this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIFirstNameInputText.setValueState("Error");
		 this.oBICIFirstNameInputText.setShowValueStateMessage(false);

  		 if(!this.oShowAlertDialog.isOpen())
  		 {
  			this.oAlertTextView.setText(this.oModelHelper.getText("BICIFirstName"));
  			this.oShowAlertDialog.open();
  		 }
    }else if(this.oBICILastNameInputText.getValue().length > 40){
    	this.oShowSubmitAlertDialog.close();
    		this.oValidationLILIStatus = false;
    		this.handleBasicInfoButtonClick();
   		 this.oBasicInfoTab.setSelectedIndex(1);
   		 
   		 this.oBICILastNameInputText.setValueState("Error");
   		 this.oBICILastNameInputText.setShowValueStateMessage(false);

   		 if(!this.oShowAlertDialog.isOpen())
   		 {
   			this.oAlertTextView.setText(this.oModelHelper.getText("BICILAstName"));
   			this.oShowAlertDialog.open();
   		 }
     }else if(!(/^[a-zA-Z ]*$/.test( this.oBICICityInputText.getValue() ))){
    	 this.oShowSubmitAlertDialog.close();
    		this.oValidationLILIStatus = false;
    		this.handleBasicInfoButtonClick();
   		 this.oBasicInfoTab.setSelectedIndex(1);
   		 
   		 this.oBICICityInputText.setValueState("Error");
   		 this.oBICICityInputText.setShowValueStateMessage(false);

   		 if(!this.oShowAlertDialog.isOpen())
   		 {
   			this.oAlertTextView.setText(this.oModelHelper.getText("BICICityValidation"));
   			this.oShowAlertDialog.open();
   		 }
      }else if(this.oBICICityInputText.getValue().length > 40){
    	  this.oShowSubmitAlertDialog.close();
  		this.oValidationLILIStatus = false;
  		this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICICityInputText.setValueState("Error");
		 this.oBICICityInputText.setShowValueStateMessage(false);

  		 if(!this.oShowAlertDialog.isOpen())
  		 {
  			this.oAlertTextView.setText(this.oModelHelper.getText("BICICity"));
  			this.oShowAlertDialog.open();
  		 }
      }else if(this.oBICIPOBoxInputText.getValue().length > 10){
    	  this.oShowSubmitAlertDialog.close();
    		this.oValidationLILIStatus = false;
    		this.handleBasicInfoButtonClick();
   		 this.oBasicInfoTab.setSelectedIndex(1);
   		 
   		 this.oBICIPOBoxInputText.setValueState("Error");
   		 this.oBICIPOBoxInputText.setShowValueStateMessage(false);

     		 if(!this.oShowAlertDialog.isOpen())
     		 {
     			this.oAlertTextView.setText(this.oModelHelper.getText("BICIPOBox"));
     			this.oShowAlertDialog.open();
     		 }
	   }else if(this.oBICIPostalCodeInputText.getValue().length > 10){
		   this.oShowSubmitAlertDialog.close();
		this.oValidationLILIStatus = false;
		this.handleBasicInfoButtonClick();
		 this.oBasicInfoTab.setSelectedIndex(1);
		 
		 this.oBICIPostalCodeInputText.setValueState("Error");
		 this.oBICIPostalCodeInputText.setShowValueStateMessage(false);
	
		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICIPostalCode"));
			this.oShowAlertDialog.open();
		 }
	   }else if(this.oBICIStreet.getValue().length > 60){
		   this.oShowSubmitAlertDialog.close();
	  		this.oValidationLILIStatus = false;
	  		this.handleBasicInfoButtonClick();
			 this.oBasicInfoTab.setSelectedIndex(1);
			 
			 this.oBICIStreet.setValueState("Error");
			 this.oBICIStreet.setShowValueStateMessage(false);
	
		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("BICIStreetLength"));
			this.oShowAlertDialog.open();
		 }
	   }/*else if(this.oLILIBusinessTypeComboBox.getSelectedKey() === ""){
	  		this.oValidationLILIStatus = false;
	  		this.handleBasicInfoButtonClick();
			 this.oBasicInfoTab.setSelectedIndex(1);
			 
			 this.oLILIBusinessTypeComboBox.setValueState("Error");
			 this.oLILIBusinessTypeComboBox.setShowValueStateMessage(false);
	  		
			 if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("BusinessTypeRequired"));
				this.oShowAlertDialog.open();
			 }
			 
				
	   }*/else if(this.getView().byId("idBICIPowerofAttorneyFileUploader").getValue().length > 90){
		   this.oShowSubmitAlertDialog.close();
	  		this.oValidationLILIStatus = false;
	  		this.handleBasicInfoButtonClick();
			 this.oBasicInfoTab.setSelectedIndex(1);
			 
			 this.getView().byId("idBICIPowerofAttorneyFileUploader").setValueState("Error");
			 this.getView().byId("idBICIPowerofAttorneyFileUploader").setShowValueStateMessage(false);
	  		
			 if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("BasicInfoPOAFileNameExceed"));
				this.oShowAlertDialog.open();
			 }
	   }else if(this.getView().byId("idBICIPassportCopyFileUploader").getValue().length > 90){
		   this.oShowSubmitAlertDialog.close();
	  		this.oValidationLILIStatus = false;
	  		this.handleBasicInfoButtonClick();
			 this.oBasicInfoTab.setSelectedIndex(1);
			 
			 this.getView().byId("idBICIPassportCopyFileUploader").setValueState("Error");
			 this.getView().byId("idBICIPassportCopyFileUploader").setShowValueStateMessage(false);
	  		
			 if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("BasicInfoPassportFileNameExceed"));
				this.oShowAlertDialog.open();
			 }
	   }else  if(this.oLILIBusinessTypeComboBox.getSelectedKey() === ""){
		   this.oShowSubmitAlertDialog.close();
	  		this.oValidationLILIStatus = false;
	  		this.handleLicenseButtonClick();
			this.oLicenseInfoTab.setSelectedIndex(1);
			 
			 this.oLILIBusinessTypeComboBox.setValueState("Error");
			 this.oLILIBusinessTypeComboBox.setShowValueStateMessage(false);
	  		
			 if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("LILIBizTypeRequired"));
				this.oShowAlertDialog.open();
			 }
	   }else if(!this.oValidationHelper.checkIfAllBAQAreAnswered(this)){
		   this.oShowSubmitAlertDialog.close();
		   this.handleLicenseButtonClick();
			this.oLicenseInfoTab.setSelectedIndex(0);
		   
		   /*for(var i=0; i < this.oTotalBAQQuestions; i++){
				
				 var oBAQAnswer = sap.ui.getCore().byId("idBAQAnswer"+i);
				     oBAQAnswer.attachChange(function(){
					 oBAQAnswer.setValueState("None");
					 oBAQAnswer.setShowValueStateMessage(false);
					});
			}*/
		     
		   if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("AllBAQareMandatory"));
				this.oShowAlertDialog.open();
			 }
	   }else if(this.oLILIBusinessTypeComboBox.getSelectedKey() === "N"){
		   this.oShowSubmitAlertDialog.close();
			
	   if(this.oLicenseTypeInputText.getValue() === ""){
		   this.oShowSubmitAlertDialog.close();
   		this.oValidationLILIStatus = false;
   		
   		this.handleLicenseButtonClick();
		this.oLicenseInfoTab.setSelectedIndex(1);
 		 
		//othis.oLicenseTypeInputText.setValueState("Error");
		//othis.oLicenseTypeInputText.setShowValueStateMessage(false);
  		
		 if(!this.oShowAlertDialog.isOpen())
		 {
			 this.oAlertTextView.setText(this.oModelHelper.getText("LicenseTypeIsMand"));
			 this.oShowAlertDialog.open();
		 }
	   }if(this.oLILISectionComboBox.getSelectedKey() === ""){
			     this.oValidationLILIStatus = false;
			     this.handleLicenseButtonClick();
					this.oLicenseInfoTab.setSelectedIndex(1);
				 
				 this.oLILISectionComboBox.setValueState("Error");
				 this.oLILISectionComboBox.setShowValueStateMessage(false);
				
				 if(!this.oShowAlertDialog.isOpen())
				 {
					this.oAlertTextView.setText(this.oModelHelper.getText("AllLIFieldsMandatory"));
					this.oShowAlertDialog.open();
				 }
		   }else if(this.oLILIDivisionComboBox.getSelectedKey() === ""){
			   this.oShowSubmitAlertDialog.close();
			    this.oValidationLILIStatus = false;
			    this.handleLicenseButtonClick();
				this.oLicenseInfoTab.setSelectedIndex(1);
				 
				 this.oLILIDivisionComboBox.setValueState("Error");
				 this.oLILIDivisionComboBox.setShowValueStateMessage(false);
				
				 if(!this.oShowAlertDialog.isOpen())
				 {
					this.oAlertTextView.setText(this.oModelHelper.getText("AllLIFieldsMandatory"));
					this.oShowAlertDialog.open();
				 }
		   }else if(this.oLILIGroupComboBox.getSelectedKeys().filter(Boolean).length === 0){
			   this.oShowSubmitAlertDialog.close();
			    this.oValidationLILIStatus = false;
			    this.handleLicenseButtonClick();
				this.oLicenseInfoTab.setSelectedIndex(1);
				 
				 this.oLILIGroupComboBox.setValueState("Error");
				 this.oLILIGroupComboBox.setShowValueStateMessage(false);
				
				 if(!this.oShowAlertDialog.isOpen())
				 {
					this.oAlertTextView.setText(this.oModelHelper.getText("AllLIFieldsMandatory"));
					this.oShowAlertDialog.open();
				 }
		   }else if(this.oLILIClassMultiComboBox.getSelectedKeys().filter(Boolean).length === 0){
			   this.oShowSubmitAlertDialog.close();
			    this.oValidationLILIStatus = false;
			    this.handleLicenseButtonClick();
				this.oLicenseInfoTab.setSelectedIndex(1);
				 
				 this.oLILIClassMultiComboBox.setValueState("Error");
				 this.oLILIClassMultiComboBox.setShowValueStateMessage(false);
				
				 if(!this.oShowAlertDialog.isOpen())
				 {
					this.oAlertTextView.setText(this.oModelHelper.getText("AllLIFieldsMandatory"));
					this.oShowAlertDialog.open();
				 }
		   }else if(this.oLILILicenseActivityMultiComboBox.getSelectedKeys().filter(Boolean).length === 0){
			   this.oShowSubmitAlertDialog.close();
			    this.oValidationLILIStatus = false;
			    this.handleLicenseButtonClick();
				this.oLicenseInfoTab.setSelectedIndex(1);
				 
				 this.oLILILicenseActivityMultiComboBox.setValueState("Error");
				 this.oLILILicenseActivityMultiComboBox.setShowValueStateMessage(false);
				
				 if(!this.oShowAlertDialog.isOpen())
				 {
					this.oAlertTextView.setText(this.oModelHelper.getText("AllLIFieldsMandatory"));
					this.oShowAlertDialog.open();
				 }
		   }else{
				 this.doThis();
			     this.oValidationLILIStatus = true;	
			     sap.m.MessageToast.show(that.oModelHelper.getText("SavingAll"), {duration : 18000});
			 }
	   }else if(this.oLILIBusinessTypeComboBox.getSelectedKey() === "T"){
		   /*if(this.oTempLicenseType.getValue() === ""){
			   this.oValidationLILIStatus = false;
			    	 
			   this.oTempLicenseType.setValueState("Error");
			   this.oTempLicenseType.setShowValueStateMessage(false);
				
				 if(!this.oShowAlertDialog.isOpen())
				 {
					 this.oAlertTextView.setText(this.oModelHelper.getText("TempLicenseTypeMand"));
					 this.oShowAlertDialog.open();
				 }
		   }else*/ if(this.oTempBusinessType.getSelectedKey() === ""){
			   this.oValidationLILIStatus = false;
			    	 
			   this.oTempBusinessType.setValueState("Error");
			   this.oTempBusinessType.setShowValueStateMessage(false);
				
				 if(!this.oShowAlertDialog.isOpen())
				 {
					 this.oAlertTextView.setText(this.oModelHelper.getText("TempBizTypepeMand"));
					 this.oShowAlertDialog.open();
				 }
		   }else if(this.oTempActivityDescription.getValue() === ""){
			   this.oValidationLILIStatus = false;
			    	 
			   this.oTempActivityDescription.setValueState("Error");
			   this.oTempActivityDescription.setShowValueStateMessage(false);
				
				 if(!this.oShowAlertDialog.isOpen())
				 {
					 this.oAlertTextView.setText(this.oModelHelper.getText("TempActivityDesceMand"));
					 this.oShowAlertDialog.open();
				 }
		   }else if(!(/^[a-zA-Z0-9 ]*$/.test( this.oTempActivityDescription.getValue() ))){
		   		this.oValidationLILIStatus = false;
		   		
				 
				 
				 this.oTempActivityDescription.setValueState("Error");
				 this.oTempActivityDescription.setShowValueStateMessage(false);

				 if(!this.oShowAlertDialog.isOpen())
				 {
					this.oAlertTextView.setText(this.oModelHelper.getText("TempActivtyDescInvalidData"));
					this.oShowAlertDialog.open();
				 }
		   	 }else if(this.oTempActivityDescription.getValue().length > 300 === ""){
			   		this.oValidationLILIStatus = false;
			   		
					 
					 this.oTempActivityDescription.setValueState("Error");
					 this.oTempActivityDescription.setShowValueStateMessage(false);

					 if(!this.oShowAlertDialog.isOpen())
					 {
						this.oAlertTextView.setText(this.oModelHelper.getText("TempActivtyDescExceed"));
						this.oShowAlertDialog.open();
					 }
			   }else{
				 this.doThis();
			     this.oValidationLILIStatus = true;	
			     sap.m.MessageToast.show(that.oModelHelper.getText("SavingAll"), {duration : 18000});
			 }
	   }
	
	/*else if(sap.ui.getCore().byId("idBICIPowerofAttorneyFileUploader").getValue().length > 255){
	  		this.oValidationLILIStatus = false;
	  		
			 if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("BICIPOALength"));
				this.oShowAlertDialog.open();
			 }
	   }else if(sap.ui.getCore().byId("idBICIPassportCopyFileUploader").getValue().length > 255){
	  		this.oValidationLILIStatus = false;
	  		
			 if(!this.oShowAlertDialog.isOpen())
			 {
				this.oAlertTextView.setText(this.oModelHelper.getText("BICIPASSLength"));
				this.oShowAlertDialog.open();
			 }
	   }*/
	
	/*
	 			
     
     	this.oBICIPOBoxInputText.getValue(),
		this..getValue(),
		this..getValue(),
					
     
         else if(this.getView().byId("idBICIPowerofAttorneyFileUploader").getValue() === "" 
   		 && this.getView().byId("idBICIPassportCopyFileUploader").getValue() === ""
   	     && this.oBICIPASSAttachmentName.getText() === ""
   	     && this.oBICIPOAAttachmentName.getText() === ""){
		 this.oValidationLILIStatus = false;

 		if(!this.oShowAlertDialog.isOpen())
		{
		this.oAlertTextView.setText(this.oModelHelper.getText("AtleastOneAttachmentNeededBICI"));
		this.oShowAlertDialog.open();
		
		}
	 }*/else{
		//this.saveContactInfoTab();
   	    //this.oValidationLILIStatus = true;
		 this.doThis();
	     this.oValidationLILIStatus = true;


  
	 }
   	 
   	 
   
		
	return 	this.oValidationLILIStatus;
},

    basicInfoFileAttachmentOperations : function(oOrgName){
    	var that = this;
		this.oBICIPowerofAttorneyFileUploader = this.getView().byId("idBICIPowerofAttorneyFileUploader");
		this.oBICIPassPortCopyFileUploader = this.getView().byId("idBICIPassportCopyFileUploader");
		
		var oRequestFinishedDeferredUploadPOA = this.oModelHelper.uploadPOA(this.oRef_id, this.oBICIPowerofAttorneyFileUploader, oOrgName);
		jQuery.when(oRequestFinishedDeferredUploadPOA).then(jQuery.proxy(function(oResponse) {					
			if(oResponse === "Uploaded"){
				var oRequestFinishedDeferredReadPOABICI = this.oModelHelper.readBICIPPOAAttachment(this.oRef_id);

				jQuery.when(oRequestFinishedDeferredReadPOABICI).then(jQuery.proxy(function(oResponse) {
					this.closeBusyDialog();

					if(oResponse.data.Return !== "No record Exists" && oResponse.data.FileName !== ""){	
						this.oBICIPOAAttachmentName.setVisible(true);
						this.oBICIPOAAttachmentNameTextView.setVisible(true);
						this.oBICIPOAAttachmentName.setText(oResponse.data.FileName);
						
						this.oPreviewBICIPOAAttachmentName.setVisible(true);
						this.oPreviewBICIPOAAttachmentName.setText(oResponse.data.FileName);
						
						}else{
							this.oBICIPOAAttachmentName.setVisible(false);
							this.oBICIPOAAttachmentNameTextView.setVisible(false);
							this.oPreviewBICIPOAAttachmentName.setVisible(false);

						}
				}, this));	
			}
		}, this));
		
		var oRequestFinishedDeferredUploadPassPortCopy = that.oModelHelper.uploadBICIPassPortCopy(this.oRef_id, this.oBICIPassPortCopyFileUploader, oOrgName);
		jQuery.when(oRequestFinishedDeferredUploadPassPortCopy).then(jQuery.proxy(function(oResponse) {
			if(oResponse === "Uploaded"){
				var oRequestFinishedDeferredReadPASSBICI = this.oModelHelper.readBICIPassPortAttachment(this.oRef_id);

				jQuery.when(oRequestFinishedDeferredReadPASSBICI).then(jQuery.proxy(function(oResponse) {
					this.closeBusyDialog();

					if(oResponse.data.Return !== "No record Exists" && oResponse.data.FileName !== ""){	
						this.oBICIPASSAttachmentName.setVisible(true);
						this.oBICIPASSAttachmentNameTextView.setVisible(true);
						this.oBICIPASSAttachmentName.setText(oResponse.data.FileName);
						
						this.oPreviewBICIPASSAttachmentName.setVisible(true);
						this.oPreviewBICIPASSAttachmentName.setText(oResponse.data.FileName);
					
						}else{
							this.oBICIPASSAttachmentName.setVisible(false);
							this.oBICIPASSAttachmentNameTextView.setVisible(false);
							this.oPreviewBICIPASSAttachmentName.setVisible(false);

						}
				}, this));	
			}
		}, that));
    },
	doThis : function(){
		try{
			
		}catch(error){
			this.closeBusyDialog();
		}

		
		this.openBusyDialog();
		
		this.oBIOICapitalInputTextValue = this.oBIOICapitalInputText.getValue();
		this.oBIOICapitalInputTextValue = this.oBIOICapitalInputTextValue.match(/\d/g);
		this.oBIOICapitalInputTextValue = this.oBIOICapitalInputTextValue.join("");
		
		this.oBIOILaborSizeInputTextValue = this.oBIOILaborSizeInputText.getValue();
		this.oBIOILaborSizeInputTextValue = this.oBIOILaborSizeInputTextValue.match(/\d/g);
		this.oBIOILaborSizeInputTextValue = this.oBIOILaborSizeInputTextValue.join("");
		
		var that = this;
	       
		if(this.oRecordExists){
			try{
				
		
				
			var oRequestFinishedDeferred = this.oModelHelper.saveBIOI(this.oRef_id, 
					this.oBIOIOrganizationName.getValue(),
					this._oidRegionComboBox.getSelectedKey(),
					this._oBIILegalStatusCombobox.getSelectedKey(),
					this._oBICityComboBox.getSelectedKey(),
					this.oBIOIMultiNationalCompanyCombobox.getSelectedKey(),
					this.oBIOIEmailInputText.getValue(),
					this.oBIOILaborSizeInputTextValue,
					//this.oBIOILaborSizeInputText.getValue(),
					this.oBIOICommMethodComboBox.getSelectedKey(),
					this.oBIOICapitalInputTextValue,
					//this.oBIOICapitalInputText.getValue(),
					this.oBIOITelephoneCountryCodeInputText.getValue(),
					this.oBIOITelephoneInputText.getValue(),
					this.oBIOIMobilephoneCountryCodeInputText.getValue(),
					this.oBIOIMobilephoneInputText.getValue(),
					this.oBIOIFaxCountryCodeInputText.getValue(),
					this.oBIOIFaxInputText.getValue(),
					"http://"+this.oBIOIWebSiteInputText.getValue(),
					this.oBIOITelephoneCountryCodeInputText.getValue(),
					this.oBIOIFaxCountryCodeInputText.getValue(),
					this.oBIOIMobilephoneCountryCodeInputText.getValue());

			jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function() {
				
				this.basicInfoFileAttachmentOperations(this.oBIOIOrganizationName.getValue());
				
		

				
				this.closeBusyDialog();
/*            	sap.m.MessageToast.show(that.oModelHelper.getText("OrgInfoSaved"), {duration : 1000});
*/
				
				this.saveContactInfoTab();
				
			}, this));	
			}
			catch(err){
				this.closeBusyDialog();

				console.log(err);
			}
			
		}else{
			try{
			var oRequestFinishedDeferred = this.oModelHelper.createAndUpdateBIOI(this.oRef_id, 
					this.oBIOIOrganizationName.getValue(),
					this._oidRegionComboBox.getSelectedKey(),
					this._oBIILegalStatusCombobox.getSelectedKey(),
					this._oBICityComboBox.getSelectedKey(),
					this.oBIOIMultiNationalCompanyCombobox.getSelectedKey(),
					this.oBIOIEmailInputText.getValue(),
					this.oBIOILaborSizeInputTextValue,
					//this.oBIOILaborSizeInputText.getValue(),
					this.oBIOICommMethodComboBox.getSelectedKey(),
					this.oBIOICapitalInputTextValue,
					//this.oBIOICapitalInputText.getValue(),
					this.oBIOITelephoneCountryCodeInputText.getValue(),
					this.oBIOITelephoneInputText.getValue(),
					this.oBIOIMobilephoneCountryCodeInputText.getValue(),
					this.oBIOIMobilephoneInputText.getValue(),
					this.oBIOIFaxCountryCodeInputText.getValue(),
					this.oBIOIFaxInputText.getValue(),
					"http://"+this.oBIOIWebSiteInputText.getValue(),
					this.oBIOITelephoneCountryCodeInputText.getValue(),
					this.oBIOIFaxCountryCodeInputText.getValue(),
					this.oBIOIMobilephoneCountryCodeInputText.getValue()								
					);
			
			
				
            jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
            	this.oRecordExists = true;
            	
				this.basicInfoFileAttachmentOperations(this.oBIOIOrganizationName.getValue());

            	
            	/*this.oBICIPowerofAttorneyFileUploader = this.getView().byId("idBICIPowerofAttorneyFileUploader");
				this.oBICIPassPortCopyFileUploader = this.getView().byId("idBICIPassportCopyFileUploader");
				
				var oRequestFinishedDeferredUploadPOA = this.oModelHelper.uploadPOA(this.oRef_id, this.oBICIPowerofAttorneyFileUploader);
				jQuery.when(oRequestFinishedDeferredUploadPOA).then(jQuery.proxy(function(oResponse) {					
					
				}, this));
				
				var oRequestFinishedDeferredUploadPassPortCopy = that.oModelHelper.uploadBICIPassPortCopy(this.oRef_id, this.oBICIPassPortCopyFileUploader);
				jQuery.when(oRequestFinishedDeferredUploadPassPortCopy).then(jQuery.proxy(function(oResponse) {						
					//that.saveContactInfoTab();
				}, that));*/
            	
				
				this.closeBusyDialog();
/*            	sap.m.MessageToast.show(that.oModelHelper.getText("OrgInfoSaved"), {duration : 1000});
*/
				
				this.saveContactInfoTab();

        
			}, this));	
			}
			catch(err){
				this.closeBusyDialog();

				sap.m.MessageToast.show(this.oModelHelper
    					.getText("AllFieldsAreRequired"));	
			}
			
		}
		
		
	

		
		
		if(this.oFinancialAnswersExists){
			
			/*this.oBasicInfoTab.setSelectedIndex(1);
			this.oBasicInfoTab.setSelectedIndex(0);
			
			this.oLicenseInfoTab.setSelectedIndex(1);
			this.oLicenseInfoTab.setSelectedIndex(0);
			
			var questions = [];
			var answers = [];
			
			for(var i=0; i < this.oTotalBAQQuestions; i++){
				 var oBAQAnswer = sap.ui.getCore().byId("idBAQAnswer"+i);
				 var oBAQuestion = sap.ui.getCore().byId("idBAQuestion"+i);
				 var oBAQFileUploader = sap.ui.getCore().byId("idBAQFileUploader"+i);
				 
				 this.oModelHelper.uploadBAQAttachment(this.oRef_id, oBAQuestion.data("idBAQuestion"+i), oBAQFileUploader);
				 
				 
				 questions.push(oBAQuestion.data("idBAQuestion"+i));
				 console.log(oBAQAnswer.getSelectedItem().getText());
				 answers.push(oBAQAnswer.getSelectedItem().getText());
			}
			
			
			var oRequestFinishedDeferredUpdateBAQAnswers = this.oModelHelper.updateBAQAnswers(this.oRef_id, questions, answers);

			jQuery.when(oRequestFinishedDeferredUpdateBAQAnswers).then(jQuery.proxy(function(oResponse) {
				console.log(oResponse);			
				
			}, this));*/
			
			
			
		}else{
			
			/*this.oBasicInfoTab.setSelectedIndex(1);
			this.oBasicInfoTab.setSelectedIndex(0);
			
			this.oLicenseInfoTab.setSelectedIndex(1);
			this.oLicenseInfoTab.setSelectedIndex(0);*/
			
			/*try{			
			var questions = [];
			var answers = [];
			//var oRequestFinishedBAQCreateDeferred = this.oModelHelper.createBAQAnswers();
			for(var i=0; i < this.oTotalBAQQuestions; i++){
				 var oBAQAnswer = sap.ui.getCore().byId("idBAQAnswer"+i);
				 //oBAQAnswer.setValue("Hello");
				 //console.log(oBAQAnswer.getSelectedItem().getText());
				 var oBAQuestion = sap.ui.getCore().byId("idBAQuestion"+i);
				 //console.log(oBAQuestion.getText());				 
				 //console.log(oBAQuestion.data("idBAQuestion"+i));
				 questions.push(oBAQuestion.data("idBAQuestion"+i));
				 answers.push(oBAQAnswer.getSelectedItem().getText());
			}
			
			
			var oRequestFinishedDeferredcreateBAQAnswers = this.oModelHelper.createBAQAnswers(this.oRef_id, questions, answers);

			jQuery.when(oRequestFinishedDeferredcreateBAQAnswers).then(jQuery.proxy(function(oResponse) {
				//console.log(oResponse);
				
				
			}, this));
			}catch(err){
				
				if(!this.oShowAlertDialog.isOpen())
					{
					this.oAlertTextView.setText(this.oModelHelper
							.getText("ChooseBAQ"));
					this.oShowAlertDialog.open();
					
					}
				
			}
			
			
		}
		*/
		
		}
	},
	saveLicenseInfoTab : function(){
		this.openBusyDialog();
		var that = this;
		
		try{
			
		
			if(this.oISICUnAvailable){
				
				
				var oRequestFinishedDeferredcreateISIC = this.oModelHelper.createLILIBusiness(
						this.oLicenseTypeInputText.getValue(),
						this.oSurveyID,
						this.oLILIClassMultiComboBox.getSelectedKeys().filter(Boolean),
						this.oLILILicenseActivityMultiComboBox.getSelectedKeys().filter(Boolean),
						this.oLILIGroupComboBox.getSelectedKeys().filter(Boolean),
						this.oLILIDivisionComboBox.getSelectedKey(),
						this.oLILISectionComboBox.getSelectedKey(),
						this.oRef_id,
						this.oLILIBusinessTypeComboBox.getSelectedKey(),
						this.oLILIActivityDescriptionTextArea.getValue()
						);
	
				jQuery.when(oRequestFinishedDeferredcreateISIC).then(jQuery.proxy(function(oResponse) {
					this.closeBusyDialog();

					
						
					
					if(this.oSaveClicked){
						that.closeBusyDialog();
						/*sap.m.MessageToast.show(that.oModelHelper
									.getText("Saved"), {duration : 1000});*/
						this.oSaveClicked = false;
					}
					
					if(this.oLogoutClicked){
						that.closeBusyDialog();
						/*sap.m.MessageToast.show(that.oModelHelper
									.getText("Saved"), {duration : 1000});*/
						
						this.oLogoutClicked = false;
					}
					
					if(this.oSubmitClicked){
						
					       that.doSubmit();
					}
					
					/*sap.m.MessageToast.show(that.oModelHelper
							.getText("Saved"), {duration : 1000});*/
					
				}, this));
				
			}else{
				this.openBusyDialog();

				var oRequestFinishedDeferredDeleteISICEntry = this.oModelHelper.deleteISICEntry(this.oRef_id);
	
				jQuery.when(oRequestFinishedDeferredDeleteISICEntry).then(jQuery.proxy(function(oResponse) {
					this.closeBusyDialog();
					
					this.openBusyDialog();

					var oRequestFinishedDeferredcreateISIC = this.oModelHelper.createLILIBusiness(
							this.oLicenseTypeInputText.getValue(),
							this.oSurveyID,
							this.oLILIClassMultiComboBox.getSelectedKeys().filter(Boolean),
							this.oLILILicenseActivityMultiComboBox.getSelectedKeys().filter(Boolean),
							this.oLILIGroupComboBox.getSelectedKeys().filter(Boolean),
							this.oLILIDivisionComboBox.getSelectedKey(),
							this.oLILISectionComboBox.getSelectedKey(),
							this.oRef_id,
							this.oLILIBusinessTypeComboBox.getSelectedKey(),
							this.oLILIActivityDescriptionTextArea.getValue()
							);
	
					jQuery.when(oRequestFinishedDeferredcreateISIC).then(jQuery.proxy(function(oResponse) {
						this.closeBusyDialog();
						
						
						
						
						if(this.oSaveClicked){
							that.closeBusyDialog();
							/*sap.m.MessageToast.show(that.oModelHelper
										.getText("Saved"), {duration : 1000});*/
							this.oSaveClicked = false;
						}
						if(this.oLogoutClicked){
							that.closeBusyDialog();
							/*sap.m.MessageToast.show(that.oModelHelper
										.getText("Saved"), {duration : 1000});*/
							
							this.oLogoutClicked = false;
						}
						
						if(this.oSubmitClicked){
					       that.doSubmit();
						}
						
					}, this));
					
					/*sap.m.MessageToast.show(that.oModelHelper
							.getText("Saved"), {duration : 1000});*/
					
				}, this));				
				
				
			}
		}
		catch(error){
			this.closeBusyDialog();
		}

	},
	doSubmit : function(){
		
		var that = this;		
	
		if(!this.oBAQError){
			
			/*if(!this.oShowSubmitAlertDialog.isOpen())
			{
			this.oShowSubmitAlertDialog.open();
			
			}	*/		
			
			this.handleSubmitAlertYesDialogButtonPress();
			
		}else{
			this.closeBusyDialog();
	
		}
	},
	handleSubmitAlertYesDialogButtonPress : function(){
		var that = this;

		this.oShowSubmitAlertDialog.close();

		sap.m.MessageToast.show(that.oModelHelper.getText("SubmitApplicationMsg"), {duration : 30000});
		
		$(window).unbind('beforeunload');
				
		
		this.openBusyDialog();
		var oRequestSubmitFinishedDeferred = that.oModelHelper.Submit(that.oRef_id);
		
		jQuery.when(oRequestSubmitFinishedDeferred).then(jQuery.proxy(function(oResponse) {
			that.closeBusyDialog();			
			
			if(oResponse.LeadID !== ""){
			
			if (!that._ShowLeadIDFragment) {
				that._ShowLeadIDFragment = sap.ui.xmlfragment(
						"com.sagia.view.fragments.show_investorid_dialog", that.getView()
								.getController());
				this.getView().addDependent(that._ShowLeadIDFragment);
			}		
			
			var oLeadIDTextView = sap.ui.getCore().byId("idLeadIDTextView");
			
			oLeadIDTextView.setText(oResponse.LeadID);

			that._ShowLeadIDFragment.open();
			}else{		
				this.oSubmitClicked = false;

				if(!this.oShowAlertDialog.isOpen())
				{
				this.oAlertTextView.setText(oResponse.Return);
				this.oShowAlertDialog.open();
				
				}else{
					this.oShowAlertDialog.close();
					this.oAlertTextView.setText(oResponse.Return);
					this.oShowAlertDialog.open();
				}
			}
			
			
		}, that));

	},
	handleSubmitSlertNoDialogButtonPress : function(){
		this.oShowSubmitAlertDialog.close();
	},
	saveBAQInfoTab : function(){
		this.openBusyDialog();

		if(this.oBAQExists){
			
			try{
				
			
			
			this.oBasicInfoTab.setSelectedIndex(1);
			this.oBasicInfoTab.setSelectedIndex(0);
			
			this.oLicenseInfoTab.setSelectedIndex(1);
			this.oLicenseInfoTab.setSelectedIndex(0);
			
			var questions = [];
			var answers = [];
			
			for(var i=0; i < this.oTotalBAQQuestions; i++){
				 var oBAQAnswer = sap.ui.getCore().byId("idBAQAnswer"+i);
				 var oBAQuestion = sap.ui.getCore().byId("idBAQuestion"+i);
				 var oBAQFileUploader = sap.ui.getCore().byId("idBAQFileUploader"+i);
				 
				 this.oModelHelper.uploadBAQAttachment(this.oRef_id, oBAQuestion.data("idBAQuestion"+i), oBAQFileUploader);		 
				 
				 
				 
				 if(oBAQAnswer.getSelectedKey() !== ""){	
					 questions.push(oBAQuestion.data("idBAQuestion"+i));
					 answers.push(oBAQAnswer.getSelectedItem().getText());
				 }
				 
			}			
			
			/*var oRequestFinishedDeferredUpdateBAQAnswers = this.oModelHelper.updateBAQAnswers(this.oRef_id, questions, answers, this.oBICIFirstNameInputText.getValue(), this.oBICILastNameInputText.getValue());

			jQuery.when(oRequestFinishedDeferredUpdateBAQAnswers).then(jQuery.proxy(function(oResponse) {					
				
			}, this));*/
			
			var oRequestFinishedDeferredDeleteBAQAnswers = this.oModelHelper.deleteBAQEntry(this.oRef_id);

			jQuery.when(oRequestFinishedDeferredDeleteBAQAnswers).then(jQuery.proxy(function(oResponse) {
				
				try{			
					var questions = [];
					var answers = [];
					for(var i=0; i < this.oTotalBAQQuestions; i++){
						 var oBAQAnswer = sap.ui.getCore().byId("idBAQAnswer"+i);
						 var oBAQuestion = sap.ui.getCore().byId("idBAQuestion"+i);
						 
						 if(oBAQAnswer.getSelectedKey() !== ""){	
					     questions.push(oBAQuestion.data("idBAQuestion"+i));
						 answers.push(oBAQAnswer.getSelectedItem().getText());
						 }
					}
					if(answers.length > 0){
						var oLanguage;
						if(this.oLanguageSelect.getSelectedKey() === "EN")
						{
							oLanguage="E";
						}else{
							oLanguage="A";
						}
						var oRequestFinishedDeferredcreateBAQAnswers = this.oModelHelper.createBAQAnswers(this.oRef_id, questions, answers, this.oBICIFirstNameInputText.getValue(), this.oBICILastNameInputText.getValue(), oLanguage);

						jQuery.when(oRequestFinishedDeferredcreateBAQAnswers).then(jQuery.proxy(function(oResponse) {
							
							//this.saveLicenseInfoTab();
							
							this.closeBusyDialog();

							this.oBAQError = false;
			            /*	sap.m.MessageToast.show(this.oModelHelper.getText("BAQInfoSaved"), {duration : 1000});
			            */	
					           	 if(this.oLILIBusinessTypeComboBox.getSelectedKey() !== "N" && this.oLicenseTypeInputText.getValue() !== "" ){ 
					      		      this.saveLicenseInfoTab();				      		      
					   			  	
					   			      this.oValidationLILIStatus = true;				   
						      	 }else if(this.oSurveyID !== "UNKNOWN" &&
						      			  this.oLILIClassMultiComboBox.getSelectedKeys().filter(Boolean).length !== 0 &&
						   		      this.oLILILicenseActivityMultiComboBox.getSelectedItems().length !== 0 &&
						   		  	  this.oLILIGroupComboBox.getSelectedKeys().filter(Boolean).length !== 0 &&
						   	  		  this.oLILIDivisionComboBox.getSelectedKey() !== "" &&
						   	  		  this.oLILISectionComboBox.getSelectedKey() !== "" &&
						   		   	  this.oRef_id !== "" &&		   
						   	 		  this.oLILIActivityDescriptionTextArea.getValue() !== ""){
						      		 
						   		      this.saveLicenseInfoTab();					   		      
						   		   	  	
						   	     	  this.oValidationLILIStatus = true;
						      	 }else{
							      		if(!this.oShowAlertDialog.isOpen())
										{
										this.oAlertTextView.setText(this.oModelHelper.getText("AllLIFieldsMandatory"));
										this.oShowAlertDialog.open();
										
										}
							      		/*sap.m.MessageToast.show(that.oModelHelper.getText("Saved"), {duration : 1000});*/
							      }

							
						}, this));
					}else  if(this.oLILIBusinessTypeComboBox.getSelectedKey() !== "N" && this.oLicenseTypeInputText.getValue() !== "" ){ 
		      		      this.saveLicenseInfoTab();				      		      
			   			  	
		   			      this.oValidationLILIStatus = true;				   
			      	 }else if(this.oSurveyID !== "UNKNOWN" &&
			      			  this.oLILIClassMultiComboBox.getSelectedKeys().filter(Boolean).length !== 0 &&
			   		      this.oLILILicenseActivityMultiComboBox.getSelectedItems().length !== 0 &&
			   		  	  this.oLILIGroupComboBox.getSelectedKeys().filter(Boolean).length !== 0 &&
			   	  		  this.oLILIDivisionComboBox.getSelectedKey() !== "" &&
			   	  		  this.oLILISectionComboBox.getSelectedKey() !== "" &&
			   		   	  this.oRef_id !== "" &&		   
			   	 		  this.oLILIActivityDescriptionTextArea.getValue() !== ""){
			      		 
			   		      this.saveLicenseInfoTab();					   		      
			   		   	  	
			   	     	  this.oValidationLILIStatus = true;
			      	 }else{
			      		if(!this.oShowAlertDialog.isOpen())
						{
						this.oAlertTextView.setText(this.oModelHelper.getText("AllLIFieldsMandatory"));
						this.oShowAlertDialog.open();
						
						}
			      		
			      		/*sap.m.MessageToast.show(that.oModelHelper.getText("Saved"), {duration : 1000});*/
			      	 }
	
					
					
					}catch(err){
						this.closeBusyDialog();
						this.oBAQError = true;
					}
					
				
			}, this));
			}catch(err){
				this.closeBusyDialog();
			}
			
		}else{
			
			this.oBasicInfoTab.setSelectedIndex(1);
			this.oBasicInfoTab.setSelectedIndex(0);
			
			this.oLicenseInfoTab.setSelectedIndex(1);
			this.oLicenseInfoTab.setSelectedIndex(0);
			
			try{			
			var questions = [];
			var answers = [];
			for(var i=0; i < this.oTotalBAQQuestions; i++){
				 var oBAQAnswer = sap.ui.getCore().byId("idBAQAnswer"+i);
				 var oBAQuestion = sap.ui.getCore().byId("idBAQuestion"+i);
				 
                 var oBAQFileUploader = sap.ui.getCore().byId("idBAQFileUploader"+i);
				 
				 this.oModelHelper.uploadBAQAttachment(this.oRef_id, oBAQuestion.data("idBAQuestion"+i), oBAQFileUploader);
				 
				 

				 if(oBAQAnswer.getSelectedKey() !== ""){		
					 questions.push(oBAQuestion.data("idBAQuestion"+i));
					 answers.push(oBAQAnswer.getSelectedItem().getText());
				 }
			}	
			
			if(answers.length > 0){
				var oLanguage;
				if(this.oLanguageSelect.getSelectedKey() === "EN")
				{
					oLanguage="E";
				}else{
					oLanguage="A";
				}
				var oRequestFinishedDeferredcreateBAQAnswers = this.oModelHelper.createBAQAnswers(this.oRef_id, questions, answers, this.oBICIFirstNameInputText.getValue(), this.oBICILastNameInputText.getValue(), oLanguage);

				jQuery.when(oRequestFinishedDeferredcreateBAQAnswers).then(jQuery.proxy(function(oResponse) {
					
					//this.saveLicenseInfoTab();
					

					this.oBAQError = false;
					this.closeBusyDialog();
	/*            	sap.m.MessageToast.show(this.oModelHelper.getText("BAQInfoSaved"), {duration : 1000});
	*/            	
	            	 if(this.oLILIBusinessTypeComboBox.getSelectedKey() !== "N" && this.oLicenseTypeInputText.getValue() !== "" ){ 
		      		      this.saveLicenseInfoTab();				      		      
		   			  	
		   			      this.oValidationLILIStatus = true;				   
			      	 }else if(this.oSurveyID !== "UNKNOWN" &&
			      			  this.oLILIClassMultiComboBox.getSelectedKeys().filter(Boolean).length !== 0 &&
			   		      this.oLILILicenseActivityMultiComboBox.getSelectedItems().length !== 0 &&
			   		  	  this.oLILIGroupComboBox.getSelectedKeys().filter(Boolean).length !== 0 &&
			   	  		  this.oLILIDivisionComboBox.getSelectedKey() !== "" &&
			   	  		  this.oLILISectionComboBox.getSelectedKey() !== "" &&
			   		   	  this.oRef_id !== "" &&		   
			   	 		  this.oLILIActivityDescriptionTextArea.getValue() !== ""){
			      		 
			   		      this.saveLicenseInfoTab();					   		      
			   		   	  	
			   	     	  this.oValidationLILIStatus = true;
			      	 }else{
			      		if(!this.oShowAlertDialog.isOpen())
						{
						this.oAlertTextView.setText(this.oModelHelper.getText("AllLIFieldsMandatory"));
						this.oShowAlertDialog.open();
						
						}
			      		/*sap.m.MessageToast.show(that.oModelHelper.getText("Saved"), {duration : 1000});*/
			      	 }

					
				}, this));
			}else  if(this.oLILIBusinessTypeComboBox.getSelectedKey() !== "N" && this.oLicenseTypeInputText.getValue() !== "" ){ 
    		      this.saveLicenseInfoTab();				      		      
	   			  	
   			      this.oValidationLILIStatus = true;				   
	      	 }else if(this.oSurveyID !== "UNKNOWN" &&
	      			  this.oLILIClassMultiComboBox.getSelectedKeys().filter(Boolean).length !== 0 &&
	   		      this.oLILILicenseActivityMultiComboBox.getSelectedItems().length !== 0 &&
	   		  	  this.oLILIGroupComboBox.getSelectedKeys().filter(Boolean).length !== 0 &&
	   	  		  this.oLILIDivisionComboBox.getSelectedKey() !== "" &&
	   	  		  this.oLILISectionComboBox.getSelectedKey() !== "" &&
	   		   	  this.oRef_id !== "" &&		   
	   	 		  this.oLILIActivityDescriptionTextArea.getValue() !== ""){
	      		 
	   		      this.saveLicenseInfoTab();					   		      
	   		   	  	
	   	     	  this.oValidationLILIStatus = true;
	      	 }else{

	      		/*sap.m.MessageToast.show(that.oModelHelper.getText("Saved"), {duration : 1000});*/
	      	 }
			
			
			
			
			}catch(err){
				
				this.oBAQError = true;
				this.closeBusyDialog();
			
			}
			
			
		}
		
	},
	saveContactInfoTab : function(){
		this.openBusyDialog();

		if(this.oContactInfoRecordExists){
			this.oBasicInfoTab.setSelectedIndex(1);
			this.oBasicInfoTab.setSelectedIndex(0);			
			this.oLicenseInfoTab.setSelectedIndex(1);
			this.oLicenseInfoTab.setSelectedIndex(0);
			try{
			var oRequestFinishedDeferred = this.oModelHelper.saveBICI(
					this.oRef_id,
					this.oBICIFirstNameInputText.getValue(),
					this.oBICILastNameInputText.getValue(),
					this.oBICICityInputText.getValue(),
					this.oBICIGenderComboBox.getSelectedKey(),
					this.oBICIPOBoxInputText.getValue(),
					this.oBICITelephoneCountryCodeInputText.getValue(),
					this.oBICITelephoneInputText.getValue(),
					this.oBICIPostalCodeInputText.getValue(),
					this.oBICIMobileCountryCodeInputText.getValue(),
					this.oBICIMobilePhoneInputText.getValue(),
					this.oBICICommMethodComboBox.getSelectedKey(),
					this.oBICIFaxCountryCodeInputText.getValue(),
					this.oBICIFaxInputText.getValue(),
					this.oBICIRoleInputText.getSelectedKey(),
					this.oBICIEmailInputText.getValue(),
					this._oBICICountryCombobox.getSelectedKey(),
					this._oBICINationalityCombobox.getSelectedKey(),						
					this.oBICIStreet.getValue()
							);
			

			jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function() {    	
                
				this.closeBusyDialog();
            	/*sap.m.MessageToast.show(that.oModelHelper.getText("Saved"), {duration : 1000});*/
				this.saveBAQInfoTab();

				
			}, this));	
		    
			}
			catch(err){
				sap.m.MessageToast.show(this.oModelHelper
    					.getText(err));	
			}
			
		}else{
			this.oBasicInfoTab.setSelectedIndex(1);
			this.oBasicInfoTab.setSelectedIndex(0);
			
			this.oLicenseInfoTab.setSelectedIndex(1);
			this.oLicenseInfoTab.setSelectedIndex(0);
			
			try{
			var oRequestFinishedDeferred = this.oModelHelper.createAndUpdateBICI(
					this.oRef_id,
					this.oBICIFirstNameInputText.getValue(),
					this.oBICILastNameInputText.getValue(),
					this.oBICICityInputText.getValue(),
					this.oBICIGenderComboBox.getSelectedKey(),
					this.oBICIPOBoxInputText.getValue(),
					this.oBICITelephoneCountryCodeInputText.getValue(),
					this.oBICITelephoneInputText.getValue(),
					this.oBICIPostalCodeInputText.getValue(),
					this.oBICIMobileCountryCodeInputText.getValue(),
					this.oBICIMobilePhoneInputText.getValue(),
					this.oBICICommMethodComboBox.getSelectedKey(),
					this.oBICIFaxCountryCodeInputText.getValue(),
					this.oBICIFaxInputText.getValue(),
					this.oBICIRoleInputText.getSelectedKey(),
					this.oBICIEmailInputText.getValue(),
					this._oBICICountryCombobox.getSelectedKey(),
					this._oBICINationalityCombobox.getSelectedKey(),						
					this.oBICIStreet.getValue(),
					this.oBICIPowerofAttorneyFileUploader,
					this.oBICIPassPortCopyFileUploader
					);	 	
			
				
            jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
            	

            	
            	
            	//this.readBICIFileAttachemnts();
				this.closeBusyDialog();
            	/*sap.m.MessageToast.show(that.oModelHelper.getText("Saved"), {duration : 1000});*/
				this.saveBAQInfoTab();
				
			}, this));	
			}
			catch(err){
				this.closeBusyDialog();

				sap.m.MessageToast.show(this.oModelHelper
    					.getText("AllFieldsAreRequired"));	
			}
			
		}
	},
	handleBasicInfoTabsSelection : function(oEvent){
		//console.log("Tab Selected");
		
		
		
		
		
	},
	readBICIPASSFileAttachemnts : function(){
		var oRequestFinishedDeferredReadPASSBICI = this.oModelHelper.readBICIPassPortAttachment(this.oRef_id);

		jQuery.when(oRequestFinishedDeferredReadPASSBICI).then(jQuery.proxy(function(oResponse) {
			//console.log(oResponse.data.Return);
			if(oResponse.data.Return !== "No record Exists" && oResponse.data.FileName !== ""){	
				this.oBICIPASSAttachmentName.setVisible(true);
				this.oBICIPASSAttachmentNameTextView.setVisible(true);
				this.oBICIPASSAttachmentName.setText(oResponse.data.FileName);
				
				this.oPreviewBICIPASSAttachmentName.setVisible(true);
				this.oPreviewBICIPASSAttachmentName.setText(oResponse.data.FileName);
				
				
				}else{
					this.oBICIPASSAttachmentName.setVisible(false);
					this.oBICIPASSAttachmentNameTextView.setVisible(false);
					this.oPreviewBICIPASSAttachmentName.setVisible(false);

				}
			
		}, this));	
	},
	readBICIPOAFileAttachemnts : function(){
	
		var oRequestFinishedDeferredReadPOABICI = this.oModelHelper.readBICIPPOAAttachment(this.oRef_id);

		jQuery.when(oRequestFinishedDeferredReadPOABICI).then(jQuery.proxy(function(oResponse) {
			
			if(oResponse.data.Return !== "No record Exists" && oResponse.data.FileName !== ""){	
				this.oBICIPOAAttachmentName.setVisible(true);
				this.oBICIPOAAttachmentNameTextView.setVisible(true);
				this.oBICIPOAAttachmentName.setText(oResponse.data.FileName);
				
				this.oPreviewBICIPOAAttachmentName.setVisible(true);
				this.oPreviewBICIPOAAttachmentName.setText(oResponse.data.FileName);
				
				}else{
					this.oBICIPOAAttachmentName.setVisible(false);
					this.oBICIPOAAttachmentNameTextView.setVisible(false);
					this.oPreviewBICIPOAAttachmentName.setVisible(false);

				}
		}, this));	
		
	},
	readBAQFileAttachments : function(){
		var that = this;
		var loop = 0;
		var id = setInterval(function() {
		    loop++;
		    if(loop <= that.oTotalBAQQuestions)
		    {
		        clearInterval(id);
		    }
		    var oBAQFileUploader = sap.ui.getCore().byId("idBAQFileUploader"+loop);
		    if(oBAQFileUploader){
		    	var oTextViewAttachment = sap.ui.getCore().byId("idBAQAttachment"+oBAQFileUploader.data("idBAQFileUploader"+loop));
			    var oPTextViewAttachment = sap.ui.getCore().byId("idPBAQAttachment"+oBAQFileUploader.data("idPBAQFileUploader"+loop));

			    var oRequestFinishedDeferredBAQAnswersAttachmentNameDifferred= that.oModelHelper.readBAQSavedAttachments(that.oRef_id, oBAQFileUploader.data("idBAQFileUploader"+loop));
				jQuery.when(oRequestFinishedDeferredBAQAnswersAttachmentNameDifferred).then(jQuery.proxy(function(oResponse) {
					if(oTextViewAttachment){
						oTextViewAttachment.setText(oResponse.data.FileName);
						oPTextViewAttachment.setText(oResponse.data.FileName);
					}
				}, that));
		    }
		    
		}, 1000);		
	},
	handleRegionSelectionComboBox : function(oControlEvent){
		
		if(this._oidRegionComboBox.getSelectedItem()){
			this.openBusyDialog();
			var oRequestFinishedDeferredReadCity = this.oModelHelper.readRegion(this._oidRegionComboBox.getSelectedItem().getKey());

			jQuery.when(oRequestFinishedDeferredReadCity).then(jQuery.proxy(function(oResponse) {
				this.closeBusyDialog();
				this._oBICityComboBox.setModel(oResponse);
			}, this));	
			
			this._oBICityComboBox.fireSelectionChange();			
		}		
		
	},
	
	handleCountrySelectionComboBoxReg : function(oControlEvent){
		
		
		//console.log(oControlEvent.getParameters('selectedItem').selectedItem.mProperties.key);
		this.openBusyDialog();
		var oRequestFinishedDeferred = this.oModelHelper.readCountryCode(this._oRegCountryCombobox.getSelectedKey());

		jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
			this.closeBusyDialog();

			this.getView().setModel(oResponse,"CCModel");
			this.oTelephoneCountryCodeInputText = this.getView().byId("idRegTelephoneCountryCodeInputText");

			this.oTelephoneCountryCodeInputText.setValue(oResponse.oData.CountryCodeCollection.TelNo);
//			this.oBICIMobileCountryCodeInputText.setValue(oResponse.oData.CountryCodeCollection.TelNo);
//			this.oBICIFaxCountryCodeInputText.setValue(oResponse.oData.CountryCodeCollection.TelNo);
			
		}, this));	
	},
	
	handleCountrySelectionComboBox : function(oControlEvent){
		
		
		//console.log(oControlEvent.getParameters('selectedItem').selectedItem.mProperties.key);
		this.openBusyDialog();
		var oRequestFinishedDeferred = this.oModelHelper.readCountryCode(this._oBICICountryCombobox.getSelectedKey());

		jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
			this.closeBusyDialog();
			
			this.getView().setModel(oResponse,"CCModel");
			this.oBICITelephoneCountryCodeInputText.setValue(oResponse.oData.CountryCodeCollection.TelNo);
			this.oBICIMobileCountryCodeInputText.setValue(oResponse.oData.CountryCodeCollection.TelNo);
			this.oBICIFaxCountryCodeInputText.setValue(oResponse.oData.CountryCodeCollection.TelNo);
			
		}, this));	
	},
	handleNSHOCountryChange : function(oControlEvent){
		this.openBusyDialog();
		var oRequestFinishedDeferred = this.oModelHelper.readCountryCode(this.oNSHOrgCountryComboBox.getSelectedKey());

		jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
			this.closeBusyDialog();
		
			this.oNSHOrgTelephoneCountryCodeInputText.setValue(oResponse.oData.CountryCodeCollection.TelNo);
			this.oNSHOrgFaxCountryCodeInputText.setValue(oResponse.oData.CountryCodeCollection.TelNo);
			this.oNSHOrgMobilephoneCountryCodeInputText.setValue(oResponse.oData.CountryCodeCollection.TelNo);
			
		}, this));	
	},
	handleNSHPCountryChange : function(oControlEvent){
		this.openBusyDialog();
		var oRequestFinishedDeferred = this.oModelHelper.readCountryCode(this.oNSHCountryComboBox.getSelectedKey());

		jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
			this.closeBusyDialog();
		
			
			this.oNSHPersonTelephoneCountryCodeInputText.setValue(oResponse.oData.CountryCodeCollection.TelNo);
			this.oNSHPersonFaxCountryCodeInputText.setValue(oResponse.oData.CountryCodeCollection.TelNo);
			this.oNSHPersonMobilephoneCountryCodeInputText.setValue(oResponse.oData.CountryCodeCollection.TelNo);
			
		}, this));	
	},
	getBAQ : function(){
		if(this.oLanguageSelect.getSelectedKey() === "EN")
		{
			oLanguage="E";
		}else{
			oLanguage="A";
		}
		this.openBusyDialog();
		that = this;
		var oRequestFinishedDeferred = this.oModelHelper.readBAQ(oLanguage);
		

		jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
			var questions = [];
			var nodeID = [];
			var surveyID = [];
			var answers = [];
			var unitsBAQ = [];
			var attachmentFlag = [];

			this.oBAQMatrixLayout = this.getView().byId("idLI_BAQ_1_to_6MAtrixLayoutz");
			
			this.oTotalBAQQuestions = 0;
			
			for(var i=0; i < oResponse.data.results.length; i++){
				questions[i] = oResponse.data.results[i].Qtxtlg;
				nodeID[i] = oResponse.data.results[i].NodeGuid;
				surveyID[i] = oResponse.data.results[i].SurveyID;
				unitsBAQ[i] = oResponse.data.results[i].Units;
				attachmentFlag[i] = oResponse.data.results[i].Attachment;
			}
			
			j = 0 ;
			for(var i=0; i < questions.length; i++){
				
				var oRequestFinishedDeferred = this.oModelHelper.readBAQAnswer(oResponse.data.results[i].NodeGuid, "QUEEMAH_BUS_PLAN", oLanguage);

				jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
					answers.push(oResponse.data.results);
					//console.log(j);
					if(j === (i-1)){
						
						
						var thisContext = this;
						var oRequestFinishedDeferredBAQAnswersReadChild = thisContext.oModelHelper.readBAQSavedAnswers(thisContext.oRef_id);

						jQuery.when(oRequestFinishedDeferredBAQAnswersReadChild).then(jQuery.proxy(function(oResponse) {
							//thisContext.closeBusyDialog();
							
							//console.log
							this.oBAQbusyIndicator.setVisible(false);
							
							if(oResponse.data.results[0].Return !== "No Records"){						
								
								for(var i=0; i < thisContext.oTotalBAQQuestions; i++){
									 for (j=0; j < thisContext.oTotalBAQQuestions; j++){
										 var oBAQAnswer = sap.ui.getCore().byId("idBAQAnswer"+j);
										 var oBAQuestion = sap.ui.getCore().byId("idBAQuestion"+j);

										 if(oResponse.data.results[i] !== undefined){
											 if(oBAQuestion.data("idBAQuestion"+j) === oResponse.data.results[i].NodeGuid){
												 
												 oBAQAnswer.setSelectedItem(oBAQAnswer.getItemByKey(oResponse.data.results[i].Atxtlg));
												 
												 //console.log("i = "+i+"j = "+j+" oTotalBAQQuestions"+thisContext.oTotalBAQQuestions);
											 }	
										 }									 		 
										 
									 }
									 if(i === (thisContext.oTotalBAQQuestions-1)){
										 this.allBAQLoaded = true;
										 that.closeBusyDialog();
									 }
								}
								thisContext.oBAQExists = true;						
								}else{
									this.allBAQLoaded = true;
									that.closeBusyDialog();
									thisContext.oBAQExists = false;	
								}
						}, thisContext));
					}
					j++;
	                
					if(j === questions.length){
						
						k = 0;
						for(var l=0; l < questions.length; l++){
							
							var oBAQMandatoryTextView = new sap.ui.commons.TextView("idBAQuestionMadatory"+l,{
								text : "*",
								});
							oBAQMandatoryTextView.addStyleClass("textcolorred");
							
							
							var oTextView = new sap.ui.commons.TextView("idBAQuestion"+l,{
								text : questions[l],
								});
							var oBAQUnitsTextView = new sap.ui.commons.TextView("idBAQuestionUnits"+l,{
								text : unitsBAQ[l],
								});
							//that.oBAQAnswersAreValidated = true;
							var oSelect = new sap.m.ComboBox("idBAQAnswer"+l, 
									{selectionChange : function(oControlEvent){
										//console.log("Changed");
										//console.log(oControlEvent.getParameters('selectedItem').selectedItem);
										//oSelect.setValueState("None");
										
										//if(that.oBAQAnswersAreValidated){
										//	that.oBAQAnswersAreValidated = false;
											that.oValidationHelper.checkIfAllBAQAreAnswered(that);
										//}
										
									}});
							oSelect.setWidth("8rem");
							oSelect.setSelectedKey("");
							
							/*oSelect.selectionChange(function(oEvent){
								console.log("Changed");
							})*/
							
							
							var oFileUploader = new sap.ui.unified.FileUploader("idBAQFileUploader"+l,{
								
								sendXHR : true,
								useMultipart : false,
								sameFilenameAllowed : true,
								mimeType : "application/pdf"
							});
							/*icon : "common/mime/attachment.png",
							iconOnly : true,*/

							for(var m=0; m < answers.length; m++){								
							
								for(var t=0; t < answers[m].length; t++){
									
									if(nodeID[k] === answers[m][t].NodeGuid){
									
										var vItem = new sap.ui.core.Item();		    				
					    				
										vItem.setText(answers[m][t].Atxtlg);						
										vItem.setKey(answers[m][t].Atxtlg);
										oSelect.addItem(vItem);
									}
								}
								
							}k++;
							
							oTextView.data("idBAQuestion"+l,nodeID[l]);
							
							//this.oBAQMatrixLayout.createRow( oTextView );
							
							var oRow0 = new sap.ui.commons.layout.MatrixLayoutRow();
							
							var oCell0 = new sap.ui.commons.layout.MatrixLayoutCell();
							oCell0.setColSpan(2);
							oCell0.addContent(oTextView);
							oCell0.addContent(oBAQMandatoryTextView);
							oRow0.addCell(oCell0);							
							this.oBAQMatrixLayout.addRow(oRow0);

							
							var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
							
							var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell();
							oCell1.addContent(oSelect);
							
							var oCell2 = new sap.ui.commons.layout.MatrixLayoutCell();
							oCell2.addContent(oBAQUnitsTextView);							
								
							oRow.addCell(oCell1);
							oRow.addCell(oCell2);
							
							this.oBAQMatrixLayout.addRow(oRow);
							var oTextViewSpaceAttachment = new sap.ui.commons.TextView("idBAQSpaceAttachment"+nodeID[l]);
							this.oBAQMatrixLayout.createRow(oTextViewSpaceAttachment);


							//this.oBAQMatrixLayout.createRow( oSelect );
							//this.oBAQMatrixLayout.createRow( oBAQUnitsTextView );
							if(attachmentFlag[l] === "X"){
								var oTextViewAttachment = new sap.ui.commons.TextView("idBAQAttachment"+nodeID[l]);

								oFileUploader.data("idBAQFileUploader"+l,nodeID[l]);								

								var oRow2 = new sap.ui.commons.layout.MatrixLayoutRow();

								var oCell3 = new sap.ui.commons.layout.MatrixLayoutCell();
								oCell3.setColSpan(2);
								oCell3.addContent(oFileUploader);
								oRow2.addCell(oCell3);							
								this.oBAQMatrixLayout.addRow(oRow2);
								this.oBAQMatrixLayout.createRow( oTextViewAttachment );
							}
							
							
						
							this.oTotalBAQQuestions++;
						}			
						
						//that.closeBusyDialog();		    				
					}
				}, this));				
				
			}
			
			
			
			
		}, this));	
			
	},
	getFinancialQ : function(){
		//start of reading financial Q
		if(this.oLanguageSelect.getSelectedKey() === "EN")
		{
			oLanguage="E";
		}else{
			oLanguage="A";
		}
		this.openBusyDialog();
		var oRequestFinishedFinancialQuestionsDeferred = this.oModelHelper.readFinancialQuestions(oLanguage);
		
		jQuery.when(oRequestFinishedFinancialQuestionsDeferred).then(jQuery.proxy(function(oResponse) {
			this.closeBusyDialog();
			
			var questions = [];
			var nodeID = [];
			var surveyID = [];
			var answers = [];
			this.oFinancialQuestionsMatrixLayout = this.getView().byId("idNewShareHolderFinancialQuestionsMLAyout");
			
			this.oTotalFinancialQuestions = 0;
			
			for(var i=0; i < oResponse.data.results.length; i++){
				questions[i] = oResponse.data.results[i].Qtxtlg;
				nodeID[i] = oResponse.data.results[i].NodeGuid;
				surveyID[i] = oResponse.data.results[i].SurveyID;
				
				var oFQMandatoryTextView = new sap.ui.commons.TextView("idFQuestionMadatory"+i,{
					text : "*",
					/*visible : false*/
					});
				oFQMandatoryTextView.addStyleClass("textcolorred");
				
				var oTextView = new sap.ui.commons.TextView("idFinancialQuestion"+i,{
					text : questions[i],
					});
				oTextView.data("idFinancialQuestion"+i,nodeID[i]);
				
				var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
				
				var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell();
				oCell1.addContent(oTextView);
				oCell1.addContent(oFQMandatoryTextView);
				
				var oCell2 = new sap.ui.commons.layout.MatrixLayoutCell();
				oCell2.addContent(new sap.m.Input({type : "Text", id : "idFinancialQAnswer"+i+""+1}));
				
				var oCell3 = new sap.ui.commons.layout.MatrixLayoutCell();
				oCell3.addContent(new sap.m.Input({type : "Text", id : "idFinancialQAnswer"+i+""+2}));
				
				var oCell4 = new sap.ui.commons.layout.MatrixLayoutCell();
				oCell4.addContent(new sap.m.Input({type : "Text", id : "idFinancialQAnswer"+i+""+3}));
				
				oRow.addCell(oCell1);
				oRow.addCell(oCell2);
				oRow.addCell(oCell3);
				oRow.addCell(oCell4);


				
				this.oFinancialQuestionsMatrixLayout.addRow(oRow);
				this.oTotalFinancialQuestions++;
	
			}
			
		}, this));	
		
		//end of reading financial Q
	},
	getActivityQ : function(){

		if(this.oLanguageSelect.getSelectedKey() === "EN")
		{
			oLanguage="E";
		}else{
			oLanguage="A";
		}
		//start of Activity Questions
		
		
        var oRequestFinishedActivityQuestionsDeferred = this.oModelHelper.readActivityQuestions(oLanguage);
		
		jQuery.when(oRequestFinishedActivityQuestionsDeferred).then(jQuery.proxy(function(oResponse) {
			
			var questions = [];
			var nodeID = [];
			var surveyID = [];
			var answers = [];
			var units = [];
			var attachmentFlag = [];

			this.oActivityQuestionsMatrixLayout = this.getView().byId("idNewShareHolderActivityQuestionsMLAyout");
			
			this.oTotalActivityQuestions = 0;
			
			for(var i=0; i < oResponse.data.results.length; i++){
				questions[i] = oResponse.data.results[i].Qtxtlg;
				nodeID[i] = oResponse.data.results[i].NodeGuid;
				surveyID[i] = oResponse.data.results[i].SurveyID;
				units[i] = oResponse.data.results[i].Units;
				attachmentFlag[i] = oResponse.data.results[i].Attachment;

				
				++this.oTotalActivityQuestions;

			}
			
			n = 0 ;
			for(var i=0; i < questions.length; i++){
				
				var oRequestFinishedDeferred = this.oModelHelper.readAQAnswers(oResponse.data.results[i].NodeGuid, "QUEEMAH_GENERAL_QUESTIONS", oLanguage);

				jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
					answers.push(oResponse.data.results);
					if(n === (i-1)){
						this.getFinancialQ();
					}
					n++;
	                
					if(n === questions.length){
						
						p = 0;
						for(var l=0; l < questions.length; l++){
							
							var oAQMandatoryTextView = new sap.ui.commons.TextView("idAQuestionMadatory"+l,{
								text : "*",
								/*visible : false*/
								});
							oAQMandatoryTextView.addStyleClass("textcolorred");
							
							var oTextView = new sap.ui.commons.TextView("idAQuestion"+l,{
								text : questions[l],
								});
							var oUnitsTextView = new sap.ui.commons.TextView("idAQuestionUnits"+l,{
								text : units[l],
								});
							var oSelect = new sap.m.ComboBox("idAQAnswer"+l);
							
							var oFileUploader = new sap.ui.unified.FileUploader("idAQFileUploader"+l,{
								sendXHR : true,
								useMultipart : false,
								sameFilenameAllowed : true,
								
								mimeType : "application/pdf"
							});
							/*iconOnly : true,
							icon : "common/mime/attachment.png",*/

							//var oTextViewAttachment = new sap.ui.commons.TextView("idAQAttachment"+l,{});
							
							for(var m=0; m < answers.length; m++){								
							
								for(var t=0; t < answers[m].length; t++){
									
									if(nodeID[p] === answers[m][t].NodeGuid){
									
										var vItem = new sap.ui.core.Item();		    				
					    				
										vItem.setText(answers[m][t].Atxtlg);						
										vItem.setKey(answers[m][t].Atxtlg);
										oSelect.addItem(vItem);
									}
								}
								
							}p++;
							
							oTextView.data("idAQuestion"+l,nodeID[l]);
							
							var oRow1 = new sap.ui.commons.layout.MatrixLayoutRow();
							
							var oCell0 = new sap.ui.commons.layout.MatrixLayoutCell();
							var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell();
							var oCell2 = new sap.ui.commons.layout.MatrixLayoutCell();
							
							oCell0.addContent(oTextView);
							oCell0.addContent(oAQMandatoryTextView);
							oCell1.addContent(oSelect);
							oCell2.addContent(oUnitsTextView);	
							
							oRow1.addCell(oCell0);
							oRow1.addCell(oCell1);
							oRow1.addCell(oCell2);
							
							this.oActivityQuestionsMatrixLayout.addRow(oRow1);
							
							if(attachmentFlag[l] === "X"){
								var oRow2 = new sap.ui.commons.layout.MatrixLayoutRow();

								var oCell3 = new sap.ui.commons.layout.MatrixLayoutCell();
								oCell3.setColSpan(2);
								oCell3.addContent(oFileUploader);
								oRow2.addCell(oCell3);							
								this.oActivityQuestionsMatrixLayout.addRow(oRow2);
							}
							
							//this.oActivityQuestionsMatrixLayout.createRow( oFileUploader );
							//this.oActivityQuestionsMatrixLayout.createRow( oTextViewAttachment );
						    //console.log(this.oTotalActivityQuestions++);
							//this.oTotalActivityQuestions++;
						}			
						
						//that.closeBusyDialog();		    				
					}
				}, this));				
				
			}
			
		}, this));			
		//end of Activity Questions		
		
	},
	handleLicenseInfoTabStripSelect : function(oControlEvent){
		//console.log(oControlEvent.getParameters().index);
		that = this;
		if(!this.beenFired)
	    {
	        //TODO FUNCTION
			that.beenFired = true;
			
			var isicGroup = [];
			var IsicClass = [];
			var IsicLicenseActivity = [];
			
			//if(oControlEvent.getParameters().index === 1){
				var oRequestFinishedDeferredReadISIC = this.oModelHelper.readISIC(this.oRef_id);				
				jQuery.when(oRequestFinishedDeferredReadISIC).then(jQuery.proxy(function(oResponse) {
					//if(oResponse){
					if(oResponse.data.results.length > 0){
						//that.openBusyDialog();
						this.oLILIBusinessTypeComboBox.setSelectedKey(oResponse.data.results[0].Lic);
						this.oLILIBusinessTypeComboBox.fireSelectionChange();
						
						var resultsI = 0, resultsJ = 0, howManyTimes = oResponse.data.results.length;
						
						
						if(oResponse.data.results[0].Lic === "N"){
							that = this;
							
						

						for(var i=0; i < oResponse.data.results.length; i++){					
							
							if(this.oLILISectionComboBox.getSelectedKey() === ""){
								this.oLILISectionComboBox.setSelectedKey(oResponse.data.results[i].IsicSection);
								
								
								
								
								
								//read Division

								var oRequestFinishedDeferredLILIDivision = that.oModelHelper.readLILIDivision(that.oLILISectionComboBox.getSelectedKey());

								jQuery.when(oRequestFinishedDeferredLILIDivision).then(jQuery.proxy(function(oReadDivisionResponse) {
									that.oLILIDivisionComboBox.setModel(oReadDivisionResponse);
									
									for(var d=0; d < oResponse.data.results.length; d++){
										//console.log("Division = "+oResponse.data.results[d].IsicDivision);
										that.oLILIDivisionComboBox.setSelectedKey(oResponse.data.results[d].IsicDivision);								
										
									}
									//that.oLILIDivisionComboBox.setSelectedKey(oResponse.data.results[0].IsicDivision);
									
									//read Group
										var oRequestFinishedDeferredLILIGroup = that.oModelHelper.readLILIGroup(that.oLILISectionComboBox.getSelectedKey(),that.oLILIDivisionComboBox.getSelectedKey());
										
										jQuery.when(oRequestFinishedDeferredLILIGroup).then(jQuery.proxy(function(oReadGroupResponse) {
									
											that.oLILIGroupComboBox.setModel(oReadGroupResponse);
											
											if(that.oISICLoaded || this.oLILIBusinessTypeComboBox.getSelectedKey() === "N"){
												that.oLILIGroupComboBox.removeSelectedKeys(that.oLILIGroupComboBox.getSelectedKeys());
											}
										
											var uniqueISISCGroupArray = [];
											for(var j=0; j < oResponse.data.results.length; j++){							
												
												isicGroup[j] = oResponse.data.results[j].IsicGroup;
												
												uniqueISISCGroupArray = isicGroup.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
												
												
												
											}
											//var uniqueISISCGroupArray = [];
											/*for(var j=0; j < oResponse.data.results.length; j++){							
												
												isicGroup[j] = oResponse.data.results[j].IsicGroup;
												
												uniqueISISCGroupArray = isicGroup.filter(function(item, i, ar){ return ar.indexOf(item) === i; });						
																		
											}*/
											this.oLILIGroupComboBox.setSelectedKeys(uniqueISISCGroupArray);
											
											var oTempGroupTextViewText = "";
										    for(var i = 0 ; i < this.oLILIGroupComboBox.getSelectedKeys().length; i++){
										    	if(i < 3){
										    	oTempGroupTextViewText += (i+1)+". "+this.oLILIGroupComboBox.getSelectedItems()[i].getText()+"\n";
										    	}
										    }
										    this.oGroupMultiSelectionTextView.setText(oTempGroupTextViewText);
											
										    //read Class	

										    var oRequestFinishedDeferredLILIClass = that.oModelHelper.readLILIClass(that.oLILISectionComboBox.getSelectedKey(),that.oLILIDivisionComboBox.getSelectedKey(), that.oLILIGroupComboBox.getSelectedKeys());

											jQuery.when(oRequestFinishedDeferredLILIClass).then(jQuery.proxy(function(oReadClassResponse) {

												
												that.oLILIClassMultiComboBox.setModel(oReadClassResponse);
												if(that.oISICLoaded || this.oLILIBusinessTypeComboBox.getSelectedKey() === "N"){
												that.oLILIClassMultiComboBox.removeSelectedKeys(that.oLILIClassMultiComboBox.getSelectedKeys());
												}
												var uniqueIsicClassArray = [];
												for(var k=0; k < oResponse.data.results.length; k++){							
													
						                            IsicClass[k] = oResponse.data.results[k].IsicClass;
													
													uniqueIsicClassArray = IsicClass.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
													
													
													
												}
												this.oLILIClassMultiComboBox.setSelectedKeys(uniqueIsicClassArray);
												this.oLILIClassMultiComboBox.fireSelectionChange();
												
												var oTempClassTextViewText = "";
											    for(var i = 0 ; i < this.oLILIClassMultiComboBox.getSelectedKeys().length; i++){
											    	if(i < 3){
											    	oTempClassTextViewText += (i+1)+". "+this.oLILIClassMultiComboBox.getSelectedItems()[i].getText()+"\n";
											    	}
											    }
											    this.oClassMultiSelectionTextView.setText(oTempClassTextViewText);
											    
												
												//read License Activity
												var oRequestFinishedDeferredLILILicenseActivity = that.oModelHelper.readLILILicenseActivity(that.oLILISectionComboBox.getSelectedKey(),that.oLILIDivisionComboBox.getSelectedKey(), that.oLILIGroupComboBox.getSelectedKeys(), that.oLILIClassMultiComboBox.getSelectedKeys());

												jQuery.when(oRequestFinishedDeferredLILILicenseActivity).then(jQuery.proxy(function(oLicenseActivityResponse) {													
													that.oLILILicenseActivityMultiComboBox.setModel(oLicenseActivityResponse);
													var uniqueIsicLicenseActivityArray;
													 for(var l=0; l < oResponse.data.results.length; l++){
														   
						                                    IsicLicenseActivity[l] = oResponse.data.results[l].Act;
															
															uniqueIsicLicenseActivityArray = IsicLicenseActivity.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
															//console.log(uniqueIsicLicenseActivityArray);
															
															

													 }
													 
													  setTimeout(function(){ 	
															 that.oLILILicenseActivityMultiComboBox.setSelectedKeys(uniqueIsicLicenseActivityArray);
															 that.oLILILicenseActivityMultiComboBox.fireSelectionChange();
														 }, 4000);													
													 
														
													 //console.log(IsicLicenseActivity);
													 
													    var oTempLATextViewText = "";
													    for(var i = 0 ; i < that.oLILILicenseActivityMultiComboBox.getSelectedKeys().length; i++){
													    	if(i < 3){
													    	oTempLATextViewText += (i+1)+". "+that.oLILILicenseActivityMultiComboBox.getSelectedItems()[i].getText()+"\n";
													    	}
													    }
													    that.oLAMultiSelectionTextView.setText(oTempLATextViewText);
													    
													 
														//set License Type and Activity Description

													 
													 for(var l=0; l < oResponse.data.results.length; l++){
															that.oLILIActivityDescriptionTextArea.setValue(oResponse.data.results[0].ActDesc);
															var oLanguage;
															if(this.oLanguageSelect.getSelectedKey() === "EN")
															{
																oLanguage="E";
															}else{
																oLanguage="A";
															}
															
															var message = [];
															messageString = oResponse.data.results[0].Activity.split(" ");
															message.push(messageString.shift());    
															message.push(messageString.join(' ')); 
															
															if(oLanguage === "E"){
																message = message[0];
															}else{
																message = message[1];
															}
															
															this.oLicenseTypeInputText.setValue(oResponse.data.results[0].Activity);
															
															//this.oLicenseTypeInputText.setValue(oResponse.data.results[0].Activity);	
															
													 }
													 
													 
													 this.oBusinessTypeSurveyID = this.oLILIBusinessTypeComboBox.getValue();
													 that.oSurveyID = that.oBusinessTypeSurveyID;
													 
														that.oISICLoaded = true;

														//that.closeBusyDialog();

													
												}, that));												
												//that.closeBusyDialog();
											}, that));											
										}, that));										
								}, that));
							}
							
							
							
						/*	for(var j=0; j < oResponse.data.results.length; j++){							
								
								isicGroup[j] = oResponse.data.results[j].IsicGroup;
								
								var uniqueISISCGroupArray = isicGroup.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
								
								this.oLILIGroupComboBox.setSelectedKeys(uniqueISISCGroupArray);
								
							}*/
							
	                         /*for(var k=0; k < oResponse.data.results.length; k++){							
								
	                            IsicClass[k] = oResponse.data.results[k].IsicClass;
								
								var uniqueIsicClassArray = IsicClass.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
								
								this.oLILIClassMultiComboBox.setSelectedKeys(uniqueIsicClassArray);
								
							}*/
						}
						//this.oLILIGroupComboBox.setSelectedKeys(uniqueISISCGroupArray);
						
						//this.oLILIGroupComboBox.fireSelectionChange();
						//this.oLILIClassMultiComboBox.fireSelectionChange();
						that = this;
						 /*(function myLoop (i) {          
							   setTimeout(function () { 
								   
								   for(var l=0; l < oResponse.data.results.length; l++){
									   
                                    IsicLicenseActivity[l] = oResponse.data.results[l].Act;
									
									var uniqueIsicLicenseActivityArray = IsicLicenseActivity.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
									
									that.oLILILicenseActivityMultiComboBox.setSelectedKeys(uniqueIsicLicenseActivityArray);
									
									that.oLILIActivityDescriptionTextArea.setValue(oResponse.data.results[0].ActDesc);
									
								   }
							   }, 5000)
						  })(howManyTimes);*/
						 
							
						}
							
					}		
					
					
				}, this));
			
	    } 
		
		
	},
	
	handlePreviewLicenseInfoTabStripSelect : function(oControlEvent){
		
		    if(this.oLILIBusinessTypeComboBox.getSelectedKey() === "N"){
			
			   if(this.oLILISectionComboBox.getSelectedKey() === ""){
				    // this.oValidationLILIStatus = false;
				     this.handleLicenseButtonClick();
						this.oLicenseInfoTab.setSelectedIndex(1);
					 
					 this.oLILISectionComboBox.setValueState("Error");
					 this.oLILISectionComboBox.setShowValueStateMessage(false);
					
					 if(!this.oShowAlertDialog.isOpen())
					 {
						this.oAlertTextView.setText(this.oModelHelper.getText("AllLIFieldsMandatory"));
						this.oShowAlertDialog.open();
					 }
			   }else if(this.oLILIDivisionComboBox.getSelectedKey() === ""){
				   // this.oValidationLILIStatus = false;
				    this.handleLicenseButtonClick();
					this.oLicenseInfoTab.setSelectedIndex(1);
					 
					 this.oLILIDivisionComboBox.setValueState("Error");
					 this.oLILIDivisionComboBox.setShowValueStateMessage(false);
					
					 if(!this.oShowAlertDialog.isOpen())
					 {
						this.oAlertTextView.setText(this.oModelHelper.getText("AllLIFieldsMandatory"));
						this.oShowAlertDialog.open();
					 }
			   }else if(this.oLILIGroupComboBox.getSelectedKeys().filter(Boolean).length === 0){
				   // this.oValidationLILIStatus = false;
				    this.handleLicenseButtonClick();
					this.oLicenseInfoTab.setSelectedIndex(1);
					 
					 this.oLILIGroupComboBox.setValueState("Error");
					 this.oLILIGroupComboBox.setShowValueStateMessage(false);
					
					 if(!this.oShowAlertDialog.isOpen())
					 {
						this.oAlertTextView.setText(this.oModelHelper.getText("AllLIFieldsMandatory"));
						this.oShowAlertDialog.open();
					 }
			   }else if(this.oLILIClassMultiComboBox.getSelectedKeys().filter(Boolean).length === 0){
				   // this.oValidationLILIStatus = false;
				    this.handleLicenseButtonClick();
					this.oLicenseInfoTab.setSelectedIndex(1);
					 
					 this.oLILIClassMultiComboBox.setValueState("Error");
					 this.oLILIClassMultiComboBox.setShowValueStateMessage(false);
					
					 if(!this.oShowAlertDialog.isOpen())
					 {
						this.oAlertTextView.setText(this.oModelHelper.getText("AllLIFieldsMandatory"));
						this.oShowAlertDialog.open();
					 }
			   }else if(this.oLILILicenseActivityMultiComboBox.getSelectedKeys().filter(Boolean).length === 0){
				  //  this.oValidationLILIStatus = false;
				    this.handleLicenseButtonClick();
					this.oLicenseInfoTab.setSelectedIndex(1);
					 
					 this.oLILILicenseActivityMultiComboBox.setValueState("Error");
					 this.oLILILicenseActivityMultiComboBox.setShowValueStateMessage(false);
					
					 if(!this.oShowAlertDialog.isOpen())
					 {
						this.oAlertTextView.setText(this.oModelHelper.getText("AllLIFieldsMandatory"));
						this.oShowAlertDialog.open();
					 }
			   }else{
				   this.someWork();
			   }
		    }else{
		    	this.someWork();
		    }
			   
		
	},
	someWork : function(){
		try{
			
		
		//console.log(oControlEvent.getParameters().index);
		that = this;
		//if(!this.PreviewBeenFired)
	    //{		    
     		this.oLicenceInfoPreviewContentVBox = this.getView().byId("idLicenceInfoPreviewContentVBox");
     		this.oLicenceInfoPreviewContentVBox.setVisible(true);

			this.oPLILIBusinessType = this.getView().byId("idPLILIBusinessType");
			if(this.oLILIBusinessTypeComboBox.getSelectedKey() !== ""){
				this.oPLILIBusinessType.setText(this.oLILIBusinessTypeComboBox.getSelectedItem().getText());
				
				this.oPLILILicenseTypeTextView = this.getView().byId("idPLILILicenseTypeTextView");
				
				var oLanguage;
				if(this.oLanguageSelect.getSelectedKey() === "EN")
				{
					oLanguage="E";
				}else{
					oLanguage="A";
				}
				
				var message = [];
				messageString = this.oLicenseTypeInputText.getValue().split(" ");
				message.push(messageString.shift());    
				message.push(messageString.join(' ')); 
    			
    			if(oLanguage === "E"){
    				message = message[0];
    			}else{
    				message = message[1];
    			}
    			
    			this.oPLILILicenseTypeTextView.setText(message);
    			
    			
				//this.oPLILILicenseTypeTextView.setText(this.oLicenseTypeInputText.getValue());
				
				if(this.oLILIBusinessTypeComboBox.getSelectedKey() !== "N" && this.oLicenseTypeInputText.getValue() !== ""){
		     		this.oLicenceInfoPreviewContentVBox.setVisible(false);
		     		if(this.oPreviewLicenseInfoMAtrixLayout){
		     			this.oPreviewLicenseInfoMAtrixLayout.setVisible(false);		     			
		     		}
		     		
				}else{
					
					if(!this.previewLILIViewsCreated)
						{
							this.previewLILIViewsCreated = true;
							this.oPreviewLicenseInfoMAtrixLayout = this.getView().byId("idPreviewLicenseInfoMAtrixLayout");
						    
						    
						    this.oClonedLILISectionComboBox = this.oLILISectionComboBox.clone();
						    this.oClonedLILISectionComboBox.setSelectedKey( this.oLILISectionComboBox.getSelectedKey());
						    this.oClonedLILISectionComboBox.setEnabled(false);
						    
						    this.oLILIPreviewSectionTextView = new sap.ui.commons.TextView({/*enabled : false*/});
						    this.oLILIPreviewSectionTextView.setWidth("100%");
						    this.oLILIPreviewSectionTextView.setText(this.oLILISectionComboBox.getSelectedItem().getText());
						    
						    this.oClonedLILIDivisionComboBox = this.oLILIDivisionComboBox.clone();
						    this.oClonedLILIDivisionComboBox.setSelectedKey( this.oLILIDivisionComboBox.getSelectedKey());
						    this.oClonedLILIDivisionComboBox.setEnabled(false);
						    
						    this.oLILIPreviewDivisionTextView = new sap.ui.commons.TextView({/*enabled : false*/});
						    this.oLILIPreviewDivisionTextView.setWidth("100%");
						    if(this.oLILIDivisionComboBox.getSelectedKey() !== ""){
						    	this.oLILIPreviewDivisionTextView.setText(this.oLILIDivisionComboBox.getSelectedItem().getText());							 
							 }else{
								 this.oLILIPreviewDivisionTextView.setText("");
							 }
						    
						    
						    
						    
						    this.oClonedLILIGroupComboBox = this.oLILIGroupComboBox.clone();
						    /*this.oClonedLILIGroupComboBox.setSelectedKeys( this.oLILIGroupComboBox.getSelectedKeys());
						    this.oClonedLILIGroupComboBox.setEnabled(false);*/		    
						    
						    var oTempPreviewGroupTextView = "";
						    for(var i = 0 ; i < this.oClonedLILIGroupComboBox.getSelectedKeys().length; i++){
						    	if(i < 3){
						    	oTempPreviewGroupTextView += (i+1)+". "+this.oLILIGroupComboBox.getSelectedItems()[i].getText()+"\n";
						    	}
						    }
						    this.oLILIPreviewGroupTextView = new sap.ui.commons.TextView({/*enabled : false*/});
						    this.oLILIPreviewGroupTextView.setWidth("100%");
						    this.oLILIPreviewGroupTextView.setText(oTempPreviewGroupTextView);
						    
						    this.oClonedLILIClassMultiComboBox = this.oLILIClassMultiComboBox.clone();
						    /*this.oClonedLILIClassMultiComboBox.setSelectedKeys( this.oLILIClassMultiComboBox.getSelectedKeys());
						    this.oClonedLILIClassMultiComboBox.setEnabled(false);*/
						    var oTempPreviewClassTextViewText = "";
						    for(var i = 0 ; i < this.oClonedLILIClassMultiComboBox.getSelectedKeys().length; i++){
						    	if(i < 3){
						    	oTempPreviewClassTextViewText += (i+1)+". "+this.oLILIClassMultiComboBox.getSelectedItems()[i].getText()+"\n";
						    	}
						    }
						    this.oLILIPreviewClassTextView = new sap.ui.commons.TextView({/*enabled : false*/});
						    this.oLILIPreviewClassTextView.setWidth("100%");
						    this.oLILIPreviewClassTextView.setText(oTempPreviewClassTextViewText);
						    
						    /*this.oClonedLILILicenseActivityMultiComboBox = this.oLILILicenseActivityMultiComboBox.clone();
						    this.oClonedLILILicenseActivityMultiComboBox.setSelectedKeys( this.oLILILicenseActivityMultiComboBox.getSelectedKeys());
						    this.oClonedLILILicenseActivityMultiComboBox.setEnabled(false);*/
						    this.oClonedLILILicenseActivityMultiComboBox = this.oLILILicenseActivityMultiComboBox.clone();
						    /*this.oClonedLILIClassMultiComboBox.setSelectedKeys( this.oLILIClassMultiComboBox.getSelectedKeys());
						    this.oClonedLILIClassMultiComboBox.setEnabled(false);*/
						    var oTempPreviewLATextViewText = "";
						    for(var i = 0 ; i < this.oClonedLILILicenseActivityMultiComboBox.getSelectedKeys().length; i++){
						    	if(i < 3){
						    	oTempPreviewLATextViewText += (i+1)+". "+this.oLILILicenseActivityMultiComboBox.getSelectedItems()[i].getText()+"\n";
						    	}
						    }
						    this.oLILIPreviewLATextView = new sap.ui.commons.TextView({/*enabled : false*/});
						    this.oLILIPreviewLATextView.setWidth("100%");
						    this.oLILIPreviewLATextView.setText(oTempPreviewLATextViewText);
						 
						    
						    this.oLILILicenseActivityDescTextViewContent = new sap.ui.commons.TextView({/*enabled : false*/});
						    this.oLILILicenseActivityDescTextViewContent.setWidth("100%");
						    this.oLILILicenseActivityDescTextViewContent.setText(oTempPreviewLATextViewText);//this.oLILIActivityDescriptionTextArea.getValue());
						    
						    var oLILISectionTextView = new sap.ui.commons.TextView({
								text : this.oModelHelper.getText("Section")
								});
						    
						    var oLILIDivisionTextView = new sap.ui.commons.TextView({
								text : this.oModelHelper.getText("Division")
								});
						    
						    var oLILIGroupTextView = new sap.ui.commons.TextView({
								text : this.oModelHelper.getText("Group")
								});
						    var oLILIClassTextView = new sap.ui.commons.TextView({
								text : this.oModelHelper.getText("Class")
								});
						    
						    var oLILILicenseActivityTextView = new sap.ui.commons.TextView({
								text : this.oModelHelper.getText("LicenseActivity")
								});
						    var oLILILicenseActivityDescTextView = new sap.ui.commons.TextView({
								text : this.oModelHelper.getText("ActivityDescription")
								});
						    var oEmptyCell = new sap.ui.commons.layout.MatrixLayoutCell();
						    var oEmptyTextView = new sap.ui.commons.TextView({text : "X"});
						    oEmptyCell.addContent(oEmptyTextView);
						    
						    var oRow0 = new sap.ui.commons.layout.MatrixLayoutRow();
						    
						    
						    var oCell0 = new sap.ui.commons.layout.MatrixLayoutCell();
						    oCell0.setHAlign("End");						    
							oCell0.addContent(oLILISectionTextView.addStyleClass("paddingRight"));
							
							var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell();
							//oCell1.addContent(this.oClonedLILISectionComboBox);
							
							oCell1.addContent(this.oLILIPreviewSectionTextView);
							//oCell1.addContent(new sap.ui.core.HTML({content : "<html:span>&#160;</html:span>"}));
							
							oRow0.addCell(oCell0);
							//oRow0.addCell(oEmptyCell);
							//oRow0.addCell(oEmptyCell);
							oRow0.addCell(oCell1);	
							
							this.oPreviewLicenseInfoMAtrixLayout.addRow(oRow0);
							this.oPreviewLicenseInfoMAtrixLayout.createRow();
		
						    var oRow1 = new sap.ui.commons.layout.MatrixLayoutRow();
						    
							var oCell2 = new sap.ui.commons.layout.MatrixLayoutCell();
							oCell2.setHAlign("End");
							oCell2.addContent(oLILIDivisionTextView.addStyleClass("paddingRight"));
							
							var oCell3 = new sap.ui.commons.layout.MatrixLayoutCell();
							//oCell3.addContent(this.oClonedLILIDivisionComboBox);
							oCell3.addContent(this.oLILIPreviewDivisionTextView);
							
							oRow1.insertCell(oCell2, 0);
							//oRow1.addCell(oEmptyCell);
							//oRow1.insertCell(oEmptyCell, 1);
							oRow1.insertCell(oCell3, 2);			
							this.oPreviewLicenseInfoMAtrixLayout.addRow(oRow1);
							this.oPreviewLicenseInfoMAtrixLayout.createRow();
							
	                        var oRow2 = new sap.ui.commons.layout.MatrixLayoutRow();
						    
							var oCell4 = new sap.ui.commons.layout.MatrixLayoutCell();
							oCell4.setHAlign("End");
							oCell4.setVAlign("Top");
							oCell4.addContent(oLILIGroupTextView.addStyleClass("paddingRight"));
							
							var oCell5 = new sap.ui.commons.layout.MatrixLayoutCell();
							//oCell5.addContent(this.oClonedLILIGroupComboBox);
							oCell5.addContent(this.oLILIPreviewGroupTextView);
							
							
							//oRow2.addCell(oEmptyCell);
							
							oRow2.insertCell(oCell4, 0);	
							//oRow2.insertCell(oEmptyCell,1);
							oRow2.insertCell(oCell5, 2);
							
							this.oPreviewLicenseInfoMAtrixLayout.addRow(oRow2);
							this.oPreviewLicenseInfoMAtrixLayout.createRow();
							
	                        var oRow3 = new sap.ui.commons.layout.MatrixLayoutRow();
						    
							var oCell6 = new sap.ui.commons.layout.MatrixLayoutCell();
							oCell6.setHAlign("End");
							oCell6.setVAlign("Top");
							oCell6.addContent(oLILIClassTextView.addStyleClass("paddingRight"));
							
							var oCell7 = new sap.ui.commons.layout.MatrixLayoutCell();
							oCell7.addContent(this.oLILIPreviewClassTextView);
							//oCell7.addContent(this.oClonedLILIClassMultiComboBox);
							
							oRow3.insertCell(oCell6, 0);
							//oRow3.addCell(oEmptyCell);
							//oRow3.insertCell(oEmptyCell, 1);
							oRow3.insertCell(oCell7, 2);			
							this.oPreviewLicenseInfoMAtrixLayout.addRow(oRow3);
							this.oPreviewLicenseInfoMAtrixLayout.createRow();
							
	                        var oRow4 = new sap.ui.commons.layout.MatrixLayoutRow();
						    
							var oCell8 = new sap.ui.commons.layout.MatrixLayoutCell();
							oCell8.setHAlign("End");
							oCell8.setVAlign("Top");
							oCell8.addContent(oLILILicenseActivityTextView.addStyleClass("paddingRight"));
							
							var oCell9 = new sap.ui.commons.layout.MatrixLayoutCell();
							oCell9.addContent(this.oLILIPreviewLATextView);
							
							oRow4.insertCell(oCell8, 0);
							//oRow4.addCell(oEmptyCell);
							//oRow4.insertCell(oEmptyCell, 1);
							oRow4.insertCell(oCell9, 2);			
							this.oPreviewLicenseInfoMAtrixLayout.addRow(oRow4);
							this.oPreviewLicenseInfoMAtrixLayout.createRow();
							
	                        var oRow5 = new sap.ui.commons.layout.MatrixLayoutRow();
						    
							var oCell10 = new sap.ui.commons.layout.MatrixLayoutCell();
							oCell10.setHAlign("End");
							oCell10.setVAlign("Top");
							oCell10.addContent(oLILILicenseActivityDescTextView.addStyleClass("paddingRight"));
							
							var oCell11 = new sap.ui.commons.layout.MatrixLayoutCell();
							oCell11.addContent(this.oLILILicenseActivityDescTextViewContent);
							
							oRow5.insertCell(oCell10, 0);
							//oRow5.addCell(oEmptyCell);
							//oRow5.insertCell(oEmptyCell, 1);
							oRow5.insertCell(oCell11, 2);			
							this.oPreviewLicenseInfoMAtrixLayout.addRow(oRow5);
							this.oPreviewLicenseInfoMAtrixLayout.createRow();
							
							
							/*if(this.oLILIProductsTable.getVisible()){
								
									
								this.oPreviewLILIPreviewProductsTable = this.getView().byId("idLILIPreviewProductsTable");
								this.oPreviewLILIPreviewProductsTable.unbindItems();		
								this.oPreviewLILIPreviewProductsTable.setModel(this.oLILIProductsTableJSONData);							         		
								this.oPreviewLILIPreviewProductsTable.bindItems("/ProductsCollection", new sap.m.ColumnListItem({
									cells : [ new sap.ui.commons.TextView({
						    	          text : "{productcode}", enabled : false
						    	        }),new sap.ui.commons.TextView({
						    	          text : "{product}", enabled : false
						    	        }),  new sap.ui.commons.TextView({
						    	          text : "{quantity}", enabled : false
						    	        }),  new sap.ui.commons.TextView({
						    	          text : "{uom}", enabled : false
						    	        })]
						    	      }));									
								}*/
							
							
						}else{
						    //this.oClonedLILISectionComboBox.setSelectedKey( this.oLILISectionComboBox.getSelectedKey());
						    //this.oClonedLILIDivisionComboBox.setSelectedKey( this.oLILIDivisionComboBox.getSelectedKey());
						    //this.oClonedLILIGroupComboBox.setSelectedKeys( this.oLILIGroupComboBox.getSelectedKeys());
							 this.oLILIPreviewSectionTextView.setText("");
							 this.oLILIPreviewDivisionTextView.setText("");
							 this.oLILIPreviewGroupTextView.setText("");
							 this.oLILIPreviewClassTextView.setText("");
							 this.oLILIPreviewLATextView.setText("");
							 this.oLILILicenseActivityDescTextViewContent.setText("");

 
							if(this.oLILISectionComboBox.getSelectedKey() !== ""){
								 this.oLILIPreviewSectionTextView.setText(this.oLILISectionComboBox.getSelectedItem().getText());							 
							 }else{
								 this.oLILIPreviewSectionTextView.setText("");
							 }
							 
							 if(this.oLILIDivisionComboBox.getSelectedKey() !== ""){
								 this.oLILIPreviewDivisionTextView.setText(this.oLILIDivisionComboBox.getSelectedItem().getText());							 
							 }else{
								 this.oLILIPreviewDivisionTextView.setText("");
							 }
							 
							 
							    
						    var oTempPreviewGroupTextView = "";
						    for(var i = 0 ; i < this.oLILIGroupComboBox.getSelectedKeys().length; i++){
						    	if(i < 3){
						    	oTempPreviewGroupTextView += (i+1)+". "+this.oLILIGroupComboBox.getSelectedItems()[i].getText()+"\n";
						    	}
						    }
						    this.oLILIPreviewGroupTextView.setText(oTempPreviewGroupTextView);
						    
						    //this.oClonedLILIClassMultiComboBox.setSelectedKeys( this.oLILIClassMultiComboBox.getSelectedKeys());
						    var oTempPreviewClassTextViewText = "";
						    for(var i = 0 ; i < this.oLILIClassMultiComboBox.getSelectedKeys().length; i++){
						    	if(i < 3){
						    	oTempPreviewClassTextViewText += (i+1)+". "+this.oLILIClassMultiComboBox.getSelectedItems()[i].getText()+"\n";
						    	}
						    }
						    this.oLILIPreviewClassTextView.setText(oTempPreviewClassTextViewText);
						    
						    //this.oClonedLILILicenseActivityMultiComboBox.setSelectedKeys( this.oLILILicenseActivityMultiComboBox.getSelectedKeys());
						    var oTempPreviewLATextViewText = "";
						    for(var i = 0 ; i < this.oLILILicenseActivityMultiComboBox.getSelectedKeys().length; i++){
						    	if(i < 3){
						    	oTempPreviewLATextViewText += (i+1)+". "+this.oLILILicenseActivityMultiComboBox.getSelectedItems()[i].getText()+"\n";
						    	}
						    }
						    this.oLILIPreviewLATextView.setText(oTempPreviewLATextViewText);
						    
						    this.oLILILicenseActivityDescTextViewContent.setText(oTempPreviewLATextViewText);//this.oLILIActivityDescriptionTextArea.getValue());

						}
					
				}
			}
		
			if(!this.oShareHolderNewShareHolderFragment){
				if(!this.oShowAlertDialog.isOpen())
				{
				this.oAlertTextView.setText(this.oModelHelper.getText("ReviewPreviewShareHolderDetails"));
				this.oShowAlertDialog.open();
				
				}
				this.handleShareholderInfoButtonClick();
			}
			
			if(this.oLILIProductsTable.getVisible()){				
				
				this.oPreviewLILIPreviewProductsTable.unbindItems();		
				this.oPreviewLILIPreviewProductsTable.setModel(this.oLILIProductsTableJSONData);							         		
				this.oPreviewLILIPreviewProductsTable.bindItems("/ProductsCollection", new sap.m.ColumnListItem({
					cells : [ new sap.ui.commons.TextView({
		    	          text : "{productcode}"//, enabled : false
		    	        }),new sap.ui.commons.TextView({
		    	          text : "{product}"//, enabled : false
		    	        }),  new sap.ui.commons.TextView({
		    	          text : "{quantity}"//, enabled : false
		    	        }),  new sap.ui.commons.TextView({
		    	          text : "{uom}"//, enabled : false
		    	        })]
		    	      }));									
			}else{
				this.oPreviewLILIPreviewProductsTable.unbindItems();
			}
		}catch(error){
			this.closeBusyDialog();
		}

	},
	getPreviewBAQ : function(oLanguage){
		if(this.oLanguageSelect.getSelectedKey() === "EN")
		{
			oLanguage="E";
		}else{
			oLanguage="A";
		}
		if(!this.oBAQPreviewMatrixLayout){
		this.openBusyDialog();
		that = this;
		//console.log("1");
		var oRequestFinishedDeferred = this.oModelHelper.readBAQ(oLanguage);

		jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
			//console.log("2");
			var questions = [];
			var nodeID = [];
			var surveyID = [];
			var answers = [];
			var unitsBAQ = [];
			var attachmentFlag = [];

			this.oBAQPreviewMatrixLayout = this.getView().byId("idPreview_LI_BAQ_1_to_6MAtrixLayout");
			this.oPreviewBAQbusyIndicator = this.getView().byId("idPreviewBAQbusyIndicator");
			
			
			this.oTotalBAQQuestions = 0;
			
			var oResponseFilter = [];
			
			if(oResponse.data.results === undefined){
				oResponseFilter = oResponse.data.__batchResponses[0].data.results;
			}else{
				oResponseFilter = oResponse.data.results;
			}
			
			for(var i=0; i < oResponseFilter.length; i++){
				questions[i] = oResponseFilter[i].Qtxtlg;
				nodeID[i] = oResponseFilter[i].NodeGuid;
				surveyID[i] = oResponseFilter[i].SurveyID;
				unitsBAQ[i] = oResponse.data.results[i].Units;
				attachmentFlag[i] = oResponse.data.results[i].Attachment;

			}
			
			j = 0 ;
			for(var i=0; i < questions.length; i++){
				
				var oRequestFinishedDeferred = this.oModelHelper.readBAQAnswer(oResponseFilter[i].NodeGuid, "QUEEMAH_BUS_PLAN", oLanguage);

				jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
					//console.log(j);
					//console.log(this.oTotalBAQQuestions);
					if(j === (i-1)){
						this.oPreviewBAQbusyIndicator.setVisible(false);
					}
					
					if(oResponse.data.results === undefined){
						oResponseAnswersFilter = oResponse.data.__batchResponses[0].data.results;
					}else{
						oResponseAnswersFilter = oResponse.data.results;
					}
					answers.push(oResponseAnswersFilter);
					
					j++;
	                
					if(j === questions.length){
						
						k = 0;
						for(var l=0; l < questions.length; l++){
							
							var oTextView = new sap.ui.commons.TextView("idPBAQuestion"+l,{
								text : questions[l],
								//enabled : false
								});
							var oBAQUnitsTextView = new sap.ui.commons.TextView("idPBAQuestionUnits"+l,{
								text : unitsBAQ[l],
								enabled : false
								});
							var oSelect = new sap.m.ComboBox("idPBAQAnswer"+l, {enabled : false});
							oSelect.setWidth("8rem");

							var oFileUploader = new sap.ui.unified.FileUploader("idPBAQFileUploader"+l,{
								sendXHR : true,
								useMultipart : false,
								sameFilenameAllowed : true,
								mimeType : "application/pdf",
								enabled : false
							});
							
							/*iconOnly : true,
							icon : "common/mime/attachment.png",*/


							
							
							for(var m=0; m < answers.length; m++){								
							
								for(var t=0; t < answers[m].length; t++){
									
									if(nodeID[k] === answers[m][t].NodeGuid){
									
										var vItem = new sap.ui.core.Item();		    				
					    				
										vItem.setText(answers[m][t].Atxtlg);						
										vItem.setKey(answers[m][t].Atxtlg);
										oSelect.addItem(vItem);
									}
								}
								
							}k++;
							
							oTextView.data("idBAQuestion"+l,nodeID[l]);
							
							
							//this.oBAQPreviewMatrixLayout.createRow( oTextView );
							//this.oBAQPreviewMatrixLayout.createRow( oSelect );
							//this.oBAQPreviewMatrixLayout.createRow( oFileUploader );
							
							

							oSelect.setSelectedKey(sap.ui.getCore().byId("idBAQAnswer"+l).getSelectedKey());
							
                            var oRow0 = new sap.ui.commons.layout.MatrixLayoutRow();
							
							var oCell0 = new sap.ui.commons.layout.MatrixLayoutCell();
							oCell0.setColSpan(4);
							oCell0.addContent(oTextView);
							oRow0.addCell(oCell0);							
							this.oBAQPreviewMatrixLayout.addRow(oRow0);

							
							var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
							
							var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell();
							oCell1.addContent(oSelect);
							
							var oCell2 = new sap.ui.commons.layout.MatrixLayoutCell();
							oCell2.addContent(oBAQUnitsTextView);							
								
							oRow.addCell(oCell1);
							oRow.addCell(oCell2);
							
							this.oBAQPreviewMatrixLayout.addRow(oRow);
							
							if(attachmentFlag[l] === "X"){
								
								var oTextViewAttachment = new sap.ui.commons.TextView("idPBAQAttachment"+nodeID[l]);

								oFileUploader.data("idPBAQFileUploader"+l,nodeID[l]);	
								
								var oRow2 = new sap.ui.commons.layout.MatrixLayoutRow();

								var oCell3 = new sap.ui.commons.layout.MatrixLayoutCell();
								oCell3.setColSpan(2);
								oCell3.addContent(oFileUploader);
								oRow2.addCell(oCell3);							
								this.oBAQPreviewMatrixLayout.addRow(oRow2);
								this.oBAQPreviewMatrixLayout.createRow( oTextViewAttachment );
								
							}
							this.oTotalBAQQuestions++;
						}			
						
						that.closeBusyDialog();		    				
					}
				}, this));				
				
			}			
			
		}, this));	
		}else{
			for(i=0; i< this.oTotalBAQQuestions; i++){
				sap.ui.getCore().byId("idPBAQAnswer"+i).setSelectedKey(sap.ui.getCore().byId("idBAQAnswer"+i).getSelectedKey());
			}
			
		}
		
	},
	/**
	 * Open busy dialog
	 */
	openBusyDialog : function() {

		if (!this._busyDialog) {
			this._busyDialog = new sap.ui.xmlfragment("idBusydialogOverViewController",
					"com.sagia.view.fragments.busydialog",  this.getView()
					.getController());
			this.getView().addDependent(this._busyDialog);
			
			
		}
		//this.oBusyDialogUI = sap.ui.getCore().byId("idBusyDialogUI");
		
		this._busyDialog.open();
	},

	/**
	 * Close busy dialog
	 */
	closeBusyDialog : function() {
		this._busyDialog.close();

	},
	handleLanguageSelectionChange : function(){
		
		if(this.oLanguageSelect.getSelectedKey() === "EN"){
			var i18nModel =	com.sagia.common.ModelHelper.getI18nModel("i18n/messageBundle.properties","en");
			this.getView().setModel(i18nModel, "i18n");
			sap.ui.getCore().getConfiguration().setLanguage("en");
		}else{
			
			var i18nModel =	com.sagia.common.ModelHelper.getI18nModel("i18n/messageBundle.properties","ar");
			this.getView().setModel(i18nModel, "i18n");
			sap.ui.getCore().getConfiguration().setLanguage("ar");
			//console.log(this.oLanguageSelect.getSelectedKey());
			

		}
	},

	handleSaveLinkPress : function(oLanguage){
		
		
				
		/*var oRequestFinishedDeferred = this.oModelHelper.readCountry(oLanguage);

		jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
			
			var arr = [];
			for(var i = 0; i < oResponse.oData.DetailsCollection.length ; i++){
				if(oResponse.oData.DetailsCollection[i].Bezei_reg !== "")
				{//console.log(oResponse.oData.DetailsCollection[i].Bezei_reg);}
					arr.push(oResponse.oData.DetailsCollection[i].Bezei_reg);
					
				}
				
				
			}
			
			this.getView().setModel(oResponse);
			
			this.getView().setModel(oResponse,"CC");
			
		}, this));*/	
		
		var oRequestFinishedDeferredLILI = this.oModelHelper.readLILISection();

		jQuery.when(oRequestFinishedDeferredLILI).then(jQuery.proxy(function(oResponse) {			
			this.oLILISectionComboBox.setModel(oResponse);
		}, this));	
		
		var oRequestFinishedDeferredLILIBusinessType = this.oModelHelper.readLILIBusinessType();

		jQuery.when(oRequestFinishedDeferredLILIBusinessType).then(jQuery.proxy(function(oResponse) {			
			this.oLILIBusinessTypeComboBox.setModel(oResponse);
		}, this));
			
		
		if(sap.ui.getCore().getConfiguration().getRTL()){
			
			this._oBasicInfoButton.setSrc("common/mime/basicinfo_hover_ar.png");
			this._oLicenseInfoButton.setSrc("common/mime/license_ar.png");
			this._oShareholderInfoButton.setSrc("common/mime/shareholder_ar.png");
			this._oPreviewInfoButton.setSrc("common/mime/preview_ar.png");
			this._oTermsInfoButton.setSrc("common/mime/terms_ar.png");
			this._oSubmitInfoButton.setSrc("common/mime/submit_ar.png");
		}
		
		
	},
	handleLogoutLinkPress : function(){		
		if(!this.ApplicationAlreadySubmitted){
			if(!this.oLogoutAlertDialog.isOpen())
			{
			this.oLogoutAlertDialog.open();		
			}		
		}else{
			location.reload(true);	
		}		
	},
	handleLogoutAlertYesDialogButtonPress : function(){
		try{
			$(window).unbind('beforeunload');
			
			this.oLogoutClicked = true ;
			this.oLogoutAlertDialog.close();
			this.openBusyDialog();
			//this.handleSaveLinkPressSave();
			this.oEverythingIsOk = true;
			
			
			if(!(/^[0-9.,]+$/.test( this.oBIOILaborSizeInputText.getValue() ))){
				 
				 this.oBIOILaborSizeInputText.setValueState("Error");
				 this.oBIOILaborSizeInputText.setShowValueStateMessage(false);

		  		 if(!this.oShowAlertDialog.isOpen())
				 {
					this.oAlertTextView.setText(this.oModelHelper.getText("BIOILaborSizeDigitOnly"));
					this.oShowAlertDialog.open();
				 }
		  		this.oEverythingIsOk = false;
		  		this.closeBusyDialog();
		  		 return;
					
		  	 }else if(!(/^[0-9.,]+$/.test( this.oBIOICapitalInputText.getValue() ))){			
								 
				 this.oBIOICapitalInputText.setValueState("Error");
				 this.oBIOICapitalInputText.setShowValueStateMessage(false);

		  		 if(!this.oShowAlertDialog.isOpen())
				 {
					this.oAlertTextView.setText(this.oModelHelper.getText("BIOICapitalDigitOnly"));
					this.oShowAlertDialog.open();
				 }
		  		this.oEverythingIsOk = false;
		  		this.closeBusyDialog();
		  		return;
					
		  	 }else{
		  		if(this.oBIOIvalidateworker.validateDataBIOI(this)){
					this.oBIOIvalidateworker.saveData(this, false);
				}else{
					this.oEverythingIsOk = false;
					this.closeBusyDialog();
					return;
				}
				
		  	 }
			
			
			
			if(this.oBICIvalidateworker.validateDataBICI(this)){
				this.oBICIvalidateworker.saveData(this, false);
			}else{
				this.oEverythingIsOk = false;
				this.closeBusyDialog();
				return;
			}
			this.oBAQvalidateworker.saveData(this, false);
			if(this.oISICvalidateworker.validateISICPresence(this)){
				if(!this.oProductsTableVBox.getVisible()){
					this.oModelHelper.deleteSavedIndustrialProducts(this.oRef_id);
				}
				this.oISICvalidateworker.saveData(this, false);
			}else{
				this.oEverythingIsOk = false;
				this.closeBusyDialog();
				return;
			}
			
			
			sap.m.MessageToast.show(this.oModelHelper.getText("ValidatingDataBeforeSaving"));
			var that = this;
			setTimeout(function(){ 	
				if(that.oEverythingIsOk){
					location.reload(true);
				}				
				that.closeBusyDialog();
			}, 15000);
			
		}catch(err){
			this.closeBusyDialog();
		}
		
		
		
	},
	handleLogoutAlertNoDialogButtonPress : function(){
		$(window).unbind('beforeunload');
		location.reload(true);	
	},
	handleLanguageChange : function(oControlEvent){
		
		//console.log(oControlEvent.getParameters('selectedItem').selectedItem.mProperties.key);		
		
		if(oControlEvent.getParameters('selectedItem').selectedItem.mProperties.key === "E"){
			var i18nModel =	com.sagia.common.ModelHelper.getI18nModel("i18n/messageBundle.properties","en");
			
			// set i18n model
			this.getView().setModel(i18nModel, "i18n");
		}else{
			var i18nModel =	com.sagia.common.ModelHelper.getI18nModel("i18n/messageBundle.properties","ar");
			
			// set i18n model
			this.getView().setModel(i18nModel, "i18n");
		}
		
	},
	handleEmailEntryLiveChange : function(){
		//var email = this._oEmailInputText.getValue();
		return this.handleEmailEntryValidation(this.oInputEmail.getValue());		
	},
	handleEmailEntryValidation : function(email){
		/*if(email.length>20){
			this._oRegEmailErrorMsg.setText(this.oModelHelper.getText("EmailMoreThan20Chars"));
			this._oRegEmailErrorMsg.setVisible(true);
			///^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/
		}else*/ if(!(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/.test( email ))){
			//console.log(email.length);
			///^(([^<>()[]\\.,;:\s@\"]+(\.[^<>()[]\\.,;:\s@\"]+)*)|(\".+\"))@(([[0-9]{1,3}\‌​.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			this._oRegEmailErrorMsg.setText(this.oModelHelper.getText("InvalidEmailFormat"));
			this._oRegEmailErrorMsg.setVisible(true);
            return false;
			/*if(email.length > 0){
			this._oRegEmailErrorMsg.setVisible(true);
			}else{
				this._oRegEmailErrorMsg.setVisible(false);
			}*/
		}else{
			this._oRegEmailErrorMsg.setVisible(false);
			return true;
		}
	},
	
	handleContactNumberEntryLiveChange : function(){
		//var mobile = this._oMobileNumberInputText.getValue();
		return this.handleContactNumberValidation(this.oContactNumber.getValue());		
	},
	handleContactNumberValidation : function(mobile){
		if(mobile.length>30){
			this._oRegMobileErrorMsg.setText(this.oModelHelper.getText("MobileMoreThan10Chars"));
			this._oRegMobileErrorMsg.setVisible(true);
			return false;
		}else if(!(/^\d*$/.test( mobile ))){
			this._oRegMobileErrorMsg.setText(this.oModelHelper.getText("MobileNumberCanContainOnlyDigits"));
			this._oRegMobileErrorMsg.setVisible(true);
			return false;
		}	
		else if(mobile.length === 0){
			this._oRegMobileErrorMsg.setText(this.oModelHelper.getText("MobileNumberCanContainOnlyDigits"));
			this._oRegMobileErrorMsg.setVisible(true);
			return false;
		}else{
			this._oRegMobileErrorMsg.setVisible(false);
			return true;
		}
	},
	
	/*handleRePasswordEntryLive : function(){
		var password = this._oRePasswordInputText.getValue();
		this.handleRePasswordValidation(password);		
	},
	handleRePasswordValidation : function(password){
		if(password.length>10){
			this._oRePasswordErrorMsg.setText(this.oModelHelper.getText("PasswordMoreThan10Chars"));
			this._oRePasswordErrorMsg.setVisible(true);
		}else if(this._oPasswordInputText.getValue() !== this._oRePasswordInputText.getValue()){
			console.log(this._oPasswordInputText.getValue()+" "+this._oRePasswordInputText.getValue());
			this._oRePasswordErrorMsg.setText(this.oModelHelper.getText("PasswordsNotMatched"));
			this._oRePasswordErrorMsg.setVisible(true);
		}		
		else{
			this._oRePasswordErrorMsg.setVisible(false);
		}
	},*/
	handlePasswordEntryLiveChange : function(){
		//var password = this._oPasswordInputText.getValue();
		return this.handlePasswordEntryValidation(this.oPassword.getValue());		
	},
	
	handlePasswordEntryValidation : function(password){
		if(password.length>10){
			this._oPasswordErrorMsg.setText(this.oModelHelper.getText("PasswordMoreThan10Chars"));
			this._oPasswordErrorMsg.setVisible(true);
			return false;
		}else if(password.length < 4){
			this._oPasswordErrorMsg.setText(this.oModelHelper.getText("PasswordMinLength"));
			this._oPasswordErrorMsg.setVisible(true);
			return false;
		}else{
			this._oPasswordErrorMsg.setVisible(false);
			return true;
		}
	},
	handleUserIDEntryLiveChange : function(){
		
		return this.handleUserIDEntryValidation(this.oUserID.getValue());		
	},
	
	handleUserIDEntryValidation : function(userID){
		if(userID.length>10){
			this.oUserIDErrorMsg.setText(this.oModelHelper.getText("UserIDLength"));
			this.oUserIDErrorMsg.setVisible(true);
			return false;
		}else if(userID.length<4){
			this.oUserIDErrorMsg.setText(this.oModelHelper.getText("UserIDMinLength"));
			this.oUserIDErrorMsg.setVisible(true);
			return false;
		}else{
			this.oUserIDErrorMsg.setVisible(false);
			return true;
		}
	},
	handleCompanyNameEntryLiveChange : function(){
		//var firstName = this._oFirstNameInputText.getValue();
		return this.handleCompanyNameValidation(this.oCompany.getValue());		
	},
	handleContactNameEntryLiveChange : function(){
		
		return this.handleContactNameValidation(this.oContactPersonName.getValue());		
	},
	handleContactNameValidation : function(name){
		if(name.length>40){
			this._oLastNameErrorMsg.setText(this.oModelHelper.getText("LastNameTextMoreThan40Chars"));
			this._oLastNameErrorMsg.setVisible(true);
			
			return false;
		}else if(/[^a-zA-Z\s]/.test( name )){
			this._oLastNameErrorMsg.setText(this.oModelHelper.getText("LastNameTextOnlyAlphabets"));
			this._oLastNameErrorMsg.setVisible(true);
			
			return false;
		}else if(name.length === 0){
			this._oLastNameErrorMsg.setText(this.oModelHelper.getText("LastNameTextOnlyAlphabets"));
			this._oLastNameErrorMsg.setVisible(true);
			
			return false;
		}else{
			this._oLastNameErrorMsg.setVisible(false);
			
			return true;
		}
	},
	handleCompanyNameValidation : function(name){
		if(name.length>40){
			this._oFirstNameErrorMsg.setText(this.oModelHelper.getText("FirstNameTextMoreThan40Chars"));
			this._oFirstNameErrorMsg.setVisible(true);
			
			return false;
		}else if(/[^a-zA-Z\s]/.test( name )){
			this._oFirstNameErrorMsg.setText(this.oModelHelper.getText("FirstNameTextOnlyAlphabets"));
			this._oFirstNameErrorMsg.setVisible(true);
			
			return false;
		}else if(name.length === 0){
			this._oFirstNameErrorMsg.setText(this.oModelHelper.getText("FirstNameTextOnlyAlphabets"));
			this._oFirstNameErrorMsg.setVisible(true);
			
			return false;
		}else{
			this._oFirstNameErrorMsg.setVisible(false);
			
			return true;

		}
	},
	handleReadTermsandConditionsPress : function(){
		//this.openBusyDialog();
		var that = this;
		/*setTimeout(function(){ 			
			that.closeBusyDialog();
		}, 10000);*/
		
		if (!this._popOverReadTermsAndConditionsFragment) {
			this._popOverReadTermsAndConditionsFragment = sap.ui.xmlfragment(
					"com.sagia.view.fragments.read_termsandconditions_pdf_dialog", this.getView()
							.getController());
			this.getView().addDependent(this._popOverReadTermsAndConditionsFragment);
		}		

		this._popOverReadTermsAndConditionsFragment.open();
	},
	handleReadTermsandConditionsPress_ClosePress : function(){
		this._popOverReadTermsAndConditionsFragment.close();
	},
	/**
	 * Preview Share holder financial answers Dialog
	 * @Author Abdul Waheed
	 */
	handlePreviewShareHolderFinancialAnswersButtonPress : function(){
		this._oPreviewFinancialAnswersVBox.setVisible(true);
		this._oPreviewOranizationInfoVBox.setVisible(false);

		this._oPreviewContactInfoVBox.setVisible(false);
		this._oPreviewBAAInfoVBox.setVisible(false);
		this._oPreviewLicenseInfoVBox.setVisible(false);
		this._oPreviewShareHolderDetailsVBox.setVisible(false);
		this._oPreviewAttachmentsVBox.setVisible(false);
		this._oPreviewActivityAnswersVBox.setVisible(false);
		this._oPreviewExperienceAnswersVBox.setVisible(false);
		
		/*if (!this._popOverPreviewShareHolderFinancialAnswersFragment) {
			this._popOverPreviewShareHolderFinancialAnswersFragment = sap.ui.xmlfragment(
					"com.sagia.view.fragments.preview_shareholderfinancialanswers_dialog", this.getView()
							.getController());
			this.getView().addDependent(this._popOverPreviewShareHolderFinancialAnswersFragment);
		}		

		this._popOverPreviewShareHolderFinancialAnswersFragment.open();*/
	},
	handlePreview_ShareHolderFinancialAnswers_ClosePress : function(){
		this._popOverPreviewShareHolderFinancialAnswersFragment.close();
	},
	/**
	 * Preview Share holder experience answers Dialog
	 * @Author Abdul Waheed
	 */
	handlePreviewShareHolderExperienceAnswersButtonPress : function(){
		this._oPreviewExperienceAnswersVBox.setVisible(true);
		this._oPreviewOranizationInfoVBox.setVisible(false);

		this._oPreviewContactInfoVBox.setVisible(false);
		this._oPreviewBAAInfoVBox.setVisible(false);
		this._oPreviewLicenseInfoVBox.setVisible(false);
		this._oPreviewShareHolderDetailsVBox.setVisible(false);
		this._oPreviewAttachmentsVBox.setVisible(false);
		this._oPreviewActivityAnswersVBox.setVisible(false);
		this._oPreviewFinancialAnswersVBox.setVisible(false);
		/*if (!this._popOverPreviewShareHolderExperienceAnswersFragment) {
			this._popOverPreviewShareHolderExperienceAnswersFragment = sap.ui.xmlfragment(
					"com.sagia.view.fragments.preview_shareholderexperienceanswers_dialog", this.getView()
							.getController());
			this.getView().addDependent(this._popOverPreviewShareHolderExperienceAnswersFragment);
		}		

		this._popOverPreviewShareHolderExperienceAnswersFragment.open();*/
	},
	handlePreview_ShareHolderExperienceAnswers_ClosePress : function(){
		this._popOverPreviewShareHolderExperienceAnswersFragment.close();
	},
	/**
	 * Preview Share holder attachments Dialog
	 * @Author Abdul Waheed
	 */
	handlePreviewShareHolderActivityAnswersButtonPress : function(){
		this._oPreviewActivityAnswersVBox.setVisible(true);
		this._oPreviewOranizationInfoVBox.setVisible(false);

		this._oPreviewContactInfoVBox.setVisible(false);
		this._oPreviewBAAInfoVBox.setVisible(false);
		this._oPreviewLicenseInfoVBox.setVisible(false);
		this._oPreviewShareHolderDetailsVBox.setVisible(false);
		this._oPreviewAttachmentsVBox.setVisible(false);
		this._oPreviewExperienceAnswersVBox.setVisible(false);
		this._oPreviewFinancialAnswersVBox.setVisible(false);
		/*if (!this._popOverPreviewShareHolderActivityAnswersFragment) {
			this._popOverPreviewShareHolderActivityAnswersFragment = sap.ui.xmlfragment(
					"com.sagia.view.fragments.preview_shareholderactivityanswers_dialog", this.getView()
							.getController());
			this.getView().addDependent(this._popOverPreviewShareHolderActivityAnswersFragment);
		}		

		this._popOverPreviewShareHolderActivityAnswersFragment.open();*/
	},
	handlePreview_ShareHolderActivityAnswers_ClosePress : function(){
		this._popOverPreviewShareHolderActivityAnswersFragment.close();
	},
	/**
	 * Preview Share holder attachments Dialog
	 * @Author Abdul Waheed
	 */
	handlePreviewShareHolderAttachmentsButtonPress : function(){
		this._oPreviewAttachmentsVBox.setVisible(true);
		this._oPreviewOranizationInfoVBox.setVisible(false);

		this._oPreviewContactInfoVBox.setVisible(false);
		this._oPreviewBAAInfoVBox.setVisible(false);
		this._oPreviewLicenseInfoVBox.setVisible(false);
		this._oPreviewShareHolderDetailsVBox.setVisible(false);
		this._oPreviewActivityAnswersVBox.setVisible(false);
		this._oPreviewExperienceAnswersVBox.setVisible(false);
		this._oPreviewFinancialAnswersVBox.setVisible(false);
		/*if (!this._popOverPreviewShareHolderAttachmentsFragment) {
			this._popOverPreviewShareHolderAttachmentsFragment = sap.ui.xmlfragment(
					"com.sagia.view.fragments.preview_shareholderattachments_dialog", this.getView()
							.getController());
			this.getView().addDependent(this._popOverPreviewShareHolderAttachmentsFragment);
		}		

		this._popOverPreviewShareHolderAttachmentsFragment.open();*/
	},
	handlePreview_ShareHolderAttachments_ClosePress : function(){
		this._popOverPreviewShareHolderAttachmentsFragment.close();
	},
	/**
	 * Preview Share holder details Dialog
	 * @Author Abdul Waheed
	 */
	handlePreviewShareHolderDetailsButtonPress : function(){
		this._oPreviewShareHolderDetailsVBox.setVisible(true);
		this._oPreviewOranizationInfoVBox.setVisible(false);

		this._oPreviewContactInfoVBox.setVisible(false);
		this._oPreviewBAAInfoVBox.setVisible(false);
		this._oPreviewLicenseInfoVBox.setVisible(false);
		this._oPreviewAttachmentsVBox.setVisible(false);
		this._oPreviewActivityAnswersVBox.setVisible(false);
		this._oPreviewExperienceAnswersVBox.setVisible(false);
		this._oPreviewFinancialAnswersVBox.setVisible(false);
		/*if (!this._popOverPreviewShareHolderDetailsFragment) {
			this._popOverPreviewShareHolderDetailsFragment = sap.ui.xmlfragment(
					"com.sagia.view.fragments.preview_shareholderdetails_dialog", this.getView()
							.getController());
			this.getView().addDependent(this._popOverPreviewShareHolderDetailsFragment);
		}		

		this._popOverPreviewShareHolderDetailsFragment.open();*/
	},
	handlePreview_ShareHolderDetails_ClosePress : function(){
		this._popOverPreviewShareHolderDetailsFragment.close();
	},
	/**
	 * Preview License Info Dialog
	 * @Author Abdul Waheed
	 */
	handlePreviewLicenseInfoButtonPress : function(){
		this._oPreviewLicenseInfoVBox.setVisible(true);
		this._oPreviewOranizationInfoVBox.setVisible(false);

		this._oPreviewContactInfoVBox.setVisible(false);
		this._oPreviewBAAInfoVBox.setVisible(false);
		this._oPreviewShareHolderDetailsVBox.setVisible(false);
		this._oPreviewAttachmentsVBox.setVisible(false);
		this._oPreviewActivityAnswersVBox.setVisible(false);
		this._oPreviewExperienceAnswersVBox.setVisible(false);
		this._oPreviewFinancialAnswersVBox.setVisible(false);
		/*if (!this._popOverPreviewLicenseInfoFragment) {
			this._popOverPreviewLicenseInfoFragment = sap.ui.xmlfragment(
					"com.sagia.view.fragments.preview_licenseinfo_dialog", this.getView()
							.getController());
			this.getView().addDependent(this._popOverPreviewLicenseInfoFragment);
		}		

		this._popOverPreviewLicenseInfoFragment.open();*/
	},
	handlePreview_LicenseInfo_ClosePress : function(){
		this._popOverPreviewLicenseInfoFragment.close();
	},
	/**
	 * Biz Activity Preview Questions navigations 6 - 10
	 * @Author Abdul Waheed
	 */
	handlePreview_LI_BAQ_MoreButtonPress : function(){
		this._oPreview_LI_BAQ_1_to_6 = sap.ui.getCore().byId("idPreview_LI_BAQ_1_to_6MAtrixLayout");
		this._oPreviewLI_BAQ_7_to_10 = sap.ui.getCore().byId("idPreview_LI_BAQ_6_to_10MatrixLayout");
		
		this._oPreview_LI_BAQ_1_to_6.setVisible(false);
		this._oPreviewLI_BAQ_7_to_10.setVisible(true);
	},
	/**
	 * Biz Activity Preview Questions navigations 1 - 5
	 * @Author Abdul Waheed
	 */
	handlePreview_LI_BAQ_PReviousButtonPress: function(){
		
		this._oPreview_LI_BAQ_1_to_6 = sap.ui.getCore().byId("idPreview_LI_BAQ_1_to_6MAtrixLayout");
		this._oPreviewLI_BAQ_7_to_10 = sap.ui.getCore().byId("idPreview_LI_BAQ_6_to_10MatrixLayout");
			
		this._oPreview_LI_BAQ_1_to_6.setVisible(true);
		this._oPreviewLI_BAQ_7_to_10.setVisible(false);
	},
	/**
	 * Preview Biz Activity Questions Dialog
	 * @Author Abdul Waheed
	 */
	handlePreviewBusinessActivityQButtonPress : function(){
		this._oPreviewBAAInfoVBox.setVisible(true);
		this._oPreviewOranizationInfoVBox.setVisible(false);

		this._oPreviewContactInfoVBox.setVisible(false);
		this._oPreviewLicenseInfoVBox.setVisible(false);
		this._oPreviewShareHolderDetailsVBox.setVisible(false);
		this._oPreviewAttachmentsVBox.setVisible(false);
		this._oPreviewActivityAnswersVBox.setVisible(false);
		this._oPreviewExperienceAnswersVBox.setVisible(false);
		this._oPreviewFinancialAnswersVBox.setVisible(false);
		/*if (!this._popOverBizActivityQInfoFragment) {
			this._popOverBizActivityQInfoFragment = sap.ui.xmlfragment(
					"com.sagia.view.fragments.preview_bizactivityq_dialog", this.getView()
							.getController());
			this.getView().addDependent(this._popOverBizActivityQInfoFragment);
		}		

		this._popOverBizActivityQInfoFragment.open();*/
	},
	handlePreview_BizActivityQuestionsInfo_ClosePress : function(){
		this._popOverBizActivityQInfoFragment.close();
	},
	
	/**
	 * Preview Organization Information Dialog
	 * @Author Abdul Waheed
	 */
	handlePreviewContactInfoButtonPress : function(){
		this._oPreviewContactInfoVBox.setVisible(true);
		this._oPreviewOranizationInfoVBox.setVisible(false);
		this._oPreviewBAAInfoVBox.setVisible(false);
		this._oPreviewLicenseInfoVBox.setVisible(false);
		this._oPreviewShareHolderDetailsVBox.setVisible(false);
		this._oPreviewAttachmentsVBox.setVisible(false);
		this._oPreviewActivityAnswersVBox.setVisible(false);
		this._oPreviewExperienceAnswersVBox.setVisible(false);
		this._oPreviewFinancialAnswersVBox.setVisible(false);
		/*if (!this._popOverPreviewContactInfoFragment) {
			this._popOverPreviewContactInfoFragment = sap.ui.xmlfragment(
					"com.sagia.view.fragments.preview_contactinfo_dialog", this.getView()
							.getController());
			this.getView().addDependent(this._popOverPreviewContactInfoFragment);
		}		

		this._popOverPreviewContactInfoFragment.open();*/
	},
	handlePreview_ContactInfo_ClosePress : function(){
		this._popOverPreviewContactInfoFragment.close();
	},
	
	/**
	 * Preview Organization Information Dialog
	 * @Author Abdul Waheed
	 */
	handlePreviewOrganizationInfoButtonPress : function(){
		this._oPreviewOranizationInfoVBox.setVisible(true);

		this._oPreviewContactInfoVBox.setVisible(false);
		this._oPreviewBAAInfoVBox.setVisible(false);
		this._oPreviewLicenseInfoVBox.setVisible(false);
		this._oPreviewShareHolderDetailsVBox.setVisible(false);
		this._oPreviewAttachmentsVBox.setVisible(false);
		this._oPreviewActivityAnswersVBox.setVisible(false);
		this._oPreviewExperienceAnswersVBox.setVisible(false);
		this._oPreviewFinancialAnswersVBox.setVisible(false);
		/*if (!this._popOverPreviewOrganizationInfoFragment) {
			this._popOverPreviewOrganizationInfoFragment = sap.ui.xmlfragment(
					"com.sagia.view.fragments.preview_orginfo_dialog", this.getView()
							.getController());
			this.getView().addDependent(this._popOverPreviewOrganizationInfoFragment);
		}		

		this._popOverPreviewOrganizationInfoFragment.open();*/
	},
	handlePreview_OrgInfo_ClosePress : function(){
		this._popOverPreviewOrganizationInfoFragment.close();
	},
	handleCreateNewShareHolderAddShareHolderDetailsButtonPress : function(){
		this._oAddShareHolderDetailsVBoxFragment.setVisible(true);
		this._oAddShareHolderFinancialAnswersVBoxFragment.setVisible(false);
		this._oAddShareHolderActivityAnswersVBoxFragment.setVisible(false);
		this._oAddShareHolderExperienceAnswersVBoxFragment.setVisible(false);
		this._oAddShareHolderAttachmentsVBoxFragment.setVisible(false);
		/*if (!this._popOverNewShareHolderDetailsFragment) {
			this._popOverNewShareHolderDetailsFragment = sap.ui.xmlfragment(
					"com.sagia.view.fragments.ns_shareholderdetails_dialog", this.getView()
							.getController());
			this.getView().addDependent(this._popOverNewShareHolderDetailsFragment);
		}		

		this._popOverNewShareHolderDetailsFragment.open();*/
	},
	handleCreateAddShareHolderDetailsDialogSaveAndClosePress : function(){
		this._popOverNewShareHolderDetailsFragment.close();
	},
	/**
	 * Financial Questions Dialog
	 * @Author Abdul Waheed
	 */
	handleCreateNewShareHolderAnswerFinancialQuestionsButtonPress : function(){
		this._oAddShareHolderFinancialAnswersVBoxFragment.setVisible(true);
		this._oAddShareHolderDetailsVBoxFragment.setVisible(false);
		this._oAddShareHolderActivityAnswersVBoxFragment.setVisible(false);
		this._oAddShareHolderExperienceAnswersVBoxFragment.setVisible(false);
		this._oAddShareHolderAttachmentsVBoxFragment.setVisible(false);
				
		/*if (!this._popOverNewShareHolderDetailsFinancialQuestionsFragment) {
			this._popOverNewShareHolderDetailsFinancialQuestionsFragment = sap.ui.xmlfragment(
					"com.sagia.view.fragments.ns_financialquestions_dialog", this.getView()
							.getController());
			this.getView().addDependent(this._popOverNewShareHolderDetailsFinancialQuestionsFragment);
		}		

		this._popOverNewShareHolderDetailsFinancialQuestionsFragment.open();*/
	},
	handleCreateFinancialQuestionsDialogSaveAndClosePress : function(){
		this._popOverNewShareHolderDetailsFinancialQuestionsFragment.close();
	},
	/**
	 * Experience Questions Dialog
	 * @Author Abdul Waheed
	 */
	handleCreateNewShareHolderAnswerExperienceQuestionsButtonPress : function(){
		this._oAddShareHolderExperienceAnswersVBoxFragment.setVisible(true);
		this._oAddShareHolderDetailsVBoxFragment.setVisible(false);
		this._oAddShareHolderActivityAnswersVBoxFragment.setVisible(false);
		this._oAddShareHolderFinancialAnswersVBoxFragment.setVisible(false);
		this._oAddShareHolderAttachmentsVBoxFragment.setVisible(false);
				
		/*if (!this._popOverNewShareHolderDetailsExperienceQuestionsFragment) {
			this._popOverNewShareHolderDetailsExperienceQuestionsFragment = sap.ui.xmlfragment(
					"com.sagia.view.fragments.ns_experiencequestions_dialog", this.getView()
							.getController());
			this.getView().addDependent(this._popOverNewShareHolderDetailsExperienceQuestionsFragment);
		}		

		this._popOverNewShareHolderDetailsExperienceQuestionsFragment.open();*/
	},
	handleCreateExperienceQuestionsDialogSaveAndClosePress : function(){
		this._popOverNewShareHolderDetailsExperienceQuestionsFragment.close();
	},
	/**
	 * Activity Questions Dialog
	 * @Author Abdul Waheed
	 */
	handleCreateNewShareHolderAnswerActivityQuestionsButtonPress : function(){
		this._oAddShareHolderActivityAnswersVBoxFragment.setVisible(true);
		this._oAddShareHolderDetailsVBoxFragment.setVisible(false);
		this._oAddShareHolderExperienceAnswersVBoxFragment.setVisible(false);
		this._oAddShareHolderFinancialAnswersVBoxFragment.setVisible(false);
		this._oAddShareHolderAttachmentsVBoxFragment.setVisible(false);
				
		/*if (!this._popOverNewShareHolderDetailsActivityQuestionsFragment) {
			this._popOverNewShareHolderDetailsActivityQuestionsFragment = sap.ui.xmlfragment(
					"com.sagia.view.fragments.ns_activityquestions_dialog", this.getView()
							.getController());
			this.getView().addDependent(this._popOverNewShareHolderDetailsActivityQuestionsFragment);
		}		

		this._popOverNewShareHolderDetailsActivityQuestionsFragment.open();*/
	},
	handleCreateActivityQuestionsDialogSaveAndClosePress : function(){
		this._popOverNewShareHolderDetailsActivityQuestionsFragment.close();
	},
	handleCreateNewShareHolderAddAttachmentssButtonPress : function(){
		this._oAddShareHolderAttachmentsVBoxFragment.setVisible(true);
		this._oAddShareHolderDetailsVBoxFragment.setVisible(false);
		this._oAddShareHolderActivityAnswersVBoxFragment.setVisible(false);
		this._oAddShareHolderExperienceAnswersVBoxFragment.setVisible(false);
		this._oAddShareHolderFinancialAnswersVBoxFragment.setVisible(false);
				
		/*if (!this._popOverNewShareHolderDetailsAddAttachmentsFragment) {
			this._popOverNewShareHolderDetailsAddAttachmentsFragment = sap.ui.xmlfragment(
					"com.sagia.view.fragments.ns_attachments_dialog", this.getView()
							.getController());
			this.getView().addDependent(this._popOverNewShareHolderDetailsAddAttachmentsFragment);
		}		

		this._popOverNewShareHolderDetailsAddAttachmentsFragment.open();*/
	},
	handleCreateAddAttachmentsDialogSaveAndClosePress : function(){
		this._popOverNewShareHolderDetailsAddAttachmentsFragment.close();
	},
	handleAddExistingShareHolderButtonPress : function(){
		this._oCREATE_NewShareHolderVBox.setVisible(false);
		this._oADD_ExistingShareHolderVBox.setVisible(true);
		
		
		
	},
	handleCreateNewShareHolderButtonPress : function(){
		this._oADD_ExistingShareHolderVBox.setVisible(false);
		this._oCREATE_NewShareHolderVBox.setVisible(true);
		
		if(!this.oFin_AQ_Loaded){
			this.oFin_AQ_Loaded = true;
			
			//this.getFinancialQ();
			this.getActivityQ();
		}
		
	},
	handleAddExistingShareHolderCancelButtonPress: function(){
		this._oADD_ExistingShareHolderVBox.setVisible(false);
	},
	
	handleLI_BAQ_MoreButtonPress : function(){
		this._oLI_BAQ_1_to_6.setVisible(false);
		this._oLI_BAQ_7_to_10.setVisible(true);
	},
	handleLI_BAQ_PReviousButtonPress : function(){		
		this._oLI_BAQ_7_to_10.setVisible(false);
		this._oLI_BAQ_1_to_6.setVisible(true);
	},
	
	handleBasicInfoIconTabBarSelect : function(oEvent){
		/*console.log(oEvent.getParameters().key);*/
		/*if( oEvent.getParameters().key === "BasicInfoIconTabKey"){
			this._oOrgTabFilter.addStyleClass("BackgroundRed");
		}*/
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf com.sagia.view.Overview
	 */
	onBeforeRendering : function() {
		/*this._oLanguageSelectionComboBox.setSelectedKey("E");*/
		console.log("onBeforeRendering");
		this.readCountryToModel(this.oLanguageSelect.getSelectedKey());
	},
	
	readCountryToModel : function(oLanguage){

		var oRequestFinishedDeferred = this.oModelHelper.readCountry(oLanguage);

		jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
			
			var arr = [];
			for(var i = 0; i < oResponse.oData.DetailsCollection.length ; i++){
				if(oResponse.oData.DetailsCollection[i].Bezei_reg !== "")
				{//console.log(oResponse.oData.DetailsCollection[i].Bezei_reg);}
					arr.push(oResponse.oData.DetailsCollection[i].Bezei_reg);
					
				}
				
				
			}
			
			this.getView().setModel(oResponse);
			
			this.getView().setModel(oResponse,"CC");
			
			this.bindCountryListModelToComboBoxInRegistration();
			
		}, this));	
	},
	
	/*Setting Model for country list and changing the selected country to 
	  */
	bindCountryListModelToComboBoxInRegistration : function(){
		this._oRegCountryCombobox = this.getView().byId("idRegCountryComboBox");
		var oBICICountryFilter = new sap.ui.model.Filter("Landx50", sap.ui.model.FilterOperator.NE, "");
		var oBICICountryKeyFilter = new sap.ui.model.Filter("Land1", sap.ui.model.FilterOperator.NE, "");
		this._oRegCountryCombobox.getBinding("items").filter([oBICICountryFilter,oBICICountryKeyFilter]);
	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf com.sagia.view.Overview
	 */
	onAfterRendering : function() {
		var that = this;
		/*window.onbeforeunload = function(e) {
			  return that.oModelHelper.getText("ConfirmBrowserClose");
			};*/
		
		
	    
		
		console.log("onAfterRendering");
		/*console.log(this.oLanguageSelect.getSelectedKey());
		if(this.oLanguageSelect.getSelectedKey() == "AR"){
			this.oLanguageSelect.setSelectedKey("AR");
		}*/
		
		/*if (!this.oShowLanguageAlertDialog) {
			this.oShowLanguageAlertDialog = sap.ui.xmlfragment(
					"com.sagia.view.fragments.alertLanguage", this.getView()
							.getController());
			this.getView().addDependent(this.oShowLanguageAlertDialog);
			
		}	
		this.oShowLanguageAlertDialog.open();*/
		
		

		//this._oLanguageSelectionComboBox.setSelectedKey("E");
		
		
		//this.getBAQ();
		//this.getPreviewBAQ();
		
		
		
		/*this.oLanguageSelect.onAfterRendering = function() {  
	        if (sap.ui.commons.Tree.prototype.onAfterRendering) {  
	          sap.ui.commons.Tree.prototype.onAfterRendering.apply(this, arguments);  
	        }  
	        // Your code...  
	    }  */
		
		
		
		
		if (!this.oShowAlertDialog) {
			this.oShowAlertDialog = sap.ui.xmlfragment(
					"com.sagia.view.fragments.alert", this.getView()
							.getController());
			this.getView().addDependent(this.oShowAlertDialog);
		}		
		
		if (!this.oShowSubmitAlertDialog) {
			this.oShowSubmitAlertDialog = sap.ui.xmlfragment(
					"com.sagia.view.fragments.submitalert", this.getView()
							.getController());
			this.getView().addDependent(this.oShowSubmitAlertDialog);
		}		
		
		this.oAlertTextView = sap.ui.getCore().byId("idAlertFragmentTextView");
		
		if (!this.oLogoutAlertDialog) {
			this.oLogoutAlertDialog = sap.ui.xmlfragment(
					"com.sagia.view.fragments.logoutalert", this.getView()
							.getController());
			this.getView().addDependent(this.oLogoutAlertDialog);
		}		

		 /*this.oUserID.attachBrowserEvent("blur", 
		 function(){
		     console.log("Handler");	    
		 },function(){
		     console.log("Listener");	    
		 });*/
		
		/*this.oLILISectionComboBox.attachChange(function(){
			console.log("Changed");
		})*/
		
		
		/*this.oLILIComboBox.attachSelectionChange(function(){
			console.log(this.oLILIDivisionComboBox);
		});*/
		
		
		
		//this.handleSaveLinkPress(this.oLanguageSelect.getSelectedKey());
		//this.getBAQ(this.oLanguageSelect.getSelectedKey());
		
		this.handleSaveLinkPress(this.oLanguageSelect.getSelectedKey());
		
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

		/*console.log(sSelectedTab);*/
	},
	handleProcessButtonPress : function(oEvent) {
		this._oVboxQuestionsContent.setVisible(false);
		this._oVboxNISTLAF.setVisible(true);
	},
	handleRoadMapSection : function(oEvent) {
	//	console.log(oEvent.getParameters.stepId);
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
	handleSignInButtonPress : function() {
		
		var userID = this.getView().byId("idSignInUsernameInput").getValue();
		var password = this.getView().byId("idSignInPasswordInput").getValue();
		
		if (userID.length > 0 && password.length > 0) {
			
			if(userID.length > 10){
				if(!this.oShowAlertDialog.isOpen())
				{
				this.oAlertTextView.setText(this.oModelHelper.getText("UserIDLength"));
				this.oShowAlertDialog.open();
				
				}
			}else if(!(/^[a-zA-Z0-9]*$/.test(userID))){
				if(!this.oShowAlertDialog.isOpen())
				{
				this.oAlertTextView.setText(this.oModelHelper.getText("UserIDInvalid"));
				this.oShowAlertDialog.open();
				
				}
			}else if(password.length > 10){
				if(!this.oShowAlertDialog.isOpen())
				{
				this.oAlertTextView.setText(this.oModelHelper.getText("PasswordLength"));
				this.oShowAlertDialog.open();
				
				}
			}else{
				this.userSignIn(userID, password);
			}
		
		} else {
			sap.m.MessageToast.show(this.oModelHelper
					.getText("PleaseEnterRequiredFields"));						
			
		}

	
	},
userSignIn : function(userID, password){
	var that = this
	
	
	
	//Remove later End
	    this.openBusyDialog();
		var oRequestFinishedDeferred = this.oModelHelper.signInUser(userID,password);

		jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
			this.closeBusyDialog();
			
			
			if(oResponse.Password !== password){
				sap.m.MessageToast.show(this.oModelHelper.getText("AuthenticationFailedMessage"));
			}else{
				this.openBusyDialog();
				var oRequestFinishedDeferredStatusCheck = this.oModelHelper.checkUserStatus(oResponse.Ref_id);
				
				jQuery.when(oRequestFinishedDeferredStatusCheck).then(jQuery.proxy(function(oResponseStatusCheck) {
					this.closeBusyDialog();
					
					//console.dir(oResponseStatusCheck);
					
					if(oResponseStatusCheck.results.length === 1){
						
						this._oStagesHeading.setContent("");
						
						
						
						this._oidMainPageContent.setVisible(false);
						this._oTopHeaderVBox.setVisible(true);
						this.oVBoxSubmittedApplicationStatus.setVisible(true);
						
						/*this.oSubmittedApplicationTextView = this.getView().byId("idSubmittedApplicationTextView");
						this.oSubmittedApplicationTextView.setText(this.oModelHelper.getText("ApplicationID")+" "+oResponseStatusCheck.results[0].LeadId+" "+this.oModelHelper.getText("ApplicationStatus")+" "+oResponseStatusCheck.results[0].StatusDesc);
						*/
						this.oAppNumberTextView = this.getView().byId("idAppNumberTextView");
						this.oAppNumberTextView.setText(oResponseStatusCheck.results[0].LeadId);
						
						this.oAppStatus = this.getView().byId("idAppStatus");
						this.oAppStatus.setText(oResponseStatusCheck.results[0].StatusDesc);
						
						this.oSaveImage = this.getView().byId("idSaveImage");
						this.oSaveLink = this.getView().byId("idSaveLink");
						
						this.oSaveImage.setVisible(false);
						this.oSaveLink.setVisible(false);
						
						this.ApplicationAlreadySubmitted = true;
						
						/*if(!this.oShowAlertDialog.isOpen())
						{
						this.oAlertTextView.setText(this.oModelHelper.getText("ApplicationID")+" "+oResponseStatusCheck.results[0].LeadId+" "+this.oModelHelper.getText("ApplicationStatus")+" "+oResponseStatusCheck.results[0].StatusDesc);
						this.oShowAlertDialog.open();
						
						}*/
						
					}else{
						
						try{
							
							this.openBusyDialog();
							//this.oBusyDialogUI.setText("10%");
							

							
							//this.handleSaveLinkPress(this.oLanguageSelect.getSelectedKey());
							//this.getBAQ(this.oLanguageSelect.getSelectedKey());
							
							var that = this;
							
							//this.oSaveImage = thisContext.getView().byId("idSaveImage");
							//this.oSaveLink = thisContext.getView().byId("idSaveLink");
							
							
							
							setTimeout(function(){ 
								that.oValidationHelper.signInWorker(that, oResponse);
								//that.closeBusyDialog();
							}, 3000);
							
						}catch(err){
							this.closeBusyDialog();
						}
						
						
						
					}


				}, this));					
			
			}
			
		}, this));		
			
	
},
/**
 * Register new user button pressed.
 * @author Abdul Waheed
 */
handleRegisterUserButtonPress : function() {
		var that = this;
		//console.log()
		if(this.handleCompanyNameEntryLiveChange() &&
		   this.handleContactNameEntryLiveChange() &&
		   this.handleContactNumberEntryLiveChange() &&
		   this.handleEmailEntryLiveChange() && 
		   this.handlePasswordEntryLiveChange() &&
		   this.handleUserIDEntryLiveChange()){
		var oUserID, oPassword, oInputEmail, oContactNumber, oContactPersonName, oCompany;
		
		oUserID = this.oUserID.getValue();
		oPassword = this.oPassword.getValue();
		oInputEmail = this.oInputEmail.getValue();
		oContactNumber = this.oContactNumber.getValue();
		oContactPersonName = this.oContactPersonName.getValue();
		oCompany = this.oCompany.getValue();	
			
		if (oUserID.length > 0 && oPassword.length > 0
				&& oInputEmail.length > 0 && oContactNumber.length > 0 && oContactPersonName.length > 0) {
			
			if(oUserID.length > 10){
				if(!this.oShowAlertDialog.isOpen())
				{
				this.oAlertTextView.setText(this.oModelHelper.getText("UserIDLength"));
				this.oShowAlertDialog.open();
				
				}
			}else if(!(/^[a-zA-Z0-9]*$/.test(oUserID))){
				if(!this.oShowAlertDialog.isOpen())
				{
				this.oAlertTextView.setText(this.oModelHelper.getText("UserIDInvalid"));
				this.oShowAlertDialog.open();
				
				}
			}else if(oPassword.length > 10){
				if(!this.oShowAlertDialog.isOpen())
				{
				this.oAlertTextView.setText(this.oModelHelper.getText("PasswordLength"));
				this.oShowAlertDialog.open();
				
				}
			}else if(oCompany.length > 40){
				if(!this.oShowAlertDialog.isOpen())
				{
				this.oAlertTextView.setText(this.oModelHelper.getText("CompanyLength"));
				this.oShowAlertDialog.open();
				
				}
			}else if(oContactPersonName.length > 40){
				if(!this.oShowAlertDialog.isOpen())
				{
				this.oAlertTextView.setText(this.oModelHelper.getText("ContPersonNameLength"));
				this.oShowAlertDialog.open();
				
				}
			}else if(oInputEmail.length > 241){
				if(!this.oShowAlertDialog.isOpen())
				{
				this.oAlertTextView.setText(this.oModelHelper.getText("Emaillength"));
				this.oShowAlertDialog.open();
				
				}
			}else if(oContactNumber.length > 30){
				if(!this.oShowAlertDialog.isOpen())
				{
				this.oAlertTextView.setText(this.oModelHelper.getText("ContactNoLength"));
				this.oShowAlertDialog.open();
				
				}
			}else{
				this.openBusyDialog();
				
				var oRequestFinishedDeferred = this.oModelHelper.registerUser(oUserID, oPassword, oInputEmail, oContactNumber, oContactPersonName, oCompany);
				
				jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
					this.closeBusyDialog();
					
					this.oUserID.setValue("");
					this.oPassword.setValue("");
					this.oInputEmail.setValue("");
					this.oContactNumber.setValue("");
					this.oContactPersonName.setValue("");
					this.oCompany.setValue("");
					
					sap.m.MessageToast.show(oResponse.Return);
					
					if(oResponse.Return === "Successfully Registered"){
						that.handleLoginButtonPress();
						
						this.getView().byId("idSignInUsernameInput").setValue(oResponse.Userid);
						this.getView().byId("idSignInPasswordInput").setValue("");
						
					}			
					
				}, this));	
			}
			
			
			
		
			
		} else {
			sap.m.MessageToast.show(this.oModelHelper
					.getText("PleaseEnterRequiredFields"));
		}
		}
	},
	handleShowInvestorIDDialogCloseButton : function(oEvent) {
		this._ShowLeadIDFragment.close();
		location.reload(true);
	},
	handleCloseAlertDialogButtonPress : function(oEvent) {
		this.oShowAlertDialog.close();		
	},
	handleCloseLanguageAlertDialogButtonPress : function(oEvent){
		this.oShowLanguageAlertDialog.close();	
		
		//this.handleSaveLinkPress(this.oLanguageSelect.getSelectedKey());
		//this.getBAQ();


	},
	handleCancelButtonPress : function(oEvent) {
		this.getView().byId("idSignInUsernameInput").setValue("");
		this.getView().byId("idSignInPasswordInput").setValue("");
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
		
		this.oBasicInfoButtonClicked = true;
		this.oLicenseInfoButtonClicked = false;
		
		this.oLicenseInfoTab.setSelectedIndex(1);
		this.oLicenseInfoTab.setSelectedIndex(0);
		
		this.oSaveImage.setVisible(true);
		this.oSaveLink.setVisible(true);
		
		

		this._oBasicInfoContent.setVisible(true);
		this._oLicenseInfoContent.setVisible(false);
		this._oShareHoldersInfoContent.setVisible(false);
		this._oTermsAndConditionsInfoContent.setVisible(false);
		this._oPreviewInfoContent.setVisible(false);
		
		this._oStagesHeading.setContent(this.oModelHelper
				.getText("BasicInformationHTML"));
		
		if(sap.ui.getCore().getConfiguration().getRTL()){
			
			this._oBasicInfoButton.setSrc("common/mime/basicinfo_hover_ar.png");
			this._oLicenseInfoButton.setSrc("common/mime/license_ar.png");
			this._oShareholderInfoButton.setSrc("common/mime/shareholder_ar.png");
			this._oPreviewInfoButton.setSrc("common/mime/preview_ar.png");
			this._oTermsInfoButton.setSrc("common/mime/terms_ar.png");
			this._oSubmitInfoButton.setSrc("common/mime/submit_ar.png");
		}else{
			this._oBasicInfoButton.setSrc("common/mime/basicinfo_hover.png");
			this._oLicenseInfoButton.setSrc("common/mime/license.png");
			this._oShareholderInfoButton.setSrc("common/mime/shareholder.png");
			this._oPreviewInfoButton.setSrc("common/mime/preview.png");
			this._oTermsInfoButton.setSrc("common/mime/terms.png");
			this._oSubmitInfoButton.setSrc("common/mime/submit.png");
		}
		
	},
	handleLicenseButtonClick : function(){
		
		/*if(this._oLicenseInfoContent.getVisible()){
			if(this.oLicenseInfoTab.getSelectedIndex() === 1){
			
			}
		}*/
		
		//this.handleLicenseInfoTabStripSelect();
		
		this.oBasicInfoButtonClicked = false;
		this.oLicenseInfoButtonClicked = true;
		
		this.oSaveImage.setVisible(true);
		this.oSaveLink.setVisible(true);
		
		//this.getBAQ();
		
		/*this.oBasicInfoTab.setSelectedIndex(1);
		this.oBasicInfoTab.setSelectedIndex(0);
		this.oLicenseInfoTab.setSelectedIndex(1);
		this.oLicenseInfoTab.setSelectedIndex(0);*/
		
		
		this._oLicenseInfoContent.setVisible(true);
		this._oBasicInfoContent.setVisible(false);
		this._oShareHoldersInfoContent.setVisible(false);
		this._oTermsAndConditionsInfoContent.setVisible(false);
		this._oPreviewInfoContent.setVisible(false);
		
		
		
		this._oStagesHeading.setContent(this.oModelHelper
				.getText("LicenseInformationHTML"));
		
		if(sap.ui.getCore().getConfiguration().getRTL()){			
			this._oLicenseInfoButton.setSrc("common/mime/license_hover_ar.png");
			this._oShareholderInfoButton.setSrc("common/mime/shareholder_ar.png");
			this._oPreviewInfoButton.setSrc("common/mime/preview_ar.png");
			this._oTermsInfoButton.setSrc("common/mime/terms_ar.png");
			this._oSubmitInfoButton.setSrc("common/mime/submit_ar.png");
			this._oBasicInfoButton.setSrc("common/mime/basicinfo_ar.png");
		}else{
			this._oLicenseInfoButton.setSrc("common/mime/license_hover.png");
			this._oShareholderInfoButton.setSrc("common/mime/shareholder.png");
			this._oPreviewInfoButton.setSrc("common/mime/preview.png");
			this._oTermsInfoButton.setSrc("common/mime/terms.png");
			this._oSubmitInfoButton.setSrc("common/mime/submit.png");
			this._oBasicInfoButton.setSrc("common/mime/basicinfo.png");
		}
		
		
		
		if(this.oLoadedSavedBAQ){
			this.oLoadedSavedBAQ = false;
			this.getBAQ();
		}
		
	
	},
	handleShareHolderTypeSelectionChange : function(){
		if(this.oShareHolderTypeComboBox.getSelectedKey() === "1"){
			this.oNSHOrganizationVBox.setVisible(false);
			this.oNSHPersonVBox.setVisible(true);
			var othis = this
			othis.oNSHOrganizationName.setValue("");
			othis.oNSHOrgCountryComboBox.setSelectedKey("");
			othis.oNSHOrgName2tText.setValue("");
			othis.oNSHOrgCityNameInputText.setValue("");
			othis.oNSHOrgSectionComboBox.setSelectedKey("");
			othis.oNSHOrgPostalCodeInputText.setValue("");
			othis.oNSHOrgDivisionComboBox.setSelectedKey("");			
			//othis.oNSHOrgSubSctorInputText.setValue("");
			othis.oNSHOrgPOBoxInputText.setValue("");
			othis.oNSHOrgMultiNationalCompanyCombobox.setSelectedKey("");
			othis.oNSHOrgStreetInputText.setValue("");
			othis.oNSHOrgLegalStatusComboBox.setSelectedKey("");
			othis.oNSHOrgBuildingNoInputText.setValue("");
			othis.oNSHOrgLaborSizeInputText.setValue("");
			othis.oNSHOrgCapitalInputText.setValue("");
			othis.oNSHOrgTelephoneInputText.setValue("");
			othis.oNSHOrgPercentageInputText.setValue("");
			othis.oNSHOrgFaxInputText.setValue("");
			othis.oNSHOrgWebsiteInputText.setValue("");
			othis.oNSHOrgMobilephoneInputText.setValue("");
			othis.oNSHOrgEmailInputText.setValue("");			
			othis.oNSHOrgTelephoneCountryCodeInputText.setValue("");
			othis.oNSHOrgFaxCountryCodeInputText.setValue("");
			othis.oNSHOrgMobilephoneCountryCodeInputText.setValue("");
			
//			othis.oNSHOrgSubSctorInputText.setEnabled(false);
			
			
			
		}else{
			this.oNSHPersonVBox.setVisible(false);
			this.oNSHOrganizationVBox.setVisible(true);
			
			var that = this;
			
		   // that.oShareHolderTypeComboBox.setValue("");
			that.oNSHFirstNameInputText.setValue("");
			that.oNSHMiddleNameInputText.setValue("");
			that.oNSHCountryComboBox.setSelectedKey("");
			that.oNSHLastNameInputText.setValue("");
			that.oNSHCityNameInputText.setValue("");
			that.oNSHGenderComboBox.setSelectedKey("");
			that.oNSHPOBoxInputText.setValue("");
			that.oNSHMaritalStatusComboBox.setSelectedKey("");
			that.oNSHPostalCodeInputText.setValue("");
			that.oNSHAcademicTitleComboBox.setSelectedKey("");
			that.oNSHStreetInputText.setValue("");
			that.oNSHWebsiteInputText.setValue("");
			that.oNSHTelephoneInputText.setValue("");
			that.oNSHNationalityComboBox.setSelectedKey("");
			that.oNSHMobilePhoneInputText.setValue("");
			that.oNSHPreviousNationalityInputText.setSelectedKey("");
			that.oNSHFaxInputText.setValue("");
			that.oNSHCommMethodInputText.setSelectedKey("");
			that.oNSHEmailInputText.setValue("");
			that.oNSHPercentageInputText.setValue("");
			that.oNSHDOBDate.setValue("");
		}
	},
	/*handleIndustrialSectarSelectionChange : function(){
		if(this.oNSHOrgIndustrySectorComboBox.getSelectedKey() === "9"){
			this.oNSHOrgSubSctorInputText.setEnabled(true);
		}else{
			this.oNSHOrgSubSctorInputText.setValue("");
			this.oNSHOrgSubSctorInputText.setEnabled(false);
		}
	},*/
	handleNSHOrgSectionChange : function(){
		this.oNSHOrgDivisionComboBox.setModel(null);
		this.oNSHOrgDivisionComboBox.setValue("");
		var oRequestFinishedDeferredLILIDivision = that.oModelHelper.readLILIDivision(this.oNSHOrgSectionComboBox.getSelectedKey());

		jQuery.when(oRequestFinishedDeferredLILIDivision).then(jQuery.proxy(function(oResponse) {			
			this.oNSHOrgDivisionComboBox.setModel(oResponse);
		}, that));
	},
	handleShareholderInfoButtonClick : function(){
		
		
		//this.handleLILIClassMultiSelectionComboBoxChange();
		//this.handleLicenseInfoTabStripSelect();
		this.oSaveImage.setVisible(false);
		this.oSaveLink.setVisible(false);
		
		that = this;
		
		this._oShareHoldersInfoContent.setVisible(true);
		this._oLicenseInfoContent.setVisible(false);
		this._oBasicInfoContent.setVisible(false);
		this._oTermsAndConditionsInfoContent.setVisible(false);
		this._oPreviewInfoContent.setVisible(false);
		this._oStagesHeading.setContent(this.oModelHelper
				.getText("ShareHolderInformationHTML"));
		
		
		
		if(sap.ui.getCore().getConfiguration().getRTL()){			
			this._oShareholderInfoButton.setSrc("common/mime/shareholder_hover_ar.png");
			this._oLicenseInfoButton.setSrc("common/mime/license_ar.png");
			this._oPreviewInfoButton.setSrc("common/mime/preview_ar.png");
			this._oTermsInfoButton.setSrc("common/mime/terms_ar.png");
			this._oSubmitInfoButton.setSrc("common/mime/submit_ar.png");
			this._oBasicInfoButton.setSrc("common/mime/basicinfo_ar.png");
		}else{
			this._oShareholderInfoButton.setSrc("common/mime/shareholder_hover.png");
			this._oLicenseInfoButton.setSrc("common/mime/license.png");
			this._oPreviewInfoButton.setSrc("common/mime/preview.png");
			this._oTermsInfoButton.setSrc("common/mime/terms.png");
			this._oSubmitInfoButton.setSrc("common/mime/submit.png");
			this._oBasicInfoButton.setSrc("common/mime/basicinfo.png");
		}
		
		if (!this.oShareHolderNewShareHolderFragment) {
		this.oShareHolderNewShareHolderFragment = sap.ui.xmlfragment("com.sagia.view.fragments.ns_shareholderdetails", this.getView()
				.getController());
		this.oShareHolderNewShareHolderFinancialQuestionsFragment = sap.ui.xmlfragment("com.sagia.view.fragments.ns_p_financialquestions", this.getView()
				.getController());
		this.oShareHolderTypeComboBox = this.getView().byId("idNSHTypeComboBox");
		this.oNSHFirstNameInputText = this.getView().byId("idNSHFirstNameInputText");
		this.oNSHMiddleNameInputText = this.getView().byId("idNSHMiddleNameInputText");
		this.oNSHCountryComboBox = this.getView().byId("idNSHCountryComboBox");
		
		this.oNSHPersonTelephoneCountryCodeInputText = this.getView().byId("idNSHPersonTelephoneCountryCodeInputText");
		this.oNSHPersonFaxCountryCodeInputText = this.getView().byId("idNSHPersonMobilephoneCountryCodeInputText");
		this.oNSHPersonMobilephoneCountryCodeInputText = this.getView().byId("idNSHPersonFaxCountryCodeInputText");
		
		
		this.oNSHLastNameInputText = this.getView().byId("idNSHLastNameInputText");
		this.oNSHCityNameInputText = this.getView().byId("idNSHCityNameInputText");
		this.oNSHGenderComboBox = this.getView().byId("idNSHGenderComboBox");
		this.oNSHPOBoxInputText = this.getView().byId("idNSHPOBoxInputText");
		this.oNSHMaritalStatusComboBox = this.getView().byId("idNSHMaritalStatusComboBox");
		this.oNSHPostalCodeInputText = this.getView().byId("idNSHPostalCodeInputText");
		this.oNSHAcademicTitleComboBox = this.getView().byId("idNSHAcademicTitleInputText");
		this.oNSHStreetInputText = this.getView().byId("idNSHStreetInputText");
		this.oNSHDOBDate = this.getView().byId("idNSHDOBDate");
		this.oNSHWebsiteInputText = this.getView().byId("idNSHWebsiteInputText");
		this.oNSHTelephoneInputText = this.getView().byId("idNSHTelephoneInputText");
		this.oNSHNationalityComboBox = this.getView().byId("idNSHNationalityComboBox");
		this.oNSHMobilePhoneInputText = this.getView().byId("idNSHMobilePhoneInputText");
		this.oNSHPreviousNationalityInputText = this.getView().byId("idNSHPreviousNationalityInputText");
		this.oNSHFaxInputText = this.getView().byId("idNSHFaxInputText");
		this.oNSHCommMethodInputText = this.getView().byId("idNSHCommMethodInputText");
		this.oNSHEmailInputText = this.getView().byId("idNSHEmailInputText");
		this.oNSHPercentageInputText = this.getView().byId("idNSHPercentageInputText");
		
		this.oNSHActivityQ1ComboBox = this.getView().byId("idNSHActivityQ1ComboBox");
		this.oNSHActivityQ2ComboBox = this.getView().byId("idNSHActivityQ2ComboBox");
		this.oNSHActivityQ3ComboBox = this.getView().byId("idNSHActivityQ3ComboBox");
		
		this.oNSHExperienceQ1ComboBox = this.getView().byId("idNSHExperienceQ1ComboBox");
		this.oNSHExperienceQ2ComboBox = this.getView().byId("idNSHExperienceQ2ComboBox");
		this.oNSHExperienceQ3ComboBox = this.getView().byId("idNSHExperienceQ3ComboBox");
		this.oNSHExperienceQ4ComboBox = this.getView().byId("idNSHExperienceQ4ComboBox");
		
		this.oNSHStock12InputText = this.getView().byId("idNSHStock12InputText");
		this.oNSHStock13InputText = this.getView().byId("idNSHStock13InputText");
		this.oNSHStock14InputText = this.getView().byId("idNSHStock14InputText");
		this.oNSHTotalCurrentAssets12InputText = this.getView().byId("idNSHTotalCurrentAssets12InputText");
		this.oNSHTotalCurrentAssets13InputText = this.getView().byId("idNSHTotalCurrentAssets13InputText");
		this.oNSHTotalCurrentAssets14InputText = this.getView().byId("idNSHTotalCurrentAssets14InputText");		
		this.oNSHTotalCurrentLiabialities12InputText = this.getView().byId("idNSHTotalCurrentLiabialities12InputText");
		this.oNSHTotalCurrentLiabialities13InputText = this.getView().byId("idNSHTotalCurrentLiabialities13InputText");
		this.oNSHTotalCurrentLiabialities14InputText = this.getView().byId("idNSHTotalCurrentLiabialities14InputText");
		this.oNSHNetSales12InputText = this.getView().byId("idNSHNetSales12InputText");
		this.oNSHNetSales13InputText = this.getView().byId("idNSHNetSales13InputText");
		this.oNSHNetSales14InputText = this.getView().byId("idNSHNetSales14InputText");
		this.oNSHTotalAssets12InputText = this.getView().byId("idNSHTotalAssets12InputText");
		this.oNSHTotalAssets13InputText = this.getView().byId("idNSHTotalAssets13InputText");
		this.oNSHTotalAssets14InputText = this.getView().byId("idNSHTotalAssets14InputText");
		this.oNSHTotalDebt12InputText = this.getView().byId("idNSHTotalDebt12InputText");
		this.oNSHTotalDebt13InputText = this.getView().byId("idNSHTotalDebt13InputText");
		this.oNSHTotalDebt14InputText = this.getView().byId("idNSHTotalDebt14InputText");
		this.oNSHDistributableNetIncome12InputText = this.getView().byId("idNSHDistributableNetIncome12InputText");
		this.oNSHDistributableNetIncome13InputText = this.getView().byId("idNSHDistributableNetIncome13InputText");
		this.oNSHDistributableNetIncome14InputText = this.getView().byId("idNSHDistributableNetIncome14InputText");
		this.oNSHNetProfit12InputText = this.getView().byId("idNSHNetProfit12InputText");
		this.oNSHNetProfit13InputText = this.getView().byId("idNSHNetProfit13InputText");
		this.oNSHNetProfit14InputText = this.getView().byId("idNSHNetProfit14InputText");
		this.oNSHInterests12InputText = this.getView().byId("idNSHInterests12InputText");
		this.oNSHInterests13InputText = this.getView().byId("idNSHInterests13InputText");
		this.oNSHInterests14InputText = this.getView().byId("idNSHInterests14InputText");
		this.oNSHTotalAssetsInBalanceSheet12InputText = this.getView().byId("idNSHTotalAssetsInBalanceSheet12InputText");
		this.oNSHTotalAssetsInBalanceSheet13InputText = this.getView().byId("idNSHTotalAssetsInBalanceSheet13InputText");		
		this.oNSHTotalAssetsInBalanceSheet14InputText = this.getView().byId("idNSHTotalAssetsInBalanceSheet14InputText");
		//this.oNSHCreateNSHTable = this.getView().byId("idNSHCreateNSHTable");
		//this.oExistingShareHolderTable = this.getView().byId("idESHTable");
		
		this.NSHPassPortAttachmentName = this.getView().byId("idNSHPassPortAttachmentName");
		this.NSHCommercialAttachmentName = this.getView().byId("idNSHCommercialAttachmentName");
		this.NSHBankStatementAttachmentName = this.getView().byId("idNSHBankStatementAttachmentName");
		this.NSHBalanceSheetAttachmentName = this.getView().byId("idNSHBalanceSheetAttachmentName");
		this.NSHOtherAttachmentName = this.getView().byId("idNSHOtherAttachmentName");
		
		this.NSHPassPortCopy = this.getView().byId("idNSHPPassportCopyFileUploader");
		//this.NSHCommercialRegAttachment = this.getView().byId("idNSHCommercialRegistFileUploader");
		this.NSHBankStatementAttachment = this.getView().byId("idNSHPBankStatementFileUploader");
		//this.NSHBalanceSheetAttachment = this.getView().byId("idNSHBalanceSheetFileUploader");
		this.NSHOtherAttachment = this.getView().byId("idNSHPOtherFileUploader");
		
		
		this.NSHOrgPassPortCopy = this.getView().byId("idNSHOrgPassportCopyFileUploader");
		this.NSHOrgCommercialRegAttachment = this.getView().byId("idNSHOrgCommercialRegistFileUploader");
		this.NSHOrgBankStatementAttachment = this.getView().byId("idNSHOrgBankStatementFileUploader");
		this.NSHOrgBalanceSheetAttachment = this.getView().byId("idNSHOrgBalanceSheetFileUploader");
		this.NSHOrgOtherAttachment = this.getView().byId("idNSHOrgOtherFileUploader");
		
		this.oNSHPersonVBox = this.getView().byId("idPersonVBox");
		this.oNSHOrganizationVBox = this.getView().byId("idOrganizationVBox");

		this.oNSHValidateworker.instantiateOrgNSH(this);
		this.oValidationHelper.addNSHAttachChangeEvent(this);
		
		/*var oRequestFinishedDeferredReadIndustrySectar = this.oModelHelper.readIndustrySector(this.oLanguageSelect.getSelectedKey());

		jQuery.when(oRequestFinishedDeferredReadIndustrySectar).then(jQuery.proxy(function(oResponse) {
			this.oNSHOrgIndustrySectorComboBox.setModel(oResponse);
		},this));*/
		
		var oRequestFinishedDeferredLILI = this.oModelHelper.readLILISection();

		jQuery.when(oRequestFinishedDeferredLILI).then(jQuery.proxy(function(oResponse) {			
			this.oNSHOrgSectionComboBox.setModel(oResponse);
		}, this));	
		
		
		
		
		
	
		var oRequestFinishedDeferred = this.oModelHelper.readCountry();

		jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
			
			
			this.oShareHolderNewShareHolderFragment.setModel(oResponse);
			
			
			var filterCountry = new sap.ui.model.Filter([
			        			 						new sap.ui.model.Filter("Landx50",
			        			 								sap.ui.model.FilterOperator.NE, "") ],
			        			 						false);
			var filterCountryKey = new sap.ui.model.Filter([
				        			 						new sap.ui.model.Filter("Land1",
				        			 								sap.ui.model.FilterOperator.NE, "") ],
				        			 						false);
			        			
			      			
			        			
			var oBinding = that.oNSHCountryComboBox.getBinding("items");
			
			
			
			oBinding.filter([filterCountry, filterCountryKey]);
			
			var oBinding1 = that.oNSHOrgCountryComboBox.getBinding("items");
			oBinding1.filter([filterCountry, filterCountryKey]);      			
			        			
			        			
			var filterNationality = new sap.ui.model.Filter([new sap.ui.model.Filter("Natio50",
			        				        			 	sap.ui.model.FilterOperator.NE, "") ],
			        				        			 	false);
			var filterNationalityKey = new sap.ui.model.Filter([new sap.ui.model.Filter("Land1",
    			 	sap.ui.model.FilterOperator.NE, "") ],
    			 	false);
			
		    var oNationalityBinding = that.oNSHNationalityComboBox.getBinding("items");
		    var oPreviousNationalityBinding = that.oNSHPreviousNationalityInputText.getBinding("items");
		    oNationalityBinding.filter([filterNationality, filterNationalityKey]);
		    oPreviousNationalityBinding.filter([filterNationality, filterNationalityKey]);
		    
		   // thisContext._oBIILegalStatusCombobox = thisContext.getView().byId("idBILegalStatusComboBox");
			var oBIILegalStatusFilter = new sap.ui.model.Filter("Textlong", sap.ui.model.FilterOperator.NE, "");
			var oBIILegalStatusKeyFilter = new sap.ui.model.Filter("Source", sap.ui.model.FilterOperator.NE, "");
			this.oNSHOrgLegalStatusComboBox.getBinding("items").filter([oBIILegalStatusFilter,oBIILegalStatusKeyFilter]);
			
			
		}, this));	
		
		 this.loadSavedShareHolderDetails();
			
		}
		
		if(this.oLILIBusinessTypeComboBox.getSelectedKey() === "N" && this.oLILILicenseActivityMultiComboBox.getSelectedItems().length === 0 ){
			
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("SelectLicenseActivityinLI"));
			this.oShowAlertDialog.open();
			
			}
			
			
			this.handleLicenseButtonClick();
			this.oLicenseInfoTab.setSelectedIndex(1);			
			this._oLicenseInfoContent.setVisible(true);
			this._oBasicInfoContent.setVisible(false);
			this._oShareHoldersInfoContent.setVisible(false);
			this._oTermsAndConditionsInfoContent.setVisible(false);
			this._oPreviewInfoContent.setVisible(false);
			
			if(sap.ui.getCore().getConfiguration().getRTL()){			
				this._oLicenseInfoButton.setSrc("common/mime/license_hover_ar.png");
				this._oShareholderInfoButton.setSrc("common/mime/shareholder_ar.png");
				this._oPreviewInfoButton.setSrc("common/mime/preview_ar.png");
				this._oTermsInfoButton.setSrc("common/mime/terms_ar.png");
				this._oSubmitInfoButton.setSrc("common/mime/submit_ar.png");
				this._oBasicInfoButton.setSrc("common/mime/basicinfo_ar.png");
			}else{
				this._oLicenseInfoButton.setSrc("common/mime/license_hover.png");
				this._oShareholderInfoButton.setSrc("common/mime/shareholder.png");
				this._oPreviewInfoButton.setSrc("common/mime/preview.png");
				this._oTermsInfoButton.setSrc("common/mime/terms.png");
				this._oSubmitInfoButton.setSrc("common/mime/submit.png");
				this._oBasicInfoButton.setSrc("common/mime/basicinfo.png");
			}
			
			
			
			this._oStagesHeading.setContent(this.oModelHelper
					.getText("LicenseInformationHTML"));
			
		}else if(!this.oBusinessTypeSurveyID){
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("SelectBusinessTypeinLI"));
			this.oShowAlertDialog.open();
			
			}
			this.handleLicenseButtonClick();
			this.oLicenseInfoTab.setSelectedIndex(1);			
			this._oLicenseInfoContent.setVisible(true);
			this._oBasicInfoContent.setVisible(false);
			this._oShareHoldersInfoContent.setVisible(false);
			this._oTermsAndConditionsInfoContent.setVisible(false);
			this._oPreviewInfoContent.setVisible(false);
			
			if(sap.ui.getCore().getConfiguration().getRTL()){			
				this._oLicenseInfoButton.setSrc("common/mime/license_hover_ar.png");
				this._oShareholderInfoButton.setSrc("common/mime/shareholder_ar.png");
				this._oPreviewInfoButton.setSrc("common/mime/preview_ar.png");
				this._oTermsInfoButton.setSrc("common/mime/terms_ar.png");
				this._oSubmitInfoButton.setSrc("common/mime/submit_ar.png");
				this._oBasicInfoButton.setSrc("common/mime/basicinfo_ar.png");
			}else{
				this._oLicenseInfoButton.setSrc("common/mime/license_hover.png");
				this._oShareholderInfoButton.setSrc("common/mime/shareholder.png");
				this._oPreviewInfoButton.setSrc("common/mime/preview.png");
				this._oTermsInfoButton.setSrc("common/mime/terms.png");
				this._oSubmitInfoButton.setSrc("common/mime/submit.png");
				this._oBasicInfoButton.setSrc("common/mime/basicinfo.png");
			}
			
			
			
			this._oStagesHeading.setContent(this.oModelHelper
					.getText("LicenseInformationHTML"));
			
			this.oSaveImage.setVisible(true);
			this.oSaveLink.setVisible(true);
			
			
		}else{
			//Start of Experience Questions
			
			if(this.oLILIBusinessTypeComboBox.getSelectedKey() === "N"){
				var oRequestFinishedDeferredLILILicenseType = that.oModelHelper.readLILILicenseType(that.oLILISectionComboBox.getSelectedKey(),that.oLILIDivisionComboBox.getSelectedKey(), that.oLILIGroupComboBox.getSelectedKeys(), that.oLILIClassMultiComboBox.getSelectedKeys());
				
				jQuery.when(oRequestFinishedDeferredLILILicenseType).then(jQuery.proxy(function(oResponseLicenseType) {
					var that = this;
					if(oResponseLicenseType !== undefined && oResponseLicenseType.LILILicenseActivityType.length>0){			
						this.loadExperienceQuestions("None of the above", oResponseLicenseType);						
					}
				}, this));	
			}else{
				this.loadExperienceQuestions("Not None of the above", this.oBusinessTypeSurveyID);			
			}   
			
			//End of Experience Questions
			
	
			
		}
		
		
		
	},
	loadSavedShareHolderDetails : function(){
		/*if (!this.oExistingShareHolderTable) {
			
			
			
		}*/
		//*******Read Exisitng share holders
	    var thatContext = this;
	    this.openBusyDialog();
		var oRequestFinishedDeferredSavedSH = this.oModelHelper.readSavedShareHolders(this.oRef_id);

		jQuery.when(oRequestFinishedDeferredSavedSH).then(jQuery.proxy(function(oResponse) {
			thatContext.closeBusyDialog();
			
			var oLanguage;
			if(this.oLanguageSelect.getSelectedKey() === "EN")
			{
				oLanguage="E";
			}else{
				oLanguage="A";
			}
			
			
			for(var i = 0; i < oResponse.data.results.length; i++){
				
				var nationality = [];
    			nationality = oResponse.data.results[i].CurrNationalty.split("~");
    			
    			if(oLanguage === "E"){
    				nationality = nationality[0];
    			}else{
    				nationality = nationality[1];
    			}
    			
    			
    			if(oResponse.data.results[i].Return !== "Data does not exist"){
    				thatContext.oSavedSHData.SavedShareHolderCollection.push({
        	 			"ShareHolderName":oResponse.data.results[i].EntityFname+" "+oResponse.data.results[i].EntityLname,	    	 			
        	 			"Nationalty" : nationality,//oResponse.data.results[i].CurrNationalty,
        	 			"Percentage" : oResponse.data.results[i].Percentage,
        	 			"EntityNo" : oResponse.data.results[i].EntityNo});
    			}
				
				
				
				/*if(oResponse.data.results[i].ShldrType === "Existing" 
					&& oResponse.data.results[i].EntityFname !== "" 
					&& oResponse.data.results[i].Exbpno !== ""
					&& oResponse.data.results[i].Percentage !== ""){
					thatContext.oSavedSHData.SavedShareHolderCollection.push({
	    				"Bpno":oResponse.data.results[i].Exbpno,
	    	 			"Bpname":oResponse.data.results[i].EntityFname,	    	 			
	    	 			"EntityNo" : oResponse.data.results[i].EntityNo,
	    	 			"Percentage" : oResponse.data.results[i].Percentage});
				}
				if(oResponse.data.results[i].ShldrType === "Organization" || oResponse.data.results[i].ShldrType === "Person"){
					that.oNSHCreateNewData.NSHCollection.push({
	         			"EntityFname":oResponse.data.results[i].EntityFname, 
	         			"EntityLname": oResponse.data.results[i].EntityLname, 
	         			"ShldrType":oResponse.data.results[i].ShldrType,
	         			"Percentage":oResponse.data.results[i].Percentage,
	         			"EntityNo": oResponse.data.results[i].EntityNo});
				}*/
			}
			
			that.oSHJSONModel.setData(that.oSavedSHData);
			that.oSHTable.setModel(that.oSHJSONModel);
			that.oSHTable.bindItems("/SavedShareHolderCollection",new sap.m.ColumnListItem({
		        cells : [ new sap.ui.commons.TextView({
		          text : "{ShareHolderName}"
		        }),new sap.ui.commons.TextView({
		          text : "{Percentage}"
		        }),  new sap.ui.commons.TextView({
		          text : "{Nationalty}"
		        })]
		      }));
			
			/* that.oNSHCreateNewDataJSONData.setData(that.oNSHCreateNewData);							                 
             that.oNSHCreateNSHTable.setModel(that.oNSHCreateNewDataJSONData);							         		
             that.oNSHCreateNSHTable.bindItems("/NSHCollection", new sap.m.ColumnListItem({
            	vAlign : "Top",
		        cells : [ new sap.ui.commons.TextView({
			          text : "{EntityFname}"
			        }),new sap.ui.commons.TextView({
			          text : "{EntityLname}"
			        }),  new sap.ui.commons.TextView({
			          text : "{ShldrType}"
			        }),  new sap.ui.commons.TextView({
			          text : "{Percentage}"
			        }),  new sap.m.Link({
			          text : that.oModelHelper.getText("Edit"),
			          visible : false,
			          press : [oResponse.EntityNo, this.handleNSHEditButtonPress, this]
			        })]
			      }));
			
			thatContext.oSavedSHDataJSONData.setData(thatContext.oSavedSHData);
	 		thatContext.oExistingShareHolderTable.setModel(this.oSavedSHDataJSONData);
			
			thatContext.oExistingShareHolderTable.bindItems("/SavedShareHolderCollection",new sap.m.ColumnListItem({
		        cells : [ new sap.ui.commons.TextView({
		          text : "{Bpno}"
		        }),new sap.ui.commons.TextView({
		          text : "{Bpname}"
		        }),  new sap.ui.commons.TextView({
		          text : "{Percentage}"
		        })]
		      }));*/
		}, this));
	},
	loadExperienceQuestions : function(oLicenseType, oResponseLicenseType){
		var oLanguage;
		if(this.oLanguageSelect.getSelectedKey() === "EN")
		{
			oLanguage="E";
		}else{
			oLanguage="A";
		}
		
		var oRequestFinishedExperienceQuestionsDeferred;
		
		if(oLicenseType === "None of the above"){
			this.openBusyDialog();
			oRequestFinishedExperienceQuestionsDeferred = this.oModelHelper.readExperienceQuestions(encodeURIComponent(oResponseLicenseType.LILILicenseActivityType[0].SurveyID), oLanguage);
		   //var oRequestFinishedExperienceQuestionsDeferred = this.oModelHelper.readExperienceQuestions(encodeURIComponent(this.oLicenseTypeInputText.getValue()));
		}else{
			this.openBusyDialog();
			oRequestFinishedExperienceQuestionsDeferred = this.oModelHelper.readExperienceQuestions(encodeURIComponent(oResponseLicenseType), oLanguage);
		}
	
			
			jQuery.when(oRequestFinishedExperienceQuestionsDeferred).then(jQuery.proxy(function(oResponse) {
				this.closeBusyDialog();
				
				var questions = [];
				var nodeID = [];
				var surveyID = [];
				var answers = [];
				var units = [];
				var attachmentFlag = [];

				this.oExperienceQuestionsMatrixLayout = this.getView().byId("idNewShareHolderExperienceQuestionsMLAyout");
				this.oExperienceQuestionsMatrixLayout.destroyRows();
				//this.oExperienceQuestionsMatrixLayout.removeAllRows();
				//this.oExperienceQuestionsMatrixLayout = this.oExperienceQuestionsMatrixLayout.destroyRows();
				
				this.oTotalExperienceQuestions = 0;
				
				for(var i=0; i < oResponse.data.results.length; i++){
					questions[i] = oResponse.data.results[i].Qtxtlg;
					nodeID[i] = oResponse.data.results[i].NodeGuid;
					surveyID[i] = oResponse.data.results[i].SurveyID;
					units[i] = oResponse.data.results[i].Units;
					attachmentFlag[i] = oResponse.data.results[i].Attachment;

					
					++this.oTotalExperienceQuestions;

				}
				
				for(var q=0; q < questions.length; q++){
					
					
					if(sap.ui.getCore().byId("idEQuestionMadatory"+q)){
						sap.ui.getCore().byId("idEQuestionMadatory"+q).destroy();
					}	
					
					if(sap.ui.getCore().byId("idEQuestion"+q)){
						sap.ui.getCore().byId("idEQuestion"+q).destroy();
					}						
					if(sap.ui.getCore().byId("idEQuestionUnits"+q)){
						sap.ui.getCore().byId("idEQuestionUnits"+q).destroy();
					}						
					if(sap.ui.getCore().byId("idEQAnswer"+q)){
						sap.ui.getCore().byId("idEQAnswer"+q).destroy();
					}
					if(sap.ui.getCore().byId("idEQFileUploader"+q)){
						sap.ui.getCore().byId("idEQFileUploader"+q).destroy();
					}						
				}

				
				n = 0 ;
				for(var i=0; i < questions.length; i++){
					
					this.openBusyDialog();
					var oRequestFinishedDeferred = this.oModelHelper.readEQAnswers(oResponse.data.results[i].NodeGuid, encodeURIComponent(this.oBusinessTypeSurveyID),oLanguage);

					jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
						this.closeBusyDialog();
						
						answers.push(oResponse.data.results);
						
						n++;
		                
						if(n === questions.length){
							
							p = 0;
							for(var l=0; l < questions.length; l++){
								
								var oEQMandatoryTextView = new sap.ui.commons.TextView("idEQuestionMadatory"+l,{
									text : "*", 
									/*visible : false,*/
									});
								oEQMandatoryTextView.addStyleClass("textcolorred");
								
								var oTextView = new sap.ui.commons.TextView("idEQuestion"+l,{
									text : questions[l],
									});
								var oUnitsTextView = new sap.ui.commons.TextView("idEQuestionUnits"+l,{
									text : units[l],
									});
								var oSelect = new sap.m.ComboBox("idEQAnswer"+l);
								
								var oFileUploader = new sap.ui.unified.FileUploader("idEQFileUploader"+l,{
									sendXHR : true,
									useMultipart : false,
									sameFilenameAllowed : true,
									mimeType : "application/pdf"
								});
								
								/*iconOnly : true,
								icon : "common/mime/attachment.png",*/


								//var oTextViewAttachment = new sap.ui.commons.TextView("idAQAttachment"+l,{});
								
								for(var m=0; m < answers.length; m++){								
								
									for(var t=0; t < answers[m].length; t++){
										
										if(nodeID[p] === answers[m][t].NodeGuid){
										
											var vItem = new sap.ui.core.Item();		    				
						    				
											vItem.setText(answers[m][t].Atxtlg);						
											vItem.setKey(answers[m][t].Atxtlg);
											oSelect.addItem(vItem);
										}
									}
									
								}p++;
								
								oTextView.data("idEQuestion"+l,nodeID[l]);
								
								var oRow1 = new sap.ui.commons.layout.MatrixLayoutRow();
								
								var oCell0 = new sap.ui.commons.layout.MatrixLayoutCell();
								var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell();
								var oCell2 = new sap.ui.commons.layout.MatrixLayoutCell();
								
								oCell0.addContent(oTextView);
								oCell0.addContent(oEQMandatoryTextView);
								oCell1.addContent(oSelect);
								oCell2.addContent(oUnitsTextView);	
								
								oRow1.addCell(oCell0);
								oRow1.addCell(oCell1);
								oRow1.addCell(oCell2);
								
								this.oExperienceQuestionsMatrixLayout.addRow(oRow1);	
								
								if(attachmentFlag[l] === "X"){
									var oRow2 = new sap.ui.commons.layout.MatrixLayoutRow();

									var oCell3 = new sap.ui.commons.layout.MatrixLayoutCell();
									oCell3.setColSpan(2);
									oCell3.addContent(oFileUploader);
									oRow2.addCell(oCell3);							
									this.oExperienceQuestionsMatrixLayout.addRow(oRow2);
								}
								
							}			
							
							that.closeBusyDialog();		    				
						}
					}, this));				
					
				}
				
			}, this));			
	},
	handlePreviewInfoButtonClick : function(){
		
		if(this.allBAQLoaded){
			this.oSaveImage.setVisible(false);
			this.oSaveLink.setVisible(false);
			
			this.getPreviewBAQ(this.oLanguageSelect.getSelectedKey());
			
			this._oPreviewInfoContent.setVisible(true);
			this._oShareHoldersInfoContent.setVisible(false);
			this._oLicenseInfoContent.setVisible(false);
			this._oBasicInfoContent.setVisible(false);
			this._oTermsAndConditionsInfoContent.setVisible(false);
			this._oStagesHeading.setContent(this.oModelHelper
					.getText("PreviewInformationHTML"));
			
			
			
			if(sap.ui.getCore().getConfiguration().getRTL()){			
				this._oPreviewInfoButton.setSrc("common/mime/preview_hover_ar.png");
				this._oLicenseInfoButton.setSrc("common/mime/license_ar.png");
				this._oShareholderInfoButton.setSrc("common/mime/shareholder_ar.png");
				this._oTermsInfoButton.setSrc("common/mime/terms_ar.png");
				this._oSubmitInfoButton.setSrc("common/mime/submit_ar.png");
				this._oBasicInfoButton.setSrc("common/mime/basicinfo_ar.png");
			}else{
				this._oPreviewInfoButton.setSrc("common/mime/preview_hover.png");
				this._oLicenseInfoButton.setSrc("common/mime/license.png");
				this._oShareholderInfoButton.setSrc("common/mime/shareholder.png");
				this._oTermsInfoButton.setSrc("common/mime/terms.png");
				this._oSubmitInfoButton.setSrc("common/mime/submit.png");
				this._oBasicInfoButton.setSrc("common/mime/basicinfo.png");
			}
			
			
			this.oValidationHelper.validateBasicInfo(this);
			this.handlePreviewLicenseInfoTabStripSelect();
			
			
			
			this.oPreviewESHCreateNSHTable = this.getView().byId("idPreviewESHCreateNSHTable");
			this.oPreviewESHCreateNSHTable.unbindItems();

			this.oPreviewESHCreateNSHTable.setModel(this.oSHJSONModel);
			
			this.oPreviewESHCreateNSHTable.bindItems("/SavedShareHolderCollection",new sap.m.ColumnListItem({
				cells : [ new sap.ui.commons.TextView({
			          text : "{ShareHolderName}"//, enabled : false
			        }),new sap.ui.commons.TextView({
			          text : "{Percentage}"//, enabled : false
			        }),  new sap.ui.commons.TextView({
			          text : "{Nationalty}"//, enabled : false
			        })]
		      }));
		}else{
			sap.m.MessageToast.show(that.oModelHelper.getText("LoadingPBAQ"), {duration : 5000});
			this.handleLicenseButtonClick();
		}
		
		
		
		/*this.oPreviewNSHCreateNSHTable = this.getView().byId("idPreviewNSHCreateNSHTable");
		this.oPreviewNSHCreateNSHTable.unbindItems();		
		this.oPreviewNSHCreateNSHTable.setModel(that.oNSHCreateNewDataJSONData);							         		
		this.oPreviewNSHCreateNSHTable.bindItems("/NSHCollection", new sap.m.ColumnListItem({
	        cells : [ new sap.ui.commons.TextView({
		          text : "{EntityFname}", enabled : false
		        }),new sap.ui.commons.TextView({
		          text : "{EntityLname}", enabled : false
		        }),  new sap.ui.commons.TextView({
		          text : "{ShldrType}", enabled : false
		        }),  new sap.ui.commons.TextView({
		          text : "{Percentage}", enabled : false
		        })]
		      }));*/


	},
	handleTermsInfoButtonClick : function(){
		
		this.oSaveImage.setVisible(false);
		this.oSaveLink.setVisible(false);
		
		
		this._oShareHoldersInfoContent.setVisible(false);
		this._oLicenseInfoContent.setVisible(false);
		this._oBasicInfoContent.setVisible(false);
		this._oTermsAndConditionsInfoContent.setVisible(true);
		this._oPreviewInfoContent.setVisible(false);
		
		this._oStagesHeading.setContent(this.oModelHelper
				.getText("TermsnCondInformationHTML"));
		
		
		
		if(sap.ui.getCore().getConfiguration().getRTL()){			
			this._oTermsInfoButton.setSrc("common/mime/terms_hover_ar.png");
			this._oLicenseInfoButton.setSrc("common/mime/license_ar.png");
			this._oShareholderInfoButton.setSrc("common/mime/shareholder_ar.png");
			this._oPreviewInfoButton.setSrc("common/mime/preview_ar.png");
			this._oSubmitInfoButton.setSrc("common/mime/submit_ar.png");
			this._oBasicInfoButton.setSrc("common/mime/basicinfo_ar.png");
		}else{
			this._oTermsInfoButton.setSrc("common/mime/terms_hover.png");
			this._oLicenseInfoButton.setSrc("common/mime/license.png");
			this._oShareholderInfoButton.setSrc("common/mime/shareholder.png");
			this._oPreviewInfoButton.setSrc("common/mime/preview.png");
			this._oSubmitInfoButton.setSrc("common/mime/submit.png");
			this._oBasicInfoButton.setSrc("common/mime/basicinfo.png");
		}
		
		if (!this.oTermsAndConditionsFragment) {
			this.oTermsAndConditionsFragment = sap.ui.xmlfragment("com.sagia.view.fragments.terms_and_conditions", this.getView()
					.getController());
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();

			if(dd<10) {
			    dd='0'+dd
			} 

			if(mm<10) {
			    mm='0'+mm
			} 

			today = dd+'/'+mm+'/'+yyyy;
			
			this.oTermsandCondtionsDate = this.getView().byId("idTNCDate");
			this.oTermsandCondtionsDate.setValue(today);
			
			this.oTermsandCondtionsName = this.getView().byId("idTCNameInputText");
			this.oTermsandCondtionsRole = this.getView().byId("idTCRoleComboBox");

		}
		
		this.oTermsandCondtionsName.setValue(this.oBICIFirstNameInputText.getValue()+" "+this.oBICILastNameInputText.getValue());
		this.oTermsandCondtionsRole.setSelectedKey(this.oBICIRoleInputText.getSelectedKey());
		
	},
	handleSubmitInfoButtonMainClick : function(){
		this.oSaveImage.setVisible(false);
		this.oSaveLink.setVisible(false);
		
		if(sap.ui.getCore().getConfiguration().getRTL()){			
			this._oSubmitInfoButton.setSrc("common/mime/submit_hover_ar.png");
			this._oLicenseInfoButton.setSrc("common/mime/license_ar.png");
			this._oShareholderInfoButton.setSrc("common/mime/shareholder_ar.png");
			this._oPreviewInfoButton.setSrc("common/mime/preview_ar.png");
			this._oTermsInfoButton.setSrc("common/mime/terms_ar.png");
			this._oBasicInfoButton.setSrc("common/mime/basicinfo_ar.png");
		}else{
			this._oSubmitInfoButton.setSrc("common/mime/submit_hover.png");
			this._oLicenseInfoButton.setSrc("common/mime/license.png");
			this._oShareholderInfoButton.setSrc("common/mime/shareholder.png");
			this._oPreviewInfoButton.setSrc("common/mime/preview.png");
			this._oTermsInfoButton.setSrc("common/mime/terms.png");
			this._oBasicInfoButton.setSrc("common/mime/basicinfo.png");
		}
		
		this.handleTermsInfoButtonClick();

	},
	handleSubmitInfoButtonClick : function(){
		
		
		
		that = this;
		
		this._oStagesHeading.setContent(this.oModelHelper
				.getText("SubmitInformationHTML"));
		
		
		
		this.oSumOfESHPercentage = 0;
		this.oSumOfNSHPercentage = 0;
		
		if(sap.ui.getCore().getConfiguration().getRTL()){			
			this._oSubmitInfoButton.setSrc("common/mime/submit_hover_ar.png");
			this._oLicenseInfoButton.setSrc("common/mime/license_ar.png");
			this._oShareholderInfoButton.setSrc("common/mime/shareholder_ar.png");
			this._oPreviewInfoButton.setSrc("common/mime/preview_ar.png");
			this._oTermsInfoButton.setSrc("common/mime/terms_ar.png");
			this._oBasicInfoButton.setSrc("common/mime/basicinfo_ar.png");
		}else{
			this._oSubmitInfoButton.setSrc("common/mime/submit_hover.png");
			this._oLicenseInfoButton.setSrc("common/mime/license.png");
			this._oShareholderInfoButton.setSrc("common/mime/shareholder.png");
			this._oPreviewInfoButton.setSrc("common/mime/preview.png");
			this._oTermsInfoButton.setSrc("common/mime/terms.png");
			this._oBasicInfoButton.setSrc("common/mime/basicinfo.png");
		}


		/*for(var i=0; i < this.oESHCreateNewData.ESHCollection.length; i++){
			this.oSumOfESHPercentage += this.oESHCreateNewData.ESHCollection[i].Percentage;
		}
		for(var j=0; j < this.oNSHCreateNewData.NSHCollection.length; j++){
			this.oSumOfNSHPercentage += this.oNSHCreateNewData.NSHCollection[j].Percentage;
		}
		
		this.oTotalShareHolderPercentage = this.oSumOfESHPercentage + this.oSumOfNSHPercentage;*/
		
		
		this.oTotalNewShareHolderPercentage = 0;
		this.oTotalExistingShareHolderPercentage = 0;
		
		/*for(k = 0; k < this.oNSHCreateNewData.NSHCollection.length; k++){			
			this.oTotalNewShareHolderPercentage += Number(this.oNSHCreateNewData.NSHCollection[k].Percentage);			
		}*/
		for(m = 0; m < this.oSavedSHData.SavedShareHolderCollection.length; m++){			
			this.oTotalExistingShareHolderPercentage += Number(this.oSavedSHData.SavedShareHolderCollection[m].Percentage);			
		}
		
		//this.oGlobalTotalShareHolderPercentage = (this.oTotalNewShareHolderPercentage + this.oTotalExistingShareHolderPercentage);
		
		this.oGlobalTotalShareHolderPercentage = this.oTotalExistingShareHolderPercentage;
		
		//console.log(this.oGlobalTotalShareHolderPercentage);
		if(!this.oShareHolderNewShareHolderFragment){
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("ReviewShareHolderDetails"));
			this.oShowAlertDialog.open();
			
			}
			this. handleShareholderInfoButtonClick();
		}else if(this.oGlobalTotalShareHolderPercentage === 100){
			this.oTermsAndConditionsCheckBox = this.getView().byId("idTermsAndConditionsCheckBox");

			if(this.oTermsAndConditionsCheckBox.getSelected()){
				that.submit();		
			}else{
				//this.oTermsAndConditionsCheckBox.setValueState("Error");
				//this.oTermsAndConditionsCheckBox.setShowValueStateMessage(false);
				
				if(!this.oShowAlertDialog.isOpen())
				{
				this.oAlertTextView.setText(this.oModelHelper.getText("AcceptTC"));
				this.oShowAlertDialog.open();
				
				}
			}
		}else{
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("NSHPercentageNot100"));
			this.oShowAlertDialog.open();
			
			}
		}
		
	},
	
	submit : function(){
	   		//this.oSubmitClicked = true;
	   		if(!this.oShowSubmitAlertDialog.isOpen())
			{
			this.oShowSubmitAlertDialog.open();
			
			}
			//this.handleSaveLinkPressSave();
				
	},
	handleSubmitAlertYesConfirmedDialogButtonPress : function(){
		this.oShowSubmitAlertDialog.close();
		
		if(!this.oProductsTableVBox.getVisible()){
			this.oModelHelper.deleteSavedIndustrialProducts(this.oRef_id);
		}
		
		this.oSubmitClicked = true;
		this.handleSaveLinkPressSave();
	}
	
});