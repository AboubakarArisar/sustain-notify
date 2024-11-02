const catchAsyncError = require("../middlewares/catchAsyncError");
const notificationService = require("../services/notification.service");

exports.createNotification = catchAsyncError(async (req, res) => {
  const notification = await notificationService.createNotification(req.body);
  res.status(201).json({ success: true, notification });
});

exports.getAllNotifications = catchAsyncError(async (req, res) => {
  const notifications = await notificationService.getAllNotifications();
  res.status(200).json({ success: true, notifications });
});

exports.getNotificationById = catchAsyncError(async (req, res) => {
  const notification = await notificationService.getNotificationById(
    req.params.id
  );
  if (!notification) {
    return res
      .status(404)
      .json({ success: false, message: "Notification not found" });
  }
  res.status(200).json({ success: true, notification });
});

exports.updateNotification = catchAsyncError(async (req, res) => {
  const notification = await notificationService.updateNotification(
    req.params.id,
    req.body
  );
  if (!notification) {
    return res
      .status(404)
      .json({ success: false, message: "Notification not found" });
  }
  res.status(200).json({ success: true, notification });
});

exports.deleteNotification = catchAsyncError(async (req, res) => {
  const notification = await notificationService.deleteNotification(
    req.params.id
  );
  if (!notification) {
    return res
      .status(404)
      .json({ success: false, message: "Notification not found" });
  }
  res
    .status(200)
    .json({ success: true, message: "Notification marked as deleted" });
});
