console.log('***** Music Collection *****')
// - Create a variable `collection` that starts as an empty array.

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

// - Test the `showCollection` function.

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

// > When testing your functions, write all tests in the JavaScript file!


collection = []

function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished

  };
  collection.push(album)
  return album

}

console.log(addToCollection("Good Kid MAAD City", "Kendrick Lamar", 2014));
console.log(addToCollection("To Pimp A Butterfly", "Kendrick Lamar", 2016));
console.log(addToCollection("DAMN", "Kendrick Lamar", 2017));
console.log(addToCollection("17", "XXXTENTACION", 2017));
console.log(addToCollection("444", "JAY-Z", 2017));
console.log(addToCollection("Empathy", "blest.", 2020));
console.log(collection);


// need help understanding the logic behind this
function showCollection(arr) {
  console.log(arr.length);
  for (album of arr) {
    console.log(`${album.title} by ${album.artist} published in ${album.yearPublished}`);

  }
  return arr
}
console.log(showCollection(collection));



function findByArtist(artist) {
  results = [];
  for (album of collection) {
    if (artist === album.artist) {
      results.push(album)

    }
  }
  return results
}
console.log(findByArtist("Kendrick Lamar"));
console.log(findByArtist("Taylor Swift"));
console.log(findByArtist("blest."));
console.log(findByArtist("Jorja Smith"));



// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.


function search(artist, year) {
  searchResults = [];


}
