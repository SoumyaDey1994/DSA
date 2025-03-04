/**
 * You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 step or 2 steps.
 * In how many distinct ways can you climb to the top?
 * For a given n value
 */

function getNoOfWaysToReachTop(top, memo={}) {
    if(top === 1) return 1; // to reach 1, only 1 step
    if(top === 2) return 2; // to reach 2, there are 2 ways, 1+1 step or direct 2 steps

    // if(memo[top])
    //     return memo[top];

    // memo[top] = getNoOfWaysToReachTop(top-1, memo) + getNoOfWaysToReachTop(top-2, memo);
    // return memo[top];

    let approach1 = 1;
    let approach2 = 2;
    for(let index=2; index<top; index++) {
        let total = approach1 + approach2;
        approach1 = approach2;
        approach2 = total;
    }
    return approach2;
}

let top = 2;
let output = getNoOfWaysToReachTop(top);
console.log(`No of ways to climb level ${top} are: ${output}`);

top = 3;
output = getNoOfWaysToReachTop(top);
console.log(`No of ways to climb level ${top} are: ${output}`);

top = 4;
output = getNoOfWaysToReachTop(top);
console.log(`No of ways to climb level ${top} are: ${output}`);
