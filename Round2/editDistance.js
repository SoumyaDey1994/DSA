/**
 * Date: 2nd March, 2025
 * Edit/Min Distance (Levenshtein Distance) - Efficient Solution
 * Problem Statement:
 *      The Edit Distance problem requires finding the minimum number of operations needed to convert one string into another. 
 * The allowed operations are:
 *      Insert a character
 *      Delete a character
 *      Replace a character
 * Example 1:
 *      input: word1="horse", word2="ros"
 *      output: 3
 * Example 2:
 *      input: word1="intention", word2="execution"
 *      output: 3
 */

function getMinDistance(word1, word2) {
    const dp = Array(word2.length + 1).fill(0);

    for(let i=0; i<=word2.length; i++) {
        dp[i] = i;
    }
    for(let i=1; i<=word1.length; i++) {
        let prevDiag = dp[0];
        dp[0] = i;
        // console.log("PrevD: ", prevDiag);
        for(let j=1; j<=word2.length; j++) {
            let temp = dp[j];
            // console.log("Temp: ", dp[j]);
            // console.log("Chars to Compare: ", word1[i-1], word2[j-1]);
            if(word1[i-1] === word2[j-1]) { // No change required
                // console.log(`Match found`);
                // console.log("J at match: ", j)
                dp[j] = prevDiag;
            } else {
                // console.log("Min Options: ", dp[j], dp[j-1], prevDiag);
                dp[j] = 1 + Math.min(dp[j], dp[j-1], prevDiag);
            }
            prevDiag = temp;
        }
        // console.log(`DP List post ${i} iteration: `,dp);
    }
    // console.log("Final DP List: ",dp);
    return dp[word2.length];
}

let word1 = "horse", word2 = "ros";
let output = getMinDistance(word1, word2);
console.log(`Min distance b/w ${word1} & ${word2} are ${output}`);

word1 = "intuition", word2 = "execution";
output = getMinDistance(word1, word2);
console.log(`Min distance b/w ${word1} & ${word2} are ${output}`);
