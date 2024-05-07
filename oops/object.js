function createUser(username, score){
    this.username = username;
    this.score = score;
    console.log(this.constructor);
}

const userone =new createUser("Paras",40);

console.log(userone);