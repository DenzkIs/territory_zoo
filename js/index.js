const animalsArr = [
    {
        name: 'Собака',
        image: './img/dog.png',
        link: '#'
    },
    {
        name: 'Кот',
        image: './img/cat.png',
        link: '#'
    },
    {
        name: 'Мышь',
        image: './img/mouse.png',
        link: '#'
    },
    {
        name: 'Попугай',
        image: './img/bird.png',
        link: '#'
    },
    {
        name: 'Рыбка',
        image: './img/fish.png',
        link: '#'
    },
]

const animalList = document.querySelector(".main_animals_list")
for(let i of animalsArr){
    const a = document.createElement('a')
    a.classList.add('main_animal_item')
    a.href = i.link
    a.innerHTML = `<div class='main_animal_img'><img src='${i.image}' alt='${i.image}'></div><p>${i.name}</p>`
    animalList.append(a)
}