jQuery.sap.require("com.sagia.common.ModelHelper");
jQuery.sap.require("sap.ui.model.FilterOperator");
jQuery.sap.require("com.sagia.common.js.validate");



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
		this._oShareHoldersInfoContent = this.getView().byId("idShareHoldersInfoContent");
		
		this._oStagesHeading = this.getView().byId("idStagesHeading");
		this._oBasicInfoIconTab = this.getView().byId("idBasicInfoIconTab");
		this._oOrgTabFilter = this.getView().byId("idIconTabFilterOrg");
		this._oTermsAndConditionsInfoContent = this.getView().byId("idTermsAndConditionsInfoContent");
		this._oPreviewInfoContent = this.getView().byId("idPreviewInfoContent");
		this._oLI_BAQ_1_to_6 = this.getView().byId("idLI_BAQ_1_to_6MAtrixLayoutz");
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
		
		this._oRePasswordInputText = this.getView().byId("idInputRePassword");
		this._oRePasswordErrorMsg = this.getView().byId("idRegRePasswordErrorMsg");
		
		this._oMobileNumberInputText = this.getView().byId("idInputMobileNumber");
		this._oRegMobileErrorMsg = this.getView().byId("idRegMobileErrorMsg");
		
		this._oEmailInputText = this.getView().byId("idInputEmail");
		this._oRegEmailErrorMsg = this.getView().byId("idRegEmailErrorMsg");
		
		
		
		this._oLanguageSelectionComboBox = this.getView().byId("idLanguageSelectionComboBox");
		
		this._basicInfo_OrganizationFragmentChild = sap.ui.xmlfragment("com.sagia.view.fragments.bi_organization", this.getView()
				.getController());
		this._licenseInfo_BAQFragmentChild = sap.ui.xmlfragment("com.sagia.view.fragments.bizactivityquestions", this.getView()
				.getController());
		
		this.oUserID = this.getView().byId("idUserIDInputText");
		this.oPassword = this.getView().byId("idPasswordInputText");
		this.oInputEmail = this.getView().byId("idEmailInputText");
		this.oContactNumber = this.getView().byId("idContactNumberInputText");
		this.oContactPersonName = this.getView().byId("idContactNameInputText");
		this.oCompany = this.getView().byId("idCompanyInputText");
		this.oPoweOfAttorneyFileUpload = this.getView().byId("idBICIPowerofAttorneyFileUploader");
	},
	handlePowerOfAttorneyUploadPress : function(oEvent){
		//console.log("handlePowerOfAttorneyUploadPress");
		this.oPoweOfAttorneyFileUpload.upload();
	},
	handleSaveLinkPressSave : function(oEvent){
		
		
       
		if(this.oRecordExists){
			try{
			var oRequestFinishedDeferred = this.oModelHelper.saveBIOI(this.oRef_id, 
					this.oBIOIOrganizationName.getValue(),
					this._oidRegionComboBox.getValue(),
					//this._oidRegionComboBox.getSelectedItem().getText(),
					this._oBIILegalStatusCombobox.getValue(),
					//this._oBIILegalStatusCombobox.getSelectedItem().getText(),
					this._oBICityComboBox.getValue(),
					//this._oBICityComboBox.getSelectedItem().getText(),
					this.oBIOIMultiNationalCompanyCombobox.getValue(),
					//this.oBIOIMultiNationalCompanyCombobox.getSelectedItem().getText(),
					this.oBIOIEmailInputText.getValue(),
					this.oBIOILaborSizeInputText.getValue(),
					this.oBIOICommMethodComboBox.getValue(),
					this.oBIOICapitalInputText.getValue(),
					this.oBIOITelephoneCountryCodeInputText.getValue(),
					this.oBIOITelephoneInputText.getValue(),
					this.oBIOIMobilephoneCountryCodeInputText.getValue(),
					this.oBIOIMobilephoneInputText.getValue(),
					this.oBIOIFaxCountryCodeInputText.getValue(),
					this.oBIOIFaxInputText.getValue(),
					this.oBIOIWebSiteInputText.getValue(),
					this.oBIOITelephoneCountryCodeInputText.getValue(),
					this.oBIOIFaxCountryCodeInputText.getValue(),
					this.oBIOIMobilephoneCountryCodeInputText.getValue()					
					
					);

			jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
				sap.m.MessageToast.show(this.oModelHelper
    					.getText("Saved"));	
			}, this));	
			}
			catch(err){
				sap.m.MessageToast.show(this.oModelHelper
    					.getText("AllFieldsAreRequired"));	
			}
			
		}else{
			try{
			var oRequestFinishedDeferred = this.oModelHelper.createAndUpdateBIOI(this.oRef_id, 
					this.oBIOIOrganizationName.getValue(),
					this._oidRegionComboBox.getValue(),
					//this._oidRegionComboBox.getSelectedItem().getText(),
					this._oBIILegalStatusCombobox.getValue(),
					//this._oBIILegalStatusCombobox.getSelectedItem().getText(),
					this._oBICityComboBox.getValue(),
					//this._oBICityComboBox.getSelectedItem().getText(),
					this.oBIOIMultiNationalCompanyCombobox.getValue(),
					//this.oBIOIMultiNationalCompanyCombobox.getSelectedItem().getText(),
					this.oBIOIEmailInputText.getValue(),
					this.oBIOILaborSizeInputText.getValue(),
					this.oBIOICommMethodComboBox.getValue(),
					this.oBIOICapitalInputText.getValue(),
					this.oBIOITelephoneCountryCodeInputText.getValue(),
					this.oBIOITelephoneInputText.getValue(),
					this.oBIOIMobilephoneCountryCodeInputText.getValue(),
					this.oBIOIMobilephoneInputText.getValue(),
					this.oBIOIFaxCountryCodeInputText.getValue(),
					this.oBIOIFaxInputText.getValue(),
					this.oBIOIWebSiteInputText.getValue(),
					this.oBIOITelephoneCountryCodeInputText.getValue(),
					this.oBIOIFaxCountryCodeInputText.getValue(),
					this.oBIOIMobilephoneCountryCodeInputText.getValue()					
					);
			
			
				
            jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
            	this.oRecordExists = true;
            	sap.m.MessageToast.show(this.oModelHelper
    					.getText("Saved"));	
			}, this));	
			}
			catch(err){
				sap.m.MessageToast.show(this.oModelHelper
    					.getText("AllFieldsAreRequired"));	
			}
			
		}
		
		if(this.oContactInfoRecordExists){
			try{
			var oRequestFinishedDeferred = this.oModelHelper.saveBICI(
					this.oRef_id,
					this.oBICIFirstNameInputText.getValue(),
					this.oBICILastNameInputText.getValue(),
					this.oBICICityInputText.getValue(),
					this.oBICIGenderComboBox.getValue(),
					this.oBICIPOBoxInputText.getValue(),
					this.oBICITelephoneCountryCodeInputText.getValue(),
					this.oBICITelephoneInputText.getValue(),
					this.oBICIPostalCodeInputText.getValue(),
					this.oBICIMobileCountryCodeInputText.getValue(),
					this.oBICIMobilePhoneInputText.getValue(),
					this.oBICICommMethodComboBox.getValue(),
					this.oBICIFaxCountryCodeInputText.getValue(),
					this.oBICIFaxInputText.getValue(),
					this.oBICIRoleInputText.getValue(),
					this.oBICIEmailInputText.getValue(),
					this._oBICICountryCombobox.getValue(),
					this._oBICINationalityCombobox.getValue(),						
					this.oBICIStreet.getValue()		
							);
			this.oModelHelper.uploadPOA(this.oBICIPowerofAttorneyFileUploader);
			

			jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
				sap.m.MessageToast.show(this.oModelHelper
    					.getText("Saved"));	
			}, this));	
			}
			catch(err){
				sap.m.MessageToast.show("saveBICI > "+this.oModelHelper
    					.getText("AllFieldsAreRequired"));	
			}
			
		}else{
			try{
			var oRequestFinishedDeferred = this.oModelHelper.createAndUpdateBICI(
			this.oRef_id,
			this.oBICIFirstNameInputText.getValue(),
			this.oBICILastNameInputText.getValue(),
			this.oBICICityInputText.getValue(),
			this.oBICIGenderComboBox.getValue(),
			this.oBICIPOBoxInputText.getValue(),
			this.oBICITelephoneCountryCodeInputText.getValue(),
			this.oBICITelephoneInputText.getValue(),
			this.oBICIPostalCodeInputText.getValue(),
			this.oBICIMobileCountryCodeInputText.getValue(),
			this.oBICIMobilePhoneInputText.getValue(),
			this.oBICICommMethodComboBox.getValue(),
			this.oBICIFaxCountryCodeInputText.getValue(),
			this.oBICIFaxInputText.getValue(),
			this.oBICIRoleInputText.getValue(),
			this.oBICIEmailInputText.getValue(),
			this._oBICICountryCombobox.getValue(),
			this._oBICINationalityCombobox.getValue(),						
			this.oBICIStreet.getValue()
					);
			
			 	
			
				
            jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
            	this.oContactInfoRecordExists = true;
            	sap.m.MessageToast.show(this.oModelHelper
    					.getText("Saved"));	
			}, this));	
			}
			catch(err){
				console.log(" err "+err);
				sap.m.MessageToast.show(this.oModelHelper
    					.getText("AllFieldsAreRequired"));	
			}
			
		}
		
		
		
	},
	handleBasicInfoTabsSelection : function(oEvent){
		//console.log("Tab Selected");
		
		
		
		
		
	},
	handleRegionSelectionComboBox : function(oControlEvent){
		//console.log(oControlEvent.getParameters('selectedItem').selectedItem.mProperties.text);
		
		this._oBICityComboBox.setEnabled(true);
		this._oBICityComboBox.setValue("");
		var filters = [];
		//console.log(oControlEvent.getParameters('selectedItem').selectedItem);
		//console.log(oControlEvent.getParameters('selectedItem').selectedItem+" "+oControlEvent.getParameters('selectedItem').selectedItem.mProperties.key);
		//var oFilter1 = new sap.ui.model.Filter("CityName_cty", sap.ui.model.FilterOperator.NE, "");
		
		if(oControlEvent.getParameters('selectedItem').selectedItem !== null){
		var oFilter2 = new sap.ui.model.Filter("Bland_cty", sap.ui.model.FilterOperator.EQ, oControlEvent.getParameters('selectedItem').selectedItem.mProperties.key);
		this._oBICityComboBox.getBinding("items").filter(oFilter2);
		
		}
		
		//this._oBICityComboBox.getBinding("items").filter(oFilter2);
		
		
		//filters = new sap.ui.model.Filter([oFilter1, oFilter2]);
		
	},
	handleCountrySelectionComboBox : function(oControlEvent){
		
		
		//console.log(oControlEvent.getParameters('selectedItem').selectedItem.mProperties.key);
		
		var oRequestFinishedDeferred = this.oModelHelper.readCountryCode(oControlEvent.getParameters('selectedItem').selectedItem.mProperties.key);

		jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
			this.getView().setModel(oResponse,"CCModel");
			
		}, this));	
	},
	getBAQ : function(){
		this.openBusyDialog();
		that = this;
		var oRequestFinishedDeferred = this.oModelHelper.readBAQ();

		jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
			var questions = [];
			var nodeID = [];
			var surveyID = [];
			var answers = [];
			this.oBAQMatrixLayout = this.getView().byId("idLI_BAQ_1_to_6MAtrixLayoutz");
			
			for(var i=0; i < oResponse.data.results.length; i++){
				questions[i] = oResponse.data.results[i].Qtxtlg;
				nodeID[i] = oResponse.data.results[i].NodeGuid;
				surveyID[i] = oResponse.data.results[i].SurveyID;				
			}
			
			j = 0 ;
			for(var i=0; i < questions.length; i++){
				
				var oRequestFinishedDeferred = this.oModelHelper.readBAQAnswer(oResponse.data.results[i].NodeGuid, "QUEEMAH_BUS_PLAN");

				jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
					answers.push(oResponse.data.results);
					
					j++;
	                
					if(j === questions.length){
						
						k = 0;
						for(var l=0; l < questions.length; l++){
							
							var oTextView = new sap.ui.commons.TextView({
								text : questions[l],
								});
							var oComboBox = new sap.m.ComboBox();
							
							for(var m=0; m < answers.length; m++){								
							
								for(var t=0; t < answers[m].length; t++){
									
									if(nodeID[k] === answers[m][t].NodeGuid){
									
										var vItem = new sap.ui.core.Item();		    				
					    				
										vItem.setText(answers[m][t].Atxtlg);						
										oComboBox.addItem(vItem);
									}
								}
								
							}k++;
							
							this.oBAQMatrixLayout.createRow( oTextView );
							this.oBAQMatrixLayout.createRow( oComboBox );
						}			
						
						that.closeBusyDialog();		    				
					}
				}, this));				
				
			}			
			
		}, this));	
		
	},
	/**
	 * Open busy dialog
	 */
	openBusyDialog : function() {

		if (!this._busyDialog) {
			this._busyDialog = new sap.ui.xmlfragment("idBusydialogOverViewController",
					"com.sagia.view.fragments.busydialog", this);
		}
		this._busyDialog.open();
	},

	/**
	 * Close busy dialog
	 */
	closeBusyDialog : function() {
		this._busyDialog.close();

	},

	handleSaveLinkPress : function(){
		//this._oCountryComboBox = sap.ui.getCore().byId("idCountryComboBox1400");
		//this._oRegionComboBox = sap.ui.getCore().byId("idRegionComboBox");
		
		//Read City
		//this.oModelHelper.readCountry();
		
		/*var oAmendmentDetailModel = this.oModelHelper.readCountry();
		this.getView().setModel(oAmendmentDetailModel, "AmendmentDetailModel");*/
		
		var oRequestFinishedDeferred = this.oModelHelper.readCountry();

		jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
			
			//console.log(oResponse.getData());
			//console.dir(oResponse);
			var arr = [];
			for(var i = 0; i < oResponse.oData.DetailsCollection.length ; i++){
				if(oResponse.oData.DetailsCollection[i].Bezei_reg !== "")
				{//console.log(oResponse.oData.DetailsCollection[i].Bezei_reg);}
					arr.push(oResponse.oData.DetailsCollection[i].Bezei_reg);
					
				}
				
				
			}
			//console.log(arr);
			//console.log(JSON.stringify(arr));
			
			this.getView().setModel(oResponse);
			
			this.getView().setModel(oResponse,"CC");
			
			
			
			
			
			
			
			//console.log(oResponse.oData.DetailsCollection[0].Natio50);
			/*for(var i = 0; i < oResponse.oData.DetailsCollection.length ; i++){
				console.log(oResponse.oData.DetailsCollection[i].Landx);
			}*/
			
			//this._oCountryComboBox.setModel(JSON.stringify(oResponse));
			//this._oCountryComboBox.setModel(oResponse);		
			
			//this._oCountryComboBox.setModel(sap.ui.getCore().getModel("AmendmentDetailModel"));
			//this.getView().setModel(sap.ui.getCore().getModel("AmendmentDetailModel"));
			//sap.ui.getCore().setModel(sap.ui.getCore().getModel("AmendmentDetailModel"));
			
			
			
			
			
			
			//this._oCountryComboBox.setModel(sap.ui.getCore().getModel("AmendmentDetailModel"));
			//this.getView().setModel(sap.ui.getCore().getModel("AmendmentDetailModel"));
			
			//this.getView().setModel(oResponse, "AmendmentDetailModel");
			/*sap.ui.getCore().setModel(oResponse, "AmendmentDetailModel");*/
			//console.log("response= ");
			//console.log(JSON.stringify(oResponse));
			
			// JSON sample data
			/*var data = {
			    firstName: "John",
			    lastName: "Doe",
			    birthday: {day:01,month:05,year:1982},
			    address:[{city:"Heidelberg"}],
			    enabled: true
			};
			
			// create JSON model instance
			var oModel = new sap.ui.model.json.JSONModel();
			// set the data for the model
			oModel.setData(data);
			// set the model to the core
			sap.ui.getCore().setModel(oModel);*/
			
			
			
			
		}, this));	
	},
	handleLogoutLinkPress : function(){
		
		sessionStorage.clear();
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
		this.handleEmailEntryValidation(this.oInputEmail.getValue());		
	},
	handleEmailEntryValidation : function(email){
		if(email.length>20){
			this._oRegEmailErrorMsg.setText(this.oModelHelper.getText("EmailMoreThan20Chars"));
			this._oRegEmailErrorMsg.setVisible(true);
		}else if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( email ))){
			//console.log(email.length);
			this._oRegEmailErrorMsg.setText(this.oModelHelper.getText("InvalidEmailFormat"));
			if(email.length > 0){
			this._oRegEmailErrorMsg.setVisible(true);
			}else{
				this._oRegEmailErrorMsg.setVisible(false);
			}
		}else{
			this._oRegEmailErrorMsg.setVisible(false);
		}
	},
	
	handleContactNumberEntryLiveChange : function(){
		//var mobile = this._oMobileNumberInputText.getValue();
		this.handleContactNumberValidation(this.oContactNumber.getValue());		
	},
	handleContactNumberValidation : function(mobile){
		if(mobile.length>10){
			this._oRegMobileErrorMsg.setText(this.oModelHelper.getText("MobileMoreThan10Chars"));
			this._oRegMobileErrorMsg.setVisible(true);
		}else if(!(/^\d*$/.test( mobile ))){
			this._oRegMobileErrorMsg.setText(this.oModelHelper.getText("MobileNumberCanContainOnlyDigits"));
			this._oRegMobileErrorMsg.setVisible(true);
		}	
		else{
			this._oRegMobileErrorMsg.setVisible(false);
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
		this.handlePasswordEntryValidation(this.oPassword.getValue());		
	},
	handlePasswordEntryValidation : function(password){
		if(password.length>10){
			this._oPasswordErrorMsg.setText(this.oModelHelper.getText("PasswordMoreThan10Chars"));
			this._oPasswordErrorMsg.setVisible(true);
		}else{
			this._oPasswordErrorMsg.setVisible(false);
		}
	},
	handleCompanyNameEntryLiveChange : function(){
		//var firstName = this._oFirstNameInputText.getValue();
		this.handleCompanyNameValidation(this.oCompany.getValue());		
	},
	handleContactNameEntryLiveChange : function(){
		
		this.handleContactNameValidation(this.oContactPersonName.getValue());		
	},
	handleContactNameValidation : function(name){
		if(name.length>40){
			this._oLastNameErrorMsg.setText(this.oModelHelper.getText("LastNameTextMoreThan40Chars"));
			this._oLastNameErrorMsg.setVisible(true);
		}else if(/[^a-zA-Z\s]/.test( name )){
			this._oLastNameErrorMsg.setText(this.oModelHelper.getText("LastNameTextOnlyAlphabets"));
			this._oLastNameErrorMsg.setVisible(true);
		}else{
			this._oLastNameErrorMsg.setVisible(false);
		}
	},
	handleCompanyNameValidation : function(name){
		if(name.length>40){
			this._oFirstNameErrorMsg.setText(this.oModelHelper.getText("FirstNameTextMoreThan40Chars"));
			this._oFirstNameErrorMsg.setVisible(true);
		}else if(/[^a-zA-Z\s]/.test( name )){
			this._oFirstNameErrorMsg.setText(this.oModelHelper.getText("FirstNameTextOnlyAlphabets"));
			this._oFirstNameErrorMsg.setVisible(true);
		}else{
			this._oFirstNameErrorMsg.setVisible(false);
		}
	},
	handleReadTermsandConditionsPress : function(){
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
		

	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf com.sagia.view.Overview
	 */
	onAfterRendering : function() {
		
		console.log("onAfterRendering");
		

		this._oLanguageSelectionComboBox.setSelectedKey("E");
		
		this.handleSaveLinkPress();
		
		/*if(sessionStorage.getItem('userID') !== null && sessionStorage.getItem('userID') !== ""){
			this.getView().byId("idSignInUsernameInput").setValue(sessionStorage.getItem('userID'));
			this.getView().byId("idSignInPasswordInput").setValue(sessionStorage.getItem('password'));
			
            //Uncomment later start
			//this.handleSignInButtonPress();
			//Uncomment later end
		}*/
		
		//this.getView().addDependent(this._basicInfo_OrganizationFragmentChild);
		//this.handleCountrySelectionComboBox();
		
		//need to add this to bind controller to fragment
		
		
		//this._oCountryComboBox = sap.ui.getCore().byId("idCountryComboBox1400");
		
		
		//console.dir(this._oCountryComboBox);
		//var oItemTemplate = new sap.ui.core.ListItem({text:"{Landx50}"});
		/*this._oidRegionComboBox( {items : { 
		    path : "/DetailsCollection", 
		    template : oItemTemplate 
		  }});*/
		/*this._oidRegionComboBox.bindItems("/DetailsCollection", oItemTemplate);
		
		console.dir(this._oidRegionComboBox);*/
		
		//if (!this._basicInfo_OrganizationFragment) {
			/*this._basicInfo_OrganizationFragment = sap.ui.xmlfragment(
					"com.sagia.view.fragments.bi_organization", this.getView()
							.getController());*/
			//this.getView().addDependent(this._basicInfo_OrganizationFragment);
		//}

		// var fragmentTextView = sap.ui.getCore().byId("idFragmentTextView");
		// fragmentTextView.setText(oEvent.getSource().getBindingContext().getObject().Description);

		//this._basicInfo_OrganizationFragment.open();


		
		//this.getView().addDependent(this._basicInfo_OrganizationFragment);
		
		

/*this._oidRegionComboBox3 = sap.ui.getCore().byId("idRegionComboBox3");		
		var oItemTemplate3 = new sap.ui.core.ListItem({text:"{Bezei_reg}"});		
		var oFilter3 = new sap.ui.model.Filter("Bezei_reg", sap.ui.model.FilterOperator.NE, "");
		this._oidRegionComboBox3.bindAggregation("items", {path : "/DetailsCollection", template: oItemTemplate3,
			filters : oFilter3});*/

		
		/*this._oBIILegalStatus = sap.ui.getCore().byId("idBILegalStatus");
		
		
		this._oBIILegalStatus.prototype.onAfterRendering = function() {

	       console.log("rendered");
	     };*/
		/*this._oBIILegalStatus = sap.ui.getCore().byId("idBILegalStatus");
		this._oBIILegalStatus.onAfterRendering = function() { console.log("dir");};*/
		//console.log(this._oBIILegalStatus);
		
		

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
		
		//Remove later start
		
		//this.userSignIn(userID, password);
		
		//Remove later end
		
		if (userID.length > 0 && password.length > 0) {
			this.userSignIn(userID, password);
			
		/*console.log("userID "+userID);
		console.log("password "+password);
		console.log("sessionStorage.getItem('userID') "+sessionStorage.getItem('userID'));
		console.log("sessionStorage.getItem('password') "+sessionStorage.getItem('password'));
	*/
		
		/*if(typeof(Storage) !== "undefined") {
			
			if(sessionStorage.getItem('userID') === "" || 
			   sessionStorage.getItem('userID') === null || 
			   sessionStorage.getItem('password') === "" ||
			   sessionStorage.getItem('password') === null){
			
				
				sessionStorage.setItem('userID', userID);
				sessionStorage.setItem('password', password);
				
				
				
			}else{
				userID = sessionStorage.getItem('userID');
				password = sessionStorage.getItem('password');
				
				this.userSignIn(userID, password);
			}
			
			
		} else {
		    console.log("Sorry! No Web Storage support..");
		}*/
		
		} else {
			sap.m.MessageToast.show(this.oModelHelper
					.getText("PleaseEnterRequiredFields"));						
			
		}

	
	},
userSignIn : function(userID, password){
	var that = this
	
	
	
	//Remove later End
	
		var oRequestFinishedDeferred = this.oModelHelper.signInUser(userID,password);

		jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
			
			
			//console.dir(oResponse.Ref_id);
			if(oResponse.Password !== password){
				sap.m.MessageToast.show(this.oModelHelper.getText("AuthenticationFailedMessage"));
			}else{
				sap.m.MessageToast.show(this.oModelHelper
						.getText("SignInSuccessful"));
				
				this.oRef_id = oResponse.Ref_id;
				//sessionStorage.setItem('ReferenceId', oResponse.InvestorId);
				
				//Uncomment later start
				this._oidMainPageContent.setVisible(false);
				this._oTopHeaderVBox.setVisible(true);
				this._oidLicenseButtonsHBox.setVisible(true);
				
				this._oidRegionComboBox = this.getView().byId("idRegionComboBox");		
				var oRegionComboBoxFilter = new sap.ui.model.Filter("Bezei_reg", sap.ui.model.FilterOperator.NE, "");
				this._oidRegionComboBox.getBinding("items").filter(oRegionComboBoxFilter);
				
				this._oBIILegalStatusCombobox = this.getView().byId("idBILegalStatusComboBox");
				var oBIILegalStatusFilter = new sap.ui.model.Filter("Textlong", sap.ui.model.FilterOperator.NE, "");
				this._oBIILegalStatusCombobox.getBinding("items").filter(oBIILegalStatusFilter);
				
				this._oBICINationalityCombobox = this.getView().byId("idCINationalityComboBox");
				var oBICINationalityFilter = new sap.ui.model.Filter("Natio50", sap.ui.model.FilterOperator.NE, "");
				this._oBICINationalityCombobox.getBinding("items").filter(oBICINationalityFilter);
				
				
				this._oBICICountryCombobox = this.getView().byId("idCICountryComboBox");
				var oBICICountryFilter = new sap.ui.model.Filter("Landx50", sap.ui.model.FilterOperator.NE, "");
				this._oBICICountryCombobox.getBinding("items").filter(oBICICountryFilter);
				
				this._oBICityComboBox = this.getView().byId("idCityComboBox");
				
				
				this.oBIOIOrganizationName = this.getView().byId("idBIOIOrganizationName");
				this.oBIOIMultiNationalCompanyCombobox = this.getView().byId("idBIOIMultiNationalCompanyCombobox");
				this.oBIOIEmailInputText = this.getView().byId("idBIOIEmailInputText");
				this.oBIOILaborSizeInputText = this.getView().byId("idBIOILaborSizeInputText");
				this.oBIOICommMethodComboBox = this.getView().byId("idBIOICommMethodComboBox");
				this.oBIOICapitalInputText = this.getView().byId("idBIOICapitalInputText");
				this.oBIOITelephoneCountryCodeInputText = this.getView().byId("idBIOITelephoneCountryCodeInputText");
				this.oBIOITelephoneInputText = this.getView().byId("idBIOITelephoneInputText");
				this.oBIOIMobilephoneCountryCodeInputText = this.getView().byId("idBIOIMobilephoneCountryCodeInputText");
				this.oBIOIMobilephoneInputText = this.getView().byId("idBIOIMobilephoneInputText");
				this.oBIOIFaxCountryCodeInputText = this.getView().byId("idBIOIFaxCountryCodeInputText");
				this.oBIOIFaxInputText = this.getView().byId("idBIOIFaxInputText");
				this.oBIOIWebSiteInputText = this.getView().byId("idBIOIWebSiteInputText");
				
				
				
				
				
				var oRequestFinishedDeferredChild = this.oModelHelper.readBIOI(this.oRef_id);

				jQuery.when(oRequestFinishedDeferredChild).then(jQuery.proxy(function(oResponse) {
				
					//console.dir(oResponse);
					//console.log(oResponse.data.Region);
					if(oResponse.data.Return !== "Record does not exist"){
						//var vItem = new sap.ui.core.Item();
						
						this.oBIOIOrganizationName.setValue(oResponse.data.OrgName);
						
						//vItem.setText(oResponse.data.Region);						
						//this._oidRegionComboBox.setSelectedItem(vItem);
						this._oidRegionComboBox.setValue(oResponse.data.Region);
						
						
						//vItem.setText(oResponse.data.LegalStatus);
						this._oBIILegalStatusCombobox.setValue(oResponse.data.LegalStatus);//.setSelectedItem(vItem);
						
						//vItem.setText(oResponse.data.City);
						this._oBICityComboBox.setValue(oResponse.data.City);//.setSelectedItem(vItem);
						
						//vItem.setText(oResponse.data.MncComp);
						this.oBIOIMultiNationalCompanyCombobox.setValue(oResponse.data.MncComp);//.setSelectedItem(vItem);
						
						this.oBIOIEmailInputText.setValue(oResponse.data.Email);
						
						this.oBIOILaborSizeInputText.setValue(oResponse.data.LbrSize);
						
						//vItem.setText(oResponse.data.CommMtd);
						this.oBIOICommMethodComboBox.setValue(oResponse.data.CommMtd);//.setSelectedItem(vItem);
						
						this.oBIOICapitalInputText.setValue(oResponse.data.Capital);
						
						this.oBIOIWebSiteInputText.setValue(oResponse.data.Website);
						this.oBIOITelephoneInputText.setValue(oResponse.data.Telephone);  
						this.oBIOIMobilephoneInputText.setValue(oResponse.data.Mobile);
						this.oBIOIFaxInputText.setValue(oResponse.data.Fax);
						this.oBIOITelephoneCountryCodeInputText.setValue(oResponse.data.Ccode_Tele);
						this.oBIOIFaxCountryCodeInputText.setValue(oResponse.data.Ccode_Fax);
						this.oBIOIMobilephoneCountryCodeInputText.setValue(oResponse.data.Ccode_Mobile);					
						
						
						this.oRecordExists = true;
						}/*else{
						var vItem = new sap.ui.core.Item();
                        vItem.setText("");
                        
                        this.oBIOIOrganizationName.setValue("");
                        
                        this._oidRegionComboBox.setSelectedItem(vItem);
						this._oBIILegalStatusCombobox.setSelectedItem(vItem);
						this._oBICityComboBox.setSelectedItem(vItem);
						this.oBIOIMultiNationalCompanyCombobox.setSelectedItem(vItem);
						this.oBIOIEmailInputText.setValue("");
						this.oBIOILaborSizeInputText.setValue("");
						this.oBIOICommMethodComboBox.setSelectedItem(vItem);
						this.oBIOICapitalInputText.setValue("");
						this.oBIOIWebSiteInputText.setValue("");
						this.oBIOITelephoneInputText.setValue("");  
						this.oBIOIMobilephoneInputText.setValue("");
						this.oBIOIFaxInputText.setValue("");
						this.oBIOITelephoneCountryCodeInputText.setValue("");
						this.oBIOIFaxCountryCodeInputText.setValue("");
						this.oBIOIMobilephoneCountryCodeInputText.setValue("");			
					}*/
					
				}, this));		
				
				
				this.oBICIFirstNameInputText = this.getView().byId("idBICIFirstNameInputText");
				this.oBICILastNameInputText = this.getView().byId("idBICILastNameInputText");
				this.oBICICityInputText = this.getView().byId("idBICICityInputText");
				this.oBICIGenderComboBox = this.getView().byId("idBICIGenderComboBox");
				this.oBICIPOBoxInputText = this.getView().byId("idBICIPOBoxInputText");
				this.oBICITelephoneCountryCodeInputText = this.getView().byId("idBICITelephoneCountryCodeInputText");
				this.oBICITelephoneInputText = this.getView().byId("idBICITelephoneInputText");
				this.oBICIPostalCodeInputText = this.getView().byId("idBICIPostalCodeInputText");
				this.oBICIMobileCountryCodeInputText = this.getView().byId("idBICIMobileCountryCodeInputText");
				this.oBICIMobilePhoneInputText = this.getView().byId("idBICIMobilePhoneInputText");
				this.oBICICommMethodComboBox = this.getView().byId("idBICICommMethodComboBox");
				this.oBICIFaxCountryCodeInputText = this.getView().byId("idBICIFaxCountryCodeInputText");
				this.oBICIFaxInputText = this.getView().byId("idBICIFaxInputText");
				this.oBICIRoleInputText = this.getView().byId("idBICIRoleInputText");
				this.oBICIEmailInputText = this.getView().byId("idBICIEmailInputText");
				this.oBICIPassportCopyFileUploader = this.getView().byId("idBICIPassportCopyFileUploader");
				this.oBICIPowerofAttorneyFileUploader = this.getView().byId("idBICIPowerofAttorneyFileUploader");
				this.oBICIStreet = this.getView().byId("idBICIStreetInputText");
				 
				
				
				
				var oRequestFinishedDeferredChild = this.oModelHelper.readBICI(this.oRef_id);

				jQuery.when(oRequestFinishedDeferredChild).then(jQuery.proxy(function(oResponse) {
					console.log(oResponse);
					if(oResponse.data.Return !== "Data does not exist"){
						
						this.oBICIFirstNameInputText.setValue(oResponse.data.NameFirst);
						this.oBICILastNameInputText.setValue(oResponse.data.NameLast);
						this.oBICICityInputText.setValue(oResponse.data.City);
						this.oBICIGenderComboBox.setValue(oResponse.data.Gender);
						this.oBICIPOBoxInputText.setValue(oResponse.data.PoBox);
						this.oBICITelephoneCountryCodeInputText.setValue(oResponse.data.Ccode_Tele);
						this.oBICITelephoneInputText.setValue(oResponse.data.Telephone);
						this.oBICIPostalCodeInputText.setValue(oResponse.data.PostalCode);
						this.oBICIMobileCountryCodeInputText.setValue(oResponse.data.Ccode_Mobile);
						this.oBICIMobilePhoneInputText.setValue(oResponse.data.Mobile);
						this.oBICICommMethodComboBox.setValue(oResponse.data.CommMtd);
						this.oBICIFaxCountryCodeInputText.setValue(oResponse.data.Ccode_Fax);
						this.oBICIFaxInputText.setValue(oResponse.data.Fax);
						this.oBICIRoleInputText.setValue(oResponse.data.Role);
						this.oBICIEmailInputText.setValue(oResponse.data.Email);
						//this.oBICIPassportCopyFileUploader.setValue(oResponse.data.);
						//this.oBICIPowerofAttorneyFileUploader.setValue(oResponse.data.);
						
						
						this._oBICICountryCombobox.setValue(oResponse.data.Country);
						this._oBICINationalityCombobox.setValue(oResponse.data.Nationality);
						this.oBICIStreet.setValue(oResponse.data.Street);
						
						
						this.oContactInfoRecordExists = true;
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
		var oUserID, oPassword, oInputEmail, oContactNumber, oContactPersonName, oCompany;
		
		oUserID = this.oUserID.getValue();
		oPassword = this.oPassword.getValue();
		oInputEmail = this.oInputEmail.getValue();
		oContactNumber = this.oContactNumber.getValue();
		oContactPersonName = this.oContactPersonName.getValue();
		oCompany = this.oCompany.getValue();
		
		/*var oInputFirstName = this.getView().byId("idFirstNameInputText")
		.getValue();
		var oInputLastName = this.getView().byId("idLastNameInputText")
		.getValue();
		
		var oInputMobileNumber = this.getView().byId("idInputMobileNumber")
				.getValue();
		var oInputEmail = this.getView().byId("idInputEmail").getValue();
		var oPassword = this.getView().byId("idInputPassword").getValue();*/
		
		if (oUserID.length > 0 && oPassword.length > 0
				&& oInputEmail.length > 0 && oContactNumber.length > 0 && oContactPersonName.length > 0) {
			
			var oRequestFinishedDeferred = this.oModelHelper.registerUser(oUserID, oPassword, oInputEmail, oContactNumber, oContactPersonName, oCompany);
			
			jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
				
				//console.log(oResponse.Return);
				//console.dir(oResponse);
				
				this.oUserID.setValue("");
				this.oPassword.setValue("");
				this.oInputEmail.setValue("");
				this.oContactNumber.setValue("");
				this.oContactPersonName.setValue("");
				this.oCompany.setValue("");
				
				sap.m.MessageToast.show(oResponse.Return);
				
				if(oResponse.Return="Data Saved Successfully"){
					that.handleLoginButtonPress();
					
					this.getView().byId("idSignInUsernameInput").setValue(oResponse.Userid);
					//idSignInPasswordInput
				}
				
				
				
			}, this));	
			
		
			
		} else {
			sap.m.MessageToast.show(this.oModelHelper
					.getText("PleaseEnterRequiredFields"));
		}
	},
	handleShowInvestorIDDialogCloseButton : function(oEvent) {
		this._popOverFragment.close();
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
		this._oShareHoldersInfoContent.setVisible(false);
		this._oTermsAndConditionsInfoContent.setVisible(false);
		this._oPreviewInfoContent.setVisible(false);
		
		this._oStagesHeading.setContent(this.oModelHelper
				.getText("BasicInformationHTML"));
		
		this._oLicenseInfoButton.setSrc("common/mime/license.png");
		this._oShareholderInfoButton.setSrc("common/mime/shareholder.png");
		this._oPreviewInfoButton.setSrc("common/mime/preview.png");
		this._oTermsInfoButton.setSrc("common/mime/terms.png");
		this._oSubmitInfoButton.setSrc("common/mime/submit.png");
	},
	handleLicenseButtonClick : function(){
		
		
		this._oLicenseInfoContent.setVisible(true);
		this._oBasicInfoContent.setVisible(false);
		this._oShareHoldersInfoContent.setVisible(false);
		this._oTermsAndConditionsInfoContent.setVisible(false);
		this._oPreviewInfoContent.setVisible(false);
		this._oLicenseInfoButton.setSrc("common/mime/license_hover.png");
		
		//this._oLicenseInfoButton.setSrc("common/mime/license.png");
		this._oShareholderInfoButton.setSrc("common/mime/shareholder.png");
		this._oPreviewInfoButton.setSrc("common/mime/preview.png");
		this._oTermsInfoButton.setSrc("common/mime/terms.png");
		this._oSubmitInfoButton.setSrc("common/mime/submit.png");
		this._oBasicInfoButton.setSrc("common/mime/basicinfo.png");
		
		
		this._oStagesHeading.setContent(this.oModelHelper
				.getText("LicenseInformationHTML"));
		
		this.getBAQ();
		
	
	},
	handleShareholderInfoButtonClick : function(){
		this._oShareholderInfoButton.setSrc("common/mime/shareholder_hover.png");
		
		this._oShareHoldersInfoContent.setVisible(true);
		this._oLicenseInfoContent.setVisible(false);
		this._oBasicInfoContent.setVisible(false);
		this._oTermsAndConditionsInfoContent.setVisible(false);
		this._oPreviewInfoContent.setVisible(false);
		this._oStagesHeading.setContent(this.oModelHelper
				.getText("ShareHolderInformationHTML"));
		
		this._oLicenseInfoButton.setSrc("common/mime/license.png");
		//this._oShareholderInfoButton.setSrc("common/mime/shareholder.png");
		this._oPreviewInfoButton.setSrc("common/mime/preview.png");
		this._oTermsInfoButton.setSrc("common/mime/terms.png");
		this._oSubmitInfoButton.setSrc("common/mime/submit.png");
		this._oBasicInfoButton.setSrc("common/mime/basicinfo.png");
	},
	handlePreviewInfoButtonClick : function(){
		this._oPreviewInfoButton.setSrc("common/mime/preview_hover.png");
		this._oPreviewInfoContent.setVisible(true);
		this._oShareHoldersInfoContent.setVisible(false);
		this._oLicenseInfoContent.setVisible(false);
		this._oBasicInfoContent.setVisible(false);
		this._oTermsAndConditionsInfoContent.setVisible(false);
		this._oStagesHeading.setContent(this.oModelHelper
				.getText("PreviewInformationHTML"));
		
		this._oLicenseInfoButton.setSrc("common/mime/license.png");
		this._oShareholderInfoButton.setSrc("common/mime/shareholder.png");
		//this._oPreviewInfoButton.setSrc("common/mime/preview.png");
		this._oTermsInfoButton.setSrc("common/mime/terms.png");
		this._oSubmitInfoButton.setSrc("common/mime/submit.png");
		this._oBasicInfoButton.setSrc("common/mime/basicinfo.png");
		
		
		
		this.oValidationHelper.validateBasicInfo(this);
		
	},
	handleTermsInfoButtonClick : function(){
		this._oShareHoldersInfoContent.setVisible(false);
		this._oLicenseInfoContent.setVisible(false);
		this._oBasicInfoContent.setVisible(false);
		this._oTermsAndConditionsInfoContent.setVisible(true);
		this._oPreviewInfoContent.setVisible(false);
		
		this._oTermsInfoButton.setSrc("common/mime/terms_hover.png");
		this._oStagesHeading.setContent(this.oModelHelper
				.getText("TermsnCondInformationHTML"));
		
		
		this._oLicenseInfoButton.setSrc("common/mime/license.png");
		this._oShareholderInfoButton.setSrc("common/mime/shareholder.png");
		this._oPreviewInfoButton.setSrc("common/mime/preview.png");
		//this._oTermsInfoButton.setSrc("common/mime/terms.png");
		this._oSubmitInfoButton.setSrc("common/mime/submit.png");
		this._oBasicInfoButton.setSrc("common/mime/basicinfo.png");
	},
	handleSubmitInfoButtonClick : function(){
		this._oSubmitInfoButton.setSrc("common/mime/submit_hover.png");
		this._oStagesHeading.setContent(this.oModelHelper
				.getText("SubmitInformationHTML"));
		
		this._oLicenseInfoButton.setSrc("common/mime/license.png");
		this._oShareholderInfoButton.setSrc("common/mime/shareholder.png");
		this._oPreviewInfoButton.setSrc("common/mime/preview.png");
		this._oTermsInfoButton.setSrc("common/mime/terms.png");
		//this._oSubmitInfoButton.setSrc("common/mime/submit.png");
		this._oBasicInfoButton.setSrc("common/mime/basicinfo.png");
	},
	
});