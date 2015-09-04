jQuery.sap.declare("com.sagia.common.ModelHelper");
jQuery.sap.require("sap.ui.model.odata.datajs");

com.sagia.common.ModelHelper = {
	oBundle : null,
	oODataModel : null,
	/**
	 * Build i18n Model instance and return
	 */
	getI18nModel : function(sPath, lang) {

		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : sPath, bundleLocale: lang
		});

		this.oBundle = i18nModel.getResourceBundle();

		return i18nModel;
	},
	/**
	 * Return text from i18n model
	 */
	getText : function(sPath, sArg1) {

		var sText = this.oBundle.getText(sPath);

		if (sArg1) {
			sText = sText.replace("&", sArg1);
		}

		return sText;
	},
	/**
	 * Supply here the service url of the service to fetch data from
	 */
	getServiceUrl : function() {

		// OData Service URL
		// "proxy/http://rhocrmdev1.mysagia.gov:8000/sap/opu/odata/sap/ZSAMPLE1_SRV/";
		var sServiceUrl = "/sap/opu/odata/sap/ZQEEMAH_SRV/";

		// for local testing prefix with proxy
		if (window.location.hostname == "localhost") {
			return "proxy" + sServiceUrl;
		} else {
			return sServiceUrl;
		}
		return sServiceUrl;
	},
	/**
	 * Build ODataModel instance and return
	 */
	getODataModel : function() {

		// Create OData Model
		// var sUrl = dia.cmc.model.Config.getServiceUrl();
		var sUrl = this.getServiceUrl();
		this.oODataModel = new sap.ui.model.odata.ODataModel(sUrl, true,
				//"nkumar", "sap123", {
				null, null, {
					"X-Requested-With" : "XMLHttpRequest",
					"Content-Type" : "application/json",
					"X-CSRF-Token":"Fetch" ,
					"DataServiceVersion": "2.0",
					"Authorization" : "Basic bmt1bWFyOnNhcDEyMw=="

				}, true, true);
		//this.oODataModel.refreshSecurityToken();
		var that = this;
		setInterval(function() {
			that.oODataModel.refreshSecurityToken(function(){},function(){}, true);
		}, 60 * 1000);
		return this.oODataModel;
	},
	/**
	 * Build ODataModel instance and return
	 */
	getCSRFToken : function() {
			
		return this.oODataModel.getHeaders()['x-csrf-token'];
	},
	
	/**
	 * Build BAQ ODataModel instance and return
	 */
	getBAQODataModel : function() {

		
		//var sUrl = this.getServiceUrl();
		
		this.oBAQODataModel = new sap.ui.model.odata.ODataModel("proxy/sap/opu/odata/sap/ZQEEMAH_SURVEY_SRV/", true,
				null, null, {
					"X-Requested-With" : "XMLHttpRequest",
					"Content-Type" : "application/json",
					"X-CSRF-Token":"Fetch" ,
					"DataServiceVersion": "2.0",
					"Authorization" : "Basic bmt1bWFyOnNhcDEyMw=="

				}, true, true);
		var that = this;
		setInterval(function() {
			that.oBAQODataModel.refreshSecurityToken(function(){},function(){}, true);
		}, 60 * 1000);
		
		return this.oBAQODataModel;
	},
	/**
	 * Build ShareHolder ODataModel instance and return
	 */
	getShareHolderODataModel : function() {
		
		this.oShareHolderODataModel = new sap.ui.model.odata.ODataModel("proxy/sap/opu/odata/sap/ZQEEMAH_SHRHLDR_SRV/", true,
				null, null, {
					"X-Requested-With" : "XMLHttpRequest",
					"Content-Type" : "application/json",
					"X-CSRF-Token":"Fetch" ,
					"DataServiceVersion": "2.0",
					"Authorization" : "Basic bmt1bWFyOnNhcDEyMw=="

				}, true, true);
		var that = this;
		setInterval(function() {
			that.oShareHolderODataModel.refreshSecurityToken(function(){},function(){}, true);
		}, 60 * 1000);
		return this.oShareHolderODataModel;
	},
	/**Read industry sector
	 * @author mabdulwaheed
	 */
	readIndustrySector : function(oLanguage){
		
		var that = this;
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oShareHolderODataModel.setUseBatch(false);

		this.oShareHolderODataModel.read("Industry?lang='"+oLanguage+"'", {
			success : function(oData, response) {
				
				that.oIndustrySectarCollectionModel = new sap.ui.model.json.JSONModel();
				that.oIndustrySectarCollectionModel.setData({IndustrySectarCollection:oData.results});
				oRequestFinishedDeferred.resolve(that.oIndustrySectarCollectionModel);
				
				//oRequestFinishedDeferred.resolve(response);
			},
			error : function(oResponse) {
				
				oRequestFinishedDeferred.resolve();
				
			}, async : true});

		return oRequestFinishedDeferred;
	},
	/**
	 * Create Financial Answers
	 * @Author Abdul Waheed 
	 */
	createFinancialAnswers : function(oRef_id, questions, answers, oAtxtlg, oFirstName, oLastName) {
		//this.openBusyDialog();
		
		var that = this;
		var oRequestFinishedCreateBAQDeferred = jQuery.Deferred();
		
		if(answers.length > 0){
			var aBatchOperations = [];
	         for ( var i = 0; i < questions.length; i++) {
	        	 
	        	 aBatchOperations.push(this.oBAQODataModel.createBatchOperation("SurChgSet", 'POST',
	        	{    Investorid : oRef_id,
	        		 NodeGuid : questions[i], 
	        		 Atxtlg : oAtxtlg, 
	        		 Flag : 'F', 
	        		 Lang : 'E', 
	        		 Fin_value : answers[i],        		 
	        		 Shldr_FName : oFirstName,
	        		 Shldr_LName : oLastName} ));
	            }
	         this.oBAQODataModel.addBatchChangeOperations(aBatchOperations);
	         this.oBAQODataModel.setUseBatch(true);
	         this.oBAQODataModel.submitBatch( function(oData, oResponse, aErrorResponse) {
	        	 //console.log(" SH "+oResponse);
	             //that.closeBusyDialog();             
	        	        	 
	        	 oRequestFinishedCreateBAQDeferred.resolve(oResponse);
	     	 }, 
	     	 function(oError) {
	     		console.log("E"+oError);
	     	 }, true);
		}else{
       	 	oRequestFinishedCreateBAQDeferred.resolve();
		}

         
         return oRequestFinishedCreateBAQDeferred; 
		
	},
	/**
	
	/**
	 * Get Existing Share Holder details
	 * @Author Abdul Waheed 
	 */
	readExistingSH : function(entityNo){
		

		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oODataModel.setUseBatch(false);

		this.oODataModel.read("VALIDATE_SHAREHOLDER_ENT(Bpno='"+entityNo+"')", {
			success : function(oData, response) {				

				oRequestFinishedDeferred.resolve(response);
			},
			error : function(oResponse) {

				oRequestFinishedDeferred.resolve();
				
			}, async : true});

		return oRequestFinishedDeferred;
	},
	/**
	 * Update BAQ Answers
	 * @Author Abdul Waheed 
	 */
	updateBAQAnswers : function(oRef_id, questions, answers, oFirstName, oLastName) {
		//if(IsicSelectedGroups.length>0){
		
		//this.openBusyDialog();
		
		var that = this;
		var oRequestFinishedUpdateBAQDeferred = jQuery.Deferred();

		 var aBatchOperations = [];
         for ( var i = 0; i < questions.length; i++) {
        	 
        	 aBatchOperations.push(this.oBAQODataModel.createBatchOperation("SurChgSet(Investorid='"+oRef_id+"',NodeGuid='"+questions[i]+"')", 'PUT',{
        		 Investorid : oRef_id,
        		 NodeGuid : questions[i],
        		 Atxtlg : answers[i],
        	     Flag : 'B', 
        	     Lang : 'E',
        		 Shldr_FName : oFirstName,
        		 Shldr_LName : oLastName
        	 } ));
            }
         this.oBAQODataModel.addBatchChangeOperations(aBatchOperations);
         this.oBAQODataModel.setUseBatch(true);
         this.oBAQODataModel.submitBatch( function(oData, oResponse, aErrorResponse) {        	
             //that.closeBusyDialog();             
        	        	 
             oRequestFinishedUpdateBAQDeferred.resolve(oResponse);
     	 }, 
     	 function(oError) {
     		console.log("E"+oError);
     	 }, true);
         
         return oRequestFinishedUpdateBAQDeferred; 
		
	},
	/**
	 * Create LILI Business
	 * @Author Abdul Waheed 
	 */
	createLILIBusiness : function( 
			     oActivity,
        		 oSurveyID, 
        		 oIsicClass,
        		 oIsicDescription,
        		 oIsicGroup,
        		 oIsicDivision, 
        		 oIsicSection,
        		 oRef_id,
        		 oLic, 
        		 oActDesc) {
		//if(IsicSelectedGroups.length>0){
		
		//this.openBusyDialog();
		var that = this;
		var oRequestFinishedCreateBAQDeferred = jQuery.Deferred();
		
		
		 var aBatchOperations = [];
		 
		 if(oLic === "N"){
				for ( var i = 0; i < oLic.length; i++) {
		        	 for ( var j = 0; j < oIsicClass.length; j++) {
		        		 for ( var k = 0; k < oIsicGroup.length; k++) {
		        			 for ( var l = 0; l < oIsicDescription.length; l++) {
			        			 aBatchOperations.push(this.oODataModel.createBatchOperation("IsicDetPsSet", 'POST',{        		
			        	        	  Activity : oActivity,
			        	        	  SurveyID : oSurveyID,
			        	        	  IsicClass : oIsicClass[j],
			        	        	  //IsicDescription : oIsicDescription[l],//oIsicDescription[l].getText(),
			        	        	  Act : oIsicDescription[l],
			        	        	  IsicGroup : oIsicGroup[k],
			        	        	  IsicDivision : oIsicDivision,
			        	        	  IsicSection : oIsicSection,
			        	        	  Investorid : oRef_id,
			        	        	  Lic : oLic[i],
			        	        	  ActDesc : oActDesc   } )); 
		        			     }
		        	          }
		        		 }
		        	 }
		        	 
			}else{
				  aBatchOperations.push(this.oODataModel.createBatchOperation("IsicDetPsSet", 'POST',{        		
  	        	  Activity : oActivity,
  	        	  SurveyID : "",
  	        	  IsicClass : "",
  	        	  IsicDescription : "",
  	        	  IsicGroup : "",
  	        	  IsicDivision : "",
  	        	  IsicSection : "",
  	        	  Investorid : oRef_id,
  	        	  Lic : oLic,
  	        	  ActDesc : ""   } )); 
			}
         
        	 
            
         this.oODataModel.addBatchChangeOperations(aBatchOperations);
         this.oODataModel.setUseBatch(true);
         this.oODataModel.submitBatch( function(oData, oResponse, aErrorResponse) {        	
             //that.closeBusyDialog();             
        	        	 
        	 oRequestFinishedCreateBAQDeferred.resolve(oResponse);
     	 }, 
     	 function(oError) {
     		console.log("E"+oError);
     	 }, true);
         
         return oRequestFinishedCreateBAQDeferred; 
		
	},
	/**
	 * Read ISIC.
	 * @author Abdul Waheed
	 */
	readISIC : function(oRef_id) {
		
		//this.openBusyDialog();

		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oODataModel.setUseBatch(false);
		this.oODataModel.read("IsicDetPs?Investorid='"+oRef_id+"'", {
			success : function(oData, response) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve(response);
			},
			error : function(oResponse) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve();

			}, async : true});

		return oRequestFinishedDeferred;
		
	},
	/**
	 * Delete Delete New Share Holder Entry
	 * @author Abdul Waheed
	 */
	deleteNewShareHolderEntry : function(oRef_id, oEntityNo) {
		
		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oShareHolderODataModel.setUseBatch(false);

		this.oShareHolderODataModel.remove("ZSHAREHOLDER_INFO_ENT(RefID='"+oRef_id+"',EntityNo='"+oEntityNo+"',FileType='')", {
			success : function(oData, response) {
				
				oRequestFinishedDeferred.resolve(response);
				//that.closeBusyDialog();
			},
			error : function(oResponse) {
				
				oRequestFinishedDeferred.resolve();

				//that.closeBusyDialog();
			}, async : true});

		return oRequestFinishedDeferred;
		
	},
	/**
	 * Delete BAQ Entries
	 * @author Abdul Waheed
	 */
	deleteBAQEntry : function(oRef_id) {
		
		//this.openBusyDialog();

		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oBAQODataModel.setUseBatch(false);

		this.oBAQODataModel.remove("SurChgSet(Investorid='"+oRef_id+"',NodeGuid='B')", {
			success : function(oData, response) {
				
				oRequestFinishedDeferred.resolve(response);
				//that.closeBusyDialog();
			},
			error : function(oResponse) {
				
				oRequestFinishedDeferred.resolve();

				//that.closeBusyDialog();
			}, async : true});

		return oRequestFinishedDeferred;
		
	},
	/**
	 * Create BAQ Answers
	 * @Author Abdul Waheed 
	 */
	createBAQAnswers : function(oRef_id, questions, answers, oFirstName, oLastName, oLanguage) {
		//if(IsicSelectedGroups.length>0){
		
		//this.openBusyDialog();
		
		var that = this;
		var oRequestFinishedCreateBAQDeferred = jQuery.Deferred();

		 var aBatchOperations = [];
         for ( var i = 0; i < questions.length; i++) {
        	 
        	 aBatchOperations.push(this.oBAQODataModel.createBatchOperation("SurChgSet", 'POST',{Investorid : oRef_id,
        		 NodeGuid : questions[i], Atxtlg : answers[i], Flag : 'B', Lang : oLanguage,
        		 Shldr_FName : oFirstName,
        		 Shldr_LName : oLastName} ));
            }
         this.oBAQODataModel.addBatchChangeOperations(aBatchOperations);
         this.oBAQODataModel.setUseBatch(true);
         this.oBAQODataModel.submitBatch( function(oData, oResponse, aErrorResponse) {        	
             //that.closeBusyDialog();             
        	        	 
        	 oRequestFinishedCreateBAQDeferred.resolve(oResponse);
     	 }, 
     	 function(oError) {
     		console.log("E"+oError);
     	 }, true);
         
         return oRequestFinishedCreateBAQDeferred; 
		
	},
	/**
	 * Create Share Holder Activity Answers
	 * @Author Abdul Waheed 
	 */
	createShareHolderActivityAnswers : function(oRef_id, questions, answers, oFirstName, oLastName, oLanguage) {
		
		var that = this;
		var oRequestFinishedCreateAQDeferred = jQuery.Deferred();
		
		if(answers.length > 0){
			var aBatchOperations = [];
	         for ( var i = 0; i < questions.length; i++) {
	        	 
	        	 aBatchOperations.push(this.oBAQODataModel.createBatchOperation("SurChgSet", 'POST',{Investorid : oRef_id,
	        		 NodeGuid : questions[i], Atxtlg : answers[i], Flag : 'A', Lang : oLanguage,
	        		 Shldr_FName : oFirstName,
	        		 Shldr_LName : oLastName
	        		 } ));
	            }
	         this.oBAQODataModel.addBatchChangeOperations(aBatchOperations);
	         this.oBAQODataModel.setUseBatch(true);
	         this.oBAQODataModel.submitBatch( function(oData, oResponse, aErrorResponse) {                  	 
	        	 oRequestFinishedCreateAQDeferred.resolve(oResponse);
	     	 }, 
	     	 function(oError) {
	     		console.log("E"+oError);
	     	 }, true);
		}else{
			oRequestFinishedCreateAQDeferred.resolve();
		}
		
         return oRequestFinishedCreateAQDeferred; 
		
	},
	/**
	 * Create Share Holder Experience Answers
	 * @Author Abdul Waheed 
	 */
	createShareHolderExperienceAnswers : function(oRef_id, questions, answers, oFirstName, oLastName, oSurveyID, oLanguage) {
		
		var that = this;
		var oRequestFinishedCreateEQDeferred = jQuery.Deferred();
		
		if(answers.length > 0){
			var aBatchOperations = [];
	         for ( var i = 0; i < questions.length; i++) {
	        	 
	        	 aBatchOperations.push(this.oBAQODataModel.createBatchOperation("SurChgSet", 'POST',{Investorid : oRef_id,
	        		 NodeGuid : questions[i], Atxtlg : answers[i], Flag : 'E', Lang : oLanguage,
	        		 Shldr_FName : oFirstName,
	        		 Shldr_LName : oLastName,
	        		 Fin_value : oSurveyID} ));
	            }
	         this.oBAQODataModel.addBatchChangeOperations(aBatchOperations);
	         this.oBAQODataModel.setUseBatch(true);
	         this.oBAQODataModel.submitBatch( function(oData, oResponse, aErrorResponse) {                  	 
	        	 oRequestFinishedCreateEQDeferred.resolve(oResponse);
	     	 }, 
	     	 function(oError) {
	     		console.log("E"+oError);
	     	 }, true);
		}else{
       	 	oRequestFinishedCreateEQDeferred.resolve();
		}	 
         
         return oRequestFinishedCreateEQDeferred; 
		
	},
	/**
	 * Read BAQ Saved Attachments.
	 * @author Abdul Waheed
	 */
	readBAQSavedAttachments : function(oRef_id, oNodeID) {
		
		//this.openBusyDialog();

		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oBAQODataModel.setUseBatch(false);
		this.oBAQODataModel.read("SurveyAttSet(Investorid='"+oRef_id+"',NodeGuid='"+oNodeID+"',FileName=' ')", {
			success : function(oData, response) {
				
				//that.closeBusyDialog();

					oRequestFinishedDeferred.resolve(response);
				
				
			},
			error : function(oResponse) {
				//that.closeBusyDialog();
				oRequestFinishedDeferred.resolve();
				//sap.m.MessageToast.show(oResponse);

			}, async : true});

		return oRequestFinishedDeferred;
		
	},
	/**
	 * Read Financial Saved Answers.
	 * @author Abdul Waheed
	 */
	readFinancialSavedAnswers : function(oRef_id) {
		
		this.openBusyDialog();

		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oBAQODataModel.setUseBatch(false);

		this.oBAQODataModel.read("SurChg?Investorid='"+oRef_id+"'", {
			success : function(oData, response) {
				that.closeBusyDialog();

				oRequestFinishedDeferred.resolve(response);
			},
			error : function(oResponse) {
				that.closeBusyDialog();
				oRequestFinishedDeferred.resolve();

			}, async : true});

		return oRequestFinishedDeferred;
		
	},
	/**
	 * Read BAQ Saved Answers.
	 * @author Abdul Waheed
	 */
	readBAQSavedAnswers : function(oRef_id) {
		
		//this.openBusyDialog();

		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oBAQODataModel.setUseBatch(false);

		this.oBAQODataModel.read("SurChg?Investorid='"+oRef_id+"'&Flag='B'", {
			success : function(oData, response) {
				
				oRequestFinishedDeferred.resolve(response);
				//that.closeBusyDialog();
			},
			error : function(oResponse) {
				
				oRequestFinishedDeferred.resolve();

				//that.closeBusyDialog();
			}, async : true});

		return oRequestFinishedDeferred;
		
	},
	/**
	 * Check ISIC Availability
	 * @author Abdul Waheed
	 */
	checkISICAvailability : function(oRef_id) {
		
		//this.openBusyDialog();

		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oODataModel.setUseBatch(false);

		this.oODataModel.read("IsicDetPs?Investorid='"+oRef_id+"'", {
			success : function(oData, response) {
				
				oRequestFinishedDeferred.resolve(response);
				//that.closeBusyDialog();
			},
			error : function(oResponse) {
				
				oRequestFinishedDeferred.resolve();

				//that.closeBusyDialog();
			}, async : true});

		return oRequestFinishedDeferred;
		
	},
	/**
	 * Delete ISIC Entry
	 * @author Abdul Waheed
	 */
	deleteISICEntry : function(oRef_id) {
		
		//this.openBusyDialog();

		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oODataModel.setUseBatch(false);

		this.oODataModel.remove("IsicDetPsSet(Investorid='"+oRef_id+"')", {
			success : function(oData, response) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve(response);
			},
			error : function(oResponse) {
				//that.closeBusyDialog();
				oRequestFinishedDeferred.resolve();

			}});

		return oRequestFinishedDeferred;
		
	},
	/**
	 * Submit App.
	 * @author Abdul Waheed
	 */
	Submit : function(oRefID) {
		// Open busy dialog
		//this.openBusyDialog();

		var that = this;
		var oEntry = {};
		oEntry.RefID=oRefID;
		
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oODataModel.setUseBatch(false);

       
		this.oODataModel.create("/ZQEEMAH_SUBMIT_ENT", oEntry , {
		
			success : function(oData) {
				//console.log(oData);
				// close busy dialog
				//that.closeBusyDialog();
				oRequestFinishedDeferred.resolve(oData);
				
			},
			error : function(oResponse) {
				//that.closeBusyDialog();

				/*console.log(oResponse);*/
				oRequestFinishedDeferred.resolve();
				// close busy dialog
			},
			async : true,
			urlParameters : oEntry
		});
		return oRequestFinishedDeferred;

	},
	/**
	 * Create new share holder.
	 * @author Abdul Waheed
	 */
	createNewShareHolder : function(oRef_id, oShareHolderType, oNSHFirstNameInputText,
			oNSHCountryComboBox,
			oNSHLastNameInputText,
			oNSHCityNameInputText,
			oNSHGenderComboBox,
			oNSHPOBoxInputText,
			oNSHMaritalStatusComboBox,
			oNSHPostalCodeInputText,
			oNSHAcademicTitleInputText,
			oNSHStreetInputText,
			oNSHDOBDate,
			oNSHWebsiteInputText,
			oNSHTelephoneInputText,
			oNSHNationalityComboBox,
			oNSHMobilePhoneInputText,
			oNSHPreviousNationalityInputText,
			oNSHFaxInputText,
			oNSHCommMethodInputText,
			oNSHEmailInputText,
			oNSHPercentageInputText,
			oNSHActivityQ1ComboBox,
			oNSHActivityQ2ComboBox,
			oNSHActivityQ3ComboBox, oNSHExperienceQ1ComboBox, oNSHExperienceQ2ComboBox,
			oNSHExperienceQ3ComboBox, oNSHExperienceQ4ComboBox,
			oNSHStock12InputText,
			oNSHStock13InputText,
			oNSHStock14InputText,
			oNSHTotalCurrentAssets12InputText,
			oNSHTotalCurrentAssets13InputText,
			oNSHTotalCurrentAssets14InputText,		
			oNSHTotalCurrentLiabialities12InputText,
			oNSHTotalCurrentLiabialities13InputText,
			oNSHTotalCurrentLiabialities14InputText,
			oNSHNetSales12InputText,
			oNSHNetSales13InputText,
			oNSHNetSales14InputText,
			oNSHTotalAssets12InputText,
			oNSHTotalAssets13InputText,
			oNSHTotalAssets14InputText,
			oNSHTotalDebt12InputText,
			oNSHTotalDebt13InputText,
			oNSHTotalDebt14InputText,
			oNSHDistributableNetIncome12InputText,
			oNSHDistributableNetIncome13InputText,
			oNSHDistributableNetIncome14InputText,
			oNSHNetProfit12InputText,
			oNSHNetProfit13InputText,
			oNSHNetProfit14InputText,
			oNSHInterests12InputText,
			oNSHInterests13InputText,
			oNSHInterests14InputText,
			oNSHTotalAssetsInBalanceSheet12InputText,
			oNSHTotalAssetsInBalanceSheet13InputText,		
			oNSHTotalAssetsInBalanceSheet14InputText, oBpno,
			oCcodeTele,
			oCcodeFax,
			oCcodeMobile				
	){
		//this.openBusyDialog();

		
		var that = this;
		var oEntry = {};
		oEntry.RefID = oRef_id;
		oEntry.EntityNo = '';
		oEntry.FileType = '';
		oEntry.ShldrType = oShareHolderType;
		oEntry.EntityFname = oNSHFirstNameInputText;
		oEntry.EntityLname = oNSHLastNameInputText;
		oEntry.Gender = oNSHGenderComboBox;
		oEntry.MaritalStatus = oNSHMaritalStatusComboBox;
		oEntry.Academic = oNSHAcademicTitleInputText;
		oEntry.Dob = oNSHDOBDate;
		oEntry.CcodeTele = oCcodeTele;
		oEntry.Telephone = oNSHTelephoneInputText;
		oEntry.CcodeMobile = oCcodeMobile;
		oEntry.Mobile = oNSHMobilePhoneInputText;
		oEntry.CcodeFax = oCcodeFax;
		oEntry.Fax = oNSHFaxInputText;
		oEntry.Country = oNSHCountryComboBox;
		oEntry.City = oNSHCityNameInputText;
		oEntry.Street = oNSHStreetInputText;
		oEntry.PoBox = oNSHPOBoxInputText;
		oEntry.PostalCode = oNSHPostalCodeInputText;
		oEntry.Website = oNSHWebsiteInputText;
		oEntry.CurrNationalty = oNSHNationalityComboBox;
		oEntry.PrevNationalty = oNSHPreviousNationalityInputText;
		oEntry.CommMtd = oNSHCommMethodInputText;
		oEntry.Percentage = Number(oNSHPercentageInputText);
		oEntry.CompanyAge = oNSHActivityQ1ComboBox;
		oEntry.Branches = oNSHActivityQ2ComboBox;
		oEntry.Employees = oNSHActivityQ3ComboBox;
		oEntry.FinStable = oNSHExperienceQ1ComboBox;
		oEntry.CultLandArea = oNSHExperienceQ2ComboBox;
		oEntry.NoGreenhouse = oNSHExperienceQ3ComboBox;
		oEntry.ApprMinistry = oNSHExperienceQ4ComboBox;
		oEntry.Stock12 = oNSHStock12InputText;
		oEntry.Stock13 = oNSHStock13InputText;
		oEntry.Stock14 = oNSHStock14InputText;
		oEntry.CurrAssets12 = oNSHTotalCurrentAssets12InputText;
		oEntry.CurrAssets13 = oNSHTotalCurrentAssets13InputText;
		oEntry.CurrAssets14 = oNSHTotalCurrentAssets14InputText;
		oEntry.CurrLiability12 = oNSHTotalCurrentLiabialities12InputText;
		oEntry.CurrLiability13 = oNSHTotalCurrentLiabialities13InputText;
		oEntry.CurrLiability14 = oNSHTotalCurrentLiabialities14InputText;
		oEntry.NetSales12 = oNSHNetSales12InputText;
		oEntry.NetSales13 = oNSHNetSales13InputText;
		oEntry.NetSales14 = oNSHNetSales14InputText;
		oEntry.TotAssets12 = oNSHTotalAssets12InputText;
		oEntry.TotAssets13 = oNSHTotalAssets13InputText;
		oEntry.TotAssets14 = oNSHTotalAssets14InputText;
		oEntry.TotDebt12 = oNSHTotalDebt12InputText;
		oEntry.TotDebt13 = oNSHTotalDebt13InputText;
		oEntry.TotDebt14 = oNSHTotalDebt14InputText;
		oEntry.NetIncome12 = oNSHDistributableNetIncome12InputText;
		oEntry.NetIncome13 = oNSHDistributableNetIncome13InputText;
		oEntry.NetIncome14 = oNSHDistributableNetIncome14InputText;
		oEntry.NetProfit12 = oNSHNetProfit12InputText;
		oEntry.NetProfit13 = oNSHNetProfit13InputText;
		oEntry.NetProfit14 = oNSHNetProfit14InputText;
		oEntry.Intrest12 = oNSHInterests12InputText;
		oEntry.Intrest13 = oNSHInterests13InputText;
		oEntry.Intrest14 = oNSHInterests14InputText;
		oEntry.BalShtAssest12 = oNSHTotalAssetsInBalanceSheet12InputText;
		oEntry.BalShtAssest13 = oNSHTotalAssetsInBalanceSheet13InputText;
		oEntry.BalShtAssest14 = oNSHTotalAssetsInBalanceSheet14InputText;
		oEntry.Exbpno = oBpno;
		oEntry.Email = oNSHEmailInputText;

		
		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
		
        this.oShareHolderODataModel.setUseBatch(false);

		this.oShareHolderODataModel.create("ZSHAREHOLDER_INFO_ENT", oEntry , {
		
			success : function(oData) {
				//console.log(oData);
				
				
				
				//oRequestFinishedDeferred.resolve(oData);
				//that.oNSHCollectionModel = new sap.ui.model.json.JSONModel();
				//that.oNSHCollectionModel.setData({NSHCollection:oData});
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve(oData);
				
			},
			error : function(oResponse) {
				//that.closeBusyDialog();
				oRequestFinishedDeferred.resolve();
			},
			async : true,
			urlParameters : oEntry
		});
		return oRequestFinishedDeferred;
		
	},
	/**
	 * read Saved Share Holders
	 * @author : Abdul Waheed
	 */
	readSavedShareHolders : function(oRefID) {		

		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oODataModel.setUseBatch(false);

		this.oShareHolderODataModel.read("ZSHAREHOLDER_INF?RefID='"+oRefID+"'&FileType=''&EntityNo=''", {
			success : function(oData, response) {
				
				//that.oSavedShareHoldersCollectionModel = new sap.ui.model.json.JSONModel();
				//that.oSavedShareHoldersCollectionModel.setData({SavedShareHolderCollection:oData});
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve(response);
			},
			error : function(oResponse) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve();
			}, async : true});

		return oRequestFinishedDeferred;
	},
	/**
	 * Edit Saved Share Holders
	 * @author : Abdul Waheed
	 */
	editSavedShareHolders : function(oRefID, oEntityNo) {
		
		this.openBusyDialog();

		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oODataModel.setUseBatch(false);

		this.oShareHolderODataModel.read("ZSHAREHOLDER_INFO_ENT(RefID='"+oRefID+"',EntityNo='"+oEntityNo+"',FileType='')", {
			
			
			success : function(oData, response) {
				
				//that.oSavedShareHoldersCollectionModel = new sap.ui.model.json.JSONModel();
				//that.oSavedShareHoldersCollectionModel.setData({SavedShareHolderCollection:oData});
				that.closeBusyDialog();

				oRequestFinishedDeferred.resolve(response);
			},
			error : function(oResponse) {
				that.closeBusyDialog();

				oRequestFinishedDeferred.resolve();
			}, async : true});

		return oRequestFinishedDeferred;
	},
	
	/**
	 * read Saved Share holder  attachment name
	 * @author : Abdul Waheed
	 */
	checkIfNSHtAttached : function(refid, oEntityNo, oFipleType) {
		this.openBusyDialog();

		var that = this;
		
		var oRequestFinishedDeferred2 = jQuery.Deferred();
		
        this.oShareHolderODataModel.setUseBatch(false);
		this.oShareHolderODataModel.read("ZSHAREHOLDER_ATT_ENT(RefID='"+refid+"',EntityNo='"+oEntityNo+"',FileType='"+oFipleType+"')", {
			success : function(oData, response) {
				oRequestFinishedDeferred2.resolve(response);
				that.closeBusyDialog();
			},
			error : function(oResponse) {
				oRequestFinishedDeferred2.resolve();
				that.closeBusyDialog();
			}, async : true});

		return oRequestFinishedDeferred2;
	},

	
	/**
	 * read BICI Pass Port Attachment Name
	 * @author : Abdul Waheed
	 */
	readBICIPassPortAttachment : function(refid) {
		//this.openBusyDialog();

		var that = this;
		
		var oRequestFinishedDeferred2 = jQuery.Deferred();
		
        this.oODataModel.setUseBatch(false);


		this.oODataModel.read("ZBASIC_CONT_FILE_ENT(RefID='"+refid+"',FileType='PASS')", {
			success : function(oData, response) {
				//console.log(response);
				oRequestFinishedDeferred2.resolve(response);
				///that.closeBusyDialog();
			},
			error : function(oResponse) {
				//console.log(oResponse);				
				
				oRequestFinishedDeferred2.resolve();

				//that.closeBusyDialog();
			}, async : true});

		return oRequestFinishedDeferred2;
	},
	/**
	 * read BICI POA  Attachment Name
	 * @author : Abdul Waheed
	 */
	readBICIPPOAAttachment : function(refid) {
		//this.openBusyDialog();

		var that = this;
		
		var oRequestFinishedDeferred1 = jQuery.Deferred();
        this.oODataModel.setUseBatch(false);

		this.oODataModel.read("ZBASIC_CONT_FILE_ENT(RefID='"+refid+"',FileType='POA')", {
			success : function(oData, response) {
				
				oRequestFinishedDeferred1.resolve(response);
				//that.closeBusyDialog();
			},
			error : function(oResponse) {
				//console.log(oResponse);				
				
				oRequestFinishedDeferred1.resolve();

				//that.closeBusyDialog();
			}, async : true});

		return oRequestFinishedDeferred1;
	},
	/**
	 * read BICI
	 * @author : Abdul Waheed
	 */
	readBICI : function(refid) {
		
		//this.openBusyDialog();

		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oODataModel.setUseBatch(false);

		this.oODataModel.read("ZBASIC_CONT_INFO_ENT(RefID='"+refid+"',FileType='')", {
			success : function(oData, response) {
				
				oRequestFinishedDeferred.resolve(response);//that.BIOICollectionJSONModel);
				//that.closeBusyDialog();
			},
			error : function(oResponse) {
				//console.log(oResponse);				
				
				oRequestFinishedDeferred.resolve();

				//that.closeBusyDialog();
			}, async : true});

		return oRequestFinishedDeferred;
	},
	/**
	 * Upload BAQ Attachment.
	 * @author Abdul Waheed
	 */
	uploadBAQAttachment : function(oRefID, oNodeGuid, oBAQFileUploader){
		//var oUploadBAQAttachmentRequestFinishedDeferred = jQuery.Deferred();
		if(oBAQFileUploader.getValue() !== ""){
		var csrf =  this.oODataModel.getHeaders()['x-csrf-token'];
		that = this;
		
		
		oBAQFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
				{name: "Content-Type", value: "application/ atom+xml" }));
		oBAQFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
				{name: "X-CSRF-Token", value: csrf })); 
		/*oBAQFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
				{name: "Method", value: 'PUT' }));*/
		/*oBAQFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter
        		({name: "slug", value: oBAQFileUploader.getValue() }));
           */
        
		oBAQFileUploader.setUploadUrl("proxy/sap/opu/odata/sap/ZQEEMAH_SURVEY_SRV/Survey_Att_hdrSet(Investorid='"+oRefID+"',NodeGuid='"+oNodeGuid+"',FileName='"+oBAQFileUploader.getValue()+"')/SurveyFile");
		oBAQFileUploader.attachUploadComplete(function(){
			oBAQFileUploader.removeAllHeaderParameters();
			oBAQFileUploader.clear();
        	//that.closeBusyDialog();
        	//oUploadBAQAttachmentRequestFinishedDeferred.resolve();
        	 //sap.m.MessageToast.show(that.getText("Uploaded"));	
        });
        	
        //this.openBusyDialog();
        oBAQFileUploader.upload();
		}
       // return oUploadBAQAttachmentRequestFinishedDeferred;
	},
	
	/**
	 * Upload Activity Q Attachment.
	 * @author Abdul Waheed
	 */
	
	uploadActivityQAttachment : function(oRefID, oNodeGuid, oAQFileUploader, oFirstName, oLastName){
 		var oUploadActivityQAttachmentRequestFinishedDeferred = jQuery.Deferred();
 		
 		if(oAQFileUploader.getValue() !== ""){
 			var csrf =  this.oShareHolderODataModel.getHeaders()['x-csrf-token'];
 			oAQFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
 				{name: "Content-Type", value: "application/atom+xml" }));
 			oAQFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
 				{name: "X-CSRF-Token", value: csrf }));        
 			 
            var oFileName = oFirstName+"_"+oLastName+"_"+oAQFileUploader.getValue(); 
 			oAQFileUploader.setUploadUrl("proxy/sap/opu/odata/sap/ZQEEMAH_SURVEY_SRV/Survey_Att_hdrSet(Investorid='"+oRefID+"',NodeGuid='"+oNodeGuid+"',FileName='"+oFileName+"')/SurveyFile");
 		                                                                   
 			oAQFileUploader.attachUploadComplete(function(){
 				oAQFileUploader.removeAllHeaderParameters();
 				oAQFileUploader.clear();
 				oUploadActivityQAttachmentRequestFinishedDeferred.resolve();         
 				});
 			oAQFileUploader.upload();
 		}else{
 			oUploadActivityQAttachmentRequestFinishedDeferred.resolve();

 		}
		return oUploadActivityQAttachmentRequestFinishedDeferred;

 	},
 	/**
	 * Upload Experience Q Attachment.
	 * @author Abdul Waheed
	 */
	
 	uploadExperienceQAttachment : function(oRefID, oNodeGuid, oEQFileUploader, oFirstName, oLastName){
 		var oUploadExperienceQAttachmentRequestFinishedDeferred = jQuery.Deferred();
 		
 		if(oEQFileUploader.getValue() !== ""){
 			var csrf =  this.oShareHolderODataModel.getHeaders()['x-csrf-token'];
 			oEQFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
 				{name: "Content-Type", value: "application/atom+xml" }));
 			oEQFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
 				{name: "X-CSRF-Token", value: csrf }));        
 			 
            var oFileName = oFirstName+"_"+oLastName+"_"+oEQFileUploader.getValue(); 

 			oEQFileUploader.setUploadUrl("proxy/sap/opu/odata/sap/ZQEEMAH_SURVEY_SRV/Survey_Att_hdrSet(Investorid='"+oRefID+"',NodeGuid='"+oNodeGuid+"',FileName='"+oFileName+"')/SurveyFile");
 		                                                                   
 			oEQFileUploader.attachUploadComplete(function(){
 				oEQFileUploader.removeAllHeaderParameters();
 				oEQFileUploader.clear();
 				oUploadExperienceQAttachmentRequestFinishedDeferred.resolve();         
 				});
 			oEQFileUploader.upload();
 		}else{
 			oUploadExperienceQAttachmentRequestFinishedDeferred.resolve();

 		}
		return oUploadExperienceQAttachmentRequestFinishedDeferred;

 	},
 	/**
	 * Upload Passport Copy.
	 * @author Abdul Waheed
	 */
	uploadBICIPassPortCopy : function(oRefID, oBICIPassPortCopyFileUploader, oOrgName){
		var oUploadBICIPassPortCopyRequestFinishedDeferred = jQuery.Deferred();
		
		if(oBICIPassPortCopyFileUploader.getValue() !== ""){
		
		oBICIPassPortCopyFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
				{name: "Content-Type", value: "application/atom+xml" }));
		oBICIPassPortCopyFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
				{name: "X-CSRF-Token", value: this.getCSRFToken() }));        
		oBICIPassPortCopyFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter
        		({name: "slug", value: oOrgName+"_"+oBICIPassPortCopyFileUploader.getValue() }));
           
        
		oBICIPassPortCopyFileUploader.setUploadUrl(this.getServiceUrl()+"ZBASIC_CONT_INFO_ENT(RefID='"+oRefID+"',FileType='PASS')/InfoToPoa");
		oBICIPassPortCopyFileUploader.attachUploadComplete(function(){
			oBICIPassPortCopyFileUploader.removeAllHeaderParameters();
			oBICIPassPortCopyFileUploader.clear();
			oUploadBICIPassPortCopyRequestFinishedDeferred.resolve("Uploaded");       
        });
        oBICIPassPortCopyFileUploader.upload();
		}else{
			oUploadBICIPassPortCopyRequestFinishedDeferred.resolve("FileNotAvailable");
 		}
		return oUploadBICIPassPortCopyRequestFinishedDeferred;
	},
 	
	
	/**
	 * Upload Proof Of Attorney.
	 * @author Abdul Waheed
	 */	
     uploadPOA : function(oRefID, oBICIPowerofAttorneyFileUploader, oOrgName){
 		var oUploadPOARequestFinishedDeferred = jQuery.Deferred();
 		
 		if(oBICIPowerofAttorneyFileUploader.getValue() !== ""){
 			
 			oBICIPowerofAttorneyFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
 				{name: "Content-Type", value: "application/atom+xml" }));
 			oBICIPowerofAttorneyFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
 				{name: "X-CSRF-Token", value: this.getCSRFToken() }));        
 			oBICIPowerofAttorneyFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter
         		({name: "slug", value: oOrgName+"_"+oBICIPowerofAttorneyFileUploader.getValue() }));
            
         
 			oBICIPowerofAttorneyFileUploader.setUploadUrl(this.getServiceUrl()+"ZBASIC_CONT_INFO_ENT(RefID='"+oRefID+"',FileType='POA')/InfoToPoa");
 		                                                                   
 			oBICIPowerofAttorneyFileUploader.attachUploadComplete(function(){
 				oBICIPowerofAttorneyFileUploader.removeAllHeaderParameters();
 				oBICIPowerofAttorneyFileUploader.clear();
 				oUploadPOARequestFinishedDeferred.resolve("Uploaded");         
         });
 			oBICIPowerofAttorneyFileUploader.upload();
 		}else{
 			oUploadPOARequestFinishedDeferred.resolve("FileNotAvailable");
 		}
		return oUploadPOARequestFinishedDeferred;

 	},
     /**
 	 * Upload NSH Passport Copy.
 	 * @author Abdul Waheed
 	 */
 	uploadNSHPassPortCopy : function(oNSHName, oRefID, oEntityNo, oNSHPassPortCopyFileUploader){
 		var oUploadNSHPassPortCopyRequestFinishedDeferred = jQuery.Deferred();
 		
 		if(oNSHPassPortCopyFileUploader.getValue() !== ""){
 			sap.m.MessageToast.show(this.getText("UploadingNSHPPCopy"), {duration : 20000});
 			var csrf =  this.oShareHolderODataModel.getHeaders()['x-csrf-token'];
 		   oNSHPassPortCopyFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
 				{name: "Content-Type", value: "application/atom+xml" }));
 		   oNSHPassPortCopyFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
 				{name: "X-CSRF-Token", value: csrf }));        
 		   oNSHPassPortCopyFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter
         		({name: "slug", value: oNSHName+""+oNSHPassPortCopyFileUploader.getValue() }));
            
         
 		   oNSHPassPortCopyFileUploader.setUploadUrl("proxy/sap/opu/odata/sap/ZQEEMAH_SHRHLDR_SRV/ZSHAREHOLDER_INFO_ENT(RefID='"+oRefID+"',EntityNo='"+oEntityNo+"',FileType='PASS')/InfoToFile");
 		                                                                   
 		   oNSHPassPortCopyFileUploader.attachUploadComplete(function(){
 				oNSHPassPortCopyFileUploader.removeAllHeaderParameters();
 				oNSHPassPortCopyFileUploader.clear();
 				oUploadNSHPassPortCopyRequestFinishedDeferred.resolve();

         
         });
 		oNSHPassPortCopyFileUploader.upload();
 		}else{
				oUploadNSHPassPortCopyRequestFinishedDeferred.resolve();

 		}
		return oUploadNSHPassPortCopyRequestFinishedDeferred;

 	},
 	/**
 	 * Upload Commercial Registration.
 	 * @author Abdul Waheed
 	 */
 	uploadCommercialRegAttachment : function(oNSHName, oRefID, oEntityNo, oNSHCommercialRegAttachment){
 		var oUploadNSHCommercialRegAttachmentRequestFinishedDeferred = jQuery.Deferred();
 		
 		if(oNSHCommercialRegAttachment.getValue() !== ""){
 			sap.m.MessageToast.show(this.getText("UploadingNSHCRCopy"), {duration : 20000});
 			var csrf =  this.oShareHolderODataModel.getHeaders()['x-csrf-token'];
 			oNSHCommercialRegAttachment.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
 				{name: "Content-Type", value: "application/atom+xml" }));
 			oNSHCommercialRegAttachment.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
 				{name: "X-CSRF-Token", value: csrf }));        
 			oNSHCommercialRegAttachment.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter
         		({name: "slug", value: oNSHName+""+oNSHCommercialRegAttachment.getValue() }));
            
         
 			oNSHCommercialRegAttachment.setUploadUrl("proxy/sap/opu/odata/sap/ZQEEMAH_SHRHLDR_SRV/ZSHAREHOLDER_INFO_ENT(RefID='"+oRefID+"',EntityNo='"+oEntityNo+"',FileType='COMM')/InfoToFile");
 		                                                                   
 			oNSHCommercialRegAttachment.attachUploadComplete(function(){
 				oNSHCommercialRegAttachment.removeAllHeaderParameters();
 				oNSHCommercialRegAttachment.clear();
 				oUploadNSHCommercialRegAttachmentRequestFinishedDeferred.resolve();

         
         });
 			oNSHCommercialRegAttachment.upload();
 		}else{
				oUploadNSHCommercialRegAttachmentRequestFinishedDeferred.resolve();

 		}
		return oUploadNSHCommercialRegAttachmentRequestFinishedDeferred;

 	},
 	/**
 	 * Upload NSH Bank Statement.
 	 * @author Abdul Waheed
 	 */
 	uploadBankStatementAttachment : function(oNSHName, oRefID, oEntityNo, oNSHBankStatementAttachment){
 		var oUploadNSHBankStatementAttachmentRequestFinishedDeferred = jQuery.Deferred();
 		
 		if(oNSHBankStatementAttachment.getValue() !== ""){
 			sap.m.MessageToast.show(this.getText("UploadingNSHBSCopy"), {duration : 20000});
 			var csrf =  this.oShareHolderODataModel.getHeaders()['x-csrf-token'];
 			oNSHBankStatementAttachment.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
 				{name: "Content-Type", value: "application/atom+xml" }));
 			oNSHBankStatementAttachment.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
 				{name: "X-CSRF-Token", value: csrf }));        
 			oNSHBankStatementAttachment.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter
         		({name: "slug", value: oNSHName+""+oNSHBankStatementAttachment.getValue() }));
            
         
 			oNSHBankStatementAttachment.setUploadUrl("proxy/sap/opu/odata/sap/ZQEEMAH_SHRHLDR_SRV/ZSHAREHOLDER_INFO_ENT(RefID='"+oRefID+"',EntityNo='"+oEntityNo+"',FileType='BANK')/InfoToFile");
 		                                                                   
 			oNSHBankStatementAttachment.attachUploadComplete(function(){
 				oNSHBankStatementAttachment.removeAllHeaderParameters();
 				oNSHBankStatementAttachment.clear();
 				oUploadNSHBankStatementAttachmentRequestFinishedDeferred.resolve();

         
         });
 			oNSHBankStatementAttachment.upload();
 		}else{
 			oUploadNSHBankStatementAttachmentRequestFinishedDeferred.resolve();

 		}
		return oUploadNSHBankStatementAttachmentRequestFinishedDeferred;

 	},
 	/**
 	 * Upload NSH Balance Sheet 
 	 * @author Abdul Waheed
 	 */
 	uploadNSHBalanceSheetAttachment : function(oNSHName, oRefID, oEntityNo, oNSHBalanceSheetAttachment){
 		var oUploadNSHBalanceSheetAttachmentRequestFinishedDeferred = jQuery.Deferred();
 		
 		if(oNSHBalanceSheetAttachment.getValue() !== ""){
 			sap.m.MessageToast.show(this.getText("UploadingNSHBALSCopy"), {duration : 20000});
 			var csrf =  this.oShareHolderODataModel.getHeaders()['x-csrf-token'];
 			oNSHBalanceSheetAttachment.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
 				{name: "Content-Type", value: "application/atom+xml" }));
 			oNSHBalanceSheetAttachment.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
 				{name: "X-CSRF-Token", value: csrf }));        
 			oNSHBalanceSheetAttachment.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter
         		({name: "slug", value: oNSHName+""+oNSHBalanceSheetAttachment.getValue() }));
            
         
 			oNSHBalanceSheetAttachment.setUploadUrl("proxy/sap/opu/odata/sap/ZQEEMAH_SHRHLDR_SRV/ZSHAREHOLDER_INFO_ENT(RefID='"+oRefID+"',EntityNo='"+oEntityNo+"',FileType='BAL')/InfoToFile");
 		                                                                   
 			oNSHBalanceSheetAttachment.attachUploadComplete(function(){
 				oNSHBalanceSheetAttachment.removeAllHeaderParameters();
 				oNSHBalanceSheetAttachment.clear();
 				oUploadNSHBalanceSheetAttachmentRequestFinishedDeferred.resolve();

         
         });
 			oNSHBalanceSheetAttachment.upload();
 		}else{
 			oUploadNSHBalanceSheetAttachmentRequestFinishedDeferred.resolve();

 		}
		return oUploadNSHBalanceSheetAttachmentRequestFinishedDeferred;

 	},
 	/**
 	 * Upload NSH Other Attachment
 	 * @author Abdul Waheed
 	 */
 	uploadOtherAttachment : function(oNSHName, oRefID, oEntityNo, oNSHOtherAttachment){
 		var oUploadNSHOtherAttachmentRequestFinishedDeferred = jQuery.Deferred();
 		
 		if(oNSHOtherAttachment.getValue() !== ""){
 			sap.m.MessageToast.show(this.getText("UploadingNSHOTHRCopy"), {duration : 20000});
 			var csrf =  this.oShareHolderODataModel.getHeaders()['x-csrf-token'];
 			oNSHOtherAttachment.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
 				{name: "Content-Type", value: "application/atom+xml" }));
 			oNSHOtherAttachment.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
 				{name: "X-CSRF-Token", value: csrf }));        
 			oNSHOtherAttachment.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter
         		({name: "slug", value: oNSHName+""+oNSHOtherAttachment.getValue() }));
            
         
 			oNSHOtherAttachment.setUploadUrl("proxy/sap/opu/odata/sap/ZQEEMAH_SHRHLDR_SRV/ZSHAREHOLDER_INFO_ENT(RefID='"+oRefID+"',EntityNo='"+oEntityNo+"',FileType='OTHR')/InfoToFile");
 		                                                                   
 			oNSHOtherAttachment.attachUploadComplete(function(){
 				oNSHOtherAttachment.removeAllHeaderParameters();
 				oNSHOtherAttachment.clear();
 				oUploadNSHOtherAttachmentRequestFinishedDeferred.resolve();

         
         });
 			oNSHOtherAttachment.upload();
 		}else{
 			oUploadNSHOtherAttachmentRequestFinishedDeferred.resolve();

 		}
		return oUploadNSHOtherAttachmentRequestFinishedDeferred;

 	},
	/**
	 * Create and update BICI.
	 * @author Abdul Waheed
	 */
	createAndUpdateBICI : function(
			oRefID,
			oBICIFirstNameInputText,
			oBICILastNameInputText,
			oBICICityInputText,
			oBICIGenderComboBox,
			oBICIPOBoxInputText,
			oBICITelephoneCountryCodeInputText,
			oBICITelephoneInputText,
			oBICIPostalCodeInputText,
			oBICIMobileCountryCodeInputText,
			oBICIMobilePhoneInputText,
			oBICICommMethodComboBox,
			oBICIFaxCountryCodeInputText,
			oBICIFaxInputText,
			oBICIRoleInputText,
			oBICIEmailInputText,
			oBICICountryCombobox,
			oBICINationalityCombobox,
			oBICIStreet) {
		
		//this.openBusyDialog();

		var that = this;
		var oRequestFinishedDeferred = jQuery.Deferred();
		
        var oEntry = {};
        oEntry.RefID = oRefID;
        oEntry.NameFirst = oBICIFirstNameInputText;
        oEntry.NameLast = oBICILastNameInputText;
        oEntry.City = oBICICityInputText;
        oEntry.Gender = oBICIGenderComboBox;
        oEntry.PoBox = oBICIPOBoxInputText;
        oEntry.Ccode_Tele = oBICITelephoneCountryCodeInputText;
        oEntry.Telephone = oBICITelephoneInputText;
        oEntry.PostalCode = oBICIPostalCodeInputText;
        oEntry.Ccode_Mobile = oBICIMobileCountryCodeInputText;
        oEntry.Mobile = oBICIMobilePhoneInputText;
        oEntry.CommMtd = oBICICommMethodComboBox;
        oEntry.Ccode_Fax = oBICIFaxCountryCodeInputText;
        oEntry.Fax = oBICIFaxInputText;
        oEntry.Role = oBICIRoleInputText;
        oEntry.Email = oBICIEmailInputText;
        oEntry.Country = oBICICountryCombobox;
        oEntry.Nationality = oBICINationalityCombobox;
        oEntry.Street = oBICIStreet;
        this.oODataModel.setUseBatch(false);

		this.oODataModel.create("ZBASIC_CONT_INFO_ENT", oEntry, {
			
			
			success : function(oData) {
				
				oRequestFinishedDeferred.resolve(oData);
				// close busy dialog
				//that.closeBusyDialog();
				
				//that.uploadPOA(oEntry.RefID, oBICIPowerofAttorneyFileUploader, oBICIPassPortCopyFileUploader);
				
				
				
			},
			error : function(oResponse) {
				//console.log(oResponse);
				oRequestFinishedDeferred.resolve();
				// close busy dialog
				//that.closeBusyDialog();
			},
			async : true,
			urlParameters : oEntry
		});
		
		return oRequestFinishedDeferred;

	},
	/**
	 * Save BI CI
	 * @author Abdul Waheed
	 */
	saveBICI : function(
			oRefID,
			oBICIFirstNameInputText,
			oBICILastNameInputText,
			oBICICityInputText,
			oBICIGenderComboBox,
			oBICIPOBoxInputText,
			oBICITelephoneCountryCodeInputText,
			oBICITelephoneInputText,
			oBICIPostalCodeInputText,
			oBICIMobileCountryCodeInputText,
			oBICIMobilePhoneInputText,
			oBICICommMethodComboBox,
			oBICIFaxCountryCodeInputText,
			oBICIFaxInputText,
			oBICIRoleInputText,
			oBICIEmailInputText,
			oBICICountryCombobox,
			oBICINationalityCombobox,
			oBICIStreet,
			oBICIPowerofAttorneyFileUploader, oBICIPassPortCopyFileUploader) {
		
		var that = this;
		
		//this.openBusyDialog();

		
		var oRequestFinishedDeferred = jQuery.Deferred();
		
		 var oEntry = {};
	        oEntry.RefID = oRefID;
	        oEntry.NameFirst = oBICIFirstNameInputText;
	        oEntry.NameLast = oBICILastNameInputText;
	        oEntry.City = oBICICityInputText;
	        oEntry.Gender = oBICIGenderComboBox;
	        oEntry.PoBox = oBICIPOBoxInputText;
	        oEntry.Ccode_Tele = oBICITelephoneCountryCodeInputText;
	        oEntry.Telephone = oBICITelephoneInputText;
	        oEntry.PostalCode = oBICIPostalCodeInputText;
	        oEntry.Ccode_Mobile = oBICIMobileCountryCodeInputText;
	        oEntry.Mobile = oBICIMobilePhoneInputText;
	        oEntry.CommMtd = oBICICommMethodComboBox;
	        oEntry.Ccode_Fax = oBICIFaxCountryCodeInputText;
	        oEntry.Fax = oBICIFaxInputText;
	        oEntry.Role = oBICIRoleInputText;
	        oEntry.Email = oBICIEmailInputText;
	        oEntry.Country = oBICICountryCombobox;
	        oEntry.Nationality = oBICINationalityCombobox;
	        oEntry.Street = oBICIStreet;
	    this.oODataModel.setUseBatch(false);

		this.oODataModel.update("ZBASIC_CONT_INFO_ENT(RefID='"+oEntry.RefID+"',FileType='')",oEntry,{		
		
		success : function(oData, response) { 
			//console.log(" saveBICI >"+response);
			oRequestFinishedDeferred.resolve();
			// 
			//that.closeBusyDialog();
			
			//that.uploadPOA(oEntry.RefID, oBICIPowerofAttorneyFileUploader, oBICIPassPortCopyFileUploader);
			},
		    error : function(oResponse) {
		    	oRequestFinishedDeferred.resolve();
				//that.closeBusyDialog();
		    },
			async : true,
			urlParameters : oEntry
		
		});
		return oRequestFinishedDeferred;

	},
	
	/**
	 * Read BAQ
	 */
	readBAQ : function(oLanguage) {
		
		
		//this.openBusyDialog();
		
		var that = this;
		
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oBAQODataModel.setUseBatch(false);

		this.oBAQODataModel.read("SurveyQue?Lang='"+oLanguage+"'&Flag=%27B%27&SurveyID=%27QUEEMAH_BUS_PLAN%27", {
			success : function(oData, response) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve(response);
			},
			error : function(oResponse) {
				//that.closeBusyDialog();

				// Reject deferred object
				oRequestFinishedDeferred.resolve();

				// close busy dialog
			}, async : true
		});

		//return oRequestFinishedDeferred;
		return oRequestFinishedDeferred;
	},
	/**
	 * Read Financial Questions
	 */
	readFinancialQuestions : function(oLanguage) {
		
		var that = this;
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oBAQODataModel.setUseBatch(false);

		this.oBAQODataModel.read("SurveyQue?Lang='"+oLanguage+"'&Flag=%27F%27&SurveyID=%27QUEEMAH_BUS_PLAN%27", {
			success : function(oData, response) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve(response);
			},
			error : function(oResponse) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve();
			}, async : true
		});
		return oRequestFinishedDeferred;
	},
	/**
	 * Read Activity Questions
	 */
	readActivityQuestions : function(oLanguage) {
		//this.openBusyDialog();
		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oBAQODataModel.setUseBatch(false);

		this.oBAQODataModel.read("SurveyQue?Lang='"+oLanguage+"'&Flag='A'&SurveyID='QUEEMAH_GENERAL_QUESTIONS'", {
			success : function(oData, response) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve(response);
			},
			error : function(oResponse) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve();
			}, async : true
		});
		return oRequestFinishedDeferred;
	},
	/**
	 * Read Activity Q Answer Answer based on ID
	 */
	readAQAnswers : function(oNodeGuid, oSurveyID, oLanguage) {
		//this.openBusyDialog();
		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oBAQODataModel.setUseBatch(false);

		this.oBAQODataModel.read("SurveyAns?Lang='"+oLanguage+"'&Flag='A'&NodeGuid='"+oNodeGuid+"'&SurveyID='"+oSurveyID+"'", {
			success : function(oData, response) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve(response);
			},
			error : function(oResponse) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve();
			}, async : true
		});
		return oRequestFinishedDeferred;
	},
	/**
	 * Read Experience Questions
	 */
	readExperienceQuestions : function(oSurveyID, oLanguage) {
		
		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oBAQODataModel.setUseBatch(false);

		this.oBAQODataModel.read("SurveyQue?Lang='"+oLanguage+"'&Flag='E'&SurveyID='"+oSurveyID+"'", {
			success : function(oData, response) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve(response);
			},
			error : function(oResponse) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve();
			}, async : true
		});
		return oRequestFinishedDeferred;
	},
	/**
	 * Read Experience Q Answer Answer based on ID
	 */
	readEQAnswers : function(oNodeGuid, oSurveyID, oLanguage) {
		
		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oBAQODataModel.setUseBatch(false);

		this.oBAQODataModel.read("SurveyAns?Lang='"+oLanguage+"'&Flag='E'&NodeGuid='"+oNodeGuid+"'&SurveyID='"+oSurveyID+"'", {
			success : function(oData, response) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve(response);
			},
			error : function(oResponse) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve();
			}, async : true
		});
		return oRequestFinishedDeferred;
	},
	/**
	 * Read BAQ Answer based on ID
	 */
	readBAQAnswer : function(oNodeGuid, oSurveyID, oLanguage) {
		// Open busy dialog
		//this.openBusyDialog();
		
		
		
		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oBAQODataModel.setUseBatch(false);

		this.oBAQODataModel.read("SurveyAns?Lang='"+oLanguage+"'&Flag='B'&NodeGuid='"+oNodeGuid+"'&SurveyID='"+oSurveyID+"'", {
			success : function(oData, response) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve(response);
			},
			error : function(oResponse) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve();
			}, async : true
		});
		return oRequestFinishedDeferred;
	},
	/**
	 * Read Financial Answer based on ID
	 */
	readFinancialQuestionsAnswer : function(oNodeGuid, oSurveyID) {
		//this.openBusyDialog();
		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oBAQODataModel.setUseBatch(false);

		this.oBAQODataModel.read("SurveyAns?Lang='E'&Flag='F'&NodeGuid='"+oNodeGuid+"'&SurveyID='"+oSurveyID+"'", {
			success : function(oData, response) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve(response);
			},
			error : function(oResponse) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve();
			}, async : true
		});
		return oRequestFinishedDeferred;
	},
	
	/**
	 * Read Country Code
	 */
	readCountryCode : function(countryTelCode) {
		// Open busy dialog
		
		
		var that = this;
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oODataModel.setUseBatch(false);

		this.oODataModel.read("ZCRM_TELECODE_ENT(CounKey='"+countryTelCode+"')", {
			success : function(oData, response) {
				
				// close busy dialog
				//that.closeBusyDialog();
				
				that.oCountryCodeCollectionModel = new sap.ui.model.json.JSONModel();
				that.oCountryCodeCollectionModel.setData({CountryCodeCollection:oData});
				oRequestFinishedDeferred.resolve(that.oCountryCodeCollectionModel);

				
			},
			error : function(oResponse) {
				//that.closeBusyDialog();
				
				// Reject deferred object
				oRequestFinishedDeferred.resolve();

				// close busy dialog
			}, async : true
		});

		//return oRequestFinishedDeferred;
		return oRequestFinishedDeferred;
	},
	
	/**
	 * Read Country 
	 */
	readCountry : function(oLanguage) {
		// Open busy dialog
		//this.openBusyDialog();
		
		var that = this;
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();
		
		var filtersArray = new Array();  
		var filterRegion = new sap.ui.model.Filter("Bezei_reg", sap.ui.model.FilterOperator.NE, "");  
		filtersArray.push(filterRegion);  
        this.oODataModel.setUseBatch(false);

		//this.oODataModel.read("/ZFM_CRM_QMH_DROPDOWN?lvkey=%27EN%27", {   //ZFM_CRM_QMH_DROPDOWN?lvkey=%27EN%27&lv_flag=%27%27&lv_region=%27%27
		//this.oODataModel.read("/ZFM_CRM_QMH_DROPDOWN?lvkey=%27EN%27&lv_flag=%27%27&lv_region=%27%27", {
		this.oODataModel.read("/ZFM_CRM_QMH_DROPDOWN?lvkey='"+oLanguage+"'&lv_flag=%27%27&lv_region=%27%27", {
			success : function(oData, response) {
				// close busy dialog
				//that.closeBusyDialog();
				//oRequestFinishedDeferred.resolve(oData);
				
				
				/*console.dir(response);
				console.dir(oData);*/
				
				that.oCountryCollectionModel = new sap.ui.model.json.JSONModel();
				
				//console.dir("oData = "+oData);
				
				that.oCountryCollectionModel.setData({DetailsCollection:oData.results});
				
				
				oRequestFinishedDeferred.resolve(that.oCountryCollectionModel);

				
			},
			error : function(oResponse) {
				that.closeBusyDialog();
				
				// Reject deferred object
				oRequestFinishedDeferred.resolve();
				sap.m.MessageToast.show(that.getText("InvalidCredentials"));

				// close busy dialog
			}, async : true
		});

		//return oRequestFinishedDeferred;
		return oRequestFinishedDeferred;
	},
	/**
	 * Read Region 
	 */
	readRegion : function(oRegionCode) {
		
		
		var that = this;
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oODataModel.setUseBatch(false);

		this.oODataModel.read("/ZFM_CRM_QMH_DROPDOWN?lvkey='AR'&lv_flag='CT'&lv_region='"+oRegionCode+"'", {
			success : function(oData, response) {
				//that.closeBusyDialog();
				
				that.oCityCollectionModel = new sap.ui.model.json.JSONModel();
				
				that.oCityCollectionModel.setData({CityCollection:oData.results});				
				
				oRequestFinishedDeferred.resolve(that.oCityCollectionModel);

				
			},
			error : function(oResponse) {
				//that.closeBusyDialog();
				oRequestFinishedDeferred.resolve();
			}, async : true
		});

		return oRequestFinishedDeferred;
	},
	/**
	 * Read Industrial Products
	 */
	readIndustrialProducts : function(oLanguage) {
		//this.openBusyDialog();
		
		var that = this;
		var oRequestFinishedDeferred = jQuery.Deferred();
		
     	this.oODataModel.setUseBatch(false);
		this.oODataModel.read("ZFM_CRM_QMH_DROPDOWN?lvkey='"+oLanguage+"'&lv_flag=%27PR%27&lv_region=%27%20%27", {
			success : function(oData, response) {
				//that.closeBusyDialog();

		
				that.oIndustrialProductsCollectionModel = new sap.ui.model.json.JSONModel();
				that.oIndustrialProductsCollectionModel.setData({IndustrialProductsCollection:oData.results});
				
				oRequestFinishedDeferred.resolve(that.oIndustrialProductsCollectionModel);

			},
			error : function(oResponse) {
				//that.closeBusyDialog();
		
				oRequestFinishedDeferred.resolve();
				
			}, async : true
		});
		return oRequestFinishedDeferred;
	},
	/**
	 * Read Saved Industrial Products
	 */
	readSavedIndustrialProducts : function(oRefID) {
		//this.openBusyDialog();
		
		var that = this;
		var oRequestFinishedDeferred = jQuery.Deferred();
		
     	this.oODataModel.setUseBatch(false);
		this.oODataModel.read("Product?Investorid='"+oRefID+"'", {
			success : function(oData, response) {
				//that.closeBusyDialog();

		
				oRequestFinishedDeferred.resolve(response);

			},
			error : function(oResponse) {
				//that.closeBusyDialog();
		
				oRequestFinishedDeferred.resolve();
				
			}, async : true
		});
		return oRequestFinishedDeferred;
	},
	/**
	 * delete Saved Industrial Products
	 */
	deleteSavedIndustrialProducts : function(oRefID) {
		
		
		var that = this;
		var oRequestFinishedDeferred = jQuery.Deferred();
		
     	this.oODataModel.setUseBatch(false);
     	this.oODataModel.remove("ProdPsSet(Investorid='"+oRefID+"')", {
			success : function(oData, response) {
			

				oRequestFinishedDeferred.resolve(response);
			},
			error : function(oResponse) {
				
				oRequestFinishedDeferred.resolve();
			}, async : true});

		return oRequestFinishedDeferred;
	},
	/**
	 * Read Industrial Products UOM
	 */
	readIndustrialProductsUOM : function(oLanguage) {
		//this.openBusyDialog();
		
		var that = this;
		var oRequestFinishedDeferred = jQuery.Deferred();
		
     	this.oODataModel.setUseBatch(false);
		this.oODataModel.read("ZFM_CRM_QMH_DROPDOWN?lvkey='"+oLanguage+"'&lv_flag=%27UM%27&lv_region=%27%20%27", {
			success : function(oData, response) {
				//that.closeBusyDialog();

		
				that.oIndustrialProductsCollectionModelUOM = new sap.ui.model.json.JSONModel();
				that.oIndustrialProductsCollectionModelUOM.setData({IndustrialProductsCollectionUOM:oData.results});
				
				oRequestFinishedDeferred.resolve(that.oIndustrialProductsCollectionModelUOM);

			},
			error : function(oResponse) {
				//that.closeBusyDialog();
		
				oRequestFinishedDeferred.resolve();
				
			}, async : true
		});

		return oRequestFinishedDeferred;
	},
	/**
	 * Save Industrial Products
	 * @author Abdul Waheed
	 */
	saveIndustrialProducts : function(oSno, oRefID, oPrdCode, oDescr , oQty , oUom, oUomTxt) {
		
		

		var that = this;
		var oEntry = {};
		
		oEntry.SNo = oSno;
		oEntry.Investorid=oRefID;
		oEntry.PrdCode=oPrdCode;
		oEntry.Descr=oDescr;
		oEntry.Qty=oQty;
		oEntry.Uom=oUom;
		oEntry.UomTxt=oUomTxt;



		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oODataModel.setUseBatch(false);
       
		this.oODataModel.create("ProductSet", oEntry , {
		
			success : function(oData) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve(oData);
			},
			error : function(oResponse) {
				//that.closeBusyDialog();
				oRequestFinishedDeferred.resolve();
				
			},
			async : true,
			urlParameters : oEntry
		});
		return oRequestFinishedDeferred;

	},
	/**
	 * Delete Industrial Products
	 * @author Abdul Waheed
	 */
	deleteIndustrialProducts : function(oSno, oRefID, oPrdCode) {	
		
		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oODataModel.setUseBatch(false);

		this.oODataModel.remove("ProdDelSet(SNo='"+oSno+"',Investorid='"+oRefID+"',PrdCode='"+oPrdCode+"')", {
			success : function(oData, response) {
			

				oRequestFinishedDeferred.resolve(response);
			},
			error : function(oResponse) {
				
				oRequestFinishedDeferred.resolve();
			}, async : true});

		return oRequestFinishedDeferred;

	},
	/**
	 * Read LI LI Section 
	 */
	readLILISection : function() {
		// Open busy dialog
		//this.openBusyDialog();
		
		var that = this;
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();
		
		/*var filtersArray = new Array();  
		var filterRegion = new sap.ui.model.Filter("Bezei_reg", sap.ui.model.FilterOperator.NE, "");  
		filtersArray.push(filterRegion);*/  
		
		
		this.oODataModel.setUseBatch(false);
		this.oODataModel.read("/IsicDet?Flag='S'&Lang='E'&IsicSection=' '&IsicDivision=' '&IsicGroup=' '&IsicClass=' '", {
			success : function(oData, response) {
				
				
				that.oCountryCollectionModel = new sap.ui.model.json.JSONModel();
				
				
				
				that.oCountryCollectionModel.setData({LILISectionCollection:oData.results});
				
				
				oRequestFinishedDeferred.resolve(that.oCountryCollectionModel);

				// close busy dialog
				//that.closeBusyDialog();
			},
			error : function(oResponse) {
				console.log(oResponse);
				
				// Reject deferred object
				oRequestFinishedDeferred.resolve();
				
				// close busy dialog
				//that.closeBusyDialog();
			}, async : true
		});

		//return oRequestFinishedDeferred;
		return oRequestFinishedDeferred;
	},
	/**
	 * Read LI LI BusinessType 
	 * @author mabdulwaheed
	 */
	readLILIBusinessType : function() {
		//this.openBusyDialog();		
		var that = this;		
		var oRequestFinishedDeferred = jQuery.Deferred();
		this.oODataModel.setUseBatch(false);
		this.oODataModel.read("IsicDet?Flag='L'&Lang='E'&IsicSection=' '&IsicDivision=' '&IsicGroup=' '&IsicClass=' '", {
			success : function(oData, response) {
				that.oBusinessTypeCollectionModel = new sap.ui.model.json.JSONModel();
				that.oBusinessTypeCollectionModel.setData({LILIBusinessTypeCollection:oData.results});
				oRequestFinishedDeferred.resolve(that.oBusinessTypeCollectionModel);
				//that.closeBusyDialog();
			},
			error : function(oResponse) {
				oRequestFinishedDeferred.resolve();
				//that.closeBusyDialog();
			}, async : true
		});
		return oRequestFinishedDeferred;
	},
	readLILIBusinessTypeIsicDescription : function(oFlag){
		//this.openBusyDialog();		
		var that = this;		
		var oRequestFinishedDeferred = jQuery.Deferred();
		this.oODataModel.setUseBatch(false);
		this.oODataModel.read("IsicDet?Flag='"+oFlag+"'&Lang='E'&IsicSection=' '&IsicDivision=' '&IsicGroup=' '&IsicClass=' '&IsicDescription=' '&Activity=' '&SurveyID=' '", {
			success : function(oData, response) {				
				
			//	that.closeBusyDialog();
			//	setTimeout(function() {
					oRequestFinishedDeferred.resolve(response);
			//	},2000);
			},
			error : function(oResponse) {
				oRequestFinishedDeferred.resolve();
			//	that.closeBusyDialog();
			}, async : true
		});
		return oRequestFinishedDeferred;
		
	},
	/**
	 * Read LI LI Division 
	 */
	readLILIDivision : function(IsicSection) {
		//this.openBusyDialog();
		
		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
		this.oODataModel.setUseBatch(false);
		this.oODataModel.read("IsicDet?Flag='D'&Lang='E'&IsicSection='"+IsicSection+"'&IsicDivision=' '&IsicGroup=' '&IsicClass=' '", {
			success : function(oData, response) {			
				
				that.oCountryCollectionModel = new sap.ui.model.json.JSONModel();
				
				that.oCountryCollectionModel.setData({LILIDivisionCollection:oData.results});		
				
				
				
				//setTimeout(function() {
					oRequestFinishedDeferred.resolve(that.oCountryCollectionModel);
				//},2000);
				
				//that.closeBusyDialog();
			},
			error : function(oResponse) {
				
				oRequestFinishedDeferred.resolve();
				
				//that.closeBusyDialog();
			}, async : true
		});
		
		return oRequestFinishedDeferred;
	},
	/**
	 * Read LI LI Group 
	 */
	readLILIGroup : function(IsicSection, IsicDivision) {
		//this.openBusyDialog();
		
		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
		this.oODataModel.setUseBatch(false);
		this.oODataModel.read("IsicDet?Flag='G'&Lang='E'&IsicSection='"+IsicSection+"'&IsicDivision='"+IsicDivision+"'&IsicGroup=' '&IsicClass=' '", {
			success : function(oData, response) {			
				
				that.oCountryCollectionModel = new sap.ui.model.json.JSONModel();
				
				that.oCountryCollectionModel.setData({LILIGroupCollection:oData.results});		
				
				
				//setTimeout(function() {
					oRequestFinishedDeferred.resolve(that.oCountryCollectionModel);
				//},2000);
				
				//that.closeBusyDialog();
			},
			error : function(oResponse) {
				
				oRequestFinishedDeferred.resolve();
				
				//that.closeBusyDialog();
			}, async : true
		});
		
		return oRequestFinishedDeferred;
	},
	/**
	 * Read LI LI Class 
	 */
	readLILIClass : function(IsicSection, IsicDivision, IsicSelectedGroups) {
		if(IsicSelectedGroups.length>0){
		
		//this.openBusyDialog();
		
		var that = this;
		var oRequestFinishedDeferred = jQuery.Deferred();

		 var aBatchOperations = [];
         for ( var i = 0; i < IsicSelectedGroups.length; i++) {
           aBatchOperations.push(this.oODataModel.createBatchOperation(
            "IsicDet?Flag='C'&Lang='E'&IsicSection='"+IsicSection+"'&IsicDivision='"+IsicDivision+"'&IsicGroup='"+IsicSelectedGroups[i]+"'&IsicClass='C'", 'GET' ));
            }
         this.oODataModel.addBatchReadOperations( aBatchOperations);
         this.oODataModel.setUseBatch(true);

         this.oODataModel.submitBatch( function(oData, oResponse, aErrorResponse) {        	
             //that.closeBusyDialog();
        	 
        	 var oLocalLILIClassCollection = {LILIClassCollection: []};
        	 
        	// console.dir(oResponse.data.__batchResponses);
        	 for(var i=0; i<oResponse.data.__batchResponses.length; i++){
        		 for(var j=0; j<oResponse.data.__batchResponses[i].data.results.length; j++){
        			 oLocalLILIClassCollection.LILIClassCollection.push(oResponse.data.__batchResponses[i].data.results[j]);
        		 }        		
        	 }
        	 
        	 that.oLILIClassCollection = new sap.ui.model.json.JSONModel();
			 that.oLILIClassCollection.setData(oLocalLILIClassCollection);
				
			
			 //setTimeout(function() {
				 oRequestFinishedDeferred.resolve(that.oLILIClassCollection);
				//},2000);
     	 }, 
     	 function(oError) {
     		console.log("E"+oError);
     	 }, true);
         
         return oRequestFinishedDeferred;
 
		}
	},
	
	
	/**
	 * Read LI LI License Activity 
	 * @author mabdulwaheed
	 */
	readLILILicenseActivity : function(IsicSection, IsicDivision, IsicSelectedGroups, IsicSelectedClasses) {
		if(IsicSelectedClasses.length>0){
		
		//this.openBusyDialog();
		
		var that = this;
		var oRequestFinishedDeferred = jQuery.Deferred();

		 var aBatchOperations = [];
         
    	 for(var j=0; j< IsicSelectedGroups.length; j++){
    		 for(var i = 0; i < IsicSelectedClasses.length; i++) {
        		 aBatchOperations.push(this.oODataModel.createBatchOperation(
        		 //"IsicDet?Flag='K'&Lang='E'IsicSection='"+IsicSection+"'&IsicDivision='"+IsicDivision+"'&IsicGroup='011'&IsicClass='0111' ", 'GET' ));
        		 "IsicDet?Flag='K'&Lang='E'&IsicSection='"+IsicSection+"'&IsicDivision='"+IsicDivision+"'&IsicGroup='"+IsicSelectedGroups[j]+"'&IsicClass='"+IsicSelectedClasses[i]+"' "   , 'GET' ));
        		          
        	 }
          }
         this.oODataModel.addBatchReadOperations( aBatchOperations);
         this.oODataModel.setUseBatch(true);

         this.oODataModel.submitBatch( function(oData, oResponse, aErrorResponse) {        	
            // that.closeBusyDialog();
        	 
        	 var oLocalLILILicenseActivityCollection = {LILILicenseActivityCollection: []};
        	 
        	 //console.dir(oResponse.data.__batchResponses);
        	 for(var i=0; i<oResponse.data.__batchResponses.length; i++){
        		 for(var j=0; j<oResponse.data.__batchResponses[i].data.results.length; j++){
        			 oLocalLILILicenseActivityCollection.LILILicenseActivityCollection.push(oResponse.data.__batchResponses[i].data.results[j]);
        		 }        		
        	 }
        	 
        	 that.oLILILicenceActivityCollection = new sap.ui.model.json.JSONModel();
			 that.oLILILicenceActivityCollection.setData(oLocalLILILicenseActivityCollection);
				
			 //oRequestFinishedDeferred.resolve(that.oLILILicenceActivityCollection);
			 //setTimeout(function() {
				 oRequestFinishedDeferred.resolve(that.oLILILicenceActivityCollection);
				//},2000);
     	 }, 
     	 function(oError) {
     		console.log("E"+oError);
     	 }, true);
         
         return oRequestFinishedDeferred;
 
		}
	},
	/**
	 * Read LI LI License Type 
	 * @author mabdulwaheed
	 */
	readLILILicenseType : function(IsicSection, IsicDivision, IsicSelectedGroups, IsicSelectedClasses) {
		if(IsicSelectedClasses.length>0){
		
		//this.openBusyDialog();
		
		var that = this;
		var oRequestFinishedDeferred = jQuery.Deferred();

		 var aBatchOperations = [];
         for ( var i = 0; i < IsicSelectedClasses.length; i++) {
        	 for(var j=0; j< IsicSelectedGroups.length; j++){
        		 aBatchOperations.push(this.oODataModel.createBatchOperation(
        		 "IsicDet?Flag='C'&Lang='E'&IsicSection='"+IsicSection+"'&IsicDivision='"+IsicDivision+"'&IsicGroup='"+IsicSelectedGroups[j]+"'&IsicClass='"+IsicSelectedClasses[i]+"' "   , 'GET' ));
        		          
        	 } }
         this.oODataModel.addBatchReadOperations( aBatchOperations);
         this.oODataModel.setUseBatch(true);

         this.oODataModel.submitBatch( function(oData, oResponse, aErrorResponse) {        	
             //that.closeBusyDialog();
        	 //console.log(oResponse.data.__batchResponses);
        	 var oLocalLILILicenseTypeCollection = {LILILicenseActivityType: []};
        	 
        	 //console.dir(oResponse.data.__batchResponses);
        	 for(var i=0; i<oResponse.data.__batchResponses.length; i++){
        		 for(var j=0; j<oResponse.data.__batchResponses[i].data.results.length; j++){
        			 oLocalLILILicenseTypeCollection.LILILicenseActivityType.push(oResponse.data.__batchResponses[i].data.results[j]);
        		 }        		
        	 }
        	 
        	 that.oLILILicenceTypeCollection = new sap.ui.model.json.JSONModel();
			 that.oLILILicenceTypeCollection.setData(oLocalLILILicenseTypeCollection);
				
			 //oRequestFinishedDeferred.resolve(oLocalLILILicenseTypeCollection);
			 
			 //setTimeout(function() {
				 oRequestFinishedDeferred.resolve(oLocalLILILicenseTypeCollection);
				//},2000);
			 
			 
     	 }, 
     	 function(oError) {
     		console.log("E"+oError);
     	 }, true);
         
         return oRequestFinishedDeferred;
 
		}
	},


	/**
	 * SignInUser
	 */
	signInUser : function(userid, password) {
		// Open busy dialog
		

		var that = this;
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oODataModel.setUseBatch(false);

		this.oODataModel.read("/REGISTER_USER_ENT('"+ userid + "')", {
			success : function(oData) {
				// close busy dialog
				//that.closeBusyDialog();
				oRequestFinishedDeferred.resolve(oData);

				
			},
			error : function(oResponse) {
				//that.closeBusyDialog();
				// Reject deferred object
				oRequestFinishedDeferred.resolve();
				//sap.m.MessageToast.show(that.getText("InvalidCredentials"));

				// close busy dialog
				
			}, async : true
		});

		return oRequestFinishedDeferred;
	},
	/**
	 * Forgot Password
	 */
	forgotPassword : function(oUserID, oLanguage) {
		
		

		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oODataModel.setUseBatch(false);

		this.oODataModel.read("PASSWORD_FORGOT_ENT(Userid='"+ oUserID + "',Lang='"+oLanguage+"')", {
			success : function(oData) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve(oData);
			},
			error : function(oResponse) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve();
			}, async : true
		});

		return oRequestFinishedDeferred;
	},
	/**
	 * Reset Password
	 */
	resetPassword : function(oUserID, oCPassword, oNPassword, oLanguage) {
		
		

		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oODataModel.setUseBatch(false);

		this.oODataModel.read("PASSWORD_RESET_ENT(Investorid='"+oUserID+"',CurrPwd='"+oCPassword+"',NewPwd='"+oNPassword+"',Lang='"+oLanguage+"')", {
			success : function(oData) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve(oData);
			},
			error : function(oResponse) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve();
			}, async : true
		});

		return oRequestFinishedDeferred;
	},
	/**
	 * Check User Status
	 */
	checkUserStatus : function(oLeadID) {
		
		//this.openBusyDialog();

		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oODataModel.setUseBatch(false);

		this.oODataModel.read("ZFM_CRM_ID_STATUS?InvId='"+ oLeadID + "'", {
			success : function(oData) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve(oData);
			},
			error : function(oResponse) {
				//that.closeBusyDialog();

				oRequestFinishedDeferred.resolve();
			}, async : true
		});

		return oRequestFinishedDeferred;
	},
	/**
	 * read BIOI UI
	 * @author : Abdul Waheed
	 */
	readBIOI : function(refid) {
		// Open busy dialog
		//this.openBusyDialog();

		var that = this;
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();
        this.oODataModel.setUseBatch(false);

		this.oODataModel.read("ZBASIC_ORG_INFO_ENT('"+refid+"')", {
			success : function(oData, response) {
				
				oRequestFinishedDeferred.resolve(response);//that.BIOICollectionJSONModel);
				//that.closeBusyDialog();
			},
			error : function(oResponse) {
				//console.log(oResponse);
				
				// Reject deferred object
				oRequestFinishedDeferred.resolve();
				
				// close busy dialog
				//that.closeBusyDialog();
			}, async : true});

		return oRequestFinishedDeferred;
	},
	/**
	 * Open busy dialog
	 */
	openBusyDialog : function() {

		if (!this._busyDialog) {
			this._busyDialog = new sap.ui.xmlfragment("idBusydialog",
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

	/**
	 * Register new user.
	 * @author Abdul Waheed
	 */
	registerUser : function(oUserID, oPassword, oInputEmail, oContactNumber, oContactPersonName, oCompany) {
		// Open busy dialog
		//this.openBusyDialog();

		var that = this;
		
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();
		
        var oEntry = {};
        oEntry.Userid = oUserID;
        oEntry.Password = oPassword;
        oEntry.Email = oInputEmail;
        oEntry.ContNumber = oContactNumber;
		oEntry.ContPersname = oContactPersonName;
		oEntry.Company = oCompany;
		oEntry.Ref_id = '';
        this.oODataModel.setUseBatch(false);

		this.oODataModel.create("/REGISTER_USER_ENT", oEntry , {
		
			success : function(oData) {
				//that.closeBusyDialog();

				/*console.log(oData);*/
				oRequestFinishedDeferred.resolve(oData);
				// close busy dialog
			},
			error : function(oResponse) {
				//that.closeBusyDialog();
				oRequestFinishedDeferred.resolve();
				// close busy dialog
			},
			async : true,
			urlParameters : oEntry
		});
		return oRequestFinishedDeferred;

	},
	
	
	/**
	 * Save BI OI
	 * @author Abdul Waheed
	 */
	saveBIOI : function(oRefID, oBIOIOrganizationName, oBIOIRegion, oBIOILegalStatus, 
			oBIOICity, oBIOIMNC, oBIOIEmail, oBIOILaborSize, oBIOICommMethod, oBIOICapital,
			oBIOITelephoneCountryCode, oBIOITelephone, oBIOIMobilephoneCountryCode,
			oBIOIMobilephone, oBIOIFaxCountryCode, oBIOIFax, oBIOIWebSite, 
			oBIOITelephoneCountryCode,
			oBIOIFaxCountryCode,
			oBIOIMobilephoneCountryCode) {
		
		//console.log("csrf token"+this.oODataModel.getSecurityToken());

		
		// Open busy dialog
		//this.openBusyDialog();

		var that = this;
		
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();
		
        var oEntry = {};
        oEntry.RefID = oRefID;//this will be replaced by user id
        oEntry.OrgName = oBIOIOrganizationName;
        oEntry.Region = oBIOIRegion;
        oEntry.LegalStatus = oBIOILegalStatus;
        oEntry.City = oBIOICity;
		oEntry.MncComp = oBIOIMNC;
		oEntry.Email = oBIOIEmail;
		oEntry.LbrSize = oBIOILaborSize;
		oEntry.CommMtd = oBIOICommMethod;
		oEntry.Capital = oBIOICapital;
		oEntry.Telephone = oBIOITelephone;
		oEntry.Mobile = oBIOIMobilephone;
		oEntry.Fax = oBIOIFax;		
		oEntry.Website = oBIOIWebSite;
		oEntry.Ccode_Tele = oBIOITelephoneCountryCode;
		oEntry.Ccode_Fax = oBIOIFaxCountryCode
		oEntry.Ccode_Mobile = oBIOIMobilephoneCountryCode
		
        this.oODataModel.setUseBatch(false);

		this.oODataModel.update("ZBASIC_ORG_INFO_ENT('"+oEntry.RefID+"')",oEntry,{//urlParameters : oEntry,		
		
		success : function(oData, response) { //console.dir(response);
			oRequestFinishedDeferred.resolve();
			//console.log(response.x-csrf-token); 
			//that.closeBusyDialog();
			},
		    error : function(oResponse) {// console.log("error"+response);
		    	oRequestFinishedDeferred.resolve();
		    //that.closeBusyDialog();
		    },
			async : true,
			urlParameters : oEntry
		
		});
		
		return oRequestFinishedDeferred;

	},
	/**
	 * Create and update BIOI.
	 * @author Abdul Waheed
	 */
	createAndUpdateBIOI : function(oRefID, oBIOIOrganizationName, oBIOIRegion, oBIOILegalStatus, 
			oBIOICity, oBIOIMNC, oBIOIEmail, oBIOILaborSize, oBIOICommMethod, oBIOICapital,
			oBIOITelephoneCountryCode, oBIOITelephone, oBIOIMobilephoneCountryCode,
			oBIOIMobilephone, oBIOIFaxCountryCode, oBIOIFax, oBIOIWebSite, 
			oBIOITelephoneCountryCode,
			oBIOIFaxCountryCode,
			oBIOIMobilephoneCountryCode					
			) {
		
		
		// Open busy dialog
		//this.openBusyDialog();

		var that = this;
		
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();
		
        var oEntry = {};
        oEntry.RefID = oRefID;//this will be replaced by user id
        oEntry.OrgName = oBIOIOrganizationName;
        oEntry.Region = oBIOIRegion;
        oEntry.LegalStatus = oBIOILegalStatus;
        oEntry.City = oBIOICity;
		oEntry.MncComp = oBIOIMNC;
		oEntry.Email = oBIOIEmail;
		oEntry.LbrSize = oBIOILaborSize;
		oEntry.CommMtd = oBIOICommMethod;
		oEntry.Capital = oBIOICapital;
		oEntry.Telephone = oBIOITelephone;
		oEntry.Mobile = oBIOIMobilephone;
		oEntry.Fax = oBIOIFax;		
		oEntry.Website = oBIOIWebSite;
		oEntry.Ccode_Tele = oBIOITelephoneCountryCode;
		oEntry.Ccode_Fax = oBIOIFaxCountryCode
		oEntry.Ccode_Mobile = oBIOIMobilephoneCountryCode
        this.oODataModel.setUseBatch(false);

		this.oODataModel.create("ZBASIC_ORG_INFO_ENT", oEntry, {
			
			
			success : function(oData) {
				
				oRequestFinishedDeferred.resolve(oData);
				// close busy dialog
				//that.closeBusyDialog();
			},
			error : function(oResponse) {
				
				oRequestFinishedDeferred.resolve();
				// close busy dialog
				//that.closeBusyDialog();
			},
			async : true,
			urlParameters : oEntry
		});
		
		
		
		return oRequestFinishedDeferred;

	},
	
};