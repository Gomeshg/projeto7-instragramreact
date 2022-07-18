import Stories from './Stories';
import Posts from './Posts';
import User from './User';
import Sugestões from './Sugestões';

export default function Corpo(props){

    return (
        <div class="corpo">

            <div class="esquerda">
                
                <Stories/>
                <Posts/>
                
            </div>

            <div class="sidebar">

                <User imagem={props.user_imagem} nome={props.user_name} subnome={props.user_subname} />
                <Sugestões/>

                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>

        </div>
    );
}