const github = new Github();

// SEARCH INPUT
const searchUser = document.querySelector('#searchUser');

// SEARCH INPUT EVENT LISTENER
searchUser.addEventListener('keyup', (e) => {
    // GET INPUT TEXT
    const userText = e.target.value.trim();

    if ( userText !== '' ) {
        github.getUser(userText)
        .then(user => {
            if ( user.message == 'Not Found' ) {
                // SHOW ALERT
            }
            else {
                // SHOW PROFILE

            }
        })
        .catch(err => console.log(err, 'ERROR'));
    }
    else {
        // CLEAR PROFILE
    }
});