import { useContext, useEffect } from "react";
import "./Cart.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../context/CartContext";

export default function Cart({ handleClick }) {
  const { cartItems } = useContext(CartContext);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  useEffect(() => {}, [cartItems]);

  function getTotalQuantity(cartItems) {
    let totalQuantity = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalQuantity += cartItems[i].quantity;
    }
    return totalQuantity;
  }

  const totalQuantity = getTotalQuantity(cartItems);

  return (
    <IconButton aria-label="cart" onClick={handleClick}>
      <StyledBadge badgeContent={totalQuantity} color="secondary">
        <ShoppingCartIcon className="shopping-cart" />
      </StyledBadge>
    </IconButton>
  );
}
