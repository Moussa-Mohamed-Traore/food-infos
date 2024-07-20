import useFetch from "./useFetch";
const Change = () => {
    const { isLoading, data, error } = useFetch('https://www.themealdb.com/api/json/v1/1/random.php');
    return (
        <div className="change">
            {isLoading && <div style={{ textAlign: 'center' }}>En cour de traitement....</div>}
            {error && <div style={{ textAlign: 'center', color: 'red' }}>Une erreur est survenue</div>}
            {data && (
                <div className="Image-instructions">
                   <div className="container">
                    <div className="row2">
                        <div className="img-Instruction">
                            <img src={data.meals[0].strMealThumb} alt="" />
                        </div>
                        <div className="text-Instructions">
                            <h2>INSTRUCTIONS</h2>
                            <p>{data.meals[0].strInstructions}</p>
                        </div>
                    </div>
                   </div>
                </div>
            )}
        </div>
    );
}

export default Change;