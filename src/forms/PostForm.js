import React, { Component } from 'react';

class PostForm extends Component {

    

    
    render() {

        return (


            <div className="container my-5" >
                <form onSubmit={(event)=>this.props.submitHandler(event)}>

                    <div className="form-row">

                        <div className="col">

                            <input onChange={(event)=>this.props.changeHandler(event)} type="text" className="form-control" placeholder="Enter book's name" name="name" id="name" />
                        </div>
                        <div className="col">

                            <input onChange={(event)=>this.props.changeHandler(event)} type="text" className="form-control" placeholder="Enter book's price" name="price" id="name" />
                        </div>

                        <button className="btn btn-primary" type="submit">Enter Information</button>
                    </div>
                    
        

        </form>
        </div>





                );
            
                }
            
            
            
            }
            
            
export default PostForm;