
export const userRequest = (state) => {
  state.status = 'loading'
}

export const userSuccess = (state, resp) => {
  state.status = 'success'
  state.profile = resp.user
}

export const userError = (state) => {
  state.status = 'error'
}

export const userLogout = (state) => {
  state.profile = {}
  state.token = ''
}
