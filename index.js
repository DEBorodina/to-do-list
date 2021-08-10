//root
const root = document.querySelector("#root");

//data
let todos = [
    {
        title:'Drink',
        text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, aliquid.',
        time:'15:00',
    },
    {
        title:'Eat',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis odit voluptatibus quos aliquam voluptas. Consequuntur fuga fugiat iure nostrum.',
        time:'16:00',
    },
    {
        title:'Eat',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis odit voluptatibus quos aliquam voluptas. Consequuntur fuga fugiat iure nostrum.',
        time:'16:00',
    },
    {
        title:'Eat',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis odit voluptatibus quos aliquam voluptas. Consequuntur fuga fugiat iure nostrum.',
        time:'16:00',
    },
]


function createInput(){
    const card = document.createElement('div');
    const cardContent = document.createElement('div');
    const cardTitle = document.createElement('h1');
    const inputTitle = document.createElement('input');
    const inputTime = document.createElement('input');
    const inputText = document.createElement('textarea');
    const inputContainer = document.createElement('label');
    const checkbox = document.createElement('input');
    const checkmark = document.createElement('span');

    checkbox.type = 'checkbox';
    inputTitle.type = 'text';
    inputTitle.placeholder="Введите название";
    inputTime.type = 'text';
    inputTime.placeholder="Введите время";
    inputText.placeholder="Введите описание";

    card.className = `card`;
    cardContent.className = `content`;
    cardTitle.className = `creating-input-title`;
    inputTitle.className = `input_title`;
    inputTime.className = `input_time`;
    inputText.className = 'input_text';
    inputContainer.className = `container-input`;
    checkbox.className = `checkbox`;
    checkmark.className =`checkmark`;

    cardTitle.textContent = `Создание задачи`;    

    inputContainer.append(checkbox,checkmark);
    cardContent.append(cardTitle, inputTitle, inputTime, inputText, inputContainer);
    card.append(cardContent);
    root.append(card);
}

function createCard(todo){
    const card = document.createElement('div');
    const cardContent = document.createElement('div');
    const deleteButton = document.createElement('buttton');
    const rubbishIcon = document.createElement('img');
    const cardTitle = document.createElement('h1');
    const cardTime = document.createElement('p');
    const cardText = document.createElement('h2');
    const inputContainer = document.createElement('label');
    const checkbox = document.createElement('input');
    const checkmark = document.createElement('span');

    checkbox.type = 'checkbox';
    rubbishIcon.src = "trash_icon.png";

    card.className = `card`;
    cardContent.className = `content`;
    deleteButton.className = `delete`;
    cardTitle.className = `title`;
    rubbishIcon.className = "h-6 w-6";
    cardTime.className = `time`;
    cardText.className = 'text';
    inputContainer.className = `container-input`;
    checkbox.className = `checkbox`;
    checkmark.className =`checkmark`;
    
    cardTitle.textContent = todo.title;
    cardText.textContent = todo.text;
    cardTime.textContent = todo.time;

    deleteButton.append(rubbishIcon);
    inputContainer.append(checkbox,checkmark);
    cardContent.append(deleteButton, cardTitle, cardTime, cardText, inputContainer);
    card.append(cardContent);
    root.append(card);
}


function render(todos){
    createInput();
    todos.forEach(todo=>{
        createCard(todo);
    })
}
render(todos);

