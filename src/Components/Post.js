import React from 'react';

import Icon from './Icon';


export default function Post(props){

    const [value, changeValue] = React.useState('deslike')


    function clique(){
        alert(value)
        if(value === 'deslike'){
            changeValue('like')
        }
        else{
            changeValue('deslike')
        }
    }
   
    return (
        <div className='post'>
           
           <div class="topo">
                <div class="usuario">
                    <img src={props.imagemHeader} />{props.usuario}
                </div>

                <Icon classe="acoes" nome="ellipsis-horizontal"/>
            </div>

            <div class="conteudo" onClick={clique}>
                <img src={props.imagemMain} />
            </div>

            <div class="fundo">
                
                <div class="acoes">
                    <div >
                        <ion-icon onClick={clique} name="heart-outline" class={value} ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imagemFooter} />
                    <div class="texto">
                        Curtido por <strong>{props.quemCurtiu}</strong> e <strong>outras {props.quantosCurtiram} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}