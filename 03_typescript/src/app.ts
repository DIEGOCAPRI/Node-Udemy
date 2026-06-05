import { findHeroById } from "./services/hero.service.js";


const heroe = findHeroById(1);

console.log(heroe?.name??'Hero not found');