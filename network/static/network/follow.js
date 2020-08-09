let targetUsername = document.querySelector("#user-script").dataset.target;

document.addEventListener('DOMContentLoaded', function () {
    if (!loggedUsername || loggedUsername === targetUsername) {
        //only add event listener if the button is there
        return;
    }
    
    document.querySelector("#follow-btn").addEventListener("click", () => {
        fetch(`/follow/${targetUsername}`, {
            method: 'PUT'
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            location.reload(true);
        });
    })
});

