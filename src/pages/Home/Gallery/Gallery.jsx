import doll1 from '../../../assets/images/gallery/doll1.jpg'
import doll2 from '../../../assets/images/gallery/doll2.jpg'
import doll3 from '../../../assets/images/gallery/doll3.jpg'
import doll4 from '../../../assets/images/gallery/doll4.jpg'
import doll5 from '../../../assets/images/gallery/doll5.jpg'
import doll6 from '../../../assets/images/gallery/doll6.jpg'

const Gallery = () => {
    return (
        <div >
            <h2 className="text-4xl font-bold pt-8 text-center text-gray-600 mb-6">Galley</h2>
            <div className='lg:grid lg:grid-cols-3 gap-2 rounded-lg'>
                <img className='m-5 w-80 h-80 border-4 rounded-lg hover:scale-125 transition ease-in-out duration-300' src={doll1} />
                <img className='m-5 w-80 h-80 border-4 rounded-lg hover:scale-125 transition ease-in-out duration-300' src={doll2} />
                <img className='m-5 w-80 h-80 border-4 rounded-lg hover:scale-125 transition ease-in-out duration-300' src={doll3} />
                <img className='m-5 w-80 h-80 border-4 rounded-lg hover:scale-125 transition ease-in-out duration-300' src={doll4} />
                <img className='m-5 w-80 h-80 border-4 rounded-lg hover:scale-125 transition ease-in-out duration-300' src={doll5} />
                <img className='m-5 w-80 h-80 border-4 rounded-lg hover:scale-125 transition ease-in-out duration-300' src={doll6} />

            </div>
            <div className='text-center mt-8 mb-8'>
            <button className="btn btn-secondary">See More Picture</button>
            </div>
        </div>
    );
};

export default Gallery;