document.getElementById('instructionsButton').addEventListener('click', function() {
    var instructionsText = document.getElementById('instructionsText');
    if (instructionsText.style.display === 'none') {
        instructionsText.style.display = 'block';
    } else {
        instructionsText.style.display = 'none';
    }
});

// include the code for playing the game at different levels