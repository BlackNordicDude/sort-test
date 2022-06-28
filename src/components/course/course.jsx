const Course = ({data}) => {
    const name = data.name;
    const [from, to] = data.prices;
    return (
        <div className="course">
            <p>{name}</p>
            <p>Price: {`from ${from ? from : '0'} to ${to ? to : 'infinity'}`}</p>
        </div>
    )
}

export default Course;  