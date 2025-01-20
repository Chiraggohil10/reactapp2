import React from 'react'
import { useEffect , useState} from "react";

function FetchDataFromuseEffect() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        async function getInfo() {
            let res = await fetch('http://localhost:100/users')
            let response = await res.json()
            setUsers(response);
        }
        getInfo();
    },[])

    console.log(users);
    
  return (
    <div className="Homepage">
        {
            users.map((x)=>{
                return(
                    <React.Fragment key={x.id}>
                        <div className="users">
                            <div className="logo">
                                <img src={x.image} alt="" />
                            </div>
                            <div className="desc">
                                <span><strong>Name :</strong> {x.firstName} {x.lastName}</span>
                                <div className='identity'><strong>Identity :</strong> {x.gender} {x.age}</div>
                                <div><strong>Email :</strong> {x.email}</div>
                                <div><strong>Phone : </strong> {x.phone}</div>
                                <div><strong>Address : </strong>{x.address.address} {x.address.city} {x.address.postalCode}</div>
                            </div>
                        </div>
                            <hr />
                    </React.Fragment>
                )
            })
        }
    </div>
  )
}

export default FetchDataFromuseEffect;
