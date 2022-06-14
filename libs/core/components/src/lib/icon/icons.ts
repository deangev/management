import { AiOutlineClose } from 'react-icons/ai';
import { BiBuildings, BiHome, BiMessageSquareAdd } from 'react-icons/bi';
import { BsCalendarWeekFill } from 'react-icons/bs';
import { FaSuitcaseRolling, FaTasks } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

const icons = {
  add: BiMessageSquareAdd,
  buildings: BiBuildings,
  calendar: BsCalendarWeekFill,
  close: AiOutlineClose,
  home: BiHome,
  menu: FiMenu,
  suitcase: FaSuitcaseRolling,
  tasks: FaTasks,
};

export type IconType = keyof typeof icons;

export default icons;
