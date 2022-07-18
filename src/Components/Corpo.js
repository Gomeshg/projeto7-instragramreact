import Stories from './Stories';
import Posts from './Posts';
import User from './User';
import Sugestões from './Sugestões';

export default function Corpo(){

    return (
        <div class="corpo">

            <div class="esquerda">
                
                <Stories/>
                <Posts/>
                
            </div>

            <div class="sidebar">

                <User imagem="assets/img/catanacomics.svg" nome="catanacomics" subnome="Catana" />
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