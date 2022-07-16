export default function User(props){

    return (
        <div class="usuario">
            <img src={props.imagem} />
            <div class="texto"> <strong> {props.nome} </strong> {props.subnome} </div>
        </div>
    );
}