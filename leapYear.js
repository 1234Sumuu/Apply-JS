function isLeapYear(year){
    const remaainder = year % 4;
    if(remaainder == 0){
        return true;
    }else{
        return false;
    }
}

const check2000 = isLeapYear(2000);
console.log(check2000);