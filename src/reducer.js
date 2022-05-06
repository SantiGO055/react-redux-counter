const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'GOOD':
      let auxGood = state.good
      auxGood +=1
      state.good = auxGood;
      return state
    case 'OK':
      let auxOk = state.ok
      auxOk += 1
      state.ok = auxOk
      return state
    case 'BAD':
      let auxBad = state.bad
      auxBad += 1
      state.bad = auxBad
      return state
    case 'ZERO':
      let auxZero = state.ok
      auxZero = 0
      state.ok = auxZero
      state.bad = auxZero
      state.good = auxZero
      return state
    default: return state
  }
  
}

export default counterReducer