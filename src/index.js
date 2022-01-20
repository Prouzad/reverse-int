module.exports = function reverse (n) {
  let ar =  Math.abs(n).toString().split(""); //['4', '5', '6']   
    
    let rev = ar.reverse().join(""); 
    console.log(rev);
    return +rev;
}
