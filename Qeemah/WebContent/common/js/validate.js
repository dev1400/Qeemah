jQuery.sap.declare("com.sagia.common.js.validate");

com.sagia.common.js.validate = {
		checkIfAllBAQAreAnswered : function(thisContext){
			var oBAQValidationStatus = false;
			for(var i=0; i < thisContext.oTotalBAQQuestions; i++){
				
				 var oBAQAnswer = sap.ui.getCore().byId("idBAQAnswer"+i);
				 
				 oBAQAnswer.setValueState("None");
				 oBAQAnswer.setShowValueStateMessage(false);
				 
				 if(oBAQAnswer.getSelectedKey() === ""){
					 oBAQAnswer.setValueState("Error");
					 oBAQAnswer.setShowValueStateMessage(false);
					 
					 oBAQValidationStatus = false;
					 return;
				 }else{
					 oBAQValidationStatus = true;
				 }
				 
			}
			return oBAQValidationStatus;
		},
		signInWorker : function(thisContext, oResponse){
			
			//this.handleSaveLinkPress(this.oLanguageSelect.getSelectedKey());
			//this.getBAQ();	
			try{
				//thisContext.openBusyDialog();
				$(window).bind('beforeunload', function(e) {	        
			        return thisContext.oModelHelper.getText("ConfirmBrowserClose");
			      });
				
				/*thisContext._oidMainPageContent.setVisible(false);
				thisContext._oTopHeaderVBox.setVisible(true);
				thisContext._oidLicenseButtonsHBox.setVisible(true);
				thisContext.oVBoxSubmittedApplicationStatus.setVisible(false);*/
				
				thisContext._oidMainPageContent.setVisible(false);
				thisContext._oTopHeaderVBox.setVisible(true);
				thisContext._oidLicenseButtonsHBox.setVisible(true);
				thisContext.oVBoxSubmittedApplicationStatus.setVisible(false);
				
				sap.m.MessageToast.show(thisContext.oModelHelper
						.getText("SignInSuccessful"), {duration : 1000});
				thisContext.closeBusyDialog();
				
				
				//thisContext.getBAQ(thisContext.oLanguageSelect.getSelectedKey());
				
				thisContext.oRef_id = oResponse.Ref_id;

				
				
				thisContext.oBasicInfoTab =  thisContext.getView().byId("idBasicInfoTab");
				thisContext.oLicenseInfoTab =  thisContext.getView().byId("idLicenseInfoTab");
				
				thisContext.oLicenseInfoTab.setSelectedIndex(1);
				thisContext.oLicenseInfoTab.setSelectedIndex(0);
				
				
				thisContext._oidRegionComboBox = thisContext.getView().byId("idRegionComboBox");		
				var oRegionComboBoxFilter = new sap.ui.model.Filter("Bezei_reg", sap.ui.model.FilterOperator.NE, "");
				var oRegionComboBoxKeyFilter = new sap.ui.model.Filter("Bland_reg", sap.ui.model.FilterOperator.NE, "");
				thisContext._oidRegionComboBox.getBinding("items").filter([oRegionComboBoxFilter, oRegionComboBoxKeyFilter]);
				
				thisContext._oBIILegalStatusCombobox = thisContext.getView().byId("idBILegalStatusComboBox");
				var oBIILegalStatusFilter = new sap.ui.model.Filter("Textlong", sap.ui.model.FilterOperator.NE, "");
				var oBIILegalStatusKeyFilter = new sap.ui.model.Filter("Source", sap.ui.model.FilterOperator.NE, "");
				thisContext._oBIILegalStatusCombobox.getBinding("items").filter([oBIILegalStatusFilter,oBIILegalStatusKeyFilter]);
				
				thisContext._oBICINationalityCombobox = thisContext.getView().byId("idCINationalityComboBox");
				var oBICINationalityFilter = new sap.ui.model.Filter("Natio50", sap.ui.model.FilterOperator.NE, "");
				var oBICINationalityKeyFilter = new sap.ui.model.Filter("Land1", sap.ui.model.FilterOperator.NE, "");
				thisContext._oBICINationalityCombobox.getBinding("items").filter([oBICINationalityFilter,oBICINationalityKeyFilter]);
				
				
				thisContext._oBICICountryCombobox = thisContext.getView().byId("idCICountryComboBox");
				var oBICICountryFilter = new sap.ui.model.Filter("Landx50", sap.ui.model.FilterOperator.NE, "");
				var oBICICountryKeyFilter = new sap.ui.model.Filter("Land1", sap.ui.model.FilterOperator.NE, "");
				thisContext._oBICICountryCombobox.getBinding("items").filter([oBICICountryFilter,oBICICountryKeyFilter]);
				
				
				
				
				
				thisContext._oBICityComboBox = thisContext.getView().byId("idCityComboBox");
				
				thisContext.oBIOICommMethodComboBox = thisContext.getView().byId("idBIOICommMethodComboBox");
				
				
				
				thisContext.oBIOIOrganizationName = thisContext.getView().byId("idBIOIOrganizationName");
				thisContext.oBIOIMultiNationalCompanyCombobox = thisContext.getView().byId("idBIOIMultiNationalCompanyCombobox");
				thisContext.oBIOIEmailInputText = thisContext.getView().byId("idBIOIEmailInputText");
				thisContext.oBIOILaborSizeInputText = thisContext.getView().byId("idBIOILaborSizeInputText");
				thisContext.oBIOICapitalInputText = thisContext.getView().byId("idBIOICapitalInputText");
				thisContext.oBIOITelephoneCountryCodeInputText = thisContext.getView().byId("idBIOITelephoneCountryCodeInputText");
				thisContext.oBIOITelephoneInputText = thisContext.getView().byId("idBIOITelephoneInputText");
				thisContext.oBIOIMobilephoneCountryCodeInputText = thisContext.getView().byId("idBIOIMobilephoneCountryCodeInputText");
				thisContext.oBIOIMobilephoneInputText = thisContext.getView().byId("idBIOIMobilephoneInputText");
				thisContext.oBIOIFaxCountryCodeInputText = thisContext.getView().byId("idBIOIFaxCountryCodeInputText");
				thisContext.oBIOIFaxInputText = thisContext.getView().byId("idBIOIFaxInputText");
				thisContext.oBIOIWebSiteInputText = thisContext.getView().byId("idBIOIWebSiteInputText");
				
				thisContext.oBICIFirstNameInputText = thisContext.getView().byId("idBICIFirstNameInputText");
				thisContext.oBICILastNameInputText = thisContext.getView().byId("idBICILastNameInputText");
				thisContext.oBICICityInputText = thisContext.getView().byId("idBICICityInputText");
				thisContext.oBICIGenderComboBox = thisContext.getView().byId("idBICIGenderComboBox");
				thisContext.oBICIPOBoxInputText = thisContext.getView().byId("idBICIPOBoxInputText");
				thisContext.oBICITelephoneCountryCodeInputText = thisContext.getView().byId("idBICITelephoneCountryCodeInputText");
				thisContext.oBICITelephoneInputText = thisContext.getView().byId("idBICITelephoneInputText");
				thisContext.oBICIPostalCodeInputText = thisContext.getView().byId("idBICIPostalCodeInputText");
				thisContext.oBICIMobileCountryCodeInputText = thisContext.getView().byId("idBICIMobileCountryCodeInputText");
				thisContext.oBICIMobilePhoneInputText = thisContext.getView().byId("idBICIMobilePhoneInputText");
				thisContext.oBICICommMethodComboBox = thisContext.getView().byId("idBICICommMethodComboBox");
				thisContext.oBICIFaxCountryCodeInputText = thisContext.getView().byId("idBICIFaxCountryCodeInputText");
				thisContext.oBICIFaxInputText = thisContext.getView().byId("idBICIFaxInputText");
				thisContext.oBICIRoleInputText = thisContext.getView().byId("idBICIRoleInputText");
				thisContext.oBICIEmailInputText = thisContext.getView().byId("idBICIEmailInputText");
				thisContext.oBICIStreet = thisContext.getView().byId("idBICIStreetInputText");
				thisContext.oBICIPASSAttachmentName = thisContext.getView().byId("idBICIPASSAttachmentName");
				thisContext.oBICIPASSAttachmentNameTextView = thisContext.getView().byId("idBICIPASSAttachmentNameTextView");
				thisContext.oBICIPOAAttachmentName = thisContext.getView().byId("idBICIPOAAttachmentName");
				thisContext.oBICIPOAAttachmentNameTextView = thisContext.getView().byId("idBICIPOAAttachmentNameTextView");
				
				
				thisContext.oPreviewBICIPOAAttachmentName = thisContext.getView().byId("idPreviewBICIPOAAttachmentName");
				thisContext.oPreviewBICIPASSAttachmentName = thisContext.getView().byId("idPreviewBICIPASSAttachmentName");
				
				//thisContext.oOtherProductsVBox = thisContext.getView().byId("idOtherProductsVBox");
				//thisContext.oOtherProductsTextViewHBox = thisContext.getView().byId("idOtherProductsTextViewHBox");
				
				
				
				

				
				
				
				
				thisContext.oSaveImage = thisContext.getView().byId("idSaveImage");
				thisContext.oSaveLink = thisContext.getView().byId("idSaveLink");
				
				thisContext.oOriginalBIOICapitalInputTextValue = thisContext.oBIOICapitalInputText.getValue();
				thisContext.oOriginalBIOILaborSizeInputTextValue = thisContext.oBIOILaborSizeInputText.getValue();

				
				
				thisContext.oBIOIOrganizationName.setValue(oResponse.Company);
				
				var oRequestFinishedDeferredISICRecord = thisContext.oModelHelper.checkISICAvailability(thisContext.oRef_id);

				jQuery.when(oRequestFinishedDeferredISICRecord).then(jQuery.proxy(function(oResponse) {
					
					thisContext.handleLicenseInfoTabStripSelect();
										
					if(oResponse.data.results[0].Return === "No Records"){					
						
						thisContext.oISICUnAvailable = true;						
						
						}
				}, thisContext));

				//thisContext.openBusyDialog();
				var oRequestFinishedDeferredBIOIChild = thisContext.oModelHelper.readBIOI(thisContext.oRef_id);

				jQuery.when(oRequestFinishedDeferredBIOIChild).then(jQuery.proxy(function(oResponse) {
					if(oResponse.data.Return !== "Record does not exist"){
						thisContext.oBIOIOrganizationName.setValue(oResponse.data.OrgName);
						thisContext._oidRegionComboBox.setSelectedKey(oResponse.data.Region);
						thisContext._oBIILegalStatusCombobox.setSelectedKey(oResponse.data.LegalStatus);//.setSelectedItem(vItem);
						thisContext._oBICityComboBox.setSelectedKey(oResponse.data.City);//.setSelectedItem(vItem);
						thisContext.oBIOIMultiNationalCompanyCombobox.setSelectedKey(oResponse.data.MncComp);//.setSelectedItem(vItem);
						thisContext.oBIOIEmailInputText.setValue(oResponse.data.Email);
						thisContext.oBIOILaborSizeInputText.setValue(Number(oResponse.data.LbrSize).toString());
						thisContext.oBIOICommMethodComboBox.setSelectedKey(oResponse.data.CommMtd);//.setSelectedItem(vItem);
						thisContext.oBIOICapitalInputText.setValue(Number(oResponse.data.Capital).toString());
						thisContext.oBIOIWebSiteInputText.setValue(oResponse.data.Website.slice(7));
						thisContext.oBIOITelephoneInputText.setValue(oResponse.data.Telephone);  
						thisContext.oBIOIMobilephoneInputText.setValue(oResponse.data.Mobile);
						thisContext.oBIOIFaxInputText.setValue(Number(oResponse.data.Fax).toString());
						thisContext.oBIOITelephoneCountryCodeInputText.setValue(oResponse.data.Ccode_Tele);
						thisContext.oBIOIFaxCountryCodeInputText.setValue(oResponse.data.Ccode_Fax);
						thisContext.oBIOIMobilephoneCountryCodeInputText.setValue(oResponse.data.Ccode_Mobile);
						
						if(thisContext.oBIOILaborSizeInputText.getValue() === "0"){
							thisContext.oBIOILaborSizeInputText.setValue("")
						}
						if(thisContext.oBIOICapitalInputText.getValue() === "0"){
							thisContext.oBIOICapitalInputText.setValue("")
						}
						if(thisContext.oBIOIFaxInputText.getValue() === "0"){
							thisContext.oBIOIFaxInputText.setValue("")
						}
						
						thisContext._oidRegionComboBox.fireSelectionChange();
						thisContext.oBIOICapitalInputText.fireChange();
						thisContext.oBIOILaborSizeInputText.fireChange();
						
						thisContext.oRecordExists = true;
						}
					//thisContext.closeBusyDialog();
					
				}, thisContext));
				
				//thisContext.openBusyDialog();
				
				var oRequestFinishedDeferredBICIChild = thisContext.oModelHelper.readBICI(thisContext.oRef_id);

				jQuery.when(oRequestFinishedDeferredBICIChild).then(jQuery.proxy(function(oResponse) {
					if(oResponse.data.Return !== "Data does not exist"){
						thisContext.oBICIFirstNameInputText.setValue(oResponse.data.NameFirst);
						thisContext.oBICILastNameInputText.setValue(oResponse.data.NameLast);
						thisContext.oBICICityInputText.setValue(oResponse.data.City);
						thisContext.oBICIGenderComboBox.setSelectedKey(oResponse.data.Gender);
						thisContext.oBICIPOBoxInputText.setValue(oResponse.data.PoBox);
						thisContext.oBICITelephoneCountryCodeInputText.setValue(oResponse.data.Ccode_Tele);
						thisContext.oBICITelephoneInputText.setValue(oResponse.data.Telephone);
						thisContext.oBICIPostalCodeInputText.setValue(oResponse.data.PostalCode);
						thisContext.oBICIMobileCountryCodeInputText.setValue(oResponse.data.Ccode_Mobile);
						thisContext.oBICIMobilePhoneInputText.setValue(oResponse.data.Mobile);
						thisContext.oBICICommMethodComboBox.setSelectedKey(oResponse.data.CommMtd);
						thisContext.oBICIFaxCountryCodeInputText.setValue(oResponse.data.Ccode_Fax);
						thisContext.oBICIFaxInputText.setValue(Number(oResponse.data.Fax).toString());
						thisContext.oBICIRoleInputText.setSelectedKey(oResponse.data.Role);
						thisContext.oBICIEmailInputText.setValue(oResponse.data.Email);
						thisContext._oBICICountryCombobox.setSelectedKey(oResponse.data.Country);
						thisContext._oBICINationalityCombobox.setSelectedKey(oResponse.data.Nationality);
						thisContext.oBICIStreet.setValue(oResponse.data.Street);
						
						
						thisContext.oContactInfoRecordExists = true;
						
						if(thisContext.oBICIFaxInputText.getValue() === "0"){
							thisContext.oBICIFaxInputText.setValue("")
						}
						
						//thisContext.closeBusyDialog();
						}
				}, thisContext));	
				
				//thisContext.openBusyDialog();
				/*var oRequestFinishedDeferredBAQAnswersReadChild = thisContext.oModelHelper.readBAQSavedAnswers(thisContext.oRef_id);

				jQuery.when(oRequestFinishedDeferredBAQAnswersReadChild).then(jQuery.proxy(function(oResponse) {
					//thisContext.closeBusyDialog();
					
					//console.log
					
					if(oResponse.data.results[0].Return !== "No Records"){						
						
						for(var i=0; i < thisContext.oTotalBAQQuestions; i++){
							 for (j=0; j < thisContext.oTotalBAQQuestions; j++){
								 var oBAQAnswer = sap.ui.getCore().byId("idBAQAnswer"+j);
								 var oBAQuestion = sap.ui.getCore().byId("idBAQuestion"+j);

								 if(oResponse.data.results[i] !== undefined){
									 if(oBAQuestion.data("idBAQuestion"+j) === oResponse.data.results[i].NodeGuid){
										 
										 oBAQAnswer.setSelectedItem(oBAQAnswer.getItemByKey(oResponse.data.results[i].Atxtlg)); 
									 }	
								 }									 		 
								 
							 }									
						}
						thisContext.oBAQExists = true;						
						}else{
							thisContext.oBAQExists = false;	
						}
				}, thisContext));*/
				
				thisContext.oGroupMultiSelectionTextView = thisContext.getView().byId("idGroupMultiSelectionTextView");
				thisContext.oClassMultiSelectionTextView = thisContext.getView().byId("idClassMultiSelectionTextView");
				thisContext.oLAMultiSelectionTextView = thisContext.getView().byId("idLAMultiSelectionTextView");

				//thisContext.openBusyDialog();
			
				
				var getarray = [];
		        getarray.push(oRequestFinishedDeferredBIOIChild);
		        getarray.push(oRequestFinishedDeferredBICIChild);
		        //getarray.push(oRequestFinishedDeferredBAQAnswersReadChild);
		        getarray.push(oRequestFinishedDeferredISICRecord);				        
					        
		        jQuery.when.apply($, getarray).done(function () {				        	 							        						        	
		        	thisContext.readBICIPASSFileAttachemnts();
		        	thisContext.readBICIPOAFileAttachemnts();
		        	//	
		        	thisContext.closeBusyDialog();
		        	
		        	/*thisContext.openBusyDialog();
		        	setTimeout(function(){ 	
						thisContext.closeBusyDialog();
					}, 6000);*/
					
		        	setTimeout(function(){ 	
		        		thisContext.readBAQFileAttachments();
					}, 10000);
					
		        });				
				
				/*var oRequestFinishedDeferredFinancialAnswersReadChild; //= this.oModelHelper.readFinancialSavedAnswers(this.oRef_id);

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
		        thisContext.oBIOIOrganizationName.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBIOIOrganizationName.setValueState("None");
				});
		        thisContext._oidRegionComboBox.attachBrowserEvent("mouseover", function() {
		        	thisContext._oidRegionComboBox.setValueState("None");
				});
				thisContext._oBICityComboBox.attachBrowserEvent("mouseover", function() {
		        	thisContext._oBICityComboBox.setValueState("None");
				});
				thisContext._oBIILegalStatusCombobox.attachBrowserEvent("mouseover", function() {
		        	thisContext._oBIILegalStatusCombobox.setValueState("None");
				});
				thisContext.oBIOIMultiNationalCompanyCombobox.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBIOIMultiNationalCompanyCombobox.setValueState("None");
				});
				thisContext.oBIOIEmailInputText.attachBrowserEvent("mouseover", function() {
					thisContext.oBIOIEmailInputText.setValueState("None");								
				});
				/*thisContext.oBIOIEmailInputText.attachChange(function(){
		        	thisContext.oBIOIEmailInputText.setValueState("None");
				});*/
				thisContext.oBIOILaborSizeInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBIOILaborSizeInputText.setValueState("None");
				});
				thisContext.oBIOICapitalInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBIOICapitalInputText.setValueState("None");
				});
				thisContext.oBIOITelephoneInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBIOITelephoneInputText.setValueState("None");
				});
				thisContext.oBIOIFaxInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBIOIFaxInputText.setValueState("None");
				});
				thisContext.oBIOIMobilephoneInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBIOIMobilephoneInputText.setValueState("None");
				});
				thisContext.oBIOIWebSiteInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBIOIWebSiteInputText.setValueState("None");
				});
				thisContext.oBIOIEmailInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBIOIEmailInputText.setValueState("None");
				});
				thisContext.oBIOICommMethodComboBox.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBIOICommMethodComboBox.setValueState("None");
				});
				thisContext.oBICIRoleInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBICIRoleInputText.setValueState("None");
				});
				thisContext._oBICICountryCombobox.attachBrowserEvent("mouseover", function() {
		        	thisContext._oBICICountryCombobox.setValueState("None");
				});
				thisContext.oBICIGenderComboBox.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBICIGenderComboBox.setValueState("None");
				});
				thisContext._oBICINationalityCombobox.attachBrowserEvent("mouseover", function() {
		        	thisContext._oBICINationalityCombobox.setValueState("None");
				});
				thisContext.oBICIEmailInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBICIEmailInputText.setValueState("None");
				});
				thisContext.oBICITelephoneCountryCodeInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBICITelephoneCountryCodeInputText.setValueState("None");
				});
				thisContext.oBICITelephoneInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBICITelephoneInputText.setValueState("None");
				});
				thisContext.oBICIFaxCountryCodeInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBICIFaxCountryCodeInputText.setValueState("None");
				});
				thisContext.oBICIFaxInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBICIFaxInputText.setValueState("None");
				});
				thisContext.oBICIMobileCountryCodeInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBICIMobileCountryCodeInputText.setValueState("None");
				});
				thisContext.oBICIMobilePhoneInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBICIMobilePhoneInputText.setValueState("None");
				});
				thisContext.oBICICityInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBICICityInputText.setValueState("None");
				});
				thisContext.oBICIFirstNameInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBICIFirstNameInputText.setValueState("None");
				});
				thisContext.oBICILastNameInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBICILastNameInputText.setValueState("None");
				});
				thisContext.oBICIPOBoxInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBICIPOBoxInputText.setValueState("None");
				});
				thisContext.oBICIPostalCodeInputText.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBICIPostalCodeInputText.setValueState("None");
				});
				thisContext.oBICIStreet.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBICIStreet.setValueState("None");
				});
				thisContext.oLILIBusinessTypeComboBox.attachBrowserEvent("mouseover", function() {
		        	thisContext.oLILIBusinessTypeComboBox.setValueState("None");
				});
				thisContext.getView().byId("idBICIPowerofAttorneyFileUploader").attachBrowserEvent("mouseover", function() {
		        	thisContext.getView().byId("idBICIPowerofAttorneyFileUploader").setValueState("None");
				});
				thisContext.getView().byId("idBICIPassportCopyFileUploader").attachBrowserEvent("mouseover", function() {
		        	thisContext.getView().byId("idBICIPassportCopyFileUploader").setValueState("None");
				});
				thisContext.oLILISectionComboBox.attachBrowserEvent("mouseover", function() {
		        	thisContext.oLILISectionComboBox.setValueState("None");
				});
				thisContext.oLILIDivisionComboBox.attachBrowserEvent("mouseover", function() {
		        	thisContext.oLILIDivisionComboBox.setValueState("None");
				});
				thisContext.oLILIGroupComboBox.attachBrowserEvent("mouseover", function() {
		        	thisContext.oLILIGroupComboBox.setValueState("None");
				});
				thisContext.oLILIClassMultiComboBox.attachBrowserEvent("mouseover", function() {
		        	thisContext.oLILIClassMultiComboBox.setValueState("None");
				});
				thisContext.oLILILicenseActivityMultiComboBox.attachBrowserEvent("mouseover", function() {
		        	thisContext.oLILILicenseActivityMultiComboBox.setValueState("None");
				});
				thisContext.oBICICommMethodComboBox.attachBrowserEvent("mouseover", function() {
		        	thisContext.oBICICommMethodComboBox.setValueState("None");
				});
				
				thisContext.oTempBusinessType.attachBrowserEvent("mouseover", function() {
		        	thisContext.oTempBusinessType.setValueState("None");
				});
				thisContext.oTempActivityDescription.attachBrowserEvent("mouseover", function() {
		        	thisContext.oTempActivityDescription.setValueState("None");
				});
				
				/*thisContext..attachChange(function(){
		        	thisContext..setValueState("None");
				});
				thisContext..attachChange(function(){
		        	thisContext..setValueState("None");
				});*/
				//thisContext.closeBusyDialog();
				
				
				
				
				/*thisContext.oTermsAndConditionsCheckBox.attachChange(function(){
		        	thisContext.oTermsAndConditionsCheckBox.setValueState("None");
				});*/
				
				
				setTimeout(function(){ 	
					sap.m.MessageToast.show(thisContext.oModelHelper
							.getText("SessionTimeOut10"), {duration : 3000});					
				}, 1800000);
				
				setTimeout(function(){ 	
					sap.m.MessageToast.show(thisContext.oModelHelper
							.getText("SessionTimeOut5"), {duration : 3000});					
				}, 2100000);
				
				setTimeout(function(){ 	
					sap.m.MessageToast.show(thisContext.oModelHelper
							.getText("SessionTimeOut"), {duration : 3000});
					$(window).unbind('beforeunload');	
					location.reload(true);
				}, 2400000);	
				
				
				
				
			}catch(err){
				//thisContext.closeBusyDialog();
			}
			
			
			
			
			
		},
		addNSHAttachChangeEvent : function(thisContext){
			
			thisContext.oShareHolderTypeComboBox.attachBrowserEvent("mouseover", function() {
	        	thisContext.oShareHolderTypeComboBox.setValueState("None");
			});
			thisContext.oNSHFirstNameInputText.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHFirstNameInputText.setValueState("None");
			});
			thisContext.oNSHMiddleNameInputText.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHMiddleNameInputText.setValueState("None");
			});
			thisContext.oNSHLastNameInputText.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHLastNameInputText.setValueState("None");
			});
			thisContext.oNSHCountryComboBox.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHCountryComboBox.setValueState("None");
			});
			thisContext.oNSHGenderComboBox.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHGenderComboBox.setValueState("None");
			});
			thisContext.oNSHMaritalStatusComboBox.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHMaritalStatusComboBox.setValueState("None");
			});
			thisContext.oNSHAcademicTitleComboBox.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHAcademicTitleComboBox.setValueState("None");
			});
			thisContext.oNSHCityNameInputText.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHCityNameInputText.setValueState("None");
			});
			thisContext.oNSHNationalityComboBox.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHNationalityComboBox.setValueState("None");
			});
			thisContext.oNSHPreviousNationalityInputText.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHPreviousNationalityInputText.setValueState("None");
			});
			thisContext.oNSHWebsiteInputText.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHWebsiteInputText.setValueState("None");
			});
			thisContext.oNSHTelephoneInputText.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHTelephoneInputText.setValueState("None");
			});
			thisContext.oNSHMobilePhoneInputText.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHMobilePhoneInputText.setValueState("None");
			});
			thisContext.oNSHFaxInputText.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHFaxInputText.setValueState("None");
			});
			thisContext.oNSHEmailInputText.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHEmailInputText.setValueState("None");
			});
			thisContext.oNSHDOBDate.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHDOBDate.setValueState("None");
			});
			thisContext.oNSHPercentageInputText.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHPercentageInputText.setValueState("None");
			});
			thisContext.oNSHPOBoxInputText.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHPOBoxInputText.setValueState("None");
			});
			thisContext.oNSHPostalCodeInputText.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHPostalCodeInputText.setValueState("None");
			});
			thisContext.oNSHStreetInputText.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHStreetInputText.setValueState("None");
			});
			thisContext.oNSHEmailInputText.attachBrowserEvent("mouseover", function() {
	        	thisContext.oNSHEmailInputText.setValueState("None");
			});
			thisContext.NSHPassPortCopy.attachBrowserEvent("mouseover", function() {
	        	thisContext.NSHPassPortCopy.setValueState("None");
			});
			thisContext.NSHOtherAttachment.attachBrowserEvent("mouseover", function() {
	        	thisContext.NSHOtherAttachment.setValueState("None");
			});
			/*thisContext.NSHCommercialRegAttachment.attachBrowserEvent("mouseover", function() {
	        	thisContext.NSHCommercialRegAttachment.setValueState("None");
			});*/
			thisContext.NSHBankStatementAttachment.attachBrowserEvent("mouseover", function() {
	        	thisContext.NSHBankStatementAttachment.setValueState("None");
			});
			/*thisContext.NSHBalanceSheetAttachment.attachBrowserEvent("mouseover", function() {
	        	thisContext.NSHBalanceSheetAttachment.setValueState("None");
			});*/
		},
		validateNewShareHolder : function(thisContext){
			thisContext.oNewShareHolderValidation = true;
			
			
			
			 if(!(/^[a-zA-Z ]*$/.test( thisContext.oNSHFirstNameInputText.getValue() ))){
				thisContext.oNewShareHolderValidation = false;
				
				thisContext.oNSHFirstNameInputText.setValueState("Error");
				thisContext.oNSHFirstNameInputText.setShowValueStateMessage(false);				

				 if(!thisContext.oShowAlertDialog.isOpen())
				 {
					 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHFNameValidation"));
					 thisContext.oShowAlertDialog.open();
				 }
		   	 }else if(thisContext.oNSHFirstNameInputText.getValue() === ""){
					thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHFirstNameInputText.setValueState("Error");
					thisContext.oNSHFirstNameInputText.setShowValueStateMessage(false);	
					
	  			 if(!thisContext.oShowAlertDialog.isOpen())
	  			 {
	  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHFirstNameRequired"));
	  				thisContext.oShowAlertDialog.open();
	  			 }			 							  				
  	   	     }else if(thisContext.oNSHFirstNameInputText.getValue().length > 40){
					thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHFirstNameInputText.setValueState("Error");
					thisContext.oNSHFirstNameInputText.setShowValueStateMessage(false);	
					
		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHFirstNameLength"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }
  	   	     
  	   	     
  	   	     else if(!(/^[a-zA-Z ]*$/.test( thisContext.oNSHMiddleNameInputText.getValue() ))){
					thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHMiddleNameInputText.setValueState("Error");
					thisContext.oNSHMiddleNameInputText.setShowValueStateMessage(false);				

					 if(!thisContext.oShowAlertDialog.isOpen())
					 {
						 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("MiddleNameValid"));
						 thisContext.oShowAlertDialog.open();
					 }
			   	 }else if(thisContext.oNSHMiddleNameInputText.getValue() === ""){
						thisContext.oNewShareHolderValidation = false;
						
						thisContext.oNSHMiddleNameInputText.setValueState("Error");
						thisContext.oNSHMiddleNameInputText.setShowValueStateMessage(false);	
						
		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("MiddleNameMand"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	     }else if(thisContext.oNSHMiddleNameInputText.getValue().length > 40){
						thisContext.oNewShareHolderValidation = false;
						
						thisContext.oNSHMiddleNameInputText.setValueState("Error");
						thisContext.oNSHMiddleNameInputText.setShowValueStateMessage(false);	
						
			  			 if(!thisContext.oShowAlertDialog.isOpen())
			  			 {
			  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("MiddleNameExced"));
			  				thisContext.oShowAlertDialog.open();
			  			 }			 							  				
		  	   	 }
			 
  	   	     
  	   	     else if(thisContext.oNSHLastNameInputText.getValue().length > 40){
					thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHLastNameInputText.setValueState("Error");
					thisContext.oNSHLastNameInputText.setShowValueStateMessage(false);	
					
		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHLastNameLength"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(thisContext.oNSHLastNameInputText.getValue() === ""){
 				thisContext.oNewShareHolderValidation = false;
				
				thisContext.oNSHLastNameInputText.setValueState("Error");
				thisContext.oNSHLastNameInputText.setShowValueStateMessage(false);	
				

	  			 if(!thisContext.oShowAlertDialog.isOpen())
	  			 {
	  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHLasttNameRequired"));
	  				thisContext.oShowAlertDialog.open();
	  			 }			 							  				
  	   	     }else if(!(/^[a-zA-Z ]*$/.test( thisContext.oNSHLastNameInputText.getValue() ))){
 				thisContext.oNewShareHolderValidation = false;
				
				thisContext.oNSHLastNameInputText.setValueState("Error");
				thisContext.oNSHLastNameInputText.setShowValueStateMessage(false);	
				

				 if(!thisContext.oShowAlertDialog.isOpen())
				 {
					 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHLNameValidation"));
					 thisContext.oShowAlertDialog.open();
				 }
		   	 }else if(thisContext.oNSHCountryComboBox.getSelectedKey() === ""){
					thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHCountryComboBox.setValueState("Error");
					thisContext.oNSHCountryComboBox.setShowValueStateMessage(false);	
					
					 if(!thisContext.oShowAlertDialog.isOpen())
					 {
						 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHShareHolderCountryRequired"));
						 thisContext.oShowAlertDialog.open();
					 }
			 }else if(thisContext.oNSHGenderComboBox.getSelectedKey() === ""){
					thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHGenderComboBox.setValueState("Error");
					thisContext.oNSHGenderComboBox.setShowValueStateMessage(false);	
					
					 if(!thisContext.oShowAlertDialog.isOpen())
					 {
						 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHShareHolderGenderRequired"));
						 thisContext.oShowAlertDialog.open();
					 }
			 }else if(thisContext.oNSHMaritalStatusComboBox.getSelectedKey() === ""){
					thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHMaritalStatusComboBox.setValueState("Error");
					thisContext.oNSHMaritalStatusComboBox.setShowValueStateMessage(false);	
					
					 if(!thisContext.oShowAlertDialog.isOpen())
					 {
						 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHShareHolderMaritalStatusRequired"));
						 thisContext.oShowAlertDialog.open();
					 }
			 }else if(thisContext.oNSHAcademicTitleComboBox.getSelectedKey() === ""){
					thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHAcademicTitleComboBox.setValueState("Error");
					thisContext.oNSHAcademicTitleComboBox.setShowValueStateMessage(false);	
					
					 if(!thisContext.oShowAlertDialog.isOpen())
					 {
						 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHShareHolderAcademicTitleRequired"));
						 thisContext.oShowAlertDialog.open();
					 }
			 }else if(thisContext.oNSHCityNameInputText.getValue() === ""){
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHCityNameInputText.setValueState("Error");
					thisContext.oNSHCityNameInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHCityNameMandatory"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }/*else if(thisContext.oNSHCommMethodInputText.getValue() === ""){
	 				thisContext.oNewShareHolderValidation = false;

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHShareHolderCommMethoRequired"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }*/else if(thisContext.oNSHNationalityComboBox.getValue() === ""){
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHNationalityComboBox.setValueState("Error");
					thisContext.oNSHNationalityComboBox.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHShareHolderCurrNationRequired"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(thisContext.oNSHPreviousNationalityInputText.getValue() === ""){
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHPreviousNationalityInputText.setValueState("Error");
					thisContext.oNSHPreviousNationalityInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHShareHolderPreviousNationRequired"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(thisContext.oNSHCityNameInputText.getValue().length > 40){
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHCityNameInputText.setValueState("Error");
					thisContext.oNSHCityNameInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHCityLength"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(!(/^[a-zA-Z ]*$/.test( thisContext.oNSHCityNameInputText.getValue() ))){
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHCityNameInputText.setValueState("Error");
					thisContext.oNSHCityNameInputText.setShowValueStateMessage(false);	
					

					 if(!thisContext.oShowAlertDialog.isOpen())
					 {
						 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHCityNameValidation"));
						 thisContext.oShowAlertDialog.open();
					 }
			 }else if(!(/^(http:\/\/www\.|https:\/\/www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test( "http://"+thisContext.oNSHWebsiteInputText.getValue() )) ){
				 //|http:\/\/|https:\/\/
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHWebsiteInputText.setValueState("Error");
					thisContext.oNSHWebsiteInputText.setShowValueStateMessage(false);	
					

					 if(!thisContext.oShowAlertDialog.isOpen())
					 {
						 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHInvalidWebsite"));
						 thisContext.oShowAlertDialog.open();
					 }
			 }else if(thisContext.oNSHTelephoneInputText.getValue() === ""){	
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHTelephoneInputText.setValueState("Error");
					thisContext.oNSHTelephoneInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHTelephoneNoRequired"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(thisContext.oNSHTelephoneInputText.getValue().length > 30){	
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHTelephoneInputText.setValueState("Error");
					thisContext.oNSHTelephoneInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHTelephoneNoLength"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(!(/^\d*$/.test( thisContext.oNSHTelephoneInputText.getValue()))){	
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHTelephoneInputText.setValueState("Error");
					thisContext.oNSHTelephoneInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHTelephoneNoVadidation"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(thisContext.oNSHMobilePhoneInputText.getValue() === ""){	
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHMobilePhoneInputText.setValueState("Error");
					thisContext.oNSHMobilePhoneInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHMobilephoneNoRequired"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(thisContext.oNSHMobilePhoneInputText.getValue().length > 30){	
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHMobilePhoneInputText.setValueState("Error");
					thisContext.oNSHMobilePhoneInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHMobilephoneNoLength"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(!(/^\d*$/.test( thisContext.oNSHMobilePhoneInputText.getValue()))){	
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHMobilePhoneInputText.setValueState("Error");
					thisContext.oNSHMobilePhoneInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHMobilephoneNoValidation"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(thisContext.oNSHFaxInputText.getValue().length > 30){	
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHFaxInputText.setValueState("Error");
					thisContext.oNSHFaxInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHFaxNoLength"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(thisContext.oNSHFaxInputText.getValue() === ""){	
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHFaxInputText.setValueState("Error");
					thisContext.oNSHFaxInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHFaxNoRequired"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(!(/^\d*$/.test( thisContext.oNSHFaxInputText.getValue()))){	
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHFaxInputText.setValueState("Error");
					thisContext.oNSHFaxInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHFaxNoValidation"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(!(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/.test( thisContext.oNSHEmailInputText.getValue() ))){
			  	   	thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHEmailInputText.setValueState("Error");
					thisContext.oNSHEmailInputText.setShowValueStateMessage(false);	
					
			
					 if(!thisContext.oShowAlertDialog.isOpen())
					 {
						thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHInvalidEmail"));
						thisContext.oShowAlertDialog.open();
					 }	
	  	   		 
	  	   	 }else if(thisContext.oNSHDOBDate.getDateValue() === null){	
 				thisContext.oNewShareHolderValidation = false;
				
				thisContext.oNSHDOBDate.setValueState("Error");
				thisContext.oNSHDOBDate.setShowValueStateMessage(false);	
				

	  			 if(!thisContext.oShowAlertDialog.isOpen())
	  			 {
	  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHDOBRequired"));
	  				thisContext.oShowAlertDialog.open();
	  			 }			 							  				
  	   	     }else if(!(/^\d*$/.test( thisContext.oNSHPercentageInputText.getValue()))){	
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHPercentageInputText.setValueState("Error");
					thisContext.oNSHPercentageInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHInvalidPercentage"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(thisContext.oNSHPercentageInputText.getValue() === "" || thisContext.oNSHPercentageInputText.getValue() < 1 || thisContext.oNSHPercentageInputText.getValue() > 100){
 				thisContext.oNewShareHolderValidation = false;
				
				thisContext.oNSHPercentageInputText.setValueState("Error");
				thisContext.oNSHPercentageInputText.setShowValueStateMessage(false);	
				

	  			 if(!thisContext.oShowAlertDialog.isOpen())
	  			 {
	  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHPercentageValueRange"));
	  				thisContext.oShowAlertDialog.open();
	  			 }			 							  				
  	   	     }else if(thisContext.oNSHPOBoxInputText.getValue().length > 10){	
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHPOBoxInputText.setValueState("Error");
					thisContext.oNSHPOBoxInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHPOBoxLength"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(thisContext.oNSHPostalCodeInputText.getValue().length > 10){	
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHPostalCodeInputText.setValueState("Error");
					thisContext.oNSHPostalCodeInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHPostalCodeLength"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(thisContext.oNSHStreetInputText.getValue().length > 60){	
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHStreetInputText.setValueState("Error");
					thisContext.oNSHStreetInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHStreetLength"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(thisContext.oNSHEmailInputText.getValue().length > 241){	
				thisContext.oNewShareHolderValidation = false;
				
				thisContext.oNSHEmailInputText.setValueState("Error");
				thisContext.oNSHEmailInputText.setShowValueStateMessage(false);	
				

	  			 if(!thisContext.oShowAlertDialog.isOpen())
	  			 {
	  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHEmailLength"));
	  				thisContext.oShowAlertDialog.open();
	  			 }			 							  				
 	   	    }else if(thisContext.oNSHEmailInputText.getValue() === ""){	
				thisContext.oNewShareHolderValidation = false;
				
				thisContext.oNSHEmailInputText.setValueState("Error");
				thisContext.oNSHEmailInputText.setShowValueStateMessage(false);	
				

	  			 if(!thisContext.oShowAlertDialog.isOpen())
	  			 {
	  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHEmailLength"));
	  				thisContext.oShowAlertDialog.open();
	  			 }			 							  				
	   	    }else if(thisContext.oNSHWebsiteInputText.getValue().length > 132){	
			thisContext.oNewShareHolderValidation = false;
			
			thisContext.oNSHWebsiteInputText.setValueState("Error");
			thisContext.oNSHWebsiteInputText.setShowValueStateMessage(false);	
			

  			 if(!thisContext.oShowAlertDialog.isOpen())
  			 {
  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHWebsiteLength"));
  				thisContext.oShowAlertDialog.open();
  			 }			 							  				
	   	    }else if(thisContext.oNSHPercentageInputText.getValue().length > 3){	
				thisContext.oNewShareHolderValidation = false;
				
				thisContext.oNSHPercentageInputText.setValueState("Error");
				thisContext.oNSHPercentageInputText.setShowValueStateMessage(false);	
				

	  			 if(!thisContext.oShowAlertDialog.isOpen())
	  			 {
	  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHPercentageLength"));
	  				thisContext.oShowAlertDialog.open();
	  			 }			 							  				
		   	 }else if(thisContext.NSHPassPortCopy.getValue().length > 90){	
					thisContext.oNewShareHolderValidation = false;
					
					thisContext.NSHPassPortCopy.setValueState("Error");
					//thisContext.NSHPassPortCopy.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("PassportFileNameExceed"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
			 }else if(thisContext.NSHOtherAttachment.getValue().length > 90){	
				thisContext.oNewShareHolderValidation = false;
				
				thisContext.NSHOtherAttachment.setValueState("Error");
				//thisContext.NSHOtherAttachment.setShowValueStateMessage(false);	
				

	  			 if(!thisContext.oShowAlertDialog.isOpen())
	  			 {
	  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("OtherFileNameExceed"));
	  				thisContext.oShowAlertDialog.open();
	  			 }			 							  				
		    }/*else if(thisContext.NSHCommercialRegAttachment.getValue().length > 90){	
				thisContext.oNewShareHolderValidation = false;
				
				thisContext.NSHCommercialRegAttachment.setValueState("Error");
				//thisContext.NSHCommercialRegAttachment.setShowValueStateMessage(false);	
				

	  			 if(!thisContext.oShowAlertDialog.isOpen())
	  			 {
	  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("CommercialRegFileNameExceed"));
	  				thisContext.oShowAlertDialog.open();
	  			 }			 							  				
		    }*/else if(thisContext.NSHBankStatementAttachment.getValue().length > 90){	
				thisContext.oNewShareHolderValidation = false;
				
				thisContext.NSHBankStatementAttachment.setValueState("Error");
				//thisContext.NSHBankStatementAttachment.setShowValueStateMessage(false);	
				

	  			 if(!thisContext.oShowAlertDialog.isOpen())
	  			 {
	  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("BankStmtFileNameExceed"));
	  				thisContext.oShowAlertDialog.open();
	  			 }			 							  				
		    }/*else if(thisContext.NSHBalanceSheetAttachment.getValue().length > 90){	
				thisContext.oNewShareHolderValidation = false;
				
				thisContext.NSHBalanceSheetAttachment.setValueState("Error");
				//thisContext.NSHBalanceSheetAttachment.setShowValueStateMessage(false);	
				

	  			 if(!thisContext.oShowAlertDialog.isOpen())
	  			 {
	  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("BalanceSheetFileNameExceed"));
	  				thisContext.oShowAlertDialog.open();
	  			 }			 							  				
		    }*/
		    else if(thisContext.NSHPassPortCopy.getValue() === ""){	
				thisContext.oNewShareHolderValidation = false;
				
				thisContext.NSHPassPortCopy.setValueState("Error");
				//thisContext.NSHPassPortCopy.setShowValueStateMessage(false);	
				

	  			 if(!thisContext.oShowAlertDialog.isOpen())
	  			 {
	  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHPPCopyRequired"));
	  				thisContext.oShowAlertDialog.open();
	  			 }			 							  				
		    }/*else if(thisContext.NSHCommercialRegAttachment.getValue() === ""){	
				thisContext.oNewShareHolderValidation = false;
				
				thisContext.NSHCommercialRegAttachment.setValueState("Error");
				//thisContext.NSHCommercialRegAttachment.setShowValueStateMessage(false);	
				

	  			 if(!thisContext.oShowAlertDialog.isOpen())
	  			 {
	  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHCRCopyRequired"));
	  				thisContext.oShowAlertDialog.open();
	  			 }			 							  				
		    }*/else if(thisContext.NSHBankStatementAttachment.getValue() === ""){	
				thisContext.oNewShareHolderValidation = false;
				
				thisContext.NSHBankStatementAttachment.setValueState("Error");
				//thisContext.NSHBankStatementAttachment.setShowValueStateMessage(false);	
				

	  			 if(!thisContext.oShowAlertDialog.isOpen())
	  			 {
	  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHBSCopyRequired"));
	  				thisContext.oShowAlertDialog.open();
	  			 }			 							  				
		    }/*else if(thisContext.NSHBalanceSheetAttachment.getValue() === ""){	
				thisContext.oNewShareHolderValidation = false;
				
				thisContext.NSHBalanceSheetAttachment.setValueState("Error");
				//thisContext.NSHBalanceSheetAttachment.setShowValueStateMessage(false);	
				

	  			 if(!thisContext.oShowAlertDialog.isOpen())
	  			 {
	  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHBLSCopyRequired"));
	  				thisContext.oShowAlertDialog.open();
	  			 }			 							  				
		    }*//*else if(thisContext.NSHOtherAttachment.getValue() === ""){	
				thisContext.oNewShareHolderValidation = false;

	  			 if(!thisContext.oShowAlertDialog.isOpen())
	  			 {
	  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHOTRCopyRequired"));
	  				thisContext.oShowAlertDialog.open();
	  			 }			 							  				
		    }*/
		
			return thisContext.oNewShareHolderValidation;
			
			/*this.oShareHolderTypeComboBox = this.getView().byId("idNSHTypeComboBox");
			this. = this.getView().byId("idNSHFirstNameInputText");
			this. = this.getView().byId("idNSHCountryComboBox");
			this.oNSHLastNameInputText = this.getView().byId("idNSHLastNameInputText");
			this. = this.getView().byId("idNSHCityNameInputText");
			this.oNSHGenderComboBox = this.getView().byId("idNSHGenderComboBox");
			this.oNSHPOBoxInputText = this.getView().byId("idNSHPOBoxInputText");
			this. = this.getView().byId("idNSHMaritalStatusComboBox");
			this.oNSHPostalCodeInputText = this.getView().byId("idNSHPostalCodeInputText");
			this. = this.getView().byId("idNSHAcademicTitleInputText");
			this. = this.getView().byId("idNSHStreetInputText");
			this.oNSHDOBDate = this.getView().byId("idNSHDOBDate");
			this. = this.getView().byId("idNSHWebsiteInputText");
			this. = this.getView().byId("idNSHTelephoneInputText");
			this. = this.getView().byId("idNSHNationalityComboBox");
			this. = this.getView().byId("idNSHMobilePhoneInputText");
			this. = this.getView().byId("idNSHPreviousNationalityInputText");
			this. = this.getView().byId("idNSHFaxInputText");
			this. = this.getView().byId("idNSHCommMethodInputText");
			this. = this.getView().byId("idNSHEmailInputText");
			this.oNSHPercentageInputText = this.getView().byId("idNSHPercentageInputText");*/
			
		},
		validateBasicInfo : function(context){
			
			context.oPBICIPowerofAttorneyFileUploader = context.getView().byId("idBICIPowerofAttorneyFileUploader");
			context.oPBICIPassPortCopyFileUploader = context.getView().byId("idBICIPassportCopyFileUploader");
			
			
			if(context.oPBICIPowerofAttorneyFileUploader.getValue() !== ""){
				context.oPreviewBICIPOAAttachmentName.setVisible(true);
				context.oPreviewBICIPOAAttachmentName.setText(context.oPBICIPowerofAttorneyFileUploader.getValue());
			}
			
			if(context.oPBICIPassPortCopyFileUploader.getValue() !== ""){
				context.oPreviewBICIPASSAttachmentName.setVisible(true);
				context.oPreviewBICIPASSAttachmentName.setText(context.oPBICIPassPortCopyFileUploader.getValue());
			}
			//console.log("Reached Validate");
			var oBIOIOrganizationName = context.getView().byId("idBIOIOrganizationName");	
			var oBIOIPreviewOrganizationName = context.getView().byId("idBIOIPreviewOrganizationName");			
			oBIOIPreviewOrganizationName.setValue(oBIOIOrganizationName.getValue());
			
			
			context._oBIOILegalStatusCombobox = context.getView().byId("idBILegalStatusComboBox");
			context._oBIOIPreviewLegalStatusCombobox = context.getView().byId("idBIOIPreviewLegalStatusComboBox");			
			var oPreviewLegalStatusComboboxItemTemplate = context._oBIOILegalStatusCombobox.getSelectedItem();			
            context._oBIOIPreviewLegalStatusCombobox.setSelectedItem(oPreviewLegalStatusComboboxItemTemplate);
            
            context._oBIOIRegionComboBox = context.getView().byId("idRegionComboBox");
			context._oBIOIPreviewRegionCombobox = context.getView().byId("idBIOIPreviewRegionComboBox");			
			var oPreviewRegionComboboxItemTemplate = context._oBIOIRegionComboBox.getSelectedItem();			
            context._oBIOIPreviewRegionCombobox.setSelectedItem(oPreviewRegionComboboxItemTemplate);

            context._oBIOIMNCComboBox = context.getView().byId("idBIOIMultiNationalCompanyCombobox");
			context._oBIOIPreviewMNCCombobox = context.getView().byId("idBIOIPreviewMultiNationalCompanyCombobox");			
			var oPreviewMNCComboboxItemTemplate = context._oBIOIMNCComboBox.getSelectedItem();			
            context._oBIOIPreviewMNCCombobox.setSelectedItem(oPreviewMNCComboboxItemTemplate);
            
            /*context._oBIOIMNCComboBox = context.getView().byId("idBIOIMultiNationalCompanyCombobox");
			context._oBIOIPreviewMNCCombobox = context.getView().byId("idBIOIPreviewMultiNationalCompanyCombobox");			
			var oPreviewMNCComboboxItemTemplate = context._oBIOIMNCComboBox.getSelectedItem();			
            context._oBIOIPreviewMNCCombobox.setSelectedItem(oPreviewMNCComboboxItemTemplate);*/
            
            context._oBIOICityComboBox = context.getView().byId("idCityComboBox");
			context._oBIOICityMNCCombobox = context.getView().byId("idBIOIPreviewCityComboBox");			
			var oPreviewCityComboboxItemTemplate = context._oBIOICityComboBox.getSelectedItem();			
            context._oBIOICityMNCCombobox.setSelectedItem(oPreviewCityComboboxItemTemplate);          
           
			
            context.oBIOILaborSizeInputText = context.getView().byId("idBIOILaborSizeInputText");	
            context._oBIOIPreviewLaborSizeInputText = context.getView().byId("idBIOIPreviewLaborSizeInputText");			
            context._oBIOIPreviewLaborSizeInputText.setValue(context.oBIOILaborSizeInputText.getValue());
            
//            context.oBIOILaborSizeInputText = context.getView().byId("idBIOILaborSizeInputText");	
//            context._oBIOIPreviewLaborSizeInputText = context.getView().byId("idBIOIPreviewLaborSizeInputText");			
//            context._oBIOIPreviewLaborSizeInputText.setValue(context.oBIOILaborSizeInputText.getValue());

           /* context.oBIOIPOBoxInputText = context.getView().byId("idBICIPOBoxInputText");	
            context._oBIOIPreviewPOBoxInputText = context.getView().byId("idBIOIPreviewPOBoxInputText");			
            context._oBIOIPreviewPOBoxInputText.setValue(context.oBIOIPOBoxInputText.getValue());*/
            
            context.oBIOICapitalInputText = context.getView().byId("idBIOICapitalInputText");	
            context._oBIOIPreviewCapitalInputText = context.getView().byId("idBIOIPreviewCapitalInputText");			
            context._oBIOIPreviewCapitalInputText.setValue(context.oBIOICapitalInputText.getValue());
            
            /*context.oBIOIPostalCodeInputText = context.getView().byId("idBICIPostalCodeInputText");	
            context._oBIOIPreviewPostalCodeInputText = context.getView().byId("idBIOIPreviewPostalCodeInputText");			
            context._oBIOIPreviewPostalCodeInputText.setValue(context.oBIOIPostalCodeInputText.getValue());
         */   
            context.oBIOITelephoneCCInputText = context.getView().byId("idBIOITelephoneCountryCodeInputText");	
            context._oBIOIPreviewTelephoneCCInputText = context.getView().byId("idBIOIPreviewTelephoneCountryCode");			
            context._oBIOIPreviewTelephoneCCInputText.setValue(context.oBIOITelephoneCCInputText.getValue());
            
            context.oBIOITelephoneInputText = context.getView().byId("idBIOITelephoneInputText");	
            context._oBIOIPreviewTelephoneInputText = context.getView().byId("idBIOIPreviewTelephoneInputText");			
            context._oBIOIPreviewTelephoneInputText.setValue(context.oBIOITelephoneInputText.getValue());
			
//            context.oBIOITelephoneExtensionInputText = context.getView().byId("idBICITelephoneExtensionInputText");	
//            context._oBIOIPreviewTelephoneExtensionInputText = context.getView().byId("idBIOIPreviewTelephoneExtensionInputText");			
//            context._oBIOIPreviewTelephoneExtensionInputText.setValue(context.oBIOITelephoneExtensionInputText.getValue());
//
//             
            //idBIOIPreviewMobilephoneCountryCodeInputText   idBIOIMobilephoneCountryCodeInputText
            //idBIOIPreviewFaxCountryCodeInputText   idBIOIFaxCountryCodeInputText
            
            context.oBIOIMobilephoneCountryCodeInputText = context.getView().byId("idBIOIMobilephoneCountryCodeInputText");	
            context._oBIOIPreviewMobilephoneCountryCodeInputText = context.getView().byId("idBIOIPreviewMobilephoneCountryCodeInputText");			
            context._oBIOIPreviewMobilephoneCountryCodeInputText.setValue(context.oBIOIMobilephoneCountryCodeInputText.getValue());
            
            context.oBIOIFaxCountryCodeInputText = context.getView().byId("idBIOIFaxCountryCodeInputText");	
            context.oBIOIPreviewFaxCountryCodeInputText = context.getView().byId("idBIOIPreviewFaxCountryCodeInputText");			
            context.oBIOIPreviewFaxCountryCodeInputText.setValue(context.oBIOIFaxCountryCodeInputText.getValue());
            
            
            
            /*context.oBIOIStreetInputText = context.getView().byId("idBICIStreetInputText");	
            context._oBIOIPreviewStreetInputText = context.getView().byId("idBIOIPreviewStreetInputText");			
            context._oBIOIPreviewStreetInputText.setValue(context.oBIOIStreetInputText.getValue());
			*/
            context.oBIOIMobilePhoneInputText = context.getView().byId("idBIOIMobilephoneInputText");	
            context._oBIOIPreviewMobilePhoneInputText = context.getView().byId("idBIOIPreviewMobilephoneInputText");			
            context._oBIOIPreviewMobilePhoneInputText.setValue(context.oBIOIMobilePhoneInputText.getValue());
			
//            context.oBIOIBuildingNoInputText = context.getView().byId("idBIOIBuildingNoInputText");	
//            context._oBIOIPreviewBuildingNoInputText = context.getView().byId("idBIOIPreviewBuildingNoInputText");			
//            context._oBIOIPreviewBuildingNoInputText.setValue(context.oBIOIBuildingNoInputText.getValue());
			
            context.oBIOIFaxInputText = context.getView().byId("idBIOIFaxInputText");	
            context._oBIOIPreviewFaxInputText = context.getView().byId("idBIOIPreviewFaxInputText");			
            context._oBIOIPreviewFaxInputText.setValue(context.oBIOIFaxInputText.getValue());
            
            context.oBIOIEmailInputText = context.getView().byId("idBIOIEmailInputText");	
            context._oBIOIPreviewEmailInputText = context.getView().byId("idBIOIPReviewEmailInputText");			
            context._oBIOIPreviewEmailInputText.setValue(context.oBIOIEmailInputText.getValue());
            
            context.oBIOIWebsiteInputText = context.getView().byId("idBIOIWebSiteInputText");	
            context._oBIOIPreviewWebsiteInputText = context.getView().byId("idBIOIPreviewWebSiteInputText");			
            context._oBIOIPreviewWebsiteInputText.setValue(context.oBIOIWebsiteInputText.getValue());
            
            
            context._oBIOICommMethodComboBox = context.getView().byId("idBIOICommMethodComboBox");
			context._oBIOIPreviewCommMethodCombobox = context.getView().byId("idBIOIPreviewCommMethodComboBox");			
			var oPreviewCommMethodComboboxItemTemplate = context._oBIOICommMethodComboBox.getSelectedItem();			
            context._oBIOIPreviewCommMethodCombobox.setSelectedItem(oPreviewCommMethodComboboxItemTemplate);

//            context._oBIOIPreApprovalFileUploader = context.getView().byId("idBIOIPreApprovalFileUploader");
//			context._oBIOIPReviewPreApprovalFileUploader = context.getView().byId("idBIOIPreviewPreApprovalFileUploader");
//            context._oBIOIPReviewPreApprovalFileUploader.setValue(context._oBIOIPreApprovalFileUploader.getValue());
            
            //CI Start
            context.oBICIFirstNameInputText = context.getView().byId("idBICIFirstNameInputText");	
            context._oBICIPreviewFirstNameInputText = context.getView().byId("idBICIPreviewFirstNameInputText");			
            context._oBICIPreviewFirstNameInputText.setValue(context.oBICIFirstNameInputText.getValue());
            
            context._oBICINationalityComboBox = context.getView().byId("idCINationalityComboBox");
			context._oBICIPreviewNationalityCombobox = context.getView().byId("idBICIPreviewNationalityInputText");			
			var oPreviewNationalityComboboxItemTemplate = context._oBICINationalityComboBox.getSelectedItem();			
            context._oBICIPreviewNationalityCombobox.setSelectedItem(oPreviewNationalityComboboxItemTemplate);

            context.oBICILastNameInputText = context.getView().byId("idBICILastNameInputText");	
            context._oBICIPreviewLastNameInputText = context.getView().byId("idBICIPreviewLastNameInputText");			
            context._oBICIPreviewLastNameInputText.setValue(context.oBICILastNameInputText.getValue());
            
            context.oBICICityNameInputText = context.getView().byId("idBICICityInputText");	
            context._oBICIPreviewCityNameInputText = context.getView().byId("idBICIPreviewCityInputText");			
            context._oBICIPreviewCityNameInputText.setValue(context.oBICICityNameInputText.getValue());
            
            context._oBICIGenderComboBox = context.getView().byId("idBICIGenderComboBox");
			context._oBICIPreviewGenderCombobox = context.getView().byId("idBICIPreviewGenderComboBox");			
			var oPreviewGenderComboboxItemTemplate = context._oBICIGenderComboBox.getSelectedItem();			
            context._oBICIPreviewGenderCombobox.setSelectedItem(oPreviewGenderComboboxItemTemplate);
            
            context.oBICIStreetInputText = context.getView().byId("idBICIStreetInputText");	
            context._oBICIPreviewStreetInputText = context.getView().byId("idBICIPreviewStreetInputText");			
            context._oBICIPreviewStreetInputText.setValue(context.oBICIStreetInputText.getValue());
			
              
            context._oBICICountryComboBox = context.getView().byId("idCICountryComboBox");
			context._oBICIPreviewCountryCombobox = context.getView().byId("idBICIPreviewCountryComboBox");			
			var oPreviewCountryComboboxItemTemplate = context._oBICICountryComboBox.getSelectedItem();			
            context._oBICIPreviewCountryCombobox.setSelectedItem(oPreviewCountryComboboxItemTemplate);
            
            context.oBICIPOBoxInputText = context.getView().byId("idBICIPOBoxInputText");	
            context._oBICIPreviewPOBoxInputText = context.getView().byId("idBICIPreviewPOBoxInputText");			
            context._oBICIPreviewPOBoxInputText.setValue(context.oBICIPOBoxInputText.getValue());
			
            context.oBICITelephoneCCInputText = context.getView().byId("idBICITelephoneCountryCodeInputText");	
            context._oBICIPreviewTelephoneCCInputText = context.getView().byId("idBICIPreviewTelephoneCountryCodeInputText");			
            context._oBICIPreviewTelephoneCCInputText.setValue(context.oBICITelephoneCCInputText.getValue());
			
//            context.oBICITelephoneInputText = context.getView().byId("idBICITelephoneInputText");	
//            context._oBICIPreviewTelephoneInputText = context.getView().byId("idBICIPreviewTelephoneInputText");			
//            context._oBICIPreviewTelephoneInputText.setValue(context.oBICITelephoneInputText.getValue());
			
            context.oBICITelephoneInputText = context.getView().byId("idBICITelephoneInputText");	
            context._oBICIPreviewTelephoneInputText = context.getView().byId("idBICIPreviewTelephoneInputText");			
            context._oBICIPreviewTelephoneInputText.setValue(context.oBICITelephoneInputText.getValue());
			
//            context.oBICITelephoneExtInputText = context.getView().byId("idBICIExtensionInputText");	
//            context._oBICIPreviewTelephoneExtInputText = context.getView().byId("idBICIPreviewExtensionInputText");			
//            context._oBICIPreviewTelephoneExtInputText.setValue(context.oBICITelephoneExtInputText.getValue());
			
            context.oBICIPostalCodeInputText = context.getView().byId("idBICIPostalCodeInputText");	
            context._oBICIPreviewPostalCodeInputText = context.getView().byId("idBICIPreviewPostalCodeInputText");			
            context._oBICIPreviewPostalCodeInputText.setValue(context.oBICIPostalCodeInputText.getValue());
			
            context.oBICIMobileCCInputText = context.getView().byId("idBICIMobileCountryCodeInputText");	
            context._oBICIPreviewMobileCCInputText = context.getView().byId("idBICIPreviewMobileCountryCodeInputText");			
            context._oBICIPreviewMobileCCInputText.setValue(context.oBICIMobileCCInputText.getValue());
            
            context.oBICIMobileInputText = context.getView().byId("idBICIMobilePhoneInputText");	
            context._oBICIPreviewMobileInputText = context.getView().byId("idBICIPreviewMobileInputText");			
            context._oBICIPreviewMobileInputText.setValue(context.oBICIMobileInputText.getValue());
            
            
            context._oBICICommMethodComboBox = context.getView().byId("idBICICommMethodComboBox");
			context._oBICIPreviewCommMethodCombobox = context.getView().byId("idBICIPreviewCommMethodInputText");			
			var oBICIPreviewCommMethodComboboxItemTemplate = context._oBICICommMethodComboBox.getSelectedItem();			
            context._oBICIPreviewCommMethodCombobox.setSelectedItem(oBICIPreviewCommMethodComboboxItemTemplate);
            
            context.oBICIFaxCCInputText = context.getView().byId("idBICIFaxCountryCodeInputText");	
            context._oBICIPreviewFaxCCInputText = context.getView().byId("idBICIPreviewFaxCountryCodeInputText");			
            context._oBICIPreviewFaxCCInputText.setValue(context.oBICIFaxCCInputText.getValue());
           
            
            context.oBICIFaxInputText = context.getView().byId("idBICIFaxInputText");	
            context._oBICIPreviewFaxInputText = context.getView().byId("idBICIPreviewFaxInputText");			
            context._oBICIPreviewFaxInputText.setValue(context.oBICIFaxInputText.getValue());
            
            context._oBICIRoleComboBox = context.getView().byId("idBICIRoleInputText");
			context._oBICIPreviewRoleCombobox = context.getView().byId("idBICIPreviewRoleInputText");			
			var oBICIPreviewCommMethodComboboxItemTemplate = context._oBICIRoleComboBox.getSelectedItem();			
            context._oBICIPreviewRoleCombobox.setSelectedItem(oBICIPreviewCommMethodComboboxItemTemplate);
            
            context.oBICIEmailInputText = context.getView().byId("idBICIEmailInputText");	
            context._oBICIPreviewEmailInputText = context.getView().byId("idBICIPreviewEmailInputText");			
            context._oBICIPreviewEmailInputText.setValue(context.oBICIEmailInputText.getValue());
            
           /* context._oBICIPassportCopyFileUploader = context.getView().byId("idBICIPassportCopyFileUploader");
			context._oBICIPreviewPassportCopyFileUploader = context.getView().byId("idBICIPreviewPAssportCopyFileUploader");
            context._oBICIPreviewPassportCopyFileUploader.setValue(context._oBICIPassportCopyFileUploader.getValue());
           
            context._oBICIPowerOfAttorneyFileUploader = context.getView().byId("idBICIPowerofAttorneyFileUploader");
			context._oBICIPreviewPowerOfAttorneyFileUploader = context.getView().byId("idBICIPreviewPowerofAttorneyFileUploader");
            context._oBICIPreviewPowerOfAttorneyFileUploader.setValue(context._oBICIPowerOfAttorneyFileUploader.getValue());
          */ 

            //CI End
            
            
     // License Info  -  Start
            
//            console.log("Reached");
            /*context._oLISectionComboBox = context.getView().byId("idLISectionComboBox");
			context._oLIPreviewSectionComboBox = context.getView().byId("idLIPreviewSectionComboBox");			
			var oLIPreviewSectionComboBoxItemTemplate = context._oLISectionComboBox.getSelectedItem();			
            context._oLIPreviewSectionComboBox.setSelectedItem(oLIPreviewSectionComboBoxItemTemplate);
            
            context._oLIDivisionComboBox = context.getView().byId("idLIDivisionComboBox");
			context._oLIPreviewDivisionComboBox = context.getView().byId("idLIPreviewDivisionComboBox");			
			var oLIPreviewDivisionComboBoxItemTemplate = context._oLIDivisionComboBox.getSelectedItem();			
            context._oLIPreviewDivisionComboBox.setSelectedItem(oLIPreviewDivisionComboBoxItemTemplate);
            
            context._oLIGroupComboBox = context.getView().byId("idLIGroupComboBox");
			context._oLIPreviewGroupComboBox = context.getView().byId("idLIPreviewGroupComboBox");			
			var oLIPreviewGroupComboBoxItemTemplate = context._oLIGroupComboBox.getSelectedItem();			
            context._oLIPreviewGroupComboBox.setSelectedItem(oLIPreviewGroupComboBoxItemTemplate);
            
            context._oLIClassComboBox = context.getView().byId("idLIClassComboBox");
			context._oLIPreviewClassComboBox = context.getView().byId("idLIPreviewClassComboBox");			
			var oLIPreviewClassComboBoxItemTemplate = context._oLIClassComboBox.getSelectedItem();			
            context._oLIPreviewClassComboBox.setSelectedItem(oLIPreviewClassComboBoxItemTemplate);
            
            context._oLILicenseActivityComboBox = context.getView().byId("idLILicenseActivityComboBox");
			context._oLIPreviewLicenseActivityComboBox = context.getView().byId("idLIPreviewLicenseActivityComboBox");			
			var oLIPreviewLicenseActivityComboBoxItemTemplate = context._oLILicenseActivityComboBox.getSelectedItem();			
            context._oLIPreviewLicenseActivityComboBox.setSelectedItem(oLIPreviewLicenseActivityComboBoxItemTemplate);*/
            
            
//            //Activity Description still to be Coded
//            context.oBICIEmailInputText = context.getView().byId("idBICIEmailInputText");	
//            context._oBICIPreviewEmailInputText = context.getView().byId("idBICIPreviewEmailInputText");			
//            context._oBICIPreviewEmailInputText.setValue(context.oBICIEmailInputText.getValue());
            
            //ID for Product is missing in the respective Preview tab
            
            //Quantity has to be changed as InputText in Preview --->> Same like License Info
            
            
            /*context._oLIUnitOfMeasurementComboBox = context.getView().byId("idLIUnitOfMeasurementComboBox");
			context._oLIPreviewUnitOfMeasurementComboBox = context.getView().byId("idLIPreviewUnitOfMeasurementComboBox");			
			var oLIPreviewUnitOfMeasurementComboBoxItemTemplate = context._oLIUnitOfMeasurementComboBox.getSelectedItem();			
            context._oLIPreviewUnitOfMeasurementComboBox.setSelectedItem(oLIPreviewUnitOfMeasurementComboBoxItemTemplate);*/
	
    // License Info  -  End
            
            
//     Start of Shareholder Details
            
            
            
//     End of   Shareholder Details       

		}
};