"use server";
import { redirect } from "next/navigation";

const chooseTest = async (formData: FormData) => {
  const groupId = formData.get("groupId");
  const categoryId = formData.get("categoryId");
  const noQuestions = formData.get("noQuestions");
  redirect(
    `/scrudu/en-ga?groupId=${groupId}&categoryId=${categoryId}&noQuestions=${noQuestions}`,
  );
};

export default chooseTest;
