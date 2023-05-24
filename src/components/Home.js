
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronUp, faArrowRotateLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import edamam from '../assets/edamam.svg'
import Logo from '../assets/logo.png'
import AnimatedLetters from "./AnimatedLetters"
import Ingredients from './Ingredients'


const Home = () => {

    const [query, setQuery] = useState("")
    const [recipeData, setRecipeData] = useState([])

    
    const updateQuery = (event) => { 
        setQuery(event.target.value)
    }

    const clearQueryData = () => {
        setQuery("")
        setRecipeData([])
    }

    const searchForRecipe = (event) => {    
        event.preventDefault()
        
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_appId}&app_key=${process.env.REACT_APP_appKey}&health=vegan`)

        .then((jsonResponse) => {
            return jsonResponse.json()
        })
        .then((jsResult) => {
            // console.log(jsResult)
            setRecipeData(jsResult.hits)
        })  
    }

    const renderResults = (recipeData) => {
        
        return(
            <div>
                {
                    recipeData.map((x, i) => {
                        return(
                            <div className='results-map-display block m-1 w-full'>                        
                                <div key={i} className='recipe-data-item flex flex-row items-stretch p-2 rounded-md bg-gray-100'>
                                    
                                    <div className='recipe-image basis-1/6 p-2 my-2'> 
                                        <img className='h-20 w-20 rounded-md align-top' src={x.recipe.image} alt={x.recipe.label}/>
                                    </div>

                                    <div className="recipe-label basis-1/6 p-2 m-2 whitespace-normal font-semibold">
                                        {x.recipe.label}
                                    </div>

                                    <div className="recipe-ingredients basis-2/6 p-2 my-2">
                                        <div className="recipe-ingredients-header font-semibold mb-1">
                                            Ingredients:
                                        </div>
                                        <div className="recipe-ingredients-text text-sm leading-snug font-normal">
                                            <Ingredients ingredientList={x.recipe.ingredientLines} />
                                        </div>
                                    </div>

                                    <div className='recipe-link basis-2/6 font-semibold p-2 m-2'>
                                        <a href={x.recipe.url} className='font-bold text-green-800 hover:text-apple-green'>
                                            See the full recipe:&nbsp;{x.recipe.source}
                                        </a>
                                    </div>    
                                </div>
                            </div>
                        )
                    })   
                }
            </div> 
        )            
    }

    return(
        <div className='home-page'>

            <div className='homepage-header flex flex-row justify-start items-center mb-10'>

                <div className='homepage-logo'>
                    <img src={Logo} className='h-20 mr-3' alt='Website logo, an illustration of an apple'></img>
                </div>

                <div className='homepage-title block' title='search: Vegan Recipes'>

                    <div className='homepage-title-1 text-4xl'>
                        search:
                    </div>
                    
                    <div className="homepage-title-2 text-5xl">
                        <AnimatedLetters strArray={('Vegan Recipes').split('')} customData='Vegan Recipes' />
                    </div>
                
                </div>

            </div>

            <form onSubmit={searchForRecipe} onReset={clearQueryData} className="space-y-3 mb-8 max-w-2xl">
                
                <label id="query" className="block w-full text-lg font-bold">I want to make:</label>
                <input type="text" autoComplete="off" placeholder="e.g. Corn fritters" id="query" onChange={updateQuery} className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 bg-gray-100 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6" maxLength="40" />
                
                <button type="submit" className="block w-1/5 rounded-md py-1.5 px-1.5 ring-1 ring-gray-400 font-bold bg-gray-200 hover:ring-2 hover:ring-inset hover:ring-gray-800 hover:bg-apple-yellow cursor-pointer duration-300 sm:text-sm sm:leading-6"> <FontAwesomeIcon icon={faMagnifyingGlass} />&nbsp;Search</button>

                <button type="reset" className="block w-1/5 rounded-md py-1.5 px-1.5 ring-1 ring-gray-400 bg-gray-200 hover:ring-2 hover:ring-inset hover:ring-gray-800 hover:bg-apple-yellow cursor-pointer duration-300 sm:text-sm sm:leading-6"><FontAwesomeIcon icon={faArrowRotateLeft} />&nbsp;Reset</button>

                <img src={edamam} alt="Powered by Edamam" className='max-w-xs' />

            </form>
                            
            {recipeData.length === 0 ? (
                <div className="hidden">
                </div>
                ) : (
                <div className="render-results">
                    {renderResults(recipeData)}
                </div>
                )  
            }

            <div className='back-to-top'>
                <button className='inline-flex items-center mt-8 mb-6 px-4 py-4 bg-gray-400 hover:bg-gray-600 text-white text-sm font-medium rounded-md' onClick={window.scrollTo(0,0)}><FontAwesomeIcon icon={faCircleChevronUp} />&nbsp;Back to top</button>

            </div> 

            <div className="homepage-footer fixed bottom-0 left-16 bg-white text-sm text-gray-800 px-2 py-4">
                <div className="homepage-footer-text">
                    Built by <a href="./about" className="font-bold text-gray-400 hover:text-gray-600">Fiona Creedy</a> as a student project for General Assembly's <a href="https://generalassemb.ly/education/javascript-development/sydney" className="font-bold text-gray-400 hover:text-gray-600">JavaScript Development course</a>.
                </div>

            </div>

        </div>        
    )
}

export default Home
