import { ReactComponent as ChevronLeft } from './chevron-left.svg'
import { ReactComponent as ChevronRight } from './chevron-right.svg'

import './ArrowWrapper.css'

let counter = 1

const ArrowWrapper = props => {
  const rightInputHandler = () => {
    counter++
    props.storeCounter(counter)
  }

  const leftInputHandler = () => {
    counter--
    if (counter < 1) counter = 1
    props.storeCounter(counter)
  }

  return (
    <div className="search-results">
      {counter === 1 ? (
        <div></div>
      ) : (
        <div className="chevron">
          <ChevronLeft onClick={leftInputHandler} />
        </div>
      )}

      {props.children}
      <div className="chevron">
        <ChevronRight onClick={rightInputHandler} />
      </div>
    </div>
  )
}

export default ArrowWrapper
