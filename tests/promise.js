describe("Promises", function(){
    it("then and catch", function(done){
        let a = new Promise(function(resolve, reject){
            if (true){
                resolve("resolved");
            } else {
                reject("rejected");
            }
        }).then(function(result){
            expect(result).toBe("resolved");
            return result;
        }, function(error){
            expect(error).toBe("rejected");
            return error;
        })///one module
        .catch(function(error){
            expect(error).toBe("rejected");
            
            done();
            return error;
        })///second module
        .then(function(result){
            expect(result).toBe("resolved");
            done();
            return result;
        });
    });
    
    it("then and catch", function(done){
        let a = new Promise(function(resolve, reject){
            if (true){
                resolve(Promise.reject(true));
            } else {
                reject("rejected");
            }
        }).then(function(result){
            expect(!!result).toBe(false);
        }, function(result){
            expect(!!result).toBe(true);
        }).then(function(){
            done();
        });
        
        
        /*
        new Promise(function(resolve, reject){
            resolve(getJSON());
        })
        
        
        setTimeout(function(){
            console.log(1);
        }, 1);
        
        Promise.resolve(true).then(function(){
            console.log(2);
        })
        */
    });
})