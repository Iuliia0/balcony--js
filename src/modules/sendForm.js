const sendForm = ({someElem = []}) => {
let forms = document.querySelectorAll('form')
  forms.forEach((form) => {

    // валидация формы
    const validate = (list) => {
      let success = true

      for (let item of list) {
        if (item.value === '' && item.type !== 'hidden') {
          success = false
        }
        if (item.name === 'fio' && item.value.length < 2 || 
            item.name === 'phone' && item.value.length < 5) {
          success = false
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

      someElem.forEach(elem => {
        const element = document.getElementById(elem.id)
        if (element !== null && +element.value > 0) {
          formBody[elem.id] = element.value
        }
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