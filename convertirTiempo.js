function TimeConvert(num) { 


  var hours = Math.floor(num / 60);

  var minutes = num % 60;

  // combine the hours and minutes
  return hours + ':' + minutes;
         
}
   
TimeConvert(124);