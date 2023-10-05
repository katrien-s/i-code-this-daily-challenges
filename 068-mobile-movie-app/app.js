const movieCastList = document.querySelector('.movie-cast-list');

/* Get the number of items */
const numColumns = movieCastList.childElementCount;

// Set the value of --num-columns CSS variable
movieCastList.style.setProperty('--num-columns', numColumns);
