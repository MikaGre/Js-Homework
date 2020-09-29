const expect = require('chai').expect;

describe('Converting temperatures from Fahrenheit to Celsius', () => {
    
    const fahrenheitToCelsius = (tempF) => {
        
        if (typeof tempF !== "number") {
         return console.log(`Please enter a number. User input:${tempF}`);            
        }    
        
        let tempC = Math.floor((tempF-32)*(5/9));
            console.log(`${tempF}°F is ${tempC}°C`)
            return tempC;
         };

    describe('Happy Path ', () => {
    
        it('Verify 100°F is 37°C', () => {
            expect(fahrenheitToCelsius(100)).to.equal(37);
        });

        it('Verify 0°F is -18°C', () => {
            expect(fahrenheitToCelsius(0)).to.equal(-18);
        }); 

        it('Verify -10°F is -24°C', () => {
            expect(fahrenheitToCelsius(-10)).to.equal(-24);
        });  

});

    describe('Negative Path', () => {
    
        it('Verify special char {!} receives error message', () => {
            let actualResults = typeof fahrenheitToCelsius('!'); 
            expect(actualResults).to.have.string();
        });

        it('Verify string {temp} receives error message', () => {
            let actualResults = typeof fahrenheitToCelsius('temp'); 
            expect(actualResults).to.have.string();
        });  

        it('Verify string {""} receives error message', () => {
            let actualResults = typeof fahrenheitToCelsius(); 
            expect(actualResults).to.have.string();
        }); 

});
    
});