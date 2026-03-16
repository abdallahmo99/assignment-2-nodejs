// modules
const path = require("path")
const fs = require("fs")
const os = require("os")
const EventEmitter = require("events")

// 1
function showPath(){

    let fileName = path.basename(filename)
    let dirName = path.dirname(filename)

    console.log({
        File: fileName,
        Dir: dirName
    })

}

showPath()


// 2
function getName(p){
    let name = path.basename(p)
    return name
}
console.log(getName("/user/files/report.pdf"))


// 3
function makePath(obj){
    let result = path.join(obj.dir , obj.name + obj.ext)
    return result
}
console.log(makePath({dir:"/folder", name:"app", ext:".js"}))

// 4
function getExt(p){
    let ext = path.extname(p)
    return ext
}
console.log(getExt("/docs/readme.md"))


// 5
function getNAmeExt(p){
    let data = path.parse(p)
    return {
        name: data.name,
        ext: data.ext
    }

}
console.log(getNameExt("/home/app/main.js"))


// 6
function checkPath(p){
    let result = path.isAbsolute(p)
    return result
}
console.log(checkPath("/home/user/file.txt"))


// 7
function joinParts(a,b,c){
    let result = path.join(a,b,c)
    return result
}
console.log(joinParts("src","components","App.js"))


// 8
function makebsolute(p){
    let result = path.resolve(p)
    return result
}
console.log(makeAbsolute("./index.js"))


// 9
function jointwo(a,b){
    let result = path.join(a,b)
    return result
}
console.log(joinTwo("/folder1","folder2/file.txt"))


// 10
function deleteMyFile(p){
    fs.unlink(p,function(err){
        if(err){
            console.log("error deleting file")
        }
        else{
            console.log("file deleted")
        }
    })

}


// 11
function makefolder(name){
    fs.mkdirSync(name)
    console.log("Success")

}


// 12
let myevent = new EventEmitter()
myEvent.on("start",function(){
    console.log("Welcome event triggered!")
})
myEvent.emit("start")

// 13
myEvent.on("login",function(user){
    console.log("User logged in:",user)
})
myEvent.emit("login","Ahmed")


// 14
function readFile(p){
    let data = fs.readFileSync(p,"utf8")
    console.log(data)
}


// 15
function writeFile(p,text){

    fs.writeFile(p,text,function(err){

        if(err){
            console.log("error writing file")
        }
        else{
            console.log("Async save")
        }
  })
}


// 16
function checkFile(p){

    let result = fs.existsSync(p)

    return result
}

console.log(checFile("./notes.txt"))


// 17
function systeInfo(){

    let plat = os.platform()
    let arch = os.arch()

    console.log({
        Platform: plat,
        Arch: arch
    })

}

systemInfo()
