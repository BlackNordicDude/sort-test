export const twoSortCourses = (courses) => {
    let oneSortedArray = []; 
    let twoSortedArr = [];
    let helpArr = [];
    oneSortedArray = courses.sort((a, b) => a.prices[0] - b.prices[0])

    const sortWithNull = (a,b) => {
        if ((a.prices[1] !== null) && (b.prices[1] !== null)) {
            if (a.prices[1] < b.prices[1]) return -1
            if (a.prices[1] > b.prices[1]) return 1
            return 0
        } else {
            if (a.prices[1] === null) return 1
            if (b.prices[1] === null) return -1
            return 0
        }
    }

    oneSortedArray.forEach((el, i) => {
        if (helpArr.length > 0) {
            if (el.prices[0] !== helpArr[helpArr.length-1].prices[0]) {
                helpArr.sort(sortWithNull)
                twoSortedArr.push(...helpArr)
                helpArr = []
            }
        }
        helpArr.push(el);
        if (i === oneSortedArray.length-1) {
            helpArr.sort(sortWithNull)
            twoSortedArr.push(...helpArr)   
        }
    })
    return twoSortedArr
}