import styled, { css } from "styled-components";



type TextPropsType = {
    color?: string
    fontSize?: string 
    textType: 'title' | 'mainText'
}

export const Text = styled.p<TextPropsType>`
    color: ${props => props.color || "#000"}; 

${props => props.textType === 'title' && css<TextPropsType>`
    color: ${props => props.color || "#000"};
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
`}

${props => props.textType === 'mainText' && css<TextPropsType>`
    color: ${props => props.color || '#ABB3BA'};
    font-size: 12px;
    line-height: 20px;
    font-weight: 500;
`}

`