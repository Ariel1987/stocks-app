import React from 'react'

export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS'
export const FETCHING_DATA_ERROR = 'FETCHING_DATA_ERROR'

const StocksContext = React.createContext()

const initState = {
  error: false,
  data: null,
  errorData: null
}

function stocksReducer(state = initState, action) {
  switch (action.type) {
    case FETCHING_DATA: {
      return { ...state }
    }
    case FETCHING_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: false,
      }
    }
    case FETCHING_DATA_ERROR: {
      return {
        ...state,
        data: null,
        error: true,
        errorData: action.payload,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    } 
  }
}

function StocksProvider({ children }) {
  const [state, dispatch] = React.useReducer(stocksReducer, {
    data: null,
    error: false,
  })
  const value = { state, dispatch }
  return <StocksContext.Provider value={value}>{children}</StocksContext.Provider>
}

function useStocksData() {
  const context = React.useContext(StocksContext)

  if (context === undefined) {
    throw new Error('stocksData must be used within a StocksProvider')
  }
  return context
}

export { StocksProvider, useStocksData  }
