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
				console.log(oResponse);				
				
				oRequestFinishedDeferred.resolve();
				sap.m.MessageToast.show(oResponse);

				that.closeBusyDialog();
			}});

		return oRequestFinishedDeferred;
	},
	/**
	 * Read BAQ
	 */
	readBAQ : function() {
		
		this.olocalODataModel = new sap.ui.model.odata.ODataModel("proxy/sap/opu/odata/sap/ZTEST_QEEMAH_Q_A_SRV/", true,
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
		
		this.olocalODataModel.read("SurveyQue?Flag=%27B%27&SurveyID=%27QUEEMAH_BUS_PLAN%27", {
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
		
		
		this.olocalODataModel = new sap.ui.model.odata.ODataModel("proxy/sap/opu/odata/sap/ZTEST_QEEMAH_Q_A_SRV/", true,
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
		
		this.olocalODataModel.read("SurveyAns?NodeGuid='"+oNodeGuid+"'&SurveyID='"+oSurveyID+"'", {
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
				
				/*$.each(that.oCountryCollectionModel.getJSON(), function(key,value){
					   // console.log(value);
					    if(value==""||value==null){
					        delete sjonObj[key];
					    }

					});*/
				//console.log("that.oCountryCollectionModel.getJSON() = "+that.oCountryCollectionModel.getJSON());
				//console.log("that.oCountryCollectionModel = "+that.oCountryCollectionModel);
				//sap.ui.getCore().setModel(that.oCountryCollectionModel,"AmendmentDetailModel");
				
				/*console.log(that.oCountryCollectionModel.getJSON());*/
				
				//console.log(that.oCountryCollectionModel.oData.DetailsCollection[0].Landx);
				/*for(var i = 0; i < that.oCountryCollectionModel.oData.DetailsCollection.length ; i++){
					if(that.oCountryCollectionModel.oData.DetailsCollection[i].Bezei_reg !== "")
					{console.log(that.oCountryCollectionModel.oData.DetailsCollection[i].Bezei_reg);}
				}*/
				/*for(var i = 0; i < that.oCountryCollectionModel.oData.DetailsCollection.length ; i++){
					console.log(that.oCountryCollectionModel.oData.DetailsCollection[i].Landx);
				}//
*/				//oRequestFinishedDeferred.resolve(that.oCountryCollectionModel.getJSON());
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
				
				//console.log(response.data.Return);
				
				/*that.BIOICollectionJSONModel = new sap.ui.model.json.JSONModel();
				that.BIOICollectionJSONModel.setData({BIOICollection:oData});*/
				
				
				/*if(response.data.Return !== "Record does not exist"){
					
				}*/
				
				
				oRequestFinishedDeferred.resolve(response);//that.BIOICollectionJSONModel);
				that.closeBusyDialog();
			},
			error : function(oResponse) {
				console.log(oResponse);
				
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
	/*registerUser : function(oInputMobileNumber, oInputEmail, oPassword, oInputFirstName, oInputLastName) {
		// Open busy dialog
		this.openBusyDialog();

		var that = this;
		
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();
		
        var oEntry = {};
        oEntry.Flag = 'R';
        oEntry.NameFirst = oInputFirstName;
        oEntry.NameLast = oInputLastName;
        oEntry.Userid = '';
		oEntry.Password = oPassword;
		oEntry.MobileNo = oInputMobileNumber;
		oEntry.Email = oInputEmail;
		
		this.oODataModel.create("/USER_REGISTRATION_ENT", oEntry , {
		
			success : function(oData) {
				console.log(oData);
				oRequestFinishedDeferred.resolve(oData);
				// close busy dialog
				that.closeBusyDialog();
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

	},*/
	
	/**
	 * Register new user.
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
		
		//(RefID='',OrgName='',LegalStatus='',MncComp='',LbrSize='',Capital='',Telephone='',Mobile='',Fax='',Website='',Region='',City='',Email='',CommMtd='')
		
		//this.oODataModel.create("/ZBASIC_ORG_INFO_ENT", oEntry , {
		
		/*this.oODataModel.refreshSecurityToken(function() {
			  console.log('Succesfully retrieved CSRF Token');
			 
			  // oModel.create()
			 
			}, function() {
			 
			  console.log('Error retrieving CSRF Token');
			 
			}, false);*/
		

		/*this.oODataModel.update("ZBASIC_ORG_INFO_ENT(RefID='9',OrgName='"+oBIOIOrganizationName+"',LegalStatus='"+oBIOILegalStatus+"',MncComp='"+oBIOIMNC+"',LbrSize='"+oBIOILaborSize+"',Capital='"+oBIOICapital+"',Telephone='"+oBIOITelephoneCountryCode+""+oBIOITelephone+"',Mobile='"+oBIOIMobilephoneCountryCode+""+oBIOIMobilephone
				+"',Fax='"+oBIOIFaxCountryCode+""+oBIOIFax+"',Website='"+oBIOIWebSite+"',Region='"+oBIOIRegion+"',City='"+oBIOICity+"',Email='"+oBIOIEmail+"',CommMtd='"+oBIOICommMethod+"')",null,{//urlParameters : oEntry,		
		*/	
		
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
		/*this.oODataModel.update("ZBASIC_ORG_INFO_ENT", oEntry, {
			
		
			success : function(oData) {
				console.log(oData);
				oRequestFinishedDeferred.resolve(oData);
				// close busy dialog
				that.closeBusyDialog();
			},
			error : function(oResponse) {
				console.log(oResponse);
				oRequestFinishedDeferred.resolve();
				// close busy dialog
				that.closeBusyDialog();
			},
			async : true,
			//urlParameters : oEntry
		});*/
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
		
		/*this.oODataModel.update("ZBASIC_ORG_INFO_ENT('11')",oEntry,{//urlParameters : oEntry,		
		
		success : function(oData, response) { //console.dir(response);
			
			//console.log(response.x-csrf-token); 
			that.closeBusyDialog();
			},
		    error : function(oResponse) {// console.log("error"+response); 
		    that.closeBusyDialog();
		    }
		
		});*/
		
		return oRequestFinishedDeferred;

	},
	
};