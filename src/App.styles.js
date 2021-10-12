import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
    ${({ theme }) => css`
        background-color: ${theme.colors.background};
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
   `}
`

export const CurrentTemperatureWrapper = styled.section`
    ${({ theme }) => css`
        color: ${theme.colors.font};
        font-size: ${theme.font.size.xxlarge};
    `}
`