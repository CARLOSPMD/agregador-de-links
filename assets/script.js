function toggleMode() {
    
    const html = document.documentElement 
 /*
    html.classList.toggleMode('ligth')
    */


 
    if (html.classList.contains('ligth')) {
        
        html.classList.remove('ligth')

    } else {
        html.classList.add('ligth')
    }

}