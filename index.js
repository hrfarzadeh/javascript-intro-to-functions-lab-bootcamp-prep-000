function shout(String){
 return String.toUpperCase(); 
}

function whisper(String){
  return String.toLowerCase();
}
function logShout(String){
console.log(String.toUpperCase());
}
function logWhisper(String){
  console.log(String.toLowerCase());
}
function sayHiToGrandma(String){
  var inputF = "I love you, Grandma.";
  var inputS = String.toLowerCase();
  if(String===inputS){
  return "I can't hear you!";
}
  else if(String===whisper(String)){
  return "YES INDEED";
  }  
  else if(String===inputF){
  return "I love you, too.";
  }
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
