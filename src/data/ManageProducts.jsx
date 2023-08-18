import Add from "../pages/admin/CRUD/Products/Add";
import ShowAllProducts from "../pages/admin/CRUD/Products/ShowAllProducts";
import Update from "../pages/admin/CRUD/Products/Update";

export const ManageProductItems = {
    "TabItems" : [
      {
        id:1,
        text:"Add Products"
      },
      {
        id:2,
        text:"Modify Product"
      },
      {
        id:3,
        text:"Show Products"
      },

    ],
    "TabContent":[
        {
            id:1,
            content: <Add />
        },
        {
            id:2,
            content: <Update />
        },
        {
            id:3,
            content:<ShowAllProducts/>
        }
    ]
}