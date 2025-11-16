export type addUserData = {
  branchId: string;
  mobile: string;
  id?: string;
  fullName: string;
  userName: string;
  phone?: string;
  personelCode?: string;
  address?: string;
  email?: string;
  parentId?: string;
  // برای اینکه نقش تاپل نشه اینجوری تعریف می کنیم تاپل یعنی اینکه حتما دقیقا یک ارایه داشته باشد ن کمتر و ن بیشتر اما ما می خواهیم کاربر بتواند نقش های مختلف بگیرد
  roles: {
    id: string;
  }[];
};
