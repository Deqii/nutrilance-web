import { NextResponse } from "next/server";

let latestData = null;

export async function POST(req) {
  const body = await req.json();
  console.log("Body dari klien:", body);

  const calories = calculateCalories(body);

  const result = { ...body, calories };
  latestData = result;

  return NextResponse.json({
    message: "Data berhasil diterima",
    data: result,
  });
}

export async function GET() {
  if (!latestData) {
    return NextResponse.json({ error: "No data found" }, { status: 404 });
  }

  return NextResponse.json({ data: latestData });
}

function calculateCalories({ age, gender, weight, height, activity, goal }) {
  const w = parseFloat(weight);
  const h = parseFloat(height);
  const a = parseFloat(age);

  let bmr =
    gender === "laki-laki"
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161;

  const factor = { rendah: 1.2, sedang: 1.55, berat: 1.725 }[activity] || 1.2;
  let calories = bmr * factor;

  if (goal === "turun") calories -= 300;
  if (goal === "naik") calories += 300;

  return Math.round(calories);
}
