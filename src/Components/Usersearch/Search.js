import Card from "../Card/Card";

import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Search extends Component {
  constructor(props) {
    super(props)
   
    
  }

  render() {
    console.log(this.props)
   
        const searchData = [...this.props.value];
       
      if(searchData.length > 0){
        return(
            <div>
              {searchData.map((e,index)=>{return <Card key={index}  flag={e.flags.svg} population={e.population} region={e.region} capital={e.capital} name={e.name.common}/>})}
            </div>
           
        )
      }else if(searchData.length === 0 ){
          return(
              <Card name="Enter only Country name"/>
          )
      }
       
   
   
   
    
  
  }
}

export default Search