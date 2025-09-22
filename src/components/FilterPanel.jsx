export default function FilterPanel() {
  return (
    <div className="flex justify-between mb-6 items-center">
      <div className="text-gray-700 font-medium">13 Items</div>
      <div className="flex space-x-6 items-center">
        <label>
          Sort By:
          <select className="border border-gray-300 rounded p-1 ml-2">
            <option>Name</option>
            <option>Price</option>
          </select>
        </label>
        <label>
          Show:
          <select className="border border-gray-300 rounded p-1 ml-2">
            <option>12</option>
            <option>24</option>
          </select>
        </label>
      </div>
    </div>
  );
}
