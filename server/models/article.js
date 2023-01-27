const { application } = require("express");
const articles = [
    {title:'Cafeaua arabica',description:'Reprezinta aproximativ 70% din totalul productiei de cafea boabe din lume. Cea mai mare parte este produsa industrializat in Brazilia, aceasta tara fiind prima in topul tarilor producatoare.', createdAt: new Date()},
    {title:'Cafeaua Robusta',description:'Este o cafea mai intensa, bogata in cofeina, cu un corp plin si aroma mai putina. Ca soi este mai rezistenta la conditiile de mediu decat cafeaua arabica. Este cultivata in Africa si in Asia, in regiuni mai joase. Ca forma, bobul este mai mic fata de cel de arabica iar canelura este drepta iar la arabica in forma de S. Se utilizeaza ca atare sau in amestec cu cafeaua arabica pentru metoda espresso de preparare a cafelei. Se utilizeaza mai ales in productia de cafea solubila.', createdAt: new Date()},
    {title:'Cafeaua Liberica',description:'este asemanatoare cu cafeaua Robusta fiind cultivata pentru prima data in tara africana Liberia. Astazi este intalnita in Africa si America de sud, in regiunile cu umitate crescuta dar temperatura mai scazuta (20-25 grade). Specia este rezistenta la conditiile de mediu insa cafeaua este considerata mediocra.', createdAt: new Date()},
    
]

module.exports = articles;