const Match = require(`./match`);
const Participant = require(`./participant`);
const Bracket = require(`./bracket`);
/**
 * An helper used for bracket generation and anything related
 */
const BracketHelper = Object.freeze({
    /**
     * Generates a bracket for a list of participants
     * @param {Array<Participant>} parts the participants of the tournament
     * @return {Bracket} the resulting bracket for the participants
     */
    GenerateBracket: function (parts) {
        let matchId = 1;
        /**
         * Generates a tournament bracket recursivly
         * @param {Array<Participant>} participants 
         * @returns {Match} the match that is consider the root of the tournament
         */
        function generateBracketRecur(participants) {
            // Gets the current number of player
            const numPlayers = participants.length;
            // If we have 3 players we need to make a match that is seeded
            if (numPlayers === 3) {
                // Gets the first in the list and remove it afterwards.
                const firstParticipant = participants[0];
                participants.pop(firstParticipant);
                // Creates the seeded match (Containing the first participant only)
                const toReturn = new Match(firstParticipant);
                toReturn.MatchId = matchId;
                matchId++;
                // Reruns the algorithm with the remaning participants
                const secondOrigin = generateBracketRecur(participants);
                // Links them togheter
                toReturn.Participant2Origin = secondOrigin;
                secondOrigin.WinnerNextMatch = toReturn;
                return toReturn;
            }
            // If we have 2 players we need to stop the recursivity and return a match with those two players
            if (numPlayers === 2) {
                // Gets the two participants out of the set
                const firstParticipant = participants[0];
                const secondParticipant = participants[1];
                // Create the match with those two participant
                const toReturn = new Match(firstParticipant, secondParticipant);
                toReturn.MatchId = matchId;
                matchId++;
                return toReturn;
            }

            // Divide the number of player by two
            const firstHalfOfPlayers = Math.ceil(numPlayers / 2);

            const leftSide = participants.slice(0, firstHalfOfPlayers);
            const rightSide = participants.slice(firstHalfOfPlayers, participants.length);

            // Generate the two matches that represent both our sides
            const leftMatch = generateBracketRecur(leftSide);
            const rightMatch = generateBracketRecur(rightSide);

            // Create a match that will join the two created above
            const joiningMatch = new Match();
            joiningMatch.MatchId = matchId;
            matchId++;

            // Join them togheter
            joiningMatch.Participant1Origin = leftMatch;
            joiningMatch.Participant2Origin = rightMatch;
            leftMatch.WinnerNextMatch = joiningMatch;
            rightMatch.WinnerNextMatch = joiningMatch;

            return joiningMatch;
        }
        
        return new Bracket(generateBracketRecur(parts));
    },
});

module.exports = BracketHelper;