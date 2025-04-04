/**
 * Date: 4th April, 2025
 * Problem Statement: Top K Most Sold Products
 * We are given a list of product orders. Each order contains a product name (string).
 * Our task is to find the top K most frequently sold products from this list.
 * If multiple products have the same frequency,
 * you can return them in any order or sort them lexicographically (based on requirements).
 * Assume all product names are case-sensitive.
 * Input:
 *      orders: an array of strings, where each string represents a product sold.
 *      k: an integer representing the number of top products to return.
 * Goal:
 *      Return an array of the top K most frequently sold products.
 * Example 1:
 *      Input:
 *          orders = ["apple", "banana", "apple", "orange", "banana", "apple"]
 *          k = 2
 *      Output:
 *          ["apple", "banana"]
 */
function getMostSoldProducts(orders, k = 1) {
  if (!orders || orders.length === 0) return [];
  // if order count < k, return unique products
  if (orders.length <= k) return [...new Set(orders)];

  // Prepare {product: orderCount} map
  const freqMap = new Map();
  for (let product of orders) {
    freqMap.set(product, (freqMap.get(product) || 0) + 1);
  }

  const productHeap = [];
  // function to sort products based on order count
  const sortHeap = () =>
    productHeap.sort((p1, p2) => p1["count"] - p2["count"]);

  for (let [product, count] of freqMap.entries()) {
    productHeap.push({ product, count });
    sortHeap();
    // Remove products from front to have most sold products at end
    if (productHeap.length > k) {
      productHeap.shift();
    }
  }

  return JSON.stringify(productHeap.reverse());
}

let orders = ["apple", "banana", "apple", "orange", "banana", "apple"],
  k = 2;
console.log(`Top ${k} sold products are: ${getMostSoldProducts(orders, k)}`);

(orders = ["apple", "banana", "apple"]), (k = 1);
console.log(`Top ${k} sold products are: ${getMostSoldProducts(orders, k)}`);

(orders = [
  "apple",
  "banana",
  "apple",
  "grape",
  "watermelon",
  "grape",
  "guava",
  "grape",
  "watermelon",
  "banana",
  "banana",
  "watermelon",
  "grape",
  "papaya",
]),
  (k = 3);
console.log(`Top ${k} sold products are: ${getMostSoldProducts(orders, k)}`);
