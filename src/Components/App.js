import Top from './Top'
import List from './List'
import Button from './Button'

export default function App(){
    const title = prompt('Qual o título geral?')
    const titleList = prompt('Qual o título geral?')
    let itemList = ['item1', 'item2', 'item3']


    while(true){

        let item = prompt('Quais os itens da lista?')
        itemList.push(item)

        if(prompt('Você quer inserir mais um item?') === 'não'){
           break;
        }
    } 

    
    return (
        <div>
            <Top title={title} />
            <List title={titleList} itemList={itemList} />
            <Button />
        </div>
    );
}