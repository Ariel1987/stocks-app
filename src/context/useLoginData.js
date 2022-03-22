import React from 'react'

export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS'
export const FETCHING_DATA_ERROR = 'FETCHING_DATA_ERROR'
export const POSTING_DATA_SUCCESS = 'POSTING_DATA_SUCCESS'
export const POSTING_DATA_ERROR = 'POSTING_DATA_ERROR'

const LoginContext = React.createContext()

const initState = {
  error: false,
  data: null,
}

function loginReducer(state = initState, action) {
  switch (action.type) {
    case FETCHING_DATA: {
      return
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
    case POSTING_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: false,
      }
    }
    case POSTING_DATA_ERROR: {
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

function LoginDataProvider({ children }) {
  const [state, dispatch] = React.useReducer(loginReducer, {
    data: null,
    error: false,
  })
  const value = { state, dispatch }
  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
}

function useLoginData() {
  const context = React.useContext(LoginContext)

  if (context === undefined) {
    throw new Error('useLoginData must be used within a GithubDataProvider')
  }
  return context
}

export { LoginDataProvider, useLoginData }
