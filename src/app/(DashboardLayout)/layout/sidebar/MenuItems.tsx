import {
  IconAperture,
  IconGraph,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconReportMoney,
  IconShoppingCartCopy,
  IconUserPlus,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "HOME",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Sales",
    icon: IconReportMoney,
    href: "/sales",
  },
  {
    id: uniqueId(),
    title: "Graph",
    icon: IconGraph,
    href: "/graph",
  },
  {
    id: uniqueId(),
    title: "Products",
    icon: IconShoppingCartCopy,
    href: "/products",
  },
  {
    navlabel: true,
    subheader: "AUTH",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
 
];

export default Menuitems;


