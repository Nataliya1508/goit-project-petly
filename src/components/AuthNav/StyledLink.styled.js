import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import user from '../../media/user.svg'

export const StyledAuthLink = styled(Link)`
    display: flex;
    align-items: center;

    padding: 6px 28px;
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

    &:last-child {
        margin-right: 0;
    }

    &:hover,
    :focus {
        color: #111111;
        background-color: #FDF7F2;
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 0px;
        padding: 8px 28px;

        font-size: 20px;
        line-height: 27px;
    }

    @media screen and (min-width: 1280px) {
        margin-right: 20px;
    }
`

export const StyledUserLink = styled(StyledAuthLink)`
    padding: 6px 36px;

    &:hover,
    :focus {
        color: #111111;
        background-color: #FDF7F2;
    }

    ::before {
        content: '';

        width: 20px;
        height: 20px;
        margin-right: 12px;
        margin-bottom: 1px;

        background-image: url(${user});
        background-repeat: no-repeat;
        background-size: contain;
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 0px;
        padding: 6px 28px;

        font-size: 16px;
        line-height: 22px;

        ::before {
            width: 28px;
            height: 28px;
        }
    }
`