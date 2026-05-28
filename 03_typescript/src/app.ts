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

const findHeroById = (id:number)=> {
   return heros.find((hero)=> hero.id === id);
}

const hero = findHeroById(3);

console.log(hero?.name??'Hero not found');