import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const CallToActionButton = ({ emailAddress = "contact@example.com", subject = "Pre-order Inquiry", buttonText = "Pre-order Now" }) => {
  const handleButtonClick = () => {
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Ready to take the next step?
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleButtonClick}
        style={{ marginTop: '10px' }}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default CallToActionButton;
