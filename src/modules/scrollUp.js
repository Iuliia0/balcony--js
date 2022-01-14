const scrollUp = () => {
  const smoothScroll = document.querySelector('.smooth-scroll')
  const header = document.querySelector('#header')
  const navigation = document.querySelector('#navigation')
  const offer = document.querySelector('#offer')

  let height = header.offsetHeight + navigation.offsetHeight + offer.offsetHeight
  let offsetWidth
  smoothScroll.style.cursor = 'pointer'
  smoothScroll.addEventListener('click', (e) => {
    e.preventDefault()
    header.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            })
  })

  document.addEventListener('scroll', () => {
    let heightBlock = header.offsetHeight + navigation.offsetHeight + offer.offsetHeight
    let crollY = window.scrollY
    if (crollY < heightBlock) {
      smoothScroll.style.display = 'none'
    } else {
      smoothScroll.style.display = 'flex'
    }
    
  })

}


  export default scrollUp