 function updateTime(){
    //get current year
    const currentYear = new Date().getFullYear();
    //set new year
    const newYear = new Date(`January 1 ${currentYear+1} 00:00:00`);
    //different days count between new year current & 
    const diff = newYear - currentYear;
    
    
    // console.log(newYear)

 }

 updateTime();