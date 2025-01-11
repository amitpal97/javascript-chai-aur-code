// console.log("hixxidddii");
//  console.table(["1","2",["2","3"]],)

// const id = Symbol("123")
// const Sid = Symbol("123")


// console.log(id);
// console.log(id === Sid);

//  const name = new String("hii")
// console.log(name);


// const num = new Number(190.909)
// console.log(num.toPrecision(3));

// let date = new Date(2023, 0, 23, 5, 3);
// console.log(date);

// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString("default",{
//     weekday:"long",
// }));
// console.log(date.toTimeString());


// console.log(Array.from({
//     name: "amit",
// }));

// console.log(Array.from("amit"));
//     let data =Symbol("123")
// const obj = { 
//     [data]:"key1",
//     name:"amit"

// }
// console.log(obj[data]);
// console.log(obj);



// class Amit {
//     constructor(name, add) {
//         this.name = name;
//         this.add = add
//     }
//     getData(){
// console.log(`hii ${this.name}`);
//     }
// }

// let ami = new Amit("am", "ddd")
// let am1 = new Amit("am1", "ddd")
// let am2 = new Amit("am2", "ddd")
// let am3 = new Amit("a3", "ddd")

// console.log("f");
// ami.getData()
// console.log(am1);
// console.log(am2);
// console.log(am3);



// function add(...num1) {
//     return num1
// }


// console.log(add(1, 2, 5, 4, 1));
// function chai() {
//     let username = {
//         name: "amit"
//     }
//     console.log(this.username);

// }
// chai()
// let r =add
// console.log("r:",r());


function cal() {
    console.log(this);

    username = "amit";
    let data = {
        username: "amit",
        gg: 9889,
        test: function () {
            console.log(this.username)
        },
        data1: {
            test: function () {
                console.log(this.username)
            }
        }
    }


    console.log("data:", data);


    console.log("ddd");
    return data.data1.test()
}

// cal()

// let cal2 = () => {
//     console.log(this);

//     let data = {
//         gg: 9889,
//         test: function () {
//             console.log(this)
//         }
//     }
//     // return data.test()
// }
// cal2()

// console.log(this)


// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2")


// let startInt = function (str) {
//     console.log(str + " hii start");

// }
// let startIntFunv = setInterval(startInt, 1000, "amit")


// btn1.addEventListener("click", (e) => {
//     e.preventDefault()
//     setInterval(startInt, 1000, "amit")
// })

// btn2.addEventListener("click", (e) => {

//     clearInterval(startIntFunv)
// })


const promiseOne = new Promise(function (resolved, reject) {
    setTimeout(() => {
        console.log("Async task is complete");
        resolved()
    }, 1000)
});

promiseOne.then(() => {
    console.log("promoise resolved");

})