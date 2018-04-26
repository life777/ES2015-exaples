// each iteration returns a promise that will be resolved when user clicks on body
const clicksGenerator = function (elt) {
    return {
        [Symbol.asyncIterator] () {
            return this;
        },
        next () {
            return new Promise((r) => {
                elt.addEventListener("click", function clickHandler (e) {
                    r({
                        value: e,
                        done: false
                    });

                    elt.removeEventListener("click", clickHandler, false);
                }, false);
            });
        }
    };
};

// create async iterator
(async function () {
    for await (const click of clicksGenerator(document.body)) {
        console.log(click);
    }
})();