import Storie from './Storie';
import Icon from './Icon';

export default function Stories(){

    let stories = [
        {imagem: "assets/img/9gag.svg",
         usuario: "9gag"
        },
        {imagem: "assets/img/meowed.svg",
         usuario: "meowed"
        },
        {imagem: "assets/img/barked.svg",
         usuario: "barked"
        },
        {imagem: "assets/img/nathanwpylestrangeplanet.svg",
         usuario: "nathanwpylestrangeplanet"
        },
        {imagem: "assets/img/wawawicomics.svg",
         usuario: "wawawicomics"
        },
        {imagem: "assets/img/respondeai.svg",
         usuario: "respondeai"
        },
        {imagem: "assets/img/filomoderna.svg",
         usuario: "filomoderna"
        },
        {imagem: "assets/img/memeriagourmet.svg",
         usuario: "memeriagourmet"
        }
    ]

    return (
        <div className="stories">

            {stories.map( storie => <Storie imagem={storie.imagem} usuario={storie.usuario} />)}
            {/* <Storie imagem="assets/img/9gag.svg" usuario="9gag" />
            <Storie imagem="assets/img/meowed.svg" usuario="meowed" />
            <Storie imagem="assets/img/barked.svg" usuario="barked" />
            <Storie imagem="assets/img/nathanwpylestrangeplanet.svg" usuario="nathanwpylestrangeplanet" />
            <Storie imagem="assets/img/wawawicomics.svg" usuario="wawawicomics" />
            <Storie imagem="assets/img/respondeai.svg" usuario="respondeai" />
            <Storie imagem="assets/img/filomoderna.svg" usuario="filomoderna" />
            <Storie imagem="assets/img/memeriagourmet.svg" usuario="memeriagourmet" /> */}

            <Icon classe="setinha" nome="chevron-forward-circle" />
        </div>
    );
}
