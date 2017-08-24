/**
 * The tournament object 
 */
class Tournament {
    /**
     * @param {date} [startingDate] the starting date of the tournament 
     */
    constructor(startingDate) {
        /**
         * The starting date of the tournament
         * @type {date}
         * @private
         */
        this.startingDate = startingDate;

        this.participants = new Set();
    }

    /**
     * Adds a participant to the tournamanet
     * @param {Participant} participant 
     */
    AddParticipant(participant) {
        this.participants.add(participant);
    }

    /**
     * Returns the starting date of the tournament if there is one set
     * @type {?date}
     * @readonly
     */
    get StartingDate() {
        return this.startingDate;
    }
}