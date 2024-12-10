export const notificacionAgregar = ()=>{
    const d = document,
    $template = d.getElementById('template-notificaciones'),
    $main = d.querySelector('main');

    const content = $template.content.querySelector('[data-type="agregar"]');

    const clone = d.importNode(content, true)

    clone.classList.add('mostrar-animacion');
    $main.appendChild(clone)

    setTimeout(() => {
        clone.classList.remove('mostrar-animacion');
        clone.classList.add('quitar-animacion');

        setTimeout(() => {
            $main.removeChild(clone)
        }, 2000);
    }, 4000);
}

export const notificacionEditar = ()=>{
    const d = document,
    $template = d.getElementById('template-notificaciones'),
    $main = d.querySelector('main');

    const content = $template.content.querySelector('[data-type="editar"]');

    const clone = d.importNode(content, true)

    clone.classList.add('mostrar-animacion');
    $main.appendChild(clone)

    setTimeout(() => {
        clone.classList.remove('mostrar-animacion');
        clone.classList.add('quitar-animacion');

        setTimeout(() => {
            $main.removeChild(clone)
        }, 2000);
    }, 4000);
}

export const notificacionEliminar = ()=>{
    const d = document,
    $template = d.getElementById('template-notificaciones'),
    $main = d.querySelector('main');

    const content = $template.content.querySelector('[data-type="eliminar"]');

    const clone = d.importNode(content, true)

    clone.classList.add('mostrar-animacion');
    $main.appendChild(clone)

    setTimeout(() => {
        clone.classList.remove('mostrar-animacion');
        clone.classList.add('quitar-animacion');

        setTimeout(() => {
            $main.removeChild(clone)
        }, 2000);
    }, 4000);
}