import React from 'react';

const Card = (props) => {
  const { title, path, type } = props;
  const { handleClickCard } = props;

  return (
    <div style={styles.container} onClick={() => handleClickCard(`/${type}/${path}`)}>
      {title}
      {path}
    </div>
  );
};

Card.defaultProps = {
  title: '',
  path: '',
  handleClickCard: () => {}
};

const styles = {
  container: {
    width: '25%',
    height: '5%',
    cursor: 'pointer',
    border: '1px solid #f00'
  }
};

export default Card;
