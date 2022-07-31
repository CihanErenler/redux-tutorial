import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { removeItem } from "../features/card/cardSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
	const { id, img, title, price, amount } = props;
	const dispatch = useDispatch();
	return (
		<article className="cart-item">
			<img src={img} alt={title} />
			<div>
				<h4>{title}</h4>
				<h4 className="item-price">${price}</h4>
				<button
					className="remove-button"
					onClick={() => dispatch(removeItem(id))}
				>
					remove
				</button>
			</div>
			<div>
				<button className="amount-btn">
					<ChevronUp />
				</button>
				<p className="amount">{amount}</p>
				<button className="amount-btn">
					<ChevronDown />
				</button>
			</div>
		</article>
	);
};

export default CartItem;
