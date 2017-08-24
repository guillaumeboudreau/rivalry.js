const Participant = require(`../participant`);
const Tournament = require(`../tournament`);

const t = new Tournament();

t.AddParticipant(new Participant("bob"));
t.AddParticipant(new Participant("john"));

t.GenerateBracket();