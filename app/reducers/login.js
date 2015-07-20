import { ERASE_SUBMIT } from 'constants'
import { LOGGED_IN, LOGIN_FAILED } from 'constants/login'
import { createSubmitReducer } from 'utils'

export default createSubmitReducer(ERASE_SUBMIT, LOGGED_IN, LOGIN_FAILED)
