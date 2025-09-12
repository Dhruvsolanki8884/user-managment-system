import React from "react";

const InputField = ({ Icon, type, placeholder, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
        {Icon && <Icon className="w-5 h-5 text-gray-400 mr-2" />}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="flex-1 outline-none text-gray-700"
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputField;

