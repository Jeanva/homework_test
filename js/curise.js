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
//1.查找删除元素
let del_item = document.querySelectorAll('.item_action>.action_list>ul>li:not(:first-child)');
for(let item of del_item){
    item.onclick = function(){
        let taget = this;
        console.log(this.parentElement.removeChild(this));
    }
}

//添加元素
let addAction = document.querySelectorAll('li.addAction');
for(let add of addAction){
    add.onclick = function(e){
       let add = this;
       let modelPop = this.parentElement.nextElementSibling.style.visibility;
       console.log(this);
       if(modelPop==' '||modelPop=='visible'){
            this.parentElement.nextElementSibling.style.visibility= 'hidden';
       }else{
            this.parentElement.nextElementSibling.style.visibility = 'visible';
       }
       console.log(modelPop);
    }
}