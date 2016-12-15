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
validPrivateKey(){
  
}


  //Static function below this comment.
}
