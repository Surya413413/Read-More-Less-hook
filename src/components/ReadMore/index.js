import {useState} from "react"

import {
  CustomHomeContainer,
  Heading,
  Image,
  Button,
  Para,
} from './styledComponents'
const ReadMore = props => {
  const {reactHooksDescription} = props

const [currentStage,setStage] = useState(false)
const onClickButton = () => {
 setStage(prevState => !prevState)
  }

  const buttonText = currentStage ? "Read Less":"Read More"
  const description = currentStage ?  reactHooksDescription : reactHooksDescription.slice(0,170)

  return (
    <CustomHomeContainer>
      <Heading>React Hooks</Heading>
      <p>Hooks are a new addition to React</p>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Para>{description}</Para>
      <Button type="button" onClick={onClickButton}>{buttonText}</Button>
    </CustomHomeContainer>
  )
}
export default ReadMore
