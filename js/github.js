class Github {
    constructor() {
        this.client_id = '5224216c6364edc139fc';
        this.client_secret = 'aa1ae5eda22cea92a259c4ab8393439f1f226bcb';
    }

    // GET USER
    getUser( user ) {
        return fetch(`https://api.github.com/users/${user}`)
            .then(res => res.json())
            .then(data => data)
            .catch(err => err);
    }
}