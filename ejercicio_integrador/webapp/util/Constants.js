sap.ui.define([], function (){
    'use strict';
    return {
        model:{
            app: "App"
        },
        main: {
            mock:"mock",
            urlBase: "com/proy/ejerciciointegrador",
            suppliersModel:"suppliersModel",
            country: "Country",
            city: "City",
            contactTitle: "ContactTitle",
            items: "items",
            idList: "idList",
            application:"Application",
            error: "Error",
            itemModel: "itemModel",
            routeSupplier:"RouteSupplier",
            northWindRoute: '/northwind/northwind.svc',
            mockRoute: "/localService/Suppliers.JSON",
            comboBoxCountry:"comboBoxCountry",
            comboBoxCity:"comboBoxCity",
            comboBoxContact:"comboBoxContact",
            suppliers: "/Suppliers"
        },
        supplier:{
            singleSupplierModel: "singleSupplierModel",
            routeMain: "RouteMain"
        }
    }
}, true)