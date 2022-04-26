 import "./App.css"
 import { useState, useEffect } from "react";
 const App =()=>{
   const [imgs , setImgs ] = useState([])
   const [data , setData] = useState([])
   var [start , setStart] = useState(1)
   var [end , setEnd] = useState(16)
   useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/photos")
     .then(resp=>resp.json())
     .then(data=>{
     setData(data)
     const updatedImgs = data.filter(img=> (img.id >=1 && img.id<=16));
     setImgs(updatedImgs)
    })

  },[])
 
  
  const nextPage =()=>{
    setStart(start+=16)
    setEnd(end+=16)
    const updatedImgs = data.filter(img=> (img.id >=start && img.id<=end));
    setImgs(updatedImgs)
    console.log(start,end)
  }

  const prevPage =()=>{
    setStart(start-=16)
    setEnd(end-=16)  
    const updatedImgs = data.filter(img=> (img.id >=start && img.id<=end));
    setImgs(updatedImgs)
    console.log(start,end)
     }
     const first=()=>{
      const updatedImgs = data.filter(img=> (img.id >=1 && img.id<=16));
      setImgs(updatedImgs)
     }
     const second=()=>{
      const updatedImgs = data.filter(img=> (img.id >=17 && img.id<=32));
      setImgs(updatedImgs)
     }
     const third=()=>{
      const updatedImgs = data.filter(img=> (img.id >=33 && img.id<=48));
      setImgs(updatedImgs)
     }
     const fourth=()=>{
      const updatedImgs = data.filter(img=> (img.id >=49 && img.id<=64));
      setImgs(updatedImgs)
     }
     const fifth=()=>{
      const updatedImgs = data.filter(img=> (img.id >=65 && img.id<=80));
      setImgs(updatedImgs)
     }
     const sixth=()=>{
      const updatedImgs = data.filter(img=> (img.id >=81 && img.id<=96));
      setImgs(updatedImgs)
     }
     const seven=()=>{
      const updatedImgs = data.filter(img=> (img.id >=97 && img.id<=112));
      setImgs(updatedImgs)
     }
     const eight=()=>{
      const updatedImgs = data.filter(img=> (img.id >=113 && img.id<=128));
      setImgs(updatedImgs)
     }
     const nine=()=>{
      const updatedImgs = data.filter(img=> (img.id >=129 && img.id<=144));
      setImgs(updatedImgs)
     }
     const ten=()=>{
      const updatedImgs = data.filter(img=> (img.id >=145 && img.id<=160));
      setImgs(updatedImgs)
     }
    

  return <div className="mainContainer">
     {imgs.map((ob)=>{
         return <img key={ob.id} className="col-md-3 img" src ={ob.url} />
       
     })}
  <div align="center">
     <button className="btn-lg btn-info" onClick={prevPage}>Prev</button> &nbsp;&nbsp;&nbsp;
     <button className="btn-lg btn-outline-info" onClick={first}>1</button>&nbsp;
     <button className="btn-lg btn-outline-info" onClick={second}>2</button>&nbsp;
     <button className="btn-lg btn-outline-info" onClick={third}>3</button>&nbsp;
     <button className="btn-lg btn-outline-info" onClick={fourth}>4</button>&nbsp;
     <button className="btn-lg btn-outline-info" onClick={fifth}>5</button>&nbsp;
     <button className="btn-lg btn-outline-info" onClick={sixth}>6</button>&nbsp;
     <button className="btn-lg btn-outline-info" onClick={seven}>7</button>&nbsp;
     <button className="btn-lg btn-outline-info" onClick={eight}>8</button>&nbsp;
     <button className="btn-lg btn-outline-info" onClick={nine}>9</button>&nbsp;
     <button className="btn-lg btn-outline-info" onClick={ten}>10</button>&nbsp;&nbsp;&nbsp;
     <button className="btn-lg btn-info" onClick={nextPage}>Next</button>
  </div>

   </div>
 }
 export default App;
