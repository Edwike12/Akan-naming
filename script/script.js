
function getAkanName () {
let yearOfBirth=Document.getElementById("year-input").value;
let monthOfBirth=Number(document.getElementById("day-input").value);
let dayOfBirth=Number(document.getElementById("day-input").value);
let genders=Document.getElementById("gender")

//declare function for selecting gender
function getGender(){
    
  var genders = document.getElementById("gender");
  var gender = genders.options[genders.selectedIndex].text;
}
}
let myGenderValue = getGender();
console.log(myGenderValue);