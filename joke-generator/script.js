
var dadJokes = [
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Did you hear about the restaurant on the moon? Great food, no atmosphere!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "What did one wall say to the other wall? I'll meet you at the corner!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why did the coffee file a police report? It got mugged!",
  "What's the best time to go to the dentist? Tooth-hurty!"
];


var momJokes = [
  "I'm not like a regular mom, I'm a cool mom!",
  "Why did the mom bring a ladder to the bar? Because she heard the drinks were on the house!",
  "Mom: Why didn't you close the refrigerator door? Me: Because the light inside is still on!",
  "I told my mom I got a role in a play. She said, 'That's nice, but when are you going to get a real job?'",
  "Why don't moms need keys to open doors? Because they have the 'mom magic'!",
  "Mom: How do I look? Me: With your eyes, mom!",
  "Why did the mom take a nap in the vegetable garden? She wanted to wake up refreshed!",
  "What did the mom say when her son couldn't find his guitar? 'Don't fret, we'll find it!'",
  "Why did the mom go to the restaurant with a ladder? She heard the food was on another level!"
];


function generateJoke() {
  var randomIndex;
  var jokeElement = document.getElementById('joke');

  if (document.getElementById('dadJokesBtn').classList.contains('active')) {
    randomIndex = Math.floor(Math.random() * dadJokes.length);
    jokeElement.textContent = dadJokes[randomIndex];
  } else if (document.getElementById('momJokesBtn').classList.contains('active')) {
    randomIndex = Math.floor(Math.random() * momJokes.length);
    jokeElement.textContent = momJokes[randomIndex];
  }
}


var dadJokesBtn = document.getElementById('dadJokesBtn');
var momJokesBtn = document.getElementById('momJokesBtn');

dadJokesBtn.addEventListener('click', function () {
  dadJokesBtn.classList.add('active');
  momJokesBtn.classList.remove('active');
});

momJokesBtn.addEventListener('click', function () {
  momJokesBtn.classList.add('active');
  dadJokesBtn.classList.remove('active');
});


generateJoke();


var generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', generateJoke);
