import React from 'react'
import { Link } from 'react-router-dom'
function Kartica(props) {
    return (
        <>
        <li className="kartica">
            <Link
            className="kartica__link" to={props.path}>
                <figure className="kartica__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="Lorem Ipsum"
                    className="kartica__img"/>
                </figure>
                <div className="kartica__info">
                    <h5 className="kartice__text">{props.text}

                    </h5>
                </div>
            </Link>
        
        </li>
    

        </>
    )
}

export default Kartica
