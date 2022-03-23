function getObj(){
    return this;
}
function Country(title,capital,population,area){
    this.title = title;
    this.capital = capital;
    this.population = population;
    this.area = area;
    this.getCountry = getObj;
}
const Ukraine = new Country("Ukraine","Kyiv",460000000,100000);
const Germany = new Country(" Germany","Berlin",33000000,90000);

function showOptions(country){
    const object = country.getCountry();
for (const key in object){
    if(typeof object[key] != "function"){
        console.log(`${key}: ${object[key]}`);
    }
}
}
showOptions(Ukraine);