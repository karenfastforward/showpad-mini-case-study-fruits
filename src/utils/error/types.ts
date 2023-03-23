interface AntFormValidateErrorField {
  name: string[]
  errors: string[]
  warnings: string[]
}

export interface AntFormValidateError {
  errorFields: AntFormValidateErrorField[]
  outOfDate: boolean
}
