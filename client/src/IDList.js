import React from 'react'

class IDList extends React.Component{
    render(){
        return (
        <div>
            <ul>
            {this.props.data.length <= 0
            ? 'NO DB ENTRIES YET'
            : this.props.data.map((dat) => (
                <li style={{ padding: '10px' }} key={dat.id}>
                    <span style={{ color: 'gray' }}> id: </span> {dat.id} <br />
                    <span style={{ color: 'gray' }}> data: </span>
                    {dat.message}
                </li>
                ))}
            </ul>
        </div>
    )}
}
export default IDList