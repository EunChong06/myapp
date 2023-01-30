import { useState } from "react";
import axios from "axios";

const Repead = () =>{

    const [list,setList] = useState(null);
const Search = async () =>{

    const data = await axios ({
        method:'get',
        url:'https://official-joke-api.appspot.com/random_joke',

    })
    console.log('data',data);
    if(data.status == 200){
        setList(data.data);
    }
}
 return(
    <div>
       
        <button onClick={Search}>Search</button>
        {list != null ?
            <>
            <p>{list.type}</p>
            <p>{list.punchline}</p>
            <p>{list.setup}</p>
            
            </>
            :
            <>
            
            
            </>
            }
    </div>
 )
}
export default Repead;