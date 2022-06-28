import Course from "../course/course";

const Courses = ({filteredCourses}) => {
    return (
        <div className="courses">
            {filteredCourses.map((course,index) => <Course data={course} key={index}/>)}
        </div>
    )
}

export default Courses;