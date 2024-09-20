// Set the date for the countdown
let countdownDate = new Date("Dec 12, 2024 12:12:12").getTime();

// Update the countdown every 1 second
let countdownFunction = setInterval(function() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format the countdown as XXXX:XX:XX:XX
    let countdownDisplay = 
        String(days).padStart(2, '0') + ":" +
        String(hours).padStart(2, '0') + ":" +
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0');

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = countdownDisplay;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "STARTING...";
    }
}, 1000);

// Web Share API for mobile sharing
document.getElementById('share-btn').addEventListener('click', () => {
    const shareData = {
        title: 'wtf is this...',
        text: 'check out this thing I found',
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData).catch((err) => console.log('Error sharing:', err));
    } else {
        // Fallback for unsupported browsers
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link copied to clipboard!');
        });
    }
});

// Email form submit functionality
document.getElementById('email-form').addEventListener('submit', (e) => {
    localStorage.setItem('emailSubmitted', 'true'); // Save submission status
});

// On page load, check if user already submitted email
window.addEventListener('load', () => {
    const emailSubmitted = localStorage.getItem('emailSubmitted');
    if (emailSubmitted === 'true') {
        // Replace form with success message
        document.getElementById('email-container').classList.add('on-list');
        document.getElementById('email-container').innerHTML = "You are already on the list.";
    }
});
