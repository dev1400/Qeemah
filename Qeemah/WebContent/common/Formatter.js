jQuery.sap.declare("com.sagia.common.Formatter");
com.sagia.common.Formatter = {
		filterRegions : function(oValue){
			console.log(oValue);
			for(var i = 0; i < oValue.length ; i++){
				if(oValue.Bezei_reg !== "")
				{oValue = oValue.Bezei_reg;}
			}
			
			return oValue;
		}		
};