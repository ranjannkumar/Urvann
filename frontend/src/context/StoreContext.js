import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";
    const [token, setToken] = useState("");
    const [plant_list, setPlantList] = useState([]);

    // Fetch plants with optional search and filter
    const fetchPlantList = async (category = "All", searchQuery = "") => {
        try {
            let endpoint = `${url}/api/plants`;
            const params = new URLSearchParams();
            
            if (category && category !== "All") {
                params.append("category", category);
            }
            
            if (searchQuery) {
                params.append("name", searchQuery);
            }

            if (params.toString()) {
                endpoint += `?${params.toString()}`;
            }

            const response = await axios.get(endpoint);
            if (response.data.success) {
                setPlantList(response.data.data);
            } else {
                console.error("Failed to fetch plants:", response.data.message);
            }
        } catch (error) {
            console.error("Error fetching plant list:", error);
        }
    };

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = plant_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
        setCartItems(response.data.cartData);
    };

    useEffect(() => {
        async function loadData() {
            await fetchPlantList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    }, []);

    const contextValue = {
        plant_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        fetchPlantList 
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
