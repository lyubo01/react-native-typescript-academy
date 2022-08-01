export class User {
    constructor(username, pictureUrl, numberRepositories, numberRepos, numberGists, followers){
        this.username = username;
        this.pictureUrl = pictureUrl;
        this.numberRepositories = numberRepositories;
        this.numberRepos = numberRepos;
        this.numberGists = numberGists;
        this.followers = followers;
    }
}
