const fs = require('fs');

// Normal Case
function searchData(input) {
  const mock = JSON.parse(fs.readFileSync('./mock.json', 'utf8'))
  const validator = /^[a-zA-Z0-9-.,+ ]*$/
  const keyword = input.slice(2, input.length)

  let checkLength = ''
  keyword.forEach(el => checkLength += el)
  
  if (checkLength.length < 3 || checkLength.length > 50) {
    return 'Input must be 3-50 characters'
  } else if (validator.test(keyword)) {
    let found = mock.filter(el => {
      for (let i=0 ; i<keyword.length ; i++) {
        if (keyword[i]) return new RegExp(keyword[i], 'i').test(el.name)
        return true
      }
    })
    if (found.length > 0) return found
    else return 'Not Found'
  } else {
    return 'Invalid Input'
  }
}

/* For Sensitive Case
function searchData(input) {
  const mock = JSON.parse(fs.readFileSync('./mock.json', 'utf8'))
  const validator = /^[a-zA-Z0-9-.,+ ]*$/
  const keyword = input.slice(2, input.length)

  let checkLength = ''
  keyword.forEach(el => checkLength += el)
  
  if (checkLength.length < 3 || checkLength.length > 50) {
    return 'Input must be 3-50 characters'
  } else if (validator.test(keyword)) {
    let found = mock.filter(el => {
      for (let i=0 ; i<keyword.length ; i++) {
        if (checker(el, keyword[i])) return el
      }
    })
    return found
  } else {
    return 'Invalid Input'
  }
}

function checker(data, input) {
  const spreadData = data.name.split(' ')
  let counter = 0

  for (let i=0; i<spreadData.length; i++) {
    if (spreadData[i].toLowerCase().includes(input.toLowerCase())) {
      counter++
    }
  }
  if (counter > 0) return true
  else return false
} */



console.log(searchData([...process.argv]))




