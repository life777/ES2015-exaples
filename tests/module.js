describe("Modules", function(){
    
    it("Old way", function(){
        let module = (function(){
                let api, 
                    parentModule;// = parentModule();
                    
                return api = {
                    say(){
                        return "module";    
                    }
                }
            })();
            
        expect(module.say()).toBe("module");
        //split it into files: one to each
        //deal with dependencies: AMD or CommonJS
    });
})