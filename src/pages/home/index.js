import React,{ useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Layout,Pagination } from 'antd';
import HeaderCustom from '@/component/Header';
const { Content } = Layout;

function HomeIndex(props){
    const [domain] = useState('https://github.com')
    const [list,setList] = useState([])
    const [repositoryCount,setRepositoryCount] = useState(0)
    console.log(list)
    useEffect(() => {
        if(props.searchResults){
            const { nodes, repositoryCount } = props.searchResults
            setList(nodes)
            setRepositoryCount(repositoryCount)
        }
        
    },[props.searchResults])
    return (
        <Layout>
            <HeaderCustom />
            <Content>
                <div className="results-box">
                    {
                        list && list.length > 0 ?  (
                            <div>
                                <h3 className="results-heading">{repositoryCount} repository results</h3>
                                <ul className="results-list">
                                    {
                                        list && list.map((item,index) => {
                                            return(
                                                <li className="results-item" key={index}>
                                                    <div className="title">
                                                        <a href={domain+item.resourcePath} target="_blank">{item.resourcePath.slice(1)}</a>
                                                    </div>
                                                    <p className="desc">{item.description}</p>
                                                    <div className="topics">
                                                        {
                                                            item.repositoryTopics.nodes.map(topicItem => {
                                                                return(
                                                                    <a href={topicItem.url} target="_blank" key={topicItem.url} className="topic-item">{topicItem.topic.name}</a>
                                                                )
                                                            })
                                                        }
                                                        <span></span>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        ) : <div className="no-data">没有符合条件的数据</div>
                    }
                    
                </div>                
                {/* <div className="pagination-box">
                    <Pagination defaultCurrent={1} total={repositoryCount} />
                </div> */}
            </Content>
        </Layout>        
    );
}
const mapStateToProps = (state) => {
    return {
        searchResults: state.GlobalReducer.searchResults
    }
}
export default connect(mapStateToProps)(HomeIndex)