document.getElementById('futureValueCalculator').addEventListener('submit', function (e) {
    e.preventDefault();

    let P = parseFloat(document.getElementById('principal').value);
    let r = parseFloat(document.getElementById('rate').value) / 100;
    let t = parseFloat(document.getElementById('years').value);

    let FV = P * Math.pow((1 + r / 365), (365 * t));

    let interestEarned = FV - P;

    document.getElementById('futureValue').textContent = FV.toFixed(2);
    document.getElementById('interestEarned').textContent = interestEarned.toFixed(2);
});
