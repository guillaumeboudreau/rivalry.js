/**
 * Enum for the state of the match
 * @enum {number}
 * @readonly
 */
const MatchState = Object.freeze({
    WaitingOnPlayers : 0,
    Ready : 1,
    Done : 2
});

module.exports = MatchState;