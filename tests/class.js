describe("Classes and javascript", function(){
    it("Old functions", function(){
        var Human = function(age, name){
            this.age = age;
            this.name = name;
            this.fullness = 0;   
        };
        
        //What is prototype?
        Human.prototype.eat = function(amount){
            console.log("food was eaten");
            this.fullness += amount;
        }
        
        //What does 'new' keyword do? 
        var man = new Human(26, "vlad");
        man.eat(2);
        
        expect(man.fullness).toBe(2);
    });
    
    it("Private fullness", function(){
        var Human = function(age, name){
            //var fullness;
            //this.getFullness = function(){
            //      return fullness;    
            //};
            
            this.age = age;
            this.name = name;
            this.__fullness__ = 0;   
        };
        
        Human.prototype.eat = function(amount){
            console.log("food was eaten");
            this.__fullness__ += amount;
        }
        
        Human.prototype.getFullness = function(){
            return this.__fullness__;
        }
         
        var man = new Human(26, "vlad");
        man.eat(2);
        
        expect(man.getFullness()).toBe(2);
    });
    
    it("Inheratance", function(){
        var Human = function(age, name){    
                this.age = age;
                this.name = name;
                this.__fullness__ = 0;   
            };
        
        Human.prototype.eat = function(amount){
            console.log("food was eaten");
            this.__fullness__ += amount;
        };
        
        Human.prototype.who = function(){
            return `${ this.name }, ${ this.age }`
        };
        
        Human.prototype.getFullness = function(){
            return this.__fullness__;
        };
        
        var Programmer = function(age, name){
            Human.call(this, age, name);
            this.__coffee = 0;
        };
        
        Programmer.prototype = Object.create(Human.prototype);
        //for preventing loosing constructor  
        Object.defineProperty(Programmer.prototype, "constructor", {
            value: Programmer,
            enumerable: false  
        });
        
        Programmer.prototype.drink = function(){
            if (Human.prototype.getFullness.call(this) > 1) {
                this.__coffee++;    
            }
        };
        
        Programmer.prototype.getCoffee = function(){
            return this.__coffee;
        };
         
        var man = new Programmer(26, "vlad");
        man.drink();
        
        expect(man.getCoffee()).toBe(0);
        
        man.eat(2);
        man.drink();
        
        expect(man.getFullness()).toBe(2);
        expect(man.getCoffee()).toBe(1);
        expect(man.who()).toBe("vlad, 26");
        
        //who for programmer???
    });
    
    
    it("Inheratance", function(){
        class Human {
            constructor(age, name){
                
                console.log("Human: " + new.target.name);
                expect(new.target.programm()).toBe("tomorrow");
                
                this.age = age;
                this.name = name;
                this.__fullness = 0;
            }   
            
            eat(amount){
                console.log("food was eaten");
                this.__fullness += amount;
            } 
            
            who () {
                return `${ this.name }, ${ this.age }`;
            }
            
            get fullness(){
                return this.__fullness    
            }
            set fullness(val){
                throw Error("Can't be set")    
            }   
        };
            
        let coffee = Symbol("coffee");    
            
        class Programmer extends Human {
            constructor(age, name){
                
                console.log("Programmer: " + new.target.name);
                
                super(age, name);
                this[coffee] = 0;    
            }
            
            who () {
                return super.who() + " - programmer";
            }
            
            drink(){
                if (super.fullness > 1) {
                    this[coffee]++;    
                }
            }
            
            static programm(){
                return "tomorrow";
            }
            
            get coffee(){
                return this[coffee];
            }
            
            set coffee(val){
                 throw Error("Can't be set")
            }
        }
         
        var man = new Programmer(26, "vlad");
        man.drink();
        
        expect(man.coffee).toBe(0);
        
        man.eat(2);
        man.drink();
        
        expect(man.fullness).toBe(2);
        expect(man.coffee).toBe(1);
        expect(man.who()).toBe("vlad, 26 - programmer");
        
        expect(!!Programmer.programm).toBe(true);
        expect(!!Programmer.who).toBe(false);
        expect(!!Programmer.prototype.who).toBe(true);
        
        expect(man.__fullness).toBe(2);
        
        console.log(Object.keys(man));
        console.log(Object.getOwnPropertyNames(man));
        console.log(Object.getOwnPropertySymbols(man));
        
        expect(man[Object.getOwnPropertySymbols(man)[0]]).toBe(1);
        //can reach man.__coffee
    });
})