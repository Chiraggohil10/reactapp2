import React from "react";
import data from './data/info.json'

const FormatingUsingJson = () => {
    let Info = data.Users
    return(
        <div className="json">
            {Info.map((x)=>{
                return(
                    <React.Fragment key={x.id}>
                    <h1>User : {x.name}</h1>
                    <p>Email : <b>{x.email}</b></p>
                    <p>Mobile : <b>{x.mobile}</b></p>
                    <button>Delete</button>
                    </React.Fragment>                    
                )
            })}
        </div>
    )
}

export default FormatingUsingJson;