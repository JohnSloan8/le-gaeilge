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
        className="block w-full px-4 py-2 bg-gray-200 text-base rounded-sm outline-none"
      >
        <option
          value={"-1"}
          className="text-gray-700"
        >{`go leir (all)`}</option>
        {categories?.map((category, index) => (
          <option
            key={index}
            value={String(category.id)}
            className="text-gray-700 outline-none border-none"
          >{`${category.name_ga}${category.name_en !== null ? " (" + category.name_en + ")" : ""}`}</option>
        ))}
      </select>
    </div>
  );
}
