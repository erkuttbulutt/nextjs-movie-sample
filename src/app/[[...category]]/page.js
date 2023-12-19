import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json";
import {
  getTopRatedMovies,
  getPopularMovies,
  getCategories,
  getSingleCategory,
} from "@/services/movie";

const HomePage = async ({ params }) => {
  let selectedCategory;

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([getTopRatedMovies(), getPopularMovies(), getCategories()]);

  if (params.category > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }

  async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  await delay(500);

  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params?.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  );
};

export default HomePage;
