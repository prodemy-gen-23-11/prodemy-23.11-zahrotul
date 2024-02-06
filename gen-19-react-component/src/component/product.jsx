import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Product(props){
    return(
        <div className="product">
            <div className="wrapper">
                {props.category=="best" && 
                    <div className="info-best">
                        Best Seller
                    </div>
                }
                {props.category=="autumn" && 
                    <div className='info'>
                        Autumn
                    </div>
                }
                {props.category=="daily" && 
                    <div className="info-daily">
                        Daily
                    </div>
                }
                {props.category=="winter" && 
                    <div className="info-winter">
                        Winter
                    </div>
                }
                <img src={props.image} alt=""/>
                <div className="cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
            <div className="variant">
                <div className="variant-1"></div>
                <div className="variant-2"></div>
            </div>
            <div className="p-name">{props.name}</div>
            <div className="price">{props.price}</div>
        </div>
    )
}