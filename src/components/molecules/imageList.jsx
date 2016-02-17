import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 400,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const tilesData = [
  {
    img: '//lorempixel.com/300/300/nature/',
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
  },
  {
    img: '//lorempixel.com/300/300/nature/',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: '//lorempixel.com/300/300/nature/',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: '//lorempixel.com/300/300/nature/',
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: '//lorempixel.com/300/300/nature/',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: '//lorempixel.com/300/300/nature/',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: '//lorempixel.com/300/300/nature/',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: '//lorempixel.com/300/300/nature/',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const ImageList = () => (
  <div style={styles.root}>
    <GridList
      cols={2}
      cellHeight={200}
      padding={1}
      style={styles.gridList}
    >
      {tilesData.map(tile => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default ImageList;
