// A mock function to mimic making an async request for data
export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/orders/?user.id=" + userId
    );
    const data = await response.json();
    resolve({ data });
  });
}
