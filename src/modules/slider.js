const slider = () => {
  const services = document.querySelector('#services')
  const sliderContainer = services.querySelector('.row')
  const sliderItems = sliderContainer.querySelectorAll('div')

  let offsetWidth
  const arrItems = []
  let currentSlide = 0

  sliderItems.forEach((item) => {
    if (item.className.match(/col/gi)) {
      arrItems.push(item)
    }
  })

  const getBlockHidden = (arr) => {
    arr.forEach((item, index) => {
      offsetWidth = document.documentElement.offsetWidth
      if (offsetWidth > 576) {
        if (index === 0 || index === 1) {
          item.style.display = 'block'
        } else {
          item.style.display = 'none'
        }
      } else if (offsetWidth < 576) {
        if (index === 0) {
          item.style.display = 'block'
        } else {
          item.style.display = 'none'
        }
      } 
    })
  }

  const prevSlide = (elems, index) => {
    offsetWidth = document.documentElement.offsetWidth
    if (offsetWidth > 576) {
      elems[index].style.display = 'none'
      index++
      elems[index].style.display = 'none'
      index--
      elems[index].style.display = 'none'
    } else if (offsetWidth < 576) {
      elems[index].style.display = 'none'
      index++
    }
  }

  const nextSlide = (elems, index) => {
    offsetWidth = document.documentElement.offsetWidth
    if (offsetWidth > 576) {
      elems[index].style.display = 'block'
      index++
      elems[index].style.display = 'block'
      index--
    } else if (offsetWidth < 576) {
      elems[index].style.display = 'block'
      index++
    }
  }
  
  sliderContainer.addEventListener('click', (e) => {
    offsetWidth = document.documentElement.offsetWidth
    e.preventDefault()
    prevSlide(arrItems, currentSlide)
    
    if(e.target.closest('.services__arrow--left')) {
      currentSlide--
    } else if (e.target.closest('.services__arrow--right')) {
      currentSlide++
    }

    if (offsetWidth > 576) {
      if (currentSlide >= arrItems.length-1) {
        currentSlide = 0
      }

      if (currentSlide < 0) {
        currentSlide = arrItems.length-2
      }
    } else if (offsetWidth < 576) {

      if (currentSlide > arrItems.length-1) {
        currentSlide = 0
      }

      if (currentSlide < 0) {
        currentSlide = arrItems.length-1
      }
    }

    nextSlide(arrItems, currentSlide)
  })

  getBlockHidden(arrItems)
  window.addEventListener('resize', () => {
    getBlockHidden(arrItems)
  })
}

export default slider


