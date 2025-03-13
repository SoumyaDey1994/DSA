/**
 * Date: 13th March, 2025
 * Problem Statement: Space-craft Safe Path Traversal
 * Given N planets & their corresponding distance from start & radius of gravity
 * Identify the safe paths/zones from which spacecraft can travel
 * without crossing any of planets gravity zone
 * Example:
 *      n = 5
 *      arr = [
 *          [6, 2],
 *          [8, 3],
 *          [14, 2]
 *          [18, 2]
 *          [24, 4],
 *      ]
 *     output = [
 *          [0, 3],
 *          [11, 12],
 *          [14, 16],
 *          [28, Infinity]
 *      ]
 */
function getMergedDangerZones(dangerZones) {
  const output = [dangerZones[0]];
  for (let i = 1; i < dangerZones.length; i++) {
    const prev = output[output.length - 1];
    const curr = dangerZones[i];

    if (prev[1] >= curr[0]) {
      prev[0] = Math.min(prev[0], curr[0]);
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      output.push(curr);
    }
  }
  return output;
}
/**
 * Overall Time Complexity - O(N), N = no of planets
 * Overall Space Complexity - O(N), N = no of zones/planets
 * @param {*} numOfPlanets
 * @param {*} gravityZones
 * @returns
 */
function getSafePaths(numOfPlanets, gravityZones) {
  const dangerZones = [];
  // Get danger zones by subtract & add gravity regions both size
  for (let i = 0; i < numOfPlanets; i++) {
    // O(n)
    const zone = gravityZones[i];
    const dzoneStart = zone[0] - zone[1];
    const dzoneEnd = zone[0] + zone[1];
    dangerZones.push([dzoneStart, dzoneEnd]);
  }
  // console.log("Danger Zones: ", dangerZones);
  const rolledUpDangerZones = getMergedDangerZones(dangerZones); // O(n)
  // console.log("Danger Zones: ", rolledUpDangerZones);

  let safeZones = [[0]];
  // get safe zones out of danger zones
  for (let zone = 0; zone < rolledUpDangerZones.length; zone++) {
    // O(n)
    const curr = safeZones[safeZones.length - 1];
    curr.push(rolledUpDangerZones[zone][0]);
    const next = rolledUpDangerZones[zone][1];
    safeZones.push([next]);
  }
  //assign Infinity to last zone & return safeZones
  const lastSafeZone = safeZones[safeZones.length - 1];
  lastSafeZone.push(Infinity);
  return safeZones;
}

let numOfPlanets = 5;
let gravityZones = [
  [6, 2],
  [7, 4],
  [13, 1],
  [18, 2],
  [24, 4],
];

const safeZones = getSafePaths(numOfPlanets, gravityZones);
console.log(`Safe Zones are: [${safeZones.map((zone) => `[${zone}]`)}]`);
