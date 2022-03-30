import { useState } from 'react'


export const Item = ({name, id}) => {
    const [checked, setChecked] = useState(false)
    return checked ? (
            <li key={id} className="li--checked">
                <span>{name}</span>
                <span className="button">
                    <button disabled>Tick!</button>
                </span>
            </li>
        ) :
        (
            <li key={id}>
                <span>{name}</span>
                <span><button onClick={() => setChecked(true)}>Tick!</button></span>
            </li>
        );
}