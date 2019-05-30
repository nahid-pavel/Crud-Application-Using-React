import React, { Component } from 'react';

class Book extends Component {

    state = {

        isEditable: false
    }

    changeKeyHandler= (event)=>{

        console.log(event.target.value);
       
        if(event.key === 'Enter'){

           this.setState({
            isEditable: false
           })
        }

    }



    render() {

        let output = this.state.isEditable ?
            <input
                onChange={(event)=>this.props.changeEditHandler(event.target.value,this.props.book.id)}
                onKeyPress={this.changeKeyHandler}
                type="text"
                value={this.props.book.name} /> :
            <p>{this.props.book.name}</p>
        return (


            <li className="list-group-item d-flex">
                {output}
                <span className="ml-auto mx-2">{this.props.book.price}</span>
                <span onClick={(event) => this.setState({ isEditable: true })} >
                    <i class="far fa-edit mx-2"></i>
                </span>
                <span onClick={() => this.props.deleteHandler(this.props.book.id)}>
                    <i class="fas fa-trash mx-2"></i>
                </span>
            </li>


        );


    }



}


export default Book;