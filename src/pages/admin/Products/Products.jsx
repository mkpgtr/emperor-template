import React from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { Tab } from '@headlessui/react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { GrDocumentUpdate } from 'react-icons/gr'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import ProductTabs from '../../../components/UI/dashboard/Tabs/ProductTabs'
import { ManageProductItems } from '../../../data/ManageProducts'




const Products = () => {
    return (
        // <div className='flex w-100 border border-blue-100 justify-between'>
        <>
            <section className="py-5 text-center">
                <Tab.Group>

                    <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
                        <Tab.List>




                            <div className="mt-12 grid grid-auto-fit-sm gap-8">
                                <Tab>

                                    <div className="grid1-item">
                                        <span >
                                            <span><IoIosAddCircleOutline fontSize={30} cursor={'pointer'} /></span>
                                        </span>
                                        <h3>Add New Product</h3>
                                    </div>
                                </Tab>


                                <Tab>

                                    <div className="grid1-item">
                                        <span className="">
                                            <span><GrDocumentUpdate cursor='pointer' fontSize={30} /></span>
                                        </span>
                                        <h3>Modify A Product</h3>
                                    </div>
                                </Tab>

                                <Tab>

                                    <div className="grid1-item">
                                        <span className="">
                                            <span><AiOutlineUnorderedList fontSize={30} cursor={'pointer'} /></span>
                                        </span>
                                        <h3>Show All Products</h3>
                                    </div>
                                </Tab>


                            </div>
                        </Tab.List>
                    </div>

                    <Tab.Panels>
                        {ManageProductItems.TabContent.map((tabContentItem)=>{
                            return <Tab.Panel key={tabContentItem.id}>
                               <div className='mt-10 border border-5'>
                               {tabContentItem.content}
                               </div>
                            </Tab.Panel>
                        })}
                    </Tab.Panels>
                </Tab.Group>
            </section>




        </>
    )
}

export default Products