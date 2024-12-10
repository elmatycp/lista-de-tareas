import { notificacionAgregar, notificacionEditar, notificacionEliminar } from "./notificaciones.js";

const d = document;

export default function logica(){
    const $template = document.getElementById('template-tarea').content,
    $lista = d.querySelector('.lista-tarea'),
    $btnDios = d.getElementById('btn-dios'),
    $fragment = d.createDocumentFragment(),
    $inputText = d.querySelector('#input-text'),
    $ventana = d.querySelector('.ventana-crear'),
    $ventanaEliminar = d.querySelector('.ventana-eliminar');

    let arrayTareas = [];   

    function generarId() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';  // Letras y números
        let id = '';
        for (let i = 0; i < 6; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            id += caracteres.charAt(indiceAleatorio);
        }
        return id;
    }
    

    d.addEventListener('DOMContentLoaded', e=>{
        if(localStorage.getItem('tareas') === null){
            localStorage.setItem('tareas', JSON.stringify([]))
        }else{
            arrayTareas = JSON.parse(localStorage.getItem('tareas'));
            arrayTareas.forEach(el => {

                $template.querySelector('.info p').textContent = el.tarea;
                $template.querySelector('.btn-editar').dataset.id = el.id
                $template.querySelector('.btn-editar').dataset.tarea = el.tarea
                $template.querySelector('.btn-eliminar').dataset.id = el.id
                $template.querySelector('.contenedor-tarea').dataset.id = el.id
                $template.querySelector('input[type="checkbox"]').dataset.id = el.id
                $template.querySelector('.contenedor-tarea').setAttribute('draggable', true)
            
                let $clone = d.importNode($template, true)

                $fragment.appendChild($clone)
            })

            $lista.appendChild($fragment);
        }
        
    })

    d.addEventListener('click', e =>{
        if(e.target === $btnDios){
            if($inputText.parentElement.childElementCount > 1) return
            // validar input vacio
            if($inputText.value == ''){
                
                let $span = d.createElement('span');
                $span.textContent = 'El contenedor esta vacio'
                $span.style.color = 'red'
                $span.style.fontSize = '14px'
                $span.style.paddingTop = '5px'
                $span.setAttribute('id', 'alert-input-vacio')
                $inputText.insertAdjacentElement('afterend', $span)

                setTimeout(() => {
                    let padre = $inputText.parentElement
                    padre.removeChild(padre.children[1])
                }, 4000);

                return
            }

            let estado = $btnDios.dataset.estado
 
            if(estado === 'crear'){
                let inputValue = $inputText.value;
                let id = generarId()

                const modelo = {
                    tarea: inputValue,
                    id: id
                }

                arrayTareas.push(modelo)
                localStorage.setItem('tareas', JSON.stringify(arrayTareas));

                $template.querySelector('.info p').textContent = inputValue;
                $template.querySelector('.btn-editar').dataset.id = id
                $template.querySelector('.btn-editar').dataset.tarea = inputValue
                $template.querySelector('.btn-eliminar').dataset.id = id
                $template.querySelector('.contenedor-tarea').dataset.id = id
                $template.querySelector('input[type="checkbox"]').dataset.id = id
                $template.querySelector('.contenedor-tarea').setAttribute('draggable', true)
            
                let $clone = d.importNode($template, true)

                $lista.appendChild($clone)



                $ventana.classList.remove('mostrar');
                notificacionAgregar()
            }else if(estado === 'edit'){
                let inputValue = $inputText.value;
                let id = e.target.dataset.id
                let contenedorModificar;

                for (let i = 0; i < $lista.childElementCount; i++) {
                    if($lista.children[i].dataset.id === id){
                        contenedorModificar = $lista.children[i]
                        break
                    }
                }

                let indice = arrayTareas.findIndex(el => el.id === id)
                arrayTareas[indice].tarea = inputValue

                localStorage.setItem('tareas', JSON.stringify(arrayTareas))

                contenedorModificar.querySelector('.info p').textContent = inputValue;

                $ventana.classList.remove('mostrar');
                notificacionEditar()
            }
        }

        if(e.target.matches('.btn-eliminar-aceptar')){
            let id = e.target.dataset.id
            let indice = arrayTareas.findIndex(tarea => tarea.id === id);
            let contenedorEliminar;

            for (let i = 0; i < $lista.childElementCount; i++) {
                if($lista.children[i].dataset.id === id){
                    contenedorEliminar = $lista.children[i]
                    break
                }
            }

            $lista.removeChild(contenedorEliminar);

            if(indice !== -1){
                arrayTareas.splice(indice, 1);
                localStorage.setItem('tareas', JSON.stringify(arrayTareas));
            }

            $ventanaEliminar.classList.toggle('mostrar');
            notificacionEliminar()
        }
    })
}









//Codigo para futuro xd
/*
    let indice = arrayTareas.findIndex(tarea => tarea.id === id)
                if(indice !== -1){
                    arrayTareas.splice(indice, 1)
                }

                localStorage.setItem('tareas', JSON.stringify(arrayTareas));
*/