const button=document.createElement("div")
const but=document.createElement("div")
but.id="but"
button.id="button"
button.setAttribute("onclick","block()")
const popup=document.createElement("div")
popup.id="popup"
popup.innerHTML=`<h4 id="h4">jhbbuu</h4><h3 id="h3">kjnbkn</h3><span id="span">&#128512</span>`
const cancel=document.createElement("button")
cancel.setAttribute("onclick","none()")
const box=document.createElement("div")
box.id="box"

const para=document.createElement("h1")
para.innerText="Click Me..."
const text=document.createElement("h3")
text.innerText="If You Bored"
const note=document.createElement("h4")
note.innerText="For Time Pass Idea"
cancel.id="cancel"
cancel.innerText="ok"
cancel.className="btn btn-success"
const root=document.getElementById("root")
root.appendChild(but)
but.appendChild(button)
box.appendChild(popup)
root.appendChild(box)
popup.appendChild(cancel)
button.appendChild(text)
button.appendChild(para)
button.appendChild(note)


function block(){
    console.log("hbjb")
    const url = 'https://www.boredapi.com/api/activity';
fetch(url)
.then(res=> res.json())
.then((data)=>{
   document.getElementById("box").style.display="block"
   document.getElementById("but").style.display="none"
   document.getElementById("h4").innerText=data.type
   document.getElementById("h3").innerText=data.activity
    
})
.catch(err=>console.log(err))
}
// &#128512

function none(){
    document.getElementById("box").style.display="none"
   document.getElementById("but").style.display="block"

}




// https://meowfacts.herokuapp.com/
// https://api.thecatapi.com/v1/images/search

// https://official-joke-api.appspot.com/random_joke

// https://www.boredapi.com/api/activity






// https://api.openaq.org/v2/locations?country=me
// https://randomfox.ca//images//1.jpg
// https://random.dog/85d57704-d565-41ff-a696-539d18b8b8d3.jpg