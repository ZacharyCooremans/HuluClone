const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/discover/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/all/week?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discover/all/week?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorror: {
        title: 'Horror',
        url: `/dicvoer/all/week?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/all/week?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery: {
        title: 'Mystery',
        url: `/discover/all/week?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi: {
        title: 'Sci-Fi',
        url: `/discover/all/week?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern: {
        title: 'Western',
        url: `/discover/all/week?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation: {
        title: 'Animation',
        url: `/iscover/all/week?api_key=${API_KEY}&with_genres=16`
    },
    fetchTV: {
        title: 'TV Movie',
        url: `/discover/all/week?api_key=${API_KEY}&with_genres=10770`
    },
}