import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = ({ authUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    age: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: "", mobile: "", address: "", age: "" });
    setIsEditing(false);
  };

  const handleEdit = () => {
    setFormData(submittedData);
    setSubmittedData(null);
    setIsEditing(true);
  };

  const handleDelete = () => {
    setSubmittedData(null);
    setFormData({ name: "", mobile: "", address: "", age: "" });
    setIsEditing(false);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Login Successful 🎉
        </h2>
        <p className="text-gray-700 mb-2">
          Welcome, <span className="font-semibold">{authUser?.name}</span>
        </p>
        <p className="text-gray-600 mb-6">
          You have logged in successfully with{" "}
          <span className="font-semibold">{authUser?.email}</span>
        </p>

        {/* Form Section (only show if no submitted data OR editing mode) */}
        {(!submittedData || isEditing) && (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full border rounded-lg p-2 focus:ring focus:ring-yellow-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 w-full border rounded-lg p-2 focus:ring focus:ring-yellow-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 w-full border rounded-lg p-2 focus:ring focus:ring-yellow-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="mt-1 w-full border rounded-lg p-2 focus:ring focus:ring-yellow-200"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors"
            >
              {isEditing ? "Update Details" : "Submit Details"}
            </button>
          </form>
        )}

        {/* Show Submitted Data */}
        {submittedData && !isEditing && (
          <div className="mt-6 text-left border-t pt-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Submitted Details
            </h3>
            <p>
              <span className="font-semibold">Name:</span> {submittedData.name}
            </p>
            <p>
              <span className="font-semibold">Mobile:</span> {submittedData.mobile}
            </p>
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {submittedData.address}
            </p>
            <p>
              <span className="font-semibold">Age:</span> {submittedData.age}
            </p>

            {/* Edit & Delete buttons */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={handleEdit}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        )}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
