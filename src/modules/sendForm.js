const sendForm = () => {
let forms = document.querySelectorAll('form')
  forms.forEach((form) => {
    // валидация формы
    const validate = (list) => {
      let success = false
      let nameSuccess = false
      let telSuccess = false
      const regText = /^[a-zа-я \s]+$/gi
      const regTel =  /^[\+]?[0-9]{1}[0-9]{10,16}$/g

      for (let item of list) {
        if (item.name === 'fio') {
          if (regText.test(item.value)) {
            item.value = item.value
            item.style.borderColor = 'green'
            nameSuccess = true
          } else {
            item.value = item.value.replace(/[\d \@ \_ \. \! \~ \* \' \: \; \" \# \№ \^ \& \+ \= \-]+/g, ' ')
            item.style.borderColor = 'red'
            nameSuccess = false
          }
        }

        if (item.name === 'phone') {
          if (regTel.test(item.value)) {
            item.value = item.value
            item.style.borderColor = 'green'
            telSuccess = true
          } else {
            item.value = item.value.replace(/[а-яa-z \ё \Ё \@  \_ \. \! \~ \* \' \: \; \" \# \№ \^ \&]+/g, '').replace(/\++/g, '+').replace(/^\d\(\)\-\+/g, '').replace(/^[\-\s]+/gm, '').replace(/[\-\s]+$/gm, '')
            item.style.borderColor = 'red'
            telSuccess = false
          }
        }

        if (nameSuccess && telSuccess) {
          return success = true
        }
      }


      return success
    }

    // очистка формы после отправки
    const clear = () => {
      document.querySelector('.header-modal').style.display = 'none'
      document.querySelector('.services-modal').style.display = 'none'
      document.querySelector('.overlay').style.display = 'none'
    }

    // отправка данных
    const sendData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      }
    }).then(res => res.json())
    }

    // отправка формы
    const submitForm = () => {
      // это инпуты
      const formElements = form.querySelectorAll('input')
      const formData = new FormData(form)
      const formBody = {}

      formData.forEach((val, key) => {
        formBody[key] = val
      })

        if (validate(formElements)) {
          for (let key in formBody) {
            formBody[key] = formBody[key].trim()
          }

        sendData(formBody).then(data => {
          formElements.forEach(input => {
            input.value = '', 2000
          })
          setTimeout(clear, 2000)
        })
        .catch(error => {
          console.log(error.message)
          
        })
      } else{
        alert('Данне не валидныы')
      }
    }

    try {
      if (!form) {
        throw new Error('Верните форму на место, пожалуйста)')
      }

      form.addEventListener('submit', (event) => {
        event.preventDefault()

        submitForm()
      })
    } catch(error) {
      console.log(error.message)
    }

  })
}

export default sendForm