import Button from "../../ui/Button";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";
import { formatCurrency } from "../../utils/helpers";
import Loader from "../../ui/Loader";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  const priorityPrice = order.orderPrice * 0.2;
  const isUpdating =
    fetcher.state === "submitting" || fetcher.state === "loading";

  return (
    <>
      {isUpdating && (
        <div className="fixed inset-0 z-50">
          <Loader />
        </div>
      )}
      <fetcher.Form method="PATCH" className="text-right">
        <Button type="primary" disabled={isUpdating} onClick={() => {}}>
          Make Priority for {formatCurrency(priorityPrice)}
        </Button>
      </fetcher.Form>
    </>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);

  return null;
}
