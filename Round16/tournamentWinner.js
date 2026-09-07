/**
 * Date: 7th August, 2026
 * Problem Statement: Tournament Winner
 * There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible.
 * Teams compete in a round robin, where each team faces off against all other teams.
 * Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team.
 * In each competition there's always one winner and one loser; there are no ties.
 * A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that receives the most amount of points.
 * 
 * Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament.

    Input Details:
    - competitions: An array of elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters.
    - results: An array containing information about the winner of each corresponding competition.
        - A 1 in the results array means that the home team won.
        - A 0 means that the away team won.

    Guarantees:
    - Exactly one team will win the tournament.
    - Each team will compete against all other teams exactly once.
    - The tournament will always have at least two teams.

    Sample Input:
        competitions = [
            ["HTML", "C#"],
            ["C#", "Python"],
            ["Python", "HTML"],
        ]
        results = [0, 0, 1]

    Sample Output: "Python"
        C# beats HTML, Python beats C#, and Python beats HTML.
        HTML - 0 points
        C# - 3 points
        Python - 6 points
*/
function findTournamentWinner(competitions, results) {
  if (!competitions || competitions.length === 0) return;
  if (
    !results ||
    results.length === 0 ||
    competitions.length !== results.length
  )
    return;

  const teamPointsMap = new Map();

  for (let i = 0; i < results.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    const winner = results[i] === 0 ? awayTeam : homeTeam;

    if (!teamPointsMap.has(homeTeam)) {
      teamPointsMap.set(homeTeam, 0);
    }

    if (!teamPointsMap.has(awayTeam)) {
      teamPointsMap.set(awayTeam, 0);
    }

    teamPointsMap.set(winner, teamPointsMap.get(winner) + 3);
  }

  const highestPoint = Math.max(...teamPointsMap.values());

  for (let [team, _] of teamPointsMap.entries()) {
    if (teamPointsMap.get(team) === highestPoint) {
      return team;
    }
  }

  return null;
}

let competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
let results = [0, 0, 1];
console.log(
  `Winner of tournament is: ${findTournamentWinner(competitions, results)}`,
);

competitions = [
  ["C", "C++"],
  ["C++", "Java"],
  ["Rust", "C++"],
  ["Go", "Rust"],
  ["Go", "C"],
  ["C++", "Go"],
  ["Rust", "Java"],
  ["Java", "Rust"],
  ["Java", "Go"],
  ["C", "Java"],
  ["Rust", "C"],
];
results = [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1];
console.log(
  `Winner of tournament is: ${findTournamentWinner(competitions, results)}`,
);
