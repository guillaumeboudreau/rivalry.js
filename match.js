const Participant = require(`./participant`);
const MatchState = require(`./matchstate`);
/**
 * Match class representing a match in the generated bracket
 */
class Match {
    /**
     * 
     * @param {?Participant} participant1 the first participant
     * @param {?Participant} participant2 the second participant
     */
    constructor(participant1 = null, participant2 = null) {
        /**
        * The first participant
        * @type {?Participant}
        * @private
        */
        this._participant1 = participant1;
        
        /**
        * The second participant
        * @type {?Participant}
        * @private
        */
        this._participant2 = participant2;

        /**
         * The state of the match
         * @type {MatchState}
         * @private
         */
        this._state = MatchState.WaitingOnPlayers;

        if (participant1 && participant2) {
            this._state = MatchState.Ready;
        }

        /**
         * The participant 1 origin (The match where he'll come from)
         * @type {Match}
         * @private
         */
        this._participant1Origin = null;

        /**
         * The participant 2 origin (The match where he'll come from)
         * @type {Match}
         * @private
         */
        this._participant2Origin = null;

        /**
         * The next match in the bracket for the winner
         * @type {Match}
         * @private
         */
        this._winnerNextMatch = null;

        /**
         * The next match in the bracket for the looser (If exists)
         * @type {?Match}
         * @private
         */
        this._looserNextMatch = null;

        /**
         * The match's id
         * @type {number}
         */
        this.MatchId = null;
    }

    /**
     * The first participant of the match
     * @type {Participant}
     * @readonly
     */
    get FirstParticipant() {
        return this._participant1;
    }

    /**
     * The second participant of the match
     * @type {Participant}
     * @readonly
     */
    get SecondParticipant() {
        return this._participant2;
    }
    
    /**
     * The match the winner will go to
     * @type {Match}
     * @readonly
     */
    get WinnerNextMatch() {
        return this._winnerNextMatch;
    }

    /**
     * The match the winner will go to
     * @type {Match}
     * @readonly
     */
    set WinnerNextMatch(match) {
        this._winnerNextMatch = match;
    }

    /**
     * The first participant's originating match
     * @type {Match}
     * @readonly
     */
    get Participant1Origin() {
        return this._participant1Origin;
    }

    /**
     * The first participant's originating match
     * @type {Match}
     * @readonly
     */
    set Participant1Origin(match) {
        this._participant1Origin = match;
    }

     /**
     * The second participant's originating match
     * @type {Match}
     * @readonly
     */
    get Participant2Origin() {
        return this._participant2Origin;
    }

    /**
     * The second participant's originating match
     * @type {Match}
     * @readonly
     */
    set Participant2Origin(match) {
        this._participant2Origin = match;
    }

    /**
     * @return {string} returns a format to print the match with its id and participants name
     */
    GetPrintableFormat() {
        let output = this.MatchId;
        if(this._participant1) {
            output = output + " P1 : " + this._participant1.DisplayName;
        }

        if(this._participant2) {
            output = output + " P2 : " + this._participant2.DisplayName;
        }
        return output;
    }
}

module.exports = Match;