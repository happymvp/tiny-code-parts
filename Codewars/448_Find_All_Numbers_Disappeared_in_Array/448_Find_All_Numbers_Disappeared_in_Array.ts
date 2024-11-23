const findDisappearedNumbers = (nums: number[]): number[] => {
    let uniqueNums: Set<number> = new Set(nums)
    let accumulator: number[] = []

    for(let n = 1; n <= nums.length; n++) {
        if (!uniqueNums.has(n)) accumulator.push(n)
    }

    return accumulator
};
