import styled from "@emotion/styled";

export const BurgerButton = styled.div`
    width: 30px;
	height: 4px;

    position: relative;
	transform: translateY(8px);
	background: black;
	transition: all 0ms 300ms;

    ::before {
        content: "";
	    position: absolute;
	    left: 0;
	    bottom: 8px;

        width: 30px;
	    height: 4px;

	    background: black;
	    transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    ::after {
        content: "";
        position: absolute;
        left: 0;
        top: 8px;

        width: 30px;
	    height: 4px;

        background: black;
        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    &.active {
        background: rgba(255, 255, 255, 0); 
    }

    &.active::before {
        bottom: 0;
	    transform: rotate(-45deg);
	    transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    &.active::after {
        top: 0;
	    transform: rotate(45deg);
	    transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
`