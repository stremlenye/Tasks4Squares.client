import { ERASE_SUBMIT } from 'constants'
import { SIGNED_UP, SIGNUP_FAILED } from 'constants/signup'
import { createSubmitReducer } from 'utils'

export default createSubmitReducer(ERASE_SUBMIT, SIGNED_UP, SIGNUP_FAILED)
