var tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

onload = function() {

    let ul = document.getElementById('ul')
    let content = ""

    function add() {

        tarefas.forEach(element => {
            content += `<li class="li_tarefas">
            <p>${element}</p><i class="fas fa-times empty"></i></li>`
        }); 
        ul.innerHTML = content
    }
    add()
}


function insert() {

    let texto = document.getElementById('tasks').value

    if (texto === "") {

        alert("Insira um texto")

    } else {

        tarefas.push(texto)
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
        location.reload()

    }

}

function deleteList() {

    localStorage.removeItem('tarefas')
    location.reload()

}

function contar() {

    let qtd = document.getElementById('footer_p')
    let qtdItens = tarefas.length

    let content = ""

    content = `${qtdItens} itens left`

    qtd.innerHTML = content
}

contar()