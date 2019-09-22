let obj = {
    times:null
}

// 函数节流
function throttle (fn,data){
    clearTimeout(obj.times)
    obj.times = setTimeout(()=>{
        fn(data)
    },500)
}


export default throttle