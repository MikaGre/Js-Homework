const anagramChecker = require('../src/anagramFunction');
const expect = require('chai').expect

describe('Anagram Checker', () => {
    
    describe('Happy Path', () => {
        
        it('String one: "hello" \n\t String two: "llohe" ', () => {
            expect(anagramChecker("hello","llohe")).to.eql(true)
        });

        it('String one: "low" \n\t String two: "wol" ', () => {
            expect(anagramChecker("low","wol")).to.eql(true)
        });
        
        it('String one: "rat" \n\t String two: "car" ', () => {
            expect(anagramChecker("rat","car")).to.eql(false)
        });

        it('String one: "man" \n\t String two: "fan" ', () => {
            expect(anagramChecker("man","fan")).to.eql(false)
        });
       
    });

    describe('Neagtive Path', () => {
        
        it('String one: "car" \n\t String two: "car" ', () => {
            expect(anagramChecker("car","car")).to.eql("Function needs two DIFFERENT words")
        });

        it('String one: 2 \n\t String two: "car" ', () => {
            expect(anagramChecker(2,"car")).to.eql("Function only works with words")
        });

        it('String one: "" \n\t String two: "computer" ', () => {
            expect(anagramChecker("","computer")).to.eql("Function needs two words")
        });
    });
});
        