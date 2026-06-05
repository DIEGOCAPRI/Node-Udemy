import { findHeroById } from "./services/hero.service";


const heroe = findHeroById(6);

console.log(heroe?.name??'Hero not found');