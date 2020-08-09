let loggedUsername = document.querySelector("#shared-script").dataset.user;

// Edit the Post
function edit(postId) {
    let content = document.querySelector(`#content-${postId}`);
    let contentHTML = content.innerHTML;
    let editBtn = document.querySelector(`#edit-${postId}`);
    editBtn.style.display = "none";
    
    // Edit Form
    content.innerHTML = /*html*/`
        <form id="edit-form">
            <textarea rows="5" cols="25" type="text" id="edit-content" class="form-control" required>${contentHTML}</textarea>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button class="btn btn-outline-primary btn-sm topright" type="submit">Edit</button>
        </form>
    `;

    document.querySelector('#edit-form').onsubmit = () => {
        fetch('/edit', {
            method: 'PUT',
            body: JSON.stringify({
                postId: postId,
                content: document.querySelector('#edit-content').value
            })
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                content.innerHTML = document.querySelector('#edit-content').value;
                editBtn.style.display = "block";
            });

        return false;
    }
}

// Like the Post
function like(postId) {
    fetch('/like', {
        method: 'PUT',
        body: JSON.stringify({
            postId: postId
        })
    })
        .then(response => response.json())
        .then(result => {
        
            let heart = document.querySelector(`#heart-${postId}`);
            let likeCount = parseInt(document.querySelector(`#counter-${postId}`).innerHTML);

            if (result["liked"]) {
                heart.innerHTML = '❤️';
                likeCount++;
                document.querySelector(`#counter-${postId}`).innerHTML = likeCount;
            } else {
                heart.innerHTML = '🤍';
                likeCount--;
                document.querySelector(`#counter-${postId}`).innerHTML = likeCount;
            }
        });
}