import React from 'react';
import styles from './table-add.module.less';

export function TableAdd({ className }) {
  return (
    <div>
      Таблица
      <table className={`${styles.table} ${className || ''}`}>
        <thead>
          <tr>
            <th>
              {/* <span className="jss2310 jss2304 jss2300 jss2294 jss2299 _view_raised-head-unchecked__30Zji _view_checkbox__AgJ4n">
                <span className="jss2309">
                  <svg
                    className="jss2313"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                  </svg>
                  <input className="jss2303" type="checkbox" data-indeterminate="false" value="" />
                </span>
                <span className="jss2432"></span>
              </span> */}
            </th>
            <th>Ячейка</th>
            <th>Ячейка</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ячейка</td>
            <td>Ячейка</td>
            <td>Ячейка</td>
          </tr>
          <tr>
            <td>Ячейка</td>
            <td>Ячейка</td>
            <td>Ячейка</td>
          </tr>
          <tr>
            <td>Ячейка</td>
            <td>Ячейка</td>
            <td>Ячейка</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
