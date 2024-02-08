export interface IMegaMenuUI {
  mobileMenuItemsBehavior: string,
  mobileMenuType: any,
  mobileMenuDepartmentsTitle: string,
  mobileMenuDepartmentsTitleOn: boolean,
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

export interface ICategoryGroup {
  menuObject: IMenuObject[]
  mobileMenuItemsBehavior: string
  mobileMenuType: string
}

interface IMenuContext {
  mobileMenuType: string,
  mobileMenuDepartmentsTitle: string,
  mobileMenuDepartmentsTitleOn: boolean,
  mobileMenuItemsBehavior: string,
  mobileMenuIconSize: number,
  megaMenuData: IMenuObject[],
  setMobileMenuType: (type: string) => void,
  setMobileMenuDepartmentsTitle: (title: string) => void,
  setMobileMenuDepartmentsTitleOn: (on: boolean) => void,
  setMobileMenuItemsBehavior: (behavior: string) => void,
  setMobileMenuIconSize: (size: number) => void,
  setMegaMenuData: (data: IMenuObject[]) => void,
}

export interface IMenuItem {
  display: boolean,
  hasChildren: boolean,
  icon: string,
  id: string,
  name: string,
  order: number,
  slug: string
}
