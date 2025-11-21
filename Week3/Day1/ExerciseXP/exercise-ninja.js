//Exercise 1 : Checking the BMI
let human1 = {
  name: "James",
  mass: 85,
  height: 190,
  bmi: function(){
    return (this.height - 100)/this.mass;
  }};
let human2 = {
  name: "Mary",
  mass: 55,
  height: 170,
  bmi: function(){
    return (this.height - 100)/this.mass;
  }};

function maxBMI(human1, human2) {
  const bmi1 = human1.bmi();
  const bmi2 = human2.bmi();
  if (bmi1 > bmi2) {
    return human1.name
  } else {
    return human2.name
  }
}

console.log(maxBMI(human1, human2));

//Exercise 2 : Grade Average
function findAvg(gradesList){
  return gradesList.reduce((acc, cur) => acc + cur, 0)/gradesList.length;
}

function assessAvg(avgGrade){
  if (avgGrade >= 65) {
    console.log(`Congratulations, you pass. Your grade is ${avgGrade}`)
  } else {
    console.log(`Unfortunately, you failed and need to repeat the course. Your grade is ${avgGrade}`)
  }
}

const gradeList = [49, 100, 58, 16, 57, 96]
assessAvg(findAvg(gradeList));