let obj = {
    times:null
}

// 函数节流
function throttle (fn,data){
    console.log(fn)
    clearTimeout(obj.times)
    obj.times = setTimeout(()=>{
        fn(data)
    },500)
}


export default throttle