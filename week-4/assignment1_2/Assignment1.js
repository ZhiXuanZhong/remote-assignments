function delayedResult(n1, n2, delayTime, callback) {
    setTimeout(() => {
      callback(n1 + n2)
    }, delayTime)
  }
  
  delayedResult(4, 5, 3000, (result) => {
    console.log(result)
  })
  // 9 (4+5) will be shown in the console after 3 seconds
  
  delayedResult(-5, 10, 2000, (result) => {
    window.alert(result)
  })
  // 5 (-5+10) will be shown in an alert dialog after 2 seconds
  
  
  