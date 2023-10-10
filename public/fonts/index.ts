import {
  Work_Sans,
  Darker_Grotesque,
  Outfit,
  Poppins,
  Turret_Road,
} from "next/font/google";

export const workSans = Work_Sans({ subsets: ["latin"] });

export const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const outfit = Outfit({ subsets: ["latin"] });

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const turretRoad = Turret_Road({
  subsets: ["latin"],
  weight: "700",
});
