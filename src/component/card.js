import { Component } from "react"

export default  class Card extends Component{
    state ={
        conteur  :0,
        interval :0

    }
    componentDidMount(){
        this.setState({interval: setInterval(()=>this.setState({conteur: this.state.conteur+1}),1000)
    })
    }
    componentDidUpdate(){
        console.log(this.state.conteur)
    }  
    componentWillUnmount(){
        clearInterval(this.state.interval)
    }

    render(){
        return (
            <div>
                <h2>Time :{this.state.conteur}</h2>


            </div>
        )
    }
}