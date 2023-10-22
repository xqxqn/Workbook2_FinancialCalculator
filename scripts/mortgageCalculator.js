document.getElementById("mortgageCalculator").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateMortgage();
});

function calculateMortgage() {
        const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100 / 12; 
    const years = parseInt(document.getElementById("years").value);
    const totalPayments = years * 12;

    const monthlyPayment = (principal * rate * Math.pow((1 + rate), totalPayments)) / (Math.pow((1 + rate), totalPayments) - 1);

    const totalInterest = (monthlyPayment * totalPayments) - principal;

    document.getElementById("monthlyPayment").textContent = monthlyPayment.toFixed(2);
    document.getElementById("totalInterest").textContent = totalInterest.toFixed(2);
}
