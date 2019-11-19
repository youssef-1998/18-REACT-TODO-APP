import React, { Component } from 'react';
import logo from './logo.png';

class ToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            list: [],
            complete: false
        }
    }
    fnchangeinput = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    clikadd = () => {
        let arr = this.state.list;
        arr.push({
            text : this.state.text,
            complete : false
        })
        console.log(arr)
        this.setState({
            list: arr,
            text: ""
        })
    }
    fncomplete = (el) => {
        let x = this.state.list.map(element => el.text === element.text ? 
            {text : el.text,
            complete : !element.complete} 
            : element )
        console.log(x)
        this.setState({list : x})
        console.log(this.state.list)
    }
    fndelete = (item) => {
        this.setState({list: this.state.list.filter(el => el !== item)})
    }
    render() {
        return (
            <div>
                <div className="bleu">
                    <h1>To-Do App !</h1>
                    <h5>Add New To-Do</h5>
                    <input className="zone-text" type="text" placeholder="Enter new task" onChange={this.fnchangeinput} value={this.state.text} />
                    <div className="button-add">
                        <button className="add-btn" onClick={this.clikadd} >Add</button>
                    </div>
                </div>
                <h2 className="titre-h2">Let's get some work done !</h2>
                <hr />
                <main>
                    {this.state.list.map((el, i) => <div key={i} className="todo">
                        <button className="btn-delete" onClick={() => this.fncomplete(el)}>{el.complete ? 'Undo' : 'Complete'}</button>
                        <button className="btn-delete" onClick={() => this.fndelete(el)}>Delete</button>
                        <h1 className={el.complete === true ? "done" : ""}>{el.text}</h1>
                    </div>)}
                </main>
                <div>
                    <img src={logo} />
                </div>
            </div>
        )
    }
}

export default ToDo