import React,{ useEffect } from 'react'
import { Layout, Input } from 'antd'
import { connect } from 'react-redux'
import { GET_SEARCH_RESULTS } from '@/store/actionTypes'
import { axiosPost} from '@/extend/axios/index.js'
import './css/style.scss'
const { Header } = Layout
const { Search } = Input;

function HeaderCustom(props){
    const searchData = (value) => {
        let data = {
            query: `query {
                search(query:"${value}", type: REPOSITORY, first: 10) {
                    repositoryCount
                    nodes{
                      ... on Repository{
                        name
                        description
                        forkCount
                        resourcePath
                        homepageUrl
                        repositoryTopics(first: 10){
                          nodes{
                            topic{
                              name
                            }
                            url
                          }
                        }
                        labels(first: 10){
                          nodes{
                            name
                          }
                        }
                        owner{
                          id
                          url
                        }
                      }
                    }
                  }
              }`
        };
      
        axiosPost('/graphql',JSON.stringify(data)).then((res) => {
          let searchResults = res.data.search;
          props.getSearchResults(searchResults)
        })
    }
    useEffect(() => {
      localStorage.setItem('token','e0e41dcd98ba312ebadb420f32235f133943b20e')
    },[])
    return (
        <div>
            <Header>
                <div>
                    <Search
                    placeholder="Search or jump to…"
                    onSearch={searchData}
                    style={{ width: 300 }}
                    />
                </div>
            </Header>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        getSearchResults(data){
            dispatch({
                type: GET_SEARCH_RESULTS,
                data: data
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(HeaderCustom)