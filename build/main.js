export const zip = (a) => (b) => a.map((x, i) => (b[i] ? [x, b[i]] : [x]));
export const sample = (alp) => alp[(Math.random() * alp.length) | 0];
export const randomSeries = (alp) => (len = 16) => new Array(len).fill(undefined).map((x) => sample(alp));
export const randomToken = (alp = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'.split('')) => (len = 16) => randomSeries(alp)(len).join('');
export const p = (a, ...b) => console.log(...zip(a)(b).flat());
export function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
class Tester {
    constructor() {
        this.tests = {};
    }
    /** Return true or a string if test failed. Don't return or return false if success. */
    add(tag, func, id = randomToken()()) {
        if (!(tag in this.tests))
            this.tests[tag] = {};
        this.tests[tag][id] = func;
    }
    runTests(tagReg = /./) {
        const tests = [];
        const tags = Object.keys(this.tests).filter((x) => tagReg.test(x));
        for (const tag of tags) {
            tests.push(...Object.keys(this.tests[tag]).map((x) => [tag, x, this.tests[tag][x]]));
        }
        shuffle(tests);
        const stats = {
            total: 0,
            fail: 0,
            pass: 0,
        };
        for (let test of tests) {
            stats.total++;
            try {
                const res = test[2]();
                if (res)
                    throw res;
                stats.pass++;
            }
            catch (e) {
                console.error(`Test "${test[1]}" in tag <${test[0]}> failed with message (${e})`);
                stats.fail++;
            }
        }
        console.log(`Tests finished with ${stats.pass}/${stats.total} passed. ${Math.round((stats.pass / stats.total) * 100)}%`);
        return stats.fail;
    }
}
export const test = new Tester();
