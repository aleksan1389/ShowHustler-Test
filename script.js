
// Function to create and manage the "Back to Top" button
(function() {
    // Create the button
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = 'Back to Top';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.padding = '10px 15px';
    backToTopButton.style.backgroundColor = '#007bff';
    backToTopButton.style.color = 'white';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '5px';
    backToTopButton.style.fontSize = '14px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.display = 'none'; // Initially hidden
    backToTopButton.style.maxWidth = '150px';
    backToTopButton.style.textAlign = 'center';

    // Append button to the body
    document.body.appendChild(backToTopButton);

    // Show the button when the user scrolls down 100px from the top
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    // Scroll to the top when the button is clicked
    backToTopButton.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
})();