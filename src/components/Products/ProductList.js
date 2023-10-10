import Card from "../UI/Card"
import classes from "./ProductList.module.css"

export default function ProductList(props) {
  return( 
    <Card className={classes.products}>
        <ul>
            {props.products.map((prod)=>(
                <li>
                    {prod.product} ({prod.price} €)
                </li>
            ))}
        </ul>
    </Card>
    ); 
}

