import React from "react";
import OrganizationModule from "./organizationModule/organizationModule";
import ProductModule from "./productModule/productModule";

const Modules = () => (
    <div className="module-manager">
        <ProductModule />
        <OrganizationModule />
    </div>
)

export default Modules;
