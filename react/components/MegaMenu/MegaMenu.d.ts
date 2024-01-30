export interface IMegaMenuUI {
  mobileMenuItemsBehavior: string,
  mobileMenuType: any,
  mobileMenuDepartmentsTitle: string,
  mobileMenuDepartmentsTitleOn: boolean,
  menuObject: IMenuObject[]
}

export interface IMenuObject {
  display: boolean
  icon: string
  id: string
  name: string
  order: number
  slug: string
  menu: IMenuObject[] | null
}

export interface IDepartmentGroup {
  menuObject: IMenuObject[]
  mobileMenuItemsBehavior: string
  mobileMenuType: string
}
