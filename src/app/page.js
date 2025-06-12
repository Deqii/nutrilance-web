"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    activity: "",
    goal: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ["name", "age", "gender"];
    const isValid = requiredFields.every((field) => formData[field]);

    if (!isValid) {
      toast.error("Mohon lengkapi semua data yang wajib diisi.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/mealplan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Terjadi kesalahan.");
      }

      // save
      sessionStorage.setItem("mealplan_result", JSON.stringify(result.data));

      setIsLoading(false);
      toast.success("Data berhasil dikirim.");
      // push to result
      router.push("/result");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Terjadi kesalahan saat mengirim data.");
      setIsLoading(false);
    }
  };

  return (
    <section>
      <div className="max-w-md mt-24 mx-auto bg-white text-black p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Meal Plan Form</h2>
        <form onSubmit={handleSubmit}>
          {[
            { label: "Name", name: "name" },
            { label: "Age", name: "age" },
            { label: "Weight (kg)", name: "weight" },
            { label: "Height (cm)", name: "height" },
          ].map(({ label, name }) => (
            <div className="mb-4" key={name}>
              <label className="block mb-1">{label}</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required={["name", "age"].includes(name)}
              />
            </div>
          ))}

          <div className="mb-4">
            <label className="block mb-1">Gender</label>
            <select
              name="gender"
              onChange={handleChange}
              value={formData.gender}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Pilih</option>
              <option value="laki-laki">Laki-laki</option>
              <option value="perempuan">Perempuan</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1">Activity Level</label>
            <select
              name="activity"
              onChange={handleChange}
              value={formData.activity}
              className="w-full p-2 border rounded"
            >
              <option value="">Pilih</option>
              <option value="rendah">Rendah</option>
              <option value="sedang">Sedang</option>
              <option value="berat">Berat</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-1">Goal</label>
            <select
              name="goal"
              onChange={handleChange}
              value={formData.goal}
              className="w-full p-2 border rounded"
            >
              <option value="">Pilih</option>
              <option value="turun">Menurunkan berat badan</option>
              <option value="naik">Menaikkan berat badan</option>
            </select>
          </div>

          <button
            type="submit"
            className={`w-full text-white py-2 rounded transition-all duration-300 flex items-center justify-center ${
              isLoading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-black hover:bg-gray-800"
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Mengirim...
              </>
            ) : (
              "Generate Hasil Plan"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
