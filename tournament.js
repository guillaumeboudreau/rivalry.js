const BracketHelper = require(`./brackethelper`);

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
         * @type {Array<Participant>}
         * @private
         * @readonly
         */
        this._participants = [];

        /**
         * The currently generated bracket of the tournament
         * @type {Bracket}
         * @private
         */
        this._bracket = null;
    }

    /**
     * Adds a participant to the tournamanet
     * @param {Participant} participant 
     */
    AddParticipant(participant) {
        this._participants.push(participant);
    }

    /**
     * Generates a bracket with the current state of the tournament, call this once all your participants are added
     * If you end up adding more participants after the bracket has been generated, just call this once more and the bracket will be updated
     */
    GenerateBracket() {
        this._bracket = BracketHelper.GenerateBracket(this._participants);
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

module.exports = Tournament;