const express = require("express");
const notificationController = require("../controllers//notification.controller");

const router = express.Router();

router.post("/", notificationController.createNotification);
router.get("/", notificationController.getAllNotifications);
router.get("/:id", notificationController.getNotificationById);
router.put("/:id", notificationController.updateNotification);
router.delete("/:id", notificationController.deleteNotification);

module.exports = router;
