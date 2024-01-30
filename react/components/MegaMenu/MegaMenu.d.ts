export interface IMegaMenuUI {
  mobileMenuType: any,
  menuObject: IMenuObject[]
}

interface IMenuObject {
  display: boolean
  icon: string
  id: string
  name: string
  order: number
  slug: string
  menu: IMenuObject[] | null
}
