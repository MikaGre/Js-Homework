const calculateGrade = require('../src/calculateGrade');
const expect = require('chai').expect;

describe("Calculate Grade Tests", () => {

    describe('Happy Path', () => {
        it('Verify letter grade A : (90,100)', () => {
            let actualResult = calculateGrade(90,100)
            expect(actualResult).to.equal('A');
        });
        it('Verify letter grade B : (82,100)', () => {
            let actualResult = calculateGrade(90,100)
            expect(actualResult).to.equal('B');
        });
        it('Verify letter grade C : (15,20)', () => {
            let actualResult = calculateGrade(90,100)
            expect(actualResult).to.equal('C');
        });
        it('Verify letter grade D : (23,78)', () => {
            let actualResult = calculateGrade(90,100)
            expect(actualResult).to.equal('D');
        });
        it('Verify letter grade F : (1,10)', () => {
            let actualResult = calculateGrade(90,100)
            expect(actualResult).to.equal('F');
        });

    });

    describe('Negative Path', () => {
        it('Verify error message (25,3) - Student score higher than Max score ', () => {
            let actualResult = calculateGrade(25,3)
            console.log(actualResult);
            expect(actualResult).to.equal("Student score must be smaller than Max Score");
        });
        it('Verify error message (-90,-100) -- Both student and max score are negative', () => {
            let actualResult = calculateGrade(-90,-100)
            expect(actualResult).to.equal("Values must be a positive number(s) ");
        });
        it('Verify error message (-15,20) -- Student score is negative', () => {
            let actualResult = calculateGrade(-15,-20)
            expect(actualResult).to.equal("Values must be a positive number(s) ");
        });
        it('Verify error message (5,-50) -- Max score is negative', () => {
            let actualResult = calculateGrade(5,-50)
            expect(actualResult).to.equal("Values must be a positive number(s) ");
        });
        it('Verify error message (i,100) -- Student score is a string ', () => {
            let actualResult = calculateGrade("i",100)
            expect(actualResult).to.equal("Function work with numbers");
        });
        it('Verify error message (55,ten) -- Max score is a string', () => {
            let actualResult = calculateGrade(55,"ten")
            expect(actualResult).to.equal("Function work with numbers");
        });
        it('Verify error message (four,five) -- Both student and max score are string', () => {
            let actualResult = calculateGrade("four","five")
            expect(actualResult).to.equal("Function work with numbers");
        });
    });
});