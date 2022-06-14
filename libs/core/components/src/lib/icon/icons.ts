import { AiOutlineClose } from 'react-icons/ai';
import { BiBuildings, BiHome, BiMessageSquareAdd } from 'react-icons/bi';
import { BsCalendarWeekFill } from 'react-icons/bs';
import { FaSuitcaseRolling, FaTasks } from 'react-icons/fa';

const icons = {
  add: BiMessageSquareAdd,
  buildings: BiBuildings,
  calendar: BsCalendarWeekFill,
  close: AiOutlineClose,
  home: BiHome,
  suitcase: FaSuitcaseRolling,
  tasks: FaTasks,
};

type IconType = keyof typeof icons;

export type { IconType };
export default icons;
