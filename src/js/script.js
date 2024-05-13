let contador = 0
const tecForm = document.getElementById('novaTecnologia');

const remo = document.getElementById('remove')

  function addTec(){
    contador++;

      const div = document.getElementById('group')

      const tecForm = document.getElementById('novaTecnologia')

      const ul = document.createElement('ul')

      const li1 = document.createElement('li')
      li1.innerHTML = '<label for="name">Nome da Nova Tecnologia: <label>'

      const tecName = document.createElement('input')
      tecName.type = 'text'
      tecName.name = 'tecName'
      li1.appendChild(tecName)
      ul.appendChild(li1)

      const li2 = document.createElement('li')
      li2.innerHTML = '<label for="time">Tempo de Experiencia: </label>'

      const tempo1 = document.createElement('input')
      tempo1.type = 'radio'
      tempo1.name = 'main'+contador
      tempo1.id = 'main1'
      tempo1.value = '0-2 anos'

      const label1 = document.createElement('label') 
      label1.innerText = '0-2  anos'

      li2.appendChild(label1)
      li2.appendChild(tempo1)
        
      const tempo2 = document.createElement('input')
      tempo2.type = 'radio'
      tempo2.name = 'main'+contador
      tempo2.id = 'main2'
      tempo2.value = '3-4 anos'

      const label2 = document.createElement('label')
      label2.innerText = '3-4 anos'

      li2.appendChild(label2)
      li2.appendChild(tempo2)
    
      const tempo3 = document.createElement('input')
      tempo3.type = 'radio'
      tempo3.name = 'main'+contador
      tempo3.id = 'main3'
      tempo3.value = '5 anos ou +'
      
      const label3 = document.createElement('label')
      label3.innerText = '5 anos ou +'

      li2.appendChild(label3)

      li2.appendChild(tempo3)
      ul.appendChild(li2)

      tecForm.append(ul)

      var mybr = document.createElement('br');
      li2.appendChild(mybr);

      const remove = document.createElement('button')
      remove.id = "remove"
      remove.onclick = "removeAll()"
      remove.innerText = 'Remover'
      li2.appendChild(remove)
    }

  remo.addEventListener('click', function(ev) {
    ev.preventDefault()
  })

  function removeAll(){
    contador--;
      
    tecForm = document.getElementById('novaTecnologia')

    const ul = document.getElementsByTagName('ul')

    tecForm.removeChild(li1,li2)
  }

  function cadastrar(){


      const name = document.getElementById('nome')
      const tname = document.querySelectorAll('input[name="tecName"]')
      const main = document.querySelectorAll('input[type="radio"]:checked')
      
      for(var i = 0; i < contador; i++){
        alert(
          "Cadastro Realizado!" +
          "\nNome do Desenvolvedor: " + name.value +
          "\nNome da Tecnologia: " + tname[i].value +
          "\nTempo de Experiêcia: \n - " + main[i].value + "\n" + top
        )
      
      }
    }
