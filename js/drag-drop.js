export default function dragDrop(){
    const d = document,
    $contenedor = d.querySelector('.lista-tarea');
    
    let tareaActual;

    function detectarTareaSobre(posicionMouseY){
        const tareas = [...$contenedor.children].filter(t => t !== tareaActual);
        return tareas.find(tarea => {
            const caja = tarea.getBoundingClientRect();
            return posicionMouseY < caja.top + caja.height / 2
        })
    }

    d.addEventListener('dragstart', e=>{
        if(e.target.matches('.contenedor-tarea')){
            tareaActual = e.target
            tareaActual.classList.add('tarea-arrastrando');
        }
    })

    d.addEventListener('dragover', e=>{
        if(e.target === $contenedor){
            e.preventDefault()
            const tareaSobre = detectarTareaSobre(e.clientY)
            if(tareaSobre && tareaSobre !== tareaActual){
                $contenedor.insertBefore(tareaActual, tareaSobre);
            }
        }
    })

    d.addEventListener('dragend', e=>{
        if(tareaActual){
            tareaActual.classList.remove('tarea-arrastrando');
            tareaActual = null
        }
        
    })

    d.addEventListener('drop', e=>{
        if(tareaActual){
            tareaActual.classList.remove('tarea-arrastrando');
            tareaActual = null
        }

        
    })
}

