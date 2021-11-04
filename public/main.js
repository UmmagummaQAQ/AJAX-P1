console.log('这是main.js')

// 加载HTML
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/3.html'); 
    request.onload = () => {
        console.log(request.response)
        // 创建div -> 填写div内容 -> 将该div插入到body里
        const div = document.createElement('div');
        div.innerHTML = request.response;
        document.body.appendChild(div);
    }
    request.onerror = () => {};
    request.send();
};

// 加载CSS
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET','/style.css');
  request.onload = () => {
      console.log('request.response');
    console.log(request.response);
    // 创建style标签
    const style = document.createElement('style');
    // 填写style内容
    style.innerHTML = request.response;
    //将style插入到头部
    document.head.appendChild(style)
  };
  request.onerror = () => {
    console.log('失败');
  };
  request.send();
};

//  加载JS
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/2.js');
    request.onload = () => {
        //创建JS标签，填写script内容，将script插入到body
        const script = document.createElement('script');
        script.innerHTML = request.response;
        document.body.appendChild(script);
    };
    request.onerror = () => {};
    request.send();
};

// 加载XML
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/4.xml');
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim());
        }
    };
    request.send();
};

// 加载JSON
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/5.json');
    request.onreadystatechange = () => {
        if(request.readyState ===4 && request.status ===200){
            console.log(request.response)
            const object = JSON.parse(request.response);// 将符合JSON语法的字符串变成对应的对象或其他
            myName.textContent = object.name;
        }
    };
    request.send();
};

// 分页
let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response);
            const array = JSON.parse(request.response)
            array.forEach(item=>{
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li);
            });
            n += 1;
        };
    };
    request.send();
};




