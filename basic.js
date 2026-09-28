// Function to calculate the tip and total bill
function calculateBill(billAmount, tipPercentage) {
    // Calculate tip amount
    const tipAmount = billAmount * (tipPercentage / 100);
    
    // Calculate total bill
    const totalAmount = billAmount + tipAmount;
    
    // Display the results
    console.log(`Original Bill: $${billAmount.toFixed(2)}`);
    console.log(`Tip (${tipPercentage}%): $${tipAmount.toFixed(2)}`);
    console.log(`Total Bill: $${totalAmount.toFixed(2)}`);
}

// Example usage: A $50 bill with a 15% tip
calculateBill(50, 15);