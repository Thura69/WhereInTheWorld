import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Card from '../Card/Card'
export class Body extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       first:null
    }
  
  }

  







  render() {
 if(this.props.search.length >1){
 
 return  (
   <div className='container card__container'>{this.props.data.map((e,index)=>{ return <Card key={Math.floor(Math.random() * 1000000)}  flag={e.flags.svg} name={e.name.common} population={e.population} region={e.region} capital={e.capital}/>})}</div>
 )
  
 }else{
   return (
     <Card name="Enter Damn the name of the country!!"/>
   )
 }

   
  }
}

export default Body