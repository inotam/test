function myFunction() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var i=0,j=0;
  //var array = ["harada","inoue","iwakami",'otogawa','matsubara','shoji'];
  
  var participant = [];
  var random = [];
  var rand;
  var target;
  
  //paticipant check
  while(!ss.getRange('K3').offset(i,0).isBlank()){
    if(ss.getRange('K3').offset(i,1).isBlank()){
      participant.push(ss.getRange('K3').offset(i,0).getValue());
    }
    i++;
  }
  
  var original = participant.concat();
  
  while(!ss.getRange('B4').offset(j,0).isBlank()){
    //participant = array;
    participant = original.concat();
    
    target = participant.indexOf(ss.getRange('B4').offset(j,0).getValue());
    participant.splice(target,1);
    for(i=1;i<8;i++){
      ss.getRange('B4').offset(j,i).clearContent();
    }
    console.log(participant);
    
    random = [];
    for(i=0;i<participant.length;i++){
      while(true){
        rand = Math.floor(Math.random()*participant.length);
        if(random.indexOf(rand) == -1){
          random.push(rand);
          break; 
        }
      }     
      ss.getRange('B4').offset(j,i+1).setValue(participant[rand]);
    }
    //participant.push(ss.getRange('B4').offset(j,0).getValue());
    j++;
  }

}
