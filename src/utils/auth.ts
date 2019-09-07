export const setAuthToken = (token: string) =>
  localStorage.setItem('token', token)
export const getAuthToken = () => localStorage.getItem('token') || ''
export const removeAuthToken = () => localStorage.removeItem('token')

export const mightBeLoggedIn = () => !!getAuthToken()

export const unsetLoggedUser = () => {
  removeAuthToken()
}
