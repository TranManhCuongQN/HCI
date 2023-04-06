import { AxiosError } from 'axios'
/* eslint-disable import/no-named-as-default-member */
import axios from 'axios'

import config from 'src/constants/config'
import { ErrorResponse } from 'src/types/utils.type'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}

export function isAxiosUnprocessableEntityError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}

//  Lỗi 401
export function isAxiosUnauthorizedError<UnauthorizedError>(error: unknown): error is AxiosError<UnauthorizedError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.Unauthorized
}

// token hết hạn
export function isAxiosExpiredTokenError<UnauthorizedError>(error: unknown): error is AxiosError<UnauthorizedError> {
  return (
    isAxiosUnauthorizedError<ErrorResponse<{ name: string; message: string }>>(error) &&
    error.response?.data?.data?.name === 'EXPIRED_TOKEN'
  )
}

// convert
export function convertNumberToDisplayString(num: number): string {
  const absNum = Math.abs(num)
  if (absNum >= 1e9) {
    return (num / 1e9).toFixed(1) + 'B'
  } else if (absNum >= 1e6) {
    return (num / 1e6).toFixed(1) + 'M'
  } else if (absNum >= 1e3) {
    return (num / 1e3).toFixed(1) + 'K'
  } else {
    return num.toString()
  }
}

export function getFormattedDate(dates: string) {
  const date = new Date(dates)
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  const formattedDate = date.toLocaleDateString(
    'vi-VN',
    options as {
      year: 'numeric'
      month: 'short'
      day: 'numeric'
    }
  )
  return formattedDate
}
