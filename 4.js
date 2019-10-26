var array1 = [
                {
                    name : 'Movies',
                    info : 'category_name',
                    data : [
                        { name :'interstellar', info : 'category_data' },
                        { name : 'Dark Knight', info : 'category_data' },
                    ]
                },
                {
                    name : 'Music',
                    info : 'category_name',
                    data : [
                        { name : 'Adams', info : 'category_data' },
                        { name : 'Nirvana', info : 'category_data' },
                    ]
                }
            ]

var temp=[]
var array2 = array1.forEach(function(item){
    
    //tampung object data
    var itemData = item.data
    
    //hapus object data sebelum dimasukkan ke variabel array baru
    delete item.data
    
    //masukkan item yang sudah tidak ada key data kedalam object baru
    temp.push(item)   
    
    // ambil item dalam key data yang sudah ditampung dan masukkan kedalanm arrayt baru
    itemData.forEach(function(data2){
        temp.push(data2)
    })
})

console.log(temp)
