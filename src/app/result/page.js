"use client";
import { useEffect, useState } from "react";
import Card from "@/components/Card";

const Page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("mealplan_result");
    if (stored) {
      try {
        setData(JSON.parse(stored));
      } catch (err) {
        console.error("Gagal parsing data:", err);
      }
    }
  }, []);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="mt-4 text-gray-600">Memuat hasil...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="mt-24 text-center">
        <h1 className="md:text-3xl text-2xl font-bold">
          Your Personalized Meal Plan
        </h1>
        <p className="mt-4 text-gray-600">
          {data.age} tahun, {data.gender}, aktivitas: {data.activity}, goal:{" "}
          {data.goal} — estimasi kebutuhan:{" "}
          <span className="text-red-500 font-semibold">
            {data.calories} kcal
          </span>
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">Day 1</h2>
        <h3 className="text-xl font-semibold text-center mb-10 text-gray-700">
          Meal 1
        </h3>
        <Card mealPlan={data} />

        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow text-center mt-10">
          <h4 className="font-semibold text-lg mb-4">Nutrition Summary</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>
              Calories:{" "}
              <span className="text-red-500 font-medium">
                {data.calories} kcal
              </span>
            </li>
            <li>Protein: {data.protein || "-"} g</li>
            <li>Fat: {data.fat || "-"} g</li>
            <li>Carbohydrates: {data.carbs || "-"} g</li>
            <li>Fiber: {data.fiber || "-"} g</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Page;
