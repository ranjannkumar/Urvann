import React, { useState, useContext } from 'react';
import './Add.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
    const { url, token } = useContext(StoreContext);

    const [data, setData] = useState({
        name: "",
        price: "",
        categories: "",
        availability: true,
        image: "placeholder.png", // Using a placeholder image for now
        description: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        if (name === "availability") {
            value = value === "true";
        }
        setData(data => ({ ...data, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            // Split categories string into an array
            const newCategories = data.categories.split(',').map(c => c.trim());

            // Prepare payload
            const newPlantPayload = {
                ...data,
                price: Number(data.price),
                categories: newCategories
            };

            const response = await axios.post(url + "/api/plants/add", newPlantPayload, { headers: { token } });

            if (response.data.success) {
                toast.success("Plant added successfully!");
                // Clear the form
                setData({
                    name: "",
                    price: "",
                    categories: "",
                    availability: true,
                    image: "placeholder.png",
                    description: ""
                });
            } else {
                toast.error("Error adding plant: " + response.data.message);
            }
        } catch (error) {
            console.error("Form submission error:", error);
            toast.error("An error occurred while adding the plant.");
        }
    };

    return (
        <div className='add-plant-form-container'>
            <h2>Add New Plant</h2>
            <form className='add-plant-form' onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={onChangeHandler} value={data.name} type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input onChange={onChangeHandler} value={data.price} type="number" id="price" name="price" required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea onChange={onChangeHandler} value={data.description} id="description" name="description" rows="4" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="categories">Categories (comma-separated)</label>
                    <input onChange={onChangeHandler} value={data.categories} type="text" id="categories" name="categories" required />
                </div>
                <div className="form-group">
                    <label htmlFor="availability">Availability</label>
                    <select onChange={onChangeHandler} value={data.availability} id="availability" name="availability">
                        <option value={true}>In Stock</option>
                        <option value={false}>Out of Stock</option>
                    </select>
                </div>
                {/* You need to handle image uploads properly on the backend, for this example we are using a placeholder. */}
                <input type="hidden" name="image" value="placeholder.png" />
                <button type="submit">Add Plant</button>
            </form>
        </div>
    );
};

export default Add;
