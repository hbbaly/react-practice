import React from 'react'
export default class UploadFile extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        console.log(this.fileInput.files)
        alert(this.fileInput.files[0].name)
        e.preventDefault();
        
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    upload file
                    <input type='file' ref={input=>{this.fileInput=input}} />>
                </label>
                <button>onSubmit</button>
            </form>
        )
    }
}