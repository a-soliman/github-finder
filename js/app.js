const github    = new Github();
const ui        = new UI();

// SEARCH INPUT
const searchUser = document.querySelector('#searchUser');

// SEARCH INPUT EVENT LISTENER
searchUser.addEventListener('keyup', (e) => {
    // GET INPUT TEXT
    const userText = e.target.value.trim();

    if ( userText !== '' ) {
        github.getUser(userText)
        .then(user => {
            console.log(user)
            if ( user.message == 'Not Found' ) {
                // SHOW ALERT
            }
            else {
                // SHOW PROFILE
                ui.showProfile(user);

            }
        })
        .catch(err => console.log(err, 'ERROR'));
    }
    else {
        // CLEAR PROFILE
    }
});