const sliderBenefits = () => {
  const benefits = document.querySelector('#benefits')
  const benefitsInner = benefits.querySelector('.benefits-wrap')
  const benefitsItem = benefits.querySelectorAll('.benefits__item')

  let offsetWidth
  let currentSlide = 0

  const getBlockHidden = (arr) => {
    arr.forEach((item, index) => {
      offsetWidth = document.documentElement.offsetWidth
      if (offsetWidth > 576) {
        if (index >= 0 && index <= 2) {
          item.style.display = 'block'
        } else {
          item.style.display = 'none'
        }
      } else if (offsetWidth < 576) {
        benefitsInner.style.justifyContent = 'center'
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
      index++
      elems[index].style.display = 'block'
    } else if (offsetWidth < 576) {
      elems[index].style.display = 'block'
      index--
    }
  }

  benefits.addEventListener('click', (e) => {
    
    offsetWidth = document.documentElement.offsetWidth
    e.preventDefault()
    prevSlide(benefitsItem, currentSlide)
    
    if(e.target.closest('.benefits__arrow--left')) {
      currentSlide--
    } else if (e.target.closest('.benefits__arrow--right')) {
      currentSlide++
    }

    if (offsetWidth > 576) {
      if (currentSlide >= benefitsItem.length-2) {
        currentSlide = 0
      }
    } else if (offsetWidth < 576) {
      if (currentSlide >= benefitsItem.length) {
        currentSlide = 0
      }
    }


    if (offsetWidth > 576) {
      if (currentSlide < 0) {
        currentSlide = benefitsItem.length-3
      }
    } else if (offsetWidth < 576) {
      if (currentSlide < 0) {
        currentSlide = benefitsItem.length-1
      }
    }

    nextSlide(benefitsItem, currentSlide)
  })

  getBlockHidden(benefitsItem)
  window.addEventListener('resize', () => {
    getBlockHidden(benefitsItem)
  })
}

export default sliderBenefits