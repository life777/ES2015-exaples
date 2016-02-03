describe("Block structure", function(){
    var foo = function(flag){
        let a = 3;
        
        if (flag) {
            var b = 2;
        } 
        
        return a + b; 
    };
    
   it("Var variables", function(){
       var result = foo(true)
       
       expect(foo).not.toThrow();
       expect(result).toBe(5)
   });
      
    
//     it("Loop", function(done){      
//        for (var i = 0; i < 5; ++i){
//            setTimeout(function(){
//                expect(i).not.toBe(5);
//            }, 1);
//        }
       
//        setTimeout(function(){
//            done();
//        }, 20);
//    });
    
    
//     it("Second declaration", function(){
//        let k = 5, 
//        foo = function(){
//             var a = 5;
//             var a = 6;
            
//             return a;  
//         },
//         bar = function(){
//             let k = 7;
//             return k;                    
//         };
       
//        expect(foo).not.toThrow();
//        expect(foo()).toBe(6);
       
//        expect(bar).not.toThrow();
//        expect(bar()).toBe(7);
//    });

//     it("Const", function(){
//        var foo = function(){
//             const a = 1;
//             a = 2;
            
//             return a;  
//        };
       
//        expect(foo).not.toThrow();
//    });
    
});