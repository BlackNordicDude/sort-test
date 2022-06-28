export const filterCourses = (range, courses) => {
    const [rangeFrom, rangeTo] = range;
    return courses.filter(course => {
        const [priceFrom, priceTo] = course.prices;
        if (rangeFrom === null && rangeTo === null) return true
        if (rangeFrom === null) {
            return priceFrom <= +rangeTo ? true : false
        } else if (rangeTo === null) {
            return +rangeFrom <= priceTo ? true : false
        } else {
            if (priceFrom >= rangeFrom && priceFrom < rangeTo) {
                if (priceTo <= rangeTo) {
                    return true
                } else return false
            } else return false  
        }
    })
} 