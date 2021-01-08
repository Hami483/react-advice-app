import React from 'react'

import './app.css'

const url=process.env.REACT_APP_URL;


class App extends React.Component{

    state={
        advice:''
    }

    componentDidMount(){
        this.fetchAdvice()
    }

    fetchAdvice = async () => {
     try {
        const response=await fetch(url)
       const data = await response.json()
       const {advice} = data.slip
    //    console.log(advice)
        this.setState({advice:advice})
     } catch (error) {
         console.log(error)
     }
    }

    render(){
        const {advice} = this.state;
        return(
        <div className="app">
            <div className="card">
            <h1 className="heading">{advice}</h1>
            <button className="button" onClick={this.fetchAdvice}>
                <span>GIVE ME ADVICE!</span>
            </button>
            </div>
      </div>
        )
    }
}

export default App;