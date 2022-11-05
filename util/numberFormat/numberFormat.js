const K = Math.pow(10, 3)
const M = Math.pow(10, 6)
const B = Math.pow(10, 9)

const handleDigits = num => {
  switch (true) {
    case num > K * 1 && num < K * 100: // more than 1000，format => x.x K
    case num > K * 999 && num < M * 100: // more than 999K，format => xx.x M
    case num > M * 999 && num < B * 100: // more than 999M，format => xx.x B
      return 1
    case num > K * 100 && num < K * 999: // more than 100K format no point
    case num > M * 100 && num < M * 999: // more than 100M format no point
    case num > B * 100: // more than 100B format no point
      return 0
    default:
      return 0
  }
}

const NumberFormat = (num, notation) => {
  let result
  if (notation === 'compact') {
    result = new Intl.NumberFormat('en', {
      notation: 'compact',
      maximumFractionDigits: handleDigits(num)
    }).format(num)
  } else {
    result = new Intl.NumberFormat('en').format(num)
  }

  return result
}

export default NumberFormat
