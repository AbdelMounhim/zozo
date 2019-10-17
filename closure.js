/*

let i;
for (i=0; i<5; i++) {
  console.log("ici i = " , i);
  setTimeout( function() { console.log(" i= ",i); }, i*1000);
} 

*/

/*
function lanceFonction(j) {
  return setTimeout( function() { console.log("j=",j); }, j*1000 ) ;
}
                     
let i;
for (i=0; i<5; i++) {
  lanceFonction(i) 
 }
*/



let i;
for (i=0; i<5; i++) {
    ( function (j) {
            return setTimeout( function() { console.log("j=",j); }, j*1000 ) ;
    } ) (i)
 }



