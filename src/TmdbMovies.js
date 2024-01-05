const apiKey = "dfbba6bc5aa7d254c4cfe89d724a76e8";

export const getMovie = () => {
  return fetch(
    "https://api.themoviedb.org/3/discover/movie?" + "api_key=" + apiKey
  )
    .then((res) => res.json())
    .then((json) => json.results)
    .catch((error) => {
      console.error("Error fetching movies:", error);
      return []; // Devuelve un array vacío en caso de error
    });
};
