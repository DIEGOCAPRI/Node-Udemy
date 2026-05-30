"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heros = [
    {
        id: 1,
        name: "Ironman",
        owner: "Marvel"
    },
    {
        id: 2,
        name: "Spiderman",
        owner: "Marvel"
    },
    {
        id: 3,
        name: "Batman",
        owner: "DC"
    },
];
const findHeroById = (id) => {
    return heros.find((hero) => hero.id === id);
};
const hero = findHeroById(1);
console.log(hero?.name ?? 'Hero not found');
//# sourceMappingURL=app.js.map