import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Product(props){
    const {name,image,price,category} = props
    return(
        <div className="product">
            <div className="wrapper">
                {category=="best" && 
                    <div className="info-best">
                        Best Seller
                    </div>
                }
                {category=="autumn" && 
                    <div className='info'>
                        Autumn
                    </div>
                }
                {category=="daily" && 
                    <div className="info-daily">
                        Daily
                    </div>
                }
                {category=="winter" && 
                    <div className="info-winter">
                        Winter
                    </div>
                }
                <img src={image} alt=""/>
                <div className="cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
            <div className="variant">
                <div className="variant-1"></div>
                <div className="variant-2"></div>
            </div>
            <div className="p-name">{name}</div>
            <div className="price">{price}</div>
        </div>
    )
}