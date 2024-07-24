import type { CategoryModel } from "@/types/models";

interface ChangeCategoryProps {
  categoryId?: number;
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
        value={categoryId}
        onChange={handleChangeCategory}
        className="block w-full pl-1 py-2 bg-gray-200 text-sm rounded-sm outline-none"
      >
        <option
          value={"-1"}
          className="text-gray-700"
        >{`Go Leir Catagóir (All Categories)`}</option>
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
