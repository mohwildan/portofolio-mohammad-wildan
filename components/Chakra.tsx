import { ChakraProvider } from '@chakra-ui/react'
import React, { FC, ReactNode } from 'react'
import { Theme } from '../lib/Theme'

interface Porps {
children: ReactNode
}

const Chakra: FC<Porps> = ({children}) => {
  return (
    <ChakraProvider theme={Theme}>
        {children}
    </ChakraProvider>
  )
}

export default Chakra