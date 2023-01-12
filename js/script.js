 function updateTime(){
 
    const days  = document.querySelector("#days");
    const hours = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");

    //current date
    const currentDate = new Date();
    //get current year
    const currentYear = new Date().getFullYear();
    //set new year
    const newYearDate = new Date(`January 1 ${currentYear+1} 00:00:00`);
    //different days count between new year & current year
    const diff = newYearDate - currentDate;
    
    //-------------------------------------------
    // 1000ms = 1s
    // 60s = 1m
    // 60m = 1h
    // 24hrs = 1day
    //--------------------------------------------

    const d = Math.floor(diff/1000/60/60/24);  //get days
    const h = Math.floor((diff/1000/60/60)%24); //get hours
    const m = Math.floor((diff/1000/69)%60); //get minutes
    const s = Math.floor((diff/1000)%60); //get seconds
    
    //display on screen   
    days.innerHTML = d<10?"0"+d:d;  //condition  (ternary operator) to display double digit 
    hours.innerHTML = h<10?"0"+h:h  //condition  (ternary operator) to display double digit 
    minutes.innerHTML = m<10?"0"+m:m;  //condition  (ternary operator) to display double digit  
    seconds.innerHTML = s<10?"0"+s:s;   //condition  (ternary operator) to display double digit 

 }

//  updateTime();

setInterval(updateTime, 1000);
