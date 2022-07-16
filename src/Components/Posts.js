import Post from './Post';

export default function Posts(){

    let posts = [
        {
            imagemHeader:"assets/img/meowed.svg" ,
            usuario:"meowed" ,
            imagemMain:"assets/img/gato-telefone.svg",
            imagemFooter:"assets/img/respondeai.svg",
            quemCurtiu:"respondeai",
            quantosCurtiram:"101.523"
        },
        {
            imagemHeader:"assets/img/barked.svg" ,
            usuario:"barked" ,
            imagemMain:"assets/img/dog.svg",
            imagemFooter:"assets/img/adorable_animals.svg",
            quemCurtiu:"adorable_animals",
            quantosCurtiram:"99.159"
        }

    ]
    return (
        <div className='posts'>

            {posts.map( post => <Post imagemHeader={post.imagemHeader} usuario={post.usuario} imagemMain={post.imagemMain} imagemFooter={post.imagemFooter} quemCurtiu={post.quemCurtiu} quantosCurtiram={post.quantosCurtiram}   />)}
           {/* <Post imagemHeader="assets/img/meowed.svg" 
                 usuario="meowed" 
                 imagemMain="assets/img/gato-telefone.svg"
                 imagemFooter="assets/img/respondeai.svg"
                 quemCurtiu="respondeai"
                 quantosCurtiram="101.523"
            />

            <Post imagemHeader="assets/img/barked.svg" 
                 usuario="barked" 
                 imagemMain="assets/img/dog.svg"
                 imagemFooter="assets/img/adorable_animals.svg"
                 quemCurtiu="adorable_animals"
                 quantosCurtiram="99.159"
            /> */}
        </div>
    );
}