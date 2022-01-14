const modal = () => {
  const modalHeader = document.querySelector('.header-modal')
  const overlay = document.querySelector('.overlay')
  const modalServices = document.querySelector('.services-modal')

  document.addEventListener('click', (e) => {
    if (e.target.closest('#header')) {
      modalHeader.style.display = 'flex'
      overlay.style.display = 'block'
    } else if (e.target.matches('.header-modal__close')) {
      modalHeader.style.display = 'none'
      overlay.style.display = 'none'
    } else if (e.target.matches('.service-button a')) {
      modalServices.style.display = 'flex'
      overlay.style.display = 'block'
    } else if (e.target.matches('.services-modal__close')) {
      modalServices.style.display = 'none'
      overlay.style.display = 'none'
    }
  })
}

export default modal