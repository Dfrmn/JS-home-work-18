let userNum = prompt(`Введите число`);

function correctEnding(userNum) {

    if (userNum.slice(-2) == 11 || userNum.slice(-2) == 12 || userNum.slice(-2) == 13 || userNum.slice(-2) == 14) {
        return `${userNum.trim()} лет`;
    }
    if (userNum.slice(-1) == 1) {
        return `${userNum.trim()} год`;
    }
    if (userNum.slice(-1) >= 2 && userNum.slice(-1) <= 4) {
        return `${userNum.trim()} года`;
    }
    else {
        return `${userNum.trim()} лет`;
    }
}
alert(correctEnding(userNum));