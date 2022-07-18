import React from 'react';

import Icon from './Icon';


export default function Post(props){

    const [class_value, changeClassValue] = React.useState('deslike md hydrated')
    const [icon_value, changeIconValue ] = React.useState('heart-outline')


    function click_in_post(){
        if(class_value === 'deslike md hydrated'){
            changeClassValue('like md hydrated')
            changeIconValue('heart')
        }
    }

    function click_in_heart(){
        if(class_value === 'deslike md hydrated'){
            changeClassValue('like md hydrated')
            changeIconValue('heart')
        }
        else{
            changeClassValue('deslike md hydrated')
            changeIconValue('heart-outline')
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

            <div class="conteudo" onClick={click_in_post}>
                <img src={props.imagemMain} />
            </div>

            <div class="fundo">
                
                <div class="acoes">
                    <div >
                        <ion-icon onClick={click_in_heart} name={icon_value} class={class_value} ></ion-icon>
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