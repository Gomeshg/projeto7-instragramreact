export default function Storie(props){

    return (
        <div className="story">
           <div className="imagem">
                <img src= {props.imagem}/>
           </div>
           <div class="usuario">{props.usuario}</div>
        </div>
    );
}