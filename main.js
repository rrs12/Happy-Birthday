var images = [
    "1.jpeg","2.jpeg","3.jpeg","4.jpeg",
  ];
  
  var i = 0;
  function nextslide() { 
   
     if(i == 4)
       {
         i=0;
       }
     
      document.getElementById("album").src = images[i];
    i++;  }