var recipeBox = document.querySelector(".recipe-box");
recipeBox.style.visibility = "hidden";

var btn = document.querySelector(".generator");

btn.addEventListener("click", (e) => {
  recipeBox.innerHTML = "";

  var x = new XMLHttpRequest();
  x.open("GET", "https://www.themealdb.com/api/json/v1/1/random.php");
  x.send();

  x.addEventListener("load", function () {
    var data = JSON.parse(this.responseText);

    const $ingredients = [];
    $ingredients.push(data.meals[0]);

    var $ingredients2 = [
      $ingredients[0].strIngredient1,
      $ingredients[0].strIngredient2,
      $ingredients[0].strIngredient3,
      $ingredients[0].strIngredient4,
      $ingredients[0].strIngredient5,
      $ingredients[0].strIngredient6,
      $ingredients[0].strIngredient7,
      $ingredients[0].strIngredient8,
      $ingredients[0].strIngredient9,
      $ingredients[0].strIngredient10,
      $ingredients[0].strIngredient11,
      $ingredients[0].strIngredient12,
      $ingredients[0].strIngredient13,
      $ingredients[0].strIngredient14,
      $ingredients[0].strIngredient15,
      $ingredients[0].strIngredient16,
      $ingredients[0].strIngredient17,
      $ingredients[0].strIngredient18,
      $ingredients[0].strIngredient19,
      $ingredients[0].strIngredient20,
    ];

    var $ingredients3 = new Set($ingredients2);

    var [...$ingredients4] = $ingredients3;
    if ($ingredients4.includes("") && $ingredients4.includes(null)) {
      $ingredients4.pop();
      $ingredients4.pop();
    } else if ($ingredients4.includes("")) {
      $ingredients4.pop();
    } else if ($ingredients4.includes(null)) {
      $ingredients4.pop();
    }

    var html = `
      <section class="recipe-box">

         <img src="${
           data.meals[0].strMealThumb
         }" alt="a picture of some food" class="food-img">
         <div>
         <h1 class="name">${data.meals[0].strMeal}</h1>
         <p class="origin"> Recipe Origin: ${data.meals[0].strArea}</p>
         <p class="type">Type of Dish: ${data.meals[0].strCategory}</p>

         <ul class="ingredients">

         </ul>
         <p>How to prepare?</p>
         <p class="instructions">${data.meals[0].strInstructions} </p>

         <strong>A video tutorial</strong> <br>
         <p>Note: If a video doesn't play, it was probably taken down by Youtube or its original creator</p>
         <iframe width="320" height="315"
  src="https://www.youtube.com/embed/${data.meals[0].strYoutube.slice(-11)}">
  </iframe>
  </div>
       <section>
           `;

    recipeBox.insertAdjacentHTML("beforeend", html);
    recipeBox.style.visibility = "visible";

    //////////////////////////////
    const $measures = [data.meals[0]];

    const $measures2 = [
      $measures[0].strMeasure1,
      $measures[0].strMeasure2,
      $measures[0].strMeasure3,
      $measures[0].strMeasure4,
      $measures[0].strMeasure5,
      $measures[0].strMeasure6,
      $measures[0].strMeasure7,
      $measures[0].strMeasure8,
      $measures[0].strMeasure9,
      $measures[0].strMeasure10,
      $measures[0].strMeasure11,
      $measures[0].strMeasure12,
      $measures[0].strMeasure13,
      $measures[0].strMeasure14,
      $measures[0].strMeasure15,
      $measures[0].strMeasure16,
      $measures[0].strMeasure17,
      $measures[0].strMeasure18,
      $measures[0].strMeasure19,
      $measures[0].strMeasure20,
    ];

    const $measures3 = [];

    for (let i = 0; i <= $measures2.length; i++) {
      if (
        $measures2[i] != null &&
        $measures2[i] != undefined &&
        $measures2[i] != " " &&
        $measures2[i] != ""
      ) {
        $measures3.push($measures2[i]);
      }
    }

    /////////////////////////////

    var ingredients = document.querySelector(".ingredients");
    for (let i = 0; i < $ingredients4.length; i++) {
      var ingredient = document.createElement("li");
      ingredient.innerHTML =
        `${i + 1}. ` + $ingredients4[i] + ": " + $measures3[i];
      ingredients.append(ingredient);
    }

    /////////////////////////////
  });
});
