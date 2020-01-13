sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Ztest_jaya.controller.View1", {
		
		onInit: function(){
			var temp = [{ "Name" : "A1"},
						{"Name":"A2"},
						{"Name":"A3"},
						{"Name":"A4"},
						{"Name":"A5"},
						{"Name":"A6"},
						{"Name":"A7"},
						{"Name":"A3"},
						{"Name":"A4"},
						{"Name":"A5"},
						{"Name":"A6"},
						{"Name":"A7"}
			];
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(temp);
		this.getView().setModel(oModel,"mList");
		
		}

	});
});