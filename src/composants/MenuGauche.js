import { useState } from "react";
import chicken from '../images/categories/poulet.png'
import FetchMenu from "./FetchMenu";
import show from '../images/right show.png'
const MenuGauche = () => {
    const [MenuGauche, setMenuGauche] = useState({
        menu:[
            {
                id: 1,
                title: "Maroccan",
                icons: chicken,
                show: show
            },
            {
                id: 2,
                title: "chinese",
                icons: chicken,
                show: show,
            },
            {
                id: 3,
                title: "French",
                icons: chicken,
                show: show,
            },
            {
                id: 4,
                title: "japanese",
                icons: chicken,
                show: show
            },
            {
                id: 5,
                title: "indian",
                icons: chicken,
                show: show
            },
            {
                id: 6,
                title: "American",
                icons: chicken,
                show: show
            }
        ]
    })
    return(
        <div className="menuGauche">
            <FetchMenu MenuGauche={MenuGauche} />
        </div>
    );
}
 
export default MenuGauche;