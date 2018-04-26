function tag(tmplObj, substs) {
    return {
        compiled: tmplObj,
        substs: substs,
        raw: tmplObj.raw,
    };
}

describe("Literals", function(){
    it("raw literal", function (){
        const tags = tag`\uu ${1} \xx`;

        expect(tags.raw[0]).toBe("\\uu ");
    });
});