export default function checked(){
    const d = document, $lista = d.querySelector('.lista-tarea');
    let arrayChecked = []

    d.addEventListener('DOMContentLoaded', e=>{
        if(localStorage.getItem('checked') === null){
            localStorage.setItem('checked', JSON.stringify([]))
        }else{
            arrayChecked = JSON.parse(localStorage.getItem('checked'));

            arrayChecked.forEach(el => {
                for (let i = 0; i < $lista.childElementCount; i++) {
                    if($lista.children[i].dataset.id === el){
                        let input = $lista.children[i].querySelector('input[type="checkbox"]')
                        let text = input.parentElement.nextElementSibling.firstElementChild;

                        text.style.setProperty('text-decoration', 'line-through')
                        
                        input.checked = true;
                    }
                }
            });
        }
    })

    d.addEventListener('change', e=>{
        if(e.target.matches('.checkbox')){
            const input = e.target,
             text = e.target.parentElement.nextElementSibling.firstElementChild;

            if(input.checked){
                text.style.setProperty('text-decoration', 'line-through')

                arrayChecked.push(e.target.dataset.id)
                localStorage.setItem('checked', JSON.stringify(arrayChecked))

            }else{
                text.style.setProperty('text-decoration', 'none')

                let indice = arrayChecked.findIndex(el => el === e.target.dataset.id);
                if(indice !== -1){
                    arrayChecked.splice(indice, 1);
                }
                localStorage.setItem('checked', JSON.stringify(arrayChecked))
            }
        }
    })

    d.addEventListener('click', e=>{
        if(e.target.matches('.btn-eliminar-aceptar')){
            let indice = arrayChecked.findIndex(el => el === e.target.dataset.id)

            if(indice !== -1){
                arrayChecked.splice(indice, 1);
                localStorage.setItem('checked', JSON.stringify(arrayChecked));
            }
        }
    })
}