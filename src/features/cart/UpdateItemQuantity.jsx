import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity } from "./cartSlice";
import { increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };
  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };

  return (
    <div className="flex items-center gap-3 md:gap-3">
      <Button type="round" onClick={handleDecrease}>
        -
      </Button>
      <span className="gap-2 text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
