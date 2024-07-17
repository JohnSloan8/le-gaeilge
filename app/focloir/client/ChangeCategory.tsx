import type { CategoryModel } from "@/types/models";

interface ChangeCategoryProps {
  categoryId: number | null;
  handleChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  categories: CategoryModel[] | null;
}

export default function ChangeCategory({
  categoryId,
  handleChangeCategory,
  categories,
}: ChangeCategoryProps) {
  return (
    <div className="w-full">
      <select
        value={categoryId !== null ? String(categoryId) : "-1"}
        onChange={handleChangeCategory}
        className="block w-full px-4 py-2 bg-white text-base border-2 border-primary-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-400 focus:border-primary-400"
      >
        <option
          value={"-1"}
          className="text-gray-700"
        >{`go leir (all)`}</option>
        {categories?.map((category, index) => (
          <option
            key={index}
            value={String(category.id)}
            className="text-gray-700"
          >{`${category.name_ga}${category.name_en !== null ? " (" + category.name_en + ")" : ""}`}</option>
        ))}
      </select>
    </div>
  );
}
