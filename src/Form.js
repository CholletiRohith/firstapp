import React from 'react'
import './App.css';
import Boil from './BoilingPoint'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            name: '',
            val: ''
        }
    }

    changeHandler(event) {
      let  name = event.target.name;
       let val = event.target.value;
        this.setState(
            {
                [name]: val
            }
        )
    }

    render() {
        return (
            <div>
                <div className="App romantic">
                    <div>
                        <h1 className="App"> {this.state.Name}</h1>
                        <h2 className="App oo"> {this.state.Password}</h2>
                        <h1 className="App" id="root"> ❤️ </h1>
                    </div>
                    <div id="root">
                        <div>
                            <label>Name:</label>
                            <input type="text" name="Name" onChange={e => this.changeHandler(e)}></input>
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="text" name="Email" onChange={e => this.changeHandler(e)} value="hiii"></input>
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" name="Password" onChange={e => this.changeHandler(e)}></input>
                        </div>
                    </div>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>


                </div>
                <div  className="App">
                    <textarea cols="30" rows="2" onChange={e => this.changeHandler(e)}></textarea>
                    </div>

                    <Boil scale='c'/>
                    <Boil scale='f'/>
            </div>
        );
    }
}   
export default Form;
