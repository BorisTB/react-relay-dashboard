export const setAuthToken = (token: string) => localStorage.setItem('token', token)
export const getAuthToken = () => localStorage.getItem('token') || ''
