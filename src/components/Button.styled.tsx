import styled, { css } from "styled-components"


type BtnPropsType = {
    color?: string
    btnType?: 'primary' |'outlined' 

}

export const Btn = styled.button<BtnPropsType> `
    border-radius: 5px;
    width: 86px;
    height: 30px;
    font-size: 10px;
    line-height: 20px;
    font-weight: bold;

    ${props => props.btnType === "outlined" && css<BtnPropsType>`
    background-color: transparent;
    border: 2px solid  ${props => props.color || "#4E71FE"};
    color: ${props => props.color || '#4E71FE'}; 
    `}

    ${props => props.btnType === 'primary' && css<BtnPropsType> `
    background-color: ${props => props.color || '#4E71FE'};
    border: none; 
    color: ${props => props.color || '#fff'}; 
    `}
`








