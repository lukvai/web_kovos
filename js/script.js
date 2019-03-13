//categories Select

var categories = new XMLHttpRequest();

categories.onreadystatechange = function () {
    if (categories.readyState === 4) {
        var response = JSON.parse(categories.responseText);
        // console.log(response);
        var output = "";
        output += '<option disabled selected>Kategorija</option>';
        for (key in response) {
            for (keyValue in response[key]) {
                // console.log(response[key][keyValue]['strCategory'])
                output += '<option value="' + response[key][keyValue]['strCategory'] + '">';
                output += response[key][keyValue]['strCategory'];
                output += '</option>';
            }
        }
        document.querySelector("#categorie").innerHTML = output;
    }
}


categories.open('GET', 'https://www.themealdb.com/api/json/v1/1/categories.php');
categories.send();

//ingredients and origin Select

var ingredients = new XMLHttpRequest();

ingredients.onreadystatechange = function () {
    if (ingredients.readyState === 4) {
        var response = JSON.parse(ingredients.responseText);
        // console.log(response);
        var output = "";
        output += '<option disabled selected>Ingridientai</option>';
        var output2 = "";
        output2 += '<option disabled selected>Kilmė</option>';
        for (key in response) {
            for (keyValue in response[key]) {
                for (i = 1; i <= 20; i++) {
                    if (response[key][keyValue]['strIngredient' + [i] + ''] !== "") {
                        // console.log(response[key][keyValue]['strIngredient' + [i] + '']);
                        output += '<option value="' + response[key][keyValue]['strIngredient' + [i] + ''] + '">';
                        output += response[key][keyValue]['strIngredient' + [i] + ''];
                        output += '</option>';
                    }
                }
                // console.log(response[key][keyValue]['strArea'] )
                output2 += '<option value="' + response[key][keyValue]['strArea'] + '">';
                output2 += response[key][keyValue]['strArea'];
                output2 += '</option>';

            }
        }
        document.querySelector("#ingredients").innerHTML = output;
        document.querySelector("#origin").innerHTML = output2;

    }
}


ingredients.open('GET', 'https://www.themealdb.com/api/json/v1/1/latest.php');
ingredients.send();

//random View generator

// var random = new XMLHttpRequest();
for ( i = 0; i < 8; i++) {
    setTimeout(function () {
        var random = new XMLHttpRequest();
        random.onreadystatechange = function () {
            if (random.readyState === 4) {
                var response = JSON.parse(random.responseText);
                console.log(response);
                var output = "";
                for (key in response) {
                    for (keyValue in response[key]) {
                        output += '<div class="col-sm-6">';
                        output += '<img class="col-md-12" src="' + response[key][keyValue]['strMealThumb'] + '" alt="' + response[key][keyValue]['strMealThumb'] + '" >';
                        output += '<a>' + response[key][keyValue]['strMeal'] + '</a>';
                        output+= '</div>';
                    }
                }
                document.querySelector("#randomView").innerHTML += output;
            }
        }
        random.open('GET', 'https://www.themealdb.com/api/json/v1/1/random.php');
        random.send();
    }, 100 * i);
}

// random.open('GET', 'https://www.themealdb.com/api/json/v1/1/random.php');
// random.send();

//random View generator

//latest recipes View

var latest = new XMLHttpRequest();

latest.onreadystatechange = function () {
    if (latest.readyState === 4) {
        var response = JSON.parse(latest.responseText);
        // console.log(response);
        var output = "";
        for (key in response) {
            for (keyValue in response[key]) {
                // console.log(response[key][keyValue]['strMealThumb']);
                output += '<div class="col-md-6 col-sm-12 ">';
                output += '<div class="col-md-6 col-sm-6 ">';
                output += '<img class="col-md-12" src="' + response[key][keyValue]['strMealThumb'] + '" alt="' + response[key][keyValue]['strMealThumb'] + '" >';
                output += '</div>';
                output += '<div class="col-md-6 col-sm-12 ">';
                output += '<h3>' + response[key][keyValue]['strMeal'] + '</h3>'
                output += '<p>';
                for (i = 1; i <= 20; i++) {
                    if (response[key][keyValue]['strIngredient' + [i] + ''] !== "") {
                        // console.log(response[key][keyValue]['strIngredient' + [i] + '']);

                        output += response[key][keyValue]['strIngredient' + [i] + ''] + ". ";

                    }
                }
                output += '</p>';
                output += '<p>' + response[key][keyValue]['strInstructions'].substr(0, 100) + "..." + '</p>';
                output += '</div>';
                output += '</div>';
            }
        }
        document.querySelector("#recipeViewLatest").innerHTML = output;
    }
}


latest.open('GET', 'https://www.themealdb.com/api/json/v1/1/latest.php');
latest.send();
