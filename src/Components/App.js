import NavBar from './NavBar';
import Corpo from './Corpo';
import FundoMobile from './FundoMobile';

export default function App(){

    return (
        <div>
           <NavBar/>
           <Corpo user_imagem="assets/img/catanacomics.svg" user_name="catanacomics" user_subname="Catana"/>
           <FundoMobile/>
        </div>
    );
}