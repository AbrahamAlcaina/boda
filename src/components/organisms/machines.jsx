import React, { PropTypes } from 'react';
import { GridList, GridTile, IconButton } from 'material-ui';
import { ActionStars } from 'material-ui/lib/svg-icons';

const Machines = ({ machines }) => {
  const gradientBg =
   'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)';
  return (
    <GridList
      cols={2}
      cellHeight={200}
      padding={1}
    >
        {
          machines.map(machine => (
            <GridTile key={machine.name}
              title={machine.name}
              subtitle={<span>with {machine.feature}</span>}
              titleBackground={gradientBg}
              titlePosition={'top'}
              cols={machine.featured ? 2 : 1}
              rows={1}
              actionIcon={<IconButton><ActionStars color="gold"/></IconButton>}
            >
              <img src={machine.image} />
            </GridTile>
          ))
        }
    </GridList>
  );
};

Machines.propTypes = {
  machines: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Machines;
