export interface Root {
    recipes: Recipe[]
    total: number
    skip: number
    limit: number
  }
  
  export interface Recipe {
    id: number
    name: string
    ingredients: string[]
    instructions: string[]
    prepTimeMinutes: number
    cookTimeMinutes: number
    servings: number
    difficulty: string
    cuisine: string
    caloriesPerServing: number
    tags: string[]
    userId: number
    image: string
    rating: number
    reviewCount: number
    mealType: string[]
  }

const fetchRecipes = async ():Promise<Root | null> => {
    try {
        const data = await fetch("https://dummyjson.com/recipes")
        const recipes:Root = await data.json()
        return recipes
    } catch (error) {
        console.error(error)
        return null
    }
}

fetchRecipes()
    .then((data) => {
        data?.recipes.forEach((recipe) => console.log(recipe.name))
    })