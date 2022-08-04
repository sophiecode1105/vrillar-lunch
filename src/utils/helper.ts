export const createMenuData = (menus: string[]) => {
  const result = [];
  for (let i = 0; i < menus.length; i++) {
    const data = { id: i, name: menus[i], select: false };
    result.push(data);
  }
  return result;
};

export const shuffleArr = (value: any) => {
  let j;
  let x;
  let i;

  for (i = value.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = value[i - 1];
    value[i - 1] = value[j];
    value[j] = x;
  }
  return value;
};
