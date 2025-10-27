import React, { useState } from "react";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    carModel: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const carOptions = [
    "LuxAuto Royale",
    "LuxAuto Titan",
    "LuxAuto Velocity",
    "LuxAuto Phantom",
    "LuxAuto Aero GT",
    "LuxAuto Electra",
    "LuxAuto Mirage",
    "LuxAuto Imperial",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Order Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-8 md:px-20">
      <div className="max-w-2xl mx-auto bg-gray-900 rounded-2xl shadow-lg p-10 border border-yellow-500">
        <h1 className="text-4xl font-bold text-yellow-500 mb-6 text-center">
          Order Your LuxAuto
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Complete the form below to reserve or purchase your desired model.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-2 text-yellow-400 font-semibold">
                Select Car Model
              </label>
              <select
                name="carModel"
                value={formData.carModel}
                onChange={handleChange}
                required
                className="w-full p-3 bg-black text-white border border-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">-- Choose a Model --</option>
                {carOptions.map((car, index) => (
                  <option key={index} value={car}>
                    {car}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-yellow-400 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-3 bg-black text-white border border-yellow-500 rounded-lg"
              />
            </div>

            <div>
              <label className="block mb-2 text-yellow-400 font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-black text-white border border-yellow-500 rounded-lg"
              />
            </div>

            <div>
              <label className="block mb-2 text-yellow-400 font-semibold">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 bg-black text-white border border-yellow-500 rounded-lg"
              />
            </div>

            <div>
              <label className="block mb-2 text-yellow-400 font-semibold">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                required
                className="w-full p-3 bg-black text-white border border-yellow-500 rounded-lg"
              ></textarea>
            </div>

            <div>
              <label className="block mb-2 text-yellow-400 font-semibold">
                Notes / Special Requests
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="3"
                className="w-full p-3 bg-black text-white border border-yellow-500 rounded-lg"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition"
            >
              Submit Order
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              Order Submitted Successfully!
            </h2>
            <p className="text-gray-400">
              Thank you for choosing <span className="text-yellow-400">LuxAuto</span>.  
              Our representative will contact you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 px-6 py-2 border border-yellow-500 text-yellow-400 rounded-full hover:bg-yellow-500 hover:text-black transition"
            >
              Submit Another Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
