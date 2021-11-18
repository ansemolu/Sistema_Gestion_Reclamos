const express = require("express");
const claimSchema = require("../models/claim");

const routerClaim = express.Router();

//crear reclamo

routerClaim.post('/claims', (req, res) => {
    const user = claimSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//obtener todos los reclamos
routerClaim.get("/claims", (req, res) => {
    claimSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// buscar un reclamo

routerClaim.get("/claims/:id", (req, res) => {
    const { id } = req.params;
    claimSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// borrar un registro de reclamo

routerClaim.delete("/claims/:id", (req, res) => {
    const { id } = req.params;
    claimSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// actualizar un reclamo

routerClaim.put("/claims/:id", (req, res) => {
    const { id } = req.params;
    const { nombre,dni,email,asesor,reclamo,fecha } = req.body;
    claimSchema
        .updateOne({ _id: id }, { $set: { nombre,dni,email,asesor,reclamo,fecha } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = routerClaim;