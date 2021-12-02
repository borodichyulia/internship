import React from 'react';
import Counter from "./Counters/counter";
import {v4 as uuidv4} from 'uuid';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: [],
            countMain: 0
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handleDeleteOne=this.handleDeleteOne.bind(this);
    }

    render() {

        return (
            <div className={"container"}>
                <div className={"groupButtonMain"}>
                    <button className={"counterButtonMain"} onClick={this.handleAdd}>+</button>
                    <div className={"counterButtonMain"} style={{height: "2.5em", textAlign: "center"}}>
                        <h2 style={{margin: "0px"}}>{this.state.countMain}</h2>
                    </div>
                    <button className={"counterButtonMain"} onClick={this.handleDeleteAll}>reset</button>
                </div>
                <div className={"mainContainerCounter"}>
                    {this.state.counters.map((counter) => (
                        <Counter
                            key={counter.id}
                            data={counter}
                            del={this.handleDeleteOne}
                        />
                    ))}
                </div>
            </div>
        )
    }

    handleAdd() {
        const newItem = {
            id: uuidv4()
        };
        this.setState({
            counters: this.state.counters.concat(newItem),
            countMain: this.state.countMain + 1
        });
    }

    handleDeleteAll() {
        this.setState({
            counters: [],
            countMain: 0
        })
    }

    handleDeleteOne(id){
        this.setState({
            counters: this.state.counters.filter((counter) => {
                return counter.id !== id;
            }),
            countMain: this.state.countMain-1

        });
    }
}