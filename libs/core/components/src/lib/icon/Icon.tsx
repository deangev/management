import { styled } from '@mui/material/styles';
import Theme from '@sagi/core/theme';
import { RecuresiveKeyOf } from '@sagi/core/types';
import { memo, MemoExoticComponent } from 'react';
import icons, { IconType } from './icons';

export type IconColorType = RecuresiveKeyOf<typeof Theme.palette>;

export type IconProps = {
  icon: IconType;
  size?: number;
  color?: IconColorType;
};

const Icon: MemoExoticComponent<(props: IconProps) => JSX.Element> = memo(
  (props) => {
    const { icon, size = 16, color } = props;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const CurrentIcon = icons[icon];

    let themeColor;
    if (color) {
      const currentColor = color?.split('.') || [];
      const mainPaletteKey = currentColor[0];
      const secondPaletteKey = currentColor[1];
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      themeColor = Theme.palette[mainPaletteKey];
      if (secondPaletteKey) {
        themeColor = themeColor[secondPaletteKey];
      }
    }

    return (
      <IconContainer>
        {CurrentIcon ? (
          <CurrentIcon
            color={themeColor}
            style={{
              height: size,
              width: size,
            }}
          />
        ) : (
          <div>No Icon has been found</div>
        )}
      </IconContainer>
    );
  }
);

const IconContainer = styled('div')(({ theme, color }) => ({
  display: 'grid',
  placeItems: 'center',
  '& > *': {
    color: `${color || theme.palette.secondary.main} !important`,
  },
}));

export default Icon;
