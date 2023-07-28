import { useEffect, useState } from "react";
import Header from "../components/Header";


const MealsListRandom = () => {
    const [randomCocktail, setRandomCocktail] = useState(null);

    const fetchRandomCocktail = async () => {
        const randomCocktailResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const randomCocktailJs = await randomCocktailResponse.json();

        setRandomCocktail(randomCocktailJs.drinks[0]);
    };

    useEffect(() => {
        fetchRandomCocktail();
    }, []);

    return (
        <>
            <Header />
            <div>
                <h1>Cocktail</h1>

                {randomCocktail === null && <p>Chargement...</p>}

                {randomCocktail !== null && (
                    <div>
                        <p>{randomCocktail.strDrink}</p>
                        <img src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink} />
                    </div>
                )}
                <button onClick={fetchRandomCocktail}>Changer de cocktail</button>
            </div>
        </>
    );
};

export default MealsListRandom;