import React from 'react'
export default class Loop extends React.Component{
    constructor(props){
        super(props)
    }
    // 负组件传参，记得map写法 map(item=())
    componentWillMount() {
        console.log(this.props.posts,'Component WILL MOUNT!')
    }
    render(){
        const sideBar = this.props.posts.map((post)=>(
                    <li key={post.id}>{post.title}</li>
        ))
        const content = this.props.posts.map(post=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        ))
        return(
            <div className='loop'>
                <div className='sideBar'><ul>{sideBar}</ul></div>
                <div className='content'>{content}</div>
            </div>
        )
    }
}