import useFetch from "./useFetch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from "react";
const RecetteLamb = () => {
    const [style, setStyle] = useState({ color: 'black' })

    const { isLoading, data, error } = useFetch('https://www.themealdb.com/api/json/v1/1/search.php?s=lamb')
    console.log(data);
    return (
        <div className="RecetteLamb">
            {isLoading && <div style={{ textAlign: 'center' }}>En cour de traitement....</div>}
            {error && <div style={{ textAlign: 'center', color: 'red' }}>Une erreur est survenue</div>}
            {data && (
                <section className="section3">
                    <div className="containerHeader">
                        <div className="rowP">
                            {
                                data.meals.map((da) => (
                                    <div className="images-chicken" key={da.idMeal} style={{ textAlign: 'center' }}>
                                        <img src={da.strMealThumb} alt="" />
                                        <h3>{da.strCategory}</h3>
                                        <p>pays: {da.strArea}</p>
                                        <a href="" className="" style={{ textAlign: 'center' }} >Voir les Ingrédients</a>
                                        <div className="rating">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div style={style} onClick={(() => setStyle({ color: 'orange' }))} >
                                            <FontAwesomeIcon icon={faThumbsUp} />
                                            <span> J'aime </span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

export default RecetteLamb;