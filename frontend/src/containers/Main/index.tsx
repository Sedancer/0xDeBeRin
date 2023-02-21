import Table from "@/containers/MainTable";
import Filter from '@/containers/MainFilter';
import { Grid, IconButton, styled, TablePagination, Tooltip } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, useAppSelector } from '@/store';
import { setPage, setRowsPerPage } from "@/store/paths";
import Legend from "@/components/Legend";
// import { AppDispatch } from "@/store";
export const DEFAULT_PAGE = 0;
export const DEFAULT_LIMIT = 20;
export const DEFAULT_LIMITS = [DEFAULT_LIMIT, 50, 100];

const MainWrapper = styled('div')(
  () => `
  margin: 16px 8px 32px 8px;
  overflow: hidden;
`
);
const MainHeader = styled('div')(
  () => `
  margin: 0 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,
);

const MainTableAndFilterWrapper = styled('div')(
  () => `
  display: flex;
  width: 100%;
  background: #fff;
`,
);

const MainTableWrapper = styled('div')(
  () => `
   flex: 1 1 auto;
   border: 1px solid  #ccc;
   background: #fff;
`,
);
const MainFilterWrapper = styled('div')(
  () => `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: stretch;
  flex-direction: column;
  padding: 16px;
  border-top: 1px solid  #ccc;
  border-bottom: 1px solid  #ccc;
  border-right: 1px solid  #ccc;
`,
);


export default function Main() {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const {
    count,
    page,
    rowsPerPage,
    defaultLimits,
  } = useAppSelector((state) => state.paths);

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setRowsPerPage(parseInt(event.target.value, 10)))
    dispatch(setPage(0));
  };

  return (
    <MainWrapper>
      <MainHeader>
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

        <div>
          <IconButton sx={{ display: { sm: 'none', md: 'block' } }} onClick={() => setOpen(!open)}>
            {open ? <FilterListIcon /> : <ArrowBackIosIcon />}
          </IconButton>
        </div>


      </MainHeader>


      <MainTableAndFilterWrapper>
        <Grid container>
          <Grid item sm={12} md={open ? 9 : 12}>
            <MainTableWrapper>
              <Table />
              <Legend />
            </MainTableWrapper>
          </Grid>
          <Grid item xs={12} sm={12} md={3} sx={{ display: open ? 'block' : 'none' }}>
            <MainFilterWrapper>
              <Filter />
            </MainFilterWrapper>
          </Grid>

        </Grid>
      </MainTableAndFilterWrapper>
    </MainWrapper>
  );
}