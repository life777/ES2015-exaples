describe("templates ES2015", function(){
    it("Interpolated", function(){
        let upper = function(str){ return str.toUpperCase(); },
            who = "vladimir",
            str = `This is ${upper( `${who}'s` )} book`;
            
            console.log(str);
            expect(str).toContain("VLADIMIR'S")
            
    });
    
    it("Parse template", function(){
        
        //make two variables and three strings
        let parse = function(strings, ...values){ 
                return { strings, values };
            },
            name = "vlad", sorname = "ivanov",
            { strings, values } = parse`This is ${ name + " " + sorname } book`;
            
           expect(strings.length).toBe(2); 
           expect(values.length).toBe(1); 
           
           console.log(values);
           console.log(strings);
    });
    
    it("multiline", function(){
        let multiline = function(str, ...rest){
            return str.reduce(function(result, param, index){
                return result += param.replace(/\s{2,}/gi, "\r\n").trim() + (rest[index] ? rest[index] : "");
            }, "");
        }
        
        let str = `new line with 
                    multiple strings
                    and lines`;
        // expect(str).not.toMatch(/\s{3,}/gi);
    });
});