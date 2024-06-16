import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material';
import classes from './Pagination.module.scss';

const theme = createTheme({
    palette: {
        primary: {
            main: "#f6a5a5",
        }
    }
})

type Props = {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    loading: boolean;
    totalPages: number;
}

const PaginationUI = ({ currentPage, loading, setCurrentPage, totalPages }: Props) => {
    return (

        <div className={classes.products__pagination}>

            <ThemeProvider theme={theme} >
                <Stack spacing={2}>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        color="primary"
                        onChange={(event, page) => setCurrentPage(page)}
                        disabled={loading}
                    />
                </Stack>
            </ThemeProvider>
        </div>
    )
}

export default PaginationUI;