import {Link} from 'react-router-dom';


const Header = ({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}) => {
    
    return(
        <div className="">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-36 w-36"
                    src="https://cdn1.iconfinder.com/data/icons/leto-blue-files/64/file_document-56-512.png"/>
            </div>

            <div className='flex items-center justify-center'>
                <h2 className="text-center text-blue-700 text-5xl font-extrabold text-gray-900 mr-1">
                    DOC
                </h2>
                <h2 className = "text-center text-5xl font-extrabold text-gray-900">
                TOR
                </h2>
            </div>
            
            <h2 className="mt-10 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-blue-600 hover:text-blue-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}

export default Header;