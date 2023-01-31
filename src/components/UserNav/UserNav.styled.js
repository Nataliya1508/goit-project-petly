import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import user from '../../media/user.svg'

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 6px 34px;
    margin-bottom: 60px;

    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.04em;
    text-align: center;

    color: #FFFFFF;
    background-color: #F59256;

    border: 2px solid #F59256;
    border-radius: 40px;

    &:hover,
    :focus {
        color: #111111;
        background-color: #FDF7F2;
    }
`