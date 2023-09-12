import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog
    console.log(blog)
    return (
        <div className='mb-20 mt-5  space-y-4'>
            <img className='w-full' src={cover}  alt={`Cover picture of the title ${title}` } />
            <div className='flex justify-between '>
                <div className='flex mt-4 '> 
                    <img className='w-14' src={author_img} alt="" />

                    <div className='ml-6'>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>

                <div className='flex items-center'>
                    <span>{reading_time}min read</span>
                    {/* react icon */}
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-blue-700 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-3xl mt-4">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}> <a href=""> {hash} </a> </span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-purple-800 font-bold underline '>Mark As Read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}


export default Blog;