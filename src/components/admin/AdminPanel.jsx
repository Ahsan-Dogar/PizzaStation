import React from 'react';
import { X, TrendingUp, ShoppingBag, Users, Settings, Search, Filter, CheckCircle, Clock, Package, Phone, MapPin, DollarSign, Eye } from 'lucide-react';

export default function AdminPanel({
  visible,
  onClose,
  adminLoggedIn,
  adminTab,
  adminCredentials,
  setAdminCredentials,
  handleAdminLogin,
  handleAdminLogout,
  adminActiveSubTab,
  setAdminActiveSubTab,
  adminSearchOrder,
  setAdminSearchOrder,
  onAdminClick,
  adminFilterStatus,
  setAdminFilterStatus,
  adminOrders,
  filteredAdminOrders,
  adminCustomers,
  adminSettings,
  setAdminSettings,
  stats,
  handleUpdateOrderStatus,
  handleSaveSettings
}) {
  if (!visible) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'confirmed': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'preparing': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'delivery': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'completed': return 'bg-green-100 text-green-800 border-green-300';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 to-black text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Settings className="w-6 h-6" />
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          {!adminLoggedIn ? (
            /* Login Screen */
            <div className="flex items-center justify-center min-h-[400px] p-8">
              <div className="w-full max-w-md">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-10 h-10 text-gray-800" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Admin Login</h2>
                  <p className="text-gray-600 mt-2">Enter your credentials to access the admin panel</p>
                </div>
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                    <input
                      type="text"
                      value={adminCredentials.username}
                      onChange={(e) => setAdminCredentials({ ...adminCredentials, username: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none"
                      placeholder="Enter username"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      value={adminCredentials.password}
                      onChange={(e) => setAdminCredentials({ ...adminCredentials, password: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-lg transition-colors"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          ) : (
            /* Dashboard */
            <div className="flex h-full">
              {/* Sidebar */}
              <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
                <nav className="space-y-2">
                  <button
                    onClick={() => setAdminActiveSubTab('overview')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      adminActiveSubTab === 'overview'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-medium">Overview</span>
                  </button>
                  <button
                    onClick={() => setAdminActiveSubTab('orders')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      adminActiveSubTab === 'orders'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span className="font-medium">Orders</span>
                  </button>
                  <button
                    onClick={() => setAdminActiveSubTab('customers')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      adminActiveSubTab === 'customers'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Users className="w-5 h-5" />
                    <span className="font-medium">Customers</span>
                  </button>
                  <button
                    onClick={() => setAdminActiveSubTab('settings')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      adminActiveSubTab === 'settings'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Settings className="w-5 h-5" />
                    <span className="font-medium">Settings</span>
                  </button>
                </nav>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <button
                    onClick={handleAdminLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <X className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 overflow-auto">
                {adminActiveSubTab === 'overview' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">Total Orders</p>
                            <p className="text-3xl font-bold text-gray-800 mt-1">{stats.totalOrders}</p>
                          </div>
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                            <ShoppingBag className="w-6 h-6 text-gray-800" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">Total Revenue</p>
                            <p className="text-3xl font-bold text-gray-800 mt-1">Rs. {stats.revenue}</p>
                          </div>
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <DollarSign className="w-6 h-6 text-green-600" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">Active Orders</p>
                            <p className="text-3xl font-bold text-gray-800 mt-1">{stats.activeOrders}</p>
                          </div>
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Clock className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Orders */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Orders</h3>
                      <div className="space-y-4">
                        {adminOrders.slice(0, 5).map((order) => (
                          <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                <Package className="w-5 h-5 text-gray-800" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-800">{order.customer_name}</p>
                                <p className="text-sm text-gray-600">{order.id}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-gray-800">Rs. {order.total_price.toFixed(2)}</p>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                                {order.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {adminActiveSubTab === 'orders' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800">Orders Management</h2>
                    
                    {/* Search and Filter */}
                    <div className="flex gap-4">
                      <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search orders..."
                          value={adminSearchOrder}
                          onChange={(e) => setAdminSearchOrder(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                        />
                      </div>
                      <select
                        value={adminFilterStatus}
                        onChange={(e) => setAdminFilterStatus(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                      >
                        <option value="all">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="preparing">Preparing</option>
                        <option value="delivery">Delivery</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>

                    {/* Orders Table */}
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {filteredAdminOrders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{order.customer_name}</div>
                                <div className="text-sm text-gray-500">{order.phone}</div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">
                                  {order.items.map((item, idx) => (
                                    <div key={idx}>{item.name} x{item.qty}</div>
                                  ))}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Rs. {order.total_price.toFixed(2)}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                                  {order.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <select
                                  value={order.status}
                                  onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                                  className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                                >
                                  <option value="pending">Pending</option>
                                  <option value="confirmed">Confirmed</option>
                                  <option value="preparing">Preparing</option>
                                  <option value="delivery">Delivery</option>
                                  <option value="completed">Completed</option>
                                  <option value="cancelled">Cancelled</option>
                                </select>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {adminActiveSubTab === 'customers' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800">Customers</h2>
                    
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Spent</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {adminCustomers.map((customer) => (
                            <tr key={customer.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.name}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.phone}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.ordersCount}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Rs. {customer.spent.toFixed(2)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {adminActiveSubTab === 'settings' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
                    
                    <form onSubmit={handleSaveSettings} className="space-y-6">
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Store Settings</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number</label>
                            <input
                              type="text"
                              value={adminSettings.whatsappNumber}
                              onChange={(e) => setAdminSettings({ ...adminSettings, whatsappNumber: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Charges (Rs.)</label>
                            <input
                              type="number"
                              step="0.01"
                              value={adminSettings.deliveryCharges}
                              onChange={(e) => setAdminSettings({ ...adminSettings, deliveryCharges: parseFloat(e.target.value) })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Restaurant Address</label>
                            <textarea
                              value={adminSettings.restaurantAddress}
                              onChange={(e) => setAdminSettings({ ...adminSettings, restaurantAddress: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none"
                              rows={3}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Restaurant Phone</label>
                            <input
                              type="text"
                              value={adminSettings.restaurantPhone}
                              onChange={(e) => setAdminSettings({ ...adminSettings, restaurantPhone: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none"
                            />
                          </div>
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              id="isOpen"
                              checked={adminSettings.isOpen}
                              onChange={(e) => setAdminSettings({ ...adminSettings, isOpen: e.target.checked })}
                              className="w-5 h-5 text-gray-900 rounded focus:ring-2 focus:ring-gray-900"
                            />
                            <label htmlFor="isOpen" className="text-sm font-medium text-gray-700">Restaurant is Open</label>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="bg-gray-900 hover:bg-black text-white font-bold px-6 py-3 rounded-lg transition-colors"
                      >
                        Save Settings
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
