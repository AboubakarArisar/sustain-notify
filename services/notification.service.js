const Notification = require("../models/notification.model");

exports.createNotification = async (data) => {
  return await Notification.create(data);
};

exports.getAllNotifications = async () => {
  return await Notification.find({ isDeleted: false });
};

exports.getNotificationById = async (id) => {
  return await Notification.findOne({ _id: id, isDeleted: false });
};

exports.updateNotification = async (id, data) => {
  return await Notification.findOneAndUpdate(
    { _id: id, isDeleted: false },
    data,
    { new: true }
  );
};

exports.deleteNotification = async (id) => {
  return await Notification.findOneAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true }
  );
};
