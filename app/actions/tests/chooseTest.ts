"use server";
import { redirect } from "next/navigation";

const chooseTest = async (formData: FormData) => {
  const groupId = formData.get("groupId");
  redirect(`/scrudu/en-ga?groupId=${groupId}`);
};

export default chooseTest;
