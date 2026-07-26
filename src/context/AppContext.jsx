import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [pendingPurchase, setPendingPurchase] = useState(null);

  const login = (userData) => {
    // Generate an automatic avatar if not provided
    const userWithAvatar = {
      ...userData,
      avatar: userData.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name || userData.email)}&background=c6a87c&color=0f1115`
    };
    setUser(userWithAvatar);
  };

  const logout = () => {
    setUser(null);
  };

  const deleteAccount = () => {
    setUser(null);
    setOrders([]);
    setPendingPurchase(null);
  };

  const addOrder = (order) => {
    setOrders((prev) => [
      {
        id: `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        date: new Date().toISOString(),
        status: 'Processing',
        ...order
      },
      ...prev
    ]);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        deleteAccount,
        orders,
        addOrder,
        pendingPurchase,
        setPendingPurchase
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
