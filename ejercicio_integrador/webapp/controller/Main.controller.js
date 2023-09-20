sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/proy/ejerciciointegrador/util/Constants",
    "com/proy/ejerciciointegrador/util/Formatter",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
    "com/proy/ejerciciointegrador/util/Commons",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,Constants,Formatter,Filter,FilterOperator,Commons) {
        "use strict";

        return Controller.extend("com.proy.ejerciciointegrador.controller.Main", {            
            Formatter: Formatter,
            onInit: function () {                
                const url = sap.ui.require.toUrl(Constants.main.urlBase) + Constants.main.northWindRoute;
                this._model = new sap.ui.model.odata.v2.ODataModel(url,{
                    json:true,
                    headers: {
                        "DataServiceVersion": "2.0",
                        "Cache-Control":"no-cache, no-store",
                        "Pragma": "no-cache"
                    },
                    useBatch: false
                });
                
                
                this._model.read(Constants.main.suppliers, {
                    async:true,
                    success: jQuery.proxy(this.success, this),
                    error: jQuery.proxy(this.error, this)
                })
                
                                
                // Mock
                const sPath = jQuery.sap.getModulePath(Constants.main.urlBase) + Constants.main.mockRoute;
                var oModel = new JSONModel();                
                oModel.loadData(sPath);                
                this.getView().setModel(oModel,Constants.main.mock);                
            },

            success: function(oData){                
                const oModel = new JSONModel(oData.results);
                this.getView().setModel(oModel, Constants.main.suppliersModel);
            },

            error: function() {
                alert(Constants.main.error)
            },

            onSearchCountry: function (oEvent) {
                // add filter for search
                var aFilters = [];
                var sQuery = oEvent.getSource().getValue();                
                if (sQuery && sQuery.length > 0) {                    
                    var filter =new Filter(Constants.main.country, FilterOperator.Contains, sQuery);                   
                    aFilters.push(filter);
                }
    
                // update list binding
                var oList = this.byId(Constants.main.idList);
                var oBinding = oList.getBinding(Constants.main.items);
                oBinding.filter(aFilters,Constants.main.application);
            },
            onSearchCity: function (oEvent) {
                // add filter for search
                var aFilters = [];
                var sQuery = oEvent.getSource().getValue();                
                if (sQuery && sQuery.length > 0) {                    
                    var filter =new Filter(Constants.main.city, FilterOperator.Contains, sQuery);                   
                    aFilters.push(filter);
                }
    
                // update list binding
                var oList = this.byId(Constants.main.idList);
                var oBinding = oList.getBinding(Constants.main.items);
                oBinding.filter(aFilters, Constants.main.application);
            },

            onSearchContact: function (oEvent) {
                // add filter for search
                var aFilters = [];
                var sQuery = oEvent.getSource().getValue();                
                if (sQuery && sQuery.length > 0) {                    
                    var filter =new Filter(Constants.main.contactTitle, FilterOperator.Contains, sQuery);                   
                    aFilters.push(filter);
                }
    
                // update list binding
                var oList = this.byId(Constants.main.idList);
                var oBinding = oList.getBinding(Constants.main.items);
                oBinding.filter(aFilters, Constants.main.application);
            },

            onItemPress: function(oEvent){
                const oItem = oEvent.getSource().getBindingContext(Constants.main.suppliersModel);
                const sPath = oItem.getPath();
                
                const oItemSeleccionado = this.getView().getModel(Constants.main.suppliersModel).getProperty(sPath);                
                const oModelItem = new JSONModel(oItemSeleccionado);

                this.getOwnerComponent().setModel(oModelItem, Constants.main.itemModel);

                Commons.navTo(this,Constants.main.routeSupplier);
            },
            clearFilter: function (){                
                var aFilters = [];
                var oList = this.byId(Constants.main.idList);
                var oBinding = oList.getBinding(Constants.main.items);
                oBinding.filter(aFilters, Constants.main.application);

                this.byId(Constants.main.comboBoxCountry).setValue("");
                this.byId(Constants.main.comboBoxCity).setValue("");
                this.byId(Constants.main.comboBoxContact).setValue("");
            }
        });
    });

    