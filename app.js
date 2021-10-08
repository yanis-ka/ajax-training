const httpRequest = new XMLHttpRequest()
const links = document.querySelectorAll('.users')
let result = document.getElementById('result')

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        result.innerHTML = 'chargement...'
        httpRequest.onreadystatechange = (e) => {
            if (httpRequest.readyState === 4) {
                result.innerHTML = ''
                if (httpRequest.status === 200) {
                    let results = JSON.parse(httpRequest.responseText)
                    const ul = document.createElement('ul')
                    result.appendChild(ul)
                    results.forEach(result => {
                        let li = document.createElement('li')
                        li.innerHTML = result.name
                        ul.appendChild(li)
                    });    
                    result.classList.add('cadre')
                    link.innerHTML = link.innerHTML + ":"
                } else {
                    alert('Impossible de contacter le server')
                }
            }
        }   
        httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
        httpRequest.send()
    })
});


