
const Filter = ({range, setRange}) => {


    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name

        let newRange = range;
        newRange = name === 'from' ? (value === '' || undefined ? [null, range[1]] : [value, range[1]]) : (value === '' || undefined ? [range[0], null] : [range[0], value])

        setRange(newRange);
    }

    return (
        <>
            <div className="filter">
                <div className="from">
                    От:
                    <input type="number" name='from' onChange={handleChange}/>
                </div>
                <div className="to">
                    До:
                    <input type="number" name='to' onChange={handleChange}/>
                </div>
            </div>
        </>
    )
}

export default Filter;