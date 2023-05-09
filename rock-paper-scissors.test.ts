import { createRockPaperScissors } from './rock-paper-scissors'

describe("rock=paper-scissors", () => {
    test("Given player move paper and opponent move rock should return Player Wins", () => {
        //Arrange
        const sut = createRockPaperScissors()
        //Act
        const actual = sut.play("Paper", "Rock")
        //Assert
        expect(actual).toBe("Player Wins")
    })
})

