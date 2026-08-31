/**
 * Date: 31st August, 2026
 * Problem Statement: Implement Retry with Exponential Backoff
 */

function fetch() {
  const pr = new Promise((resolve, reject) => {
    const randomVal = Math.floor(Math.random() * 5);

    if (randomVal === 2) {
      resolve("Success");
    } else {
      reject(`Failure value: ${randomVal}`);
    }
  });
  return pr;
}

function sleep(timeInMs) {
  return new Promise((resolve) => setTimeout(resolve, timeInMs));
}

async function backoff(noOfAttempts, timeInMs) {
  for (let i = 1; i <= noOfAttempts; i++) {
    try {
      console.log(`Fetching data, Attempt ${i}`);
      const result = await fetch();
      console.log(`Positive Reponse: ${result}`);
      break;
    } catch (err) {
      console.log(`Negetive Reponse: ${err}`);
      if (i === noOfAttempts) {
        console.log(`All Attempts exhausted`);
        break;
      } else {
        console.log(`Retrying after ${timeInMs} ms`);
        await sleep(timeInMs);
        timeInMs = timeInMs * 2;
      }
    }
  }
}

backoff(5, 1000);
