import facebook from '../images/facebook-f (3).svg'
import twitter from '../images/twitter.svg'
import pinterest from '../images/pinterest.svg'
import youtube from '../images/youtube.svg'
import lindekin from '../images/linkedin-in.svg'
import instagram from '../images/instagram.svg'
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
                            <img src="images/logo-footer.png" alt="" width={200} />
                            <p>A maxipanier.cm, nous sommes dévoué a vous faire <br /> vive la meilleur experience d'achat en
                                ligne pour <br /> satisfaire vos besoins et vos envies au meilleur prix</p>
                        </div>
                        <div class="navbar">
                            <ul>
                                <li>Apropos de nous</li>
                                <li>politique de retour</li>
                            </ul>
                            <ul>
                                <li>Contactez nous</li>
                                <li>Politique de livraison</li>
                            </ul>
                        </div>
                        <div class="footer-button">
                            <p>méthodes de paiement</p>
                            <button>Paiement à la livraison</button>
                            <p>méthodes de livraison</p>
                            <div class="buttons">
                                <button>Livraison fortifaires</button>
                                <button>Livraison Negociable</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="dernier-p">&copy; Copyright Bproo Dev,Tous droits réservés</p>
        </footer>
    );
}

export default Footer;