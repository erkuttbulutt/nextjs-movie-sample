import MovieContainer from "@/containers/movie";
import { notFound } from "next/navigation";
import { getMovie } from "@/services/movie";

const MoviePage = async ({ params,searchParams }) => {

  const movieDetail = await getMovie(params.id)

  if(!movieDetail){
    notFound()
  }

  //! Loading Trial
  async function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  await delay(500)

  //! Error Trial 
  // if(searchParams.error === "true"){
  //   throw new Error("Error happened.")
  // }

  return (
    <div>
      <MovieContainer movie={movieDetail}/>
    </div>
  );
};

export default MoviePage;
