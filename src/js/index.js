const element = {
        div: ((x, y) => `<div ${y || ""} >${x}</div>`),
        questionText: ((id, q, t) => `<label class="question"> ${q} <br> <input type="text" id="${id}" ${t || ""}> </label>`),
        questionEmail: ((id, q, t) => `<label class="question"> ${q} <br> <input type="email" id="${id}" ${t || ""}> </label>`),
        questionDate: ((id, q, t) => `<label class="question"> ${q} <br> <input type="date" id="${id}" ${t || ""}> </label>`),
        msg: ((id, q, t ) => `<h2 class="msg" id="${id}" ${ t || ""} >${q}</h2>`),
        radioNode:((name, val, id, t) => `<p class="radio">
        <input type="radio" value = "${val}" name="${name}" id="${id}" ${t || ""} >
        <span class="checkmark"></span>
        <label for="${id}">${val}</label>
        </p> `)
    },
    {
        msg,
        div,
        questionText,
        questionEmail,
        questionDate,
        radioNode
    } = element,
    progBar = document.querySelector('.app__controls__progress'),
    app = document.querySelector(`.app-v`),
    back = document.querySelector('.back'),
    next = document.querySelector('.next'),
    /////////////////////////////////////////////////////////////////////////////
    //Interact with code below
    page1 = questionText("name", "What is your full name?") + questionText("nickname", "Do you have a preferred name??") + questionDate("birthday", "What is your date of birth?"),
    page2 = questionText("hometown", "Where do you live?") + questionEmail("4", "What is your email adress?") + questionDate("startDate", "When can you start work?"),
    page3 = questionDate("event", "When do you want to host your event?") + questionText("evemtWhere", "When do you want to host an event?"),
    page4 = questionText("live", "where do you want to live"),
    page5= msg("Whats Your Favorite Ice Cream Flavor", "Whats Your Favorite Ice Cream Flavor") + radioNode("ic", "vanilla", 1) + radioNode("ic", "Chocolate", 2) + radioNode("ic","Strawberry", 3) + radioNode("ic","Mint", 4),
    page = [
        page1,
        page2,
        page3,
        page4,
        page5
    ],
    radioFlag = [
        page5
    ],
    //Interact with code above
    /////////////////////////////////////////////////////////////////////////////
    size = page.length - 1;


let current = 0,
    json = {},
    controler = (direction) => {
        recordData()
        if (direction === "back") current === 0 ? current : current--;
        else current === size ? current : current++;
        displaycurrent(page[current]);
        checkForLast()
        updateProgress(current, size)
        fillData()
    },
    checkForLast = () => {
        if (current === size) {
            next.innerText = "Submit";
            next.style.animation = "pulsaitingBtn 2s infinite";
            next.removeEventListener("click", controler);
            next.addEventListener("click", submit);
        } else {
            next.style.animation = "none";
            next.innerHTML = `Next <i class="fas fa-arrow-right"></i>`;
            next.removeEventListener("click", submit);
            next.addEventListener("click", controler);

        }
    },
    recordData = () => {
        if (checkFlag(page[current])) {
            return
            //const data = document.querySelector('input[type="radio"]:checked').value
            //json = { ...json,[node.id]: data};
        } else {
            const data = Array.slice(document.querySelectorAll('input'));
            data.forEach(addData);
        }
    },
    displaycurrent = (disp) => app.innerHTML = disp,
    fillData = () => {
        const data = Array.slice(document.querySelectorAll('input'));
        data.forEach(populate);
    },
    populate = (node) => node.value = json[node.id] || "",
    addData = (node) => json = { ...json,
        [node.id]: node.value
    },
    submit = () => {
        recordData()
        back.style.display = "none";
        next.style.display = "none";
        document.body.classList.add("submit");
        console.log(json);
        json = JSON.stringify(json);
        console.log(json);
        displaycurrent(msg("", "Thank You, you have successfully submitted the questionnaire") + msg("","Check console for JSON obj and stringify JSON"));
    },
    checkFlag = (page) => {
        radioFlag.includes(page);
    },
    updateProgress = (cur, total) => progBar.style.backgroundImage = `linear-gradient(to right, var(--color-primary) ${(cur/total)*100}%, var(--gray-body) ${(cur/total)*100}%)`;



app.innerHTML = page[current]

back.addEventListener("click", function () {
    controler("back")
});

next.addEventListener("click", controler);



















































// function controler(direction) {
//     recordData()
//     if (direction === "back") current === 0 ? current : current--;
//     else current === size ? current : current++;
//     displaycurrent()
//     checkForLast()
//     updateProgress(current, size)
//     fillData()
// }

// function checkForLast() {
//     if (current === size) {
//         next.innerText = "Submit";
//         next.style.animation = "pulsaitingBtn 2s infinite";
//         next.removeEventListener("click", controler);
//         next.addEventListener("click", submit);
//     } else {
//         next.style.animation = "none";
//         next.innerHTML = `Next <i class="fas fa-arrow-right"></i>`;
//         next.removeEventListener("click", submit);
//         next.addEventListener("click", controler);

//     }
// }

// function recordData() {
//     const data = Array.slice(document.querySelectorAll('input'));
//     data.forEach(addData);
// }

// function displaycurrent() {
//     app.innerHTML = page[current];
// }

// function fillData() {
//     const data = Array.slice(document.querySelectorAll('input'));
//     data.forEach(populate);
// }

// function populate(node) {
//     node.value = json[node.id] || "";
// } 

// function addData(node) {
//     json = {...json, [node.id]: node.value}
// }

// function submit() {
//     recordData() 
//     console.log(JSON.stringify(json));
// }

// function updateProgress(cur, total) {
//     progBar.style.backgroundImage = `linear-gradient(to right, var(--color-primary) ${(cur/total)*100}%, var(--gray-body) ${(cur/total)*100}%)`;
// }

// function backOne() {
//     recordData()
//     current === 0 ? current : current--;
//     displaycurrent()
//     updateProgress(current, size)
//     fillData()
// } 
// function nextOne() {
//     recordData()
//     current === size ? current : current++; 
//     displaycurrent()
//     updateProgress(current, size)
//     fillData()
// }