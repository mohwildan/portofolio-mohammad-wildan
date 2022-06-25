import { Text } from "@chakra-ui/react"
import {FC, ReactNode} from "react"
interface Props{
     children: ReactNode
}


const SkillText:FC<Props> = ({children}) => {
  return (
    <Text fontSize="1.1rem" fontWeight="medium">{children}</Text>
  )
}

export default SkillText