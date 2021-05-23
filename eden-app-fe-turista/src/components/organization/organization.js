import React from "react";
import { Typography } from 'antd';
import Modules from "../modules/modules";
import './organization.css';

const { Title } = Typography;

const Organization = () => (
    <div className="organization">
        <Title>Paseo el Edén - Organización</Title>
        <div className="breadcrumb">Home / Modulo / Organización</div>
        <div className="banner">
            <div className="card-item">
                {/* Place a banner here for your organization */}
            </div>
        </div>
        <div className="description">
            <h2>Nombre Empresa</h2>
            <p>Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                Mauris massa. Vestibulum lacinia arcu eget nulla. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra sagittis sagittis ipsum. 
                Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
                Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent
            </p>
            <p className="address">Cra. 12 # 5 - 91, Barrio Sta. Barbara, La Tebaida - Cundinamarca</p>
            <p className="email-address">tebaida@paseoelden.com</p>
        </div>
        <Modules></Modules>
    </div>
)

export default Organization;