function toggleMode() {
    
    const html = document.documentElement 

   html.classList.toggle('ligth')

   /* if (html.classList.contains('ligth')) {
        
        html.classList.remove('ligth')

    } else {
        html.classList.add('ligth')
    } */

/*troca de imagem de perfil*/

    const img = document.querySelector("#profile img")

   
    if (html.classList.contains('ligth')) {
        img.setAttribute('src', './foto.perfil.lingth.jpg.png',)
       
    } else{
        img.setAttribute('src', './foto.perfil.jpg.png')
       
 /*troca de descrição da imagem*/
    }
        if (html.classList.contains('ligth')){
    img.setAttribute('alt', 'Homem negro, com barba sorrindo, de boné preto com aba para tras.')
   
} else{
    img.setAttribute('alt', 'Homem negro, sem camisa, com sua filha por tras. Os dois sorrindo.')
}
}