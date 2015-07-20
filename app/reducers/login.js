import { LOGIN_INIT, LOGGED_IN, LOGIN_FAILED } from 'constants/login'
import { createSubmitReducer } from 'utils'

export default createSubmitReducer(LOGIN_INIT, LOGGED_IN, LOGIN_FAILED)
