import React, {Component } from 'react';
import Books from './Books/Books';
import axios from 'axios';
import PostForm from './forms/PostForm';

class App extends Component {

  state = {

    books: [],
    name: '',
    price: ''

  }

  
    componentDidMount(){
      axios.get("https://react-list-9ca01.firebaseio.com/books.json")
      .then(res => {
  
        let books = []
  
        let item = null;
  
  
  
        const data = res.data;
        console.log('Keys:' + Object.keys(data));
        for (let key in data) {
  
          item = data[key];
          item["id"] = key
          books.push(item);
        }
  
        this.setState({
          books: books
        })
  
      })
  
      .catch(err => console.log(err));
  

    }
  

  

  changeHandler = (event) => {

    this.setState({
      ...this.state,
      [event.target.name]: event.target.value

    })
  }

  changeEditHandler = async (name,id)=>{

    let newBooks = this.state.books.map(book=>{
            
      if(book.id == id){

        return{
          ...book,
          name
          

        }
      }

      return book;

    })

    await this.setState({

      

      books: newBooks

    })

   this.state.books.map(book=>{
     let name =null;
     let price= null;
     console.log(`From loop: ${book.name}`);
      if(book.id == id){
         let data={
            name: book.name,
            price: book.price
         }

        axios.put(`https://react-list-9ca01.firebaseio.com/books/${id}.json`, data)
             .then((res)=>{
               console.log(res);
             })
             .catch((err)=> console.log(err));
      }

   })

    

  }

  submitHandler = (event) => {
    event.preventDefault();

    let data = {
      name: this.state.name,
      price: this.state.price

    }

    console.log(`From submit handler: ${data}`);

    axios.post(`https://react-list-9ca01.firebaseio.com/books.json`, data)
      .then(res => {

        this.setState({
          ...this.state
        })

      })
      .catch(err => console.log(err))

  }


  deleteHandler = (id) => {



      axios.delete(`https://react-list-9ca01.firebaseio.com/books/${id}.json`)
        .then(res => {

            this.setState({

                ...this.state.books


            }) })
              .catch(err => {

                console.log(err);
              })


  }

  render(){

    
     
    let output = (<PostForm  changeHandler={this.changeHandler.bind(this)}
    submitHandler={this.submitHandler.bind(this)} />);
    if(this.state.books.length > 0 ){
      output =(
        <div>
          <PostForm  changeHandler={this.changeHandler.bind(this)}
                     submitHandler={this.submitHandler.bind(this)} 
                     />
          <Books books={this.state.books} deleteHandler={this.deleteHandler.bind(this)} changeEditHandler={this.changeEditHandler.bind(this)} />
        </div>


      )

    }

    return(

       <div>

         {output}
       </div>
    );

    
  }

}

export default App;



