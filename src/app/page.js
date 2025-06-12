"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [responseData, setResponseData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    activity: "",
    goal: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.age || !formData.gender) {
      alert("Mohon lengkapi semua data yang wajib diisi.");
      return;
    }

    const res = await fetch("/api/mealplan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    console.log(result);
    setResponseData(result.data);
    alert("Data berhasil dikirim!");

    if (res.ok) {
      router.push("/result");
    } else {
      alert("Gagal mengirim data");
    }
  };

  return (
    <div className="max-w-md mt-20 mx-auto bg-white text-black p-8 rounded-lg shadow-lg">
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
          >
            <option value="">Pilih</option>
            <option value="male">Laki-laki</option>
            <option value="female">Perempuan</option>
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
            className="w-full p-2 border rounded"
          >
            <option value="">Pilih</option>
            <option value="turun">Menurunkan berat badan</option>
            <option value="naik">Menaikkan berat badan</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Generate Hasil Plan
        </button>
      </form>
      {responseData && (
        <div className="mt-6 p-4 bg-green-100 rounded text-sm">
          <p>
            <strong>Hasil:</strong>
          </p>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
