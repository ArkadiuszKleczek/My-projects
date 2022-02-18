let data = [
    {
        name: "Arek",
        surname: "Pilipiuk",
        age: '30'
    },
    {
        name: "Darek",
        surname: "Mróz",
        age: '20'
    },
    {
        name: "Marek",
        surname: "Piekara",
        age: '33'
    },
    {
        name: "Tomek",
        surname: "Sapkowski",
        age: '36'
    },
    {
        name: "Janek",
        surname: "Grzędowicz",
        age: '19'
    },
    {
        name: "Kuba",
        surname: "Dukaj",
        age: '31'
    },
];

const info = document.querySelector('.info');

let details = data.map(item => {
   return (
       '<div>' + item.name +' '+ item.surname +' - '+ item.age +' lat.'+ '</div>'
   )
});

info.innerHTML = details.join('\n');