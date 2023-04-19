function ajax(url) {
  return fetch(url)
    .then(res => res.json())
    .catch(err => alert(err))
}

function render(data) {
    const htmlBody = document.getElementsByTagName('BODY')[0]
    
    htmlBody.innerHTML = 
        `<table id="model-list" border="5">
            <tr>
                <th>name</th>
                <th>price</th>
                <th>description</th>
            </tr>
        </table>`

    data.map((entry) => {
        const modelList = document.getElementById('model-list')
        const {name, price, description} = entry
        const rowData = 
            `
            <tr>
                <td>${name}</td>
                <td>${price}</td>
                <td>${description}</td>
            </tr>
            `
        modelList.insertAdjacentHTML('beforeend', rowData)
    })

}

const url = 'https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products'

ajax(url).then((data) => {
  render(data)
})
