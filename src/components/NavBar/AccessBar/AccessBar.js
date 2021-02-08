import Image from 'next/image';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';

import {
  StyledAccessBar,
  StyledCloseIcon,
  StyledAccessBarLink,
  StyledAccessBarMobile,
  StyledSearchIcon
} from './AccessBar.styled';
import Link from '@components/Link/Link';

const AccessBar = ({ links }) => {
  const [opened, setOpened] = useState(false);
  const toggle = () => setOpened(!opened);

  const memoizedLinks = useMemo(
    () =>
      links.map((link, index) => (
        <StyledAccessBarLink key={`access-bar-item-${index}--${link.text}`}>
          <Link href={link.url}>{link.text}</Link>
        </StyledAccessBarLink>
      )),
    [links]
  );
  return (
    <>
      <StyledAccessBarMobile opened={opened} onClick={toggle}>
        <Image
          priority
          layout='fill'
          quality={100}
          loading='eager'
          objectFit='cover'
          src='/icons/menu.svg'
        />
      </StyledAccessBarMobile>
      <StyledCloseIcon opened={opened} onClick={toggle}>
        <Image
          priority
          layout='fill'
          quality={100}
          loading='eager'
          objectFit='cover'
          src='/icons/close-access-bar.svg'
        />
      </StyledCloseIcon>
      <StyledAccessBar opened={opened}>
        {memoizedLinks}
        <StyledAccessBarLink key='access-bar-item--search-icon`'>
          <Link href='https://google.com/'>
            <StyledSearchIcon>
              <Image
                quality={100}
                loading='eager'
                layout='fill'
                objectFit='cover'
                color='blue'
                src='/icons/search.svg'
              />
            </StyledSearchIcon>
          </Link>
        </StyledAccessBarLink>
      </StyledAccessBar>
    </>
  );
};

AccessBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string
    })
  ).isRequired
};

export default AccessBar;
