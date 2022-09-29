const firebase = require('../db');
const Location = require('../models/location');
const firestore = firebase.firestore();


const addLocation = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('locations').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllLocations = async (req, res, next) => {
    try {
        const locations = await firestore.collection('locations');
        const data = await locations.get();
        const locationsArray = [];
        if (data.empty) {
            res.status(404).send('No location record found');
        } else {
            data.forEach(doc => {
                const location = new Location(
                    doc.id,
                    doc.data().lat,
                    doc.data().long,
                    doc.data().place,
                    doc.data().stand,
                    doc.data().user
                );
                locationsArray.push(location);
            });
            res.send(locationsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getLocation = async (req, res, next) => {
    try {
        const id = req.params.id;
        const location = await firestore.collection('locations').doc(id);
        const data = await location.get();
        if (!data.exists) {
            res.status(404).send('location with the given ID not found');
        } else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateLocation = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const location = await firestore.collection('locations').doc(id);
        await location.update(data);
        res.send('Location record updated successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteLocation = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('locations').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addLocation,
    getAllLocations,
    getLocation,
    updateLocation,
    deleteLocation
}