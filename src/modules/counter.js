export const INC_REQ = 'counter/INC_REQ'
export const INC = 'counter/INC'
export const DEC_REQ = 'counter/DEC_REQ'
export const DEC = 'counter/DEC'

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INC_REQ:
      return {
        ...state,
        isIncrementing: true
      }

    case INC:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DEC_REQ:
      return {
        ...state,
        isDecrementing: true
      }
      
    case DEC:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}

export const increment = () => {
  return (dispatch) => {
    dispatch({ type: INC_REQ })
    dispatch({ type: INC })
  }
}


export const incrementAsync = () => {
  return (dispatch) => {
    dispatch({ type: INC_REQ })
    return setTimeout(() => {
      dispatch({ type: INC })
    }, 3000)
  }
}

export const decrement = () => {
  return (dispatch) => {
    dispatch({ type: DEC_REQ })
    dispatch({ type: DEC })
  }
}


export const decrementAsync = () => {
  return (dispatch) => {
    dispatch({ type: DEC_REQ })
    return setTimeout(() => {
      dispatch({ type: DEC })
    }, 3000)
  }
}
