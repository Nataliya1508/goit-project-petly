import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    margin-bottom: 40px;

    font-weight: 500;
    font-size: 32px;
    line-height: 44px;

    letter-spacing: 0.04em;

    color: #181C27;

    &:last-child {
        margin-bottom: 0;
    }

    &:hover,
    :focus {
        font-weight: 700;

        text-decoration-line: underline;

        color: #F59256;
    }
`