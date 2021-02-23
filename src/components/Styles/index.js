import styled from 'styled-components';

export const Hoverable = styled.div`
    cursor: pointer;
    transition: transform .3s;
    :hover {
        transform: translateY(-3px);
    }
`;

export const LeaderboardCardStyle = styled.div`
    cursor: default;
    .card {
        margin-bottom: 20px;
    }
    .info {
        height: 100%;
    }
    .padding {
        height: 100%;
        padding: 10px;
    }
    .details{
        display: flex;
        flex-direction: column;
        border: 2px solid #c8cdd266;
        border-top: 0;
        border-bottom: 0;
        hr {
            color: #c8cdd266;
            border: 1px solid #c8cdd266;
            height: 1px;
            width: 100%;
        }
    }
    .data {
        display: flex;
    }
    .spacer {
        flex-grow: 1;
    }
    .name {
        font-size: 20px;
        font-weight: bold;
    }
    .score {
        display: flex;
        padding-right: 0;
        padding-top: 20px;
        padding-bottom: 20px;
        .score-plaque {
            display: flex;
            flex-direction: column;
            width: 100%;
            border: 1px solid #c8cdd2;
            border-radius: 5px;
            .header {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #ccc;
                border-bottom: 1px solid #c8cdd2;
                padding: 5px;
            }
            .body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                .circle {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 80px;
                    height: 80px;
                    background-color: #00c4e3;
                    border-radius: 50%;
                    font-size: 40px;
                    color: white;
                }
            }
        }
    }
`;

export const Author = styled.div`
    margin: ${props => props.row ? "0 auto 50px" : (props.icon ? "0 10px 0" : "30px 40px 30px 30px")};
    display: ${props => props.icon ? "flex" : "block"};
    align-content: center;
    div {
        text-align: center;
    }
    img {
        max-width: ${props => props.row ? "100px" : (props.icon ? "30px" : "100%")};
        margin: auto;
        width: 100%;
        border: 1px solid transparent;
        border-radius: 50%;
    }
    .would-you-rather {
        font-size: 50px;
        font-weight: bold;
        width: 100%;
    }
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.row ? "row" : (props.column ? "column" : "row")};
    width: 100%;
    height: 100%;
    >div:first-of-type {
        margin-bottom: ${props => props.row ? "0" : (props.column ? "10px" : "0")};
        margin-right: ${props => props.row ? "10px" : (props.column ? "0" : "0")};
    }
`;

export const Option = styled(Hoverable)`
    display: flex;
    justify-content: ${props => (props.row && props.answered) ? "flex-start" : "center"};
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: ${props => props.row ? "300px" : "1px"};
    height: 100%;
    background-color: ${props => props.left ? "#00c4e3" : (props.right ? "#ff5f53" : "#FFF")};
    position: relative;
    padding: ${props => props.row ? "20px" : "10px 80px 10px 10px"};
    border-radius: 6px;
    overflow: hidden;
    :hover {
        transform: ${props => props.row ? "translateY(-3px)" : "translateY(0px)"};
    }
    .percentage {
        font-size: ${props => props.row ? "80px" : "26px"};
        font-weight: bold;
        color: ${props => props.left ? "#3a8b98" : (props.right ? "#c5574f" : "#FFF")};
        background-color: ${props => props.left ? "#00c4e3" : (props.right ? "#ff5f53" : "#FFF")};
        text-shadow: ${props => props.left ? "#4ce7ff" : (props.right ? "#f7a49d" : "#FFF")} 1px 1px 0;
        position: ${props => props.row ? "unset" : "absolute"};
        right: ${props => props.row ? "inherit" : "5px"};
        max-width: 100%;
    }
    .votes {
        font-size: ${props => props.row ? "25px" : "10px"};
        color: #fff;
        background-color: ${props => props.left ? "#00c4e3" : (props.right ? "#ff5f53" : "#FFF")};
        text-shadow: #7a7a7a 1px 2px 0;
        align-self: ${props => props.row ? "center" : "flex-start"};
    }
    .text, .text input {
        font-size: ${props => props.row ? "40px" : "20px"};
        color: #fff;
        background-color: ${props => props.left ? "#00c4e3" : (props.right ? "#ff5f53" : "#FFF")};
        text-shadow: #7a7a7a 1px 2px 0;
        align-self: ${props => props.row ? "center" : "flex-start"};
        line-height: ${props => props.row ? "40px" : "23px"};
        text-align: ${props => props.row ? "center" : "left"};
        border: none;
        :focus {
            outline: none;
        }
        ::placeholder,
        ::-webkit-input-placeholder {
            color: #dcdcdc;
        }
        ::first-letter {
            text-transform: uppercase;
        }
    }
    .text input {
        line-height: 200px;
    }
    .voted {
        font-size: 10px;
        color: #fff;
        background-color: ${props => props.left ? "#00c4e3" : (props.right ? "#ff5f53" : "#FFF")};
        text-shadow: #7a7a7a 1px 2px 0;
        position: absolute;
        top: -15px;
        right: ${props => props.left ? "-60px" : (props.right ? "unset" : "-60px")};
        left: ${props => props.left ? "unset" : (props.right ? "-60px" : "unset")};
        width: 0;
        height: 0;
        border-left: 80px solid transparent;
        border-right: 80px solid transparent;
        border-bottom: ${props => `80px solid ${props.left ? "#3a8b98" : (props.right ? "#c5574f" : "#3a8b98")}`};
        transform: ${props => props.left ? "rotate(45deg)" : (props.right ? "rotate(-45deg)" : "rotate(45deg)")};
        svg {
            width: 50px;
            height: 50px;
            position: relative;
            top: 25px;
            right: ${props => props.left ? "28px" : (props.right ? "20px" : "28px")};
            transform: ${props => props.left ? "rotate(-45deg)" : (props.right ? "rotate(45deg)" : "rotate(-45deg)")};
        }
    }
`;

export const Limiter = styled.div`
    position: absolute;
    right: 15px;
    bottom: 10px;
    color: ${props => props.chars ? "white" : "red"};
`;

export const LoginStyle = styled.div`
    .login-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 300px;
    }
`;

export const NotFoundStyle = styled.div`
    .not-found-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 300px;
        .not-found-code {
            font-size: 200px;
            color: #333; 
        }
        .not-found-message {
            font-size: 30px;
            color: #333;
            margin-bottom: 20px; 
        }
        .link {
            color: #333;
            text-decoration: none;
        }
    }
`;