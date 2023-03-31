import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import { BsYoutube } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { verifySchema as schema, verifySchemaType } from 'src/utils/rules'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import { AppContext } from 'src/context/app.context'
import { useMutation } from 'react-query'
import authApi from 'src/api/auth.api'
import { ErrorResponse } from 'src/types/utils.type'
import { isAxiosUnauthorizedError, isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { clearLocalStorage, getProfileFromLocalStorage } from 'src/utils/auth'

type FormData = verifySchemaType
const verifySchema = schema
const VerifyPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isLoading }
  } = useForm<FormData>({
    resolver: yupResolver(verifySchema)
  })
  const { t } = useTranslation(['auth'])
  const { setIsVerify, setIsAuthentication } = useContext(AppContext)
  const navigate = useNavigate()
  const verifyMutation = useMutation({
    mutationFn: (body: { email: string; encode: string }) => authApi.verify(body)
  })

  const onSubmit = handleSubmit((data) => {
    const email = getProfileFromLocalStorage()?.email
    if (!email) {
      setIsVerify('0')
      clearLocalStorage()
    } else {
      const dataRequest = {
        email,
        encode: data.encode
      }
      verifyMutation.mutate(dataRequest, {
        onSuccess: () => {
          setIsVerify('2')
          navigate('/')
        },
        onError: (error) => {
          if (isAxiosUnauthorizedError<ErrorResponse<FormData>>(error)) {
            const formError = error.response?.data.data
            console.log(formError)
            if (formError) {
              Object.keys(formError).forEach((key) => {
                console.log('key', key)
                console.log('formError[key]', formError[key as keyof FormData])
              })
            }
          }
        }
      })
    }
  })

  return (
    <div className='mx-auto flex h-screen w-64 flex-col justify-center gap-y-5 md:w-96'>
      <Link to={path.home} className='flex flex-col items-center'>
        <BsYoutube className='h-16 w-16 text-red-600 md:h-24 md:w-24' />
        <div className='flex items-end gap-x-1'>
          <span className='text-lg font-semibold text-black dark:text-white md:text-2xl'>
            {t('auth:auth.welcome to')}
          </span>
          <span className='dynamic text-lg font-semibold text-red-600 after:bg-white dark:after:bg-[#0f0f0f] md:text-2xl'>
            YouTube
          </span>
        </div>
      </Link>
      <form className={`flex w-full flex-col`} noValidate onSubmit={onSubmit} autoComplete='false'>
        <div className='flex w-full flex-col items-start gap-y-1'>
          <label
            htmlFor='encode'
            className='cursor-pointer text-xs font-semibold text-black dark:text-white md:text-sm'
          >
            {t('auth:auth.Verification code')}
          </label>
          <Input
            name='encode'
            type='text'
            register={register}
            placeholder={t('auth:auth.enter your verification code')}
            id='encode'
            errorMessage={t(errors.encode?.message as any)}
            classNameInput='rounded-lg border border-gray-400 py-2 px-3 placeholder:text-xs w-64 dark:bg-transparent text-black dark:text-white md:w-96 md:placeholder:text-sm outline-none text-xs md:text-sm'
          />
        </div>
        <Button
          className='mt-3 w-full rounded-lg bg-blue-600 p-2 text-xs font-semibold text-white md:text-sm'
          type='submit'
        >
          {t('auth:auth.confirm')}
        </Button>
      </form>
    </div>
  )
}

export default VerifyPage