"use client";
import { useEffect, useState } from "react";
import Card from "@/components/Card";

const Page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchMealPlan = async () => {
      const res = await fetch("/api/mealplan");
      if (res.ok) {
        const result = await res.json();
        setData(result.data);
      } else {
        console.error("Gagal mengambil data");
      }
    };

    fetchMealPlan();
  }, []);

  if (!data) return <p className="text-center mt-10">Memuat hasil...</p>;

  return (
    <>
      <section className="mt-16 text-center">
        <h1 className="text-3xl font-bold">Your Personalized Meal Plan</h1>
        <p className="mt-4 text-gray-600">
          {data.age} tahun, {data.gender}, aktivitas: {data.activity}, goal:{" "}
          {data.goal} — estimasi kebutuhan:{" "}
          <span className="text-red-500 font-semibold">
            {data.calories} kcal
          </span>
        </p>
      </section>
      <Card />
    </>
  );
};

export default Page;
