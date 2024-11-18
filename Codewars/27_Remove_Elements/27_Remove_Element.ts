function removeElement(nums: number[], val: number): number {
    let nonValLength = 0
    nums.sort((a: number, b: number) => {
        if (b - val === 0) {
            return -1
        }
        return 0
    })

    for (let num of nums) {
        if (num === val) break
        nonValLength++
    }

    nums.splice(nonValLength, nums.length - nonValLength)
    return nonValLength
};

removeElement([0,1,2,2,3,0,4,2], 2)
