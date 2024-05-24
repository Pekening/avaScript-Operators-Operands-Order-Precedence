function calculateAverage() {
    var subject1 = parseFloat(document.getElementById('subject1').value);
    var subject2 = parseFloat(document.getElementById('subject2').value);
    var subject3 = parseFloat(document.getElementById('subject3').value);
    var subject4 = parseFloat(document.getElementById('subject4').value);
    var subject5 = parseFloat(document.getElementById('subject5').value);

    var average = (subject1 + subject2 + subject3 + subject4 + subject5) / 5;
    document.getElementById('result').innerHTML = "Average Grade: " + average.toFixed(2);
}