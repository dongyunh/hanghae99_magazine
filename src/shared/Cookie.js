const getCookie = (name) => {
  let value = "; " + document.cookie;
  console.log(value);

  // ; uesr_id= 이런 식으로 문자열을 잘라버림.. 그냥 ;으로 분리하지 않는 이유는 나중에 map돌리기 귀찮아서
  // aa=xx ; user_id=bbb; ..... ';user_id=' 롤 잘라버리면 aa=xx, bbb; 요런식으로 나누어짐. 앞에꺼는 버리고 ;앞에 값만 가져오면 value값을 얻을수 있음!!
  let parts = value.split(`; ${name}=`);
  //우리가 찾는 쿠키가 없을 수도 있음, 없는 경우 쪼개지지 않고 나올 수 있음.. if문을 써주는 이유!
  //parts배열.. 쪼개지지않는다면 길이가 2가 아닐 거임!
  //pop은 맨 마지막 배열의 요소를 가져옴, shift는 배열의 맨 첫번째 요소를 가져옴
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
};

const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();

  console.log(date);
  document.cookie = name + "=; expires=" + date;
};

export { getCookie, setCookie, deleteCookie };
