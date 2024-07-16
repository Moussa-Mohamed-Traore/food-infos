import { useRef, useState } from 'react';
import m from '../images/France.png'
const FetchMenu = ({MenuGauche}) => {
    return ( 
        <div className="FetchMenu">
            {
              MenuGauche && MenuGauche.menu.map((men) =>(
                <div className="divvv">
                    <div className="categories1">
                    <div className="un"key={men.id}>
                      <img src={men.icons} alt="" />
                        <p>{men.title}</p> <br />
                    </div>
                    <div className="deux">
                        <img src={men.show} alt="" />
                    </div>
                    
                </div>
                </div>
                
               ))
            }
        </div>
     );
}
 
export default FetchMenu;