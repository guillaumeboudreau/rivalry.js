const Participant = require(`./participant`);

/**
 * Match class representing a match in the generated bracket
 */
class Match {
    /**
     * 
     * @param {Participant} participant1 the first participant
     * @param {Participant} participant2 the second participant
     */
    constructor(participant1, participant2) {
        /**
        * The first participant
        * @type {Participant}
        * @private
        */
        this.participant1 = participant1;
        /**
        * The second participant
        * @type {Participant}
        * @private
        */
        this.participant2 = participant2;
    }

    /**
     * The first participant of the match
     * @type {Participant}
     * @readonly
     */
    get FirstParticipant() {
        return this.participant1;
    }

    /**
     * The second participant of the match
     * @type {Participant}
     * @readonly
     */
    get SecondParticipant() {
        return this.participant2;
    }
}