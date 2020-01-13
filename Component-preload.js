/**
* This file was auto-generated by SAP Web IDE build and includes all
* the source files required by SAPUI5 runtime for performance optimization.
* PLEASE DO NOT EDIT THIS FILE!! Changes will be overwritten the next time the build is run.
*/
jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "Ztest_jaya/Component-preload",
	"modules": {
		"Ztest_jaya/view/View1.view.xml": "<mvc:View controllerName=\"Ztest_jaya.controller.View1\" xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\"\n\tdisplayBlock=\"true\" xmlns=\"sap.m\">\n\t<App>\n\t\t<pages>\n\t\t\t<Page title=\"{i18n>title}\">\n\t\t\t\t<content>\n\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t<List\n\t\t\t\t\titems=\"{mList>/}\"\n\t\t\t\t\theaderText=\"Products\">\n\t\t\t\t\t<items>\n\t\t\t\t\t\t<ObjectListItem\n\t\t\t\t\t\t\ttitle=\"{mList>Name}\"\n\t\t\t\t\t\t\ttype=\"Active\"\n\t\t\t\t\t\t\tpress=\"onListItemPress\"\n\t\t\t\t\t\t\tnumber=\"{\n\t\t\t\t\t\t\t\tparts:[{path:'Price'},{path:'CurrencyCode'}],\n\t\t\t\t\t\t\t\ttype: 'sap.ui.model.type.Currency',\n\t\t\t\t\t\t\t\tformatOptions: {showMeasure: false}\n\t\t\t\t\t\t\t}\"\n\t\t\t\t\t\t\tnumberUnit=\"{CurrencyCode}\">\n\t\t\t\t\t\t\t<firstStatus>\n\t\t\t\t\t\t\t\t<ObjectStatus\n\t\t\t\t\t\t\t\t\ttext=\"{Status}\"\n\t\t\t\t\t\t\t\t\tstate=\"{\n\t\t\t\t\t\t\t\t\t\tpath: 'Status',\n\t\t\t\t\t\t\t\t\t\tformatter: 'sap.m.sample.ObjectListItem.Formatter.status'\n\t\t\t\t\t\t\t\t\t}\" />\n\t\t\t\t\t\t\t</firstStatus>\n\t\t\t\t\t\t\t<attributes>\n\t\t\t\t\t\t\t\t<ObjectAttribute text=\"{WeightMeasure} {WeightUnit}\" />\n\t\t\t\t\t\t\t\t<ObjectAttribute text=\"{Width} x {Depth} x {Height} {DimUnit}\" />\n\t\t\t\t\t\t\t</attributes>\n\t\t\t\t\t\t</ObjectListItem>\n\t\t\t\t\t</items>\n\t\t\t\t</List>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<Button icon=\"sap-icon://write-new-document\" press=\"onPress\" class=\"empCreate\" />\n\t\t\t\t\t\n\t\t\t\n\t\t\t\t</content>\n\t\t\t</Page>\n\t\t</pages>\n\t</App>\n</mvc:View>",
		"Ztest_jaya/Component.js": "sap.ui.define([\n\t\"sap/ui/core/UIComponent\",\n\t\"sap/ui/Device\",\n\t\"Ztest_jaya/model/models\"\n], function(UIComponent, Device, models) {\n\t\"use strict\";\n\n\treturn UIComponent.extend(\"Ztest_jaya.Component\", {\n\n\t\tmetadata: {\n\t\t\tmanifest: \"json\"\n\t\t},\n\n\t\t/**\n\t\t * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.\n\t\t * @public\n\t\t * @override\n\t\t */\n\t\tinit: function() {\n\t\t\t// call the base component's init function\n\t\t\tUIComponent.prototype.init.apply(this, arguments);\n\n\t\t\t// set the device model\n\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\n\t\t}\n\t});\n});",
		"Ztest_jaya/controller/View1.controller.js": "sap.ui.define([\n\t\"sap/ui/core/mvc/Controller\"\n], function(Controller) {\n\t\"use strict\";\n\n\treturn Controller.extend(\"Ztest_jaya.controller.View1\", {\n\t\t\n\t\tonInit: function(){\n\t\t\tvar temp = [{ \"Name\" : \"A1\"},\n\t\t\t\t\t\t{\"Name\":\"A2\"},\n\t\t\t\t\t\t{\"Name\":\"A3\"},\n\t\t\t\t\t\t{\"Name\":\"A4\"},\n\t\t\t\t\t\t{\"Name\":\"A5\"},\n\t\t\t\t\t\t{\"Name\":\"A6\"},\n\t\t\t\t\t\t{\"Name\":\"A7\"},\n\t\t\t\t\t\t{\"Name\":\"A3\"},\n\t\t\t\t\t\t{\"Name\":\"A4\"},\n\t\t\t\t\t\t{\"Name\":\"A5\"},\n\t\t\t\t\t\t{\"Name\":\"A6\"},\n\t\t\t\t\t\t{\"Name\":\"A7\"}\n\t\t\t];\n\t\t\n\t\tvar oModel = new sap.ui.model.json.JSONModel();\n\t\toModel.setData(temp);\n\t\tthis.getView().setModel(oModel,\"mList\");\n\t\t\n\t\t}\n\n\t});\n});",
		"Ztest_jaya/model/models.js": "sap.ui.define([\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/Device\"\n], function(JSONModel, Device) {\n\t\"use strict\";\n\n\treturn {\n\n\t\tcreateDeviceModel: function() {\n\t\t\tvar oModel = new JSONModel(Device);\n\t\t\toModel.setDefaultBindingMode(\"OneWay\");\n\t\t\treturn oModel;\n\t\t}\n\n\t};\n});"
	}
});