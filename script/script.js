
function getAkanName () {
let yearOfBirth=parseInt(document.getElementById("year-input").value);
let monthOfBirth=Number(document.getElementById("day-input").value);
let dayOfBirth=Number(document.getElementById("day-input").value);
let genders=(document.getElementById("gender").Value);

//radio button validation
function getGender(){
    for (let gender of genders){
    if (gender.checked){
        return genders.value
    }
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
function dayOfBirths () {
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
        if (dayOfBirth > 31 || dayOfBirth < 1){
            return false;
        }
        else{
            return true;
        }
    }

    //month and day value variables
    let monthValue = monthOfBirth();
    let dayValue = dayOfBirths();

}

//declaring arrray srtucture

var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];

//formulae for calculating birthDay from days of the week
let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);


  //generating and index value to select items on arrays
  let index;
  
  if (dayOfWeekNumber == 0){
    index = 7;
  } else {
    index = dayOfWeekNumber - 1;
  }
  console.log(index);


  if (gender === "Male" &&monthValue && dayValue) {
    document.getElementById("result").textContent = "You were born on " + dayOfWeek[dayOfBirth - 1]+ " and your name is " +  maleName[dayOfBirth -1];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    document.getElementById('result').style.fontSize = "18px";
    document.querySelector('h3').textContent = "Hello" + " " + maleAkanNames[index];
    return true;
    }
    else if (gender === "Female" &&monthValue && dayValue) {
        document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        document.getElementById('result').style.fontSize = "18px";
        document.querySelector('h3').textContent = "Hello" + " " + femaleAkanNames[index];
        return true;
      }
       else {
        alert("You entered an invalid day or month, please try again");
      }
    


    }
