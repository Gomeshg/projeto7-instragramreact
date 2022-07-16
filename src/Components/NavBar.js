import Icon from './Icon';

export default function NavBar(){

    return (
        <div className="navbar">
            <div className="container">
            
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" />
                </div>

                <Icon classe="logo-mobile" nome="logo-instagram" />
                {/* <div class="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div> */}

                <div class="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>
  
                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
                
                
                <div class="icones">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>

                <Icon classe="icones-mobile" nome="paper-plane-outline"/>
                {/* <div class="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div> */}
            </div>
        </div>
    );
}