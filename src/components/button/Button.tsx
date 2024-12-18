import { Button, styled } from '@mui/material';

const CustomButton = styled(Button)(({ theme, variant }) => ({
    backgroundColor: '#334155',
    color: 'white',
    textTransform: 'capitalize',
    '&:hover': {
        backgroundColor: '#0F172A',
    },
    ...(variant === 'outlined' && {
        borderColor: '#F1F1F1',
        backgroundColor: '#fff',
        color: '#0F172A',
        fontSize:12,
        '&:hover': {
            backgroundColor: '#f6f6f6',
            color:'#0F172A'
        },
    }),
}));

export default CustomButton;
