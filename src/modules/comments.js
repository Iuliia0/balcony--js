const comments = () => {
  const url = 'comments.json'
  const commentBlock = document.querySelector('.comments-container')
  const commentsItems = document.querySelectorAll('.comment-item')
  const imgs = document.querySelectorAll('.img-responsive .avatar')
  
  const textBlock = document.querySelectorAll('.review-arrow p')

  const authors = []
  const commentsBlock = []
  textBlock.forEach(item => {
    if(item.classList.contains('text-normal')) {
      authors.push(item)
    } else {
      commentsBlock.push(item)
    }
  })

fetch(url)
.then((resp) => resp.json())
.then(data => {
  let comments = data.comments;
  comments.forEach((itemCom, indexCom) => {
    authors.forEach((item, index) => {
      if (index === indexCom) {
        item.textContent = itemCom.author
      }
    })

    commentsBlock.forEach((item, index) => {
      if (index === indexCom) {
        item.textContent = itemCom.comment
      }
    })

    imgs.forEach((item, index) => {
      if (item !== '' && index === indexCom) {
        item.src = `./images/users/${item.image}`
      } else if (item === '') {
        item.src = `./images/Снимок.PNG`
      }
    })
  })
})
.catch(error => {
  console.log(error)
})
}

export default comments