const BASE_API=`https://api.simkl.com/tv/best/filter?type=series&client_id=8cb9a5152f9368e7e96c89d8ec4fa86ed82e0d4cd0284a86f8945bcf4d53d0f8`;

const apiURL=`https://api.simkl.com/tv/`;

//Tv & Shows
const tvShows="https://api.simkl.com/tv/episodes/id?client_id=8cb9a5152f9368e7e96c89d8ec4fa86ed82e0d4cd0284a86f8945bcf4d53d0f8"

//Animy
const animy="https://api.simkl.com/anime/id?client_id=8cb9a5152f9368e7e96c89d8ec4fa86ed82e0d4cd0284a86f8945bcf4d53d0f8"

//All Moveis Exports 
export const  MovieURL=()=>`${BASE_API}`;
export const TvShoesURL=()=>`${tvShows}`;
export const AnimyURL=()=>`${animy}`;

//Movie Detail 
export const movieDetailURL=(movie_id)=>`${apiURL}${movie_id}?extended=full&client_id=8cb9a5152f9368e7e96c89d8ec4fa86ed82e0d4cd0284a86f8945bcf4d53d0f8`

export const bestShowsURL=()=>`https://api.simkl.com/anime/best/watched?client_id=8cb9a5152f9368e7e96c89d8ec4fa86ed82e0d4cd0284a86f8945bcf4d53d0f8`