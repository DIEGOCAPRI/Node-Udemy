"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero_service_1 = require("./services/hero.service");
const heroe = (0, hero_service_1.findHeroById)(6);
console.log(heroe?.name ?? 'Hero not found');
//# sourceMappingURL=app.js.map