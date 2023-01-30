import { useState } from "react";
import axios from 'axios';
const Api = () =>{
    const [serach,setSearch] = useState();
    const [list,setList] = useState([]);
    const Search = async () =>{
        const param = {
            country:serach
        }
        const data = await axios({
            method:'get',
            url:'http://universities.hipolabs.com/search',
            params:param
        })
        console.log('data',data);
        if(data.status == 200){
            setList(data.data);
        }
    }
    return(
        <div className="container-fliud" style={{backgroundImage:"url(https://avatars.mds.yandex.net/i?id=0ae4b0afe5458eba811f42a9b26aa743c586b513-5449727-images-thumbs&n=13)",height:"600px"}}>
            <div className="row">
                <input type={'text'} onChange={(e)=>setSearch(e.target.value)} />
                <button onClick={Search}>Search</button>
                {list.length > 0 ?
                <>
                {list.map((item)=>
                    <>
                        <p>{item.country}</p>
                        <p>{item.name}</p>
                        <a href={item.web_pages}>{item.web_pages}</a>
                    
                    
                    </>
                    
                )
                }
                
                
                </>
                :
                <>
                
                
                </>
                }
            </div>
        </div>
    )
}
export default Api;