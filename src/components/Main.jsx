import React from 'react';
import Banner from './Banner';
import Navbar from "./Navbar";
import Films from "./Films";
import sorov from '../sitebazasi/sorov';

const Main = ({user}) => {
   return (
      <>
         <Navbar user={user}/>
         <Banner/>
         <Films isLargeRow title={"NETFLIX ORIGINALS"} movie_request={sorov.fetchNetflixOriginals}/>
         <Films isLargeRow title={"Trending now"} movie_request={sorov.fetchTrending}/>
         <Films isLargeRow title={"Top rated"} movie_request={sorov.fetchTopRated}/>
         <Films isLargeRow title={"Action movies"} movie_request={sorov.fetchActionMovies}/>
         <Films isLargeRow title={"Comedy movies"} movie_request={sorov.fetchComedyMovies}/>
         <Films isLargeRow title={"Horror movies"} movie_request={sorov.fetchHorrorMovies}/>
         <Films isLargeRow title={"Romance movies"} movie_request={sorov.fetchRomanceMovies}/>
         <Films isLargeRow title={"Documentaries movies"} movie_request={sorov.fetchDocumentaries}/>
      </>
   );
};


export default Main;