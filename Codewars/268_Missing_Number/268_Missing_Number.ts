const missingNumber = (nums: number[]): number | undefined => {
    let accumulator: number = nums.length

    for(let n = 0; n < nums.length; n++) {
        accumulator += (n - nums[n])
    }

    return accumulator === 0 ? undefined : accumulator
};
