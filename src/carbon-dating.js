const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if(sampleActivity < MODERN_ACTIVITY){
 
    return false;
}
else if(sampleActivity >= MODERN_ACTIVITY && sampleActivity < HALF_LIFE_PERIOD){
     
   return true;
}
else if(sampleActivity >= MODERN_ACTIVITY && sampleActivity < HALF_LIFE_PERIOD){
     
    return true;
}
else if(sampleActivity <= MODERN_ACTIVITY && sampleActivity > HALF_LIFE_PERIOD){
  return 'wow';
}
else{
    return false;
}
  };

