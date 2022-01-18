const modalImg = () => {
  const documents = document.querySelector('#documents')
  const documentContainer = documents.querySelectorAll('.text-center div')
  const img = documents.querySelectorAll('.sertificate-document')
  const documentOverlay = documents.querySelectorAll('.document-overlay')
  const overlay = document.querySelector('.overlay')

  let newImg = document.createElement('img')
  let arrModals = []

  const newElem = (elem, arrItem) => {
    elem.classList.add('modal-img') 
    elem.style.cssText = `position: fixed;
      top: 50%;
      transform: translate(-50%, -50%);
      left: 50%;
      height: 90%;
      z-index: 9999;
    `
    elem.src = arrItem.href
    documents.append(elem)
  }

  const getArr = (arr, newArr) => {
    arr.forEach((item) => {
      if (item.className.match(/col/gi)) {
        newArr.push(item)
      }
    })
  }

  getArr(documentContainer, arrModals)

  arrModals.forEach((modal, indexModal) => {

    modal.addEventListener('mouseenter', (e) => {
      e.preventDefault()
      documentOverlay.forEach((item, index) => {
        if (indexModal === index) {
          item.style.opacity = 0.5
        }
      })
    })

    modal.addEventListener('mouseleave', (e) => {
      e.preventDefault()
      documentOverlay.forEach((item, index) => {
        if (indexModal === index) {
          item.style.opacity = 0
        }
      })
    })
  })

  img.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      newElem(newImg, item)
      overlay.style.display = 'block'
    })
  })
}
export default modalImg