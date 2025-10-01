export interface IEnterprise {
  id: number,
  name: string,
  departments: IDepartment[]
}
export interface IDepartment {
  id: number,
  name: string,
  employees_count: number;
}