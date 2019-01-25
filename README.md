# Liri - Command Line Interface App


This application runs on the CLI and it can take in one of the following 4 commands + one parameter:

1. `node liri.js concert-this + <your band or artist name>`

    * This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

    ```
     * Name of the venue

     * Venue location

     * Date of the Event (uses moment to format this as "MM/DD/YYYY")
    ```

2. `node liri.js spotify-this-song + <your song name>`

   * This shows the following information about the song in the terminal/bash window:

        ```
        * Artist(s)

        * The song's name

        * A preview link of the song from Spotify

        * The album that the song is from

        * If no song is provided then the program will default to "The Sign" by Ace of Base.
        ```

   


     

3. `node liri.js movie-this + <your movie>`

    * This outputs the following information to the terminal/bash window:

        ```
        * Title of the movie.
        * Year the movie came out.
        * IMDB Rating of the movie.
        * Rotten Tomatoes Rating of the movie.
        * Country where the movie was produced.
        * Language of the movie.
        * Plot of the movie.
        * Actors in the movie.
        ```

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


   * The `axios` package is used to retrieve data from the OMDB API. 
* Example:
[!results](https://github.com/fedevillalp/liri-node-app/blob/master/Images/movie-this.png)
   

4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI can take the text inside of random.txt and then use it to call one of LIRI's commands as described above.

    * Example: 
   ![Results Image](https://github.com/fedevillalp/liri-node-app/blob/master/Images/do-what-it-says.png)


