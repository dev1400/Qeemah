jQuery.sap.declare("com.sagia.common.ModelHelper");
jQuery.sap.require("sap.ui.model.odata.datajs");

com.sagia.common.ModelHelper = {
	oBundle : null,
	oODataModel : null,
	/**
	 * Build i18n Model instance and return
	 */
	getI18nModel : function(sPath) {

		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : sPath
		});

		this.oBundle = i18nModel.getResourceBundle();

		return i18nModel;
	},
	// Return text from i18n model
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
		// var sServiceUrl =
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
				"nkumar", "sap123", {
					"X-Requested-With" : "XMLHttpRequest",/*
															 * "Content-Type" :
															 * "application/xml",
															 * "DataServiceVersion" :
															 * "2.0",
															 */
				/*
				 * "Accept" :
				 * "application/atom+xml,application/xml,application/atomsvc+xml",
				 * "xmlns" : "http://www.w3.org/2005/Atom"
				 */

				}, true, true);/*
								 * this.oODataModel.refreshSecurityToken();
								 */
		// this.oODataModel.setSizeLimit(300);
		this.oODataModel.refreshSecurityToken();

		return this.oODataModel;
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

		this.oODataModel.read("/USER_REGISTRATION_ENT(Flag='L',Userid='"
				+ userid + "',Password='" + password
				+ "',MobileNo='',Email='')", {
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

	// //////////////////////////////////////////////////////////////////////////////////////////////
	registerUser : function(oInputFirstName, oInputLastName,
			oInputMobileNumber, oInputEmail, oPassword, oReEntryPassword) {

		var oEntry = {};

		// oInputFirstName,oInputLastName,oInputMobileNumber, oInputEmail,
		// oPassword, oReEntryPassword

		oEntry.MobileNo = oInputMobileNumber;
		oEntry.Email = oInputEmail;
		oEntry.Password = oPassword;
		oEntry.Userid = oInputFirstName;
		oEntry.Flag = "R";

		this.oODataModel.setHeaders(

		{
			"X-Requested-With" : "XMLHttpRequest",
			"Content-Type" : "application/atom+xml",
			"DataServiceVersion" : "2.0",
			"X-CSRF-Token" : "Fetch",
			"xmlns" : "http://www.w3.org/2005/Atom"

		}

		);

		this.oODataModel.create("/USER_REGISTRATION_ENT", oEntry, null, {
			success : function(oData) {
				console.log(oData);
			},
			error : function(oResponse) {
				console.log(oResponse);
			},
			async : true
		});

		
		/*OData.request
        ({
             requestUri: "http://rhocrmdev1.mysagia.gov:8000/sap/opu/odata/sap/ZQEEMAH_SRV//USER_REGISTRATION_ENT",
                   method: "GET",
                   headers:
                       {     
                                      "X-Requested-With": "XMLHttpRequest",
                                      "Content-Type": "application/atom+xml",
                                      "DataServiceVersion": "2.0",       
                                      "X-CSRF-Token":"Fetch"   
                       }           
                },
                 function (data, response)
                 {
                      var header_xcsrf_token = response.headers['x-csrf-token'];
                      console.log(header_xcsrf_token);
                 }
          );*/
		
		

	}
};