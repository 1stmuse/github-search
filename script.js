const content = document.querySelector('.content')
let load = document.getElementById('load')
const getUsers = async(value)=>{
    load.style.display= 'block'
   const userData = await fetch(`https://api.github.com/search/users?q=${value}`)
    data = await userData.json()
    console.log(data.items)
    renderUsers(data.items)
    load.style.display='none'
}

const renderUsers =(users)=>{
    const view= users.map(user=>{
        const div = document.createElement('div')
        div.className = 'user'
        const headName = document.createElement('h3')
        const img = document.createElement('img')
        const nameLink =document.createElement('a')
        nameLink.href= user.html_url
        nameLink.textContent= 'view profile'
        img.src=user.avatar_url
        headName.textContent= user.login
        div.appendChild(img)
        div.appendChild(headName)
        div.append(nameLink)
        content.appendChild(div)
    })
    return view
}
const show= async(event)=>{
    const val =event.target.value
    let use =await getUsers(val)
    // const render =await renderUsers(use)
    return use
}

const but = document.querySelector('.search')
but.addEventListener('input', show)
but.addEventListener('change', show)
