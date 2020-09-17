module.exports = calculateGrade;

let calculateGrade = (studentScore,totalMaxScore) => {

    let testScore = (studentScore/totalMaxScore)*100;
    letterGrade;

    if (studentScore > totalMaxScore) {
        console.log("Student score must be smaller than Max Score")
        return;
    }

    if (studentScore < 0 || totalMaxScore < 0) {
        console.log("Values must be a positive number(s) ")
        return;
    }

    if (typeof studentScore !== "number" || typeof totalMaxScore !== "number") {
        console.log("Function work with numbers")
        return;
    }
    if (testScore <= 59) {
        letterGrade = 'F';
    } else if (testScore >= 60){
        letterGrade = 'D';
    } else if (testScore >= 70){
        letterGrade = 'C';
    } else if (testScore >= 80){
        letterGrade = 'B';
    } else if (testScore >= 90){
        letterGrade = 'A';
    }
    console.log(`You got a ${letterGrade} (${testScore}%)!`);
    return letterGrade;
};