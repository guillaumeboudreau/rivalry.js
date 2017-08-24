const Match = require(`./match`);
const Participant = require(`./participant`);

/**
 * An helper used for bracket generation and anything related
 */
const BracketHelper = Object.freeze({
    /**
     * Generates a bracket for a list of participants
     * @param {Set<Participant>} parts the participants of the tournament
     * @return {Match} the match that is the finale of the tournament
     */
    GenerateBracket: function (parts) {
        let matchId = 1;
        /**
         * Generates a tournament bracket recursivly
         * @param {number} numPlayers 
         * @returns {Match} the match that is consider the root of the tournament
         */
        function generateBracketRecur(participants) {
            // Gets the current number of player
            const numPlayers = participants.size;
            // If we have 3 players we need to make a match that is seeded
            if (numPlayers === 3) {
                // Gets the first in the list and remove it afterwards.
                const firstParticipant = participants.values().next().value;
                participants.delete(firstParticipant);
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
                const it = participants.values();
                const firstParticipant = it.next().value;
                const secondParticipant = it.next().value;
                // Create the match with those two participant
                const toReturn = new Match(firstParticipant, secondParticipant);
                toReturn.MatchId = matchId;
                matchId++;
                return toReturn;
            }

            // Creates two empty set
            const leftSide = new Set();
            const rightSide = new Set();
            // Divide the number of player by two
            const firstHalfOfPlayers = Math.ceil(numPlayers / 2);
            let i = 0;
            // Itterate trough the participants
            participants.forEach((p) => {
                // If we are currently short of players for the first half, add them there, otherwise, add them on the other side
                if (i < firstHalfOfPlayers) {
                    leftSide.add(p);
                } else {
                    rightSide.add(p);
                }
                i++;
            });

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

        return generateBracketRecur(parts);
    },
    /**
    * Prints the bracket for a tournament
    * @param {Match} match The root of the bracket you want to prints
    */
    PrintBracket: function (match) {
        const nextRow = [];

        // If we are not an array (The root) just create an array with the match inside
        if (!Array.isArray(match)) {
            match = [match];
        }

        let output = `|`;
        // For each match that we have to print for this row
        match.forEach((m) => {
            // Add the match to the output
            output = `${output} ${m.GetPrintableFormat()} |`;
            // If our match has children matches, adds them to the nextRow
            if (m.Participant1Origin) nextRow.push(m.Participant1Origin);
            if (m.Participant2Origin) nextRow.push(m.Participant2Origin);
        });

        // Outputs the result of the current row
        console.log(output);

        // If we have matches in our nextRow, print it
        if (nextRow && nextRow.length) {
            BracketHelper.PrintBracket(nextRow);
        }
    }
});

module.exports = BracketHelper;