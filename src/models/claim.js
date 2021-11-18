const mongoose = require("mongoose");

const claimSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  asesor: {
      type: String,
      required: true
  },
  reclamo: {
      type: String,
      required: true
  },
  fecha: {
      type: String,
      required: true
  }
});

module.exports = mongoose.model('Reclamo', claimSchema);