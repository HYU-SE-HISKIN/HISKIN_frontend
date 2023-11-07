import { createGlobalStyle } from 'styled-components'
import LGEIText from '../fonts/LGEITextTTF-Light.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: "LGEIText";
    src: url(${LGEIText}) format("truetype"),
  }
`