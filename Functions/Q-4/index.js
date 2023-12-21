function calculateTax() {
	// Tax rates based on income ranges
	const taxRates = [
		{ range: 10000, rate: 0.1 },
		{ range: 30000, rate: 0.15 },
		{ range: 60000, rate: 0.2 },
		{ range: 100000, rate: 0.25 },
		{ range: Infinity, rate: 0.3 }
	];

	// Closure function to calculate tax based on income
	return function (income) {
		let tax = 0;

		// Iterate through tax rate ranges
		for (const { range, rate } of taxRates) {
			if (income <= range) {
				tax += income * rate;
				break;
			} else {
				tax += range * rate;
				income -= range;
			}
		}

		return tax;
	};
}

// Example usage
const calculateTaxForIncome = calculateTax();

// Test with various incomes
console.log("Tax for $8,000 income:", calculateTaxForIncome(8000));
console.log("Tax for $25,000 income:", calculateTaxForIncome(25000));
console.log("Tax for $50,000 income:", calculateTaxForIncome(50000));
console.log("Tax for $80,000 income:", calculateTaxForIncome(80000));
console.log("Tax for $120,000 income:", calculateTaxForIncome(120000));
console.log("Tax for $200,000 income:", calculateTaxForIncome(200000));
