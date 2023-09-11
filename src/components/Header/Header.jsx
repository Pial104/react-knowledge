
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex'>
             <h1 className='text-5xl font-bold'>React Knowledge Cafe</h1>
                <img src="{profile}" alt=""  />
        </div>
    );
};

export default Header;