// script.js
document.getElementById('chatbot-trigger').onclick = function() {
    document.getElementById('chatbot-container').style.display = 'block';
    this.style.display = 'none'; // Hide the message button
};

document.getElementById('close-btn').onclick = function() {
    document.getElementById('chatbot-container').style.display = 'none';
    document.getElementById('chatbot-trigger').style.display = 'block'; // Show the message button again
};
document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.querySelector('.send-button');
    const inputField = document.querySelector('.input');
    const chatContent = document.querySelector('.chatbot-content');

    // Function to create and append a message to the chat content
    function appendMessage(message, senderClass) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', senderClass);
        messageDiv.textContent = message;
        chatContent.appendChild(messageDiv);
        // Scroll to the bottom of the chat content
        chatContent.scrollTop = chatContent.scrollHeight;
    }

    // Function to handle user sending a message
    function sendMessage() {
        const userMessage = inputField.value;
        if (userMessage.trim() !== '') {
            appendMessage(userMessage, 'sent');
            // Clear the input field after sending the message
            inputField.value = '';
            // Bot response (you can customize this)
            setTimeout(function () {
                appendMessage("Thank you for your message. We will get back to you soon.", 'received');
            }, 500); // Simulating bot response after 500 milliseconds
        }
    }

    // Event listener for clicking the send button
    sendButton.addEventListener('click', function () {
        sendMessage();
    });

    // Event listener for pressing Enter key in the input field
    inputField.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});

