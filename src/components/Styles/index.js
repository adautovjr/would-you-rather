import styled from 'styled-components';

export const Hoverable = styled.div`
    cursor: pointer;
    transition: transform .3s;
    :hover {
        transform: translateY(-3px);
    }
`;

export const Author = styled.div`
    margin-right: 20px;
    img {
        max-width: 100%;
        width: 100%;
        border: 1px solid transparent;
        border-radius: 50%;
    }
    div {
        text-align: center;
    }
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.row ? "row": (props.column ? "column" : "row")};
    width: 100%;
    height: 100%;
    >div:first-of-type {
        margin-bottom: ${props => props.row ? "0": (props.column ? "10px" : "0")};
        margin-right: ${props => props.row ? "10px": (props.column ? "0" : "0")};
    }
`;

export const Option = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${props => props.left ? "#00c4e3": (props.right ? "#ff5f53" : "#FFF")};
    position: relative;
    padding: 10px 80px 10px 10px;
    border-radius: 6px;
    .percentage {
        font-size: 26px;
        font-weight: bold;
        color: ${props => props.left ? "#3a8b98": (props.right ? "#c5574f" : "#FFF")};
        background-color: ${props => props.left ? "#00c4e3": (props.right ? "#ff5f53" : "#FFF")};
        text-shadow: ${props => props.left ? "#4ce7ff": (props.right ? "#f7a49d" : "#FFF")} 1px 1px 0;
        position: absolute;
        right: 5px;
        max-width: 100%;
    }
    .votes {
        font-size: 10px;
        color: #fff;
        background-color: ${props => props.left ? "#00c4e3": (props.right ? "#ff5f53" : "#FFF")};
        text-shadow: #7a7a7a 1px 2px 0;
        align-self: flex-start;
    }
    .text {
        font-size: 20px;
        color: #fff;
        background-color: ${props => props.left ? "#00c4e3": (props.right ? "#ff5f53" : "#FFF")};
        text-shadow: #7a7a7a 1px 2px 0;
        align-self: flex-start;
        text-transform: capitalize;
        line-height: 23px;
    }
    .voted {
        font-size: 10px;
        color: #fff;
        background-color: ${props => props.left ? "#00c4e3": (props.right ? "#ff5f53" : "#FFF")};
        text-shadow: #7a7a7a 1px 2px 0;
        position: absolute;
        display: none;
    }
`;