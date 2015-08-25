jQuery.sap.declare("com.sagia.common.js.validatenshworker");

com.sagia.common.js.validatenshworker = {
		
	
	instantiateOrgNSH : function(othis){
		othis.oNSHOrganizationName = othis.getView().byId("idNSHOrganizationName");
		othis.oNSHOrgCountryComboBox = othis.getView().byId("idNSHOrgCountryComboBox");
		othis.oNSHOrgName2tText = othis.getView().byId("idNSHOrgName2tText");
		othis.oNSHOrgCityNameInputText = othis.getView().byId("idNSHOrgCityNameInputText");
		othis.oNSHOrgIndustrySectorComboBox = othis.getView().byId("idNSHOrgIndustrySectorInputText");
		othis.oNSHOrgPostalCodeInputText = othis.getView().byId("idNSHOrgPostalCodeInputText");
		othis.oNSHOrgSubSctorInputText = othis.getView().byId("idNSHOrgSubSctorInputText");
		othis.oNSHOrgPOBoxInputText = othis.getView().byId("idNSHOrgPOBoxInputText");
		othis.oNSHOrgMultiNationalCompanyCombobox = othis.getView().byId("idNSHOrgMultiNationalCompanyCombobox");
		othis.oNSHOrgStreetInputText = othis.getView().byId("idNSHOrgStreetInputText");
		othis.oNSHOrgLegalStatusComboBox = othis.getView().byId("idNSHOrgLegalStatusComboBox");
		othis.oNSHOrgBuildingNoInputText = othis.getView().byId("idNSHOrgBuildingNoInputText");
		othis.oNSHOrgLaborSizeInputText = othis.getView().byId("idNSHOrgLaborSizeInputText");
		othis.oNSHOrgCapitalInputText = othis.getView().byId("idNSHOrgCapitalInputText");
		othis.oNSHOrgTelephoneInputText = othis.getView().byId("idNSHOrgTelephoneInputText");
		othis.oNSHOrgPercentageInputText = othis.getView().byId("idNSHOrgPercentageInputText");
		othis.oNSHOrgFaxInputText = othis.getView().byId("idNSHOrgFaxInputText");
		othis.oNSHOrgWebsiteInputText = othis.getView().byId("idNSHOrgWebsiteInputText");
		othis.oNSHOrgMobilephoneInputText = othis.getView().byId("idNSHOrgMobilephoneInputText");
		othis.oNSHOrgEmailInputText = othis.getView().byId("idNSHOrgEmailInputText");
		
		othis.oNSHOrgTelephoneCountryCodeInputText = othis.getView().byId("idNSHOrgTelephoneCountryCodeInputText");
		othis.oNSHOrgFaxCountryCodeInputText = othis.getView().byId("idNSHOrgFaxCountryCodeInputText");
		othis.oNSHOrgMobilephoneCountryCodeInputText = othis.getView().byId("idNSHOrgMobilephoneCountryCodeInputText");
		
		othis.oNSHOrganizationName.attachBrowserEvent("click", function() {
			othis.oNSHOrganizationName.setValueState("None");
		});
		othis.oNSHOrgCountryComboBox.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgCountryComboBox.setValueState("None");
		});
		othis.oNSHOrgName2tText.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgName2tText.setValueState("None");
		});
		othis.oNSHOrgCityNameInputText.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgCityNameInputText.setValueState("None");
		});
		othis.oNSHOrgIndustrySectorComboBox.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgIndustrySectorComboBox.setValueState("None");
		});
		othis.oNSHOrgPostalCodeInputText.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgPostalCodeInputText.setValueState("None");
		});
		othis.oNSHOrgSubSctorInputText.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgSubSctorInputText.setValueState("None");
		});
		othis.oNSHOrgPOBoxInputText.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgPOBoxInputText.setValueState("None");
		});
		othis.oNSHOrgMultiNationalCompanyCombobox.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgMultiNationalCompanyCombobox.setValueState("None");
		});
		othis.oNSHOrgStreetInputText.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgStreetInputText.setValueState("None");
		});
		othis.oNSHOrgLegalStatusComboBox.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgLegalStatusComboBox.setValueState("None");
		});
		othis.oNSHOrgBuildingNoInputText.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgBuildingNoInputText.setValueState("None");
		});
		othis.oNSHOrgLaborSizeInputText.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgLaborSizeInputText.setValueState("None");
		});
		othis.oNSHOrgCapitalInputText.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgCapitalInputText.setValueState("None");
		});
		othis.oNSHOrgTelephoneInputText.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgTelephoneInputText.setValueState("None");
		});
		othis.oNSHOrgPercentageInputText.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgPercentageInputText.setValueState("None");
		});
		othis.oNSHOrgFaxInputText.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgFaxInputText.setValueState("None");
		});
		othis.oNSHOrgWebsiteInputText.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgWebsiteInputText.setValueState("None");
		});
		othis.oNSHOrgMobilephoneInputText.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgMobilephoneInputText.setValueState("None");
		});
		othis.oNSHOrgEmailInputText.attachBrowserEvent("mouseover", function() {
			othis.oNSHOrgEmailInputText.setValueState("None");
		});
		
		
	},	
	validateNSHOrgData : function(thisContext){
		thisContext.oNewShareHolderValidation = true;
		
		 if(!(/^[a-zA-Z ]*$/.test( thisContext.oNSHOrganizationName.getValue() ))){
				thisContext.oNewShareHolderValidation = false;
				
				thisContext.oNSHOrganizationName.setValueState("Error");
				thisContext.oNSHOrganizationName.setShowValueStateMessage(false);	
				//thisContext.oNSHOrganizationName.setValueStateText();

				 if(!thisContext.oShowAlertDialog.isOpen())
				 {
					 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("InvalidNSHOrgName"));
					 thisContext.oShowAlertDialog.open();
				 }
		   	 }else if(thisContext.oNSHOrganizationName.getValue() === ""){
					thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHOrganizationName.setValueState("Error");
					thisContext.oNSHOrganizationName.setShowValueStateMessage(false);	
					
	  			 if(!thisContext.oShowAlertDialog.isOpen())
	  			 {
	  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHOrgNAmeRequired"));
	  				thisContext.oShowAlertDialog.open();
	  			 }			 							  				
	   	     }else if(thisContext.oNSHOrganizationName.getValue().length > 40){
					thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHOrganizationName.setValueState("Error");
					thisContext.oNSHOrganizationName.setShowValueStateMessage(false);	
					
		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHOrgNameExceed"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(thisContext.oNSHOrgName2tText.getValue().length > 40){
					thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHOrgName2tText.setValueState("Error");
					thisContext.oNSHOrgName2tText.setShowValueStateMessage(false);	
					
		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHOrgNameExceed"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(!(/^[a-zA-Z ]*$/.test( thisContext.oNSHOrgName2tText.getValue() ))){
					thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHOrgName2tText.setValueState("Error");
					thisContext.oNSHOrgName2tText.setShowValueStateMessage(false);	
					//thisContext.oNSHOrganizationName.setValueStateText();

					 if(!thisContext.oShowAlertDialog.isOpen())
					 {
						 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("InvalidNSHOrgName"));
						 thisContext.oShowAlertDialog.open();
					 }
		   	 }else if(thisContext.oNSHOrgCountryComboBox.getSelectedKey() === ""){
					thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHOrgCountryComboBox.setValueState("Error");
					thisContext.oNSHOrgCountryComboBox.setShowValueStateMessage(false);	
					
					 if(!thisContext.oShowAlertDialog.isOpen())
					 {
						 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHShareHolderCountryRequired"));
						 thisContext.oShowAlertDialog.open();
					 }
			 }else if(thisContext.oNSHOrgIndustrySectorComboBox.getSelectedKey() === ""){
					thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHOrgIndustrySectorComboBox.setValueState("Error");
					thisContext.oNSHOrgIndustrySectorComboBox.setShowValueStateMessage(false);	
					
					 if(!thisContext.oShowAlertDialog.isOpen())
					 {
						 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("IndustrySectorRequired"));
						 thisContext.oShowAlertDialog.open();
					 }
			 }else if(thisContext.oNSHOrgCityNameInputText.getValue().length > 40){
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHOrgCityNameInputText.setValueState("Error");
					thisContext.oNSHOrgCityNameInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHOrgCityLength"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(!(/^[a-zA-Z ]*$/.test( thisContext.oNSHOrgCityNameInputText.getValue() ))){
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHOrgCityNameInputText.setValueState("Error");
					thisContext.oNSHOrgCityNameInputText.setShowValueStateMessage(false);	
					

					 if(!thisContext.oShowAlertDialog.isOpen())
					 {
						 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHOrgCityData"));
						 thisContext.oShowAlertDialog.open();
					 }
			 }else if(thisContext.oNSHOrgCityNameInputText.getValue() === ""){
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHOrgCityNameInputText.setValueState("Error");
					thisContext.oNSHOrgCityNameInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHORgCityNameReq"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(thisContext.oNSHOrgIndustrySectorComboBox.getSelectedKey() === "9" ){
	  	   		 
	  	   	 if( thisContext.oNSHOrgSubSctorInputText.getValue() === ""){
					thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHOrgSubSctorInputText.setValueState("Error");
					thisContext.oNSHOrgSubSctorInputText.setShowValueStateMessage(false);	
					
					 if(!thisContext.oShowAlertDialog.isOpen())
					 {
						 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("SubSectorReq"));
						 thisContext.oShowAlertDialog.open();
					 }
			 }else if(thisContext.oNSHOrgSubSctorInputText.getValue().length > 40){
					thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHOrgSubSctorInputText.setValueState("Error");
					thisContext.oNSHOrgSubSctorInputText.setShowValueStateMessage(false);	
					
					 if(!thisContext.oShowAlertDialog.isOpen())
					 {
						 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("SubSectorLength"));
						 thisContext.oShowAlertDialog.open();
					 }
			 }else if(!(/^[a-zA-Z ]*$/.test( thisContext.oNSHOrgSubSctorInputText.getValue() ))){
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHOrgSubSctorInputText.setValueState("Error");
					thisContext.oNSHOrgSubSctorInputText.setShowValueStateMessage(false);	
					

					 if(!thisContext.oShowAlertDialog.isOpen())
					 {
						 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("SubSectorInvalid"));
						 thisContext.oShowAlertDialog.open();
					 }
			 }
	  	   	 
	  	   	 }
	  	   	 else if(thisContext.oNSHOrgPostalCodeInputText.getValue() === ""){
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHOrgPostalCodeInputText.setValueState("Error");
					thisContext.oNSHOrgPostalCodeInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText(""));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(thisContext.oNSHOrgPostalCodeInputText.getValue().length > 10){
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHOrgPostalCodeInputText.setValueState("Error");
					thisContext.oNSHOrgPostalCodeInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText(""));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(thisContext.oNSHOrgPOBoxInputText.getValue() === "" 
	  	   		 && thisContext.oNSHOrgStreetInputText.getValue() === ""){
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHOrgPOBoxInputText.setValueState("Error");
					thisContext.oNSHOrgPOBoxInputText.setShowValueStateMessage(false);	
					thisContext.oNSHOrgStreetInputText.setValueState("Error");
					thisContext.oNSHOrgStreetInputText.setShowValueStateMessage(false);

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("EitherPOBoxOrStreetReq"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(thisContext.oNSHOrgPOBoxInputText.getValue().length > 10){
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHOrgPOBoxInputText.setValueState("Error");
					thisContext.oNSHOrgPOBoxInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHOPOBoxCannotExceed"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }else if(thisContext.oNSHOrgStreetInputText.getValue().length > 60){
	 				thisContext.oNewShareHolderValidation = false;
					
					thisContext.oNSHOrgStreetInputText.setValueState("Error");
					thisContext.oNSHOrgStreetInputText.setShowValueStateMessage(false);	
					

		  			 if(!thisContext.oShowAlertDialog.isOpen())
		  			 {
		  				thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHOStreetCannotExceed"));
		  				thisContext.oShowAlertDialog.open();
		  			 }			 							  				
	  	   	 }
	  	   else if(thisContext.oNSHOrgMultiNationalCompanyCombobox.getSelectedKey() === ""){
				thisContext.oNewShareHolderValidation = false;
				
				thisContext.oNSHOrgMultiNationalCompanyCombobox.setValueState("Error");
				thisContext.oNSHOrgMultiNationalCompanyCombobox.setShowValueStateMessage(false);	
				
				 if(!thisContext.oShowAlertDialog.isOpen())
				 {
					 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHMNCselectionReq"));
					 thisContext.oShowAlertDialog.open();
				 }
		 }
		 else if(thisContext.oNSHOrgLegalStatusComboBox.getSelectedKey() === ""){
				thisContext.oNewShareHolderValidation = false;
				
				thisContext.oNSHOrgLegalStatusComboBox.setValueState("Error");
				thisContext.oNSHOrgLegalStatusComboBox.setShowValueStateMessage(false);	
				
				 if(!thisContext.oShowAlertDialog.isOpen())
				 {
					 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("LegalStatusReq"));
					 thisContext.oShowAlertDialog.open();
				 }
		 }else if(!(/^[0-9.,]+$/.test( thisContext.oNSHOrgLaborSizeInputText.getValue() ))){	
			 thisContext.oNewShareHolderValidation = false;

			 thisContext.oLILIProductQuantityInputText.setValueState("Error");
			 thisContext.oLILIProductQuantityInputText.setShowValueStateMessage(false);
				 

				 if(!thisContext.oShowAlertDialog.isOpen())
				 {
					 thisContext.oAlertTextView.setText(this.oModelHelper.getText("NSHLaborSize"));
					 thisContext.oShowAlertDialog.open();
				 }
					
		  	 }
		 else if(thisContext.oNSHOrgLaborSizeInputText.getValue().length > 20){	
			 thisContext.oNewShareHolderValidation = false;

			 thisContext.oLILIProductQuantityInputText.setValueState("Error");
			 thisContext.oLILIProductQuantityInputText.setShowValueStateMessage(false);
				 

				 if(!thisContext.oShowAlertDialog.isOpen())
				 {
					 thisContext.oAlertTextView.setText(this.oModelHelper.getText("NSHLaborSizeLength"));
					 thisContext.oShowAlertDialog.open();
				 }
					
		  	 }
		 else if(!(/^[0-9.,]+$/.test( thisContext.oNSHOrgCapitalInputText.getValue() ))){	
			 thisContext.oNewShareHolderValidation = false;

			 thisContext.oNSHOrgCapitalInputText.setValueState("Error");
			 thisContext.oNSHOrgCapitalInputText.setShowValueStateMessage(false);
				 

				 if(!thisContext.oShowAlertDialog.isOpen())
				 {
					 thisContext.oAlertTextView.setText(this.oModelHelper.getText("NSHCapitalSize"));
					 thisContext.oShowAlertDialog.open();
				 }
					
		  	 }
		 else if(thisContext.oNSHOrgCapitalInputText.getValue().length > 20){	
			 thisContext.oNewShareHolderValidation = false;

			 thisContext.oNSHOrgCapitalInputText.setValueState("Error");
			 thisContext.oNSHOrgCapitalInputText.setShowValueStateMessage(false);
				 

				 if(!thisContext.oShowAlertDialog.isOpen())
				 {
					 thisContext.oAlertTextView.setText(this.oModelHelper.getText("NSHCapitalSizeLength"));
					 thisContext.oShowAlertDialog.open();
				 }
					
		  	 }
	  	 else if(!(/^[0-9]+$/.test( thisContext.oNSHOrgBuildingNoInputText.getValue() ))){	
			 thisContext.oNewShareHolderValidation = false;

			 thisContext.oNSHOrgBuildingNoInputText.setValueState("Error");
			 thisContext.oNSHOrgBuildingNoInputText.setShowValueStateMessage(false);
				 

				 if(!thisContext.oShowAlertDialog.isOpen())
				 {
					 thisContext.oAlertTextView.setText(this.oModelHelper.getText("NSHInvalidBNo"));
					 thisContext.oShowAlertDialog.open();
				 }
					
		  	 }
		 
	  	 else if(thisContext.oNSHOrgBuildingNoInputText.getValue().length > 20){	
			 thisContext.oNewShareHolderValidation = false;

			 thisContext.oNSHOrgBuildingNoInputText.setValueState("Error");
			 thisContext.oNSHOrgBuildingNoInputText.setShowValueStateMessage(false);
				 

				 if(!thisContext.oShowAlertDialog.isOpen())
				 {
					 thisContext.oAlertTextView.setText(this.oModelHelper.getText(""));
					 thisContext.oShowAlertDialog.open();
				 }
					
		  	 }
  	else if(!(/^[0-9]+$/.test( thisContext.oNSHOrgTelephoneInputText.getValue() ))){	
		 thisContext.oNewShareHolderValidation = false;

		 thisContext.oNSHOrgTelephoneInputText.setValueState("Error");
		 thisContext.oNSHOrgTelephoneInputText.setShowValueStateMessage(false);
			 

			 if(!thisContext.oShowAlertDialog.isOpen())
			 {
				 thisContext.oAlertTextView.setText(this.oModelHelper.getText("NSHInvalidBNo"));
				 thisContext.oShowAlertDialog.open();
			 }
				
	  	 }
  	else if(thisContext.oNSHOrgTelephoneInputText.getValue().length > 30){	
		 thisContext.oNewShareHolderValidation = false;

		 thisContext.oNSHOrgTelephoneInputText.setValueState("Error");
		 thisContext.oNSHOrgTelephoneInputText.setShowValueStateMessage(false);
			 

			 if(!thisContext.oShowAlertDialog.isOpen())
			 {
				 thisContext.oAlertTextView.setText(this.oModelHelper.getText("NSHOTelephoneLength"));
				 thisContext.oShowAlertDialog.open();
			 }
				
	  	 }
  	else if(!(/^[0-9]+$/.test( thisContext.oNSHOrgFaxInputText.getValue() ))){	
		 thisContext.oNewShareHolderValidation = false;

		 thisContext.oNSHOrgFaxInputText.setValueState("Error");
		 thisContext.oNSHOrgFaxInputText.setShowValueStateMessage(false);
			 

			 if(!thisContext.oShowAlertDialog.isOpen())
			 {
				 thisContext.oAlertTextView.setText(this.oModelHelper.getText("NSHInvalidFaxNo"));
				 thisContext.oShowAlertDialog.open();
			 }
				
	  	 }
  	else if(thisContext.oNSHOrgFaxInputText.getValue().length > 30){	
		 thisContext.oNewShareHolderValidation = false;

		 thisContext.oNSHOrgFaxInputText.setValueState("Error");
		 thisContext.oNSHOrgFaxInputText.setShowValueStateMessage(false);
			 

			 if(!thisContext.oShowAlertDialog.isOpen())
			 {
				 thisContext.oAlertTextView.setText(this.oModelHelper.getText("NSHOFaxLength"));
				 thisContext.oShowAlertDialog.open();
			 }
				
	  	 }
 	else if(!(/^[0-9]+$/.test( thisContext.oNSHOrgMobilephoneInputText.getValue() ))){	
		 thisContext.oNewShareHolderValidation = false;

		 thisContext.oNSHOrgMobilephoneInputText.setValueState("Error");
		 thisContext.oNSHOrgMobilephoneInputText.setShowValueStateMessage(false);
			 

			 if(!thisContext.oShowAlertDialog.isOpen())
			 {
				 thisContext.oAlertTextView.setText(this.oModelHelper.getText("NSHInvalidFaxNo"));
				 thisContext.oShowAlertDialog.open();
			 }
				
	  	 }
 	else if(thisContext.oNSHOrgFaxInputText.getValue().length > 30){	
		 thisContext.oNewShareHolderValidation = false;

		 thisContext.oNSHOrgFaxInputText.setValueState("Error");
		 thisContext.oNSHOrgFaxInputText.setShowValueStateMessage(false);
			 

			 if(!thisContext.oShowAlertDialog.isOpen())
			 {
				 thisContext.oAlertTextView.setText(this.oModelHelper.getText("NSHOMobileLength"));
				 thisContext.oShowAlertDialog.open();
			 }
				
	  	 }
 	else if(!(/^[0-9]+$/.test( thisContext.oNSHOrgPercentageInputText.getValue() ))){	
		 thisContext.oNewShareHolderValidation = false;

		 thisContext.oNSHOrgPercentageInputText.setValueState("Error");
		 thisContext.oNSHOrgPercentageInputText.setShowValueStateMessage(false);
			 

			 if(!thisContext.oShowAlertDialog.isOpen())
			 {
				 thisContext.oAlertTextView.setText(this.oModelHelper.getText("NSHInvalidPercentage"));
				 thisContext.oShowAlertDialog.open();
			 }
				
	  	 }
 	else if(thisContext.oNSHOrgPercentageInputText.getValue() > 100){	
		 thisContext.oNewShareHolderValidation = false;

		 thisContext.oNSHOrgPercentageInputText.setValueState("Error");
		 thisContext.oNSHOrgPercentageInputText.setShowValueStateMessage(false);
			 

			 if(!thisContext.oShowAlertDialog.isOpen())
			 {
				 thisContext.oAlertTextView.setText(this.oModelHelper.getText("NSHOrgPercentage"));
				 thisContext.oShowAlertDialog.open();
			 }
				
	  	 }
 	else if(thisContext.oNSHOrgPercentageInputText.getValue().length > 3){	
		 thisContext.oNewShareHolderValidation = false;

		 thisContext.oNSHOrgPercentageInputText.setValueState("Error");
		 thisContext.oNSHOrgPercentageInputText.setShowValueStateMessage(false);
			 

			 if(!thisContext.oShowAlertDialog.isOpen())
			 {
				 thisContext.oAlertTextView.setText(this.oModelHelper.getText("NSHOrgPercentage"));
				 thisContext.oShowAlertDialog.open();
			 }
				
	  	 }
 	
 	else if(!(/^(http:\/\/www\.|https:\/\/www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test( "http://"+thisContext.oNSHOrgWebsiteInputText.getValue() )) ){
		 //|http:\/\/|https:\/\/
			thisContext.oNewShareHolderValidation = false;
			
			thisContext.oNSHOrgWebsiteInputText.setValueState("Error");
			thisContext.oNSHOrgWebsiteInputText.setShowValueStateMessage(false);	
			

			 if(!thisContext.oShowAlertDialog.isOpen())
			 {
				 thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHInvalidWebsite"));
				 thisContext.oShowAlertDialog.open();
			 }
	 }
 	else if(thisContext.oNSHOrgWebsiteInputText.getValue().length > 2048){	
		 thisContext.oNewShareHolderValidation = false;

		 thisContext.oNSHOrgWebsiteInputText.setValueState("Error");
		 thisContext.oNSHOrgWebsiteInputText.setShowValueStateMessage(false);
			 

			 if(!thisContext.oShowAlertDialog.isOpen())
			 {
				 thisContext.oAlertTextView.setText(this.oModelHelper.getText("NSHInvalidWebsite"));
				 thisContext.oShowAlertDialog.open();
			 }
				
	  	 }	 
 	else if(!(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/.test( thisContext.oNSHOrgEmailInputText.getValue() ))){
  	   	thisContext.oNewShareHolderValidation = false;
		
		thisContext.oNSHOrgEmailInputText.setValueState("Error");
		thisContext.oNSHOrgEmailInputText.setShowValueStateMessage(false);	
		

		 if(!thisContext.oShowAlertDialog.isOpen())
		 {
			thisContext.oAlertTextView.setText(thisContext.oModelHelper.getText("NSHInvalidEmail"));
			thisContext.oShowAlertDialog.open();
		 }	
 		 
 	 }
 	else if(thisContext.oNSHOrgEmailInputText.getValue().length > 241){	
		 thisContext.oNewShareHolderValidation = false;

		 thisContext.oNSHOrgWebsiteInputText.setValueState("Error");
		 thisContext.oNSHOrgWebsiteInputText.setShowValueStateMessage(false);
			 

			 if(!thisContext.oShowAlertDialog.isOpen())
			 {
				 thisContext.oAlertTextView.setText(this.oModelHelper.getText("NSHInvalidEmail"));
				 thisContext.oShowAlertDialog.open();
			 }
				
	  	 }	 
		 
		 return thisContext.oNewShareHolderValidation;
	}
};