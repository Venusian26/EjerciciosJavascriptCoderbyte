function LetterCapitalize(str) { 
  
  
  var words = str.split(" ");


  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
  }


  return words.join(" ");
         
}
   
LetterCapitalize("hello world from coderbyte"); 