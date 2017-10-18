// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.
//
// When building your function:
//
// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

// push all movies into a set

// iterate through movieList
// create a variable that determines what flight time is necessary
// given a particular time in movieList to equal flightTime

// if that number exists, return
// otherwise, doesn't exist

function possibleMovies(movieList, flightTime){

  movieTimes = new Set();

  for(var i = 0; i < movieList.length; i++){

    movieList.forEach(function(movieTime){
      movieTimes.add(movieTime);
    });
    secondMovie = flightTime - movieList[i];
    if(movieTimes.has(secondMovie))
    {
      return true;
    }
  }
  return false;
}

console.log(possibleMovies([10, 10, 13, 13], 20));
