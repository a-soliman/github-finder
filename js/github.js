class Github {
    constructor() {
        this.client_id = '5224216c6364edc139fc';
        this.client_secret = 'aa1ae5eda22cea92a259c4ab8393439f1f226bcb';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    // GET USER
    getUser( user ) {
        return fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
            .then(res => res.json())
            .then(data => data)
            .catch(err => err);
    }

    // GET REPOS
    getRepos( user ) {
        return fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
            .then(res => res.json())
            .then(data => data)
            .catch(err => err);
    }
}