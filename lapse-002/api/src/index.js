import os from "os"

class test {
    constructor() {
        this.os = os.version()
    }
    getOS = () => this.os
}

const testObj = new test()
console.log(testObj.getOS())
