const mongoose = require("mongoose");

const ConverstaionSchema = mongoose.Schema({
    members: {
        type: Array,
      },
    },
    { timestamps: true }
  );

module.exports = mongoose.model("Conversation", ConverstaionSchema);
