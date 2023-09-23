/**
 * Color 1 : #607EAA
 * Color 2 : #AC7088
 * Color 3 : #EED180
 * Color 4 : #F37878
 * Color 5 : #90C8AC
 * Color 6 : #D8CCA3
 * Color 7 : #82A284
 */


let todoList = [
    {
        id: 1,
        date: "2022-08-10",
        time: "11:30",
        todo: "Belanja Mingguan",
        color: "#90C8AC"
    },
    {
        id: 2,
        date: "2022-08-10",
        time: "10:30",
        todo: "Memasak makanan",
        color: "#F37878"
    },
    {
        id: 3,
        date: "2022-08-20",
        time: "17:30",
        todo: "Belajar Coding",
        color: "#EED180"
    },
    {
        id: 4,
        date: "2022-08-13",
        time: "14:30",
        todo: "Bersih-bersih rumah",
        color: "#82A284"
    },
    {
        id: 5,
        date: "2022-08-16",
        time: "19:30",
        todo: "Mencuci Baju",
        color: "#607EAA"
    }
]

const showList = data => {
    let content = ""
    data.forEach(element => {
        content += `
            <div class="card g-col-4 p-0 my-2" style="background-color:${element.color}">
                <div class="card-body g-col-4 m-0" style="background-color:${element.color}">
                  <h5 class="card-title">${element.todo}</h5>
                  <p>${element.time}</p>
                  <h6>${element.date}</h6>
                  <a href="#" onclick="deleteList(${element.id})">Hapus</a>
                </div>
            </div>
        `
    });
    document.getElementById("list-todo").innerHTML = content;
}

showList(todoList);

const addList = () => {
    let inputTodo = document.getElementById("inputTodo").value;
    let inputTime = document.getElementById("inputTime").value;
    let inputDate = document.getElementById("inputDate").value;
    let hexColor = document.querySelector('[name="colorOption"]:checked').value;

    if (inputTodo == "" || inputDate == "" || inputTime == "") {
        alert("Masukkan data terlebih dahulu");
        return;
    } 

    // Mungkin code if nya dipakai buat final exam saja
    todoList.push({ id: todoList.length+1,
                    date: inputDate,
                    time: inputTime,
                    todo: inputTodo,
                    color: hexColor});
    showList(todoList);
    clearList(); 
}

const clearList = () => {
    document.getElementById("inputTodo").value = "";
    document.getElementById("inputTime").value = "";
    document.getElementById("inputDate").value = "";
    document.querySelector('[name="colorOption"]:checked').checked = false;
    document.getElementById("option1").checked = true;
}

const sortAscending = () => {
    todoList.sort(function(a, b){ return new Date(a.date) - new Date(b.date)});
    showList(todoList);
}

const sortDescending = () => {
    todoList.sort(function(a, b){ return new Date(b.date) - new Date(a.date)});
    showList(todoList);
}

// Function delete todoList
const deleteList = id => {
    todoList.forEach((element, index) => {
        if ( id == element.id ){
            todoList.splice(index, 1);
    showList(todoList);
}});}

const searchData = () => {
    let text = document.getElementById("search").value.toLowerCase();
    var result = todoList.filter(element => element.todo.toLowerCase().indexOf(text) != -1);
    showList(result);
}