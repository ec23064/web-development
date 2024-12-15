// Get the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
    // Get the values of the input fields
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const address = document.querySelector('input[name="address"]').value;
    const postcode = document.querySelector('input[name="postcode"]').value;
    const keepInformed = document.querySelector('input[name="keep informed"]').checked;

    // Check if any of the required fields are empty or the checkbox is not checked
    if (name === '' || email === '' || address === '' || postcode === '' || !keepInformed) {
        // Prevent form submission
        event.preventDefault();

        // Highlight the missing fields using CSS styles
        document.querySelector('input[name="name"]').classList.add('highlight');
        document.querySelector('input[name="email"]').classList.add('highlight');
        document.querySelector('input[name="address"]').classList.add('highlight');
        document.querySelector('input[name="postcode"]').classList.add('highlight');
        // Highlight the checkbox label
        document.querySelector('label[for="keep-informed"]').classList.add('highlight');
    }
});
