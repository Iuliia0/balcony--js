const validate = () => {
  const phones = document.querySelectorAll('input[name="phone"]')
  const names = document.querySelectorAll('input[name="fio"]')

  

  const regText = /[\d\=\+\)\(\*\?\:\;\%\$\&\#\№\^\_\@\'\"\<\>\,\.\!\~\`\-]+/gi
  const regTel =  /[a-zа-я\=\)\(\*\?\:\;\%\$\&\#\№\^\_\@\'\"\<\>\,\.\!\~\`\-]/gi

  phones.forEach(phone => {
    phone.maxLength = 16
  })

  const getText = (arr, reg) => {
    arr.forEach(item => {
      item.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(reg, '')
      })
    })
  }

  getText(names, regText)
  getText(phones, regTel)
}

export default validate