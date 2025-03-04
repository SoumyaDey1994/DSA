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

function getTopKSoldProducts(orderList, k) {
    const qtyMap = new Map();
    for(let order of orderList) {
        const productId = order.productId;
        // Increase the qty if product exists in Map
        if(qtyMap.has(productId)) {
            const qty = qtyMap.get(productId);
            qtyMap.set(productId, qty + order.qty);
        } else {
            // Add product to Map
            qtyMap.set(productId, order.qty);
        }
    }
    const heapify = () => maxHeap.sort((a, b) => a[1] - b[1]);

    const maxHeap = [];
    for(let [id, qty] of qtyMap) {
        if(maxHeap.length < k) {
            maxHeap.push([id, qty]);
            heapify();
        } else if(maxHeap[0][1] < qty) {
            maxHeap[0] = [id, qty];
            heapify();
        }
    }
    return maxHeap.reverse();
}

const orders = [
    {productId: 123, qty:1}, 
    {productId: 456, qty:2}, 
    {productId: 789, qty:2}, 
    {productId: 123, qty:3},
    {productId: 456, qty:1}, 
    {productId: 345, qty:4}, 
    {productId: 123, qty:2},
]

const k = 3;
const topProducts = getTopKSoldProducts(orders, k);
console.log(topProducts);
