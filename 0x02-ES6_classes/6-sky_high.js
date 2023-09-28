import Building from './5-building.js';

class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft); // Call the constructor of the parent class (Building)
        this._floors = floors;
    }

    get floors() {
        return this._floors;
    }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this.floors} floors.`;
    }
}

export default SkyHighBuilding;
