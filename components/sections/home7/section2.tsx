'use client'
import React, { useState } from "react";

export default function Section2() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedDate: "",
  });

  // Handle input changes
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData); // Log the form data to the console
  };

  return (
    <div className="others7-section-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="others-buy-contact">
              <form onSubmit={handleSubmit}>
                <div className="row align-items-center">
                  <div className="col-lg-3 col-md-6">
                    <div className="input-area">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                      />
                      <img src="/assets/img/icons/user1.svg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="input-area">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                      />
                      <img src="/assets/img/icons/mail1.svg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="space20 d-lg-none d-md-block" />
                    <div className="input-area">
                      <input
                        type="date"
                        name="selectedDate"
                        value={formData.selectedDate}
                        onChange={handleInputChange}
                        placeholder="Choose Date"
                        min="2025-07-16"
                        max="2025-07-18"
                        list="available-dates"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="space10 d-lg-none d-md-block" />
                    <div className="input-area">
                      <button type="submit" className="vl-btn7">
                        Reserve My Seat <span><i className="fa-solid fa-arrow-right" /></span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
