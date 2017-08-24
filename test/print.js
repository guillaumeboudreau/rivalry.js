const Rivalry = require(`..`);

const tournament = new Rivalry.Tournament();

tournament.AddParticipant(new Rivalry.Participant("John", 1));
tournament.AddParticipant(new Rivalry.Participant("Bob", 2));
tournament.AddParticipant(new Rivalry.Participant("Wade", 3));
tournament.AddParticipant(new Rivalry.Participant("Jack", 4));
tournament.AddParticipant(new Rivalry.Participant("Potato", 5));
// etc...

// Generates the bracket
tournament.GenerateBracket();

// Gets the bracket
const bracket = tournament.Bracket;

// Gets the rootMatch
const rootMatch = bracket.RootMatch;

// The id of the match, usefull to see when printed
let mId = rootMatch.MatchId;

// Make sure that the participant exists, because it might be a match with no participant yet (Finale is empty at start)
if (rootMatch.FirstParticipant) {
    // The display name of the participant of rootMatch
    let displayName = rootMatch.FirstParticipant.DisplayName;
}

// The match id of the first participant's origin
let parentMatchId = rootMatch.Participant1Origin.MatchId;


/**
 * I GAVE YOU EXAMPLES OF WHAT I HAD IN MIND, THESE ARE NOT INDENTED OR WORKING FOR EVERY BRACKET BUT MORE TO SHOW 
 * WHAT I HAD IN MIND IN TERM OF LOGIC, YOU HAVE IT FOR A 2 PERSON TOURNAMENT AND A 4 PERSON TOURNAMENT AS AN EXAMPLE
 */


// ========= FIRST EXAMPLE WITH A 2 PERSON MATCH =============
console.log("========= FIRST EXAMPLE WITH A 2 PERSON MATCH =============");

const twoPlayerTournament = new Rivalry.Tournament();

twoPlayerTournament.AddParticipant(new Rivalry.Participant("Litochee"));
twoPlayerTournament.AddParticipant(new Rivalry.Participant("Rutenium"));

twoPlayerTournament.GenerateBracket();

const rmatch = twoPlayerTournament.Bracket.RootMatch;

console.log(`Match #${rmatch.MatchId} : ${rmatch.FirstParticipant.DisplayName} vs ${rmatch.SecondParticipant.DisplayName}`);


// ========= SECOND EXAMPLE WITH A 4 PERSON MATCH =============

console.log("========= SECOND EXAMPLE WITH A 4 PERSON MATCH =============");

const fourPlayerTournament = new Rivalry.Tournament();

fourPlayerTournament.AddParticipant(new Rivalry.Participant("Litochee"));
fourPlayerTournament.AddParticipant(new Rivalry.Participant("Rutenium"));
fourPlayerTournament.AddParticipant(new Rivalry.Participant("Rutenium's clone"));
fourPlayerTournament.AddParticipant(new Rivalry.Participant("Litochee's clone"));

fourPlayerTournament.GenerateBracket();

const roMatch = fourPlayerTournament.Bracket.RootMatch;

console.log(`Match #${roMatch.MatchId} : Winner of ${roMatch.Participant1Origin.MatchId} vs Winner of ${roMatch.Participant2Origin.MatchId}`);


const semiFinal1 = roMatch.Participant1Origin;
const semiFinal2 = roMatch.Participant2Origin;

console.log(`Match #${semiFinal1.MatchId} : ${semiFinal1.FirstParticipant.DisplayName} vs ${semiFinal1.SecondParticipant.DisplayName}`);
console.log(`Match #${semiFinal2.MatchId} : ${semiFinal2.FirstParticipant.DisplayName} vs ${semiFinal2.SecondParticipant.DisplayName}`);

