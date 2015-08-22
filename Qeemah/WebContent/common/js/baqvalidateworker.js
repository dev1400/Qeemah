jQuery.sap.declare("com.sagia.common.js.baqvalidateworker");

com.sagia.common.js.baqvalidateworker = {
		
	
	saveData : function(othis, oOpenBusyDialog){
		
		if(oOpenBusyDialog){
			othis.openBusyDialog();
		}

		if(othis.oBAQExists){
		try{			
			var questions = [];
			var answers = [];
			
			for(var i=0; i < othis.oTotalBAQQuestions; i++){
				 var oBAQAnswer = sap.ui.getCore().byId("idBAQAnswer"+i);
				 var oBAQuestion = sap.ui.getCore().byId("idBAQuestion"+i);
				 var oBAQFileUploader = sap.ui.getCore().byId("idBAQFileUploader"+i);
				 
				 othis.oModelHelper.uploadBAQAttachment(othis.oRef_id, oBAQuestion.data("idBAQuestion"+i), oBAQFileUploader);				 
				 
				 if(oBAQAnswer.getSelectedKey() !== ""){	
					 questions.push(oBAQuestion.data("idBAQuestion"+i));
					 answers.push(oBAQAnswer.getSelectedItem().getText());
				 }
				 
			}			
			
     		var oRequestFinishedDeferredDeleteBAQAnswers = othis.oModelHelper.deleteBAQEntry(othis.oRef_id);

			jQuery.when(oRequestFinishedDeferredDeleteBAQAnswers).then(jQuery.proxy(function(oResponse) {				
				try{			
					var questions = [];
					var answers = [];
					for(var i=0; i < othis.oTotalBAQQuestions; i++){
						 var oBAQAnswer = sap.ui.getCore().byId("idBAQAnswer"+i);
						 var oBAQuestion = sap.ui.getCore().byId("idBAQuestion"+i);
						 
						 if(oBAQAnswer.getSelectedKey() !== ""){	
					     questions.push(oBAQuestion.data("idBAQuestion"+i));
						 answers.push(oBAQAnswer.getSelectedItem().getText());
						 }
					}
					if(answers.length > 0){
						var oLanguage;
						if(othis.oLanguageSelect.getSelectedKey() === "EN")
						{
							oLanguage="E";
						}else{
							oLanguage="A";
						}
						var oRequestFinishedDeferredcreateBAQAnswers = othis.oModelHelper.createBAQAnswers(othis.oRef_id, 
								questions, 
								answers, 
								othis.oBICIFirstNameInputText.getValue(), 
								othis.oBICILastNameInputText.getValue(), 
								oLanguage);

						jQuery.when(oRequestFinishedDeferredcreateBAQAnswers).then(jQuery.proxy(function(oResponse) {							
							
							if(oOpenBusyDialog){
								othis.closeBusyDialog();
							}

							othis.oBAQError = false;
							
						}, othis));
					 }			
					
					}catch(err){
						if(oOpenBusyDialog){
							othis.closeBusyDialog();
						}
						othis.oBAQError = true;
					}					
				
			  }, othis));
			}catch(err){
				if(oOpenBusyDialog){
					othis.closeBusyDialog();
				}
			}
			
		}else{
			
			try{			
			var questions = [];
			var answers = [];
			for(var i=0; i < othis.oTotalBAQQuestions; i++){
				 var oBAQAnswer = sap.ui.getCore().byId("idBAQAnswer"+i);
				 var oBAQuestion = sap.ui.getCore().byId("idBAQuestion"+i);
				 
                 var oBAQFileUploader = sap.ui.getCore().byId("idBAQFileUploader"+i);
				 
                 othis.oModelHelper.uploadBAQAttachment(othis.oRef_id, oBAQuestion.data("idBAQuestion"+i), oBAQFileUploader);			 

				 if(oBAQAnswer.getSelectedKey() !== ""){		
					 questions.push(oBAQuestion.data("idBAQuestion"+i));
					 answers.push(oBAQAnswer.getSelectedItem().getText());
				 }
			}	
			
			if(answers.length > 0){
				var oLanguage;
				if(othis.oLanguageSelect.getSelectedKey() === "EN")
				{
					oLanguage="E";
				}else{
					oLanguage="A";
				}
				var oRequestFinishedDeferredcreateBAQAnswers = othis.oModelHelper.createBAQAnswers(
						othis.oRef_id, 
						questions, 
						answers, 
						othis.oBICIFirstNameInputText.getValue(), 
						othis.oBICILastNameInputText.getValue(), 
						oLanguage);

				jQuery.when(oRequestFinishedDeferredcreateBAQAnswers).then(jQuery.proxy(function(oResponse) {
			
					othis.oBAQError = false;
					if(oOpenBusyDialog){
						othis.closeBusyDialog();
					}
					
				}, othis));
			}
			
			}catch(err){
				
				othis.oBAQError = true;
				if(oOpenBusyDialog){
					othis.closeBusyDialog();
				}
			
			}
			
			
		}
		
		sap.m.MessageToast.show(othis.oModelHelper.getText("BAQInfoSaved"));
	},	
};