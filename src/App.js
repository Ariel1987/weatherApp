import React, { useEffect } from 'react'
import { CurrentWeatherDateWrapper, FooterWrapper, HeaderWrapper, Wrapper, Modal } from './App.styles'
import CurrentTemperature from './components/CurrentTemperature/CurrentTemperature'
import CurrentDate from './components/CurrentDate/CurrentDate'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { LoadingProvider, useLoading } from './context/context-loading'

function App() {
  
  const { state: { loading }} = useLoading()

  useEffect(() => {

  }, [])

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
    <Modal loading={true}/>
    </>
  )
}

export default App
