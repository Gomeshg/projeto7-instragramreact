import ItemList from './ItemList'

export default function List(props){

    let itemList = props.itemList
    
    let newItemList = []
    for (let i = 0; i < itemList.length; i++) {
        newItemList.push(<ItemList item = {itemList[i]} /> )
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                {newItemList}
            </ul>
        </div>
    );
}

