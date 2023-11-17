const questions=[{ 
  'que':"In HTML5, which of the following tag is used to initialize the document type?",
   'a':"<Doctype HTML>",
   'b':"<\Doctype html>",
   'c':"<Doctype>",
   'd':"<!DOCTYPE html>",
   'ans':'d'
},
{
    'que':"The CSS property used to control the element's font-size is",
    'a': "text-style",
    'b': "text-size",
    'c': "font-size",
    'd': "None of the above",
    'ans':'c'
},
{
  'que' :" A program in HTML can be rendered and read by -",
    'a':"Web browser",
    'b':"Server",
    'c':"Interpreter",
    'd':"None of the above",
    'ans':'a'
},
{
   'que':" Which type of JavaScript language is ",
    'a':"Object-Oriented",
    'b':"Object-Based",
    'c':"Assembly-language",
    'd':"High-level",
    'ans':'b'
},
{
   'que':"Which of the following HTML attribute is used to define inline styles?",
    'a':"style",
    'b':"type",
    'c':"class",
    'd':"None of the above",
    'ans':'a'
},
{
    'que':"In a case, where the value of the operator is NULL , the typeof returned by the unary operator is",
    'a':"undefined",
    'b':"string",
    'c':"boolean",
    'd':"object",
    'ans':'d'
},
{
   'que':"What are the types of unordered or bulleted list in HTML?",
    'a':"disc, square, triangle",
    'b':"polygon, triangle, circle",
    'c':"disc, circle, square",
    'd':"All of the above",
    'ans':'c'
},
{
   'que':"How to insert an image in HTML?",
    'a':'<img href = "jtp.png" />',
    'b':'<img url = "jtp.png" />',
    'c':'<img link = "jtp.png" />',
    'd':'<img src = "jtp.png" />',
    'ans':'d'
}
]
let i=0;
let total=questions.length;
let right=0, wrong=0;
const queList=document.getElementById("queList");
const options=document.querySelectorAll('.options');//input select
const getQue=()=>{
    if(i==total){
        return lastQue()
    }
    reset()
    const data=questions[i];
    queList.innerText=`${i+1})${data.que}`;
    options[0].nextElementSibling.innerText=data.a;
    options[1].nextElementSibling.innerText=data.b;
    options[2].nextElementSibling.innerText=data.c;
    options[3].nextElementSibling.innerText=data.d;
}
const nextQue=()=>{
    const data=questions[i];
    const res=findAns()
        if(res===data.ans){
         right++;
        }else{
            wrong++;
        }
        i++;
        getQue();
        return;
}
const findAns=()=>{
    let answer;
    options.forEach(
        (input)=>{
            if(input.checked){
                answer=input.value;
            }
        }
    )
    return answer;
}
const reset=()=>{
    options.forEach(
     (input)=>{
        input.checked=false;
     }
    )
}
const lastQue=()=>{
  document.getElementById("box").innerHTML=`
   <div style="text-align:center;
    margin-top:120px">
<h1> your score is ${right}/${total}</h1></div>`;
}
getQue();
