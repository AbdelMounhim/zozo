
let i;
for (i=5; i>=0; i--) {
  setTimeout( function() { console.log(" i= ",i); }, (5-i)*1000);
}

