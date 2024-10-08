import styled from "styled-components";

export const HeroStyled = styled.form ` //não posso esquecer de colocar a tag html
    height: 360px;
    width: 100%;
    background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
    }

    &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: "";
    opacity: 0.7;
    }
`

export const DivStyled = styled.div` //tag html
    position: relative;
    color: #eee;;
`
export const TitleStyled = styled.h2` //tag html
    font-family: Gloock, serif;
    font-size: 48px;
    text-align: center;
    
    @media (max-width: 768px) {
    font-size: 32px;
    }
`