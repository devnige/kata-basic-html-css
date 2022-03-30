import { useState } from 'react';

export function AddItem( {items, setItems} ) {

    const [val, setVal] = useState('');
    const handleChange = event => setVal(event.target.value);

    return (
        <>
            <div id ="AddItems">
                <span className="input">What would you like to add?</span>
                <span className="input">
                    <input id="inputnewitem" type="text" value={val} onChange={handleChange}></input>
                </span>
                <button onClick={() => {
                                    setItems([...items, {name: val, id: [...items].length}]);
                                    setVal(() => '');
                                }
                            }>Add Item</button>
            </div>
        </>
    ) 
}
