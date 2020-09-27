const moveZero = require('../src/moveZeroFunction')
const expect = require('chai').expect

describe('Move all 0s to end of Array', () => {
    
    describe('Happy Path', () => {
        
        it('Input: [0, 1, 0, 3, 12]', () => {
            expect(moveZero([0, 1, 0, 3, 12])).to.eql([ 1, 3, 12, 0, 0 ]);
        });

        it('Input: [0, 0, 1, 8, 12]', () => {
            expect(moveZero([0, 0, 1, 8, 12])).to.eql([ 1, 8, 12, 0, 0 ]);
        });

        it('Input: [0, 0, 0, 0, 12]', () => {
            expect(moveZero([0, 0, 0, 0, 12])).to.eql([12, 0, 0, 0, 0]);
        });

        it('Input: [0, -9, 0, -22, 12]', () => {
            expect(moveZero([0, -9, 0, -22, 12])).to.eql([ -9, -22, 12, 0, 0 ]);
        });

        it('Input: [0, 0, -34, -22, 02]', () => {
            expect(moveZero([0, 0, -34, -22, 02])).to.eql([ -34, -22, 2, 0, 0 ]);
        });

        it('Input: [0, 0, -34, -22, 00]', () => {
            expect(moveZero([0, 0, -34, -22, 00])).to.eql([ -34, -22, 0, 0, 0 ]);
        });
    });

    describe('Negative Path', () => {
        
        it('Input: ["0", 0, -34, -22, 00]', () => {
            expect(moveZero(["0", 0, -34, -22, 00])).to.eql("Function only works with numbers");
        });

        it('Input: []', () => {
            expect(moveZero([])).to.eql("Array is empty");
        });

        
    });
});