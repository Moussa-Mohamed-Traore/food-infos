import img1 from './images/22.webp'
const AfficheSolution = () => {
    return ( 
        <div className="afficheSolution">
             <div className="container1">
                <div className="row2 row2-page2">
                    <div className="image-page2">
                        <img src={img1} alt="" />
                    </div>
                    <div className="texte-page2">
                        <h2>Votre Menu de la <br /> Semaine</h2>
                        <p>Du lundi au vendredi, retrouvez dess recttes pour manger <br /> équilibré et de saison, en passant peu de temps en <br /> cuisine !</p>
                        <a href="">Découvrez votre menu</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AfficheSolution;