import React from 'react';
import styles from './table-add.module.less';
import { dataToArray } from '../../../../utils/data-to-array';
import { workerTableHeaders, workers } from '../../utils';

export function TableAdd({ className }) {
  return (
    <>
      {workers && (
        <div className={`${styles.container} ${className || ''}`}>
          <div className={`${styles.wrapper}`}>
            <table className={`${styles.table} ${className || ''}`}>
              <thead>
                <tr>
                  {workerTableHeaders.map((elem, index) =>
                    index === 0 ? (
                      <th>
                        <div>{elem}</div>
                      </th>
                    ) : (
                      <th>{elem}</th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {dataToArray(workers).map((elem, index) => (
                  <tr key={index}>
                    {Object.values(elem).map(
                      (el, indx) => console.log(el),
                      // indx === 0 ? (
                      //   <th key={indx + 'dw'}>
                      //     <div style={{ backgroundColor: 'white' }}>{el}</div>
                      //   </th>
                      // ) : (
                      //   <td key={indx + 'gr'}>{el}</td>
                      // ),
                    )}
                  </tr>
                ))}
                {/* {dataToArray(workers).map(elem => console.log(elem))} */}
                {/* <tr>
                  <th>
                    <div style={{ backgroundColor: 'white' }}>2</div>
                  </th>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                </tr>
                <tr>
                  <th>
                    <div>3</div>
                  </th>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                  <td>Ячейка</td>
                </tr> */}
              </tbody>
            </table>
            <div className={`${styles['table-block__bottom']}`}>
              <div className={`${styles['pagination-str']}`}>
                <button
                  className={`${styles['pag-arrow__btn']}`}
                  type="button"
                  disabled=""
                  aria-label="Previous Page"
                >
                  <span>
                    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
                    </svg>
                  </span>
                </button>
                <button
                  className={`${styles['pag-arrow__btn']}`}
                  type="button"
                  disabled=""
                  aria-label="Previous Page"
                >
                  <span>
                    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
