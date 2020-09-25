import React, {Component} from 'react'

class SignUp extends Component {
    state= {
        fname: '',
        Lname: '',
        email: '',
        password: ''
    }

     handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render(){
        return(
            <div className='container'>
                <form className='col s12 white ' onSubmit={this.handleSubmit}>
                <h5 className='center grey-text text-darken-3'>Sign Up</h5>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <label htmlFor='fname'>First Name</label>
                            <input type='text' id='fname' onChange={this.handleChange}></input>
                        </div>
                        <div className='input-field col s6'>
                            <label htmlFor='Lname'>Last Name</label>
                            <input type='text' id='Lname' onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <label htmlFor='email'>E-mail</label>
                            <input type='email' id='email' onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className='input-field center'>
                        <button className='btn pink lighten-1 z-depth-0'>SIGN UP</button>
                    </div>
                </form>
            </div>    
        )
    }
}

export default SignUp 