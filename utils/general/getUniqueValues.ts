const getUniqueValues = (list: any[], key: string) => {
  const uniqueValues: any[] = [];

  list.forEach((item: any) => {
    const value: any = item[key];
    if (!uniqueValues.includes(value)) {
      uniqueValues.push(value); // Push value instead of entire object
    }
  });

  return uniqueValues;
};

export default getUniqueValues;
