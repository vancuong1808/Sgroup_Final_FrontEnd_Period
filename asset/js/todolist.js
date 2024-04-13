var Todo = [
    // {
    //     Category: "",
    //     Title: "",
    //     Content: "",
    //     FullDate: {
    //         Day: 3,
    //         Month: 2,
    //         Year: 2024
    //     }
    // }
]
var Doing = [
    // {
    //     Category: "",
    //     Title: "",
    //     Content: "",
    //     FullDate: {
    //         Day: 3,
    //         Month: 2,
    //         Year: 2024
    //     }
    // }
]
var Completed = [
    // {
    //     Category: "",
    //     Title: "",
    //     Content: "",
    //     FullDate: {
    //         Day: 3,
    //         Month: 2,
    //         Year: 2024
    //     }
    // }
]
var Blocked = [
    // {
    //     Category: "",
    //     Title: "",
    //     Content: "",
    //     FullDate: {
    //         Day: 3,
    //         Month: 2,
    //         Year: 2024
    //     }
    // }
]

let Month = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}

let changeMonth = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];


if( localStorage.getItem("Todo") ) {
    Todo = JSON.parse(localStorage.getItem("Todo"));
}
if( localStorage.getItem("Doing") ) {
    Doing = JSON.parse(localStorage.getItem("Doing"));
}
if( localStorage.getItem("Completed") ) {
    Completed = JSON.parse(localStorage.getItem("Completed"));
}
if( localStorage.getItem("Blocked") ) {
    Blocked = JSON.parse(localStorage.getItem("Blocked"));
}


let NewTask = document.querySelector(".Newtask");
let PopupAddContainer = document.querySelector(".Popup-AddNewTodo-container");
let PopupAddMain = document.querySelector(".Popup-AddNewTodo-main");
let AddClose = document.querySelector(".AddNewTodo-close");
let PopupEditContainer = document.querySelector(".Popup-EditTodo-container");
let PopupEditMain = document.querySelector(".Popup-EditTodo-main");
let EditClose = document.querySelector(".EditTodo-close");
let MarketingInput = document.getElementById("AddNewTodo-Marketing-input");
let TitleInput = document.getElementById("AddNewTodo-Title-input");
let ContentInput = document.getElementById("AddNewTodo-Content-input");
let EditMarketingInput = document.getElementById("EditTodo-Marketing-input");
let EditTitleInput = document.getElementById("EditTodo-Title-input");
let EditContentInput = document.getElementById("EditTodo-Content-input");
let TodoBody = document.querySelector(".Todo-body");
let DoingBody = document.querySelector(".Doing-body");
let CompletedBody = document.querySelector(".Completed-body");
let BlockedBody = document.querySelector(".Blocked-body");
let MarketingInputCheck = false;
let TitleInputCheck = false;
let ContentInputCheck = false;
let EditMarketingInputCheck = false;
let EditTitleInputCheck = false;
let EditContentInputCheck = false;

var Tag = {
    object: null,
    index: null
}




NewTask.addEventListener("click", ()=>{
    MarketingInput.value = ""
    TitleInput.value = ""
    ContentInput.value = ""
    MarketingInputCheck = false;
    TitleInputCheck = false;
    ContentInputCheck = false;
    MarketingInput.style.border = '1px solid #00000040';
    TitleInput.style.border = '1px solid #00000040';
    ContentInput.style.border = '1px solid #00000040';
    PopupAddContainer.classList.toggle('active')
    // PopupAddContainer.style.display = "flex";
})
PopupAddContainer.addEventListener('click', ()=>{
    PopupAddContainer.classList.toggle('active')
    // PopupAddContainer.style.display = "none";
})
PopupAddMain.addEventListener('click', ()=>{
    event.stopPropagation();
})
AddClose.addEventListener('click', ()=>{
    PopupAddContainer.classList.toggle('active')
    // PopupAddContainer.style.display = "none";
})
PopupEditContainer.addEventListener('click', ()=>{
    PopupEditContainer.classList.toggle('active')
})
PopupEditMain.addEventListener('click', ()=>{
    event.stopPropagation();
})
EditClose.addEventListener('click', ()=>{
    PopupEditContainer.classList.toggle('active')
})

MarketingInput.addEventListener('input', ()=>{
    // console.log( MarketingInput.value )
    if ( MarketingInput.value != "" ) {
        MarketingInput.style.border = '2px solid #74E291';
        MarketingInputCheck = true;
    } else {
        MarketingInput.style.border = '2px solid rgb(245, 89, 89)';
        MarketingInputCheck = false;
    }
    // console.log( MarketingInputCheck )
})
TitleInput.addEventListener('input', ()=>{
    if( TitleInput.value != "" ) {
        TitleInput.style.border = '2px solid #74E291';
        TitleInputCheck = true;
    } else {
        TitleInput.style.border = '2px solid rgb(245, 89, 89)';
        TitleInputCheck = false;
    }
    // console.log( TitleInputCheck )
})
ContentInput.addEventListener('input', ()=>{
    // console.log( ContentInput.value )
    if( ContentInput.value != "" ) {
        ContentInput.style.border = '2px solid #74E291';
        ContentInputCheck = true;
    } else {
        ContentInput.style.border = '2px solid rgb(245, 89, 89)';
        ContentInputCheck = false;
    }
    // console.log( ContentInputCheck )
})
EditMarketingInput.addEventListener('input', ()=>{
    // console.log( EditMarketingInput.value )
    if ( EditMarketingInput.value != "" ) {
        EditMarketingInput.style.border = '2px solid #74E291';
        EditMarketingInputCheck = true;
    } else {
        EditMarketingInput.style.border = '2px solid rgb(245, 89, 89)';
        EditMarketingInputCheck = false;
    }
    // console.log( MarketingInputCheck )
})
EditTitleInput.addEventListener('input', ()=>{
    if( EditTitleInput.value != "" ) {
        EditTitleInput.style.border = '2px solid #74E291';
        EditTitleInputCheck = true;
    } else {
        EditTitleInput.style.border = '2px solid rgb(245, 89, 89)';
        EditTitleInputCheck = false;
    }
    // console.log( TitleInputCheck )
})
EditContentInput.addEventListener('input', ()=>{
    // console.log( EditContentInput.value )
    if( EditContentInput.value != "" ) {
        EditContentInput.style.border = '2px solid #74E291';
        EditContentInputCheck = true;
    } else {
        EditContentInput.style.border = '2px solid rgb(245, 89, 89)';
        EditContentInputCheck = false;
    }
    // console.log( ContentInputCheck )
})



function AddNewTask() {
    let NewCategory = document.getElementById("AddNewTodo-Marketing-input").value; 
    let NewTitle = document.getElementById("AddNewTodo-Title-input").value;
    let NewContent = document.getElementById("AddNewTodo-Content-input").value;
    let CurrentDate = new Date();
    let NewDay =  CurrentDate.getDay();
    let NewMonth = CurrentDate.getMonth() + 1;
    let NewYear = CurrentDate.getFullYear();
    if ( MarketingInputCheck == true && TitleInputCheck == true && ContentInputCheck == true ) {
        Todo.push({
            Category: NewCategory,
            Title: NewTitle,
            Content: NewContent,
            FullDate: {
                Day: NewDay,
                Month: NewMonth,
                Year: NewYear,
            }
        })
        localStorage.setItem("Todo", JSON.stringify(Todo));
        Render();
        // console.log( Todo, Todo.length )
        PopupAddContainer.classList.toggle('active');
    } else {
        if ( !MarketingInputCheck ) {
            MarketingInput.style.border = '2px solid rgb(245, 89, 89)';
        }
        if ( !TitleInputCheck ) {
            TitleInput.style.border = '2px solid rgb(245, 89, 89)';
        }
        if ( !ContentInputCheck ) {
            ContentInput.style.border = '2px solid rgb(245, 89, 89)';
        }
    }
}

function DeleteTask( index , object ) {
    if( object == "Todo" ) {
        Todo.splice( index, 1 );
        localStorage.setItem("Todo", JSON.stringify(Todo));
    } else if( object == "Doing" ) {
        Doing.splice( index, 1 );
        localStorage.setItem("Doing", JSON.stringify(Doing));
    } else if( object == "Completed" ) {
        Completed.splice( index, 1 );
        localStorage.setItem("Completed", JSON.stringify(Completed));
    } else if( object == "Blocked" ) {
        Blocked.splice( index, 1 );
        localStorage.setItem("Blocked", JSON.stringify(Blocked));
    }
    Render();
}

function OpenTask( index, object ) {
    EditMarketingInput.style.border = '1px solid #00000040';
    EditTitleInput.style.border = '1px solid #00000040';
    EditContentInput.style.border = '1px solid #00000040';
    let TodoChange = radios[0];
    let DoingChange = radios[1];
    let CompletedChange = radios[2];
    let BlockedChange = radios[3];
    // console.log( TodoChange, DoingChange, CompletedChange, BlockedChange )
    if ( object == "Todo" ) {
        TodoChange.checked = true;
    } else if( object == "Doing" ) {
        DoingChange.checked = true;
    } else if( object == "Completed" ) {
        CompletedChange.checked = true;
    } else if( object == "Blocked" ) {
        BlockedChange.checked = true;
    }
    Tag.object = object;
    Tag.index = index;
    let arr = window[object];
    let item  =  arr[index];
    // console.log( arr )
    // console.log( item )
    // console.log( object )
    EditMarketingInput.value = item.Category;
    EditTitleInput.value = item.Title;
    EditContentInput.value = item.Content;
    PopupEditContainer.classList.toggle('active')
}


// Lấy tất cả các radio button
let radios = document.querySelectorAll('input[type="radio"]');

function EditTask() {
    // console.log( Tag.object, Tag.index )
    let TodoChange = radios[0].checked;
    let DoingChange = radios[1].checked;
    let CompletedChange = radios[2].checked;
    let BlockedChange = radios[3].checked;
    // console.log( TodoChange, DoingChange, CompletedChange, BlockedChange )
    let EditCategory = EditMarketingInput.value;
    let EditTitle = EditTitleInput.value;
    let EditContent = EditContentInput.value;
    let CurrentDate = new Date();
    let EditDay =  CurrentDate.getDay();
    let EditMonth = CurrentDate.getMonth() + 1;
    let EditYear = CurrentDate.getFullYear();
    if ( ( EditCategory != "" && EditTitle != "" && EditContent != "" ) || ( EditMarketingInputCheck && EditTitleInputCheck && EditContentInputCheck ) ) {
        if( TodoChange ) {
            Todo.push({
                Category: EditCategory,
                Title: EditTitle,
                Content: EditContent,
                FullDate: {
                    Day: EditDay,
                    Month: EditMonth,
                    Year: EditYear,
                },
            })
            DeleteTask( Tag.index, Tag.object )
            localStorage.setItem("Todo", JSON.stringify(Todo));
        }
        if ( DoingChange ) {
            Doing.push({
                Category: EditCategory,
                Title: EditTitle,
                Content: EditContent,
                FullDate: {
                    Day: EditDay,
                    Month: EditMonth,
                    Year: EditYear
                },    
            })
            DeleteTask( Tag.index, Tag.object )
            localStorage.setItem("Doing", JSON.stringify(Doing));
        }
        if ( CompletedChange ) {
            Completed.push({
                Category: EditCategory,
                Title: EditTitle,
                Content: EditContent,
                FullDate: {
                    Day: EditDay,
                    Month: EditMonth,
                    Year: EditYear
                },
            
            })
            DeleteTask( Tag.index, Tag.object )
            localStorage.setItem("Completed", JSON.stringify(Completed));
        }
        if ( BlockedChange ) {
            Blocked.push({
                Category: EditCategory,
                Title: EditTitle,
                Content: EditContent,
                FullDate: {
                    Day: EditDay,
                    Month: EditMonth,
                    Year: EditYear
                }
            })
            DeleteTask( Tag.index, Tag.object )
            localStorage.setItem("Blocked", JSON.stringify(Blocked));
        }
        Render();
        PopupEditContainer.classList.toggle('active');
    } else {
        
        if ( EditCategory == "" && !EditMarketingInputCheck ) {
            EditMarketingInput.style.border = '2px solid rgb(245, 89, 89)';
        }
        if ( EditTitle == "" && !EditTitleInputCheck ) {
            EditTitleInput.style.border = '2px solid rgb(245, 89, 89)';
        }
        if ( EditContent == "" && !EditContentInputCheck ) {
            EditContentInput.style.border = '2px solid rgb(245, 89, 89)';
        }
    }
}


function Render() {
    // TODO
    let newTodo = Todo.map((items, index )=>{
        return ` <div ondragstart="DragStart(event, ${index}, 'Todo' )" draggable="true" class="article">
        <div class="article-header">
            <div class="Marketing">
                ${items.Category}
            </div>
            <div class="article-logo">
                <img onclick="OpenTask(${index}, 'Todo' )" src="./asset/img/Edit.png" alt="" id="edit-logo">
                <img onclick="DeleteTask(${index}, 'Todo')" src="./asset/img/Delete.png" alt="" id="delete-logo">
            </div>
        </div>
        <div class="article-body">
            <div class="article-title">
                ${items.Title}
            </div>
        </div>
        <div class="article-footer">
            <div class="inline"></div>
            <div class="article-content">
                ${items.Content}
            </div>
            <div class="article-time">
                <img src="./asset/img/clock.png" alt="" class="clock">
                <span class="time"> ${ Month[items.FullDate.Month] } ${ items.FullDate.Day }, ${ items.FullDate.Year } </span>
            </div>
        </div>
    </div> `
    })
    let TodoContainer = document.querySelector(".Todo-body");
    TodoContainer.innerHTML = newTodo.join("");
    let TodoCount = document.querySelector(".Todo-number");
    TodoCount.innerHTML = Todo.length;
    //DOING
    let newDoing = Doing.map((items, index )=>{
        return ` <div ondragstart="DragStart(event, ${index}, 'Doing' )"  draggable="true" class="article">
        <div class="article-header">
            <div class="Marketing">
                ${items.Category}
            </div>
            <div class="article-logo">
                <img onclick="OpenTask(${index}, 'Doing' )" src="./asset/img/Edit.png" alt="" id="edit-logo">
                <img onclick="DeleteTask(${index}, 'Doing')" src="./asset/img/Delete.png" alt="" id="delete-logo">
            </div>
        </div>
        <div class="article-body">
            <div class="article-title">
                ${items.Title}
            </div>
        </div>
        <div class="article-footer">
            <div class="inline"></div>
            <div class="article-content">
                ${items.Content}
            </div>
            <div class="article-time">
                <img src="./asset/img/clock.png" alt="" class="clock">
                <span class="time"> ${ Month[items.FullDate.Month] } ${ items.FullDate.Day }, ${ items.FullDate.Year } </span>
            </div>
        </div>
    </div> `
    })
    let DoingContainer = document.querySelector(".Doing-body");
    DoingContainer.innerHTML = newDoing.join("");
    let DoingCount = document.querySelector(".Doing-number");
    DoingCount.innerHTML = Doing.length;
    //COMPLETED
    let newCompleted = Completed.map((items, index )=>{
        return ` <div ondragstart="DragStart(event, ${index}, 'Completed' )"  draggable="true" class="article">
        <div class="article-header">
            <div class="Marketing">
                ${items.Category}
            </div>
            <div class="article-logo">
                <img onclick="OpenTask(${index}, 'Completed' )" src="./asset/img/Edit.png" alt="" id="edit-logo">
                <img onclick="DeleteTask(${index}, 'Completed')" src="./asset/img/Delete.png" alt="" id="delete-logo">
            </div>
        </div>
        <div class="article-body">
            <div class="article-title">
                ${items.Title}
            </div>
        </div>
        <div class="article-footer">
            <div class="inline"></div>
            <div class="article-content">
                ${items.Content}
            </div>
            <div class="article-time">
                <img src="./asset/img/clock.png" alt="" class="clock">
                <span class="time"> ${ Month[items.FullDate.Month] } ${ items.FullDate.Day }, ${ items.FullDate.Year } </span>
            </div>
        </div>
    </div> `
    })
    let CompletedContainer = document.querySelector(".Completed-body");
    CompletedContainer.innerHTML = newCompleted.join("");
    let CompletedCount = document.querySelector(".Completed-number");
    CompletedCount.innerHTML = Completed.length;
    //BLOCKED
    let newBlocked = Blocked.map((items, index )=>{
        return ` <div ondragstart="DragStart(event, ${index}, 'Blocked' )"  draggable="true" class="article">
        <div class="article-header">
            <div class="Marketing">
                ${items.Category}
            </div>
            <div class="article-logo">
                <img onclick="OpenTask(${index}, 'Blocked' )" src="./asset/img/Edit.png" alt="" id="edit-logo">
                <img onclick="DeleteTask(${index}, 'Blocked')" src="./asset/img/Delete.png" alt="" id="delete-logo">
            </div>
        </div>
        <div class="article-body">
            <div class="article-title">
                ${items.Title}
            </div>
        </div>
        <div class="article-footer">
            <div class="inline"></div>
            <div class="article-content">
                ${items.Content}
            </div>
            <div class="article-time">
                <img src="./asset/img/clock.png" alt="" class="clock">
                <span class="time"> ${ Month[items.FullDate.Month] } ${ items.FullDate.Day }, ${ items.FullDate.Year } </span>
            </div>
        </div>
    </div> `
    })
    let BlockedContainer = document.querySelector(".Blocked-body");
    BlockedContainer.innerHTML = newBlocked.join("");
    let BlockedCount = document.querySelector(".Blocked-number");
    BlockedCount.innerHTML = Blocked.length;
}


// drag and drop
var oldArticle;
var eventDrag = {
    tag: null,
    index: null
}
function DragStart( event , index, object ) {
    let e = event.target
    let FullDay = e.querySelector(".time" ).innerText;
    // console.log( FullDay )
    let SplitFullDay = FullDay.split(", ")
    // console.log( SplitFullDay )
    let SplitDayandMonth = SplitFullDay[0].split(" ")
    // console.log( SplitDayandMonth )
    let oldYear = SplitFullDay[1]
    let oldMonth = changeMonth.indexOf( SplitDayandMonth[0] ) + 1
    let oldDay = SplitDayandMonth[1]
    // console.log( oldYear, oldMonth, oldDay )
    oldArticle = {
        Category: e.querySelector(".Marketing" ).innerText,
        Title: e.querySelector(".article-title" ).innerText,
        Content: e.querySelector(".article-content" ).innerText,
        FullDate: {
            Day: oldDay,
            Month: oldMonth,
            Year: oldYear
        }
    }
    eventDrag.index = index;
    eventDrag.tag = object;

}

TodoBody.addEventListener("dragover", (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định
});

DoingBody.addEventListener("dragover", (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định
});
CompletedBody.addEventListener("dragover", (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định
});
BlockedBody.addEventListener("dragover", (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định
});


TodoBody.addEventListener("drop", (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định
    Todo.push( oldArticle )
    localStorage.setItem("Todo", JSON.stringify(Todo))
    DeleteTask( eventDrag.index, eventDrag.tag )
    Render();
});

DoingBody.addEventListener("drop", (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định
    Doing.push( oldArticle )
    localStorage.setItem("Doing", JSON.stringify(Doing))
    DeleteTask( eventDrag.index, eventDrag.tag )
    Render();
});

CompletedBody.addEventListener("drop", (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định
    Completed.push( oldArticle )
    localStorage.setItem("Completed", JSON.stringify(Completed))
    DeleteTask( eventDrag.index, eventDrag.tag )
    Render();
});

BlockedBody.addEventListener("drop", (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định
    Blocked.push( oldArticle )
    localStorage.setItem("Blocked", JSON.stringify(Blocked))
    DeleteTask( eventDrag.index, eventDrag.tag )
    Render();
});

Render()