import React from 'react'
import { Box, Typography } from '@material-ui/core'
import useForm from 'react-hook-form'
import { LoginMutation, LoginInput } from 'mutations'
import { LoginForm } from './LoginForm'

const Login: React.FC = () => {
  const [login, { loading }] = LoginMutation.useMutation()
  const { handleSubmit, register } = useForm<LoginInput>()

  const onSubmit = handleSubmit(async (data) => {
    try {
      await login({
        variables: {
          data
        }
      })
    } catch (err) {
      console.error(err)
    }
  })

  return (
    <>
      <Typography variant='h5' component='h1' align='center'>
        <Box fontWeight='fontWeightBold' fontStyle='italic' color='grey.500'>
          Log in to access Dashboard
        </Box>
      </Typography>

      <LoginForm onSubmit={onSubmit} disabled={loading} register={register}/>
    </>
  )
}

export { Login }
