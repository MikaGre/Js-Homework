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
            let actualResult = fahrenheitToCelsius(100); 
            expect(actualResult).to.equal(37);
        });

        it('Verify 0°F is -18°C', () => {
            let actualResult = fahrenheitToCelsius(0); 
            expect(actualResult).to.equal(-18);
        }); 

        it('Verify -10°F is -24°C', () => {
            let actualResult = fahrenheitToCelsius(-10); 
            expect(actualResult).to.equal(-24);
        });  

});

    describe('Negative Path', () => {
    
        it('Verify special char {!} receives error message', () => {
            let actualResult = typeof fahrenheitToCelsius('!'); 
            expect(actualResult).to.have.string();
        });

        it('Verify string {temp} receives error message', () => {
            let actualResult = typeof fahrenheitToCelsius('temp'); 
            expect(actualResult).to.have.string();
        });  

        it('Verify string {""} receives error message', () => {
            let actualResult = typeof fahrenheitToCelsius(); 
            expect(actualResult).to.have.string();
        }); 

});
    
});