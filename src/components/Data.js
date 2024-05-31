import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { keyboard } from "@testing-library/user-event/dist/keyboard";

export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Pot",
    },
    {
        icon: UilUsersAlt,
        heading: "Status",
    },
    {
        icon: UilPackage,
        heading: "Control",
    },
    

];

export const CardsData = [
    {
        title: "Sales",
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
      },
      {
        title: "Revenue",
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
      },
      {
        title: "Expenses",
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
      },
    ];
    