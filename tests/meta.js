describe("Meta programming", function(){
    it("Proxy", function(){
        var obj = { a: 1 },
            handlers = {
                get(target, key, context) {
                    // note: target === obj,
                    // context === pobj
                    return target[key] + 1;
                    
                    //what if I return context[key] + 1?
                }
            },
            pobj = new Proxy( obj, handlers );

        expect(obj.a).toBe(1);
        expect(pobj.a).toBe(2);
    });
    
    
    it("revocable proxy", function(){
        var obj = { a: 1 },
            handlers = {
                get(target,key,context) {
                    return target[key] + 1;
                }
            },
            { 
                proxy: pobj, 
                revoke 
            } = Proxy.revocable( obj, handlers );

        pobj.a;
        expect(pobj.a).toBe(2);

        revoke();
        expect(function(){
            pobj.a;
        }).toThrow();
    });  
    
    it("Reflect", function(){
        var o = { a: 1, b: 2 },
            props = ["a", "b", "c", "d"],
            index = 0,
            p = Object.create( o );
            
        p.c = 3;
        p.d = 4;

        for (let prop of Reflect.enumerate( p )) {
            index++
            expect(props.includes(prop)).toBe(true);
        }
        
        expect(index).toBe(4);
    }); 
})