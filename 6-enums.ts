enum OrderState {
  InQueue = 'in-queue',
  InPrep = 'in-prep',
  Delivering = 'delivering',
  Completed = 'completed',
}

interface Order {
  orderRef: string;
  orderTime: number;
  orderState: OrderState;
}
const order123: Order = {
  orderRef: 'dfdfdf',
  orderTime: Date.now(),
  orderState: OrderState.InQueue,
};

function setOrderState(order: Order, state: OrderState) {
  order.orderState = state;
}

setOrderState(order123, OrderState.InPrep);
setOrderState(order123, OrderState.Delivering);
setOrderState(order123, OrderState.Completed);

// Satisfy TS
export {};
