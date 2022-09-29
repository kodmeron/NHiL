class Location {
    constructor(id, lat, long, place, stand, user) {
        this.id = id;
        this.lat = lat;
        this.long = long;
        this.place = place;
        this.stand = stand;
        this.user = user;
    }
}

module.exports = Location;