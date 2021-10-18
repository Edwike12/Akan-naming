
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

//month function
function monthValue (){
    if (monthOfBirth < 1 ||monthOfBirth > 12){
        return false;
} else{
    return true;
}
}

//date validation function
function dayOfBirth () {
    if (monthOfBirth === 2 && Number(yearOfBirth)%4 ===0){
        if (dayOfBirth > 28 || dayOfBirth < 1) {
            return false;
        }
        else if (monthOfBirth === 2 && dayOfBirth >29){
            return false;
        }
        else if (monthOfBirth === 2 && dayOfBirth < 1){
            return false;
        } 
        else {
            return true;
        }
        else if (dayOfBirth > 31 || dayOfBirth < 1){
            return false;
        }
        else{
            return true;
        }
    }
}

//declaring arrray srtucture

var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];


