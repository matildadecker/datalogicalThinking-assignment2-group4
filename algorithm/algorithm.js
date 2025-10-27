"use strict";

const fs = require("fs");
const text = fs.readFileSync("movies_100_clean.json", "utf8");
const MOVIES = JSON.parse(text);

function low(input) {
    if (!input){
        return "";
    } else {
        return input.toString().toLowerCase();
    } 
}

function getMovies(nameInput) {
  let target = low(nameInput);
  let results = [];
  let i = 0;
  while (i < MOVIES.length) {
    let currentMovie = MOVIES[i];
    let castList = currentMovie.cast;
    if(Array.isArray(castList)){
        let j = 0;
        while (j < castList.length){
            let person = castList[j];
            if(low(person.name)=== target){
                results.push(currentMovie.title);
                break;
            }j++;
        }
    }i++;
  } 
  return results;
}

function getActors(movieInput) {
  let target = low(movieInput);
  let i = 0;
  while (i < MOVIES.length){
    let currentMovie = MOVIES[i];
    let movieTitle = currentMovie.title;
    if(low(movieTitle) === target) {
        let names = [];
        let castList = currentMovie.cast;
        if(Array.isArray(castList)){
            let j = 0;
            while (j < castList.length){
                let person = castList[j];
                names.push(person.name);
                j++;
            }
        } return names;
    } i++;
  }
  return[];
}
