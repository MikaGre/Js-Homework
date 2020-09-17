let calculateGrade = (studentScore,totalMaxScore) => {

    let testScore = (studentScore/totalMaxScore)*100;
    let letterGrade;

    if (studentScore > totalMaxScore) {
        return "Student score must be smaller than Max Score";
    }

    if (studentScore < 0 || totalMaxScore < 0) {
        return "Values must be a positive number(s)";
    }

    if (typeof studentScore !== "number" || typeof totalMaxScore !== "number") {
       return "Function work with numbers";
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

module.exports = calculateGrade;