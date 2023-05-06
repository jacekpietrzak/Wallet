import React from 'react';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from './EditIcon/EditIcon';
import { styled } from '@mui/material/styles';
import styles from './TableRow.module.scss';
import { Icon } from '@mui/material';

const DeleteButton = styled(Button)(({ theme }) => ({
  margin: 0,
  fontFamily: 'Circe',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '1em',
  textTransform: 'capitalize',
  width: '67px',
  height: '26px',
  padding: '4px 12px',
}));

export default function TableBodyRow({ data }) {
  const dynamicCss = data.type === '-' ? styles.expense : styles.income;

  return (
    <tr>
      <td>{data.date}</td>
      <td data-type="type">{data.type}</td>
      <td>{data.category}</td>
      <td>{data.comment}</td>
      <td data-type="sum" className={dynamicCss}>
        {data.sum}
      </td>
      <td data-type="edit">
        <div className={styles.stack}>
          <IconButton aria-label="edit">
            <EditIcon className={styles.icon} />
          </IconButton>
          <DeleteButton disableElevation variant="contained">
            Delete
          </DeleteButton>
        </div>
      </td>
    </tr>
  );
}
