export default function Icon(props){

    return (
        <div class={props.classe}>
            <ion-icon name={props.nome}></ion-icon>
        </div>
    );
}