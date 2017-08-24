const Participant = require(`../participant`);
const BracketHelper = require(`../bracketHelper`);

const parts = new Set();

parts.add(new Participant("1"));
parts.add(new Participant("2"));
parts.add(new Participant("3"));
parts.add(new Participant("4"));
parts.add(new Participant("5"));
parts.add(new Participant("6"));
parts.add(new Participant("7"));
parts.add(new Participant("8"));
parts.add(new Participant("9"));
parts.add(new Participant("10"));
parts.add(new Participant("11"));
parts.add(new Participant("12"));
parts.add(new Participant("13"));
parts.add(new Participant("14"));
parts.add(new Participant("15"));

const test = BracketHelper.GenerateBracket(parts);
BracketHelper.PrintBracket(test);