var n =18 ;
 
function isPrime(n) {
for(i=2; i<n-1;i++){
    
    if (n%i ==0) {
        return 'Not a prime number';
       
    }
}
return 'Your number is a prime number';
}
var result = isPrime(128);
console.log(result);