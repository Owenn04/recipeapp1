import Image from 'next/image'


const getRecipeData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json();
}

//cache: 'no-store'
const getDogData = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random", {
        next: {
            revalidate: 3,
        }
    })
    return res.json();
}

export default async function ListOfRecipes(){

    const recipes = await getRecipeData();
    const dog = await getDogData();

    return (
        <div>
            {/* <Image src={dog.message} alt='dog' width ={300} height = {300}/> */}
            {recipes.map((recipe: any) => {
                return <p>{recipe.title}</p>
            })}
            
        </div>
    )
}