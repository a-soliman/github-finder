class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class='card card-body mb-3'>
                <div class='row'>
                    <div class='col-md-3'>
                        <img class='img-fluid mb-2' src='${user.avatar_url}'>
                        <a href='${user.html_url}' target='_blank' class='btn btn-primary btn-block'>
                            View Profile
                        </a>

                    </div>
                    <div class='col-md-9 pt-3'>
                        <span class='badge badge-primary m-1'>
                            Public Repos: ${user.public_repos}
                        </span>
                        <span class='badge badge-secondary m-1'>
                            Public Gists: ${user.public_gists}
                        </span>
                        <span class='badge badge-success m-1'>
                            Followers: ${user.followers}
                        </span>
                        <span class='badge badge-info m-1'>
                            Following: ${user.following}
                        </span>
                        <br><br>
                        <ul class='list-group'>
                            <li class='list-group-item'>
                                Company: ${user.company}
                            </li>
                            <li class='list-group-item'>
                                Website | blog: ${user.blog}
                            </li>
                            <li class='list-group-item'>
                                Location: ${user.location}
                            </li>
                            <li class='list-group-item'>
                                Memeber Since: ${user.created_at}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class='page-heading mb-3'>Latest Repos</h3>
            <div id='repos'></div>  
        `;
    }

    showAlert( message, classes) {
        const classNames = classes.split(' ');
        let classesString = '';

        classNames.forEach((classname) => {
            classesString += `.${classname}`;
        });

        let alertOnUI = document.querySelector(`${classesString}`);

        if ( alertOnUI !== null ) { return; }
        
        const alert = document.createElement('div');
        alert.className = classes;
        const messageNode = document.createTextNode(message);
        alert.appendChild(messageNode);
        const container = document.querySelector('.search-container');
        const searchBox = container.firstElementChild;
        container.insertBefore(alert, searchBox);
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    clearAlert( classes ) {
        const classNames = classes.split(' ');
        let classesString = '';

        classNames.forEach((classname) => {
            classesString += `.${classname}`;
        });

        let alertOnUI = document.querySelector(`${classesString}`);
        if ( alertOnUI == null ) { return; }
        alertOnUI.remove();
    }
}