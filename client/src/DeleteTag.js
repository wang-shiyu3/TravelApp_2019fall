import React from 'react'

class DeleteTag extends React.Component{
    render(){
        return (
            <div style={{ padding: '10px' }}>
                <input
                    type="text"
                    style={{ width: '200px' }}
                    onChange={(e) => {
                        this.props.callback(e)
                        this.setState({ idToDelete: e.target.value })
                    }}
                    placeholder="put id of item to delete here"
                />
                <button onClick={() => this.props.deleteFromDB(this.state.idToDelete)}>
                DELETE
                </button>
            </div>
    )}
}
export default DeleteTag