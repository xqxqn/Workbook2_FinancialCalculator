document.getElementById("annuityCalculator").addEventListener("submit", function(e) {
    e.preventDefault();

    let PMT = parseFloat(document.getElementById("monthlyPayout").value);
    let r = parseFloat(document.getElementById("rate").value) / 100 / 12; 
    let n = parseFloat(document.getElementById("years").value) * 12; 

    let PV = PMT * (1 - Math.pow(1 + r, -n)) / r;

    document.getElementById("presentValue").textContent = PV.toFixed(2); 
});
