const getAllRecipes = async() => {
    try{
        const response = await axios.get(`https://dummyjson.com/recipes`)
        console.log("Get All")
        console.log(response.data.recipes)
    }catch(error){
        console.log(error)
    }
}

getAllRecipes()

const getRecipe = async(id) => {
    try{
        const response = await axios.get(`https://dummyjson.com/recipes/${id}`)
        console.log("Get 1")
        console.log(response.data.recipes)
    }catch(error){
        console.log(error)
    }
}

getRecipe(2)


const getChocolateRecipes = async() => {
    try{
        const response = await axios.get(`https://dummyjson.com/recipes/search?q=Chocolate`)
        console.log("Get Chocolate")
        console.log(response.data.recipes)
    }catch(error){
        console.log(error)
    }
}

getChocolateRecipes()

const payloadUpdate = {mealType: ["Breakfast"],}

const updateType = async(id,payload) => {
    try{
        console.log(payload)
        const response = await axios.put(`https://dummyjson.com/recipes/${id}`, payload)
        console.log("Update Type")
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

updateType(2,payloadUpdate)


const deleteRecipe = async(id) => {
    try{
        const response = await axios.delete(`https://dummyjson.com/recipes/${id}`)
        console.log("Delete Recipe")
        console.log(response.data.recipes)
    }catch(error){
        console.log(error)
    }
}

deleteRecipe(5)


