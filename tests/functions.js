describe("Functions and arrows", function(){
   it("arrow function", function(){
       let foo = function(){
            return {
                add: num => {
                    this.sum += num;
                },
                inc: () => {
                    this.sum++;
                },
                get: () => {
                    return this.sum;
                }
            };   
       },
       summarizer = foo.apply({ sum: 0 });

        summarizer.add(5);
        expect(summarizer.get()).toBe(5);
               
        let a = summarizer.inc;
        a();
        expect(summarizer.get()).toBe(6);
        
        summarizer.inc.apply({ sum: 0 });
        expect(summarizer.get()).toBe(7);
        
        summarizer.inc.bind({ sum: 0 })();
        expect(summarizer.get()).toBe(8);
   }); 
   
   
   it("Arguments", function(){
       //replace sum with arrow and fix the code
       
       let sum = function(){
           return [].slice.call(arguments, 0).reduce(function(s, a){
               return s + a;
           }, 0);
       };
       
       expect(sum(1, 2, 3)).toBe(6);
   });
});