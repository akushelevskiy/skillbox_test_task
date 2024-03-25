import data from '../../../../public/projects.json'
export const initData = ()=>{
    console.log(data)
    const template = document.querySelector('.template-project-card')
    const ul = document.querySelector('.courses__list')
    data.forEach((item)=>{
        const projectCard = template.content.cloneNode(true)
        item.classes.forEach((classItem)=>{
            projectCard.querySelector('.product-card').classList.add(classItem)
        })
        projectCard.querySelector('.product-card__title').innerText = item.title
        projectCard.querySelector('.product-card__date').innerText = item.date
        projectCard.querySelector('.product-card__label').innerText = item.label
        const img = projectCard.querySelector('.product-card__img')
        img.src = item.src
        img.width = item.width
        img.height = item.height
        img.alt = item.alt
        projectCard.querySelector('.product-card__shadow-link').href = item.href
        if(!item.hit) projectCard.querySelector('.product-card__hit').style.display = 'none'

        ul.append(projectCard)
    })
    ul.classList.add('is-active')
}
