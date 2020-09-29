const addTax = require('../src/addLocalTaxFunction');
const expect = require('chai').expect;

describe('Add tax to array values', () => {

    describe('Happy Path', () => {

        it('TestArray = [342, 1002, 523]', () => {
            expect(addTax([ 342, 1002, 523 ])).to.eql([ '372.35', '1090.93', '569.42' ]);
        });

        it('TestArray = [0]', () => {
            expect(addTax([ 0 ])).to.eql(['0.00']);
        });

        it('TestArray = [0, 15, 25]', () => {
            expect(addTax([ 0, 15, 25 ])).to.eql([ '0.00', '16.33', '27.22' ]);
        });

    });

    describe('Neagtive Path', () => {
        
        it('TestArray = [-10, -20, -30]', () => {
            expect(addTax([-10, -20, -30])).to.eql("Invalid numbers");
        });

        it('TestArray = [-10, 20, 30]', () => {
            expect(addTax([-10, 20, 30])).to.eql("Invalid numbers");
        });

        it('TestArray = []', () => {
            expect(addTax([])).to.eql("Array is empty");
        });

        it('TestArray = ["10", 20, 30]', () => {
            expect(addTax(["10", 20, 30])).to.eql("Invalid numbers");
        });
    });
});