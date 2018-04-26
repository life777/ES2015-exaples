const obj = {foo: 1, bar: 2, baz: 3};
const {foo, ...rest} = obj;

describe("Rest object", function(){
    it("first level rest", function (){
        const obj = {foo: 1, bar: 2, baz: 3};
        const {foo, ...rest} = obj;
        
        expect(rest.bar).toBe(2);
        expect(rest.baz).toBe(3);
        expect(rest.foo).toBe(undefined);
    });

    it("Deep rest", function (){
        const obj = {
            foo: {
                a: 1,
                b: 2,
                c: 3,
            },
            bar: 4,
            baz: 5,
        };
        const {foo: {a, ...rest1}, ...rest2} = obj;
        
        expect(rest1.b).toBe(2);
        expect(rest1.c).toBe(3);
        expect(rest1.a).toBe(undefined);
        expect(rest2.bar).toBe(4);
        expect(rest2.baz).toBe(5);
        expect(rest2.foo).toBe(undefined);
    });
});

describe("Spread object", function(){
    it("first level spread", function (){
        const obj = {foo: 1, bar: 2, baz: 3};
        const extended = {...obj, qux: 4};

        expect(extended.foo).toBe(1);
        expect(extended.bar).toBe(2);
        expect(extended.baz).toBe(3);
        expect(extended.qux).toBe(4);
    });
});