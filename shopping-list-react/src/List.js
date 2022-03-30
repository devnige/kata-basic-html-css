import { Item } from './Item'

export const List = ({ items, renderItem }) => {
    return (
    <div id="listcontainer">
        <ul>
            {items.map((item, id) => renderItem ? (

                    renderItem(item)
            ) : (
                <Item key={id} name={item}></Item>
            ))}
        </ul>
    </div>
    
    )}

    // this list component is simply a container for styles
    // ask yourself is this behaviour or styling reuseable across my project/site
    // start high level and shove everything into the one spot
    // letting structure reveal itself (Zettelkasten)
    // want to replace the { item } with a dynamic rendering that we can control