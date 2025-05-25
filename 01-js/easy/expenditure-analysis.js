/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  // Loop through each transaction
  for (const transaction of transactions) {
    const { category, price } = transaction;

    // If category already exists in the map, add to its total
    if (categoryMap[category]) {
      categoryMap[category] += price;
    } 
    // Otherwise, initialize it with the current price
    else {
      categoryMap[category] = price;
    }
  }

  // Convert the map into an array of objects
  const result = Object.keys(categoryMap).map((category) => ({
    category,
    totalSpent: categoryMap[category],
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
