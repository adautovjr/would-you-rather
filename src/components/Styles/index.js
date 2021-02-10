import styled from 'styled-components';

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

export const Options = styled.div`
    display: flex;
    flex-direction: ${props => props.row ? "row": (props.column ? "column" : "row")};
    width: 100%;
    height: 100%;
`;

export const Option = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${props => props.left ? "#00c4e3": (props.right ? "#ff5f53" : "#FFF")}
`;