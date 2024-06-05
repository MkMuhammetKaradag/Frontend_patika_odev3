import { IconNames } from "./Geticon";
import SkilCard from "./SkilCard";
export interface skilsDataType {
  iconName: IconNames;
  title: string;
  desc: string;
}

const skilsData: skilsDataType[] = [
  {
    iconName: "FaRegHeart",
    title: "High quality people",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,",
  },
  {
    iconName: "Fa500Px",
    title: "Learning clubs",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,e",
  },
  {
    iconName: "FaBootstrap",
    title: "High quality people",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,",
  },
  {
    iconName: "FaBtc",
    title: "High quality people",
    desc: "High quality people",
  },
  {
    iconName: "FaCreditCard",
    title: "High quality people",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,",
  },
  {
    iconName: "FaCity",
    title: "High quality people",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,",
  },
  {
    iconName: "FaChartPie",
    title: "High quality people",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,",
  },
];
const Skils = () => {
  return (
    <div className="grid gap-10 mt-10 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {skilsData.map((item, index) => (
        <SkilCard item={item} index={index}></SkilCard>
      ))}
    </div>
  );
};

export default Skils;
