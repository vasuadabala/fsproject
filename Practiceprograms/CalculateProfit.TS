//15. Write a function to calculate profit, if cost price and selling price are given as inputs.
//this method is input as a selling price and cost price and give us output
//total profit is difference between the selling price and cost price


function calculateProfit(sellingprice, costprice) {
  let totalprofit = sellingprice - costprice;
  console.log("total profit is ", totalprofit);
}

calculateProfit(2000, 1500);
calculateProfit(2700, 1700);
calculateProfit(1600, 1500);
