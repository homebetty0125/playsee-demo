import DownloadButton from 'component/block/downloadButton'
import { HeaderContainer, HeaderLogo, HeaderRight } from './header.style'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src='/icon/playsee_logo.png' alt='playsee-logo' />
      </HeaderLogo>
      <HeaderRight>
        <DownloadButton>Download</DownloadButton>
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header
