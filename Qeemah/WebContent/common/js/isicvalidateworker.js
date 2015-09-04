jQuery.sap.declare("com.sagia.common.js.isicvalidateworker");

com.sagia.common.js.isicvalidateworker = {
	
    validateISICPresence : function(othis){
    	othis.oValidationLILIStatus = true;
    	
    	if(othis.oLicenseTypeInputText.getValue() === ""){
    		othis.oValidationLILIStatus = false;
	  		 
    		//othis.oLicenseTypeInputText.setValueState("Error");
    		//othis.oLicenseTypeInputText.setShowValueStateMessage(false);
	  		
			 if(!othis.oShowAlertDialog.isOpen())
			 {
				 othis.oAlertTextView.setText(othis.oModelHelper.getText("LicenseTypeIsMand"));
				 othis.oShowAlertDialog.open();
			 }
	   }else if(othis.oLILIBusinessTypeComboBox.getSelectedKey() === ""){
    		othis.oValidationLILIStatus = false;
	  		 
    		othis.oLILIBusinessTypeComboBox.setValueState("Error");
    		othis.oLILIBusinessTypeComboBox.setShowValueStateMessage(false);
	  		
			 if(!othis.oShowAlertDialog.isOpen())
			 {
				 othis.oAlertTextView.setText(othis.oModelHelper.getText("LILIBizTypeRequired"));
				 othis.oShowAlertDialog.open();
			 }
	   }else if(othis.oLILIBusinessTypeComboBox.getSelectedKey() === "N"){
			
		   if(othis.oLILISectionComboBox.getSelectedKey() === ""){
			   othis.oValidationLILIStatus = false;
			    	 
			   othis.oLILISectionComboBox.setValueState("Error");
			   othis.oLILISectionComboBox.setShowValueStateMessage(false);
				
				 if(!othis.oShowAlertDialog.isOpen())
				 {
					 othis.oAlertTextView.setText(othis.oModelHelper.getText("AllLIFieldsMandatory"));
					 othis.oShowAlertDialog.open();
				 }
		   }else if(othis.oLILIDivisionComboBox.getSelectedKey() === ""){
			   othis.oValidationLILIStatus = false;
			  
				 
			   othis.oLILIDivisionComboBox.setValueState("Error");
			   othis.oLILIDivisionComboBox.setShowValueStateMessage(false);
				
				 if(!othis.oShowAlertDialog.isOpen())
				 {
					 othis.oAlertTextView.setText(othis.oModelHelper.getText("AllLIFieldsMandatory"));
					 othis.oShowAlertDialog.open();
				 }
		   }else if(othis.oLILIGroupComboBox.getSelectedKeys().filter(Boolean).length === 0){
			   othis.oValidationLILIStatus = false;
			  	 
			   othis.oLILIGroupComboBox.setValueState("Error");
			   othis.oLILIGroupComboBox.setShowValueStateMessage(false);
				
				 if(!othis.oShowAlertDialog.isOpen())
				 {
					 othis.oAlertTextView.setText(othis.oModelHelper.getText("AllLIFieldsMandatory"));
					 othis.oShowAlertDialog.open();
				 }
		   }else if(othis.oLILIClassMultiComboBox.getSelectedKeys().filter(Boolean).length === 0){
			   othis.oValidationLILIStatus = false;
			 		 
			   othis.oLILIClassMultiComboBox.setValueState("Error");
			   othis.oLILIClassMultiComboBox.setShowValueStateMessage(false);
				
				 if(!othis.oShowAlertDialog.isOpen())
				 {
					 othis.oAlertTextView.setText(othis.oModelHelper.getText("AllLIFieldsMandatory"));
					 othis.oShowAlertDialog.open();
				 }
		   }else if(othis.oLILILicenseActivityMultiComboBox.getSelectedKeys().filter(Boolean).length === 0){
			   othis.oValidationLILIStatus = false;
			   othis.oLILILicenseActivityMultiComboBox.setValueState("Error");
			   othis.oLILILicenseActivityMultiComboBox.setShowValueStateMessage(false);
				
				 if(!othis.oShowAlertDialog.isOpen())
				 {
					 othis.oAlertTextView.setText(othis.oModelHelper.getText("AllLIFieldsMandatory"));
					 othis.oShowAlertDialog.open();
				 }
		   }
	   }
		   
		   return othis.oValidationLILIStatus;
    },	
	saveData : function(othis, oOpenBusyDialog){
		
		if(oOpenBusyDialog){
			othis.openBusyDialog();
		}
		var that = othis;
		
		try{		
			if(othis.oISICUnAvailable){			
				
				var oRequestFinishedDeferredcreateISIC = othis.oModelHelper.createLILIBusiness(
						othis.oLicenseTypeInputText.getValue(),
						othis.oSurveyID,
						othis.oLILIClassMultiComboBox.getSelectedKeys().filter(Boolean),
						othis.oLILILicenseActivityMultiComboBox.getSelectedKeys().filter(Boolean),
						othis.oLILIGroupComboBox.getSelectedKeys().filter(Boolean),
						othis.oLILIDivisionComboBox.getSelectedKey(),
						othis.oLILISectionComboBox.getSelectedKey(),
						othis.oRef_id,
						othis.oLILIBusinessTypeComboBox.getSelectedKey(),
						othis.oLILIActivityDescriptionTextArea.getValue()
						);
	
				jQuery.when(oRequestFinishedDeferredcreateISIC).then(jQuery.proxy(function(oResponse) {
					if(oOpenBusyDialog){
						othis.closeBusyDialog();
					}				
					
				}, othis));
				
			}else{
				if(oOpenBusyDialog){
					othis.openBusyDialog();
				}

				var oRequestFinishedDeferredDeleteISICEntry = othis.oModelHelper.deleteISICEntry(othis.oRef_id);
	
				jQuery.when(oRequestFinishedDeferredDeleteISICEntry).then(jQuery.proxy(function(oResponse) {
					if(oOpenBusyDialog){
						othis.closeBusyDialog();
					}
					
					if(oOpenBusyDialog){
						othis.openBusyDialog();
					}

					var oRequestFinishedDeferredcreateISIC = othis.oModelHelper.createLILIBusiness(
							othis.oLicenseTypeInputText.getValue(),
							othis.oSurveyID,
							othis.oLILIClassMultiComboBox.getSelectedKeys().filter(Boolean),
							othis.oLILILicenseActivityMultiComboBox.getSelectedKeys().filter(Boolean),
							othis.oLILIGroupComboBox.getSelectedKeys().filter(Boolean),
							othis.oLILIDivisionComboBox.getSelectedKey(),
							othis.oLILISectionComboBox.getSelectedKey(),
							othis.oRef_id,
							othis.oLILIBusinessTypeComboBox.getSelectedKey(),
							othis.oLILIActivityDescriptionTextArea.getValue()
							);
	
					jQuery.when(oRequestFinishedDeferredcreateISIC).then(jQuery.proxy(function(oResponse) {
						if(oOpenBusyDialog){
							othis.closeBusyDialog();
						}						
					}, othis));					
					
				}, othis));				
				
				
			}
		}
		catch(error){
			if(oOpenBusyDialog){
				othis.closeBusyDialog();
			}
		}
		
		sap.m.MessageToast.show(othis.oModelHelper.getText("LicenseInfoSaved"), {duration : 1000});
	},	
};