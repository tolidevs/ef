import * as functions from './index'

describe('makeNumbersArray', () => {
    describe('given a string of numbers separated by commas', () => {
        it('then should return the string as an array of numbers', () => {
            expect(functions.makeNumbersArray('1,2,3')).toEqual([1,2,3])
        })
    })
})

describe('sum', () => {
    describe('given an array of numbers', () => {
        it('then should return the sum of the numbers', () => {
            expect(functions.sum([1,2,3])).toEqual(6)
        })
    })
})

describe('underThousand', () => {
    describe('given a number below 1000 and a total', () => {
        it('then should return the sum of the number and the total', () => {
            expect(functions.underThousand(50,50)).toEqual(100)
        })
    })

    describe('given a number above 1000 and a total', () => {
        it('then should return the total', () => {
            expect(functions.underThousand(50,5000)).toEqual(50)
        })
    })
})

describe('AddV1', () => {
    describe('given an empty string', () => {
        it('then should return 0', () => {
            expect(functions.AddV1('')).toEqual(0)
        })
    })

    describe('given a string containing one number', () => {
        it('then should return the number', () => {
            expect(functions.AddV1('1')).toEqual(1);
        })
    })

    describe('given a string containing two numbers', () => {
        it('then should return the sum of the numbers', () => {
            expect(functions.AddV1('1,2')).toEqual(3);
        })
    })

    describe('given a string containing more than two numbers', () => {
        it('then should return the sum of the first two numbers only', () => {
            expect(functions.AddV1('1,2,3,4,5')).toEqual(3);
        })
    })
})

describe('AddV2', () => {
    describe('given an empty string', () => {
        it('then should return 0', () => {
            expect(functions.AddV2('')).toEqual(0)
        })
    })

    describe('given a string containing one number', () => {
        it('then should return the number', () => {
            expect(functions.AddV2('1')).toEqual(1);
        })
    })

    describe('given a string containing two numbers', () => {
        it('then should return the sum of the numbers', () => {
            expect(functions.AddV2('1,2')).toEqual(3);
        })
    })

    describe('given a string containing more than two numbers', () => {
        it('then should return the sum of all of the numbers', () => {
            expect(functions.AddV2('1,2,3,4,5')).toEqual(15);
        })
    })
})

describe('AddV3', () => {
    describe('given an empty string', () => {
        it('then should return 0', () => {
            expect(functions.AddV3('')).toEqual(0)
        })
    })

    describe('given a string containing one positive number', () => {
        it('then should return the number', () => {
            expect(functions.AddV3('1')).toEqual(1);
        })
    })

    describe('given a string containing only positive numbers', () => {
        it('then should return the sum of all of the numbers', () => {
            expect(functions.AddV3('1,2,3,4,5')).toEqual(15);
        })
    })

    describe('given a string containing a negative number', () => {
        it('then should throw an error containing the negative number', () => {
            expect( () => functions.AddV3('1,2,-3,4,5')).toThrow('Negatives not allowed: -3');
        })
    })

    describe('given a string containing several negative numbers', () => {
        it('then should throw an error containing all of the negative numbers', () => {
            expect(() => functions.AddV3('1,2,-3,4,-5, -6')).toThrow('Negatives not allowed: -3,-5,-6');
        })
    })
})

describe('AddV4', () => {
    describe('given an empty string', () => {
        it('then should return 0', () => {
            expect(functions.AddV4('')).toEqual(0)
        })
    })

    describe('given a string containing one number', () => {
        it('then should return the number', () => {
            expect(functions.AddV4('1')).toEqual(1);
        })
    })

    describe('given a string containing several numbers', () => {
        it('then should return the sum of all of the numbers', () => {
            expect(functions.AddV4('1,2,3,4,5')).toEqual(15);
        })
    })

    describe('given a string containing negative numbers', () => {
        it('then should throw an error containing all of the negative numbers', () => {
            expect(() => functions.AddV4('1,2,-3,4,-5, -6')).toThrow('Negatives not allowed: -3,-5,-6');
        })
    })

    describe('given a string containing numbers over 1000', () => {
        it('then should return the sum of the numbers less than 1000', () => {
            expect(functions.AddV4('1,2000,3,40000,5')).toEqual(9);
        })
    })
})

describe('AddV4', () => {

    describe('given no delimiter', () => {
        describe('given an empty string', () => {
            it('then should return 0', () => {
                expect(functions.AddV5('')).toEqual(0)
            })
        })

        describe('given a string containing one number', () => {
            it('then should return the number', () => {
                expect(functions.AddV5('1')).toEqual(1);
            })
        })

        describe('given a string containing several numbers', () => {
            it('then should return the sum of all of the numbers', () => {
                expect(functions.AddV5('1,2,3,4,5')).toEqual(15);
            })
        })

        describe('given a string containing negative numbers', () => {
            it('then should throw an error containing all of the negative numbers', () => {
                expect(() => functions.AddV5('1,2,-3,4,-5, -6')).toThrow('Negatives not allowed: -3,-5,-6');
            })
        })

        describe('given a string containing numbers over 1000', () => {
            it('then should return the sum of the numbers less than 1000', () => {
                expect(functions.AddV5('1,2000,3,40000,5')).toEqual(9);
            })
        })
    })

    describe('given a delimiter', () => {
        const delimiter = '//%\n'
    
        describe('given an empty string', () => {
            it('then should return 0', () => {
                expect(functions.AddV5(`${delimiter}`)).toEqual(0)
            })
        })

        describe('given a string containing one number', () => {
            it('then should return the number', () => {
                expect(functions.AddV5(`${delimiter}1`)).toEqual(1);
            })
        })

        describe('given a string containing several numbers sparated by the delimiter', () => {
            it('then should return the sum of all of the numbers', () => {
                expect(functions.AddV5(`${delimiter}1%2%3%4%5`)).toEqual(15);
            })
        })

        describe('given a string containing negative numbers, sparated by the delimiter', () => {
            it('then should throw an error containing all of the negative numbers', () => {
                expect(() => functions.AddV5(`${delimiter}1%2%-3%4%-5%-6`)).toThrow('Negatives not allowed: -3,-5,-6');
            })
        })

        describe('given a string containing numbers over 1000, sparated by the delimiter', () => {
            it('then should return the sum of the numbers less than 1000', () => {
                expect(functions.AddV5(`${delimiter}1%2000%3%40000%5`)).toEqual(9);
            })
        })
    })
})