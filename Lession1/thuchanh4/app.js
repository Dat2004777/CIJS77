const name = document.getElementById('name');
const phone=document.getElementById('phone');
const add=document.querySelector('add-btn');
const form = document.querySelector('form');
const ul=document.querySelector('ul');
const searchBtn=document.getElementById('search-btn');
const search=document.getElementById('search');
const delBtn=document.getElementById('del-btn');
let data=[];
form.addEventListener('submit',(e)=>{
    e.preventDefault();
     search.value='';
    if(name.value && phone.value){
        data.push({name:name.value,phone:phone.value});
    }
    console.log(data);
    addItem()
    name.value='';
    phone.value='';
   
});
const addItem=()=>{
    ul.innerHTML='';
    data.sort((a,b)=>{
        const nameA=a.name.toUpperCase();
        const nameB=b.name.toUpperCase();
        if(nameA< nameB)
        {
            return -1;
        }
        if(nameA>nameB){
            return 1;
        }
        return 0;
    }).forEach((item,index)=>{
        if(item.name.toLowerCase().includes((search.value).toLowerCase()) || item.phone.toLowerCase().includes((search.value).toLowerCase()) ){
             var li=document.createElement('li');
        li.innerHTML=`<p>${item.name}</p>
        <p>${item.phone}</p>`
        ul.appendChild(li);
        }
       
    })
}
searchBtn.addEventListener('click',addItem);
const delItem=()=>{
 data=data.reduce((total,number)=>{
  if(total.length==0){
    return [...total,number];
  }
  else if(total.filter((item)=> item.phone===number.phone).length>0){
    return total;
  }
  else{
    return [...total,number];
  }
  },[]);
  addItem();
}
delBtn.addEventListener('click',delItem)