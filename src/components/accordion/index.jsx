//single selection
//multiple selection
import data from "./data";
import './styles.css';

import { useState } from "react"

export default function Accordion() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);


    function handleSingleSelection(currentId) {
        setSelected(currentId === selected ? null : currentId)
    }

    function handleMultiSelection(currentId) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(currentId);
        console.log(findIndexOfCurrentId)
        if (findIndexOfCurrentId === -1) copyMultiple.push(currentId)
        else copyMultiple.splice(findIndexOfCurrentId, 1);
        setMultiple(copyMultiple)
    }

    console.log(selected, multiple)

    return <div className='acc-wrapper'>
        <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable multiple selection</button>
        <div className='accordion'>
            {data && data.length > 0 ? (
                data.map(item => (
                    <div onClick={enableMultiSelection ? ()=> handleMultiSelection(item.id) : ()=>handleSingleSelection(item.id)}  className='item'>
                        <div className='title'>
                            <h3>{item.question}</h3>
                            <span>+</span>
                        </div>
                        {enableMultiSelection ?
                            multiple.indexOf(item.id) !== -1 &&
                            <div classname='acc-content'>{item.answer}</div>
                            :
                            selected === item.id && <div className='acc-content'>{item.answer}</div>} 
                </div>
            ))
            ): (
                'No data found'
            )}
        </div>
    </div>
        
}