const Card = ({ mealPlan }) => {
  if (!mealPlan) return null;

  const meals = [
    {
      title: "Contoh Makanan 1",
      nutrition: {
        calories: mealPlan.calories,
        protein: mealPlan.protein || "--",
        fat: mealPlan.fat || "--",
        carbs: mealPlan.carbs || "--",
        fiber: mealPlan.fiber || "--",
      },
    },
    {
      title: "Contoh Makanan 2",
      nutrition: {
        calories: mealPlan.calories,
        protein: mealPlan.protein || "--",
        fat: mealPlan.fat || "--",
        carbs: mealPlan.carbs || "--",
        fiber: mealPlan.fiber || "--",
      },
    },
    {
      title: "Contoh Makanan 3",
      nutrition: {
        calories: mealPlan.calories,
        protein: mealPlan.protein || "--",
        fat: mealPlan.fat || "--",
        carbs: mealPlan.carbs || "--",
        fiber: mealPlan.fiber || "--",
      },
    },
  ];

  return (
    <div className="bg-white px-6 py-10 mx-16">
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {meals.map((meal, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 border">
            <h4 className="font-semibold text-lg mb-2">{meal.title}</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Calories: {meal.nutrition.calories} kcal</li>
              <li>Protein: {meal.nutrition.protein} g</li>
              <li>Fat: {meal.nutrition.fat} g</li>
              <li>Carbohydrates: {meal.nutrition.carbs} g</li>
              <li>Fiber: {meal.nutrition.fiber} g</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
