import React from 'react'
import { Box, Stack, TextField, Tooltip, Fab, InputAdornment, IconButton } from '@mui/material'
import { Chat_Footer } from '../../data'
import { useTheme, styled } from '@mui/material/styles'
import { LinkSimple, Smiley } from 'phosphor-react'

const StyledInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    paddingTop: '12px !important',
    paddingBottom: '12px !important'
  }
}))

const ChatInput = () => {
  return (
    <StyledInput
      fullWidth
      placeholder='Write a message...'
      variant='filled'
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: 'auto' }}>
            <Stack sx={{ position: 'relative', display: 'inline-block' }}>
              {Chat_Footer.map((ele) => (
                <Tooltip placement='right' title={ele.title} key={`footer-${ele.index}`}>
                  <Fab sx={{ position: 'absolute', top: -ele.y, bgcolor: ele.color }} aria-label='add'>
                    {ele.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment>
              <IconButton>
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <Stack sx={{ position: 'relative' }}>
            <InputAdornment>
              <IconButton>
                <Smiley />
              </IconButton>
            </InputAdornment>
          </Stack>
        )
      }}
    />
  )
}

const Footer = () => {
  return (
    <Box sx={{ position: 'relative', bgcolor: 'transparent !important' }}>
      <Box
        p={2}
        sx={{
          width: '100%',
          height: 100,
          bgcolor: '#F8FAFF',
          boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)'
        }}
      >
        <Stack direction='row' sx={{ alignItems: 'center' }} spacing={3}>
          <Stack sx={{ width: '100%' }}>
            <Box>{/* emoji */}</Box>
            <ChatInput />
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

export default Footer
