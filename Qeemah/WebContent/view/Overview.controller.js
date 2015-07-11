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
		
		/*this.oParentShareHolderFragment = sap.ui.xmlfragment("com.sagia.view.fragments.newshareholder", this.getView()
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
		this.oLicenseTypeInputText = this.getView().byId("idLicenseTypeInputText");
		this.oLILIDivisionComboBox = this.getView().byId("idLILIDivisionComboBox");
		this.oLILIGroupComboBox = this.getView().byId("idLILIGroupComboBox");
		this.oLILILicenseActivityMultiComboBox = this.getView().byId("idLILILicenseActivityMultiComboBox");
		this.oLILIActivityDescriptionTextArea = this.getView().byId("idLILIActivityDescriptionTextArea");
		
		this.oLILIClassMultiComboBox = this.getView().byId("idLILIClassMultiComboBox");
		this.oLILIProductsTable = this.getView().byId("idLILIProductsTable"); 
		this.oLILIProductComboBox = this.getView().byId("idLILIProductComboBox");
		this.oLILIProductQuantityInputText = this.getView().byId("idLILIProductQuantityInputText");
		this.oLILIProductUOMComboBox = this.getView().byId("idLILIProductUOMComboBox");
		this.oLILIProductsTableJSONData = new sap.ui.model.json.JSONModel();
		this.oLILIProductsdata = {ProductsCollection: []};
		this.oNSHCreateNewData = {NSHCollection: []};
		this.oNSHCreateNewDataJSONData = new sap.ui.model.json.JSONModel();
		
		this.oESHCreateNewData = {ESHCollection: []};
		this.oESHCreateNewDataJSONData = new sap.ui.model.json.JSONModel();
		
		this.oLILIProductsdataSerialNo = 1;
		
		this.oNSHTotalShareHolderPercentage=0;
		this.oESHTotalShareHolderPercentage=0;
		
		this.oBAQError = false;
		
		this.oSurveyID="UNKNOWN";

		
	},
	handleBIOINextButtonPress : function(){
		this.oBasicInfoTab.setSelectedIndex(1);

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
		this.openBusyDialog();
		var that = this;
		this.oExistingShareHolderEntityNo = this.getView().byId("idESHEntityNoInputText");
		this.oExistingShareHolderEntityName = this.getView().byId("idESHEntityNameInputText");
		this.oESHPercentageInputText = this.getView().byId("idESHPercentageInputText");
		
		
		var oRequestFinishedDeferredVESH = this.oModelHelper.readExistingSH(this.oExistingShareHolderEntityNo.getValue());

		jQuery.when(oRequestFinishedDeferredVESH).then(jQuery.proxy(function(oResponse) {			
			//console.dir(oResponse);
			this.oExistingShareHolderEntityName.setValue(oResponse.data.Bpname);
			
			var thatContext = this;
			var thatoResponse = oResponse;
			
            var oRequestFinishedDeferredVESHNSH = that.oModelHelper.createNewShareHolder(that.oRef_id,
                    "E", oResponse.data.Bpname,
                    "","","","","","","","","","","","","","","","","","","","","","",
    				"",	"", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
    				"", "", "", "", "", "", "", "", "", "", "", "", "", "");

    		jQuery.when(oRequestFinishedDeferredVESHNSH).then(jQuery.proxy(function(oResponse) {			
    
    			thatContext.oExistingShareHolderTable.unbindItems();
    			
    			thatContext.oESHCreateNewData.ESHCollection.push({
    				"Bpno":thatoResponse.data.Bpno,
    	 			"Bpname":thatoResponse.data.Bpname,
    	 			"EntityNo" : oResponse.EntityNo});
    			var percentage = parseInt(thatContext.oESHPercentageInputText.getValue());
    			if(isNaN(percentage)){
    				percentage = 0;
    			}
    			
    			thatContext.oESHTotalShareHolderPercentage += percentage;
    			
    			thatContext.oESHCreateNewDataJSONData.setData(thatContext.oESHCreateNewData);
    	 		
    	 		
    			thatContext.oExistingShareHolderTable.setModel(thatContext.oESHCreateNewDataJSONData);
    			
    			thatContext.oExistingShareHolderTable.bindItems("/ESHCollection",new sap.m.ColumnListItem({
    		        cells : [ new sap.ui.commons.TextView({
    		          text : "{Bpno}"
    		        }),new sap.ui.commons.TextView({
    		          text : "{Bpname}"
    		        }),  new sap.ui.commons.TextView({
    		          text : percentage
    		        })/*, 
    		        new sap.m.Button({ icon : "sap-icon://delete"})*/]
    		      }));
    			that.closeBusyDialog();
			
    		}, this));	
			
		}, this));	
		
	},
	handleESHTableDeleteButtonPress : function(oEvent){
		
		 var that = this;
		 this.openBusyDialog();

		 
        try{

       	 var oRequestFinishedDeferredRemoveESHEntry = this.oModelHelper.deleteNewShareHolderEntry(this.oRef_id,this.oESHCreateNewData.ESHCollection[this.oExistingShareHolderTable.indexOfItem(oEvent.getParameter('listItem'))].EntityNo);

    		 jQuery.when(oRequestFinishedDeferredRemoveESHEntry).then(jQuery.proxy(function(oResponse) {			
    			
   	             that.closeBusyDialog();
    			
    		 }, this));	
    		 

    			this.oESHCreateNewData.ESHCollection.splice(this.oExistingShareHolderTable.indexOfItem(oEvent.getParameter('listItem')),1);
    	        
    	        this.oExistingShareHolderTable.removeItem(oEvent.getParameter('listItem'));
    	        
       	 
        }catch(err){
	            that.closeBusyDialog();

        }
		
	},
	handleCreateNewShareHolder : function(oEvent){
		var that = this;
		this.openBusyDialog();
		

		
		
		try{			
			var questions = [];
			var answers1 = [];
			var answers2 = [];
			var answers3 = [];
			for(var i=0; i < this.oTotalFinancialQuestions; i++){
				 
				 var oFinancialQuestion = sap.ui.getCore().byId("idFinancialQuestion"+i);
				 var oFinancialAnswer1 = sap.ui.getCore().byId("idFinancialQAnswer"+i+""+1);
				 var oFinancialAnswer2 = sap.ui.getCore().byId("idFinancialQAnswer"+i+""+2);
				 var oFinancialAnswer3 = sap.ui.getCore().byId("idFinancialQAnswer"+i+""+3);
				 questions.push(oFinancialQuestion.data("idFinancialQuestion"+i));
				 answers1.push(oFinancialAnswer1.getValue());
				 answers2.push(oFinancialAnswer2.getValue());
				 answers3.push(oFinancialAnswer3.getValue());

			}
			
		    
		    var actvityQuestions = [];
			var activityAnswers = [];
			for(var j=0; j < this.oTotalActivityQuestions; j++){
				 var oAQAnswer = sap.ui.getCore().byId("idAQAnswer"+j);
				 var oAQuestion = sap.ui.getCore().byId("idAQuestion"+j);
				 actvityQuestions.push(oAQuestion.data("idAQuestion"+j));
				 activityAnswers.push(oAQAnswer.getSelectedItem().getText());
			}
			
			  var oRequestFinishedDeferredNSH = that.oModelHelper.createNewShareHolder(that.oRef_id,
	            		 that.oShareHolderTypeComboBox.getSelectedItem().getText(),
	     				that.oNSHFirstNameInputText.getValue(),
	     				that.oNSHCountryComboBox.getSelectedItem().getText(),
	     				that.oNSHLastNameInputText.getValue(),
	     				that.oNSHCityNameInputText.getValue(),
	     				that.oNSHGenderComboBox.getSelectedItem().getText(),
	     				that.oNSHPOBoxInputText.getValue(),
	     				that.oNSHMaritalStatusComboBox.getSelectedItem().getText(),
	     				that.oNSHPostalCodeInputText.getValue(),
	     				that.oNSHAcademicTitleComboBox.getSelectedItem().getText(),
	     				that.oNSHStreetInputText.getValue(),
	     				that.oNSHDOBDate.getValue(),
	     				that.oNSHWebsiteInputText.getValue(),
	     				that.oNSHTelephoneInputText.getValue(),
	     				that.oNSHNationalityComboBox.getSelectedItem().getText(),
	     				that.oNSHMobilePhoneInputText.getValue(),
	     				that.oNSHPreviousNationalityInputText.getSelectedItem().getText(),
	     				that.oNSHFaxInputText.getValue(),
	     				that.oNSHCommMethodInputText.getSelectedItem().getText(),
	     				that.oNSHEmailInputText.getValue(),
	     				that.oNSHPercentageInputText.getValue(),
	     				"",//that.oNSHActivityQ1ComboBox.getSelectedItem().getText(),
	     				"",//that.oNSHActivityQ2ComboBox.getSelectedItem().getText(),
	     				"",//that.oNSHActivityQ3ComboBox.getSelectedItem().getText(),
	     				"",//this.oNSHExperienceQ1ComboBox.getSelectedItem().getText(),
	     				"",//this.oNSHExperienceQ2ComboBox.getSelectedItem().getText(),
	     				"",//this.oNSHExperienceQ3ComboBox.getSelectedItem().getText(),
	     				"",//this.oNSHExperienceQ4ComboBox.getSelectedItem().getText(),
	     		"",//		this.oNSHStock12InputText.getValue(),
	     		"",//this.oNSHStock13InputText.getValue(),
	     		"",//this.oNSHStock14InputText.getValue(),
	     		"",//this.oNSHTotalCurrentAssets12InputText.getValue(),
	     		"",//this.oNSHTotalCurrentAssets13InputText.getValue(),
	     		"",//this.oNSHTotalCurrentAssets14InputText.getValue(),		
	     		"",//this.oNSHTotalCurrentLiabialities12InputText.getValue(),
	     		"",//this.oNSHTotalCurrentLiabialities13InputText.getValue(),
	     		"",//this.oNSHTotalCurrentLiabialities14InputText.getValue(),
	     		"",//this.oNSHNetSales12InputText.getValue(),
	     		"",//this.oNSHNetSales13InputText.getValue(),
	     		"",//this.oNSHNetSales14InputText.getValue(),
	     		"",//this.oNSHTotalAssets12InputText.getValue(),
	     		"",//this.oNSHTotalAssets13InputText.getValue(),
	     		"",//this.oNSHTotalAssets14InputText.getValue(),
	     		"",//this.oNSHTotalDebt12InputText.getValue(),
	     		"",//this.oNSHTotalDebt13InputText.getValue(),
	     		"",//this.oNSHTotalDebt14InputText.getValue(),
	     		"",//this.oNSHDistributableNetIncome12InputText.getValue(),
	     		"",//this.oNSHDistributableNetIncome13InputText.getValue(),
	     		"",//this.oNSHDistributableNetIncome14InputText.getValue(),
	     		"",//this.oNSHNetProfit12InputText.getValue(),
	     		"",//this.oNSHNetProfit13InputText.getValue(),
	     		"",//this.oNSHNetProfit14InputText.getValue(),
	     		"",//this.oNSHInterests12InputText.getValue(),
	     		"",//this.oNSHInterests13InputText.getValue(),
	     		"",//this.oNSHInterests14InputText.getValue(),
	     		"",//this.oNSHTotalAssetsInBalanceSheet12InputText.getValue(),
	     		"",//this.oNSHTotalAssetsInBalanceSheet13InputText.getValue(),		
	     		""//this.oNSHTotalAssetsInBalanceSheet14InputText.getValue()
	     				
	     			
	     				);

	     		jQuery.when(oRequestFinishedDeferredNSH).then(jQuery.proxy(function(oResponse) {			
	     
	     			 
	     			 try{
	     				that.oNSHCreateNSHTable.unbindItems();							     			
			             that.oNSHCreateNewData.NSHCollection.push({
		         			"EntityFname":oResponse.EntityFname, 
		         			"EntityLname": oResponse.EntityLname, 
		         			"ShldrType":oResponse.ShldrType,
		         			"Percentage":oResponse.Percentage,
		         			"EntityNo": oResponse.EntityNo});
			             that.oNSHTotalShareHolderPercentage += oResponse.Percentage;							         		
			             that.oNSHCreateNewDataJSONData.setData(that.oNSHCreateNewData);							                 
			             that.oNSHCreateNSHTable.setModel(that.oNSHCreateNewDataJSONData);							         		
			             that.oNSHCreateNSHTable.bindItems("/NSHCollection", new sap.m.ColumnListItem({
		     		        cells : [ new sap.ui.commons.TextView({
		     			          text : "{EntityFname}"
		     			        }),new sap.ui.commons.TextView({
		     			          text : "{EntityLname}"
		     			        }),  new sap.ui.commons.TextView({
		     			          text : "{ShldrType}"
		     			        }),  new sap.ui.commons.TextView({
		     			          text : "{Percentage}"
		     			        })]
		     			      }));
			             
			        that.NSHPassPortCopy = that.getView().byId("idNSHPassportCopyFileUploader");
			        var oRequestFinishedDeferredUploadNSHPassPortCopy = that.oModelHelper.uploadNSHPassPortCopy(that.oRef_id, oResponse.EntityNo, that.NSHPassPortCopy);
			     	jQuery.when(oRequestFinishedDeferredUploadNSHPassPortCopy).then(jQuery.proxy(function(oResponse) {
			     		
			     		
			             var oRequestFinishedDeferredcreateSHActivityAnswers = that.oModelHelper.createShareHolderActivityAnswers
			 			(that.oRef_id, actvityQuestions, activityAnswers, that.oNSHFirstNameInputText.getValue(),that.oNSHLastNameInputText.getValue());
			  
			     			jQuery.when(oRequestFinishedDeferredcreateSHActivityAnswers).then(jQuery.proxy(function(oResponse) {
			     			 
			     			
			     			
			 	
			 					var oRequestFinishedDeferredcreateFinancialAnswers1 = that.oModelHelper.createFinancialAnswers
			 					(that.oRef_id, questions, answers1, "Year 1", that.oNSHFirstNameInputText.getValue(),that.oNSHLastNameInputText.getValue());

			 					jQuery.when(oRequestFinishedDeferredcreateFinancialAnswers1).then(jQuery.proxy(function(oResponse) {
			 						
			 						var oRequestFinishedDeferredcreateFinancialAnswers2 = that.oModelHelper.createFinancialAnswers
			 						(that.oRef_id, questions, answers2, "Year 2", that.oNSHFirstNameInputText.getValue(),that.oNSHLastNameInputText.getValue());

			 						jQuery.when(oRequestFinishedDeferredcreateFinancialAnswers2).then(jQuery.proxy(function(oResponse) {
			 							
			 							var oRequestFinishedDeferredcreateFinancialAnswers3 = that.oModelHelper.createFinancialAnswers
			 							(that.oRef_id, questions, answers3, "Year 3", that.oNSHFirstNameInputText.getValue(),that.oNSHLastNameInputText.getValue());

			 							jQuery.when(oRequestFinishedDeferredcreateFinancialAnswers3).then(jQuery.proxy(function(oResponse) {
			 							
			 								 var getarray = [];
			 							       
			 							        getarray.push(oRequestFinishedDeferredcreateFinancialAnswers1);
			 							        getarray.push(oRequestFinishedDeferredcreateFinancialAnswers2);
			 							        getarray.push(oRequestFinishedDeferredcreateFinancialAnswers3);
			 							        getarray.push(oRequestFinishedDeferredcreateSHActivityAnswers);


			 							        
			 							        jQuery.when.apply($, getarray).done(function () {
			 							             
			 							        	that.closeBusyDialog();
			 							     		
			 							        });
			 								
			 							}, this));
			 							
			 						}, this));
			 					}, this));
			     			}, this));//end of AQ creation
			     	}, this));// end of Passport upload
			     			
	     				 
	     			 }catch(error){
		     			 that.closeBusyDialog();

	     			 }
		             
	     			
	     		}, this));
			
			
			
			}catch(err){
				console.log(err);
	            that.closeBusyDialog();

				
				/*if(!this.oShowAlertDialog.isOpen())
					{
					this.oAlertTextView.setText(this.oModelHelper
							.getText("ChooseBAQ"));
					this.oShowAlertDialog.open();
					
					}*/
				
			}
			
			
		
			
		
		
	},
	handleNSHTableDeleteButtonPress : function(oEvent){
		 
		 
         var that = this;
         try{
     		 this.openBusyDialog();

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
		
		var path = oEvent.getParameter('listItem').getBindingContext().sPath;
		this.oLILIProductsdata.ProductsCollection.splice(path.slice(-1), 1);
		//console.log(this.oLILIProductsdata.ProductsCollection);
				
		var obj = this.oLILIProductsTable.getModel().getProperty(path);		
		
        this.oLILIProductsTable.removeItem(oEvent.getParameter('listItem'));
	},
	handleLILIAddProductButtonPress : function(){		
		this.oLILIProductsTable.unbindItems();
		//this.oLILIProductsdata.ProductsCollection.push({"sno":this.oLILIProductsdataSerialNo,"product":this.oLILIProductComboBox.getValue(), "quantity": this.oLILIProductQuantityInputText.getValue(), "uom":this.oLILIProductUOMComboBox.getValue()});
		//console.log(this.oLILIProductsdata);
		this.oLILIProductsdata.ProductsCollection.push({
			//"sno":this.oLILIProductsdataSerialNo,
			"product":this.oLILIProductComboBox.getValue(), 
			"quantity": this.oLILIProductQuantityInputText.getValue(), 
			"uom":this.oLILIProductUOMComboBox.getValue()});
		console.dir(this.oLILIProductsdata);
		this.oLILIProductsTableJSONData.setData(this.oLILIProductsdata,true);	
		//this.oLILIProductsTable.getModel().refresh(true);
		//console.log(this.oLILIProductsTableJSONData);
		this.oLILIProductsTable.setModel(this.oLILIProductsTableJSONData);
		//this.oLILIProductsTable.setModel("");items="{/ProductsCollection}"
		this.oLILIProductsTable.bindItems("/ProductsCollection", new sap.m.ColumnListItem({
	        cells : [ new sap.ui.commons.TextView({
	          text : "{product}"
	        }),new sap.ui.commons.TextView({
	          text : "{product}"
	        }),  new sap.ui.commons.TextView({
	          text : "{quantity}"
	        }),  new sap.ui.commons.TextView({
	          text : "{uom}"
	        })]
	      }));
		
		//this.oLILIProductsdataSerialNo++;
	},
	handleLILISectionSelectionComboBox : function(){
	
		if(this.oLILIDivisionComboBox){
			this.oLILIDivisionComboBox.setSelectedKey("");
			}
		if(this.oLILIGroupComboBox){
			this.oLILIGroupComboBox.setModel(null);
			//this.oLILIGroupComboBox.setSelectedItems([]);
		}
		if(this.oLILIClassMultiComboBox){
			this.oLILIClassMultiComboBox.setModel(null);
			//this.oLILIClassMultiComboBox.setSelectedItems([]);
		}		
		if(this.oLILILicenseActivityMultiComboBox){
			this.oLILILicenseActivityMultiComboBox.setModel(null);
			//this.oLILILicenseActivityMultiComboBox.setSelectedItems([]);
		}
		if(this.oLILIActivityDescriptionTextArea){
			this.oLILIActivityDescriptionTextArea.setValue("");
		}
		if(this.oLicenseTypeInputText){
			this.oLicenseTypeInputText.setValue("");
		}
		

		//this.oLILIGroupComboBox.removeAllSelectedItems();//removeAllItems()
		//this.oLILIClassMultiComboBox.removeAllSelectedItems();
		

		
		var oRequestFinishedDeferredLILIDivision = this.oModelHelper.readLILIDivision(this.oLILISectionComboBox.getSelectedKey());

		jQuery.when(oRequestFinishedDeferredLILIDivision).then(jQuery.proxy(function(oResponse) {			
			
			this.oLILIDivisionComboBox.setModel(oResponse);
			
		}, this));	
	},
	handleLILIBusinessTypeComboBoxSelectionChange : function(){
		var that = this;
		
		var oRequestFinishedDeferredLILIBusinessType = this.oModelHelper.readLILIBusinessTypeIsicDescription(this.oLILIBusinessTypeComboBox.getSelectedKey());
		jQuery.when(oRequestFinishedDeferredLILIBusinessType).then(jQuery.proxy(function(oResponse) {	
			try{
				if(oResponse.data.results[0].IsicDescription !== "None of the above"){
					this.oLicenseTypeInputText.setValue(oResponse.data.results[0].Activity);
					this.oLILILicenceInfoContentVBox.setVisible(false);
				}else{
					this.oLicenseTypeInputText.setValue("");
					this.oLILILicenceInfoContentVBox.setVisible(true);
				}
			}catch(error){
				that.closeBusyDialog();
			}
			
			
		}, this));	
		
		
	},
	handleLILIDivisionSelectionComboBox : function(){
		//this.oLILIGroupComboBox.removeAllSelectedItems();
		//this.oLILIClassMultiComboBox.removeAllSelectedItems();
		
		if(this.oLILIGroupComboBox){
			this.oLILIGroupComboBox.setModel(null);
		}
		if(this.oLILIClassMultiComboBox){
			this.oLILIClassMultiComboBox.setModel(null);
		}		
		if(this.oLILILicenseActivityMultiComboBox){
			this.oLILILicenseActivityMultiComboBox.setModel(null);
		}
		if(this.oLILIActivityDescriptionTextArea){
			this.oLILIActivityDescriptionTextArea.setValue("");
		}
		if(this.oLicenseTypeInputText){
			this.oLicenseTypeInputText.setValue("");
		}
		
		this.openBusyDialog();
		var that = this;
		
		setTimeout(function() {
			var oRequestFinishedDeferredLILIGroup = that.oModelHelper.readLILIGroup(that.oLILISectionComboBox.getSelectedKey(),that.oLILIDivisionComboBox.getSelectedKey());

			jQuery.when(oRequestFinishedDeferredLILIGroup).then(jQuery.proxy(function(oResponse) {			
				//console.dir(oResponse);
				that.oLILIGroupComboBox.setModel(oResponse);
				that.closeBusyDialog();

			}, that));	
		},4000);
		
		
	},
	handleLILIGropuMultiSelectionComboBoxChange : function(){
		//this.oLILIClassMultiComboBox.removeAllSelectedItems();
		
	/* var oRequestFinishedDeferredLILIClass = this.oModelHelper.readLILIClass(this.oLILIGroupComboBox.getSelectedKeys());

		jQuery.when(oRequestFinishedDeferredLILIClass).then(jQuery.proxy(function(oResponse) {
			
			this.oLILIClassMultiComboBox.setModel(oResponse);
			
		}, this));*/
		
		
		if(this.oLILIClassMultiComboBox){
			this.oLILIClassMultiComboBox.setModel(null);
		}		
		if(this.oLILILicenseActivityMultiComboBox){
			this.oLILILicenseActivityMultiComboBox.setModel(null);
		}
		if(this.oLILIActivityDescriptionTextArea){
			this.oLILIActivityDescriptionTextArea.setValue("");
		}
		if(this.oLicenseTypeInputText){
			this.oLicenseTypeInputText.setValue("");
		}
		
		
		this.openBusyDialog();
		var that = this;
		
		setTimeout(function() {
		 var oRequestFinishedDeferredLILIClass = that.oModelHelper.readLILIClass(that.oLILISectionComboBox.getSelectedKey(),that.oLILIDivisionComboBox.getSelectedKey(), that.oLILIGroupComboBox.getSelectedKeys());

			jQuery.when(oRequestFinishedDeferredLILIClass).then(jQuery.proxy(function(oResponse) {
				
				that.oLILIClassMultiComboBox.setModel(oResponse);
				that.closeBusyDialog();
			}, that));
		},4000);
	},
	handleLILIClassMultiSelectionComboBoxChange : function(){
		
				
		if(this.oLILILicenseActivityMultiComboBox){
			this.oLILILicenseActivityMultiComboBox.setModel(null);
		}
		if(this.oLILIActivityDescriptionTextArea){
			this.oLILIActivityDescriptionTextArea.setValue("");
		}
		if(this.oLicenseTypeInputText){
			this.oLicenseTypeInputText.setValue("");
		}
		
		var that = this;
		this.openBusyDialog();
		setTimeout(function() {
			
			
			
	 var oRequestFinishedDeferredLILILicenseActivity = that.oModelHelper.readLILILicenseActivity(that.oLILISectionComboBox.getSelectedKey(),that.oLILIDivisionComboBox.getSelectedKey(), that.oLILIGroupComboBox.getSelectedKeys(), that.oLILIClassMultiComboBox.getSelectedKeys());

		jQuery.when(oRequestFinishedDeferredLILILicenseActivity).then(jQuery.proxy(function(oResponse) {
			
			that.oLILILicenseActivityMultiComboBox.setModel(oResponse);
			
			
			var oRequestFinishedDeferredLILILicenseType = that.oModelHelper.readLILILicenseType(that.oLILISectionComboBox.getSelectedKey(),that.oLILIDivisionComboBox.getSelectedKey(), that.oLILIGroupComboBox.getSelectedKeys(), that.oLILIClassMultiComboBox.getSelectedKeys());

			jQuery.when(oRequestFinishedDeferredLILILicenseType).then(jQuery.proxy(function(oResponse) {
				
				//console.log(oResponse);
				if(oResponse !== undefined && oResponse.LILILicenseActivityType.length>0){
				
				that.oSurveyID = oResponse.LILILicenseActivityType[0].SurveyID;
					
				/*for(var k=0;k < oResponse.LILILicenseActivityType.length; k++){
					console.log(oResponse.LILILicenseActivityType[k].SurveyID);
				}*/
				if(oResponse.LILILicenseActivityType[0].Activity !== "0")
				{
					that.oLicenseTypeInputText.setValue(oResponse.LILILicenseActivityType[0].Activity);
				}else if(oResponse.LILILicenseActivityType[0].Activity === "0")
				{
					that.oLicenseTypeInputText.setValue("");
					
				}/*else if(oResponse.LILILicenseActivityType[0].Activity === "22"){
					
					if(!this.oShowAlertDialog.isOpen())
					{
					this.oAlertTextView.setText(this.oModelHelper.getText("NotHandledBySAGIA"));
					this.oShowAlertDialog.open();
					
					}

				}*/else{
					that.oLicenseTypeInputText.setValue("");
				}
				
				}
				that.closeBusyDialog();

				
				
			}, that));
			
		}, that));
		},4000);
		
	},
	handleLILILicenseActivityMultiSelectionComboBoxChange : function(oEvent){
		//console.log(this.oLILILicenseActivityMultiComboBox.getSelectedItems() );
		
		
		
		var oDescription = "";
		for(var i=0; i < this.oLILILicenseActivityMultiComboBox.getSelectedItems().length; i++){
			//console.log(this.oLILILicenseActivityMultiComboBox.getSelectedItems()[i].getText());
			oDescription += this.oLILILicenseActivityMultiComboBox.getSelectedItems()[i].getText()+" , ";
		}
		if(oDescription !== undefined){
			this.oLILIActivityDescriptionTextArea.setValue(oDescription);			
		}

	},
	
	handleSaveLinkPressSave : function(){
	this.oValidationLILIStatus = false;
	
	that = this;
	if(this.oBICIFirstNameInputText.getValue() === "" || this.oBICILastNameInputText.getValue() === "")
	 {		
		 this.oValidationLILIStatus = false;

		 if(!this.oShowAlertDialog.isOpen())
		 {
			this.oAlertTextView.setText(this.oModelHelper.getText("CIFNameAndLName"));
			this.oShowAlertDialog.open();
		 }
			
   	 }if(this.getView().byId("idBICIPowerofAttorneyFileUploader").getValue() === "" && this.getView().byId("idBICIPassportCopyFileUploader").getValue() === ""){
		 this.oValidationLILIStatus = false;

 		if(!this.oShowAlertDialog.isOpen())
		{
		this.oAlertTextView.setText(this.oModelHelper.getText("AtleastOneAttachmentNeededBICI"));
		this.oShowAlertDialog.open();
		
		}
	 }else if(this.oLILIBusinessTypeComboBox.getValue() !== "None of the above" && this.oLicenseTypeInputText.getValue() !== "" ){ 		
			  this.doThis();			
			  this.oValidationLILIStatus = true;				   
   	 }else if(this.oSurveyID !== "UNKNOWN" &&
   			  this.oLILIClassMultiComboBox.getSelectedKeys().filter(Boolean).length !== 0 &&
		      this.oLILILicenseActivityMultiComboBox.getSelectedItems().length !== 0 &&
		  	  this.oLILIGroupComboBox.getSelectedKeys().filter(Boolean).length !== 0 &&
	  		  this.oLILIDivisionComboBox.getSelectedKey() !== "" &&
	  		  this.oLILISectionComboBox.getSelectedKey() !== "" &&
		   	  this.oRef_id !== "" &&		   
	 		  this.oLILIActivityDescriptionTextArea.getValue() !== ""){
	
		   	  this.doThis();			
	     	  this.oValidationLILIStatus = true;
	  }else {
		      this.oValidationLILIStatus = false;

		      if(!this.oShowAlertDialog.isOpen())
		       {
		       this.oAlertTextView.setText(this.oModelHelper.getText("ISICMandatory"));
		       this.oShowAlertDialog.open();
			  }
   		    } 
	
	
	
	/*else{
		    this.oValidationLILIStatus = false;

		    if(!this.oShowAlertDialog.isOpen())
		    {
			this.oAlertTextView.setText(this.oModelHelper.getText("CIFNameAndLName"));
			this.oShowAlertDialog.open();
				
			}
		}*/
	return 	this.oValidationLILIStatus;

},
	doThis : function(){
		this.openBusyDialog();
	       
		if(this.oRecordExists){
			try{
				//console.log(this.oBIOICommMethodComboBox.getSelectedItem().getKey());
				
			var oRequestFinishedDeferred = this.oModelHelper.saveBIOI(this.oRef_id, 
					this.oBIOIOrganizationName.getValue(),
					this._oidRegionComboBox.getSelectedKey(),
					//this._oidRegionComboBox.getSelectedItem().getText(),
					this._oBIILegalStatusCombobox.getSelectedKey(),
					//this._oBIILegalStatusCombobox.getSelectedItem().getText(),
					this._oBICityComboBox.getSelectedKey(),
					//this._oBICityComboBox.getSelectedItem().getText(),
					//this.oBIOIMultiNationalCompanyCombobox.getSelectedKey(),
					
					this.oBIOIMultiNationalCompanyCombobox.getSelectedItem().getText(),
					this.oBIOIEmailInputText.getValue(),
					this.oBIOILaborSizeInputText.getValue(),
					//sap.ui.getCore().byId("idBIOICommMethodComboBox").getSelectedKey(),
					//this.oBIOICommMethodComboBox.getSelectedKey(),
					this.oBIOICommMethodComboBox.getSelectedItem().getKey(),
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
				/*sap.m.MessageToast.show(this.oModelHelper
    					.getText("Saved"));	*/
			}, this));	
			}
			catch(err){
				/*sap.m.MessageToast.show(this.oModelHelper
    					.getText("AllFieldsAreRequired"));*/
				console.log(err);
			}
			
		}else{
			try{
			var oRequestFinishedDeferred = this.oModelHelper.createAndUpdateBIOI(this.oRef_id, 
					this.oBIOIOrganizationName.getValue(),
					this._oidRegionComboBox.getSelectedKey(),
					//this._oidRegionComboBox.getSelectedItem().getText(),
					this._oBIILegalStatusCombobox.getSelectedKey(),
					//this._oBIILegalStatusCombobox.getSelectedItem().getText(),
					this._oBICityComboBox.getSelectedKey(),
					//this._oBICityComboBox.getSelectedItem().getText(),
					this.oBIOIMultiNationalCompanyCombobox.getSelectedItem().getText(),
					//this.oBIOIMultiNationalCompanyCombobox.getSelectedItem().getText(),
					this.oBIOIEmailInputText.getValue(),
					this.oBIOILaborSizeInputText.getValue(),
					this.oBIOICommMethodComboBox.getSelectedKey(),
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
            	/*sap.m.MessageToast.show(this.oModelHelper
    					.getText("Saved"));	*/
			}, this));	
			}
			catch(err){
				sap.m.MessageToast.show(this.oModelHelper
    					.getText("AllFieldsAreRequired"));	
			}
			
		}
		
		this.oBICIPowerofAttorneyFileUploader = this.getView().byId("idBICIPowerofAttorneyFileUploader");
		this.oBICIPassPortCopyFileUploader = this.getView().byId("idBICIPassportCopyFileUploader");
		
		this.oModelHelper.uploadPOA(this.oRef_id, this.oBICIPowerofAttorneyFileUploader);
		this.oModelHelper.uploadBICIPassPortCopy(this.oRef_id, this.oBICIPassPortCopyFileUploader);
		
		
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
					this.oBICIStreet.getValue(),
					this.oBICIPowerofAttorneyFileUploader,
					this.oBICIPassPortCopyFileUploader
							);
			

			jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
				
            	
                
				
			}, this));	
		    
			}
			catch(err){
				/*sap.m.MessageToast.show(this.oModelHelper
    					.getText("AllFieldsAreRequired"));	*/
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
				
            	
            	this.oContactInfoRecordExists = true;
            	/*sap.m.MessageToast.show(this.oModelHelper
    					.getText("Saved"));	*/
            	/*if(this.oBICIPowerofAttorneyFileUploader.getValue() === "" && this.oBICIPassPortCopyFileUploader.getValue() === ""){
            		if(!this.oShowAlertDialog.isOpen())
					{
					this.oAlertTextView.setText(this.oModelHelper.getText("AtleastOneAttachmentNeededBICI"));
					this.oShowAlertDialog.open();
					
					}
            	}else{
            	
            	}*/
                
				
            	
			}, this));	
			}
			catch(err){
				console.log(" err "+err);
				sap.m.MessageToast.show(this.oModelHelper
    					.getText("AllFieldsAreRequired"));	
			}
			
		}
		if(this.oBAQExists){
			
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
				 
				 
				 questions.push(oBAQuestion.data("idBAQuestion"+i));
				 //console.log(oBAQAnswer.getSelectedItem().getText());
				 answers.push(oBAQAnswer.getSelectedItem().getText());
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
						 questions.push(oBAQuestion.data("idBAQuestion"+i));
						 answers.push(oBAQAnswer.getSelectedItem().getText());
					}
					var oRequestFinishedDeferredcreateBAQAnswers = this.oModelHelper.createBAQAnswers(this.oRef_id, questions, answers, this.oBICIFirstNameInputText.getValue(), this.oBICILastNameInputText.getValue());

					jQuery.when(oRequestFinishedDeferredcreateBAQAnswers).then(jQuery.proxy(function(oResponse) {
						
						this.oBAQError = false;
						
					}, this));
					
					
					}catch(err){
						
						this.oBAQError = true;
					}
					
				
			}, this));
			
		}else{
			
			this.oBasicInfoTab.setSelectedIndex(1);
			this.oBasicInfoTab.setSelectedIndex(0);
			
			this.oLicenseInfoTab.setSelectedIndex(1);
			this.oLicenseInfoTab.setSelectedIndex(0);
			
			try{			
			var questions = [];
			var answers = [];
			//var oRequestFinishedBAQCreateDeferred = this.oModelHelper.createBAQAnswers();
			for(var i=0; i < this.oTotalBAQQuestions; i++){
				 var oBAQAnswer = sap.ui.getCore().byId("idBAQAnswer"+i);
				 //oBAQAnswer.setValue("Hello");
				 //console.log(oBAQAnswer.getSelectedItem().getText());
				 var oBAQuestion = sap.ui.getCore().byId("idBAQuestion"+i);
				 
                 var oBAQFileUploader = sap.ui.getCore().byId("idBAQFileUploader"+i);
				 
				 this.oModelHelper.uploadBAQAttachment(this.oRef_id, oBAQuestion.data("idBAQuestion"+i), oBAQFileUploader);
				
				 
				 
				 //console.log(oBAQuestion.getText());				 
				 //console.log(oBAQuestion.data("idBAQuestion"+i));
				 questions.push(oBAQuestion.data("idBAQuestion"+i));
				 answers.push(oBAQAnswer.getSelectedItem().getText());
			}
			
			
			
			var oRequestFinishedDeferredcreateBAQAnswers = this.oModelHelper.createBAQAnswers(this.oRef_id, questions, answers, this.oBICIFirstNameInputText.getValue(), this.oBICILastNameInputText.getValue());

			jQuery.when(oRequestFinishedDeferredcreateBAQAnswers).then(jQuery.proxy(function(oResponse) {
				
				this.oBAQError = false;
				
			}, this));
			
			
			}catch(err){
				
				this.oBAQError = true;
				
				/*if(!this.oShowAlertDialog.isOpen())
					{
					this.oAlertTextView.setText(this.oModelHelper
							.getText("ChooseBAQ"));
					this.oShowAlertDialog.open();
					
					}*/
				
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
			
			this.oBasicInfoTab.setSelectedIndex(1);
			this.oBasicInfoTab.setSelectedIndex(0);
			
			this.oLicenseInfoTab.setSelectedIndex(1);
			this.oLicenseInfoTab.setSelectedIndex(0);
			
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
		
		
		
		if(this.oISICUnAvailable){
			
			
			var oRequestFinishedDeferredcreateISIC = this.oModelHelper.createLILIBusiness(
					this.oLicenseTypeInputText.getValue(),
					this.oSurveyID,
					this.oLILIClassMultiComboBox.getSelectedKeys().filter(Boolean),
					//this.oLILILicenseActivityMultiComboBox.getSelectedItems(),
					this.oLILILicenseActivityMultiComboBox.getSelectedKeys().filter(Boolean),
					this.oLILIGroupComboBox.getSelectedKeys().filter(Boolean),
					this.oLILIDivisionComboBox.getSelectedKey(),
					this.oLILISectionComboBox.getSelectedKey(),
					this.oRef_id,
					this.oLILIBusinessTypeComboBox.getSelectedKey(),
					this.oLILIActivityDescriptionTextArea.getValue()
					);

			jQuery.when(oRequestFinishedDeferredcreateISIC).then(jQuery.proxy(function(oResponse) {
				//console.log(oResponse);
				//this.oBAQError = false;
				
			}, this));
			
		}else{
			
			var oRequestFinishedDeferredDeleteISICEntry = this.oModelHelper.deleteISICEntry(this.oRef_id);

			jQuery.when(oRequestFinishedDeferredDeleteISICEntry).then(jQuery.proxy(function(oResponse) {
				
				var oRequestFinishedDeferredcreateISIC = this.oModelHelper.createLILIBusiness(
						this.oLicenseTypeInputText.getValue(),
						this.oSurveyID,
						this.oLILIClassMultiComboBox.getSelectedKeys().filter(Boolean),
						//this.oLILILicenseActivityMultiComboBox.getSelectedItems(),
						this.oLILILicenseActivityMultiComboBox.getSelectedKeys().filter(Boolean),
						this.oLILIGroupComboBox.getSelectedKeys().filter(Boolean),
						this.oLILIDivisionComboBox.getSelectedKey(),
						this.oLILISectionComboBox.getSelectedKey(),
						this.oRef_id,
						this.oLILIBusinessTypeComboBox.getSelectedKey(),
						this.oLILIActivityDescriptionTextArea.getValue()
						);

				jQuery.when(oRequestFinishedDeferredcreateISIC).then(jQuery.proxy(function(oResponse) {
					//console.log(oResponse);
					//this.oBAQError = false;
					
				}, this));
				
			}, this));				
			
			
		}
		
		
		that = this;
		setTimeout(function() {
		
		that.closeBusyDialog();
			
			/*that.closeBusyDialog();
			
			if(!that.oShowAlertDialog.isOpen())
			{
				that.oAlertTextView.setText(that.oModelHelper.getText("Saved"));
				that.oShowAlertDialog.open();
			
			}*/
			sap.m.MessageToast.show(that.oModelHelper
					.getText("Saved"));
					
			
        }, 8000);
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
				}else{
					this.oBICIPASSAttachmentName.setVisible(false);
					this.oBICIPASSAttachmentNameTextView.setVisible(false);
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
				}else{
					this.oBICIPOAAttachmentName.setVisible(false);
					this.oBICIPOAAttachmentNameTextView.setVisible(false);
				}
		}, this));	
		
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
			
			this.oTotalBAQQuestions = 0;
			
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
							
							var oTextView = new sap.ui.commons.TextView("idBAQuestion"+l,{
								text : questions[l],
								});
							var oSelect = new sap.m.Select("idBAQAnswer"+l);
							
							var oFileUploader = new sap.ui.unified.FileUploader("idBAQFileUploader"+l,{
								icon : "common/mime/attachment.png",
								sendXHR : true,
								useMultipart : false,
								sameFilenameAllowed : true,
								iconOnly : true,
								mimeType : "application/pdf"
							});
							
							var oTextViewAttachment = new sap.ui.commons.TextView("idBAQAttachment"+l,{});
							
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
							
							this.oBAQMatrixLayout.createRow( oTextView );
							this.oBAQMatrixLayout.createRow( oSelect );
							this.oBAQMatrixLayout.createRow( oFileUploader );
							this.oBAQMatrixLayout.createRow( oTextViewAttachment );
						
							this.oTotalBAQQuestions++;
						}			
						
						that.closeBusyDialog();		    				
					}
				}, this));				
				
			}
			
			//start of reading financial Q
			
			var oRequestFinishedFinancialQuestionsDeferred = this.oModelHelper.readFinancialQuestions();
			
			jQuery.when(oRequestFinishedFinancialQuestionsDeferred).then(jQuery.proxy(function(oResponse) {
				
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
					
					var oTextView = new sap.ui.commons.TextView("idFinancialQuestion"+i,{
						text : questions[i],
						});
					oTextView.data("idFinancialQuestion"+i,nodeID[i]);
					
					var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
					
					var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell();
					oCell1.addContent(oTextView);
					
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
			
			//start of Activity Questions
			
			
            var oRequestFinishedActivityQuestionsDeferred = this.oModelHelper.readActivityQuestions();
			
			jQuery.when(oRequestFinishedActivityQuestionsDeferred).then(jQuery.proxy(function(oResponse) {
				
				var questions = [];
				var nodeID = [];
				var surveyID = [];
				var answers = [];
				var units = [];
				this.oActivityQuestionsMatrixLayout = this.getView().byId("idNewShareHolderActivityQuestionsMLAyout");
				
				this.oTotalActivityQuestions = 0;
				
				for(var i=0; i < oResponse.data.results.length; i++){
					questions[i] = oResponse.data.results[i].Qtxtlg;
					nodeID[i] = oResponse.data.results[i].NodeGuid;
					surveyID[i] = oResponse.data.results[i].SurveyID;
					units[i] = oResponse.data.results[i].Units;
					
					++this.oTotalActivityQuestions;

				}
				
				n = 0 ;
				for(var i=0; i < questions.length; i++){
					
					var oRequestFinishedDeferred = this.oModelHelper.readAQAnswers(oResponse.data.results[i].NodeGuid, "QUEEMAH_GENERAL_QUESTIONS");

					jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
						answers.push(oResponse.data.results);
						
						n++;
		                
						if(n === questions.length){
							
							p = 0;
							for(var l=0; l < questions.length; l++){
								
								var oTextView = new sap.ui.commons.TextView("idAQuestion"+l,{
									text : questions[l],
									});
								var oUnitsTextView = new sap.ui.commons.TextView("idAQuestionUnits"+l,{
									text : units[l],
									});
								var oSelect = new sap.m.Select("idAQAnswer"+l);
								
								/*var oFileUploader = new sap.ui.unified.FileUploader("idBAQFileUploader"+l,{
									icon : "common/mime/attachment.png",
									sendXHR : true,
									useMultipart : false,
									sameFilenameAllowed : true,
									iconOnly : true,
									mimeType : "application/pdf"
								});*/
								
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
								oCell1.addContent(oSelect);
								oCell2.addContent(oUnitsTextView);	
								
								oRow1.addCell(oCell0);
								oRow1.addCell(oCell1);
								oRow1.addCell(oCell2);
								
								this.oActivityQuestionsMatrixLayout.addRow(oRow1);
								
								//this.oActivityQuestionsMatrixLayout.createRow( oFileUploader );
								//this.oActivityQuestionsMatrixLayout.createRow( oTextViewAttachment );
							    //console.log(this.oTotalActivityQuestions++);
								//this.oTotalActivityQuestions++;
							}			
							
							that.closeBusyDialog();		    				
						}
					}, this));				
					
				}
				
			}, this));			
			//end of Activity Questions			
			
		}, this));	
			
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
						
						  /*  (function myLoop (i) {          
							   setTimeout(function () {  
								   
								   if(that.oLILISectionComboBox.getSelectedKey() === ""){
										that.oLILISectionComboBox.setSelectedKey(oResponse.data.results[resultsI].IsicSection);
										that.oLILISectionComboBox.fireSelectionChange(); 
									}
									
									if(that.oLILIDivisionComboBox.getSelectedKey() === ""){
										that.oLILIDivisionComboBox.setSelectedKey(oResponse.data.results[resultsI].IsicDivision);
										that.oLILIDivisionComboBox.fireSelectionChange();
									}*/
									
									
									
									/*(function myInnerLoop1 (i) {          
										   setTimeout(function () {   
										      
												isicGroup[resultsJ] = oResponse.data.results[resultsJ].IsicGroup;
												
												var uniqueISISCGroupArray = isicGroup.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
												
												that.oLILIGroupComboBox.setSelectedKeys(uniqueISISCGroupArray);
											
											   
											   resultsJ++;
										      if (--i) myInnerLoop1(i);      
										   }, 2000)
										})(howManyTimes);   */
									
									/*for(var j=0; j < oResponse.data.results.length; j++){							
										
										isicGroup[j] = oResponse.data.results[j].IsicGroup;
										
										var uniqueISISCGroupArray = isicGroup.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
										
										this.oLILIGroupComboBox.setSelectedKeys(uniqueISISCGroupArray);
										
									}
									
						             for(var k=0; k < oResponse.data.results.length; k++){							
										
						                IsicClass[k] = oResponse.data.results[k].IsicClass;
										
										var uniqueIsicClassArray = IsicClass.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
										
										this.oLILIClassMultiComboBox.setSelectedKeys(uniqueIsicClassArray);
										
									}*/  
								   
									/*resultsI++;
								   
							      if (--i) myLoop(i);     
							   }, 2000)
							})(howManyTimes); */  
						
						if(oResponse.data.results[0].Lic === "N"){
							     
						for(var i=0; i < oResponse.data.results.length; i++){
							
							
							
							if(this.oLILISectionComboBox.getSelectedKey() === ""){
								this.oLILISectionComboBox.setSelectedKey(oResponse.data.results[i].IsicSection);
								this.oLILISectionComboBox.fireSelectionChange(); 
							}
							
							if(this.oLILIDivisionComboBox.getSelectedKey() === ""){
								this.oLILIDivisionComboBox.setSelectedKey(oResponse.data.results[i].IsicDivision);
								this.oLILIDivisionComboBox.fireSelectionChange();
							}
							
							for(var j=0; j < oResponse.data.results.length; j++){							
								
								isicGroup[j] = oResponse.data.results[j].IsicGroup;
								
								var uniqueISISCGroupArray = isicGroup.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
								
								this.oLILIGroupComboBox.setSelectedKeys(uniqueISISCGroupArray);
								
							}
							
	                         for(var k=0; k < oResponse.data.results.length; k++){							
								
	                            IsicClass[k] = oResponse.data.results[k].IsicClass;
								
								var uniqueIsicClassArray = IsicClass.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
								
								this.oLILIClassMultiComboBox.setSelectedKeys(uniqueIsicClassArray);
								
							}
	                         
	                         /*for(var l=0; l < oResponse.data.results.length; l++){							
									
		                            IsicLicenseActivity[l] = oResponse.data.results[l].Act;
									
									var uniqueIsicLicenseActivityArray = IsicLicenseActivity.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
									
									this.oLILILicenseActivityMultiComboBox.setSelectedKeys(uniqueIsicLicenseActivityArray);

								}*/
							
						}
						
						this.oLILIGroupComboBox.fireSelectionChange();
						this.oLILIClassMultiComboBox.fireSelectionChange();
						that = this;
						 (function myLoop (i) {          
							   setTimeout(function () { 
								   
								   for(var l=0; l < oResponse.data.results.length; l++){
									   
                                    IsicLicenseActivity[l] = oResponse.data.results[l].Act;
									
									var uniqueIsicLicenseActivityArray = IsicLicenseActivity.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
									
									that.oLILILicenseActivityMultiComboBox.setSelectedKeys(uniqueIsicLicenseActivityArray);
									
									that.oLILIActivityDescriptionTextArea.setValue(oResponse.data.results[0].ActDesc);
								   }
							   }, 5000)
						  })(howManyTimes);
						 
						//this.oLILIActivityDescriptionTextArea.setValue(oResponse.data.results[0].ActDesc);
						
						
						}
							
					}		
					
					
				}, this));
			
	    } 
		
		
	},
	
	handlePreviewLicenseInfoTabStripSelect : function(oControlEvent){
		//console.log(oControlEvent.getParameters().index);
		that = this;
		if(!this.PreviewBeenFired)
	    {
			/*this.oLILISectionComboBox = this.getView().byId("idLILISectionComboBox");
			this.oLILIBusinessTypeComboBox = this.getView().byId("idLILIBusinessTypeComboBox");
			this.oLILILicenceInfoContentVBox = this.getView().byId("LicenceInfoContentVBox");
			this.oLicenseTypeInputText = this.getView().byId("idLicenseTypeInputText");
			this.oLILIDivisionComboBox = this.getView().byId("idLILIDivisionComboBox");
			this.oLILIGroupComboBox = this.getView().byId("idLILIGroupComboBox");
			this.oLILILicenseActivityMultiComboBox = this.getView().byId("idLILILicenseActivityMultiComboBox");
			this.oLILIActivityDescriptionTextArea = this.getView().byId("idLILIActivityDescriptionTextArea");
			
			this.oLILIClassMultiComboBox = this.getView().byId("idLILIClassMultiComboBox");
		*/
			
			this.oLILIPreviewBusinessTypeComboBox = this.getView().byId("idLILIPreviewBusinessTypeComboBox");
			this.oLicenseTypePreviewInputText = this.getView().byId("idLicenseTypePreviewInputText");		
			this.oLILIPreviewSectionComboBox = this.getView().byId("idLILIPreviewSectionComboBox");
			this.oLILIDivisionComboBox = this.getView().byId("idLILIPreviewDivisionComboBox");
			this.oLILIGroupComboBox = this.getView().byId("idLILIPreviewGroupComboBox");
			this.oLILIClassMultiComboBox = this.getView().byId("idLILIPreviewClassMultiComboBox");
			this.oLILILicenseActivityMultiComboBox = this.getView().byId("idLILIPreviewLicenseActivityMultiComboBox");
			this.oLILIActivityDescriptionTextArea = this.getView().byId("idLILIPreviewActivityDescriptionTextArea");
			
		
	       
	    }
		//this.oLILIPreviewBusinessTypeComboBox.setValue(this.oLILIBusinessTypeComboBox.getSelectedItem().getText());
		
		
	},
	getPreviewBAQ : function(){
		if(!this.oBAQPreviewMatrixLayout){
		this.openBusyDialog();
		that = this;
		var oRequestFinishedDeferred = this.oModelHelper.readBAQ();

		jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
			var questions = [];
			var nodeID = [];
			var surveyID = [];
			var answers = [];
			this.oBAQPreviewMatrixLayout = this.getView().byId("idPreview_LI_BAQ_1_to_6MAtrixLayout");
			
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
			}
			
			j = 0 ;
			for(var i=0; i < questions.length; i++){
				
				var oRequestFinishedDeferred = this.oModelHelper.readBAQAnswer(oResponseFilter[i].NodeGuid, "QUEEMAH_BUS_PLAN");

				jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
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
							var oSelect = new sap.m.Select("idPBAQAnswer"+l, {enabled : false});
							
							var oFileUploader = new sap.ui.unified.FileUploader("idPBAQFileUploader"+l,{
								icon : "common/mime/attachment.png",
								sendXHR : true,
								useMultipart : false,
								sameFilenameAllowed : true,
								iconOnly : true,
								mimeType : "application/pdf",
								enabled : false
							});
							
							
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
							
							
							this.oBAQPreviewMatrixLayout.createRow( oTextView );
							this.oBAQPreviewMatrixLayout.createRow( oSelect );
							this.oBAQPreviewMatrixLayout.createRow( oFileUploader );
							
							

							oSelect.setSelectedKey(sap.ui.getCore().byId("idBAQAnswer"+l).getSelectedKey());
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
				
		var oRequestFinishedDeferred = this.oModelHelper.readCountry();

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
			
		}, this));	
		
		var oRequestFinishedDeferredLILI = this.oModelHelper.readLILISection();

		jQuery.when(oRequestFinishedDeferredLILI).then(jQuery.proxy(function(oResponse) {			
			this.oLILISectionComboBox.setModel(oResponse);
		}, this));	
		
		var oRequestFinishedDeferredLILIBusinessType = this.oModelHelper.readLILIBusinessType();

		jQuery.when(oRequestFinishedDeferredLILIBusinessType).then(jQuery.proxy(function(oResponse) {			
			this.oLILIBusinessTypeComboBox.setModel(oResponse);
		}, this));	
		
		
	},
	handleLogoutLinkPress : function(){
		
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
		/*if(email.length>20){
			this._oRegEmailErrorMsg.setText(this.oModelHelper.getText("EmailMoreThan20Chars"));
			this._oRegEmailErrorMsg.setVisible(true);
		}else*/ if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( email ))){
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
		
		if (!this.oExistingShareHolderTable) {
			this.oExistingShareHolderTable = this.getView().byId("idESHTable");
		}
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
		
		this.getBAQ();
		//this.getPreviewBAQ();
		
		if (!this.oShowAlertDialog) {
			this.oShowAlertDialog = sap.ui.xmlfragment(
					"com.sagia.view.fragments.alert", this.getView()
							.getController());
			this.getView().addDependent(this.oShowAlertDialog);
		}		
		
		this.oAlertTextView = sap.ui.getCore().byId("idAlertFragmentTextView");
		
		

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
				
				this.oBasicInfoTab =  this.getView().byId("idBasicInfoTab");
				this.oLicenseInfoTab =  this.getView().byId("idLicenseInfoTab");
				
				this.oLicenseInfoTab.setSelectedIndex(1);
				this.oLicenseInfoTab.setSelectedIndex(0);
				
				/*var filters = [];
				filters = new sap.ui.model.Filter([oFilter1, oFilter2]);*/
				
				this._oidRegionComboBox = this.getView().byId("idRegionComboBox");		
				var oRegionComboBoxFilter = new sap.ui.model.Filter("Bezei_reg", sap.ui.model.FilterOperator.NE, "");
				var oRegionComboBoxKeyFilter = new sap.ui.model.Filter("Bland_reg", sap.ui.model.FilterOperator.NE, "");
				this._oidRegionComboBox.getBinding("items").filter([oRegionComboBoxFilter, oRegionComboBoxKeyFilter]);
				
				this._oBIILegalStatusCombobox = this.getView().byId("idBILegalStatusComboBox");
				var oBIILegalStatusFilter = new sap.ui.model.Filter("Textlong", sap.ui.model.FilterOperator.NE, "");
				var oBIILegalStatusKeyFilter = new sap.ui.model.Filter("Source", sap.ui.model.FilterOperator.NE, "");
				this._oBIILegalStatusCombobox.getBinding("items").filter([oBIILegalStatusFilter,oBIILegalStatusKeyFilter]);
				
				this._oBICINationalityCombobox = this.getView().byId("idCINationalityComboBox");
				var oBICINationalityFilter = new sap.ui.model.Filter("Natio50", sap.ui.model.FilterOperator.NE, "");
				var oBICINationalityKeyFilter = new sap.ui.model.Filter("Land1", sap.ui.model.FilterOperator.NE, "");
				this._oBICINationalityCombobox.getBinding("items").filter([oBICINationalityFilter,oBICINationalityKeyFilter]);
				
				
				this._oBICICountryCombobox = this.getView().byId("idCICountryComboBox");
				var oBICICountryFilter = new sap.ui.model.Filter("Landx50", sap.ui.model.FilterOperator.NE, "");
				var oBICICountryKeyFilter = new sap.ui.model.Filter("Land1", sap.ui.model.FilterOperator.NE, "");
				this._oBICICountryCombobox.getBinding("items").filter([oBICICountryFilter,oBICICountryKeyFilter]);
				
				this._oBICityComboBox = this.getView().byId("idCityComboBox");
				
				//this.oBasicInfoTab.setSelectedIndex(0);
				this.oBIOICommMethodComboBox = this.getView().byId("idBIOICommMethodComboBox");
				
			/*	this.oBICommunicationMethodJSON = {CommMethodCollection: []};
				
				this.oBICommunicationMethodJSON.CommMethodCollection.push(
					{"methodKey": "TEL","methodText": "Telephone"},
		 			{"methodKey": "INT","methodText": "Email"},
		 			{"methodKey": "FAX","methodText": "Fax"},
		 			{"methodKey": "PAG","methodText": "Pager"},
		 			{"methodKey": "LET","methodText": "Post"});
				this.oBICommunicationMethodJSONData = new sap.ui.model.json.JSONModel();
				this.oBICommunicationMethodJSONData.setData(this.oBICommunicationMethodJSON);				 		
				this.oBIOICommMethodComboBox.setModel(this.oBICommunicationMethodJSONData);
				*/
				
				
				
				this.oBIOIOrganizationName = this.getView().byId("idBIOIOrganizationName");
				this.oBIOIMultiNationalCompanyCombobox = this.getView().byId("idBIOIMultiNationalCompanyCombobox");
				this.oBIOIEmailInputText = this.getView().byId("idBIOIEmailInputText");
				this.oBIOILaborSizeInputText = this.getView().byId("idBIOILaborSizeInputText");
				this.oBIOICapitalInputText = this.getView().byId("idBIOICapitalInputText");
				this.oBIOITelephoneCountryCodeInputText = this.getView().byId("idBIOITelephoneCountryCodeInputText");
				this.oBIOITelephoneInputText = this.getView().byId("idBIOITelephoneInputText");
				this.oBIOIMobilephoneCountryCodeInputText = this.getView().byId("idBIOIMobilephoneCountryCodeInputText");
				this.oBIOIMobilephoneInputText = this.getView().byId("idBIOIMobilephoneInputText");
				this.oBIOIFaxCountryCodeInputText = this.getView().byId("idBIOIFaxCountryCodeInputText");
				this.oBIOIFaxInputText = this.getView().byId("idBIOIFaxInputText");
				this.oBIOIWebSiteInputText = this.getView().byId("idBIOIWebSiteInputText");
				
				
				//this.oBasicInfoTab.setSelectedIndex(1);
				
				
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
				//this.oBICIPassportCopyFileUploader = this.getView().byId("idBICIPassportCopyFileUploader");
				this.oBICIStreet = this.getView().byId("idBICIStreetInputText");
				this.oBICIPASSAttachmentName = this.getView().byId("idBICIPASSAttachmentName");
				this.oBICIPASSAttachmentNameTextView = this.getView().byId("idBICIPASSAttachmentNameTextView");
				this.oBICIPOAAttachmentName = this.getView().byId("idBICIPOAAttachmentName");
				this.oBICIPOAAttachmentNameTextView = this.getView().byId("idBICIPOAAttachmentNameTextView");
				
				
				
				
				
				
				var oRequestFinishedDeferredChild = this.oModelHelper.readBIOI(this.oRef_id);

				jQuery.when(oRequestFinishedDeferredChild).then(jQuery.proxy(function(oResponse) {
				
					//console.dir(oResponse);
					//console.log(oResponse.data.Region);
					if(oResponse.data.Return !== "Record does not exist"){
						//var vItem = new sap.ui.core.Item();
						
						this.oBIOIOrganizationName.setValue(oResponse.data.OrgName);
						
						//vItem.setText(oResponse.data.Region);						
						//this._oidRegionComboBox.setSelectedItem(vItem);
						this._oidRegionComboBox.setSelectedKey(oResponse.data.Region);
						
						
						//vItem.setText(oResponse.data.LegalStatus);
						this._oBIILegalStatusCombobox.setSelectedKey(oResponse.data.LegalStatus);//.setSelectedItem(vItem);
						
						//vItem.setText(oResponse.data.City);
						this._oBICityComboBox.setSelectedKey(oResponse.data.City);//.setSelectedItem(vItem);
						
						//vItem.setText(oResponse.data.MncComp);
						this.oBIOIMultiNationalCompanyCombobox.setValue(oResponse.data.MncComp);//.setSelectedItem(vItem);
						
						this.oBIOIEmailInputText.setValue(oResponse.data.Email);
						
						 
						
						this.oBIOILaborSizeInputText.setValue(Number(oResponse.data.LbrSize).toString());
						
						//vItem.setText(oResponse.data.CommMtd);
						this.oBIOICommMethodComboBox.setSelectedKey(oResponse.data.CommMtd);//.setSelectedItem(vItem);
						
						this.oBIOICapitalInputText.setValue(Number(oResponse.data.Capital).toString());
						
						this.oBIOIWebSiteInputText.setValue(oResponse.data.Website);
						this.oBIOITelephoneInputText.setValue(oResponse.data.Telephone);  
						this.oBIOIMobilephoneInputText.setValue(oResponse.data.Mobile);
						this.oBIOIFaxInputText.setValue(Number(oResponse.data.Fax).toString());
						this.oBIOITelephoneCountryCodeInputText.setValue(oResponse.data.Ccode_Tele);
						this.oBIOIFaxCountryCodeInputText.setValue(oResponse.data.Ccode_Fax);
						this.oBIOIMobilephoneCountryCodeInputText.setValue(oResponse.data.Ccode_Mobile);					
						
						
						this.oRecordExists = true;
						}
					
				}, this));		
				
				
				
				
				
				
				var oRequestFinishedDeferredChild = this.oModelHelper.readBICI(this.oRef_id);

				jQuery.when(oRequestFinishedDeferredChild).then(jQuery.proxy(function(oResponse) {
					//console.log(oResponse);
					if(oResponse.data.Return !== "Data does not exist"){
						
						this.oBICIFirstNameInputText.setValue(oResponse.data.NameFirst);
						this.oBICILastNameInputText.setValue(oResponse.data.NameLast);
						this.oBICICityInputText.setValue(oResponse.data.City);
						this.oBICIGenderComboBox.setSelectedKey(oResponse.data.Gender);
						this.oBICIPOBoxInputText.setValue(oResponse.data.PoBox);
						this.oBICITelephoneCountryCodeInputText.setValue(oResponse.data.Ccode_Tele);
						this.oBICITelephoneInputText.setValue(oResponse.data.Telephone);
						this.oBICIPostalCodeInputText.setValue(oResponse.data.PostalCode);
						this.oBICIMobileCountryCodeInputText.setValue(oResponse.data.Ccode_Mobile);
						this.oBICIMobilePhoneInputText.setValue(oResponse.data.Mobile);
						this.oBICICommMethodComboBox.setSelectedKey(oResponse.data.CommMtd);
						this.oBICIFaxCountryCodeInputText.setValue(oResponse.data.Ccode_Fax);
						this.oBICIFaxInputText.setValue(Number(oResponse.data.Fax).toString());
						this.oBICIRoleInputText.setSelectedKey(oResponse.data.Role);
						this.oBICIEmailInputText.setValue(oResponse.data.Email);
						//this.oBICIPassportCopyFileUploader.setValue(oResponse.data.);
						//this.oBICIPowerofAttorneyFileUploader.setValue(oResponse.data.);
						
						
						this._oBICICountryCombobox.setSelectedKey(oResponse.data.Country);
						this._oBICINationalityCombobox.setSelectedKey(oResponse.data.Nationality);
						this.oBICIStreet.setValue(oResponse.data.Street);
						
						
						this.oContactInfoRecordExists = true;
						}
				}, this));	
				
			
				
				
				//that.readBICIPASSFileAttachemnts();
				//that.readBICIPOAFileAttachemnts();
				
				
				var oRequestFinishedDeferredBAQAnswersReadChild = this.oModelHelper.readBAQSavedAnswers(this.oRef_id);

				jQuery.when(oRequestFinishedDeferredBAQAnswersReadChild).then(jQuery.proxy(function(oResponse) {
					
					if(oResponse.data.results[0].Return !== "No Records"){						
						
						for(var i=0; i < this.oTotalBAQQuestions; i++){
							 for (j=0; j < this.oTotalBAQQuestions; j++){
								 var oBAQAnswer = sap.ui.getCore().byId("idBAQAnswer"+j);
								 var oBAQuestion = sap.ui.getCore().byId("idBAQuestion"+j);
								
								 if(oBAQuestion.data("idBAQuestion"+j) === oResponse.data.results[i].NodeGuid){
									 
									 oBAQAnswer.setSelectedItem(oBAQAnswer.getItemByKey(oResponse.data.results[i].Atxtlg)); 
								 }			 
								 
							 }									
						}
						this.oBAQExists = true;						
						}else{
							this.oBAQExists = false;	
						}
				}, this));
				
				var oRequestFinishedDeferredISICRecord = this.oModelHelper.checkISICAvailability(this.oRef_id);

				jQuery.when(oRequestFinishedDeferredISICRecord).then(jQuery.proxy(function(oResponse) {
					
					if(oResponse.data.results[0].Return === "No Records"){					
						
						this.oISICUnAvailable = true;						
						
						}
				}, this));
				
				/*var oRequestFinishedDeferredBAQAnswersAttachmentName = [];
				for(var i=0; i < this.oTotalBAQQuestions; i++){
					var oBAQuestion = sap.ui.getCore().byId("idBAQuestion"+i);
					var oBAQAttachment = sap.ui.getCore().byId("idBAQAttachment"+i);
					

					oRequestFinishedDeferredBAQAnswersAttachmentName.push(this.oModelHelper.readBAQSavedAttachments(this.oRef_id, oBAQuestion.data("idBAQuestion"+i)));

					
					
				}
				
				jQuery.when.apply($,oRequestFinishedDeferredBAQAnswersAttachmentName).then(jQuery.proxy(function(oResponse) {
					//console.log(oResponse.data.FileName);
					oBAQAttachment.setText(oResponse.data.FileName);
					
				}, this));
				
				
				var oRequestFinishedDeferredFinancialAnswersReadChild; //= this.oModelHelper.readFinancialSavedAnswers(this.oRef_id);

				jQuery.when(oRequestFinishedDeferredFinancialAnswersReadChild).then(jQuery.proxy(function(oResponse) {
					
					if(oResponse.data.results[0].Return !== "No Records"){	
						
						//console.log(oResponse);
						
						for(var i=0; i < this.oTotalBAQQuestions; i++){
							 for (j=0; j < this.oTotalBAQQuestions; j++){
								 var oBAQAnswer = sap.ui.getCore().byId("idBAQAnswer"+j);
								 var oBAQuestion = sap.ui.getCore().byId("idBAQuestion"+j);
								
								 if(oBAQuestion.data("idBAQuestion"+j) === oResponse.data.results[i].NodeGuid){
									 
									 oBAQAnswer.setSelectedItem(oBAQAnswer.getItemByKey(oResponse.data.results[i].Atxtlg)); 
								 }			 
								 
							 }									
						}
						this.oFinancialAnswersExists = true;						
						}
				}, this));
				*/
				
				
			
			}
			
		}, this));		
		
		
		
		//this.handleLicenseInfoTabStripSelect();
		
	
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
		this._ShowLeadIDFragment.close();
		location.reload(true);
	},
	handleCloseAlertDialogButtonPress : function(oEvent) {
		this.oShowAlertDialog.close();		
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
		
		
		this.oLicenseInfoTab.setSelectedIndex(1);
		this.oLicenseInfoTab.setSelectedIndex(0);
		
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
		
		//this.getBAQ();
		
		this.oBasicInfoTab.setSelectedIndex(1);
		this.oBasicInfoTab.setSelectedIndex(0);
		this.oLicenseInfoTab.setSelectedIndex(1);
		this.oLicenseInfoTab.setSelectedIndex(0);
		
		
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
		
		//this.openBusyDialog();
		this.handleLicenseInfoTabStripSelect();
		//var that = this;
		//setTimeout(function() { 
			//that.closeBusyDialog();
			
        //}, 5000);
		
	
	},
	handleShareholderInfoButtonClick : function(){
		that = this;
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
		
		if (!this.oShareHolderNewShareHolderFragment) {
		this.oShareHolderNewShareHolderFragment = sap.ui.xmlfragment("com.sagia.view.fragments.ns_shareholderdetails", this.getView()
				.getController());
		this.oShareHolderNewShareHolderFinancialQuestionsFragment = sap.ui.xmlfragment("com.sagia.view.fragments.ns_p_financialquestions", this.getView()
				.getController());
		this.oShareHolderTypeComboBox = this.getView().byId("idNSHTypeComboBox");
		this.oNSHFirstNameInputText = this.getView().byId("idNSHFirstNameInputText");
		this.oNSHCountryComboBox = this.getView().byId("idNSHCountryComboBox");
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
		this.oNSHCreateNSHTable = this.getView().byId("idNSHCreateNSHTable");
		
		
	
		var oRequestFinishedDeferred = this.oModelHelper.readCountry();

		jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
			
			
			this.oShareHolderNewShareHolderFragment.setModel(oResponse);
			
			
			var filterCountry = new sap.ui.model.Filter([
			        			 						new sap.ui.model.Filter("Landx50",
			        			 								sap.ui.model.FilterOperator.NE, "") ],
			        			 						false);
			        			
			        			
			        			
			var oBinding = that.oNSHCountryComboBox.getBinding("items");
			oBinding.filter(filterCountry);
			        			
			        			
			        			
			var filterNationality = new sap.ui.model.Filter([new sap.ui.model.Filter("Natio50",
			        				        			 	sap.ui.model.FilterOperator.NE, "") ],
			        				        			 	false);
		    var oNationalityBinding = that.oNSHNationalityComboBox.getBinding("items");
		    var oPreviousNationalityBinding = that.oNSHPreviousNationalityInputText.getBinding("items");
		    oNationalityBinding.filter(filterNationality);
		    oPreviousNationalityBinding.filter(filterNationality);
			
		}, this));	
		}
		
	},
	handlePreviewInfoButtonClick : function(){
		//sap.ui.getCore().getUIArea(sap.ui.getCore().byId("idLI_BAQ_1_to_6MAtrixLayoutz")).lock();
		//this.oBAQMatrixLayout.lock();
		//sap.ui.getCore().getUIArea(sap.ui.getCore().byId("__xmlview0--idBAQDIV")).lock();
		//sap.ui.getCore().getUIArea("content").lock();
		this.getPreviewBAQ();
		
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
		
		//this.handleLicenseInfoTabStripSelect();

		
		this.oValidationHelper.validateBasicInfo(this);
		//this.handlePreviewLicenseInfoTabStripSelect();
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
		}
		
		
	},
	handleSubmitInfoButtonClick : function(){
		
		that = this;
		
		this._oSubmitInfoButton.setSrc("common/mime/submit_hover.png");
		this._oStagesHeading.setContent(this.oModelHelper
				.getText("SubmitInformationHTML"));
		
		this._oLicenseInfoButton.setSrc("common/mime/license.png");
		this._oShareholderInfoButton.setSrc("common/mime/shareholder.png");
		this._oPreviewInfoButton.setSrc("common/mime/preview.png");
		this._oTermsInfoButton.setSrc("common/mime/terms.png");
		//this._oSubmitInfoButton.setSrc("common/mime/submit.png");
		this._oBasicInfoButton.setSrc("common/mime/basicinfo.png");
		if((this.oNSHTotalShareHolderPercentage === 0 || this.oNSHTotalShareHolderPercentage === 100) && 
				this.oESHTotalShareHolderPercentage === 0){
			that.submit();			
			
		}else if((this.oESHTotalShareHolderPercentage === 0 || this.oESHTotalShareHolderPercentage === 100) && 
				this.oNSHTotalShareHolderPercentage === 0){
			that.submit();
		}else{
			if(!this.oShowAlertDialog.isOpen())
			{
			this.oAlertTextView.setText(this.oModelHelper.getText("NSHPercentageNot100"));
			this.oShowAlertDialog.open();
			
			}
		}
		
	},
	
	submit : function(){
		this.openBusyDialog();
		
		if(this.handleSaveLinkPressSave()){
			
			that = this;
			
			if(!this.oBAQError){
				
				setTimeout(function() { 
					
					var oRequestSubmitFinishedDeferred = that.oModelHelper.Submit(that.oRef_id);

					jQuery.when(oRequestSubmitFinishedDeferred).then(jQuery.proxy(function(oResponse) {
						that.closeBusyDialog();
						//console.log(oResponse);			
						
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
					
					
		        }, 2000);
				
			}else{
				this.closeBusyDialog();

			}
			
		}else{
			this.closeBusyDialog();

		}
		
		
		
		
		
		
		
	}
	
});