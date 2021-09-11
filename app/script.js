var tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

var concluidas = JSON.parse(localStorage.getItem('concluidas')) || [];

const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyles = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
    bg: getStyles(html, "--bg"),
    textColor: getStyles(html, "--text-color"),
    darkBlue: getStyles(html, "--dark-blue"),
    lightBlue: getStyles(html, "--light-blue")
}

const darkMode = {
    bg: "#333333",
    textColor: "#f9f9f9",
    darkBlue: "#3664ff",
    lightBlue: "#161722"
}

const transformKey = (key) => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) =>
    Object.keys(colors).map(key => 
            html.style.setProperty(transformKey(key), colors[key])
        )

checkbox.addEventListener ('change', ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})
    


onload = function() {

    let completed = document.getElementById('conc')
    let contentDone = ""

    let ul = document.getElementById('ul')
    let content = ""

    function add() {

        tarefas.forEach(element => {
            content += `<li class="li_tarefas">
            <div class="lista">
            <button type="submit" class="done" onclick="completed(${element.id})"><i class="fas fa-check"></i></button>
            <p class="texto">${element.tarefa}</p>
            </div>
            <i class="fas fa-times empty" onclick="deleteItem(${element.id})"></i>
            </li>`
        }); 
        ul.innerHTML = content
    }
    add()

    function completar() {

        concluidas.forEach(element => {
            contentDone += `<li class="li_tarefas_concluidas">
            <div class="lista">
            <button type="submit" class="done" onclick="noncompleted(${element.id})"><i class="fas fa-check"></i></button>
            <p class="texto">${element.tarefa}</p>
            </div>
            <i class="fas fa-times empty" onclick="deleteItemCompleted(${element.id})"></i>
            </li>`
        }); 
        completed.innerHTML = contentDone
    }
    completar()
}

function completed(id) {

    let nova_lista_sem_click = []

    for ( i = 0; i < tarefas.length; i++ ) {

        if ( tarefas[i].id == id ) {

            task = tarefas[i].tarefa

            let tarefa_concluida = {

                id: Math.random() * 10,

                tarefa: task,

                concluida: true

            }

            concluidas.push(tarefa_concluida)
            localStorage.setItem('concluidas', JSON.stringify(concluidas))
            
        } else {

            nova_lista_sem_click.push(tarefas[i])

        }

        
        localStorage.setItem('tarefas', JSON.stringify(nova_lista_sem_click))
        

    }

    
    location.reload()

}

function deleteItem(id) {

    let nova_lista_sem_click = []

    for ( let i = 0; i < tarefas.length; i++ ) {

        if ( tarefas[i].id != id ) {

            nova_lista_sem_click.push(tarefas[i])

        }

    }

    localStorage.setItem('tarefas', JSON.stringify(nova_lista_sem_click))
    location.reload()
}


function deleteItemCompleted(id) {

    let nova_lista_sem_click = []

    for ( let i = 0; i < concluidas.length; i++ ) {

        if ( concluidas[i].id != id ) {

            nova_lista_sem_click.push(concluidas[i])

        }

    }

    localStorage.setItem('concluidas', JSON.stringify(nova_lista_sem_click))
    location.reload()

}

function noncompleted(id) {

    let nova_lista_sem_click = []

    for ( i = 0; i < concluidas.length; i++ ) {

        if ( concluidas[i].id == id ) {

            task = concluidas[i].tarefa

            let tarefa_naoConcluida = {

                id: Math.random() * 10,

                tarefa: task,

                concluida: false

            }

            tarefas.push(tarefa_naoConcluida)
            localStorage.setItem('tarefas', JSON.stringify(tarefas))
            
        } else {

            nova_lista_sem_click.push(concluidas[i])

        }

        
        localStorage.setItem('concluidas', JSON.stringify(nova_lista_sem_click))
        

    }

    
    location.reload()

}

function insert() {

    let texto = document.getElementById('tasks').value

    if (texto === "") {

        alert("Insira um texto")

    } else {

        let nova_tarefa = {

            id: Math.random() * 10,

            tarefa: texto,

            concluida: false

        }

    tarefas.push(nova_tarefa)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    location.reload()

    }

}

function deleteList() {

    localStorage.removeItem('tarefas')
    localStorage.removeItem('concluidas')
    location.reload()

}

function deleteCompleted() {

    localStorage.removeItem('concluidas')
    location.reload()

}

let qtd = document.getElementById('footer_p')
let qtdItens = tarefas.length

let content = ""

content = `${qtdItens} itens left`

qtd.innerHTML = content

function activeAll() {

    let allContainer = document.getElementById('conc')
    let allUl = document.getElementById('ul')
    allContainer.style.display = "block"
    allUl.style.display = "block"

    let sizeAll = document.getElementById('all')
    sizeAll.style.color = "rgb(58, 123, 253)"
    sizeAll.style.fontSize = "1rem"

    let sizeColorActive = document.getElementById('active')
    sizeColorActive.style.color = "rgb(119, 122, 146)"
    sizeColorActive.style.fontSize = "0.9rem"

    let sizeColorCompleted = document.getElementById('completed')
    sizeColorCompleted.style.color = "rgb(119, 122, 146)"
    sizeColorCompleted.style.fontSize = "0.9rem"

 
}

function active() {

    let allContainer = document.getElementById('conc')
    allContainer.style.display = "none"

    let allUl = document.getElementById('ul')
    allUl.style.display = "block"

    let sizeAll = document.getElementById('all')
    sizeAll.style.color = "rgb(119, 122, 146)"
    sizeAll.style.fontSize = "0.9rem"

    let sizeColorActive = document.getElementById('active')
    sizeColorActive.style.color = "rgb(58, 123, 253)"
    sizeColorActive.style.fontSize = "1rem"

    let sizeColorCompleted = document.getElementById('completed')
    sizeColorCompleted.style.color = "rgb(119, 122, 146)"
    sizeColorCompleted.style.fontSize = "0.9rem"

}

function isCompleted() {

    let allUl = document.getElementById('ul')
    allUl.style.display = "none"

    let allContainer = document.getElementById('conc')
    allContainer.style.display = "block"

    let sizeAll = document.getElementById('all')
    sizeAll.style.color = "rgb(119, 122, 146)"
    sizeAll.style.fontSize = "0.9rem"

    let sizeColorActive = document.getElementById('active')
    sizeColorActive.style.color = "rgb(119, 122, 146)"
    sizeColorActive.style.fontSize = "0.9rem"

    let sizeColorCompleted = document.getElementById('completed')
    sizeColorCompleted.style.color = "rgb(58, 123, 253)"
    sizeColorCompleted.style.fontSize = "1rem"
    
}


