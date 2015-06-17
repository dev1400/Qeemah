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
		
		return this.oODataModel;
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
			oNSHTotalAssetsInBalanceSheet14InputText
			
				
	){
		this.openBusyDialog();

		this.oShareHolderODataModel = new sap.ui.model.odata.ODataModel("proxy/sap/opu/odata/sap/ZQEEMAH_SHRHLDR_SRV/", true,
				null, null, {
					"X-Requested-With" : "XMLHttpRequest",
					"Content-Type" : "application/json",
					"X-CSRF-Token":"Fetch" ,
					"DataServiceVersion": "2.0",
					"Authorization" : "Basic bmt1bWFyOnNhcDEyMw=="

				}, true, true);
		var that = this;
		var oEntry = {};
		oEntry.RefID = "'"+parseInt(oRef_id, 10)+"'";
		oEntry.EntityNo = '';
		oEntry.FileType = '';
		oEntry.ShldrType = oShareHolderType;
		oEntry.EntityFname = oNSHFirstNameInputText;
		oEntry.EntityLname = oNSHLastNameInputText;
		oEntry.Gender = oNSHGenderComboBox;
		oEntry.MaritalStatus = oNSHMaritalStatusComboBox;
		oEntry.Academic = oNSHAcademicTitleInputText;
		oEntry.Dob = oNSHDOBDate;
		oEntry.CcodeTele = '0';
		oEntry.Telephone = oNSHTelephoneInputText;
		oEntry.CcodeMobile = '0';
		oEntry.Mobile = oNSHMobilePhoneInputText;
		oEntry.CcodeFax = '0';
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
		
		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();
		
        
		this.oShareHolderODataModel.create("ZSHAREHOLDER_INFO_ENT", oEntry , {
		
			success : function(oData) {
				console.log(oData);
				
				
				
				//oRequestFinishedDeferred.resolve(oData);
				//that.oNSHCollectionModel = new sap.ui.model.json.JSONModel();
				//that.oNSHCollectionModel.setData({NSHCollection:oData});
				oRequestFinishedDeferred.resolve(oData);
				
				that.closeBusyDialog();
			},
			error : function(oResponse) {
				console.log(oResponse);
				oRequestFinishedDeferred.resolve();
				that.closeBusyDialog();
			},
			async : true,
			urlParameters : oEntry
		});
		return oRequestFinishedDeferred;
		
	},
	
	/**
	 * read BICI Pass Port Attachment Name
	 * @author : Abdul Waheed
	 */
	readBICIPassPortAttachment : function(refid) {
		//this.openBusyDialog();

		var that = this;
		
		var oRequestFinishedDeferred2 = jQuery.Deferred();

		this.oODataModel.read("ZBASIC_CONT_FILE_ENT(RefID='"+refid+"',FileType='PASS')", {
			success : function(oData, response) {
				//console.log(response);
				oRequestFinishedDeferred2.resolve(response);
				///that.closeBusyDialog();
			},
			error : function(oResponse) {
				//console.log(oResponse);				
				
				oRequestFinishedDeferred2.resolve();
				sap.m.MessageToast.show(oResponse);

				//that.closeBusyDialog();
			}});

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

		this.oODataModel.read("ZBASIC_CONT_FILE_ENT(RefID='"+refid+"',FileType='POA')", {
			success : function(oData, response) {
				
				oRequestFinishedDeferred1.resolve(response);
				//that.closeBusyDialog();
			},
			error : function(oResponse) {
				//console.log(oResponse);				
				
				oRequestFinishedDeferred1.resolve();
				sap.m.MessageToast.show(oResponse);

				//that.closeBusyDialog();
			}});

		return oRequestFinishedDeferred1;
	},
	/**
	 * read BICI
	 * @author : Abdul Waheed
	 */
	readBICI : function(refid) {
		
		this.openBusyDialog();

		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();

		this.oODataModel.read("ZBASIC_CONT_INFO_ENT(RefID='"+refid+"',FileType='')", {
			success : function(oData, response) {
				
				oRequestFinishedDeferred.resolve(response);//that.BIOICollectionJSONModel);
				that.closeBusyDialog();
			},
			error : function(oResponse) {
				//console.log(oResponse);				
				
				oRequestFinishedDeferred.resolve();
				sap.m.MessageToast.show(oResponse);

				that.closeBusyDialog();
			}});

		return oRequestFinishedDeferred;
	},
	/**
	 * Upload Passport Copy.
	 * @author Abdul Waheed
	 */
	uploadBICIPassPortCopy : function(oRefID, oBICIPassPortCopyFileUploader){
		var oUploadBICIPassPortCopyRequestFinishedDeferred = jQuery.Deferred();
		if(oBICIPassPortCopyFileUploader.getValue() !== ""){
		var csrf =  this.oODataModel.getHeaders()['x-csrf-token'];
		that = this;
		
		
		oBICIPassPortCopyFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
				{name: "Content-Type", value: "application/xml" }));
		oBICIPassPortCopyFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
				{name: "X-CSRF-Token", value: csrf }));        
		oBICIPassPortCopyFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter
        		({name: "slug", value: oBICIPassPortCopyFileUploader.getValue() }));
           
        
		oBICIPassPortCopyFileUploader.setUploadUrl(this.getServiceUrl()+"ZBASIC_CONT_INFO_ENT(RefID='"+oRefID+"',FileType='PASS')/InfoToPoa");
		oBICIPassPortCopyFileUploader.attachUploadComplete(function(){
			oBICIPassPortCopyFileUploader.removeAllHeaderParameters();
			oBICIPassPortCopyFileUploader.clear();
        	that.closeBusyDialog();
        	oUploadBICIPassPortCopyRequestFinishedDeferred.resolve();
        	 //sap.m.MessageToast.show(that.getText("Uploaded"));	
        });
        //sap.m.MessageToast.show(that.getText("Uploading"));	
        this.openBusyDialog();
        oBICIPassPortCopyFileUploader.upload();
		}
        return oUploadBICIPassPortCopyRequestFinishedDeferred;
	},
	/**
	 * Upload Proof Of Attorney.
	 * @author Abdul Waheed
	 */
	//uploadPOA : function(oRefID, oBICIPowerofAttorneyFileUploader, oBICIPassPortCopyFileUploader){
	uploadPOA : function(oRefID, oBICIPowerofAttorneyFileUploader){
		//console.log("In uploadPOA");
		that = this;
		var oUploadPOARequestFinishedDeferred = jQuery.Deferred();
		
		
		if(oBICIPowerofAttorneyFileUploader.getValue() !== ""){
			var csrf =  this.oODataModel.getHeaders()['x-csrf-token'];		
			
			oBICIPowerofAttorneyFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
					{name: "Content-Type", value: "application/xml" }));
			oBICIPowerofAttorneyFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter(
					{name: "X-CSRF-Token", value: csrf }));        
	        oBICIPowerofAttorneyFileUploader.insertHeaderParameter(new sap.ui.unified.FileUploaderParameter
	        		({name: "slug", value: oBICIPowerofAttorneyFileUploader.getValue() }));      
	        
	        oBICIPowerofAttorneyFileUploader.setUploadUrl(this.getServiceUrl()+"ZBASIC_CONT_INFO_ENT(RefID='"+oRefID+"',FileType='POA')/InfoToPoa");
	        oBICIPowerofAttorneyFileUploader.attachUploadComplete(function(){
	        	oBICIPowerofAttorneyFileUploader.removeAllHeaderParameters();
	        	oBICIPowerofAttorneyFileUploader.clear();
	        	
	        	that.closeBusyDialog();
	        	oUploadPOARequestFinishedDeferred.resolve();
	        	/*if(oBICIPassPortCopyFileUploader.getValue() !== ""){
	        	that.uploadBICIPassPortCopy(oRefID, oBICIPassPortCopyFileUploader);
	        	}*/
	        });
	        //sap.m.MessageToast.show(that.getText("Uploading"));	
	        this.openBusyDialog();
	        oBICIPowerofAttorneyFileUploader.upload();
		}
		/*if(oBICIPassPortCopyFileUploader.getValue() !== ""){
        	that.uploadBICIPassPortCopy(oRefID, oBICIPassPortCopyFileUploader);
    	}*/
        return oUploadPOARequestFinishedDeferred;

		
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
			oBICIStreet, oBICIPowerofAttorneyFileUploader, oBICIPassPortCopyFileUploader) {
		
		this.openBusyDialog();

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
        
		this.oODataModel.create("ZBASIC_CONT_INFO_ENT", oEntry, {
			
			
			success : function(oData) {
				
				oRequestFinishedDeferred.resolve(oData);
				// close busy dialog
				that.closeBusyDialog();
				
				//that.uploadPOA(oEntry.RefID, oBICIPowerofAttorneyFileUploader, oBICIPassPortCopyFileUploader);
				
				
				
			},
			error : function(oResponse) {
				console.log(oResponse);
				oRequestFinishedDeferred.resolve();
				// close busy dialog
				that.closeBusyDialog();
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
		
		this.openBusyDialog();

		
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
		
		this.oODataModel.update("ZBASIC_CONT_INFO_ENT(RefID='"+oEntry.RefID+"',FileType='')",oEntry,{		
		
		success : function(oData, response) { 
			//console.log(" saveBICI >"+response);
			oRequestFinishedDeferred.resolve(response);
			// 
			that.closeBusyDialog();
			
			//that.uploadPOA(oEntry.RefID, oBICIPowerofAttorneyFileUploader, oBICIPassPortCopyFileUploader);
			},
		    error : function(oResponse) {
		    	oRequestFinishedDeferred.resolve();
				that.closeBusyDialog();
		    }
		
		});
		return oRequestFinishedDeferred;

	},
	
	/**
	 * Read BAQ
	 */
	readBAQ : function() {
		
		this.olocalODataModel = new sap.ui.model.odata.ODataModel("proxy/sap/opu/odata/sap/ZQEEMAH_SURVEY_SRV/", true,
						null, null, {
							"X-Requested-With" : "XMLHttpRequest",
							"Content-Type" : "application/json",
							"X-CSRF-Token":"Fetch" ,
							"DataServiceVersion": "2.0",
							"Authorization" : "Basic bmt1bWFyOnNhcDEyMw=="

						}, true, true);

		// Open busy dialog
		this.openBusyDialog();
		
		var that = this;
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();
		//	http://rhocrmdev1.MYSAGIA.GOV:8000/sap/opu/odata/sap/ZQEEMAH_SURVEY_SRV/SurveyQue?Lang='E'&Flag='B'&SurveyID=' '

		this.olocalODataModel.read("SurveyQue?Lang=%27E%27&Flag=%27B%27&SurveyID=%27QUEEMAH_BUS_PLAN%27", {
			success : function(oData, response) {
				oRequestFinishedDeferred.resolve(response);
				that.closeBusyDialog();
			},
			error : function(oResponse) {
				
				// Reject deferred object
				oRequestFinishedDeferred.resolve();
				sap.m.MessageToast.show(that.getText("InvalidCredentials"));

				// close busy dialog
				that.closeBusyDialog();
			}
		});

		//return oRequestFinishedDeferred;
		return oRequestFinishedDeferred;
	},
	/**
	 * Read BAQ Answer based on ID
	 */
	readBAQAnswer : function(oNodeGuid, oSurveyID) {
		// Open busy dialog
		this.openBusyDialog();
		
		
		this.olocalODataModel = new sap.ui.model.odata.ODataModel("proxy/sap/opu/odata/sap/ZQEEMAH_SURVEY_SRV/", true,
						null, null, {
							"X-Requested-With" : "XMLHttpRequest",
							"Content-Type" : "application/json",
							"X-CSRF-Token":"Fetch" ,
							"DataServiceVersion": "2.0",
							"Authorization" : "Basic bmt1bWFyOnNhcDEyMw=="

						}, true, true);

		
		var that = this;
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();
		//ZQEEMAH_SURVEY_SRV/SurveyAns?Lang='E'&Flag='B'&NodeGuid='14FEB556CA711EE48BA122AFF3C53A69'&SurveyID='QUEEMAH_BUS_PLAN'
		this.olocalODataModel.read("SurveyAns?Lang='E'&Flag='B'&NodeGuid='"+oNodeGuid+"'&SurveyID='"+oSurveyID+"'", {
			success : function(oData, response) {
				oRequestFinishedDeferred.resolve(response);
				that.closeBusyDialog();
			},
			error : function(oResponse) {
				
				// Reject deferred object
				oRequestFinishedDeferred.resolve();
				sap.m.MessageToast.show(that.getText("InvalidCredentials"));

				// close busy dialog
				that.closeBusyDialog();
			}
		});

		//return oRequestFinishedDeferred;
		return oRequestFinishedDeferred;
	},
	
	/**
	 * Read Country Code
	 */
	readCountryCode : function(countryTelCode) {
		// Open busy dialog
		this.openBusyDialog();
		
		var that = this;
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();

		this.oODataModel.read("ZCRM_TELECODE_ENT(CounKey='"+countryTelCode+"')", {
			success : function(oData, response) {
				
				that.oCountryCodeCollectionModel = new sap.ui.model.json.JSONModel();
				that.oCountryCodeCollectionModel.setData({CountryCodeCollection:oData});
				oRequestFinishedDeferred.resolve(that.oCountryCodeCollectionModel);

				// close busy dialog
				that.closeBusyDialog();
			},
			error : function(oResponse) {
				console.log(oResponse);
				
				// Reject deferred object
				oRequestFinishedDeferred.resolve();
				sap.m.MessageToast.show(that.getText("InvalidCredentials"));

				// close busy dialog
				that.closeBusyDialog();
			}
		});

		//return oRequestFinishedDeferred;
		return oRequestFinishedDeferred;
	},
	
	/**
	 * Read Country 
	 */
	readCountry : function() {
		// Open busy dialog
		this.openBusyDialog();
		
		var that = this;
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();
		
		var filtersArray = new Array();  
		var filterRegion = new sap.ui.model.Filter("Bezei_reg", sap.ui.model.FilterOperator.NE, "");  
		filtersArray.push(filterRegion);  

		//this.oODataModel.read("/ZFM_CRM_QMH_DROPDOWN?lvkey=%27EN%27", {   //ZFM_CRM_QMH_DROPDOWN?lvkey=%27EN%27&lv_flag=%27%27&lv_region=%27%27
		//this.oODataModel.read("/ZFM_CRM_QMH_DROPDOWN?lvkey=%27EN%27&lv_flag=%27%27&lv_region=%27%27", {
		this.oODataModel.read("/ZFM_CRM_QMH_DROPDOWN?lvkey=%27AR%27&lv_flag=%27%27&lv_region=%27%27", {
			success : function(oData, response) {
				//oRequestFinishedDeferred.resolve(oData);
				
				
				/*console.dir(response);
				console.dir(oData);*/
				
				that.oCountryCollectionModel = new sap.ui.model.json.JSONModel();
				
				//console.dir("oData = "+oData);
				
				that.oCountryCollectionModel.setData({DetailsCollection:oData.results});
				
				
				oRequestFinishedDeferred.resolve(that.oCountryCollectionModel);

				// close busy dialog
				that.closeBusyDialog();
			},
			error : function(oResponse) {
				console.log(oResponse);
				
				// Reject deferred object
				oRequestFinishedDeferred.resolve();
				sap.m.MessageToast.show(that.getText("InvalidCredentials"));

				// close busy dialog
				that.closeBusyDialog();
			}
		});

		//return oRequestFinishedDeferred;
		return oRequestFinishedDeferred;
	},
	/**
	 * Read LI LI Section 
	 */
	readLILISection : function() {
		// Open busy dialog
		this.openBusyDialog();
		
		var that = this;
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();
		
		/*var filtersArray = new Array();  
		var filterRegion = new sap.ui.model.Filter("Bezei_reg", sap.ui.model.FilterOperator.NE, "");  
		filtersArray.push(filterRegion);*/  

		this.oODataModel.read("/IsicDet?Flag='S'&Lang='E'&IsicSection=' '&IsicDivision=' '&IsicGroup=' '&IsicClass=' '", {
			success : function(oData, response) {
				
				
				that.oCountryCollectionModel = new sap.ui.model.json.JSONModel();
				
				
				
				that.oCountryCollectionModel.setData({LILISectionCollection:oData.results});
				
				
				oRequestFinishedDeferred.resolve(that.oCountryCollectionModel);

				// close busy dialog
				that.closeBusyDialog();
			},
			error : function(oResponse) {
				console.log(oResponse);
				
				// Reject deferred object
				oRequestFinishedDeferred.resolve();
				
				// close busy dialog
				that.closeBusyDialog();
			}
		});

		//return oRequestFinishedDeferred;
		return oRequestFinishedDeferred;
	},
	/**
	 * Read LI LI Division 
	 */
	readLILIDivision : function(IsicSection) {
		this.openBusyDialog();
		
		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();

		this.oODataModel.read("IsicDet?Flag='D'&Lang='E'&IsicSection='"+IsicSection+"'&IsicDivision=' '&IsicGroup=' '&IsicClass=' '", {
			success : function(oData, response) {			
				
				that.oCountryCollectionModel = new sap.ui.model.json.JSONModel();
				
				that.oCountryCollectionModel.setData({LILIDivisionCollection:oData.results});		
				
				oRequestFinishedDeferred.resolve(that.oCountryCollectionModel);
				
				that.closeBusyDialog();
			},
			error : function(oResponse) {
				
				oRequestFinishedDeferred.resolve();
				
				that.closeBusyDialog();
			}
		});
		
		return oRequestFinishedDeferred;
	},
	/**
	 * Read LI LI Group 
	 */
	readLILIGroup : function(IsicSection, IsicDivision) {
		this.openBusyDialog();
		
		var that = this;
		
		var oRequestFinishedDeferred = jQuery.Deferred();

		this.oODataModel.read("IsicDet?Flag='G'&Lang='E'&IsicSection='"+IsicSection+"'&IsicDivision='"+IsicDivision+"'&IsicGroup=' '&IsicClass=' '", {
			success : function(oData, response) {			
				
				that.oCountryCollectionModel = new sap.ui.model.json.JSONModel();
				
				that.oCountryCollectionModel.setData({LILIGroupCollection:oData.results});		
				
				oRequestFinishedDeferred.resolve(that.oCountryCollectionModel);
				
				that.closeBusyDialog();
			},
			error : function(oResponse) {
				
				oRequestFinishedDeferred.resolve();
				
				that.closeBusyDialog();
			}
		});
		
		return oRequestFinishedDeferred;
	},
	/**
	 * Read LI LI Section 
	 */
	readLILIClass : function(IsicSelectedGroups) {
		this.openBusyDialog();
		
		var that = this;
		var oRequestFinishedDeferred = jQuery.Deferred();

		 var aBatchOperations = [];
         for ( var i = 0; i < IsicSelectedGroups.length; i++) {
           aBatchOperations.push(this.oODataModel.createBatchOperation(
            "IsicDet?Flag='C'&Lang='E'&IsicSection='A'&IsicDivision='01'&IsicGroup='"+IsicSelectedGroups[i]+"'&IsicClass='C'", 'GET' ));
            }
         this.oODataModel.addBatchReadOperations( aBatchOperations);
         
         
/*         this.oODataModel.submitBatch( {fnSuccess : function(oResponse){
        	 console.log("Sucess "+oResponse);
        	 }, fnError : function() {
        		 console.log("Error "+oResponse);
        	     }, bAsync : false});*/
         
         fnSuccess = function(oResponse){
        	 that.closeBusyDialog();
      		//console.log("S"+ aErrorResponse);
        	 var oLocalLILIClassCollection = {LILIClassCollection: []};
        	 
        	 console.dir(oResponse.data.__batchResponses);
        	 for(var i=0; i<oResponse.data.__batchResponses.length; i++){
        		 //console.log(oResponse.data.__batchResponses[i].data.results)
        		 oLocalLILIClassCollection.LILIClassCollection.push(oResponse.data.__batchResponses[i].data.results);
        	 }
        	 
        	 that.oLILIClassCollection = new sap.ui.model.json.JSONModel();
				
				//that.oLILIClassCollection.setData({LILIClassCollection:oResponse.data.__batchResponses});		
        	 that.oLILIClassCollection.setData(oLocalLILIClassCollection);
				
				oRequestFinishedDeferred.resolve(that.oLILIClassCollection);
				
      	};
      	fnError = function(oError){
      		console.log("E"+oError);
      	};
         
         this.oODataModel.submitBatch( function(oData, oResponse, aErrorResponse) {
        	 //console.dir( oData);
        	 //console.dir( oResponse);
        	 //console.dir( aErrorResponse);
        	 
        	 

        	 fnSuccess(oResponse);
        	 }, function(oError) {
        	 fnError(oError);
        	     }, false);
         
         return oRequestFinishedDeferred;
         
         /*this.oODataModel.submitBatch( function(oData, oResponse, aErrorResponse) {
        	 fnSuccess(aErrorResponse);
         }, function(oError) {
        	 fnError(oError);
         }, false);*/
		
		/*var oRequestFinishedDeferred = jQuery.Deferred();

		this.oODataModel.read("IsicDet?Flag='G'&Lang='E'&IsicSection='"+IsicSection+"'&IsicDivision='"+IsicDivision+"'&IsicGroup=' '&IsicClass=' '", {
			success : function(oData, response) {			
				
				that.oCountryCollectionModel = new sap.ui.model.json.JSONModel();
				
				that.oCountryCollectionModel.setData({LILIGroupCollection:oData.results});		
				
				oRequestFinishedDeferred.resolve(that.oCountryCollectionModel);
				
				that.closeBusyDialog();
			},
			error : function(oResponse) {
				
				oRequestFinishedDeferred.resolve();
				
				that.closeBusyDialog();
			}
		});
		
		return oRequestFinishedDeferred;*/
	},
	


	/**
	 * SignInUser
	 */
	signInUser : function(userid, password) {
		// Open busy dialog
		this.openBusyDialog();

		var that = this;
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();

		this.oODataModel.read("/REGISTER_USER_ENT('"+ userid + "')", {
			success : function(oData) {
				oRequestFinishedDeferred.resolve(oData);

				// close busy dialog
				that.closeBusyDialog();
			},
			error : function(oResponse) {
				// Reject deferred object
				oRequestFinishedDeferred.resolve();
				sap.m.MessageToast.show(that.getText("InvalidCredentials"));

				// close busy dialog
				that.closeBusyDialog();
			}
		});

		return oRequestFinishedDeferred;
	},
	/**
	 * read BIOI UI
	 * @author : Abdul Waheed
	 */
	readBIOI : function(refid) {
		// Open busy dialog
		this.openBusyDialog();

		var that = this;
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();

		this.oODataModel.read("ZBASIC_ORG_INFO_ENT('"+refid+"')", {
			success : function(oData, response) {
				
				oRequestFinishedDeferred.resolve(response);//that.BIOICollectionJSONModel);
				that.closeBusyDialog();
			},
			error : function(oResponse) {
				//console.log(oResponse);
				
				// Reject deferred object
				oRequestFinishedDeferred.resolve();
				sap.m.MessageToast.show(that.getText("InvalidCredentials"));

				// close busy dialog
				that.closeBusyDialog();
			}});

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
		this.openBusyDialog();

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
		this.oODataModel.create("/REGISTER_USER_ENT", oEntry , {
		
			success : function(oData) {
				/*console.log(oData);*/
				oRequestFinishedDeferred.resolve(oData);
				// close busy dialog
				that.closeBusyDialog();
			},
			error : function(oResponse) {
				/*console.log(oResponse);*/
				oRequestFinishedDeferred.resolve();
				// close busy dialog
				that.closeBusyDialog();
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
		this.openBusyDialog();

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
		
				
		this.oODataModel.update("ZBASIC_ORG_INFO_ENT('"+oEntry.RefID+"')",oEntry,{//urlParameters : oEntry,		
		
		success : function(oData, response) { //console.dir(response);
			oRequestFinishedDeferred.resolve(oData);
			//console.log(response.x-csrf-token); 
			that.closeBusyDialog();
			},
		    error : function(oResponse) {// console.log("error"+response);
		    	oRequestFinishedDeferred.resolve();
		    that.closeBusyDialog();
		    }
		
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
		this.openBusyDialog();

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
		
		this.oODataModel.create("ZBASIC_ORG_INFO_ENT", oEntry, {
			
			
			success : function(oData) {
				
				oRequestFinishedDeferred.resolve(oData);
				// close busy dialog
				that.closeBusyDialog();
			},
			error : function(oResponse) {
				
				oRequestFinishedDeferred.resolve();
				// close busy dialog
				that.closeBusyDialog();
			},
			async : true,
			urlParameters : oEntry
		});
		
		
		
		return oRequestFinishedDeferred;

	},
	
};