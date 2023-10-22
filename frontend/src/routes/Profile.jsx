import MyAccount from "../../UI/Account/MyAccount/MyAccount";
import ManageAccount from "../../UI/Account/ManageAccount/ManageAccount";
import { TabTitle } from "../../../utils/General";
import React from 'react'

export const Profile = () => {

    TabTitle("My Account - EthioWekil")

    return ( 
        <MyAccount />
     );
}

export const AccountManager = () => {

    TabTitle("My Account - EthioWekil")

    return (
        <ManageAccount />
    );
}