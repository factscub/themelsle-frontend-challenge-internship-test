import React from 'react'
import '../../scss/popPost/PopPost.css'

export default function PopPost({ singlePost, setShowPost }) {

    ///// destructing fetched data.
    const { title, content, thumbnail: { small }, author: { name, role, avatar } } = singlePost

    return (

        <div className='outer-container' onClick={(e) => {

            //// Byclicking outside of the post will revert you back to the posts page.
            e.target.classList.contains('outer-container') && setShowPost(false)
        }}>
            <div className='inner-container'>

                {/* Byclicking the close button will revert you back to the posts page. */}
                <div className='close'><span onClick={() => setShowPost(false)}>&times;</span></div>
                <div className='thumbnail'>
                    <img src={small} alt="" />

                </div>
                <div className='text-container'>
                    <p className='heading'>{title}</p>
                    <div className='main-text'>{content}</div>
                </div>

                <div className='avatar-details-container'>

                    <div className='avatar'>
                        {
                            avatar && <img src={avatar} alt="" />
                        }
                    </div>
                    <div className='details'>{name} - {role}</div>
                </div>
            </div>
        </div >
    )
}
