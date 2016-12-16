class Password{
  //The first part of the class.
constructor(pri,pub){
  this.privatekey=pri;
  this.publickey=pub;
}


  //Instance functions below this comment.
validPublicKey(){
  if(this.publickey>=8 && this.publickey<=25){
    return true
  }
  else(false)
}


}
validPrivateKey(){
  if(this.privatekey[4]="_" && this.privatekey[9]='_'){
    return true;
  }
  else{
    return false;
  }
}


  //Static function below this comment.
static makePrivateKey(){
  let key='';
  let limit= 14;
  for(let n=0; n<limit; n++){
    if (!n==4 && !==9){
      key.push(Math.floor(Math.random()*10))
  }
  console.log(key);
}
