//menu 

const menuLi = document.querySelectorAll('#menu .menu-li')
const sections = document.querySelectorAll('section')

let actualLi = 0

menuLi.forEach((li, i)=>{
  
  li.addEventListener('click', ()=>{
    removeLi()
    li.classList.add('show')
    actualLi = i

        removeSection()
        sections[i].style.display ='flex'
       
  })

})

function removeSection() {
  
  sections.forEach(item=>{
    item.style.display = 'none'
  })
}

function removeLi() {
  menuLi.forEach(item =>{
    item.classList.remove('show')
  })

  
} 





//CONTAINER 1 

let text = 'Alberto Paim';

function typerText() {
  const elText = document.querySelector('.text');
  let index = 0;
  let textoAtual = '';

  function type() {
    textoAtual += text[index];
    elText.innerHTML = textoAtual;
    index++;

    if (index < text.length) {
      setTimeout(type, 100);
    }
  }

  type();
}

window.addEventListener('load', typerText);












//container 2 
const skillDesc = document.querySelector('.skill-desc')
let skillInfo = document.querySelector('.skill-result');
let skills = document.querySelectorAll('.skill');
const icons = document.querySelectorAll('.skill i');


function skillShow() {
  skillDesc.classList.add('show')
  document.querySelector('.fa-circle-left').style.display ='flex'
 skills.forEach(item =>{
  item.style.display ='none'
 })
}


function skillBack() {
  skillDesc.classList.remove('show')
  document.querySelector('.fa-circle-left').style.display ='none'
  skills.forEach(item =>{
    item.style.display ='flex'
   })
}


icons.forEach((skill, i) =>{
  skill.addEventListener('click', ()=>{
  skillDesc.innerHTML = innerSkill[i]
  skillShow() 
  })
})










// CONTAINER3 
actualProject = 0
const projectTitle = document.querySelectorAll(".project-title")

const project = document.querySelectorAll('.project')




projectTitle.forEach((title, i)=>{
  title.addEventListener('click', ()=>{
    removeTitle()
    removeProject()
    title.classList.add('show')
    project[i].classList.add('hidden')
    project[i].classList.remove('hidden')
    project[i].style.display ='block'
    document.querySelector('#btnproject').classList.add('show')
    
  })
})

function removeTitle() {
  projectTitle.forEach(title =>{
      title.classList.remove('show')
  })
}


function removeProject() {
  project.forEach(item=>{
    item.classList.add('hidden')
    item.style.display ='none'
  })
}

function projetBack() {
  project.forEach(item=>{
    item.style.display ='none'
    document.querySelector('#btnproject').classList.remove('show')
  })
}