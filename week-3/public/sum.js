function handleClick () {
    const sumOutput = document.getElementById('sumOutput').textContent
    const numInput = document.getElementById('numInput').value
    
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {                
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('sumOutput').innerHTML = xhr.responseText
        }
    }
    
    if (numInput === ''){
        xhr.open('GET', `/getData`)
        
    } else {
        xhr.open('GET', `/getData?number=${numInput}`)
    }

    xhr.send()
    document.getElementById('numInput').value = ''
}