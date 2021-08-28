import React from 'react';
import styles from './table-add.module.less';
// import { dataToArray } from '../../../../utils/data-to-array';
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
                      <th style={{ position: 'sticky', left: 0, top: 0, zIndex: 3 }}>
                        <div>{elem}</div>
                      </th>
                    ) : (
                      <th style={{ position: 'sticky', top: 0, zIndex: 3 }}>{elem}</th>
                    ),
                  )}
                </tr>
              </thead>
              {/* {workers.map((elem, index) => {
                  const tagsCol = elem.tags.length;
                  const dateCol = elem.dateAndTime.length;
                  const galleryCol = elem.gallery.length;
                  const rowCol = Math.max(tagsCol, dateCol, galleryCol);
                  return (
                    <tr key={index}>
                      {dataToArray(elem).map((el, indx) => {
                        if (indx === 0) {
                          return (
                            <th
                              rowSpan={rowCol}
                              key={indx + 'dw'}
                              style={{ position: 'sticky', left: 0 }}
                            >
                              <div style={{ backgroundColor: (index + 1) % 2 === 0 && 'white' }}>
                                {el}
                              </div>
                            </th>
                          );
                        }
                        return <td key={indx + 'gr'}>{el}</td>;
                      })}
                    </tr>
                  );
                })} */}
              {workers.map((elem, index) => {
                const tagsCol = elem.tags.length;
                const dateCol = elem.dateAndTime.length;
                const galleryCol = elem.gallery.length;
                const rowCol = Math.max(tagsCol, dateCol, galleryCol);
                return (
                  <tbody>
                    <tr key={index}>
                      <td style={{ position: 'sticky', left: 0 }} rowSpan={rowCol}>
                        {elem.id}
                      </td>
                      <td rowSpan={rowCol}>{elem.category}</td>
                      <td rowSpan={rowCol}>{elem.filter}</td>
                      {elem.tags.map(el => (
                        <tr>
                          <td>{el}</td>
                        </tr>
                      ))}
                      <td rowSpan={rowCol}>{elem.organizer}</td>
                      {elem.gallery.map(el => (
                        <tr>
                          <td>{el}</td>
                        </tr>
                      ))}
                      <td rowSpan={rowCol}>{elem.address}</td>
                      <tr>
                        <td>{elem.price.children.weekdays}</td>
                      </tr>
                      <tr>
                        <td>{elem.price.children.weekend}</td>
                      </tr>
                      <td rowSpan={rowCol}>{elem.price.from}</td>
                      <tr>
                        <td>{elem.price.children.weekdays}</td>
                      </tr>
                      <tr>
                        <td>{elem.price.children.weekend}</td>
                      </tr>
                      <td rowSpan={rowCol}>
                        <input type="checkbox" checked={elem.permanentEvent} />
                      </td>
                      {elem.dateAndTime.map(el => (
                        <tr>
                          <td>{el}</td>
                        </tr>
                      ))}
                      <td rowSpan={rowCol}>{elem.nameOfLeisure}</td>
                      <td rowSpan={rowCol}>{elem.ageRestrictions}</td>
                      <td rowSpan={rowCol}>{elem.buttonType}</td>
                      <td rowSpan={rowCol}>{elem.description}</td>
                      <td rowSpan={rowCol}>{elem.whatCanYouDo}</td>
                      <td rowSpan={rowCol}>{elem.infrastructure}</td>
                      <td rowSpan={rowCol}>{elem.instruction}</td>
                      <td rowSpan={rowCol}>{elem.additionalInformation}</td>
                      <td rowSpan={rowCol}>{elem.dateAdded}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
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
      )}
    </>
  );
}
