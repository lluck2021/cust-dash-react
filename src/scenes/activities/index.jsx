import React from 'react';
import { useTheme } from '@mui/material/styles'; 
import { Typography, Container } from '@mui/material';
import UserActivities from '../../components/UserActivities/UserActivities'; 
import { tokens } from '../../theme'; 

const Activities = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Container>
            <Typography variant="h2" color={colors.secondary?.[200] || '#000'}>
                Activities
            </Typography>
            <UserActivities />
        </Container>
    );
};

export default Activities;