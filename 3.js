function pisahAngka (nilai){
    var spl = nilai.split ('0');

    var tmpres=[];
    spl.forEach(function(item,data){
        var tmp = item.split('');
        var res = tmp.sort()
        tmpres.push(res.join(''))
    });
    
    return tmpres.join();
    // console.log(spl);
}

pisahAngka('43737803437370338');