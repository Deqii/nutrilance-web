const Card = ({ meals = [], summary = {} }) => {
  return (
    <div className="bg-white min-h-screen px-6 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Day 1</h2>
      <h3 className="text-xl font-semibold text-center mb-10 text-gray-700">
        Meal 1
      </h3>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {meals.map((meal, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border hover:scale-105 transform transition duration-300"
          >
            <div className="bg-cyan-200 h-32 rounded-md mb-4 flex items-center justify-center">
              <span className="text-white font-bold">📷</span>
            </div>
            <h4 className="font-semibold text-lg mb-2">{meal.name}</h4>
            <p className="text-sm text-gray-600 mb-2">
              Nutritional Information (per serving)
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                Calories:{" "}
                <span className="text-red-500 font-medium">
                  {meal.calories} kcal
                </span>
              </li>
              <li>Protein: {meal.protein} g</li>
              <li>Fat: {meal.fat} g</li>
              <li>Carbohydrates: {meal.carbs} g</li>
              <li>Fiber: {meal.fiber} g</li>
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow text-center">
        <h4 className="font-semibold text-lg mb-4">Nutrition Summary</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>
            Calories:{" "}
            <span className="text-red-500 font-medium">
              {summary.calories} kcal
            </span>
          </li>
          <li>Protein: {summary.protein} g</li>
          <li>Fat: {summary.fat} g</li>
          <li>Carbohydrates: {summary.carbs} g</li>
          <li>Fiber: {summary.fiber} g</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
