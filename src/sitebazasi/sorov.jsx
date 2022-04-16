const API_KEY= "1cfbbd2a0544c0f5db7c30b3f4caa470"

const sorov = {
   fetchTrending: `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
   trailerQuery: `/videos?api_key=${API_KEY}`,
}

export default sorov;