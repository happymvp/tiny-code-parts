const containsDuplicate = (nums: number[]): boolean => {
    const setOfNumbers = new Set<number>(nums)

    return (setOfNumbers.size < nums.length)
};
