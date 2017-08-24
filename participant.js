/**
 * Class representing the participant that is used to join tournaments.
 */
class Participant {
    /**
     * 
     * @param {string} displayName The display name to be used
     * @param {any} [data] Custom data that you can store in the participant to use as you wish 
     */
    constructor(displayName, data = {}) {
        this.displayName = displayName;
        this.data = data;
    }

    /**
     * Returns the display name of the participant
     * @type {string}
     * @readonly
     */
    get DisplayName() {
        return this.displayName;
    }

    /**
     * Returns the custom data that was used when creating the Participant
     * @type {any}
     * @readonly
     */
    get Data() {
        return this.data;
    }
}

module.exports = Participant;