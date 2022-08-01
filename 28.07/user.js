export class User {
    constructor(username, name, pictureUrl, numberRepositories, numberRepos, numberGists, followers){
        this.username = username;
        this.name = name;
        this.pictureUrl = pictureUrl;
        this.numberRepositories = numberRepositories;
        this.numberRepos = numberRepos;
        this.numberGists = numberGists;
        this.followers = followers;
    }
}
