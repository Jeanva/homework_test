let currenArr=['Firefox','Safari','Ubuntu','Chrome'];
//Tabbar事件
let tabs = document.querySelectorAll('.right_main_filter>ul.filter_tab>li');
function tab_actived(){
    let tab = this; //查找要修改的元素，当前tab
    let open = document.querySelector('.right_main_filter>ul.filter_tab>li.actived');
    if(open!=null)
        open.className='';
    tab.className='actived';
}
for(let tab of tabs){
    tab.onmouseover = tab_actived;
    tab.onclick = tab_actived
}

//删除元素
let del_item = document.querySelectorAll('.item_action>.action_list>ul>li:not(:first-child)');
for(let item of del_item){
    item.onclick = function(){
        let taget = this;
        console.log(this.parentElement.removeChild(this));
    }
}

//弹出添加元素模态框
let addAction = document.querySelectorAll('li.addAction');
let activedUl = null;   //当前选中UL
let activedInput= null; //当前激活input输入框
for(let add of addAction){
    add.onclick = function(e){
       let add = this;
       activedUl= this.parentElement;
       console.log(activedUl);
       let modelPop = this.parentElement.nextElementSibling;
       let popArr = document.querySelectorAll('.confirm_pop');
       closeModal();
       if(modelPop.style.visibility==' '||modelPop.style.visibility=='visible'){
          modelPop.style.visibility= 'hidden';
       }else{
          modelPop.style.visibility = 'visible';
          activedInput = modelPop.children[2].firstElementChild;
       }
    
    }
}
//关闭模态框
function closeModal(){
    let popArr = document.querySelectorAll('.confirm_pop');
    popArr.forEach((value)=>{
        value.style.visibility='hidden';
    });
}
//输入值获取
let modelAdd= document.querySelector('li.addAction[visibility=visible]');
let tmpArr = []; //临时数组，存储输入值
function getInputVal(){
    tmpArr = activedInput.value.split(',');
    console.log(tmpArr);
    activedInput.value='';
    addNewSort();
}
//添加新分类
function addNewSort(){
    console.log(tmpArr);
    tmpArr.forEach((value)=>{
        let tmpLi = document.createElement('li');
        tmpLi.innerHTML = value;
        activedUl.appendChild(tmpLi);
    })
}
