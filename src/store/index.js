import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { ENABLE_REDUX_DEV_TOOLS } from '../constants'
import rootReducer from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: true,
    }),
    logger,
  ],
  devTools: ENABLE_REDUX_DEV_TOOLS,
})

export const useSelector = useReduxSelector
export const useDispatch = () => useReduxDispatch()

export default store
