import { useState } from 'react'
import french from '../images/France.png'
import show from '../images/show.png'
import whatsapp from '../images/whatsapp.png'
import personIcon from '../images/person-icon.png'
import logo from '../images/logo.png'
import search from '../images/search.png'
import compareIcons from '../images/compare arrows.png'
import panier from '../images/shopping cart black.png'
import MenuIcons from '../images/menuIcons.png'
import image from '../images/image-landing-page.png'
import close from '../images/close.png'
import MenuGauche from './MenuGauche'
import RecetteChicken from './RecetteChicken'
import RecetteFish from './RecetteFish'
import RecettePotato from './RecettePotato'
import RecettePork from './RecettePork'
import RecetteBeef from './RecetteBeef'
import RecetteSalmon from './RecetteSalmon'
import RecetteLamb from './RecetteLamb'
const Home = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [istrue, setIstrue] = useState(null);
    const HandleClickMenu = () => {
        setActiveMenu(true)
    }
    const handleClickAGain = () => {
        setActiveMenu(false)
    }
    const afficher = () => {
        setIstrue(true);
    }
    const cacher = () => {
        setIstrue(false);
    }
    // const array = [image, logo];
    // let index = 0;
    // const [images, setImages] = useState(null);

    // const changeImage = () =>{
    //     if(index > array.length){
    //         index = 0;
    //     }
    //     setImages(array[index])
    //     console.log(index);
    //     index++;
    // }
    // setInterval(changeImage, 5000)
    return (
        <div className="home">
            <header>
                <div class="containerHeader">
                    <div class="row">
                        <div class="div">
                            <img src={french} alt="" width="35" />
                            <p>French</p>
                            <img src={show} alt="" width="15" />
                        </div>
                        <div class="div">
                            <img src={whatsapp} alt="" width="28" />
                            <h3>(237)693414172-650274538</h3>
                        </div>
                        <div class="div Bienvenue" onClick={HandleClickMenu}>
                            <img src={personIcon} alt="" width="20" />
                            <p>Bienvenue, invité</p>
                            <img src={show} alt="" width="15" />
                        </div>
                    </div>
                </div>
            </header>
            {activeMenu && <div class="section">
                <div class="compte">
                    <div class="compte-div">
                        <h4>Compte</h4>

                        <span class="span">
                            <img src={logo} width="85" alt="" />
                            <img src={close} onClick={handleClickAGain} alt="" width={25} />
                        </span>
                        <p>Gérer les articles, les créer les modifier et les supprimez si vous voulez</p>
                    </div>
                    <hr />
                    <div class="compte-div">
                        <div class="login">
                            <button>S'identifier</button>
                            <button>S'inscrire</button>
                        </div>
                    </div>
                </div>
            </div>}
            <div class="containerHeader">
                <div class="row-G">
                    <div class="part1">
                        <div class="logo">
                            <img src={logo} alt="" width="160" />
                        </div>
                        <div class="input">
                            <select name="" id="">
                                <option value="toutes categories">toutes categories</option>
                                <option value="Chicken">Recettes Poulet</option>
                                <option value="fish">Recettes Poisson</option>
                                <option value="potate">Recettes Pomme de terre</option>
                                <option value="pork">Recettes pork</option>
                                <option value="Beef">Recettes Viande</option>
                                <option value="rice">Recettes riz</option>
                                <option value="Seafood">Autres recettes</option>
                            </select>
                            <div class="input-search">
                                <input type="search" name="" placeholder="Rechercher des recettes ici" id="" />
                                <div class="search-icons"><img src={search} alt="" width="33.5" /></div>
                            </div>
                        </div>
                    </div>
                    <div class="part2">
                        <div class="menu">
                            <img src={compareIcons} alt="" width="27" />
                            <h3>créer-article</h3>
                        </div>
                        <div class="menu">
                            <img src={panier} alt="" width="27" />
                            <h3>Discuter avec Nous</h3>
                            <img src="./images/icons/show.png" alt="" width="15" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="bar">
                <div class="bar-menu">
                    <div class="menu-icons" style={{ cursor: 'pointer' }} onMouseOver={afficher} onMouseOut={cacher}>
                        <img src={MenuIcons} alt="" width="40" />
                        <h3>Recherchez par pays</h3>
                    </div>
                    <div class="bar-blue"></div>
                </div>
            </div>
            {istrue && <section className="section5" onMouseEnter={afficher} onMouseLeave={cacher}>
                <div className="section-categories" >
                    <MenuGauche />
                </div>
            </section>}
            <div className="row-A">
                <div className="text-acceuil">
                    <h1>BPROO-FOOD</h1>
                    <p>Bienvenue dans votre Plateforme  BPROO-FOOD <br /> proposer la meilleur qualité est la ligne de conduite <br /> que s'est imposé depuis sa creation. Nous pouvons <br /> lui affirmer être la seule plateforme de Food à proposer <br /> une telle qualité de details sur les food </p>
                    <a href="">Search-Food &#8594; </a>
                </div>
                <div className="image-acceuil">
                    <img src={image} alt="" />
                </div>
            </div>
            <div>
            </div>
            <div className="recetteSection">
                <h2>Choisissez vos plats ici</h2>
                <RecetteChicken />
                <RecetteFish />
                <RecettePotato />
                <RecetteBeef />
                <RecetteSalmon />
                <RecettePork />
                <RecetteLamb />
            </div>
        </div>

    );
}

export default Home;