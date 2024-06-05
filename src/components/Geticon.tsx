import * as Icons from "react-icons/fa";
export type IconNames = keyof typeof Icons;
interface IconComponentProps {
  iconName: IconNames;
}
const Geticon: React.FC<IconComponentProps> = ({ iconName }) => {
  const Icon = Icons[iconName];
  // Eğer ikon bulunamazsa varsayılan bir ikon gösterin
  return Icon ? <Icon /> : <Icons.FaQuestion />;
};

export default Geticon;
