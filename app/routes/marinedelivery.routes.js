module.exports = app => {
  const postRouter = require("../controllers/MarineDeliveryPost.controller.js");
  const getRouter = require("../controllers/MarineDeliveryGet.controller.js");

  let routeBasePath = "/ascend-mda-svc/v1";

  // Create a Post Request
  app.post(routeBasePath+"/MN_GetOrdersmdaNew", postRouter.getOredersNew); 
  app.post(routeBasePath+"/MN_GetLoginUser", postRouter.login);
  app.post(routeBasePath+"/MN_ClearUserSession", postRouter.ClearUserSession);
  app.post(routeBasePath+"/MN_GetOrderStatus", postRouter.getOrderStatus);
  app.post(routeBasePath+"/MN_UpdateLogOutDetails", postRouter.logout);
  app.post(routeBasePath+"/MN_UpdateOrders", postRouter.saveOrder);
  app.post(routeBasePath+"/MN_UpdateOrderNotesFromApp", postRouter.updateOrderNote);
  app.post(routeBasePath+"/MN_CalcShipReading", postRouter.calcShipReading);
  app.post(routeBasePath+"/MN_UpdateShipmentDetails", postRouter.postShipment);
  app.post(routeBasePath+"/MN_UpdateINSiteTankVolume", postRouter.updateTankVolume);
  app.post(routeBasePath+"/MN_UpdateOrderStatusHistory", postRouter.updateOrderStatus);
  app.post(routeBasePath+"/MN_CalWeightVolumeQty", postRouter.calcWeightVolumeQty);
  app.post(routeBasePath+"/MN_UpdateAdHocVessel", postRouter.postAdHocVessel);
  app.post(routeBasePath+"/MN_CancelOrders", postRouter.updateCancelOrders);
  
  // Create a Get Request
  app.get(routeBasePath+"/MN_GetVehicle", getRouter.getVehicles);
  app.get(routeBasePath+"/MN_GetVessels", getRouter.getVessels);
  app.get(routeBasePath+"/MN_GetINSite", getRouter.getAllSites);
  app.get(routeBasePath+"/MN_GetProductSalesPLUButtons", getRouter.getShortcuts);
  app.get(routeBasePath+"/MN_GetMarineLoc", getRouter.getAllDestinations);
  app.get(routeBasePath+"/MN_GetDocLogo", getRouter.getDocLogo);
  app.get(routeBasePath+"/MN_GetInSiteTankSubCompartments", getRouter.getTankSubCompartments);
  app.get(routeBasePath+"/MN_GetINSiteTank", getRouter.getSourceTanks);
  app.get(routeBasePath+"/MN_GetVehicleCompartments", getRouter.getVehicleCompartments);
  app.get(routeBasePath+"/MN_GetVehicleSubCompartments", getRouter.getVehicleSubCompartments);
  app.get(routeBasePath+"/MN_Activity", getRouter.getActivityLog);
  app.get(routeBasePath+"/MN_GetOrderNotes", getRouter.getOrderNotes);
  app.get(routeBasePath+"/MN_GetProducts", getRouter.getProducts);
  
  app.get(routeBasePath+"/MN_GetDocMessage", getRouter.getDocMessages);


  app.get(routeBasePath+"/MN_GetARShipToTank", getRouter.getTanks);
  app.get(routeBasePath+"/MN_GetDrivers", getRouter.getDrivers);
   
  app.get(routeBasePath+"/MN_DeleteCloudAttachment", getRouter.deleteAttachment);
};