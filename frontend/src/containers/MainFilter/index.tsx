import { Button, styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { AppDispatch, useAppSelector } from "@/store";
import Exchange from '@/components/Exchange';
import { useDispatch } from 'react-redux';
import { onApplyClick, setCoins, setExchanges } from '@/store/filters';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Filters = () => {
    const { t } = useTranslation();
    const { coins, exchange, filters } = useAppSelector((state) => state);
    const dispatch = useDispatch<AppDispatch>();
    
    const { isFilterApply } = filters;

    const handleClickApply = () => dispatch(onApplyClick());
 
    const handleClickClearFilter = () => { };

    const HeaderBlockFilters = styled('div')(
        () => `
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 8px;
        margin-bottom: 8px;
      `,
    );

    const TitleFilter = styled('div')(
        () => `
        font-size: 16px;
        font-weight: bold;
      `,
    );

    const onChangeExchange = (event: any, newValue: any | null) => {
        dispatch(setExchanges(newValue))
    };

    const onChangeCoins = (event: any, newValue: any | null) => {
        dispatch(setCoins(newValue))
    };


    return (
        <div className="root">
            <HeaderBlockFilters>
                <TitleFilter>{t('Filters')}</TitleFilter>
                <Button
                    disabled
                    sx={{ fontSize: 10, color: '#0072E5' }}
                    onClick={handleClickClearFilter}
                >
                    {t('clear all filters')}
                </Button>
            </HeaderBlockFilters>
            <Autocomplete
                multiple
                onChange={onChangeExchange}
                id="exchange-tags"
                sx={{ marginBottom: '16px' }}
                options={exchange.data}
                disableCloseOnSelect
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        <Exchange exchange={option} />
                    </li>
                )}
                renderInput={(params) => (
                    <TextField {...params} label={t('Exchange')} />
                )}
            />
            <Autocomplete
                multiple
                id="coins-tags"
                sx={{ marginBottom: '16px' }}
                options={coins.data}
                disableCloseOnSelect
                onChange={onChangeCoins}
                renderOption={(props, option, { selected }) => (
                    <li
                        key={option}
                        {...props}
                    >
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option}
                    </li>
                )}
                renderInput={(params) => (
                    <TextField {...params} label={t('Coin')} />
                )}
            />
            <div>
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ marginTop: '16px' }}
                    disabled={isFilterApply}
                    onClick={handleClickApply}
                >
                    {t('Apply')}
                </Button>
            </div>
        </div>
    );
};

export default Filters;
