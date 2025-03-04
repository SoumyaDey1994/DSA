/**
 * Given a list of orders with productId
 * Find the top k products with most sold
 *
 * Input: [
 *  {productId: 123, qty:1},
 *  {productId: 456, qty:2},
 *  {productId: 789, qty:2},
 *  {productId: 123, qty:3},
 *  {productId: 456, qty:1},
 *  {productId: 345, qty:4},
 *  {productId: 123, qty:2},
 * ]
 * k=2,
 * Output: [(123,6), (345,4), (456, 3), (789,2)]
 */
function getTopKProducts(orders, k, top = true) {
  const freqMap = new Map(); // map to store productId: quanity
  //TC: O(n)- n is n of oders
  for (let order of orders) {
    const id = order["productId"];
    //if order exists, increase quantity
    if (freqMap.has(id)) {
      const qty = freqMap.get(id);
      freqMap.set(id, qty + order.qty);
    } else {
      freqMap.set(id, order.qty);
    }
  }
  // console.log("Map: ", freqMap);
  // Push to queue of length k & sort (ASC)
  // ASC sort against quantity [TC- O(klogk)]
  const heapify = () =>
    topProduts.sort((ele1, ele2) => {
      return top ? ele1[1] - ele2[1] : ele2[1] - ele1[1];
    });

  const topProduts = [];
  // TC: O(n)- n is n of oders
  for (let [productId, qty] of freqMap.entries()) {
    if (topProduts.length < k) {
      topProduts.push([productId, qty]);
      heapify();
    } else if (top && topProduts[0][1] < qty) {
      topProduts[0] = [productId, qty];
      heapify();
    } else if(!top && topProduts[0][1] > qty) {
        topProduts[0] = [productId, qty];
        heapify();
    }
  }
  return topProduts.reverse(); // Overall TC: O(n * klogk)
}

const orders = [
  { productId: 123, qty: 1 },
  { productId: 456, qty: 2 },
  { productId: 789, qty: 2 },
  { productId: 123, qty: 3 },
  { productId: 456, qty: 1 },
  { productId: 345, qty: 4 },
  { productId: 123, qty: 2 },
];

const k = 3;
const topProducts = getTopKProducts(orders, k);
const bottomProducts = getTopKProducts(orders, k, false);
console.log(`Heighest Sold: ${topProducts}`);
console.log(`Lowest Sold: ${bottomProducts}`);
