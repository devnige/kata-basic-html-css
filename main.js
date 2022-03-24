const items = [
    {
        name: "Milk",
        checked: false,
        id: 0
    },
    {
        name: "Bread",
        checked: false,
        id: 1
    },
    {
        name: "Eggs",
        checked: false,
        id: 2
    }
];

let currentId = items.length;

// This method will be run once the browser has loaded the DOM. 
// If you try doing things before this happens you won't be able to find document!
window.onload = () => {
    setUp();
    render();
};

const setUp = () => {
    // set things up here!
    console.log("We're set up and ready to rumble!")
    const targetAdd = document.getElementById("addbutton");
    targetAdd.disabled = true;

    const input = document.getElementById("input");

    input.addEventListener('input', evt => {
        const value = input.value;
        if(!value){
            input.dataset.state = ''
            targetAdd.disabled = true;
            return;
        }
        const trimmed = value.trim();
        if(trimmed){
            input.dataset.state = 'valid';
            targetAdd.disabled = false;
        } else {
            input.dataset.state = 'invalid'
            targetAdd.disabled = true;
        }
    })
    targetAdd.addEventListener("click", () => addItem(input));
    
}

const createItemHtml = (name, checked, id) => `
<li id="${id}" class="card">
    <span class=${isItemChecked(checked)}>${name}</span><button id = "${name}button" class="btn--tick" ${isButtonDisabled(checked)}>Tick!</button>
</li>
`;

function render() {
    const itemsHtmlList = [];
    for(let i = 0; i < items.length; i++){
        const currentItem = items[i];
        const itemHtml = createItemHtml(currentItem.name, currentItem.checked, currentItem.id);
        itemsHtmlList.push(itemHtml);
    }
    const itemsHtml = itemsHtmlList.join('\n');
    const itemsSection = document.getElementById("items");
    itemsSection.innerHTML = itemsHtml;
    addEventListenerToTickButtonsAndUpdateCard();
}
    
function addEventListenerToTickButtonsAndUpdateCard() {
    for(const tick of document.querySelectorAll(".btn--tick")){
        tick.addEventListener("click", () => {
                updateItemCard(tick);
        });
    }  
}

function updateItemCard(tick) {
    tick.disabled = true;
    tick.parentElement.classList.add("p--linethrough");
    items[tick.parentElement.parentElement.id].checked = true;
}  

function addItem(input) {
    const item = {
        name: `${input.value}`,
        checked: false,
        id: currentId++
    };
    console.log(item);
    items.push(item);
    input.value = "";
    render();
}

function isItemChecked(checked){
    if(checked){
        return "p--linethrough";
    }
    else return "";
}

function isButtonDisabled(checked){
    if(checked){
        return "disabled";
    }
    else return "";
}




