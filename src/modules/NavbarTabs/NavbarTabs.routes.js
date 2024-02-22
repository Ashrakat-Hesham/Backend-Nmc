import Router from 'express'
import * as NavbarTabsData from './NavbarTabsController.js'
const NavbarTabsRouter = Router()


NavbarTabsRouter.route('/navbartabsdata')
    .post(NavbarTabsData.addNavberTabsPageData)
    .get(NavbarTabsData.getAllData)
NavbarTabsRouter.route('/navbartabsdata/:id')
    .put(NavbarTabsData.updateData)
    .delete(NavbarTabsData.deleteData)

export default NavbarTabsRouter;