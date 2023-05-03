/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let personalInfo={};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
personalInfo={
    name: "Leven"
};
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
personalInfo={
    name: "Leven",
    photo: "images/selfie.png"
};
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
personalInfo={
    name: "Leven",
    photo: "images/selfie.png",
    favoriteFoods: ["Steak"," Pork Chops"," Chicken Wings"," Spaghetti"," Chimichangas"]
};
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
personalInfo={
    name: "Leven",
    photo: "images/selfie.png",
    favoriteFoods: ["Steak"," Pork Chops"," Chicken Wings"," Spaghetti"," Chimichangas"],
    hobbies: ["tennis","video games","pickleball","movies","TV shows"]
};
// Step 6: Add another property named placesLived with a value of an empty array
personalInfo={
    name: "Leven",
    photo: "images/selfie.png",
    favoriteFoods: ["Steak"," Pork Chops"," Chicken Wings"," Spaghetti"," Chimichangas"],
    hobbies: ["tennis","video games","pickleball","movies","TV shows"],
    placesLived: []
};
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
personalInfo={
    name: "Leven",
    photo: "images/selfie.png",
    favoriteFoods: ["Steak"," Pork Chops"," Chicken Wings"," Spaghetti"," Chimichangas"],
    hobbies: ["tennis","video games","pickleball","movies","TV shows"],
    placesLived: [
        Texas={
            place:"",
            length:"",
        }
    ]
};
// Step 8: For each property, add appropriate values as strings
personalInfo={
    name: "Leven",
    photo: "images/selfie.png",
    favoriteFoods: ["Steak"," Pork Chops"," Chicken Wings"," Spaghetti"," Chimichangas"],
    hobbies: ["tennis","video games","pickleball","movies","TV shows"],
    placesLived: [
        {
            place:"Texas",
            length:"20 years",
        }
    ]
};
// Step 9: Add additional objects with the same properties for each place you've lived
personalInfo={
    name: "Leven",
    photo: "images/selfie.png",
    favoriteFoods: ["Steak"," Pork Chops"," Chicken Wings"," Spaghetti"," Chimichangas"],
    hobbies: ["tennis","video games","pickleball","movies","TV shows"],
    placesLived: [
        {
            place:"Texas",
            length:"20 years",
        }
    ]
};

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").textContent = personalInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute('src',personalInfo.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', personalInfo.name);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

let favoriteFood1 = document.createElement('li');
favoriteFood1.textContent = personalInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement('li');
favoriteFood2.textContent = personalInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement('li');
favoriteFood3.textContent = personalInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement('li');
favoriteFood4.textContent = personalInfo.favoriteFoods[3];

let favoriteFood5 = document.createElement('li');
favoriteFood5.textContent = personalInfo.favoriteFoods[4];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

document.querySelector('#favorite-foods').appendChild(favoriteFood1);
document.querySelector('#favorite-foods').appendChild(favoriteFood2);
document.querySelector('#favorite-foods').appendChild(favoriteFood3);
document.querySelector('#favorite-foods').appendChild(favoriteFood4);
document.querySelector('#favorite-foods').appendChild(favoriteFood5);

// Step 6: Repeat Step 4 for each hobby in the hobbies property

let hobby1 = document.createElement('li');
hobby1.textContent = personalInfo.hobbies[0];

let hobby2 = document.createElement('li');
hobby2.textContent = personalInfo.hobbies[1];

let hobby3 = document.createElement('li');
hobby3.textContent = personalInfo.hobbies[2];

let hobby4 = document.createElement('li');
hobby4.textContent = personalInfo.hobbies[3];

let hobby5 = document.createElement('li');
hobby5.textContent = personalInfo.hobbies[4];
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

document.querySelector('#hobbies').appendChild(hobby1);
document.querySelector('#hobbies').appendChild(hobby2);
document.querySelector('#hobbies').appendChild(hobby3);
document.querySelector('#hobbies').appendChild(hobby4);
document.querySelector('#hobbies').appendChild(hobby5);

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

let placesLivedPlace1 = document.createElement('dt');
placesLivedPlace1.textContent = personalInfo.placesLived[0].place;

let placesLivedLength1 = document.createElement('dd');
placesLivedLength1.textContent = personalInfo.placesLived[0].length;

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

document.querySelector('#places-lived').appendChild(placesLivedPlace1);
document.querySelector('#places-lived').appendChild(placesLivedLength1);