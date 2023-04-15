async function handleClick() {
  try {
    const sumOutput = document.getElementById('sumOutput').textContent
    const numInput = document.getElementById('numInput').value

    async function getData(url) {
      const response = await fetch(url)
      return response.json()
    }

    const result =
      numInput === ''
        ? await getData('/getData')
        : await getData(`/getData?number=${numInput}`)

    document.getElementById('numInput').value = ''

    const { title, desc } = result
    document.getElementById('sumOutput').innerHTML = `
        <h1>${title}</h1>
        <p>${desc}</p>
        `
  } catch (error) {
    console.error(`ERROR: ${error}`)
  }
}
