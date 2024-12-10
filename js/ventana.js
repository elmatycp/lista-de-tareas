const d = document;
export default function ventana(){
    const $btnAbrir = d.querySelector('.btn-crear-tarea'),
    $btnCerrar = d.querySelector('.btn-cerrar-ventana'),
    $ventana = d.querySelector('.ventana-crear'),
    $ventanaEliminar = d.querySelector('.ventana-eliminar'),
    $btnCerrarEliminar = d.querySelector('.btn-cerrar-eliminar');

    d.addEventListener('click', e =>{
        if(e.target === $btnAbrir){
            d.querySelector('.titulo h6').textContent = 'Crear Tarea';
            d.querySelector('#btn-dios').textContent = 'Crear';
            d.querySelector('#btn-dios').dataset.estado = 'crear';
            d.querySelector('#input-text').value = '';

            $ventana.classList.toggle('mostrar')
        }

        if(e.target.matches('.btn-editar')){
            d.querySelector('.titulo h6').textContent = 'Editar Tarea';
            d.querySelector('#btn-dios').textContent = 'Editar';
            d.querySelector('#btn-dios').dataset.estado = 'edit'
            d.querySelector('#btn-dios').dataset.id = e.target.dataset.id
            d.querySelector('#input-text').value = e.target.dataset.tarea

            $ventana.classList.toggle('mostrar')
        }

        if(e.target.matches('.btn-eliminar')){
            $ventanaEliminar.classList.toggle('mostrar')
            d.querySelector('.btn-eliminar-aceptar').dataset.id = e.target.dataset.id
        }

        if(e.target === $btnCerrar){
            $ventana.classList.toggle('mostrar')
        }

        if(e.target === $btnCerrarEliminar){
            $ventanaEliminar.classList.toggle('mostrar')
        }

        if(e.target.matches('.btn-eliminar-cancelar')){
            $ventanaEliminar.classList.toggle('mostrar')
        }
    })
}
