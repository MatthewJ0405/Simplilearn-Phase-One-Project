function openCreate() {
    var x = document.getElementById("blogForm");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function newPost() {
    var postTitle = document.getElementById('postTitle').value;
    var postBody = document.getElementById('postBody').value;

    var titleText = document.createTextNode(postTitle);
    var bodyText = document.createTextNode(postBody);
    
    var postDiv = document.createElement('div');
    postDiv.setAttribute('class', 'col-md-8');
    
    var hr = document.createElement('hr');

    var h2 = document.createElement('h2');
    h2.appendChild(titleText);

    var p = document.createElement('p');
    p.appendChild(bodyText);

    if (postTitle == '' || postBody == '') {
        alert('Please input a Post Title and Post Body.')
    } else {
        postDiv.appendChild(h2);
        postDiv.appendChild(hr);
        postDiv.appendChild(p);
        document.getElementById('blogPosts').appendChild(postDiv);
        document.getElementById('postTitle').value = '';
        document.getElementById('postBody').value = '';
    }
}
