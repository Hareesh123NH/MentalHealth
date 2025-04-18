// Chatbot functionality
document.getElementById('send-btn').addEventListener('click', function() {
    const chatWindow = document.getElementById('chat-window');
    const chatInput = document.getElementById('chat-input');

    const userMessage = chatInput.value;
    if (userMessage) {
        const userBubble = document.createElement('div');
        userBubble.className = 'user-bubble';
        userBubble.textContent = userMessage;
        chatWindow.appendChild(userBubble);

        chatInput.value = '';

        // Simulate AI response
        setTimeout(() => {
            const botBubble = document.createElement('div');
            botBubble.className = 'bot-bubble';
            botBubble.textContent = 'Thank you for sharing. How can I assist you further?';
            chatWindow.appendChild(botBubble);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 1000);
    }
});

// Mood Tracker visualization placeholder (you can use Chart.js or any other library for actual implementation)
document.addEventListener('DOMContentLoaded', function() {
    const moodChart = document.getElementById('mood-chart');
    moodChart.innerHTML = '<p>Your mood tracking chart will appear here.</p>';
});

// Simple form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us. We will get back to you soon.');
});

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add event listener to the Back to Top button
document.addEventListener('DOMContentLoaded', function() {
    // Create the Back to Top button
    var button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = '<i class="fas fa-chevron-up"></i>';
    button.onclick = scrollToTop;

    // Append the button to the body
    document.body.appendChild(button);
});

function toggleSidebar() {
    var sidebar = document.getElementById('user-dashboard');
    sidebar.classList.toggle('open');
}