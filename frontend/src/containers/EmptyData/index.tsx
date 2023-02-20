import { Button } from "@mui/material";
import { useTranslation } from "react-i18next"

const EmptyTableData = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div
                style={{ textAlign: "center" }}
            >{t('No results Try adjusting your search by removing filters')}</div>
            {/* <Button>Clean</Button> */}
        </div>
    )
}

export default EmptyTableData