import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
// import { SketchPicker } from 'react-color';
import 'react-datepicker/dist/react-datepicker.css';
import './BUTTEROrderForm.css';


function OrderForm() {
  const [formState, setFormState] = useState({
    tier: '',
    flavor: '',
    color: '',
    message: '',
    name: '',
    email: '',
    phone: '',
    dateNeeded: new Date(),
    deliveryOption: '',
    address: '',
  });
  

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormState({ ...formState, dateNeeded: date });
  };

  // const handleColorChange = (color) => {
  //   setFormState({ ...formState, color: color.hex });
  // };

  return (
    <div className="OrderForm">
      <h3 className="cake-order-title">Request a quote</h3>
      <form className="cake-order-form">
        <label htmlFor="tier">Tier:</label>
        <select name="tier" value={formState.tier} onChange={handleChange}>
          <option value="">Select tier</option>
          <option value="1tierShort">1 tier - short</option>
          <option value="1tierTall">1 tier - tall</option>
          <option value="2tiersShort">2 tiers - short</option>
          <option value="2tiersTall">2 tiers - tall</option>
          <option value="3tiers">3 tiers</option>
        </select>

        <label htmlFor="flavor">Flavor:</label>
        <select name="flavor" value={formState.flavor} onChange={handleChange}>
        <optgroup label="Basic Flavors">
            <option value="vanilla">Vanilla</option>
            <option value="tripleChocolate">Triple Chocolate</option>
            <option value="birthdayCake">Birthday Cake</option>
        </optgroup>
        <optgroup label="Premium Flavors">
            <option value="butterPecan">Butter Pecan</option>
            <option value="pistachioCardamom">Pistachio Cake with Cardamom Frosting</option>
            <option value="blackSesameMatcha">Black Sesame Cake with Matcha Frosting</option>
            <option value="persianSpicedRose">Persian Spiced Rose</option>
            <option value="spicedCeylonTea">Spiced Ceylon Tea</option>
            <option value="thaiMilkTea">Thai Milk Tea</option>
            <option value="chocolateOrange">Chocolate Orange</option>
            <option value="caramelDulche">Caramel Dulche</option>
            <option value="coffeeCream">Coffee Cream</option>
        </optgroup>
        </select>

        <label htmlFor="color">Color theme:</label>
            <input
            type="text"
            name="color"
            value={formState.color}
            onChange={handleChange}
            placeholder="Enter the main cake color"
            />

            <label htmlFor="message">Message:</label>

            <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Add additional details to your inquiry"
            />

            <label htmlFor="name">Name:</label>
            <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Enter your name"
            />

            <label htmlFor="email">Email:</label>
            <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Enter your email"
            />

            <label htmlFor="phone">Phone:</label>
            <input
            type="tel"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            />

            <label htmlFor="dateNeeded">Date needed:</label>
            <DatePicker
                selected={formState.dateNeeded}
                onChange={handleDateChange}
                dateFormat="MMMM d, yyyy h:mm aa"
                showTimeSelect
            />

            <label>Delivery Option:</label>
            <div className="OFR-C">
                <div className="OFR-C2">
                    <input
                    className="OF-radio"
                    type="radio"
                    name="deliveryOption"
                    value="pickup"
                    onChange={handleChange}
                    />
                    <label htmlFor="pickup" className="OF-radiolabel">Pick Up</label>
                </div>
                <div className="OFR-C2">
                    <input
                    className="OF-radio"
                    type="radio"
                    name="deliveryOption"
                    value="delivery"
                    onChange={handleChange}
                    />
                    <label htmlFor="delivery" className="OF-radiolabel">Delivery</label>
                </div>
            </div>

                {formState.deliveryOption === 'delivery' && (
                    <>
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formState.address}
                        onChange={handleChange}
                        placeholder="Enter your delivery address"
                    />
                    </>
                )}

            <div></div>
            <button type="submit" className="submit-btn">Request Quote</button>
      </form>
    </div>
  );
}

export default OrderForm;
