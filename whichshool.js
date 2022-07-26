let age = ; //define age

const whichSchool = function (age){
  if (age < 13){ //if age is over 13 then go to elementary school
    console.log("Elementary School");
    return "Elementary School";
  } else if (age >= 13 && age <= 18){ //if age is between 13 and 18 then go to secondary school
    console.log("Elementary School");
    return "Secondary School";
  } else {
    console.log("Lighthouse Labs"); //every body else shoudld go to lighthouse labs
    return "Lighthouse Labs";
  }
}

console.log("I am " + age + ". Which school should I go to?"); //log the question.

whichSchool(age); //run the function.