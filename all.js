// Task 1

function dis(val) {
  document.getElementById("result").value+=val;
  return null;
}

function solve(){
  let x = document.getElementById("result").value;
  if (x.indexOf("+")  > -1 ){
    var bits = x.split("+");
    var res = add(bits[0], bits[1]);
    document.getElementById("result").value = res;
  }
  else if (x.indexOf("-")  > -1 ){
    var bits = x.split("-");
    var res = subtract(bits[0], bits[1]);
    document.getElementById("result").value = res;
  }
  else if (x.indexOf("*")  > -1 ){
    var bits = x.split("*");
    var res = multiply(bits[0], bits[1]);
    document.getElementById("result").value = res;
  }
  else if (x.indexOf("/")  > -1 ){
    var bits = x.split("/");
    var res = divide(bits[0], bits[1]);
    document.getElementById("result").value = res;
  }
  else if (x.indexOf("%")  > -1 ){
    var bits = x.split("%");
    var res = percent(bits[0], bits[1]);
    document.getElementById("result").value = res;
  }
  else if (x.indexOf("root")  > -1 ){
    var bits = x.split("root");
    var res = root(bits[0]);
    document.getElementById("result").value = res;
  }
  else if (x.indexOf("abs")  > -1 ){
    var bits = x.split("abs");
    var res = abs(bits[0]);
    document.getElementById("result").value = res;
  }

}

function add(x,y){
  return parseInt(x) + parseInt(y);
}

function subtract(x,y){
  return parseInt(x) - parseInt(y);
}

function multiply(x,y){
  return parseInt(x) * parseInt(y);
}

function divide(x,y){
  return parseInt(x) / parseInt(y);
}

function percent(x,y){
  return parseInt(y) * parseInt(x) /100;
}

function root(x){
  return parseInt(x)**0.5;
}

function abs(x){
  return Math.abs(parseInt(x));
}

function clr(){
  document.getElementById("result").value = "";
}

// TASK 2

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  var y = document.forms["myForm"]["phone"].value;
  var z = document.forms["myForm"]["email"].value;
  if (x == "" || x == null ) {
    alert("Name must be filled out");
    return false;
  }
  if (x.charAt(0) <='9' && x.charAt(0) >='0'){
    alert("Name cannot start with a Number");
    return false;
  }
  if ( y == "" || y == null){
    alert("Phone number must be filled out");
    return false;
  }
  if ( y.length < 10  || (y >='a' && y <='z') || (y >='A' && y <='Z')){
    alert ("Phone number should contain 10 Numeric digits");
    return false;
  }
  if (z == "" || z == null){
    alert("Email must be filled out");
    return false;
  }
  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(z))){
    alert ("Invalid email address");
   return false;
 }
}

// TASK 3


function palindromeCheck(str){
    var splitString = str.split("");
    //alert(splitString);
    var reverseArray = splitString.reverse();
    //alert(reverseArray);
    var joinArray = reverseArray.join("");
    //alert(joinArray);
    if (joinArray == str){
      return true;
    }
    else {
      return false;
    }
}

function myFunction() {
  var str = document.getElementById("pallindrome").value;
  //alert(str);
  var res = palindromeCheck(str);
  if (res){
    alert ("Input string is Pallindrome");
  }
  else{
    alert ("Not a Pallindrome");
  }
}

function funAna(){
  var res = anagrams();
  if (res){
    alert ("They are Anagrams");
  }else {
    alert("Not Anagrams");
  }
}

function anagrams() {
        var A = document.getElementById("stringA").value;
        var B = document.getElementById("stringB").value;
        strA = A.replace(/[^\w]/g, "").toLowerCase()
        strB = B.replace(/[^\w]/g, "").toLowerCase()

        const cMapA = getCMap(strA)
        const cMapB = getCMap(strB)

        for (let char in cMapA) {
            if (cMapA[char] !== cMapB[char]) {
                return false
            }
        }
        return true
    }

function getCMap(string) {
        let cMap = {}
        for (let char of string) {
            cMap[char] = cMap[char] + 1 || 1
        }
        return cMap
    }


// TASK 4


function myFunction() {
  var x= Math.floor((Math.random() * 1000) );
  document.getElementById("box1").innerHTML = x;
  var y = Math.floor((Math.random() * 1000) );
  document.getElementById("box2").innerHTML = y;
  var res = winner(x,y);
  document.getElementById("result").innerHTML = res;
}

function winner(x,y){
  x = x%3;
  y = y%3;
  if (x == y){
    return "TIE";
  } else if ( x == 0 ){
    if ( y == 1 ){
      return "Human";
    } else {
      return "Nuclear Bomb";
    }
  } else if ( x == 1 ){
      if ( y == 2 ){
        return "Cockroach";
      } else {
        return "Human";
      }
  } else if ( x == 2 ){
      if ( y == 0 ){
        return "Nuclear Bomb";
      }else {
        return "Cockroach";
      }
  }
}
