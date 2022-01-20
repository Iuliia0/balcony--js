const calc = () => {
  if (document.querySelector('#calc')) {
    const calcBlock = document.querySelector('#calc')
    const calcType = calcBlock.querySelector('#calc-type')
    const calcMaterial = calcBlock.querySelector('#calc-type-material')
    const calcSquare = calcBlock.querySelector('#calc-input')
    const calcTotal = calcBlock.querySelector('#calc-total')

    const countCalc = () => {
      const calcTypeValue = +calcType.options[calcType.selectedIndex].value
      const calcMaterialValue = +calcMaterial.options[calcMaterial.selectedIndex].value
      const calcSquareValue = calcSquare.value

      let totalValue = 0

      if (calcSquare.value > 0) {
        totalValue = Math.round(calcSquareValue * calcTypeValue * calcMaterialValue)
      } else {
        totalValue = 0
      }
      
      calcTotal.value = totalValue
      
    }

    calcBlock.addEventListener('input', (e) => {
      calcSquare.value = calcSquare.value.replace(/\D/g, '')
      countCalc()
    })
  }

}

export default calc