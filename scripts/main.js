/* 切换图片 */
let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/universe.jpg') {
        myImage.setAttribute('src', 'images/forest.png');
    } else {
        myImage.setAttribute('src', 'images/universe.jpg');
    }
}

/* 个性化欢迎 */
let switch_user_Button = document.querySelector('#切换用户');
let myHeading = document.querySelector('h1');

//存储用户信息
function setUserName() {
    let myName = prompt('请输入你的名字：');
    if (!myName) {
        alert("请重新输入！")
        setUserName(); 
    } else {
        localStorage.setItem('name', myName);
        return myName
    }
}

//自动欢迎
if (!localStorage.getItem('name')) {
    let new_username = setUserName();
    myHeading.textContent = '初次见面，' + new_username;
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎回来，' + storedName;
}

//按钮手动切换用户
switch_user_Button.onclick = function () {
    new_username =setUserName();
    myHeading.textContent = '初次见面，' + new_username;
}