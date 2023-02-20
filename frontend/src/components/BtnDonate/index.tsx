import { Button } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import './style.css'


const BtnDonate = (props: { text: any; onClick: any; }) => {
    const {
        text,
        onClick
    } = props;
    return (
        <Button
            onClick={onClick}
            className="Btn__Donate"
            variant="text"
            startIcon={<FavoriteIcon />}>
            {text}
        </Button>
    )
}

export default BtnDonate