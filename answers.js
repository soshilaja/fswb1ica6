
const sw = require('./starWarsCharacters');

//MAP Solutions
const allNames = sw.map(x=>x.name);
console.log(`Map #1: [${allNames}]`);

const allHeights = sw.map(x=>x.height);
console.log(`Map #2: [${allHeights}]`);

const allNameHeights = sw.map(x=>({name:x.name, height:x.height}));
console.log('Map #3:', allNameHeights);

const allFirstNames = sw.map(x=>x.name.split(" ").splice(0,1));
console.log(`Map #4: [${allFirstNames}]`);

//REDUCE Solutions
const totalMass = sw.map(x=>x.mass).reduce((a,i)=>(parseInt(a)+parseInt(i)));
console.log(`Reduce #1: ${totalMass}`);

const totalHeight = sw.map(x=>x.height).reduce((a,i)=>(parseInt(a)+parseInt(i)));
console.log(`Reduce #2: ${totalHeight}`);

const totalCharactersInNames = sw.map(x=>x.name.split(" ").join('')).reduce((a,i)=>a+i).length;
console.log(`Reduce #3: ${totalCharactersInNames}`);

const totalCharactersInEyeColor = sw.map(x=>x.eye_color.split(" ").join('')).reduce((a,i)=>a+i).length; //So I thought the question was to do a reduce of the characters of the eye color
console.log(`Reduce #4: ${totalCharactersInEyeColor}`);

const totalXtersInEyeColor = sw.reduce((a,i)=>{
    if(i.eye_color in a){
        a[i.eye_color]+= 1;
    } else{
        a[i.eye_color] = 1;
    }
    return a;
},{});
console.log('Reduce #4:', totalXtersInEyeColor); // solution 1

const totalXtersInEyeColor2 = sw.reduce((a,i)=>{
    a[i.eye_color]=(a[i.eye_color] || 0)+1;
    return a;
},{});
console.log('Reduce #4:', totalXtersInEyeColor2); //solution 2

const totalXtersInEyeColor3 = sw.reduce((a,i)=>(
    a[i.eye_color]=++
    a[i.eye_color] || 1,a),
    {});
console.log('Reduce #4:', totalXtersInEyeColor3); //solution 3

//FILTER Solutions
const massGreaterThan100 = sw.filter(x=>x.mass > 100).map(x=>x.name);
console.log(`Filter #1: ${massGreaterThan100}`);

const heightLessThan200 = sw.filter(x=>x.height < 200).map(x=>x.name);
console.log(`Filter #2: ${heightLessThan200}`);

const allMale = sw.filter(x=>x.gender === 'male').map(x=>x.name);
console.log(`Filter #3: ${allMale}`);

const allFemale = sw.filter(x=>x.gender === 'female').map(x=>x.name);
console.log(`Filter #4: ${allFemale}`);

//SORT Solutions
const nameSort = sw.map(x=>x.name).sort();
console.log(`Sort #1: ${nameSort}`);

const massSortA = sw.map(x=>x.mass).sort((a,b)=>a-b);
console.log(`Sort #2a: ${massSortA}`);

const massSortB = sw.sort((a,b)=>a.mass-b.mass);
console.log('Sort #2b:', massSortB);

const heightSortA = sw.map(x=>x.height).sort((a,b)=>a-b);
console.log(`Sort #3a: ${heightSortA}`);

const heightSortB = sw.sort((a,b)=>a.height-b.height);
console.log('Sort #3b:', heightSortB);

const genderSort = sw.map(x=>x.gender).sort();
console.log(`Sort #4: ${genderSort}`);

//Every Solution
const blueEyes = sw.every(x=>x.eye_color <= 'blue');
console.log(`Every #1: ${blueEyes}`);

const massMoreThan40 = sw.every(x=>x.mass >= 40);
console.log(`Every #2: ${massMoreThan40}`);

const heightLess200 = sw.every(x=>x.height <= 200);
console.log(`Every #3: ${heightLess200}`);

const maleGender = sw.every(x=>x.gender >= 'male');
console.log(`Every #4: ${maleGender}`);

//Some Solution
const oneMaleCharacter = sw.some(x=>x.gender >= 'male');
console.log(`Some #1: ${oneMaleCharacter}`);

const oneBlueCharacter = sw.some(x=>x.eye_color >= 'blue');
console.log(`Some #2: ${oneBlueCharacter}`);

const oneTallCharacter = sw.some(x=>x.height >= '200');
console.log(`Some #3: ${oneTallCharacter}`);

const oneMassCharacter = sw.some(x=>x.mass >= '50');
console.log(`Some #4: ${oneMassCharacter}`);