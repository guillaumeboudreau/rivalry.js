const MatchState = require(`./matchstate`);
const Match = require(`./match`);

class Bracket {
    /**
     * 
     * @param {Match} root The root match of the bracket
     */
    constructor(root) {
        /**
         * List of the matches in the bracket
         * @type {Array<Match>}
         * @private
         */
        this._matches = [];


        /**
         * The root match of the bracket
         * @type {Match}
         * @private
         */
        this._root = root;
        this._buildMatchList(root);
    }

    /**
     * Builds the list of match that we need 
     * @param {Match} match
     */
    _buildMatchList(match) {
        if (match) {
            this._matches.push(match);
            this._buildMatchList(match.Participant1Origin);
            this._buildMatchList(match.Participant2Origin);
        }
    }


    /**
     * Returns a list of the matches that are currently ready to be played
     * @return {Array<Match>}
     */
    GetReadyMatches() {
        return this._matches.filter((value) => { return value === MatchState.Ready; });
    }

    /**
     * Returns the root match of the bracket
    * @type {Match}
    * @readonly
    */
    get RootMatch() {
        return this._root;
    }
}

module.exports = Bracket;