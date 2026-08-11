
import './Airbnb-css.css';
export default function FoodCard(props){

    
    return(
        <div className='maincontent'>
                <img src={props.card.strMealThumb} alt="zfrs" />
                <div className='rating'>
                    
                    <h5>{props.card.strMeal}</h5>
                    <h5> <span>From --{props.card.strCountry}--</span> </h5>
                </div>
            </div>
    )
}
