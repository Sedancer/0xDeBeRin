import React, { useEffect } from 'react';
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Tooltip,
} from '@mui/material';
import statusColors from '@/constants/status';

import InfoIcon from '@mui/icons-material/Info';
import { AppDispatch, useAppSelector } from '@/store';
import { getPaths, setPage, setRowsPerPage, setOrder } from '@/store/paths';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Exchange from '@/components/Exchange';
import { useParams } from 'react-router-dom';
import EmptyTableData from '@/containers/EmptyData';

function EnhancedTableHead() {
  const { t } = useTranslation();

  const dispatch = useDispatch<AppDispatch>();
  const {
    orderBy,
    order
  } = useAppSelector((state) => state.paths);

  const tableHead = [
    {
      label: 'foundIn',
    },
    {
      label: 'duration',
    },
    {
      label: 'exchange',
    },
    {
      label: 'path',
    },
    {
      label: 'profit',
    },

    {
      label: 'min_profit',
    },
    {
      label: 'max_profit',
    },
  ];

  const sortHandler = (property: string) => {
    dispatch(setOrder(property));
  };


  return (
    <TableHead>
      <TableRow>
        {tableHead.map(({ label }) => (
          <TableCell
            key={label}
            padding={'normal'}
            align='center'
            style={{ fontWeight: 'bold' }}
            sortDirection={orderBy === label ? order : false}
          >
            <TableSortLabel
              active={orderBy === label}
              direction={order}
              onClick={() => sortHandler(label)}
            >

              {label !== 'exchange' && (
                <Tooltip title={t(`${label}Tooltip`)}>
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              )}
              {t(label)}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface HeadCell {
  data: {
    id: string;
    created_at: string;
    updated_at: string;
    duration: string;
    exchange: string;
    path: string;
    profit: string;
    min_profit: string;
    max_profit: string;
    status: string;
  }
}

export default function EnhancedTable() {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { language } = useParams();
  const {
    data,
    count,
    page,
    rowsPerPage,
    defaultLimits,
    orderBy,
    order
  } = useAppSelector((state) => state.paths);

  const {
    isFilterApply
  } = useAppSelector((state) => state.filters);


  const update = () => dispatch(getPaths())


  useEffect(() => {
    update();
    const interval = setInterval(() => {
      update();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, page, rowsPerPage, orderBy, order, language, isFilterApply]);

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setRowsPerPage(parseInt(event.target.value, 10)))
    dispatch(setPage(0));
  };

  return (
    <>
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          size={'small'}
        >
          <EnhancedTableHead
          />
          {(data.length > 0) && (
            <TableBody>
              {
                data?.map(({
                  found_in,
                  id,
                  created_at ='',
                  updated_at ='',
                  duration,
                  exchange,
                  path,
                  profit,
                  min_profit,
                  max_profit,
                  status,
                }) => {
                  const backgroundSra = statusColors[status];
                  return (
                    <TableRow
                      key={id}
                      sx={{
                        background: backgroundSra
                      }}
                    >
                      <TableCell>
                        <Tooltip title={`Created at: ${created_at} Updated at: ${updated_at}`}>
                          <span>{found_in}</span>
                        </Tooltip>
                      </TableCell>
                      <TableCell align='center'>{duration}</TableCell>
                      <TableCell align='center'><Exchange exchange={exchange} /></TableCell>
                      <TableCell align='center'>{path}</TableCell>
                      <TableCell align='center'>{profit}</TableCell>
                      <TableCell align='center'>{min_profit}</TableCell>
                      <TableCell align='center'>{max_profit}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {(data.length === 0) && <EmptyTableData />}
      <TablePagination
        rowsPerPageOptions={defaultLimits}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage={t('Rows per page')}
      />
    </>
  );
}