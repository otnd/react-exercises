import { useEffect, useMemo, useState } from "react";

const persons = [{ name: 'Davide', age: 21, id: 1 }, { name: 'Vincenzo', age: 22, id: 2 }]
export const FilteredList = ({ items = persons }) => {
    const [list, setList] = useState(items)
    const filter = useMemo(() => list.filter(person => person.age > 18), [list])
    useEffect(() => { setList(filter) }, [list])

    return (
        <>
            <ul>
                {list.map(obj => <li key={obj.id}>{obj.name}</li>)}
            </ul>
        </>
    );
}

export default FilteredList;