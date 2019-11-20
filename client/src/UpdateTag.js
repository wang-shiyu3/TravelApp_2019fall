import React from 'react'

class UpdateTag extends React.Component{
    render(){
        return (
            <div style={{ padding: '10px' }}>
                <input
                    type="text"
                    style={{ width: '200px' }}
                    onChange={(e) => {
                        this.props.idToUpdateCallback(e)
                        this.setState({ idToUpdate: e.target.value 
                    })}}
                    placeholder="id of item to update here"
                />
                <input
                    type="text"
                    style={{ width: '200px' }}
                    onChange={(e) => {
                        this.props.updateToApplyCallback(e)
                        this.setState({ updateToApply: e.target.value })
                    }}
                    placeholder="put new value of the item here"
                />
                <button
                    onClick={() =>
                    this.props.updateDB(this.state.idToUpdate, this.state.updateToApply)
                    }
                >
                    UPDATE
                </button>
            </div>
    )}
}
export default UpdateTag