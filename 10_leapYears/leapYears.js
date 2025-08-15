const leapYears = function(year) {
    // Calc leap year by the rules
    if( year %4 ===0  && year %100 !==0)
            return true;
    else if( year %400 ===0)
        return true
    return false;

};

// Do not edit below this line
module.exports = leapYears;
