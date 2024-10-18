import { css } from "@emotion/react";

export const layout = css`
    width: 900px;
    height: 700px;
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    margin: 100px auto;
`   

export const container = css`
    text-align: center;
`

export const titleLayout = css`
    width: 100%;

`

export const title = css`
    margin-top: 50px;
    padding: 30px 0px;
    font-size: 90px;
    font-weight: 700;
    color: #606060;
`

export const addLayout = css`
    width: 100%;
    padding: 30px 0;
    position: relative;
    /* display: flex; */

`

export const addInput = css`
    width: 800px;
    height: 30px;
    border-width: 0 0 1px;
    border-color: #060606;
    text-align : center;
    &:focus {
        outline: none;
    }
    
`

export const addButton = css`
    width: 46px;
    height: 30px;
    position: absolute;
    top: 48px;
    right: 43px;
    transform: translate(0, -50%);
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-size: 20px;
    cursor: pointer;
    transition: 0.5 ease-out;
    background-color: #606060;
    &:hover {
        transition: 0.2s ease-out;
        background-color: #212121; 
    }
    &:active {
        transition: 0.2s ease-out;
        background-color: #ffffff;
        color: #212121;
    }
`

export const viewLayout = css`
    display: flex;
    justify-content: center;

    & > :nth-child(1) {
        margin-right: 5px;
        width: 100px;
        height: 25px;
        background-color: #606060;
        color: #ffffff;
        border: 0px;
        border-radius: 5px;
    }
    & > :nth-child(2) {
        width: 100px;
        height: 25px;
        background-color: #606060;
        color: #ffffff;
        border: 0px;
        border-radius: 5px;
    }
    & > :nth-child(3) {
        width: 100px;
        margin-left: 5px;
        height: 25px;
        background-color: #606060;
        color: #ffffff;
        border: 0px;
        border-radius: 5px;
    }
    & > button {
        cursor: pointer;
        transition: 0.2s ease-out;
    }
    & > button:hover {
        transition: 0.2s ease-out;
        background-color: #212121; 
    }
    & > button:active {
        transition: 0.2s ease-out;
        background-color: #ffffff;
        color: #212121;
    }
`