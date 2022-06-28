import { useEffect } from "react";
import { useState } from "react";
import { courses } from "../../data/courses";
import { filterCourses } from "../../utils/filter-courses";
import { twoSortCourses } from "../../utils/sort-courses";
import Courses from "../courses/courses";
import Filter from "../filter/filter";

const Main = () => {
    const [range, setRange] = useState([null, null]);
    const [filteredCourses, setFilteredCourses] = useState(courses)

    useEffect(() => {
        setFilteredCourses(filterCourses(range, courses));
    }, [range])

    const handleSort = () => {
        console.log(filteredCourses);
        let newArr = JSON.parse(JSON.stringify(filteredCourses))
        setFilteredCourses(twoSortCourses(newArr))
    }

    return (
        <div className="main">
            <Filter range={range} setRange={setRange}/>
            <div className="info">Courses from {range[0] ? range[0] : '0'} to {range[1] ? range[1] : 'infinity'}:</div>
            <button onClick={handleSort}>Sort</button>
            <Courses filteredCourses={filteredCourses}/>
        </div>
    )
}

export default Main;