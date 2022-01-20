import modal from './modules/modal'
import scrollUp from './modules/scrollUp'
import slider from './modules/slider'
import sliderBenefits from './modules/slider-benefits'
import modalImg from './modules/modal-img'
import timer from './modules/timer'
import sendForm from './modules/sendForm'
import calc from './modules/calc'
import comments from './modules/comments'
import validate from './modules/validate'

modal()
scrollUp()
slider()
sliderBenefits()
modalImg()
timer('30 januar 2022')
sendForm({
  someElem: [
    {
      type: 'block',
      id: 'calc-total'
    }
  ]
})
calc()
comments()
validate()