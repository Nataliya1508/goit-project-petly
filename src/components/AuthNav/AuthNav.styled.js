import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    padding: 6px 26px;
    margin-right: 12px;
    margin-bottom: 60px;

    font-weight: 500;
    font-size: 14px;
    line-height: 19px;

    letter-spacing: 0.04em;

    color: #FFFFFF;
    background: #F59256;

    border: 2px solid #F59256;
    border-radius: 40px;
    outline: none;

    &:last-child {
        margin-right: 0;
    }

    &:hover,
    :focus {
        color: #111111;
        background-color: #FDF7F2;
    }
`