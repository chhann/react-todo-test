import { css } from "@emotion/react";

export const layout = css`
    width: 900px;
    height: 700px;
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

export const listLayout = css`
    margin-top: 15px;
    width: 100%;
    height: 500px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        transition: 0.2s ease-out;
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        cursor: pointer;
        transition: 0.2s ease-out;
        background-color: #606060;
        border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb:hover {
        transition: 0.2s ease-out;
        background-color: #212121;
        border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb:active {
        transition: 0.2s ease-out;
        background-color: gray;
        border-radius: 3px;
    }
    &::-webkit-scrollbar-track {
        background-color: #fafafafa;
    }
    
`

export const listContainer =css`
    list-style-type: none;
`
export const liLayout = css`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    `

export const todoLayout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    height: 50px;
    border-bottom: 2px solid #606060;
    &:hover {
        border-bottom: 3px solid #606060;
    }

    
`
export const coment = css`
    width: 280px;
    overflow-y: auto;
    cursor: pointer;
    transition: 0.2s ease-out;
    &:hover {
        transition: 0.2s ease-out;
    }
`


export const changeStatus = css`
    & > input[type="checkbox"] {
        display: none;
    }
    & > input[type="checkbox"]:checked + label > span {
        color: #ffffff;
    }
    & > label > span {
        cursor: pointer;
        display: inline-block;
        width: 17px;
        height: 17px;
        color: #606060;
        border: 1px solid #606060;
        border-radius: 3px;
        background-color: #606060;
        transition: color 0.3s; /* 선택사항: 부드러운 전환 효과 */
    }

    & > label > span:hover {
        color: #212121;
        background-color: #212121;
    }

    & > button {
        cursor: pointer;
        font-size: 17px;
        border: 0;
        background-color: transparent;
        color: #606060;
        transition: 0.2s ease-out;
    }
    & > button:hover {
        color: #212121;
    }
`
export const editInput = css`
    width: 280px;
    border: none;
    text-align : center;
    font-size: 15px;
    &:focus {
        outline: none;
    }
`


export const editButton = css`
    display: flex;
    & > :nth-child(1){
        padding-right: 2px;
        cursor: pointer;
        font-size: 17px;
        border: 0;
        background-color: transparent;
        color: #606060;
        transition: 0.2s ease-out;
    }
    & > :nth-child(2){
        cursor: pointer;
        display: inline-block;
        font-size: 17px;
        /* width: 17px;
        height: 17px; */
        color: #606060;
        border: 0px;
        background-color: white;
    }
    & > button:hover {
        color: #212121;
    }
`