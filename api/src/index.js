import os from "os"

class test {
    constructor() {
        this.os = os.version()
    }

    getOS = () => this.os
}

const testObj = new test()

console.log('-+'.repeat(40))
console.log(testObj.getOS())
console.log('-+'.repeat(40))
