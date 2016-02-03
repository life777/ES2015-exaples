describe("Generators", function(){
    it("simple generator", function(){
        var g = function*(start = 1){
            console.log("started");
            yield start;
            yield start + 1;
            yield start + 2;
            yield start + 3;
        },
        start = 3,
        iterator;
        
        iterator = g(start);  
        
        for (let v of iterator){
            expect(v).toBe(start++);
        }
        
        let start2 = 1,
            iterator2 = ([1,2,3,4,5,6]).entries();
        
        for (let v of iterator){
            expect(v).toBe(start2++);
        }          
    });
    
    
    it("Async generators", function(done){
        let get = function(type, baseEntity){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        parent: baseEntity,
                        type: type,
                        name: "Vladimir",
                        age: 26
                    });
                }, 200);    
            });    
        },
        async = function(gen){
            return function(){
                var iterator = gen(),
                    handler = function(result){
                        if (result.done) return result.value;
                        
                        return result.value.then(res => {
                            handler(iterator.next(res));   
                        }, err => {
                            handler(iterator.throw(err));
                        });
                    };
                    
                handler(iterator.next());
            }
        };
        
        
        async(function*(start = 1){
            let user = yield get("user");
            let [work, home] = yield Promise.all([get("work", user), get("home", user)]);
            let country = yield get("country", home);

            expect(country.name).toBe("Vladimir");
            expect(country.parent.parent).toBe(user);
            
            done();
        })();
    });
})