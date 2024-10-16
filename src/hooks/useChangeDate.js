import { useState } from "react";

export const useChangeDate = (timestamp) => {

    let date = new Date(timestamp);

    const year = date.getFullYear();
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const resultDate = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`

    return resultDate
}