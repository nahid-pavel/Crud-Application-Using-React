import React,{Component} from 'react';
import Book from '../Book/Book';

const   Books =(props)=> {
   
    
    const output = props.books.map((book,index) => {

        
    
        return (
            <Book book={book} bookIndex={index} changeEditHandler ={props.changeEditHandler}  changeHandler={props.changeHandler} deleteHandler={props.deleteHandler}/>

        );

    })


        return (

            <div>
               {output}
            </div>
    
         );

    
   
     

}

export default Books;