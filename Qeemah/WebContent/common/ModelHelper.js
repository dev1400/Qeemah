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
		
		/*this.oODataModel.setHeaders(
				 
                {
                   "X-Requested-With": "XMLHttpRequest",
                   "Content-Type": "application/atom+xml",
                   "DataServiceVersion": "2.0",      
                   "X-CSRF-Token":"Fetch", 
                   "Authorization" : "Basic bmt1bWFyOnNhcDEyMw=="                	   

                });*/
		
		
		return this.oODataModel;
	},
	/**
	 * Read BAQ
	 */
	readBAQ : function() {
		// Open busy dialog
		this.openBusyDialog();
		
		var that = this;
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();
		//"X-CSRF-Token":"Fetch"   
			
		this.oODataModel.setHeaders({
		         "X-CSRF-Token": "Fetch"  // auth 
		    });
		this.oODataModel.read("ZFM_CRM_QMH_GET_Q_AND_A?ImLanguage=%27EN%27", {
			success : function(oData, response) {
				
				console.log(response);
				
				that.BAQCollectionJSONModel = new sap.ui.model.json.JSONModel();
				that.BAQCollectionJSONModel.setData({BAQCollection:oData});
				oRequestFinishedDeferred.resolve(that.BAQCollectionJSONModel);
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
				//console.dir(oData.TelNo)
				//oRequestFinishedDeferred.resolve(oData.TelNo);

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
	saveBIOI : function(oBIOIOrganizationName, oBIOIRegion, oBIOILegalStatus, 
			oBIOICity, oBIOIMNC, oBIOIEmail, oBIOILaborSize, oBIOICommMethod, oBIOICapital,
			oBIOITelephoneCountryCode, oBIOITelephone, oBIOIMobilephoneCountryCode,
			oBIOIMobilephone, oBIOIFaxCountryCode, oBIOIFax, oBIOIWebSite) {
		
		console.log("csrf token"+this.oODataModel.getSecurityToken());

		
		// Open busy dialog
		this.openBusyDialog();

		var that = this;
		
		// Create deferred object so that calling program can wait till
		// asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();
		
        var oEntry = {};
        oEntry.RefID = '11';//this will be replaced by user id
        oEntry.OrgName = oBIOIOrganizationName;
        oEntry.Region = oBIOIRegion;
        oEntry.LegalStatus = oBIOILegalStatus;
        oEntry.City = oBIOICity;
		oEntry.MncComp = oBIOIMNC;
		oEntry.Email = oBIOIEmail;
		oEntry.LbrSize = oBIOILaborSize;
		oEntry.CommMtd = oBIOICommMethod;
		oEntry.Capital = oBIOICapital;
		oEntry.Telephone = oBIOITelephoneCountryCode+""+oBIOITelephone;
		oEntry.Mobile = oBIOIMobilephoneCountryCode+""+oBIOIMobilephone;
		oEntry.Fax = oBIOIFaxCountryCode+""+oBIOIFax;		
		oEntry.Website = oBIOIWebSite;
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
		
		this.oODataModel.update("ZBASIC_ORG_INFO_ENT('11')",oEntry,{//urlParameters : oEntry,		
		
		success : function(oData, response) { //console.dir(response);
			
			//console.log(response.x-csrf-token); 
			that.closeBusyDialog();
			},
		    error : function(oResponse) {// console.log("error"+response); 
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
			oBIOIMobilephone, oBIOIFaxCountryCode, oBIOIFax, oBIOIWebSite) {
		
		
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
		oEntry.Telephone = oBIOITelephoneCountryCode+""+oBIOITelephone;
		oEntry.Mobile = oBIOIMobilephoneCountryCode+""+oBIOIMobilephone;
		oEntry.Fax = oBIOIFaxCountryCode+""+oBIOIFax;		
		oEntry.Website = oBIOIWebSite;
		
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

	}
};