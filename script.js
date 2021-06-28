
// For start button

let startbtn=document.getElementsByClassName("windows")[0]
let startmenu=document.getElementsByClassName("startmenu")[0]

let msedge=document.getElementsByClassName("msedge")[0]
let msedgestart=document.getElementsByClassName("msedgestart")[0]
let msedgebox=document.getElementsByClassName("msedgebox")[0]

let vscode=document.getElementsByClassName("vscode")[0]
let vscodebox=document.getElementsByClassName("vscodebox")[0]

let msstore=document.getElementsByClassName("msstore")[0]
let msstorestart=document.getElementsByClassName("msstorestart")[0]
let msstorebox=document.getElementsByClassName("msstorebox")[0]

let mailstart=document.getElementsByClassName("mailstart")[0]
let mailbox=document.getElementsByClassName("mailbox")[0]

let calc=document.getElementsByClassName("calculator")[0]
let calcbox=document.getElementsByClassName("calcbox")[0]

let cal=document.getElementsByClassName("calendar")[0]
let calbox=document.getElementsByClassName("calbox")[0]

let photos=document.getElementsByClassName("photos")[0]
let pbox=document.getElementsByClassName("pbox")[0]

let set=document.getElementsByClassName("settings")[0]
let setbox=document.getElementsByClassName("setbox")[0]

let alarm=document.getElementsByClassName("alarm")[0]
let alarmbox=document.getElementsByClassName("alarmbox")[0]

let notepad=document.getElementsByClassName("notepad")[0]
let notepadbox=document.getElementsByClassName("notepadbox")[0]

let paint=document.getElementsByClassName("paint")[0]
let paintbox=document.getElementsByClassName("paintbox")[0]

let fexp=document.getElementsByClassName("fexp")[0]
let fexpbox=document.getElementsByClassName("fexpbox")[0]

let film=document.getElementsByClassName("films")[0]
let filmbox=document.getElementsByClassName("filmbox")[0]

let tip=document.getElementsByClassName("tips")[0]
let tipbox=document.getElementsByClassName("tipbox")[0]


// For start button
startbtn.addEventListener("click",()=>{
    if(startmenu.style.top=="120vh"){
        startmenu.style.top="10vh"
    }
    else{
        startmenu.style.top="120vh"
    }
})



// For MS Edge
msedge.addEventListener("click",()=>{
    if(msedgebox.style.top=="120vh"){
        msedgebox.style.top="10vh"
        startmenu.style.top="120vh"
        vscodebox.style.top="120vh"
        msstorebox.style.top="120vh"
        mailbox.style.top="120vh"
        calcbox.style.top="120vh"
        calbox.style.top="120vh"
        pbox.style.top="120vh"
        setbox.style.top="120vh"
        alarmbox.style.top="120vh"
        notepadbox.style.top="120vh"
        paintbox.style.top="120vh"
        fexpbox.style.top="120vh"
        filmbox.style.top="120vh"
        tipbox.style.top="120vh"
    }
    else{
        msedgebox.style.top="120vh"
    }
})

msedgestart.addEventListener("click",()=>{
    if(msedgebox.style.top=="120vh"){
        msedgebox.style.top="10vh"
        startmenu.style.top="120vh"
        vscodebox.style.top="120vh"
        msstorebox.style.top="120vh"
        mailbox.style.top="120vh"
        calcbox.style.top="120vh"
        calbox.style.top="120vh"
        pbox.style.top="120vh"
        setbox.style.top="120vh"
        alarmbox.style.top="120vh"
        notepadbox.style.top="120vh"
        paintbox.style.top="120vh"
        fexpbox.style.top="120vh"
        filmbox.style.top="120vh"
        tipbox.style.top="120vh"
    }
    else{
        msedgebox.style.top="120vh"
    }
})




// For VS Code
vscode.addEventListener("click",()=>{
    if(vscodebox.style.top=="120vh"){
        vscodebox.style.top="10vh"
        startmenu.style.top="120vh"
        msedgebox.style.top="120vh"
        msstorebox.style.top="120vh"
        mailbox.style.top="120vh"
        calcbox.style.top="120vh"
        calbox.style.top="120vh"
        pbox.style.top="120vh"
        setbox.style.top="120vh"
        alarmbox.style.top="120vh"
        notepadbox.style.top="120vh"
        paintbox.style.top="120vh"
        fexpbox.style.top="120vh"
        filmbox.style.top="120vh"
        tipbox.style.top="120vh"
    }
    else{
        vscodebox.style.top="120vh"
    }
})



// For MS Store
msstore.addEventListener("click",()=>{
    if(msstorebox.style.top=="120vh"){
        msstorebox.style.top="10vh"
        startmenu.style.top="120vh"
        msedgebox.style.top="120vh"
        vscodebox.style.top="120vh"
        mailbox.style.top="120vh"
        calcbox.style.top="120vh"
        calbox.style.top="120vh"
        pbox.style.top="120vh"
        setbox.style.top="120vh"
        alarmbox.style.top="120vh"
        notepadbox.style.top="120vh"
        paintbox.style.top="120vh"
        fexpbox.style.top="120vh"
        filmbox.style.top="120vh"
        tipbox.style.top="120vh"
    }
    else{
        msstorebox.style.top="120vh"
    }
})

msstorestart.addEventListener("click",()=>{
    if(msstorebox.style.top=="120vh"){
        msstorebox.style.top="10vh"
        startmenu.style.top="120vh"
        msedgebox.style.top="120vh"
        vscodebox.style.top="120vh"
        mailbox.style.top="120vh"
        calcbox.style.top="120vh"
        calbox.style.top="120vh"
        pbox.style.top="120vh"
        setbox.style.top="120vh"
        alarmbox.style.top="120vh"
        notepadbox.style.top="120vh"
        paintbox.style.top="120vh"
        fexpbox.style.top="120vh"
        filmbox.style.top="120vh"
        tipbox.style.top="120vh"
    }
    else{
        msstorebox.style.top="120vh"
    }
})


// For Mail
mailstart.addEventListener("click",()=>{
    if(mailbox.style.top=="120vh"){
        mailbox.style.top="10vh"
        msedgebox.style.top="120vh"
        vscodebox.style.top="120vh"
        msstorebox.style.top="120vh"
        startmenu.style.top="120vh"
        calcbox.style.top="120vh"
        calbox.style.top="120vh"
        pbox.style.top="120vh"
        setbox.style.top="120vh"
        alarmbox.style.top="120vh"
        notepadbox.style.top="120vh"
        paintbox.style.top="120vh"
        fexpbox.style.top="120vh"
        filmbox.style.top="120vh"
        tipbox.style.top="120vh"
    }
    else{
        mailbox.style.top="120vh"
    }
})



// For Calculator
calc.addEventListener("click",()=>{
    if(calcbox.style.top=="120vh"){
        calcbox.style.top="10vh"
        msedgebox.style.top="120vh"
        vscodebox.style.top="120vh"
        msstorebox.style.top="120vh"
        startmenu.style.top="120vh"
        mailbox.style.top="120vh"
        calbox.style.top="120vh"
        pbox.style.top="120vh"
        setbox.style.top="120vh"
        alarmbox.style.top="120vh"
        notepadbox.style.top="120vh"
        paintbox.style.top="120vh"
        fexpbox.style.top="120vh"
        filmbox.style.top="120vh"
        tipbox.style.top="120vh"
    }
    else{
        calcbox.style.top="120vh"
    }
})



// For Calendar
cal.addEventListener("click",()=>{
    if(calbox.style.top=="120vh"){
        calbox.style.top="10vh"
        msedgebox.style.top="120vh"
        vscodebox.style.top="120vh"
        msstorebox.style.top="120vh"
        startmenu.style.top="120vh"
        mailbox.style.top="120vh"
        calcbox.style.top="120vh"
        pbox.style.top="120vh"
        setbox.style.top="120vh"
        alarmbox.style.top="120vh"
        notepadbox.style.top="120vh"
        paintbox.style.top="120vh"
        fexpbox.style.top="120vh"
        filmbox.style.top="120vh"
        tipbox.style.top="120vh"
    }
    else{
        calbox.style.top="120vh"
    }
})




// For Photos
photos.addEventListener("click",()=>{
    if(pbox.style.top=="120vh"){
        pbox.style.top="10vh"
        msedgebox.style.top="120vh"
        vscodebox.style.top="120vh"
        msstorebox.style.top="120vh"
        startmenu.style.top="120vh"
        mailbox.style.top="120vh"
        calcbox.style.top="120vh"
        calbox.style.top="120vh"
        setbox.style.top="120vh"
        alarmbox.style.top="120vh"
        notepadbox.style.top="120vh"
        paintbox.style.top="120vh"
        fexpbox.style.top="120vh"
        filmbox.style.top="120vh"
        tipbox.style.top="120vh"
    }
    else{
        pbox.style.top="120vh"
    }
})



// For Settings
set.addEventListener("click",()=>{
    if(setbox.style.top=="120vh"){
        setbox.style.top="10vh"
        msedgebox.style.top="120vh"
        vscodebox.style.top="120vh"
        msstorebox.style.top="120vh"
        startmenu.style.top="120vh"
        mailbox.style.top="120vh"
        calcbox.style.top="120vh"
        calbox.style.top="120vh"
        pbox.style.top="120vh"
        alarmbox.style.top="120vh"
        notepadbox.style.top="120vh"
        paintbox.style.top="120vh"
        fexpbox.style.top="120vh"
        filmbox.style.top="120vh"
        tipbox.style.top="120vh"
    }
    else{
        setbox.style.top="120vh"
    }
})


// For Alarm
alarm.addEventListener("click",()=>{
    if(alarmbox.style.top=="120vh"){
        alarmbox.style.top="10vh"
        msedgebox.style.top="120vh"
        vscodebox.style.top="120vh"
        msstorebox.style.top="120vh"
        startmenu.style.top="120vh"
        mailbox.style.top="120vh"
        calcbox.style.top="120vh"
        calbox.style.top="120vh"
        pbox.style.top="120vh"
        setbox.style.top="120vh"
        notepadbox.style.top="120vh"
        paintbox.style.top="120vh"
        fexpbox.style.top="120vh"
        filmbox.style.top="120vh"
        tipbox.style.top="120vh"
    }
    else{
        alarmbox.style.top="120vh"
    }
})


// For Notepad
notepad.addEventListener("click",()=>{
    if(notepadbox.style.top=="120vh"){
        notepadbox.style.top="10vh"
        msedgebox.style.top="120vh"
        vscodebox.style.top="120vh"
        msstorebox.style.top="120vh"
        startmenu.style.top="120vh"
        mailbox.style.top="120vh"
        calcbox.style.top="120vh"
        calbox.style.top="120vh"
        pbox.style.top="120vh"
        setbox.style.top="120vh"
        alarmbox.style.top="120vh"
        paintbox.style.top="120vh"
        fexpbox.style.top="120vh"
        filmbox.style.top="120vh"
        tipbox.style.top="120vh"
    }
    else{
        notepadbox.style.top="120vh"
    }
})


// For Paint
paint.addEventListener("click",()=>{
    if(paintbox.style.top=="120vh"){
        paintbox.style.top="10vh"
        msedgebox.style.top="120vh"
        vscodebox.style.top="120vh"
        msstorebox.style.top="120vh"
        startmenu.style.top="120vh"
        mailbox.style.top="120vh"
        calcbox.style.top="120vh"
        calbox.style.top="120vh"
        pbox.style.top="120vh"
        setbox.style.top="120vh"
        alarmbox.style.top="120vh"
        notepadbox.style.top="120vh"
        fexpbox.style.top="120vh"
        filmbox.style.top="120vh"
        tipbox.style.top="120vh"
    }
    else{
        paintbox.style.top="120vh"
    }
})


// For File Explorer
fexp.addEventListener("click",()=>{
    if(fexpbox.style.top=="120vh"){
        fexpbox.style.top="10vh"
        msedgebox.style.top="120vh"
        vscodebox.style.top="120vh"
        msstorebox.style.top="120vh"
        startmenu.style.top="120vh"
        mailbox.style.top="120vh"
        calcbox.style.top="120vh"
        calbox.style.top="120vh"
        pbox.style.top="120vh"
        setbox.style.top="120vh"
        alarmbox.style.top="120vh"
        notepadbox.style.top="120vh"
        paintbox.style.top="120vh"
        filmbox.style.top="120vh"
        tipbox.style.top="120vh"
    }
    else{
        fexpbox.style.top="120vh"
    }
})


// For Films & TV
film.addEventListener("click",()=>{
    if(filmbox.style.top=="120vh"){
        filmbox.style.top="10vh"
        msedgebox.style.top="120vh"
        vscodebox.style.top="120vh"
        msstorebox.style.top="120vh"
        startmenu.style.top="120vh"
        mailbox.style.top="120vh"
        calcbox.style.top="120vh"
        calbox.style.top="120vh"
        pbox.style.top="120vh"
        setbox.style.top="120vh"
        alarmbox.style.top="120vh"
        notepadbox.style.top="120vh"
        paintbox.style.top="120vh"
        fexpbox.style.top="120vh"
        tipbox.style.top="120vh"
    }
    else{
        filmbox.style.top="120vh"
    }
})


// For Tips
tip.addEventListener("click",()=>{
    if(tipbox.style.top=="120vh"){
        tipbox.style.top="10vh"
        msedgebox.style.top="120vh"
        vscodebox.style.top="120vh"
        msstorebox.style.top="120vh"
        startmenu.style.top="120vh"
        mailbox.style.top="120vh"
        calcbox.style.top="120vh"
        calbox.style.top="120vh"
        pbox.style.top="120vh"
        setbox.style.top="120vh"
        alarmbox.style.top="120vh"
        notepadbox.style.top="120vh"
        paintbox.style.top="120vh"
        fexpbox.style.top="120vh"
        filmbox.style.top="120vh"
    }
    else{
        tipbox.style.top="120vh"
    }
})