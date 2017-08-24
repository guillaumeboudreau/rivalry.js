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
        this._startingDate = startingDate;

        /**
         * The creation date of the tournament
         * @type {date}
         * @private
         * @readonly
         */
        this._creationDate = Date.now();

        /**
         * The list of participants in the tournament
         * @type {Set<Participant>}
         * @private
         * @readonly
         */
        this._participants = new Set();
    }

    /**
     * Adds a participant to the tournamanet
     * @param {Participant} participant 
     */
    AddParticipant(participant) {
        this._participants.add(participant);
    }

    /**
     * Generates a bracket with the current state of the tournament
     * @return {Bracket}
     */
    GenerateBracket() {

    }

    /**
     * Returns the starting date of the tournament if there is one set
     * @type {?date}
     * @readonly
     */
    get StartingDate() {
        return this._startingDate;
    }

    /**
     * Returns the creation date of the tournament
     * @type {date}
     * @readonly
     */
    get CreationDate() {
        return this._creationDate;
    }
}