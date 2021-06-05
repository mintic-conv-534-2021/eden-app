import React, {useState, useEffect} from "react";
import OrganizationModule from "./organizationModule/organizationModule";
import ProductModule from "./productModule/productModule";

const Modules = (props) => {
  const [selectedCategory, setSelectedCategory] = useState({});

  useEffect(() => {
    setSelectedCategory(props);
  }, [props]);

  return (
    <div className="module-manager">
      <ProductModule item={selectedCategory} />
      <OrganizationModule item={selectedCategory} />
      <ProductModule item={selectedCategory} />
    </div>
  );
};

export default Modules;
