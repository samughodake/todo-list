window.onload = function () {
    //will show all the todos on page load
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let task = localStorage.getItem(key);
        var show_todos = document.querySelector('.show_todo')
        var checkbox = document.createElement('input')
        checkbox.type = "checkbox"
        checkbox.name = key
        checkbox.value = task
        checkbox.id = key

        var label = document.createElement('label')
        label.htmlFor = key
        label.id = key
        label.className = "strikethrough"
        label.appendChild(document.createTextNode(task))
        show_todos.appendChild(checkbox)
        show_todos.appendChild(label)
        var del_button = document.createElement('button')
        del_button.style.width = "20px"
        del_button.style.height = "20px"
        del_button.style.outline = "none"

        del_button.style.border = "none"
        del_button.id = key
        del_button.style.background = "url(https://img.icons8.com/ios/20/000000/delete-forever--v1.png)"
        del_button.addEventListener('click', deletetask)
        show_todos.appendChild(del_button)
        show_todos.appendChild(document.createElement('br'))
    }
    // var checkboxes = document.querySelectorAll('.show_todo input');
    // checkboxes.forEach(element => {
    //     element.addEventListener('change', function () {
    //         if (this.checked) {
    //             console.log("Checkbox is checked..");
    //         } else {
    //             console.log("Checkbox is not checked..");
    //         }
    //     });
    // });
}
var button = document.getElementById('create')
function show_tasks(date) {
    //this will show task on the page
    var task = localStorage.getItem(date)
    var show_todos = document.querySelector('.show_todo')
    var checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.name = date
    checkbox.value = task
    checkbox.id = date

    var label = document.createElement('label')
    label.htmlFor = date
    label.id = date
    label.appendChild(document.createTextNode(task))
    show_todos.appendChild(checkbox)
    show_todos.appendChild(label)
    var del_button = document.createElement('button')
    del_button.style.width = "20px"
    del_button.style.height = "20px"
    del_button.style.outline = "none"
    del_button.id = date
    del_button.style.border = "none"
    del_button.style.background = "url(https://img.icons8.com/ios/20/000000/delete-forever--v1.png)"
    show_todos.appendChild(del_button)
    show_todos.appendChild(document.createElement('br'))
    del_button.addEventListener('click', deletetask)

}

button.addEventListener('click', () => {
    //when the user clicks on create button, task will be created in localstorage
    var input = document.getElementById('task')
    var date = Date.now()
    localStorage.setItem(date, input.value)
    input.value = " "
    show_tasks(date);


})
function deletetask() {
    let id = this.id;
    localStorage.removeItem(id)
    document.getElementById(id).remove()
    this.remove()
    document.querySelectorAll('label').forEach((e) => {
        if (e.id == id) {
            e.remove()
        }
    })


}