import { home } from '../network/request'

// http://120.27.146.2:1004/getGridTwo    
export function getProblem() {
  return home({
    url: '/getGridTwo',
  })
}

// http://120.27.146.2:1004/getgridone
export function getGridone() {
  return home({
    url: '/getGridone',
  })
}