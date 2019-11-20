import React from 'react'
import axios from 'axios'

class AddTag extends React.Component{
    render(){
        return(
            <div style={{ padding: '10px' }}>
                <input
                    type="text"
                    onChange={(e) => {
                        this.props.callback(e) 
                        this.setState({ message: e.target.value })
                    }}
                    placeholder="add something in the database"
                    style={{ width: '200px' }}
                />
                <button onClick={() => this.props.putDataToDB(this.state.message)}>
                    ADD
                </button>
            </div>
        )
    }
}

export default AddTag