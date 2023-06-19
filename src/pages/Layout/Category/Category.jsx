import { useEffect } from "react";
import { useState } from "react";
import CategoryCard from "./CategoryCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";


const Category = () => {

    const [categories, setCategories] = useState([]);
    
    // useEffect( () => {
    //     fetch('https://toy-market-server-flax.vercel.app/allToys/:id')
    //     .then(res => res.json())
    //     .then(data => {
    //         setCategories(data)
    //     })
    // }, [])

    const handleBtnActive = e => {
        const url = `https://toy-market-server-rho-ten.vercel.app/category/${e}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCategories(data)
        })
    }

    useEffect( () => {
        fetch('https://toy-market-server-rho-ten.vercel.app/category/Star war')
       
        .then(res => res.json())
        .then(data => {
            setCategories(data)
        })
    }, [])


    return (
        <div className=" py-10">
            <div className="w-10/12 mx-auto">
                <div>
                    <div className="text-3xl md:text-5xl font-bold text-center mb-10">
                        <h2 className="text-violet-700 mb-6">Products Categories</h2>

                        <hr className="w-60 mx-auto border-4 border-violet-600 mb-10" />
                    </div>

                    <Tabs>
                        <TabList>
                            
                            <Tab onClick={() => handleBtnActive("Star war")}>Star war</Tab>
                            <Tab onClick={() => handleBtnActive("Avanger")}>Avanger</Tab>
                            <Tab onClick={() => handleBtnActive("Transformer")}>Transformer</Tab>
                        </TabList>

                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                    </Tabs>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {
                            categories.map(singleCat => <CategoryCard
                                key={singleCat._id}
                                singleCat={singleCat}
                            >
                            </CategoryCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;