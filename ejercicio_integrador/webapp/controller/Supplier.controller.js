sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/proy/ejerciciointegrador/util/Constants",
    "com/proy/ejerciciointegrador/util/Commons",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,Constants,Commons) {
        "use strict";

        return Controller.extend("com.proy.ejerciciointegrador.controller.Supplier", {
            onInit: function () {
                // var oModel = new JSONModel(sap.ui.getCore().getModel(Constants.main.itemModel).getData());
                // this.getView().setModel(oModel,Constants.supplier.singleSupplierModel);
            },

            goBack: function () {
                Commons.navBack();
            }
        });
    });
