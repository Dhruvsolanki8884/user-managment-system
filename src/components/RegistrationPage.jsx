import React, { useState } from "react";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";

const RegistrationPage = ({ setUsers }) => {
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleRegister = () => {
    const newErrors = {};
    if (!registerData.name) newErrors.name = "Full name is required";
    if (!registerData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!registerData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setUsers((prev) => [...prev, registerData]);

    console.log("✅ Registered user:", registerData);

    setRegisterData({ name: "", email: "", password: "" });
    setErrors({});

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Create New Account</h2>
          <p className="text-gray-600">Fill in your details to register</p>
        </div>

        <InputField
          Icon={User}
          type="text"
          placeholder="Full Name"
          value={registerData.name}
          onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
          error={errors.name}
        />

        <InputField
          Icon={Mail}
          type="email"
          placeholder="Email Address"
          value={registerData.email}
          onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
          error={errors.email}
        />

        <InputField
          Icon={Lock}
          type="password"
          placeholder="Password"
          value={registerData.password}
          onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
          error={errors.password}
        />
        <button
          onClick={handleRegister}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors mb-6"
        >
          Create Account
        </button>

        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-green-600 hover:underline font-semibold"
            >
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;







