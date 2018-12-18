import React from 'react'
import {DetailWrapper,DetailTitle,DetailContent} from './style'
import store from "./store";
import {connect} from 'react-redux'
class Detail extends React.Component{
    componentDidMount() {
        this.props.getDetailData()
    }
    render(){
        return(
            <DetailWrapper >
                <DetailTitle>{this.props.detail.title}</DetailTitle>
                <DetailContent                 dangerouslySetInnerHTML={{ __html: this.props.detail.content }}
                ></DetailContent>
            </DetailWrapper>
        )
    }
}
const mapStateToProps = (state) => ({
    detail:state.get('detail').get('detail')
})
const mapDispatchToProps = (dispatch) => ({
    getDetailData () {
        dispatch(store.creators.getDetailData())
    },
})
export default connect(mapStateToProps,mapDispatchToProps)(Detail)