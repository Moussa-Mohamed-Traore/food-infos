import facebook from '../images/facebook-f (3).svg'
import twitter from '../images/twitter.svg'
import pinterest from '../images/pinterest.svg'
import youtube from '../images/youtube.svg'
import lindekin from '../images/linkedin-in.svg'
import instagram from '../images/instagram.svg'
import logo from '../images/logo.png'
const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer2">
                <div class="bar-footer">
                    <div class="foot">
                        <div class="icons">
                            <div class="icon"><img src={facebook} alt="" /></div>
                            <div class="icon"><img src={twitter} alt="" /></div>
                            <div class="icon"><img src={lindekin} alt="" /></div>
                            <div class="icon"><img src={pinterest} alt="" /></div>
                            <div class="icon"><img src={youtube} alt="" /></div>
                            <div class="icon"><img src={instagram} alt="" /></div>
                        </div>
                        <div class="form-footer">
                            <form action="">
                                <input type="email" class="input" placeholder="Votre adresse email" />
                                <button type="submit">S'abonner</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="footer-p">
                    <div class="footer-g">
                        <div class="footer-image">
                            <img src={logo} alt="" width={200} />
                            <p>A FODD-INFOS, nous sommes dévoué a vous faire <br />  vive la meilleur experience d'apprendre  <br /> à cuisiner
                                 en ligne pour  satisfaire vos familles et vos envies.</p>
                        </div>
                        <div class="navbar">
                            <ul>
                                <li><a href="">Apropos de nous</a></li>
                                <li><a href="">créer article</a></li>
                            </ul>
                            <ul>
                                <li><a href="">S'identifier</a></li>
                                <li><a href="">page d'acceuil</a></li>
                            </ul>
                        </div>
                       
                    </div>
                </div>
            </div>
            <p class="dernier-p">&copy; Copyright FOOD-INFOS,Tous droits réservés</p>
        </footer>
    );
}

export default Footer;