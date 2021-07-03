searchBtnEl = document.getElementById("search-btn");
searchInputEl = document.getElementById("search-input");
recipeCardsEl = document.getElementById("recipe-cards");
favsContEl = document.getElementById("favs-container");
ulEl = document.getElementById("ul");

var mealName = null;
var favMealsList = [];
var favMealsDict = {};


async function getMealByName(mealName) {
    if (mealName) {
      const resp = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
      );
      const respData = await resp.json();
      return respData.meals[0];
    } else {
      const resp = await fetch(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      const respData = await resp.json();
      return respData.meals[0];
    }
  }

  async function recipeCards() {
    mealData = await getMealByName(mealName);
    const { strMeal, strMealThumb, strCategory } = mealData;
  
    recipeCardsEl.innerHTML = `
      <div class="recipe-card" id="recipe-card">
          <h4>${strCategory}</h4>
          <img src="${strMealThumb}" alt="${strMeal}" />
          <div class="overview">
            <h4>${strMeal}</h4>
            <btn id="heart-icon"><i class="far fa-heart" ></i></btn>
          </div>
      </div>
      `;
  
    favIconEl = document.getElementById("heart-icon");
  
    favIconEl.addEventListener("click", (e) => {
      e.preventDefault();
      favMealsList.push(strMeal);
      console.log(favMealsList);
      favMealsDict[strMeal] = { imgUrl: strMealThumb };
      favMeals();
    });
    
  }

async function favMeals() {
  if (favMealsList.length) {
    favsContEl.innerHTML =""
    var ulEl = document.createElement("div");
    ulEl.classList.add("ul");
    favMealsList.forEach((meal) => {
      ulEl.innerHTML += `
        <div class="li">
        <img src=${favMealsDict[meal]["imgUrl"]} alt=${meal} /> ${meal}
        </div>       `;
    });
    favsContEl.appendChild(ulEl);
  } else {
    var ulEl = document.createElement("div");
    ulEl.id= "temp-text"
    ulEl.innerHTML = "Your favorite meals will appear here!!";
    favsContEl.appendChild(ulEl);
  }
}





searchBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  mealName = searchInputEl.value;
  recipeCards(mealName);
  searchInputEl.value = "";
});


{recipeCards(mealName)}
