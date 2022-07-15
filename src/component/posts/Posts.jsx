import React, { useEffect, useState } from 'react'
import '../../scss/posts/Posts.css'
import axios from 'axios'
import SinglePost from '../singlePost/SinglePost'

export default function Posts() {

    /// store fetched posts data
    const [posts, setPosts] = useState([])

    /// api endpoint
    const URL = 'https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts'

    const fetchData = async () => {
        const { data } = await axios.get(URL)
        setPosts(data)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='container' >
            <div className='row'>
                {/* render all posts to the screen */}
                {
                    posts.map(post => <SinglePost key={post.id} singlePost={post} />)
                }

            </div>
        </div>
    )
}
