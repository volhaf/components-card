import styled, { css } from "styled-components";

type WrapperPropsType = {
    wrapperType?: 'conteinerMain' | 'conteinerBtn'
}

export const Wrapper = styled.div<WrapperPropsType>`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;


${props =>props.wrapperType === 'conteinerMain' && css<WrapperPropsType>`
    gap: 20px;
    padding: 10px
`}

${props => props.wrapperType === 'conteinerBtn' && css<WrapperPropsType>`
    justify-content: start;
    flex-direction: row;
    gap: 12px;
    padding: 0px;
    `}
`