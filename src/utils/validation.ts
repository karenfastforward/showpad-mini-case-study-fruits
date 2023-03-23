import { Ref } from 'vue'
import { AntFormValidateError, errorHandler } from './error'

export const antFormValidation = async (form: Ref): Promise<boolean> => {
  try {
    await form.value.validate()
    return true
  } catch (error) {
    const antFormValidateError = error as AntFormValidateError

    antFormValidateError.errorFields.forEach((errorField) => {
      errorField.errors.forEach((err) => errorHandler(new Error(err)))
    })

    return false
  }
}
