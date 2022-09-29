const express = require('express');
const { addLocation,
    getAllLocations,
    getLocation,
    updateLocation,
    deleteLocation
} = require('../controllers/locationController');

const router = express.Router();

router.post('/location', addLocation);
router.get('/locations', getAllLocations);
router.get('/location/:id', getLocation); // Single local
router.put('/location/:id', updateLocation); // uppdatera
router.delete('/location/:id', deleteLocation);


module.exports = {
    routes: router
}