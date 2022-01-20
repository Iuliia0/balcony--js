const slider = () => {
  const services = document.querySelector('#services')
  const sliderContainer = services.querySelector('.row')
  const sliderItems = sliderContainer.querySelectorAll('div')
  const arrows = sliderContainer.querySelector('.services-arrows')

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
      if (offsetWidth > 1200) {
        arrows.style.flexShrink = 1
        sliderContainer.style.display = 'block'
        document.querySelectorAll('.service-image').forEach(item => {
          item.style.display = 'block'
        })
        document.querySelectorAll('.service-text').forEach(item => {
          item.style.borderTopRightRadius = 10 + 'px'
          item.style.borderTopLeftRadius = 0
          item.style.borderBottomRightRadius = 10 + 'px'
          item.style.borderBottomLeftRadius = 0
          item.style.marginLeft = 220 + 'px'
        })
      }
      if (offsetWidth < 1200 && offsetWidth > 576) {
        arrows.style.flexShrink = 0
        sliderContainer.style.display = 'flex'
        sliderContainer.style.flexWrap = 'wrap'
        document.querySelectorAll('.service-image').forEach(item => {
          item.style.display = 'none'
        })
        
        document.querySelectorAll('.service-text').forEach(item => {
          item.style.borderRadius = 10 + 'px'
          item.style.marginLeft = 0
        })
      }
      if (offsetWidth > 576) {
        if (index === 0 || index === 1) {
          item.style.display = 'flex'
          item.style.width = 50 + '%'
        } else {
          item.style.display = 'none'
        }
      } else if (offsetWidth < 576) {
        if (index === 0) {
          item.style.display = 'flex'
          item.style.width = 100 + '%'
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
      elems[index].style.display = 'flex'
      elems[index].style.width = 50 + '%'
      index++
      elems[index].style.display = 'flex'
      elems[index].style.width = 50 + '%'
      index--
    } else if (offsetWidth < 576) {
      elems[index].style.display = 'flex'
      elems[index].style.width = 100 + '%'
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


