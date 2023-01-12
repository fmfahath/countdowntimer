 function updateTime(){
    //get current year
    const currentYear = new Date().getFullYear();
    //set new year
    const newYear = new Date(`January 1 ${currentYear+1} 00:00:00`);
    //different days count between new year & current year
    const diff = newYear - currentYear;
    
    //-------------------------------------------
    // 1000ms = 1s
    // 60s = 1m
    // 60m = 1h
    // 24hrs = 1day
    //--------------------------------------------

    const d = Math.floor(diff/1000/60/60/24);  //find days
    const h = Math.floor((diff/1000/60/60)%24); //find hours
    const m = Math.floor((diff/1000/69)%60); //find minutes
    const s = Math.floor((diff/1000)%60); //find seconds

    // console.log(d + ":" + h + ":" + m + ":" + s );

    

 
 }
