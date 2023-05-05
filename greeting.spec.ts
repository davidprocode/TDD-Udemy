import { greeting } from "./greeting"

describe("Greeting",()=>{
        it("Shold return Hello World!", ()=>{
            const sut = greeting()
            const expected = "Hello World!"

            const actual = sut.helloWorld()

            expect(actual).toBe(expected)
        })
})