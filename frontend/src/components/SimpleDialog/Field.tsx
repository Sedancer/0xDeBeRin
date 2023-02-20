import { IconButton, ListItem, ListItemButton, ListItemText } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import useCopy from 'use-copy';

interface DonateFieldProps {
    name: string;
    value: string;
}

function DonateField(props: DonateFieldProps) {
    const { name, value } = props;
    const [copied, copy, setCopied] = useCopy(value);

    const copyText = () => {
        copy();
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    return (
     <ListItem
            secondaryAction={
                <IconButton
                    onClick={copyText}
                    edge="end"
                    aria-label="copy">
                    <ContentCopyIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton onClick={copyText} dense>
                <ListItemText primary={`${name}: ${value}`} />
            </ListItemButton>
        </ListItem>
    )
}

export default DonateField