func = require('./junctions')

test('expect returnTwo() to equal 2', () => {
    expect(func.returnTwo()).toEqual(2)
})

test("expect greeting('James') to equal hello james", () => {
    expect(func.greeting('James')).toEqual('Hello James')
})

describe('Math Funcions', () => {
    test("expect add(1, 2) to equal 3", () => {
        expect(func.add(1, 2)).toEqual(3)
    })

    test("expect add(5, 9) to equal 14", () => {
        expect(func.add(5, 9)).toEqual(14)
    })

    test("expect multipy(3, 2) to equal 16", () => {
        expect(func.multiply(3, 2)).toEqual(6)
    })

    test("expect divide(9, 3) to equal 3", () => {
        expect(func.divide(9, 3)).toEqual(3)
    })

    test("expect subtract(9, 6) to equal 3", () => {
        expect(func.subtract(9, 6)).toEqual(3)
    })
})