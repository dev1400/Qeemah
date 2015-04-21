jQuery.sap.declare("com.sagia.common.ModelHelper");

com.sagia.common.ModelHelper = {
	oBundle : null,
	oODataModel : null,
	oRequestFinishedDeferred:null,
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
		// var sServiceUrl = "proxy/http://rhocrmdev1.mysagia.gov:8000/sap/opu/odata/sap/ZSAMPLE1_SRV/";
		var sServiceUrl = "/sap/opu/odata/sap/ZSAMPLE1_SRV/";

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
				"nkumar", "sap123",{
			"X-Requested-With" : "XMLHttpRequest",/*
					"Content-Type" : "application/xml",
					"DataServiceVersion" : "2.0",*/
					/*"Accept" : "application/atom+xml,application/xml,application/atomsvc+xml",
					"xmlns" : "http://www.w3.org/2005/Atom"*/

				},true,true);/*
		this.oODataModel.refreshSecurityToken();
*/
		// this.oODataModel.setSizeLimit(300);

		return this.oODataModel;
	},

	oDealsInAmendmentCollectionModel : new sap.ui.model.json.JSONModel(),

	/**
	 * Read Deal Collection and convert it to JSON Model
	 */

	readDealsInAmendmentCollection : function() {

		var that = this;

		this.oODataModel
				.read(
						"/USER_REGISTRATION_ENT(Flag='L',Userid='4000000087',Password='123456',MobileNo='',Email='')",
						null, null, false,

						function(oData, oResponse) {
							that.oDealsInAmendmentCollectionModel.setData({
								DealsInAmendmentCollection : oData.results
							});
						},

						function(oResponse) {
							oResponse = jQuery
									.parseJSON(oResponse.response.body);

							sap.m.MessageBox.alert(
									oResponse.error.message.value, {
										title : "Result"
									});
						});

		return this.oDealsInAmendmentCollectionModel;
	},
	
	/**
	 * SignInUser
	 */
	signInUser : function(userid, password) {
		var that = this;		
		that.signinSuccess = false;

		// Create deferred object so that calling program can wait till asynchronous call is finished
		var oRequestFinishedDeferred = jQuery.Deferred();
		
		this.oODataModel.attachRequestSent(function (oEvent) {
			console.log("Sent");
		});

		this.oODataModel.attachRequestCompleted(function (oEvent) {
			console.log("Completeds");
		});

		this.oODataModel.attachRequestFailed(function (oEvent) {
			console.log("success");
		});
		
		this.oODataModel.read("/USER_REGISTRATION_ENT(Flag='L',Userid='"+userid+"',Password='"+password+"',MobileNo='',Email='')",{
			success : function(oData) {
				console.dir(oData);
				sap.m.MessageToast.show(that.getText("SignInSuccessful"));
			},
			error : function(oResponse) {
				sap.m.MessageToast.show(that.getText("InvalidCredentials"));
			}});
	},
	


	// //////////////////////////////////////////////////////////////////////////////////////////////
	registerUser : function() {

		var oEntry = {};
		
		
		
		oEntry.MobileNo="0009990003";
		oEntry.Email="abdul_waheedE@sagia.gov.sa"
		oEntry.Password="WE";
		oEntry.Userid="Waheed14E";
		oEntry.Flag="R";
		

		/*this.oODataModel.setDefaultBindingMode("TwoWay");
		this.oODataModel.setTokenHandlingEnabled(false);*/

		this.oODataModel.attachRequestFailed(function(evt) {
			alert("Server error: " + evt.getParameter("message") + " - "
					+ evt.getParameter("statusText"));
		});
		this.oODataModel.attachRequestSent(function (oEvent) {
		    console.log("request sent");
		});
		this.oODataModel.attachRequestSent(function (oEvent) {
		    console.log("request completed");
		});
		/*this.oODataModel.setHeaders(

		{
			"X-Requested-With" : "XMLHttpRequest",
			"Content-Type" : "application/atom+xml",
			"DataServiceVersion" : "2.0",
			"X-CSRF-Token" : "Fetch"

		}

		);*/

		//this.oODataModel.create('/USER_REGISTRATION_ENT', oEntry, {
		/*this.oODataModel.create("/USER_REGISTRATION_ENT",oEntry,null,
				{
			success : function(oData) {
				console.log(oData);
			},
			error : function(oResponse) {
				console.log(oResponse);
			},
			async : true
		});*/
		/*this.oODataModel.createEntry("/USER_REGISTRATION_ENT",oEntry);
		this.oODataModel.submitChanges({
			fnSuccess : function(oData) {
				console.log(oData);
			},
			fnError : function(oResponse) {
				console.log(oResponse);
			}});*/
		
		this.oODataModel.read("/USER_REGISTRATION_ENT(Flag='L',Userid='4000000087',Password='123456',MobileNo='',Email='')",{
			success : function(oData) {
				console.log(oData);
			},
			error : function(oResponse) {
				console.log(oResponse);
			}});
		
	

	}
};