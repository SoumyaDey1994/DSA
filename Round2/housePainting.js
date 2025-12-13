/**
 * Date: 14th March, 2025
 * Problem Statement: House Painting
 * We are given N houses in a row and K colors to paint them. 
 * The first and last house colors are pre-decided. 
 * They may or may not be the same. 
 * The rule is: No two adjacent houses can have the same color.
 * Find the total number of valid ways to paint all houses while following these constraints.
 * Example 1:
 *      N = 4 (houses), K = 3 (colors)
 *      First house color = 1, Last house color = 2
 *      Output: Total valid ways = 3
 *      Explanation of ways:
 *              1 2 3 2, 1 2 1 2, 1 3 1 2 - Total(3)
 * Example 2:
 *      N = 4 (houses: 1,2,3,4), K = 3 (colors: 1,2,3)
 *      First house color = 1, Last house color = 2
 *      Output: Total valid ways = 2
 *      Explanation ways:
 *              1 2 3 1, 1 3 2 1 - Total(2)
 * Example 3:
 *      N = 3 (houses: 1,2,3), K = 2 (colors: 1,2)
 *      First house color = 1, Last house color = 1
 *      Output: Total valid ways = 1
 *      Explanation ways:
 *              1 2 1 - Total(1)
 * Example 4:
 *      N = 3 (houses: 1,2,3), K = 2 (colors: 1,2)
 *      First house color = 1, Last house color = 2
 *      Output: Total valid ways = 0
 *      Explanation ways: No option as middle house can't be with color 1 or 2
 */

function getWays(currHouse, prevColor, noOfHouses, noOfColors, lastColor) {
    // If prev color is same as las color
    // Then 2nd house can be painted with any of k-1 colors
    // Else, it can be done with any of k-2 colors (excluding lastColor & prevColor)
    if(currHouse === noOfHouses-1) {
        return prevColor === lastColor ? noOfColors-1: noOfColors-2;
    }

    let ways = 0;
    for(let currColor=1; currColor<=noOfColors; currColor++) {
        if(prevColor !== currColor) {
            const newWays = getWays(currHouse+1, currColor, noOfHouses, noOfColors, lastColor);
            ways += newWays;
        }
    }
    return ways;
}

function getNoOfWaysToPaint(noOfHouses, noOfColors, firstColor, lastColor) {
    if(noOfHouses === 0 || noOfColors === 0) return 0;

    // Get ways to color houses from 2nd to last
    // As first house color is already decided
    const ways = getWays(2, firstColor, noOfHouses, noOfColors, lastColor);
    return ways;
}

let noOfHouses = 4;
let noOfColors = 3;
let firstColor = 1, lastColor = 2;
let noOfWays = getNoOfWaysToPaint(noOfHouses, noOfColors, firstColor, lastColor);
console.log(`No of ways to paint ${noOfHouses} are: ${noOfWays}`);

noOfHouses = 4;
noOfColors = 3;
firstColor = 1, lastColor = 1;
noOfWays = getNoOfWaysToPaint(noOfHouses, noOfColors, firstColor, lastColor);
console.log(`No of ways to paint ${noOfHouses} are: ${noOfWays}`);

noOfHouses = 3;
noOfColors = 2;
firstColor = 1, lastColor = 1;
noOfWays = getNoOfWaysToPaint(noOfHouses, noOfColors, firstColor, lastColor);
console.log(`No of ways to paint ${noOfHouses} are: ${noOfWays}`);

noOfHouses = 3;
noOfColors = 2;
firstColor = 1, lastColor = 2;
noOfWays = getNoOfWaysToPaint(noOfHouses, noOfColors, firstColor, lastColor);
console.log(`No of ways to paint ${noOfHouses} are: ${noOfWays}`);

noOfHouses = 5;
noOfColors = 4;
firstColor = 1, lastColor = 2;
noOfWays = getNoOfWaysToPaint(noOfHouses, noOfColors, firstColor, lastColor);
console.log(`No of ways to paint ${noOfHouses} are: ${noOfWays}`);

noOfHouses = 5;
noOfColors = 4;
firstColor = 1, lastColor = 1;
noOfWays = getNoOfWaysToPaint(noOfHouses, noOfColors, firstColor, lastColor);
console.log(`No of ways to paint ${noOfHouses} are: ${noOfWays}`);