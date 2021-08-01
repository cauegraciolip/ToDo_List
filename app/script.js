var tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

var concluidas = JSON.parse(localStorage.getItem('concluidas')) || [];

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

function deleteItemComplete(id) {

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


