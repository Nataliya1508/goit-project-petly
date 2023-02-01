import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    margin-bottom: 40px;

    font-weight: 500;
    font-size: 32px;
    line-height: 44px;

    letter-spacing: 0.04em;

    color: #181C27;

    .active {
        background-color: black;
    }

    &:last-child {
        margin-bottom: 0;
    }

    &:hover,
    :focus {
        font-weight: 700;

        text-decoration-line: underline;

        color: #F59256;
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 60px;

        font-size: 48px;
        line-height: 66px;
    }

    @media screen and (min-width: 768px) and (max-width: 1279px) {
        &:first-of-type {
            margin-top: 34px;
        }
    }

    @media screen and (min-width: 1280px) {

        margin: 0;

        font-size: 20px;
        line-height: 27px;
    }
`

