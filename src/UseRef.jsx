import React,{ useRef }  from 'react'

function UseRef() {
    let data = useRef();
    let image = useRef();

    function Submit(e){
        e.preventDefault();
        console.log(data.current);
        console.log(data.current.value);
        console.log(image.current);
        image.current.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzIq4l1yMTP49R7vm8kWgY09FAhW9skpcFA&s"
    }
    
    

  return (
    <>
        <div>
            <form action="">
                <label htmlFor="">
                    Enter Your Name :
                    <input type="text" ref={data} />
                </label>
                <button className='btn' onClick={Submit}>Click</button>
                <img src="" ref={image} alt="donald" />
            </form>
        </div>
    </>
  )
}

export default UseRef