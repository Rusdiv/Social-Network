import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './index.module.css'

const Paginator = ({pagesCount, onPageChanged}) => {
  const portionSize = 10;
  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const [selectedPage, setSelectetPage] = useState(1);
  const left = (portionNumber - 1) * portionSize + 1;
  const rigth = portionNumber * portionSize ;
  let pages = [];

  for(let i = 1; i< pagesCount; i++){
      pages.push(i)
  }
  
  return (
    <div className = {styles.main}>
      {portionNumber > 1 && <Button variant="contained" color="primary" onClick={() => setPortionNumber(portionNumber - 1)}>PREV</Button>}
        <div className={styles.pagBlock}>
          {pages.filter( p => p >= left && p <= rigth).map( p => {
            return <span className={selectedPage == p ? styles.selectedPage : styles.block} onClick={() => {
              onPageChanged(p)
              setSelectetPage(p)
            }} key={p}>
              {p}
          </span>
        })}
        </div>
      {portionCount > portionNumber && <Button variant="contained" color="primary" onClick={() => setPortionNumber(portionNumber + 1)}>Next</Button>}
    </div>
  )
}

export default Paginator;