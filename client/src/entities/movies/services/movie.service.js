import * as apiService from "./../../../shared/services/rest-api.service";

export const getAllMovies = async () => apiService.get("/movies");

export const getMovie = async (id) => apiService.get("/movies/" + id);