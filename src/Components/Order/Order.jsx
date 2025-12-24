import React from 'react'

export default function Order() {

const [orders, setOrders] = useState([
    {
      id: 101,
      customer: "Mahmoud Amin",
      status: "Delivered",
      products: [
        { name: "Product A", quantity: 2, price: 20 },
        { name: "Product B", quantity: 1, price: 15 },
      ],
      total: 55,
    },
    {
      id: 102,
      customer: "Walid Fathy",
      status: "Pending",
      products: [
        { name: "Product C", quantity: 3, price: 10 },
      ],
      total: 30,
    },
  ]);

  const [newOrder, setNewOrder] = useState({
    customer: "",
    status: "Pending",
    products: [{ name: "", quantity: 1, price: 0 }],
  });

  // Handle adding new product row
  const addProductRow = () => {
    setNewOrder(prev => ({
      ...prev,
      products: [...prev.products, { name: "", quantity: 1, price: 0 }],
    }));
  };

  // Handle input change for products
  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...newOrder.products];
    updatedProducts[index][field] = field === "quantity" || field === "price" ? Number(value) : value;
    setNewOrder({ ...newOrder, products: updatedProducts });
  };

  // Calculate total
  const calculateTotal = () => {
    return newOrder.products.reduce((sum, p) => sum + p.quantity * p.price, 0);
  };

  // Handle adding new order
  const handleAddOrder = (e) => {
    e.preventDefault();
    const orderToAdd = {
      id: Date.now(),
      ...newOrder,
      total: calculateTotal(),
    };
    setOrders([orderToAdd, ...orders]);
    setNewOrder({
      customer: "",
      status: "Pending",
      products: [{ name: "", quantity: 1, price: 0 }],
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>

      {/* Add New Order Form */}
      <form onSubmit={handleAddOrder} className="border p-4 rounded mb-6 bg-gray-50">
        <h2 className="font-bold mb-2">Add New Order</h2>
        <input
          type="text"
          placeholder="Customer Name"
          value={newOrder.customer}
          onChange={(e) => setNewOrder({ ...newOrder, customer: e.target.value })}
          className="border p-2 mb-2 w-full rounded"
          required
        />

        {/* Products */}
        {newOrder.products.map((product, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Product Name"
              value={product.name}
              onChange={(e) => handleProductChange(index, "name", e.target.value)}
              className="border p-2 rounded flex-1"
              required
            />
            <input
              type="number"
              placeholder="Qty"
              value={product.quantity}
              onChange={(e) => handleProductChange(index, "quantity", e.target.value)}
              className="border p-2 rounded w-20"
              min={1}
            />
            <input
              type="number"
              placeholder="Price"
              value={product.price}
              onChange={(e) => handleProductChange(index, "price", e.target.value)}
              className="border p-2 rounded w-24"
              min={0}
            />
          </div>
        ))}

        <button type="button" onClick={addProductRow} className="mb-2 text-blue-500">+ Add Product</button>
        <p className="mb-2 font-bold">Total: ${calculateTotal()}</p>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Order</button>
      </form>

      {/* Orders List */}
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
