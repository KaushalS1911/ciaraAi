import {Button, styled} from '@mui/material';

const CustomButton = styled(Button)(({theme, variant}) => ({
    backgroundColor: '#334155',
    color: 'white',
    borderRadius: 6,
    fontSize: 14,
    padding: '8px 16px',
    textTransform: 'capitalize',
    '&:hover': {
        backgroundColor: '#0F172A',
    },
    ...(variant === 'outlined' && {
        borderColor: '#F1F1F1',
    padding: '8px 16px',
    borderRadius: 6,
        backgroundColor: '#fff',
        color: '#0F172A',
        fontSize: 12,
        '&:hover': {
            borderColor: '#D0D5DD',
            backgroundColor: '#f6f6f6',
            color: '#0F172A'
        },
    }),
}));

export default CustomButton;
