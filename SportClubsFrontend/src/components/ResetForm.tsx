import {
    Button,
    TextField,
    Box,
    Typography,
    Container,
    Link,
  } from '@mui/material';

const sxTitleTypography = { letterSpacing: 0.25, fontSize: 20, fontWeight: 500};
const sxSubtitleTypography ={ fontWeight: 500, fontSize:16};
const sxBoxOne = {
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    padding: '25px',
    borderRadius: 5,
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const sxSubmitButton = {
    mt: 3,
    mb: 2,
    background: '#4741DE',
    letterSpacing: 1.25,
  };

export default function ResetForm(){
    return(
        <Container component="main" maxWidth="xs">
            <Box sx={sxBoxOne}>
                <Typography component="h1" variant="h5" sx={sxTitleTypography}>
                    Reset password
                </Typography>
                <Typography component="p" color="#888888" sx={sxSubtitleTypography} >You will receive an e-mail in maximum 60 seconds</Typography>
                <Box component="form">
                    <TextField
                    size="small"
                    margin="normal"
                    required
                    fullWidth
                    label="Email Adress"
                    name="email"
                    autoComplete="email"

                    />
                    <Button type="submit"
                    fullWidth
                    variant="contained"
                    sx={sxSubmitButton}
                    />

                </Box>

            </Box>
        </Container>
    )
}

