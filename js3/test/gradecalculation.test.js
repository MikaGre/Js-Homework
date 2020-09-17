const calculateGrade = require('../src/calculateGrade');
const expect = require('chai').expect;

describe("Calculate Grade Tests", () => {

    describe('Happy Path', () => {
        it('Verify letter grade A : (90,100)', () => {
            expect(calculateGrade(90,100)).to.equal('A');
        });
        it('Verify letter grade B : (82,100)', () => {
            expect(calculateGrade(90,100)).to.equal('B');
        });
        it('Verify letter grade C : (15,20)', () => {
            expect(calculateGrade(90,100)).to.equal('C');
        });
        it('Verify letter grade D : (23,78)', () => {
            expect(calculateGrade(90,100)).to.equal('D');
        });
        it('Verify letter grade F : (1,10)', () => {
            expect(calculateGrade(90,100)).to.equal('F');
        });

    });

    describe('Negative Path', () => {
        it('Verify error message (25,3) - Student score higher than Max score ', () => {
            expect(calculateGrade(25,3)).to.equal("Student score must be smaller than Max Score");
        });
        it('Verify error message (-90,-100) -- Both student and max score are negative', () => {
            expect(calculateGrade(-90,-100)).to.equal("Values must be a positive number(s)");
        });
        it('Verify error message (-15,20) -- Student score is negative', () => {
            expect(calculateGrade(-15,-20)).to.equal("Values must be a positive number(s)");
        });
        it('Verify error message (5,-50) -- Max score is negative', () => {
            expect(calculateGrade(5,-50)).to.equal("Values must be a positive number(s)");
        });
        it('Verify error message (i,100) -- Student score is a string', () => {
            expect(calculateGrade("i",100)).to.equal("Function work with numbers");
        });
        it('Verify error message (55,ten) -- Max score is a string', () => {
            expect(calculateGrade(55,"ten")).to.equal("Function work with numbers");
        });
        it('Verify error message (four,five) -- Both student and max score are string', () => {
            expect(calculateGrade("four","five")).to.equal("Function work with numbers");
        });
    });
});