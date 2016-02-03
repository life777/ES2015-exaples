describe("iterator", function(){
    it("Map and Set", function(){ 
        let m = new Map();

        let x = { id: 1 },
            y = { id: 2 };

        m.set( x, "foo" );
        m.set( y, "bar" );

        expect(m.get( x )).toBe("foo");                     
        expect(m.get( y )).toBe("bar");
        
        
        let s = new Set();
        
        s.add(1).add(2).add(2);
        
        expect(s.has( 1 )).toBe(true);                     
        expect(s.has( 2 )).toBe(true);
        expect(s.size).toBe(2);
    });
    
    it("Iterator", function(){ 
        var MyArray = {
                [Symbol.iterator]() {
                    var arr = [1,2,3,4,5], index = 0;

                    return {
                        next() {
                            if (arr[index]){
                                return { value: arr[index++], done: false };    
                            }
                            return { value: undefined, done: true };
                            
                        },

                        return(v) {
                            return { value: v, done: true };
                        }
                    };
                }
            };
        
        let curr = 1;
        for (let v of MyArray) {
            expect(v).toBe(curr++)
        }
    });        
})