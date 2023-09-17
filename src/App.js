import './component/style.css'

import { Component } from 'react';
import Card from './component/card';

export default class Affiche extends Component{
  state ={ 
    person :{
      FullName:" saidani samar ",
      bio:"*******",
      urlImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd018q9QtAl8nYLQ0WJ1Ni3D5aNBk5BAAh7A&usqp=CAU",
      Profession:" It managment ",
    } , 
    shows : true
  }
  
 changeShows =()=>{
  this.setState({shows: (this.state.shows) ? !(this.state.shows): !(this.state.shows)

  } )
  
    
  }
 


  render(){
    return(
      <div>
       {(this.state.shows) === true ?  <div className='card'>
          <img src={this.state.person.urlImage}/>
        
          <h1>{this.state.person.FullName}</h1>
          <h1>{this.state.person.bio}</h1>
          <h1>{this.state.person.Profession}</h1>
        </div> : null } 
        <p className='par'>{this.state.shows && <Card/>}
        <button onClick={()=>this.changeShows()}>afficher</button></p>
     
       
       


      </div>
    )
  }
}
