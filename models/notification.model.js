const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    typeOfNotification: {
      type: String,
      enum: ["RECIPE_STATUS", "REPORT_EMAILED", "GROCERY_EMAILED"],
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["DELIVERED", "NOT_DELIVERED", "READ"],
      default: "NOT_DELIVERED",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
