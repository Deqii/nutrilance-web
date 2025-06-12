import recipes from "../data/recipes.json";
import { notFound } from "next/navigation";

export default function RecipeDetail({ params }) {
  const recipe = recipes.find((r) => r.slug === params.slug);

  if (!recipe) return notFound();

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
      <p className="mb-4">
        <span className="font-semibold">Ingredients:</span> {recipe.ingredients}
      </p>
      <ul className="space-y-1">
        <li>Kalori: {recipe.kalori} kcal</li>
        <li>Protein: {recipe.protein} g</li>
        <li>Lemak: {recipe.lemak} g</li>
        <li>Karbohidrat: {recipe.karbohidrat} g</li>
      </ul>
    </div>
  );
}
