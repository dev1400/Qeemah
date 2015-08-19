jQuery.sap.declare("com.sagia.common.js.bioivalidateworker");

com.sagia.common.js.bioivalidateworker = {
		
	validateDataBIOI : function(othis){
		if(!(/^[0-9.,]+$/.test( othis.oBIOILaborSizeInputText.getValue() ))){			
			 othis.oValidationLILIStatus = false;

	  		 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOILaborSizeDigitOnly"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }

		else if(!(/^[0-9.,]+$/.test( othis.oBIOICapitalInputText.getValue() ))){			
			 othis.oValidationLILIStatus = false;

	  		 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOICapitalDigitOnly"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }


		else if(!(/^\d*$/.test( othis.oBIOITelephoneInputText.getValue() ))){	
			 othis.oValidationLILIStatus = false;

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOITelephoneNoNumeric"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }


		else if(!(/^\d*$/.test( othis.oBIOIFaxInputText.getValue() ))){	
			 othis.oValidationLILIStatus = false;

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIFaxNoNumeric"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }


		else if(!(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/.test( othis.oBIOIEmailInputText.getValue() ))){
			othis.oValidationLILIStatus = false;

			if(!othis.oShowAlertDialog.isOpen())
			{
			othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIInvalidEmail"));
			othis.oShowAlertDialog.open();
			
			}
		}

		else if(!(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test( othis.oBIOIWebSiteInputText.getValue() ))){
			 othis.oValidationLILIStatus = false;

			if(!othis.oShowAlertDialog.isOpen())
			{
			othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIInvalidWebsite"));
			othis.oShowAlertDialog.open();
			
			}
		 }
		return othis.oValidationLILIStatus;
	},
	validatePresenceBIOI : function(othis){
		
		if(othis.oBIOIOrganizationName.getValue() === ""){			
			 othis.oValidationLILIStatus = false;
	 
			if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIONameRequired"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(othis.oBIOIOrganizationName.getValue().length > 100){			
			 othis.oValidationLILIStatus = false;
			 
				if(!othis.oShowAlertDialog.isOpen())
				 {
					othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIOrganizationNameLength"));
					othis.oShowAlertDialog.open();
				 }
					
		  }else if(othis._oidRegionComboBox.getSelectedKey() === ""){			
			 othis.oValidationLILIStatus = false;
			 
				if(!othis.oShowAlertDialog.isOpen())
				 {
					othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIRegion"));
					othis.oShowAlertDialog.open();
				 }
					
		  }else if(othis._oBICityComboBox.getSelectedKey() === ""){			
				 othis.oValidationLILIStatus = false;
				 
					if(!othis.oShowAlertDialog.isOpen())
					 {
						othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOICityMandatory"));
						othis.oShowAlertDialog.open();
					 }
						
		  }else if(othis._oBIILegalStatusCombobox.getSelectedKey() === ""){			
				 othis.oValidationLILIStatus = false;
				 
					if(!othis.oShowAlertDialog.isOpen())
					 {
						othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOILegalStatus"));
						othis.oShowAlertDialog.open();
					 }
						
		  }else if(othis.oBIOIMultiNationalCompanyCombobox.getSelectedKey() === ""){			
				 othis.oValidationLILIStatus = false;
				 
					if(!othis.oShowAlertDialog.isOpen())
					 {
						othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIMNC"));
						othis.oShowAlertDialog.open();
					 }
						
		  }else if(othis.oBIOIEmailInputText.getValue() === ""){			
			 othis.oValidationLILIStatus = false;

	  		 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIEmailRequired"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(othis.oOriginalBIOILaborSizeInputTextValue > 10){
	  		othis.oValidationLILIStatus = false;

	 		 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOILaborSize"));
				othis.oShowAlertDialog.open();
			 }
	  	 }else if(othis.oOriginalBIOICapitalInputTextValue > 25){
	  		othis.oValidationLILIStatus = false;

	 		 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOICapitalLength"));
				othis.oShowAlertDialog.open();
			 }
	  	 }
	  	 else if(othis.oBIOICapitalInputText.getValue() === ""){			
	  	 
			 othis.oValidationLILIStatus = false;

	  		 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOICapitalRequired"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(othis.oBIOITelephoneCountryCodeInputText.getValue() === ""){			
			 othis.oValidationLILIStatus = false;

	  		 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOITelephoneCountryCodeRequired"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(!(othis.oBIOITelephoneCountryCodeInputText.getValue().length <= 5 && othis.oBIOITelephoneCountryCodeInputText.getValue().length >= 2)){			
			 othis.oValidationLILIStatus = false;

	  		 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOITelephoneCountryCodeLength"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }/*
			 * else if(!(/^\d*$/.test(
			 * othis.oBIOITelephoneCountryCodeInputText.getValue() ))){
			 * othis.oValidationLILIStatus = false;
			 * 
			 * if(!othis.oShowAlertDialog.isOpen()) {
			 * othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOITelephoneCountryCodeDigitsOnly"));
			 * othis.oShowAlertDialog.open(); } }
			 */else if(othis.oBIOITelephoneInputText.getValue() === ""){		
			 othis.oValidationLILIStatus = false;

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOITelephoneNoRequired"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(!(othis.oBIOITelephoneInputText.getValue().length <= 30 && othis.oBIOITelephoneInputText.getValue().length >= 5)){			
			 othis.oValidationLILIStatus = false;

	  		 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOITelephoneNoLength"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(othis.oBIOIFaxCountryCodeInputText.getValue() === ""){			
			 othis.oValidationLILIStatus = false;

	  		 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIFaxCountryCodeRequired"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(!(othis.oBIOIFaxCountryCodeInputText.getValue().length <= 5 && othis.oBIOIFaxCountryCodeInputText.getValue().length >= 2)){			
			 othis.oValidationLILIStatus = false;

	  		 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIFaxCCNoLength"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }/*
			 * else if(!(/^\d*$/.test(
			 * othis.oBIOIFaxCountryCodeInputText.getValue() ))){
			 * othis.oValidationLILIStatus = false;
			 * 
			 * if(!othis.oShowAlertDialog.isOpen()) {
			 * othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIFaxCCNoNumeric"));
			 * othis.oShowAlertDialog.open(); } }
			 */else if(othis.oBIOIFaxInputText.getValue() === ""){	
			 othis.oValidationLILIStatus = false;

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIFaxNoRequired"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(!(othis.oBIOIFaxInputText.getValue().length <= 20 && othis.oBIOIFaxInputText.getValue().length >= 5)){			
			 othis.oValidationLILIStatus = false;

	  		 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIFaxNoLength"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(othis.oBIOIMobilephoneCountryCodeInputText.getValue() === ""){		
			 othis.oValidationLILIStatus = false;

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIMobileCountryCodeRequired"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(!(othis.oBIOIMobilephoneCountryCodeInputText.getValue().length <= 5 && othis.oBIOIMobilephoneCountryCodeInputText.getValue().length >= 2)){			
			 othis.oValidationLILIStatus = false;

	  		 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIMobileCountryCodeLength"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }/*
			 * else if(!(/^\d*$/.test(
			 * othis.oBIOIMobilephoneCountryCodeInputText.getValue() ))){
			 * othis.oValidationLILIStatus = false;
			 * 
			 * if(!othis.oShowAlertDialog.isOpen()) {
			 * othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIMobileCountryCodeDigitsOnly"));
			 * othis.oShowAlertDialog.open(); } }
			 */else if(othis.oBIOIMobilephoneInputText.getValue() === ""){	
			 othis.oValidationLILIStatus = false;

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIMobileNoRequired"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(!(othis.oBIOIMobilephoneInputText.getValue().length <= 30 && othis.oBIOIMobilephoneInputText.getValue().length >= 5)){
			 othis.oValidationLILIStatus = false;

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIMobileNoLength"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(!(/^\d*$/.test( othis.oBIOIMobilephoneInputText.getValue() ))){
			 othis.oValidationLILIStatus = false;

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIMobileNoNumeric"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(othis.oBIOIWebSiteInputText.getValue() === ""){	
			 othis.oValidationLILIStatus = false;

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIWebSiteRequired"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(othis.oBIOIWebSiteInputText.getValue().length > 60){	
			 othis.oValidationLILIStatus = false;

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIWebsiteLength"));
				othis.oShowAlertDialog.open();
			 }
				
	  	 }else if(othis.oBIOIEmailInputText.getValue().length > 241){
			othis.oValidationLILIStatus = false;

			if(!othis.oShowAlertDialog.isOpen())
			{
			othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOIEmailLength"));
			othis.oShowAlertDialog.open();
			
			}
		}/*
			 * else{ othis.doThis(); othis.oValidationLILIStatus = true; }
			 */
		 else if(othis.oBIOICommMethodComboBox.getSelectedKey() === ""){			
			 othis.oValidationLILIStatus = false;

			 if(!othis.oShowAlertDialog.isOpen())
			 {
				othis.oAlertTextView.setText(othis.oModelHelper.getText("BIOICommMethod"));
				othis.oShowAlertDialog.open();
			 }
				
		 }
		return othis.oValidationLILIStatus;

	},
	saveData : function(othis){		
		
		othis.openBusyDialog();
		
		othis.oBIOICapitalInputTextValue = othis.oBIOICapitalInputText.getValue();
		othis.oBIOICapitalInputTextValue = othis.oBIOICapitalInputTextValue.match(/\d/g);
		othis.oBIOICapitalInputTextValue = othis.oBIOICapitalInputTextValue.join("");
		
		othis.oBIOILaborSizeInputTextValue = othis.oBIOILaborSizeInputText.getValue();
		othis.oBIOILaborSizeInputTextValue = othis.oBIOILaborSizeInputTextValue.match(/\d/g);
		othis.oBIOILaborSizeInputTextValue = othis.oBIOILaborSizeInputTextValue.join("");
		
		var that = othis;
	       
		if(othis.oRecordExists){
			try{
				
			var oRequestFinishedDeferred = othis.oModelHelper.saveBIOI(othis.oRef_id, 
					othis.oBIOIOrganizationName.getValue(),
					othis._oidRegionComboBox.getSelectedKey(),
					othis._oBIILegalStatusCombobox.getSelectedKey(),
					othis._oBICityComboBox.getSelectedKey(),
					othis.oBIOIMultiNationalCompanyCombobox.getSelectedKey(),
					othis.oBIOIEmailInputText.getValue(),
					othis.oBIOILaborSizeInputTextValue,
					othis.oBIOICommMethodComboBox.getSelectedItem().getKey(),
					othis.oBIOICapitalInputTextValue,					
					othis.oBIOITelephoneCountryCodeInputText.getValue(),
					othis.oBIOITelephoneInputText.getValue(),
					othis.oBIOIMobilephoneCountryCodeInputText.getValue(),
					othis.oBIOIMobilephoneInputText.getValue(),
					othis.oBIOIFaxCountryCodeInputText.getValue(),
					othis.oBIOIFaxInputText.getValue(),
					othis.oBIOIWebSiteInputText.getValue(),
					othis.oBIOITelephoneCountryCodeInputText.getValue(),
					othis.oBIOIFaxCountryCodeInputText.getValue(),
					othis.oBIOIMobilephoneCountryCodeInputText.getValue());

			jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function() {				
				//this.basicInfoFileAttachmentOperations(this.oBIOIOrganizationName.getValue());				
				othis.closeBusyDialog();
			}, othis));	
			}
			catch(err){
				othis.closeBusyDialog();
				console.log(err);
			}
			
		}else{
			try{
			var oRequestFinishedDeferred = othis.oModelHelper.createAndUpdateBIOI(othis.oRef_id, 
					othis.oBIOIOrganizationName.getValue(),
					othis._oidRegionComboBox.getSelectedKey(),
					othis._oBIILegalStatusCombobox.getSelectedKey(),
					othis._oBICityComboBox.getSelectedKey(),
					othis.oBIOIMultiNationalCompanyCombobox.getSelectedKey(),
					othis.oBIOIEmailInputText.getValue(),
					othis.oBIOILaborSizeInputTextValue,
					othis.oBIOICommMethodComboBox.getSelectedKey(),
					othis.oBIOICapitalInputTextValue,
					othis.oBIOITelephoneCountryCodeInputText.getValue(),
					othis.oBIOITelephoneInputText.getValue(),
					othis.oBIOIMobilephoneCountryCodeInputText.getValue(),
					othis.oBIOIMobilephoneInputText.getValue(),
					othis.oBIOIFaxCountryCodeInputText.getValue(),
					othis.oBIOIFaxInputText.getValue(),
					othis.oBIOIWebSiteInputText.getValue(),
					othis.oBIOITelephoneCountryCodeInputText.getValue(),
					othis.oBIOIFaxCountryCodeInputText.getValue(),
					othis.oBIOIMobilephoneCountryCodeInputText.getValue()								
					);				
            jQuery.when(oRequestFinishedDeferred).then(jQuery.proxy(function(oResponse) {
            	othis.oRecordExists = true;            	
				//this.basicInfoFileAttachmentOperations(this.oBIOIOrganizationName.getValue());
            	othis.closeBusyDialog();
			}, othis));	
			}
			catch(err){
				othis.closeBusyDialog();
				console.log(err);
			}
			
		}
	},	
};