import React, { useState } from 'react';

const TaxCalculator = () => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState(null);

  const calculateTax = (income) => {
    let calculatedTax = 0;

    if (income <= 300000) {
        calculatedTax = 0;
      } else if (income <= 700000) {
        calculatedTax = (income - 300000) * 0.05;
      } else if (income <= 1000000) {
        calculatedTax = (income - 700000) * 0.10 + 20000; //5% of 4 lakh (300000 to 700000)
      } else if (income <= 1200000) {
        calculatedTax = (income - 1000000) * 0.15 + 70000; //10% of 3 lakh + 5% of 4 lakh
      } else if (income <= 1500000) {
        calculatedTax = (income - 1200000) * 0.20 + 130000; //15% of 2 lakh + 10% of 3 lakh + 5% of 4 lakh
      } else {
        calculatedTax = (income - 1500000) * 0.30 + 230000; //20% of 3 lakh + 15% of 2 lakh + 10% of 3 lakh + 5% of 4 lakh
      }
  
      return calculatedTax;
    };

  const handleCalculate = () => {
    const incomeValue = parseFloat(income);
    if (!isNaN(incomeValue) && incomeValue > 0) {
      setTax(calculateTax(incomeValue));
    } else {
      setTax(null);
    }
  };

  return (
    <div>
      <h1>Budget 2024-25: Tax slab under new tax regime</h1>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        placeholder="Enter your Anual income"
      />
      <button onClick={handleCalculate}>Calculate Tax</button>
      {tax !== null && (
        <div>
          <h2>Your Tax: ₹{tax.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default TaxCalculator;