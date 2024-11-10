"use client";

import { SmallText, SubmitButton, MediumText } from "@/components";
import { chooseTest } from "../actions";
import type { CategoryModel, GroupModel } from "@/types/models";
import { useState } from "react";

interface ControllerProps {
  groups: GroupModel[];
  categories: CategoryModel[];
}

export default function Controller({ groups, categories }: ControllerProps) {
  // const [groupId, setGroupId] = useState<number>(-1);
  const [displayCategories, setDisplayCategories] =
    useState<CategoryModel[]>(categories);

  const handleChangeGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== "-1") {
      const id = Number(e.target.value);
      // setGroupId(id);
      setDisplayCategories(categories.filter((c) => c.group_id === id));
    } else {
      // setGroupId(-1);
      setDisplayCategories(categories);
    }
  };

  return (
    <form action={chooseTest} className="bg-white p-6 rounded shadow-md m-2">
      <MediumText
        text_ga="Frásaí a Roghnú"
        text_en="Choose Phrases"
        centered={true}
      />

      <div className="my-4">
        <label htmlFor="groupId" className="block text-gray-700 mb-1">
          <SmallText text_en="Group" text_ga="Grúpa" />
        </label>
        <select
          id="groupId"
          name="groupId"
          className="block w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChangeGroup}
        >
          <option value={-1}>{`Go Leir Grúpa (All Groups)`}</option>
          {groups?.map((group, index) => (
            <option
              key={index}
              value={group.id}
              className="text-gray-700"
            >{`${group.name_ga} (${group.name_en})`}</option>
          ))}
        </select>
      </div>

      <div className="my-4">
        <label htmlFor="categoryId" className="block text-gray-700 mb-1">
          <SmallText text_en="Category" text_ga="Categóir" />
        </label>
        <select
          id="categoryId"
          name="categoryId"
          className="block w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="-1">Go leir (all)</option>
          {displayCategories.map((category, index) => (
            <option
              key={index}
              value={String(category.id)}
              className="text-gray-700"
            >{`${category.name_ga} (${category.name_en})`}</option>
          ))}
        </select>
      </div>

      <div className="my-4">
        <label htmlFor="noQuestions" className="block text-gray-700 mb-1">
          <SmallText text_en="No. of Questions" text_ga="Líon Ceisteanna" />
        </label>
        <select
          id="noQuestions"
          name="noQuestions"
          className="block w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      <div className="flex justify-center pt-4">
        <SubmitButton>
          <div className="w-64 border rounded-md bg-primary-600">
            <SmallText text_ga="dul" text_en="go" dark={true} />
          </div>
        </SubmitButton>
      </div>
    </form>
  );
}
