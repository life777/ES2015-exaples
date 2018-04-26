function createAsyncIterable(arr) {
    const it = arr.slice();
    return {
        [Symbol.asyncIterator]() {
            return this;
        },
        next() {
            if (it.length) {
                return Promise.resolve({
                    done: false,
                    value: it.pop()
                });
            }

            return Promise.resolve({ done: true });
        },
        return () {
            it.length = 0;
            return Promise.resolve({ done: true });
        }
    };
}

describe("Iterate of the async function", function(){
    it("iterate and wait", async function (done){
        let iter = createAsyncIterable([1,2,3,4,5]);
        let expectedNum = 5;
        for await (const num of iter) {
            expect(num).toBe(expectedNum--);
        }
        done();
    });
});