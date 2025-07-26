'use client';

import { Drawer, Box, Typography, Button, Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

const fakeCartItems = [
  {
    id: 1,
    name: 'لگ ورزشی',
    price: 450000,
    image: '/images/product1.jpg',
    quantity: 1,
  },
  {
    id: 2,
    name: 'کراپ تاپ',
    price: 290000,
    image: '/images/product2.jpg',
    quantity: 2,
  },
];

export default function CartDrawer({ open, onClose }) {
  const total = fakeCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 320,
          p: 2,
          fontFamily: 'Vazir, sans-serif',
          direction: 'rtl',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          {/* Header */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">سبد خرید</Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Product Items */}
          {fakeCartItems.map((item) => (
            <Box key={item.id} display="flex" mb={2} alignItems="center">
              <Image src={item.image} width={60} height={60} alt={item.name} />
              <Box mr={2}>
                <Typography fontSize="1rem">{item.name}</Typography>
                <Typography fontSize="0.9rem" color="gray">
                  {item.quantity} عدد - {item.price.toLocaleString()} تومان
                </Typography>
              </Box>
            </Box>
          ))}

          <Divider sx={{ my: 2 }} />

          {/* Total */}
          <Typography fontWeight="bold" mb={2}>
            مجموع: {total.toLocaleString()} تومان
          </Typography>
        </Box>

        {/* Buttons */}
        <Box display="flex" flexDirection="column" gap={1}>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#000', color: '#fff', borderRadius: '8px' }}
            fullWidth
          >
            مشاهده سبد خرید
          </Button>
          <Button
            variant="outlined"
            sx={{ borderColor: '#000', color: '#000', borderRadius: '8px' }}
            fullWidth
          >
            تسویه حساب
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
