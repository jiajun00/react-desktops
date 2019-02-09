import React from 'react'
import Loadable from 'react-loadable'
import { Loading } from '@alifd/next'

const indexLoadable = Loadable({
  loader: ()=> import('./index.js'),
  loading(){return <Loading/> }
})

export default indexLoadable