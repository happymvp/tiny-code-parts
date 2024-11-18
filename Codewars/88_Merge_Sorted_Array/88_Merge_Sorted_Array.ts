function mergeShort(array1: number[], array1Length: number, array2: number[], array2Length: number): void {
    array1.splice(array1Length, array2Length, ...array2)
    array1.sort((a: number,b: number) => a - b)
};

function merge(array1: number[], array1Length: number, array2: number[], array2Length: number) {
    let cursor = array1Length + array2Length - 1
    let iterator1 = array1Length - 1
    let iterator2 = array2Length - 1

    while (iterator2 >= 0)
        if (iterator1 >= 0 && array1[iterator1] > array2[iterator2]) {
            array1[cursor--] = array1[iterator1--]
        } else {
            array1[cursor--] = array2[iterator2--]
        }
}
