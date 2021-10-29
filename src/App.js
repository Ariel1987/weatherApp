import React from 'react'
import { CurrentWeatherDateWrapper, FooterWrapper, HeaderWrapper, Wrapper, Modal } from './App.styles'
import CurrentTemperature from './components/CurrentTemperature/CurrentTemperature'
import CurrentDate from './components/CurrentDate/CurrentDate'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useLoading } from './context/context-loading'

function App() {
  const { state: { loading } } = useLoading()

  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <CurrentWeatherDateWrapper>
          <CurrentTemperature />
          <CurrentDate />
        </CurrentWeatherDateWrapper>
        <FooterWrapper>
          <hr />
          <Footer />
        </FooterWrapper>
      </Wrapper>
      <Modal loading={loading}>
        <img src='./images/loading.svg' alt='Penis subindo e descendo' />
      </Modal>
    </>
  )
}

export default App
