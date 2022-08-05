import axios from 'axios'




const instance=axios.create({
    baseURL:'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout: 3000,
    headers:{'X-RapidAPI-Key': 'd6bc9d4f6amshbe48caeeb2b964ep15cd34jsn72bd50f82654'}
});

const getSearch= async (search,state)=>{
    const search=await instance.get(`search?q=${search}&limit=20`)
    state(search.data.data)
    
}

const getAlbum= async (search,state)=>{
    const album=await instance.get(`album/?q=${search}&limit=20`)
    state(album.data.data)
    
}

//url: 'https://deezerdevs-deezer.p.rapidapi.com/album/eminem',

export {getSearch}