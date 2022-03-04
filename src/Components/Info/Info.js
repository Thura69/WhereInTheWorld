
import "./info.css"
import {FaRegEye,FaChevronDown} from'react-icons/fa'
import Body from '../Body/Body'
import Search from '../Usersearch/Search'

import React, { useEffect, useRef, useState } from 'react'

function Info() {
  const filterRef = useRef(null)
  const [fetchData,setFetchData] = useState([]);
  const [searchData,setSearchData] = useState([]);

  const [showData,setShowData] = useState([]);
  const [userValue,setUserValue] = useState('');
  const [keyValueS,setKeyValueS] = useState('');
  const [filterValue,SetFilterValue] = useState('');
  const [userShowData,setUserShowData] = useState([]);


  const handleClick = ()=>{
    filterRef.current.classList.toggle('active')
   const liTag = filterRef.current.getElementsByTagName('li');
   const liData = [...liTag];
   liData.map((e,index)=>{e.addEventListener('click',()=>{ filterRef.current.classList.remove('active') 
   SetFilterValue(e.id)
  })})
   }
   
  
  useEffect(()=>{

fetch('https://restcountries.com/v3.1/all')
.then((response)=>response.json())
.then((json)=>setFetchData(json))

  },[])

useEffect(()=>{
  setShowData(fetchData.splice(0,20))
  setUserShowData(fetchData.splice(0,20))
},[fetchData])


const searchHandelClick = ()=>{
 setKeyValueS(userValue)
 setUserValue('')
}

useEffect(()=>{
fetch(`https://restcountries.com/v3.1/name/${keyValueS}`)
.then((response)=>response.json())
.then((json)=>setSearchData(json))
.catch((err)=>console.log(err))
},[keyValueS])

useEffect(()=>{ setShowData(searchData)},[searchData])

useEffect(()=>{
 
 const realData = fetchData.filter((e)=>{return e.region === filterValue})
 setShowData(realData)
},[filterValue])






  return (
    <>
    <section className='info'>
    <div className='container info__container'>
    <div className='search__box'>
    <FaRegEye className='eye'/><input placeholder='Enter country...' value={userValue}  onChange={(e)=>{setUserValue(e.target.value)}}/> <button  className='search__button' onClick={searchHandelClick}>Search</button>
    </div>
    <div className='filter'>
    <div className='filter__container' onClick={handleClick}>
    <h1>Filter by Region</h1><FaChevronDown/>
    </div>
    <div className='filter__item' ref={filterRef} >
    <ul>
    <li id='Africa'>Africa</li>
    <li id='Americas'> America</li>
    <li id="Asia">Asia</li>
    <li id="Europe">Europe</li>
    <li id="Oceania">Oceania</li>
    </ul>
    </div>
    </div>
    </div>
    </section>
    { showData.length > 0?<Body search='Happy Hacking' data={showData}/>:<Body search='' data={userShowData}/>   }
    
    </>
    
  )
}

export default Info



 