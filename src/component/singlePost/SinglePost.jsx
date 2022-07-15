import React, { useState } from 'react'
import PopPost from '../popPost/PopPost'

export default function SinglePost({ singlePost }) {
    const { date, title, content, thumbnail: { small }, author: { name, role } } = singlePost

    const [month, day, year] = new Date(date * 1000).toDateString().substring(4).split(' ')
    const modifiedDate = `${month} ${day}, ${year}`

    const [showPost, setShowPost] = useState(false)

    return (
        <>
            <div className='card'>
                <div className='thumbnail'>
                    <img src={small} alt="" />

                    {/* Byclicking the picture you will see the pop post page */}
                    <div className="overlay" onClick={() => setShowPost(true)}>
                        <div className="text">Load More</div>
                    </div>
                </div>
                <div className='text-container'>
                    <div className='circles'>
                        <span></span>
                        <span></span>
                    </div>

                    {/* Byclicking the title you will see the pop post page */}
                    <p className='heading' onClick={() => setShowPost(true)} >{title}</p>
                    <div className='main-text'>{content}</div>
                </div>
                <div className='author-date'>
                    <div className='author'>{name} - {role}</div>
                    <div className='date'>{modifiedDate}</div>
                </div>
            </div>

            {
                showPost && <PopPost setShowPost={setShowPost} singlePost={singlePost} />
            }

        </>
    )
}
