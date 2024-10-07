
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
