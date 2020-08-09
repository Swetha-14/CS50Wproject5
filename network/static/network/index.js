document.addEventListener('DOMContentLoaded', function () {

    if (!loggedUsername) {
        return;
    }
    
    // Post the new post content and make it empty
    document.querySelector('#new-post').onsubmit = () => {
        fetch('/new', {
            method: 'POST',
            body: JSON.stringify({
                content: document.querySelector('#post-content').value
            })
        })
            .then(response => response.json())
            .then(() => {
                document.querySelector('#post-content').value = "";
                location.reload(true);
            });

        return false;
    }
});
