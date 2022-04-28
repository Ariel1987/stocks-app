import React from "react"

export const LOADING = 'loading'
export const LOADING_ENDED = 'loadingEnded'

const initState = {
  loading: false
}

const LoadingContext = React.createContext()

function loadingReducer(state = initState, action) {
  switch (action.type) {
    case LOADING: {
      return { loading: true }
    }
    case LOADING_ENDED: {
      return { loading: false }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function LoadingProvider({ children }) {
  const [state, dispatch] = React.useReducer(loadingReducer, { loading: false })
  const value = { state, dispatch }
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  )
}

function useLoading() {
  const context = React.useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}

export { LoadingProvider, useLoading }
