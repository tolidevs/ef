//helper functions

export const makeNumbersArray = (numbers: string): number[] => numbers.split(',').map(num => Number(num))

export const sum = (numbers: number[]) => numbers.reduce((total, num) => total + num)

export const checkNegatives = (numbers: number[]) => {
    let negatives = []
    for(const num of numbers){
        if (num < 0) negatives.push(num)
    }

    if (negatives.length > 0) throw new Error(`Negatives not allowed: ${[...negatives]}`)
    return numbers
}

export const underThousand = (total: number, num: number) => {
    if(num < 1000){return total + num}
    return total
}


// functions

export const AddV1 = (numbers: string): number => {
    const numsArr: number[] = makeNumbersArray(numbers).splice(0, 2)

    return sum(numsArr)
}

export const AddV2 = (numbers: string): number => {
    const numsArr: number[] = makeNumbersArray(numbers)
    
    return sum(numsArr)
}

export const AddV3 = (numbers: string): number => {
    const numsArr = checkNegatives(makeNumbersArray(numbers))

    return sum(numsArr)
}

export const AddV4 = (numbers: string): number => {
    const numsArr = checkNegatives(makeNumbersArray(numbers))

    return numsArr.reduce((total, num) => underThousand(total, num))
}

export const AddV5 = (numbers: string): number => {
    let numsArr: number[]
    
    if (numbers[0] === '/') {
        const delimiter = numbers[2]
        const nums = numbers.slice(3).split(delimiter).map(num => Number(num))
        numsArr = checkNegatives(nums)
    } else {
        numsArr = checkNegatives(makeNumbersArray(numbers))
    }

    return numsArr.reduce((total, num) => underThousand(total, num))
}
