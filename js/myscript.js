function openCreate() {
    var x = document.getElementById("blogForm");
    var y = document.getElementById("formDiv");
    if (y.style.display === "block" && x.style.display === "block") {
        y.style.display = "none";
        x.style.display = "none";
    } else {
        y.style.display = "block";
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

function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}

function formValidation() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var phone = document.contactForm.phone.value;
    var message = document.contactForm.message.value;

    var nameErr = emailErr = phoneErr = messageErr = true;

    if (name == '') {
        printError('nameErr', 'Please enter your name');
    } else {
        var regex = /^[a-zA-z\s]+$/;
        if (regex.test(name) === false) {
            printError('nameErr', 'Please enter a valid name');
        } else {
            printError('nameErr', '');
            nameErr = false;
        }
    }

    if (email == '') {
        printError('emailErr', 'Please enter your email address');
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError('emailErr', 'Please enter a valid email address');
        } else {
            printError('emailErr', '');
            emailErr = false;
        }
    }

    if (phone == '') {
        printError('phoneErr', 'Please enter your phone number');
    } else {
        var regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        if (regex.test(phone) === false) {
            printError('phoneErr', 'Please enter a valid phone number');
        } else {
            printError('phoneErr', '');
            phoneErr = false;
        }
    }

    if (message == '') {
        printError('messageErr', 'Please enter a message');
    } else {
        printError('messageErr', '');
        messageErr = false;
    }

    if (nameErr == true || emailErr == true || phoneErr == true || messageErr == true) {
        return false;
    } else {
        alert('You have submitted the form');
    }

}
