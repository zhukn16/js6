(function(){
    'use strict';
    
    let teslaX = {};
    teslaX['model'] = 'X'; // Not recommended
    teslaX.make = 'Tesla'; // Recommended
    teslaX.price = 250000;
    teslaX.beep = beep;
    
    function beep() {
        document.write(this.make + ' ' 
          + this.model + ' beep-beep<br>');
    }
    
    let teslaS = {
        model: 'S',
        make: 'Tesla',
        price: '100000',
        beep: beep
    };
    
    teslaX.beep();
    teslaS.beep();
    
    function Car(model, make, price) {
        this.model = model;
        this.make = make;
        this.price = price;
        return this;
    }
    Car.prototype.beep = function() {
            document.write(this.make + ' ' 
              + this.model + ' beep-beep<br>');
    }
    
    
    let chevyCorvette = new Car('Corvette', 'Chevrolet', 75000);
    let chevyTahoe = new Car('Tahoe', 'Chevrolet', 65000);
    chevyCorvette.beep();
    chevyTahoe.beep();
    Car.prototype.beep = function() {
            document.write(this.model + ' ' 
              + this.make + ' beep-beep<br>');
    }
    chevyCorvette.beep();
    chevyTahoe.beep = function() {document.write('Hello<br>')};
    chevyTahoe.beep();
    
    class SuperCar {
        constructor(model, make, price) {
            this.model = model;
            this.make = make;
            this.price = price;
        }
        beep() {
            document.write('Supercar ' + this.model + ' '  + this.make + ' beep-beep<br>');
        }
    }
    
    let bugattiVeyron = new SuperCar('Veyron', 'Bugatti', 1000000);
    bugattiVeyron.beep();
    let bugattiChiron = Object.create(bugattiVeyron);
    bugattiChiron.model = 'Chiron';
    bugattiChiron.beep();
    
    const jsonCar = `
    {
        "make": "Skoda",
        "model": "Octavia",
        "price": 20000
    }`;
    
    let skodaOctavia = JSON.parse(jsonCar);
    skodaOctavia.beep = beep;
    skodaOctavia.beep();
    
    function count() {
        let counter = 0;
        return function() {
            return ++counter;
        }
    }
    let counter = count();
    let value = counter();
    console.log(value);
    console.log(counter());
    console.log(counter());
    
    
})();